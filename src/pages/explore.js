import React from "react";
import slugify from "slugify";
import Link from "next/link";
import SearchBar from "../components/Functional/SearchBar";
import SideBar from "../components/Functional/SideBar";
import DatasetCard from "../components/Cards/DatasetCard";
import datasets from "../data/datasets";

const Explore = () => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <SearchBar />
      <div className="flex flex-row w-full mt-[30px] gap-[60px]">
        <SideBar />
        <div className="flex flex-col gap-[25px]">
          {datasets.map((dataset) => (
            <Link
              href={`/dataset/${slugify(dataset.name, { lower: true })}`}
              key={dataset.name}
            >
              <DatasetCard
                key={dataset.name}
                name={dataset.name}
                category={dataset.category}
                description={dataset.description}
                type={dataset.type}
                price={dataset.price}
                users={dataset.users}
                files={dataset.files}
                forks={dataset.forks}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
