import React from "react";

const SideBar = () => {
  return (
    <div className="w-[350px]">
      <div className="space-y-2">
        <details
          className="group overflow-hidden rounded-xl border-2 border-[#B8B8FF] [&_summary::-webkit-details-marker]:hidden w-[350px]"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
            <span className="text-sm font-medium"> Category </span>

            <span className="transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="border-t border-[#B8B8FF] bg-white">
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="image"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="image"
                    className="h-5 w-5 rounded border-gray-300 checkbox checkbox-primary"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Image
                  </span>
                </label>
              </li>

              <li>
                <label htmlFor="csv" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="csv"
                    className="h-5 w-5 rounded border-gray-300 checkbox checkbox-primary"
                  />

                  <span className="text-sm font-medium text-gray-700">CSV</span>
                </label>
              </li>

              <li>
                <label htmlFor="pdf" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="pdf"
                    className="h-5 w-5 rounded border-gray-300 checkbox checkbox-primary"
                  />

                  <span className="text-sm font-medium text-gray-700">PDF</span>
                </label>
              </li>
            </ul>
          </div>
        </details>

        <details
          className="group overflow-hidden rounded-xl border-2 border-[#B8B8FF] [&_summary::-webkit-details-marker]:hidden w-[350px]"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
            <span className="text-sm font-medium"> Price </span>

            <span className="transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="border-t border-[#B8B8FF] bg-white">
            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between gap-4">
                <label
                  htmlFor="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <img
                    src="/icons/royale-coin.svg"
                    className="w-[30px]"
                    alt=""
                  />

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>

                <label
                  htmlFor="FilterPriceTo"
                  className="flex items-center gap-2"
                >
                  <img
                    src="/icons/royale-coin.svg"
                    className="w-[30px]"
                    alt=""
                  />
                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
        </details>

        <details
          className="group overflow-hidden rounded-xl border-2 border-[#B8B8FF] [&_summary::-webkit-details-marker]:hidden w-[350px]"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
            <span className="text-sm font-medium"> Numbers </span>

            <span className="transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="border-t border-[#B8B8FF] bg-white p-4">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[10px] ">
                <span className="text-[14px]">Contributors</span>
                <input
                  type="range"
                  min={0}
                  max="100"
                  className="range range-primary range-xs"
                  step="25"
                />
              </div>
              <div className="flex flex-col gap-[10px] ">
                <span className="text-[14px]">Files</span>
                <input
                  type="range"
                  min={0}
                  max="100"
                  className="range range-primary range-xs"
                  step="75"
                />
              </div>
              <div className="flex flex-col gap-[10px] ">
                <span className="text-[14px]">Forks</span>
                <input
                  type="range"
                  min={0}
                  max="100"
                  className="range range-primary range-xs"
                  step="0"
                />
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default SideBar;
