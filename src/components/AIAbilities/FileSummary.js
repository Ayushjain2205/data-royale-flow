import React, { useState } from "react";
import FileSelect from "../Functional/FileSelect";
import Loader from "../UI/Loader";
import { successToast } from "../../helpers/showToast";

const FileSummary = ({ type }) => {
  const [buttonState, setButtonState] = useState("initial"); // "initial", "generating", "download"

  const handleGenerateClick = () => {
    setButtonState("generating");
    setTimeout(() => {
      setButtonState("download");
      successToast("File generated.");
    }, 3000);
  };

  return (
    <div className="relative h-full">
      <div className="form-control mb-[150px]">
        <label className="label">
          <span className="label-text text-[16px]">Select files</span>
        </label>
        <FileSelect type={type} />
      </div>

      {buttonState === "initial" && (
        <button
          className="btn btn-outline btn-primary w-full rounded-xl mt-[64px]"
          onClick={handleGenerateClick}
        >
          Generate
        </button>
      )}

      {buttonState === "generating" && (
        <button
          className="btn btn-outline btn-primary w-full rounded-xl mt-[64px]"
          disabled
        >
          Generating... <span className="loading loading-spinner"></span>
        </button>
      )}

      {buttonState === "download" && (
        <button
          className="btn btn-active btn-primary w-full rounded-xl mt-4"
          onClick={() => successToast("Download successful")}
        >
          Download <i className="fa-solid fa-file-arrow-down"></i>
        </button>
      )}

      {/* Loader Overlay */}
      {buttonState === "generating" && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center z-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default FileSummary;
