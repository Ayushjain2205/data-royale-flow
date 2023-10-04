import React from "react";
import StatsInfo from "../Functional/StatsInfo";

const DatasetCard = ({
  name,
  category,
  description,
  type,
  price,
  users,
  files,
  forks,
}) => {
  return (
    <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 w-[1200px]">
      <div className="flex items-start sm:gap-8">
        <img src={`/icons/${type}.svg`} className="h-[100px]" alt={type} />

        <div>
          <div className="flex flex-row justify-center w-[100px] rounded-xl border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-bold uppercase text-white">
            {category}
          </div>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            <a href="" className="">
              {name}
            </a>
          </h3>

          <p className="mt-1 text-sm text-gray-700">{description}</p>

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
        <div className="flex flex-col items-center gap-[5px]">
          <img src="/icons/royale-coin.svg" className=" w-[60px]" alt="" />
          <span className="font-bold">{price}</span>
        </div>
      </div>
    </article>
  );
};

export default DatasetCard;
