import React, { useState } from "react";
import FileSelect from "../Functional/FileSelect";
import Loader from "../UI/Loader";
import { successToast } from "../../helpers/showToast";

const ImagePrompt = ({ type }) => {
  const [buttonState, setButtonState] = useState("initial"); // "initial", "generating", "download"
  const [showImage, setShowImage] = useState(false);

  const handleGenerateClick = () => {
    setButtonState("generating");
    setTimeout(() => {
      setButtonState("download");
      setShowImage(true);
      successToast("Image generated.");
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

      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text text-[16px]">Add a prompt</span>
        </label>
        <textarea
          type="text"
          lines={2}
          placeholder="Type here"
          className="textarea w-full ring ring-indigo-50 outline-none focus:outline-none text-[16px]"
        />
      </div>

      {showImage && (
        <div className="flex flex-row justify-center">
          <img
            src="https://i.ibb.co/mHpqzrR/scenery-in-greenland.png"
            className="h-[300px] mt-[30px]"
            alt=""
          />
        </div>
      )}

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
          className="btn btn-active btn-primary w-full rounded-xl mt-[64px]"
          onClick={() => successToast("Download successful")}
        >
          Download <i className="fa-solid fa-file-arrow-down"></i>
        </button>
      )}

      {buttonState === "generating" && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center z-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ImagePrompt;
