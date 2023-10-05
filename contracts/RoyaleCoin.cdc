// RoyaleCoin.cdc

pub contract RoyaleCoin {

    // Define the resource that represents the token.
    pub resource RoyaleCoin {
        pub var balance: UFix64

        // Initialize the token with an initial balance.
        init(initialBalance: UFix64) {
            self.balance = initialBalance
        }

        // Transfer tokens to another account.
        pub fun transfer(to: &AnyResource{RoyaleCoin.Receiver}, amount: UFix64) {
            pre {
                self.balance >= amount: "Insufficient balance"
            }

            // Subtract the amount from the sender's balance and add it to the receiver's balance.
            self.balance = self.balance - amount
            to.deposit(amount: amount)
        }

        // Deposit tokens to the account.
        pub fun deposit(amount: UFix64) {
            self.balance = self.balance + amount
        }
    }

    // Define a public interface for receiver capability.
    pub resource interface Receiver {
        pub fun deposit(amount: UFix64)
    }

    // Define a public interface for provider capability.
    pub resource interface Provider {
        pub fun withdraw(amount: UFix64): @RoyaleCoin
    }

    // Minting function that creates new tokens.
    pub fun mint(royaleCoins: @RoyaleCoin, to: &AnyResource{RoyaleCoin.Receiver}) {
        to.deposit(amount: royaleCoins.balance)
        destroy royaleCoins
    }

    // Public capability to check the balance of an account.
    pub fun getBalance(account: address): UFix64 {
        return getAccount(account)
            .getCapability<&RoyaleCoin{Receiver, Provider}>(/public/royaleCoinReceiver)
            .borrow()
            ?.balance ?? 0.0
    }

    // Resource that allows the owner to mint new tokens.
    pub resource Minter {
        // Mint tokens and send them to the `recipient`.
        pub fun mint(recipient: &AnyResource{RoyaleCoin.Receiver}, amount: UFix64) {
            RoyaleCoin.mint(royaleCoins: <-create RoyaleCoin(initialBalance: amount), to: recipient)
        }
    }

    // Only the admin can mint new tokens.
    access(account) var admin: PublicAccount

    init(admin: PublicAccount) {
        // Only the admin can mint new tokens.
        self.admin = admin

        // Allow the admin to mint new tokens by publishing a `Minter` resource to their account.
        self.admin.save(<-create Minter(), to: /storage/royaleCoinMinter)
        self.admin.link<&Minter>(/public/royaleCoinMinter, target: /storage/royaleCoinMinter)
    }
}
