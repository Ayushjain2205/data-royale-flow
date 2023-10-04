import React, { useState } from "react";
import FileSelect from "../Functional/FileSelect";
import Loader from "../UI/Loader";
import { successToast } from "../../helpers/showToast";

const GenerateContent = ({ type }) => {
  const [category, setCategory] = useState("");
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
      <div className="form-control">
        <label className="label">
          <span className="label-text text-[16px]">Select files</span>
        </label>
        <FileSelect type={type} />
      </div>

      <div className="form-control mt-4">
        <span className="label-text text-[16px] mb-2 block">
          Choose category
        </span>
        <label className="cursor-pointer inline-flex items-center mr-3 text-[20px]">
          <input
            type="radio"
            name="category"
            className="mr-2"
            value="Generate summary"
            onChange={(e) => setCategory(e.target.value)}
          />
          Generate action items
        </label>
        <label className="cursor-pointer inline-flex items-center mr-3 text-[20px]">
          <input
            type="radio"
            name="category"
            className="mr-2"
            value="Generate 10 key points"
            onChange={(e) => setCategory(e.target.value)}
          />
          Generate 10 key points
        </label>
        <label className="cursor-pointer inline-flex items-center mr-3 text-[20px]">
          <input
            type="radio"
            name="category"
            className="mr-2"
            value="Generate flash card"
            onChange={(e) => setCategory(e.target.value)}
          />
          Generate flash card
        </label>
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

export default GenerateContent;
