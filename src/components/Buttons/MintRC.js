import React, { useState } from "react";
import { useSigner, useAddress } from "@thirdweb-dev/react";
import abi from "../../abi/RoyalCoin";
import { ethers } from "ethers";
import { successToast, errorToast } from "../../helpers/showToast";

const contractAddress = "0xDb499857812569403F0aA1036d453d30945C8751";

const MintRC = () => {
  const [inputValue, setInputValue] = useState(1000);
  const signer = useSigner();
  const address = useAddress();

  // Initialize the contract instance with the signer
  const contract = new ethers.Contract(contractAddress, abi, signer);

  // This function will be executed when the minting button is pressed
  const mintTokens = async () => {
    let to = address;
    const amount = ethers.utils.parseUnits(inputValue.toString(), 0);

    try {
      let tx = await contract.mint(to, amount);
      await tx.wait(); // Wait for the transaction to be mined
      successToast(`${amount} tokens added to your wallet`);
    } catch (error) {
      errorToast("Error buying tokens");
    }
  };

  return (
    <button
      onClick={mintTokens} // Linking the mintTokens function to the button
      className="btn btn-outline btn-primary rounded-xl w-full outline-none"
    >
      Buy 1000
      <img src="/icons/royale-coin.svg" className="h-[32px]" alt="" />
    </button>
  );
};

export default MintRC;
