import React from "react";

const CodeCard = ({ title, image, onClick }) => {
  return (
    <div
      className="flex flex-row items-center justify-between rounded-xl bg-white p-4 ring ring-indigo-50 cursor-pointer hover:bg-[#B8B8FF30]"
      onClick={onClick}
    >
      <div className="flex flex-row gap-[20px]">
        <img src={image} className="h-[35px]" alt={title} />
        <span className="text-[24px]">{title}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 -rotate-90"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default CodeCard;
