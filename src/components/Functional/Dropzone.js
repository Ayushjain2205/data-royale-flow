import React from "react";
import { useDropzone } from "react-dropzone";

const FileDrop = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li className="flex flex-row items-center gap-[10px]" key={file.path}>
      <img src="/icons/file-uploaded.svg" className="h-[30px]" alt="" />
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container mx-auto mt-[20px]">
      <div
        {...getRootProps({
          className:
            "dropzone flex flex-col mx-auto items-center justify-center border border-dashed border-[#9381FF] rounded-xl h-[250px] w-[780px]",
        })}
      >
        <input {...getInputProps()} />
        <img src="/images/file-upload.svg" className="h-[50px]" alt="" />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div className="mx-auto">
        <ul className="mt-[40px]">{files}</ul>
      </div>
      {acceptedFiles.length > 0 && (
        <button className="btn btn-outline btn-primary rounded-xl flex-end mt-[100px]">
          Upload
        </button>
      )}
    </section>
  );
};

export default FileDrop;
