import React, { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import * as Popover from "@radix-ui/react-popover";

fcl
  .config()
  .put("accessNode.api", "https://access-testnet.onflow.org")
  .put("challenge.handshake", "https://flow-wallet-testnet.blocto.id")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn");

export default function App() {
  const [user, setUser] = useState(null);

  const checkUser = () => {
    const unsub = fcl.currentUser().subscribe((user) => {
      setUser(user);
    });
    return unsub;
  };

  useEffect(() => {
    const unsub = checkUser();
    return () => unsub();
  }, []);

  const login = () => {
    fcl.authenticate();
  };

  const logout = () => {
    fcl.unauthenticate();
  };

  return (
    <div className="">
      {!user?.loggedIn ? (
        <button
          onClick={login}
          className="btn connect-button px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      ) : (
        <Popover.Root>
          <Popover.Trigger>
            <button className="btn connect-button px-4 py-2 bg-red-500 text-white rounded">
              {user?.addr ?? "mysterious user"}
            </button>
          </Popover.Trigger>
          <Popover.Content>
            <div className="flex flex-col gapp-[20px]">
              <button
                onClick={logout}
                className="btn btn-primary bg-primary h-[48px] w-[192px] font-bold text-white mt-[10px]"
              >
                Disconnect Wallet
              </button>
              <a
                href="https://flowscan.org/account/0xecfad18ba9582d4f"
                target="_blank"
                className="btn btn-primary btn-outline h-[48px] w-[192px] font-bold text-white mt-[10px]"
              >
                Flow Scan
              </a>
            </div>
          </Popover.Content>
        </Popover.Root>
      )}
    </div>
  );
}
