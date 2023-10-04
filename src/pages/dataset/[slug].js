import React, { useState } from "react";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import slugify from "slugify";
import abi from "../../abi/RoyalCoin";
import { ethers } from "ethers";
import { useSigner, useAddress } from "@thirdweb-dev/react";
import ViewData from "../../components/Sections/ViewData";
import Stats from "../../components/Sections/Stats";
import Contribute from "../../components/Sections/Contribute";
import Code from "../../components/Sections/Code";
import AISwitch from "../../components/Sections/AISwitch";
import datasets from "../../data/datasets";
import StatsInfo from "../../components/Functional/StatsInfo";

const contractAddress = "0xDb499857812569403F0aA1036d453d30945C8751";

const BlurredOverlay = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md z-10 mt-[20px] rounded">
    <div className="flex flex-col gap-[10px] p-10 bg-white rounded-xl">
      <img src="/icons/locked.svg" className="h-[120px]" alt="" />
      <span className="text-2xl font-semibold">Buy to View</span>
    </div>
  </div>
);

const TabTrigger = ({ value, label }) => (
  <Trigger
    className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#9381FF] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current outline-none  cursor-pointer focus:outline-none"
    value={value}
  >
    {label}
  </Trigger>
);

const DataSetPage = ({
  dataset: { name, category, description, type, price, users, files, forks },
  bought,
}) => {
  const [isBought, setIsBought] = useState(bought || false);
  const signer = useSigner();
  const address = useAddress();

  // Initialize the contract instance with the signer
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const buyDatasetAccess = async () => {
    let to = address;
    const amount = ethers.utils.parseUnits("0", 0);

    try {
      let tx = await contract.mint(to, amount);
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };
  const tabsConfig = [
    { value: "tab1", label: "View Data", content: <ViewData type={type} /> },
    { value: "tab2", label: "AI Actions", content: <AISwitch type={type} /> },
    { value: "tab3", label: "Contribute", content: <Contribute /> },
    { value: "tab4", label: "Code", content: <Code /> },
    { value: "tab5", label: "Stats", content: <Stats /> },
  ];
  return (
    <div className="flex flex-row gap-[60px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[10px] w-[350px] rounded-xl p-4 ring ring-indigo-50 bg-[#B8B8FF40]">
          <div>
            <img
              src={`/icons/${type}.svg`}
              className="h-[200px] mb-[20px]"
              alt=""
            />
          </div>
          <p className="font-bold text-[20px]">{name}</p>
          <p>{description}</p>
          <div>
            <div className="flex flex-row justify-center w-[100px] rounded-xl border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-bold uppercase text-white">
              {category}
            </div>
          </div>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <StatsInfo label="Users" icon="fa-users" value={users} />

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <StatsInfo label="Files" icon="fa-file" value={files} />

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <StatsInfo label="Forks" icon="fa-code-fork" value={forks} />
          </div>
        </div>
        {isBought ? (
          <button className="btn btn-outline btn-primary rounded-xl">
            Fork with 100{" "}
            <img src="/icons/royale-coin.svg" className="h-[32px]" alt="" />
          </button>
        ) : (
          <button
            className="btn btn-outline btn-primary rounded-xl"
            onClick={() => {
              buyDatasetAccess();
              setTimeout(() => setIsBought(true), 7000);
            }}
          >
            Buy with {price}{" "}
            <img src="/icons/royale-coin.svg" className="h-[32px]" alt="" />
          </button>
        )}
      </div>
      <div className="rounded-xl p-4 ring ring-indigo-50">
        <Root className="flex flex-col w-[1100px]" defaultValue="tab1">
          <List
            className="shrink-0 flex border-b border-[#3d445110]"
            aria-label="Manage your account"
          >
            {tabsConfig.map((tab) => (
              <TabTrigger key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </List>
          {tabsConfig.map((tab) => (
            <Content
              key={tab.value}
              className="grow p-5 bg-white rounded-b-md outline-none max-h-[750px] overflow-scroll relative"
              value={tab.value}
            >
              {tab.content}
              {!isBought && <BlurredOverlay />}
            </Content>
          ))}
        </Root>
      </div>
    </div>
  );
};

export default DataSetPage;

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const dataset = datasets.find(
    (d) => slugify(d.name, { lower: true }) === slug
  );

  if (!dataset) {
    return {
      notFound: true,
    };
  }

  // Check for the 'bought' query parameter
  const bought = context.query.bought === "true";

  return {
    props: {
      dataset,
      bought,
    },
  };
}
