import React, { useEffect } from "react";
import { ConnectWallet, useAddress, useBalance } from "@thirdweb-dev/react";
import Link from "next/link";
import { ethers } from "ethers";
import MintRC from "../Buttons/MintRC";
import * as Popover from "@radix-ui/react-popover";
import { useRouter } from "next/router";
import Auth from "../Functional/Auth";

const Navbar = () => {
  const address = useAddress();
  const tokenAddress = "0xDb499857812569403F0aA1036d453d30945C8751";
  const { data, isLoading } = useBalance(tokenAddress);
  const router = useRouter();

  useEffect(() => {
    if (data && !isLoading) {
      console.log("Raw balance:", data.value.toString());
      console.log(
        "Token balance:",
        ethers.utils.formatUnits(data.value, data.decimals)
      );
    }
  }, [data, isLoading]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <>
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl text-primary hover:bg-white font-bold"
          >
            <img src="/data-royale-logo.svg" className="h-[40px]" alt="" />
            Data Royale
          </Link>
        </>
      </div>

      {router.pathname !== "/landing" && (
        <div className="flex-none gap-[40px] mx-[20px]">
          {address && data && (
            <Popover.Root>
              <Popover.Trigger asChild>
                <div className="flex flex-row gap-[8px] items-center cursor-pointer">
                  <span className="font-bold text-[20px] text-[#9381FF]">
                    {isLoading ? "Loading..." : data.value.toString()}
                  </span>
                  <img
                    src="/icons/royale-coin.svg"
                    className="w-[35px]"
                    alt=""
                  />
                </div>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade outline-none focus:outline-none"
                  sideOffset={5}
                >
                  <MintRC />
                  <Popover.Arrow className="fill-white" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          )}
          <Auth />
        </div>
      )}
    </div>
  );
};

export default Navbar;
