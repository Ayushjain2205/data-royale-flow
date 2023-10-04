import React, { useState } from "react";
import FileSelect from "../Functional/FileSelect";
import { successToast } from "../../helpers/showToast";
import Loader from "../UI/Loader";
import { Web3TokensPerformance } from "../Charts";

const CsvVisualisation = ({ type }) => {
  const [buttonState, setButtonState] = useState("initial");
  const [showWeb3Tokens, setShowWeb3Tokens] = useState(false);

  const handleGenerateClick = () => {
    setButtonState("generating");
    setTimeout(() => {
      setButtonState("download");
      successToast("Visualization generated.");
      setShowWeb3Tokens(true);
    }, 3000);
  };
  return (
    <div className="relative h-full">
      <div className="form-control mb-[20px]">
        <label className="label">
          <span className="label-text text-[16px]">Select files</span>
        </label>
        <FileSelect type={type} />
      </div>
      <div className="form-control mb-[20px]">
        <label className="label">
          <span className="label-text text-[16px]">Select Visualization</span>
        </label>
        <div className="custom-select-wrapper">
          <select className="custom-select select w-full ring ring-indigo-50 rounded-xl outline-none focus:outline-none">
            <option disabled selected>
              What visualisation to generate?
            </option>
            <option>Bar Chart</option>
            <option>Pie Chart</option>
            <option>Radar Chart</option>
            <option>Scatter Plot</option>
          </select>
          <span className="custom-select-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <button
          className="btn btn-outline btn-primary w-full rounded-xl mt-[64px]"
          onClick={handleGenerateClick}
        >
          Generate
        </button>
      </div>
      {showWeb3Tokens && <Web3TokensPerformance />}
      {buttonState === "generating" && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center z-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default CsvVisualisation;
