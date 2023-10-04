import React from "react";
import { useDropzone } from "react-dropzone";

const Step3 = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <li
      className="flex flex-row items-center gap-[10px] mt-[10px]"
      key={file.path}
    >
      <img src="/icons/file-uploaded.svg" className="h-[30px]" alt="" />
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <div className="flex flex-col gap-[20px]">
      <h4 className="text-[32px]">Add Data</h4>
      <div
        {...getRootProps({
          className:
            "dropzone flex flex-col mx-auto items-center justify-center border border-dashed border-[#9381FF] rounded-xl h-[250px] w-[550px]",
        })}
      >
        <input {...getInputProps()} />
        <img src="/images/file-upload.svg" className="h-[50px]" alt="" />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div className="mx-auto h-[200px] overflow-scroll">
        <ul className="mt-[20px]">{files}</ul>
      </div>
      {acceptedFiles.length > 0 && (
        <button className="btn btn-outline btn-primary rounded-xl mx-auto mt-[10px] w-[550px]">
          Upload
        </button>
      )}
    </div>
  );
};

export default Step3;
