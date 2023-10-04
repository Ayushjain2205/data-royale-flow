import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-[720px]">
      <input
        type="text"
        placeholder="Search datasets"
        className="input input-bordered border-2 border-[#B8B8FF] input-primary w-full focus:outline-none pl-4 pr-10 rounded-xl"
      />
      <i className="fa-solid fa-magnifying-glass absolute top-1/2 transform -translate-y-1/2 right-5 text-[#B8B8FF]"></i>
    </div>
  );
};

export default SearchBar;
