pub contract DataRoyale {
    
    pub struct Dataset {
        pub var owner: Address
        pub var description: String
        pub var price: UFix64
        pub var totalEarned: UFix64
        pub var dataLinks: [String]
        
        init(owner: Address, description: String, price: UFix64, initialDataLinks: [String]) {
            self.owner = owner
            self.description = description
            self.price = price
            self.totalEarned = 0.00
            self.dataLinks = initialDataLinks
        }
    }

    pub resource DatasetOwner {
        pub var datasets: {UInt64: Dataset}

        init() {
            self.datasets = {}
        }

        pub fun uploadDataset(description: String, price: UFix64, initialDataLinks: [String]): UInt64 {
            let newID: UInt64 = UInt64(self.datasets.length) + UInt64(1 as UInt64)
            self.datasets[newID] = Dataset(owner: self.owner!.address, description: description, price: price, initialDataLinks: initialDataLinks)
            return newID
        }
    }
    
    init() {
        // Initialize contract
    }

    pub fun createDatasetOwner(): @DatasetOwner {
        return <-create DatasetOwner()
    }
    
    pub fun buyDatasetAccess(dataset: &Dataset, paymentAmount: UFix64) {
        pre {
            paymentAmount == dataset.price: "Incorrect FLOW amount sent"
        }
    }

 
}
