import React from "react";
import * as Switch from "@radix-ui/react-switch";

const Step2 = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h4 className="text-[32px]">Rules</h4>
      <div className="form-control w-2/3 ">
        <label className="label">
          <span className="label-text text-[16px]">Max file size in MB?</span>
        </label>
        <input
          type="number"
          placeholder="File Size"
          value={50}
          className="input input-bordered input-primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-1/3 ">
        <label className="label">
          <span className="label-text text-[16px]">AI actions:</span>
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-[20px]">Generate with Prompt</span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-[20px]">
            Generate similar images
          </span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-[20px]">Generate fusion images</span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>
      <div className="flex flex-col gap-[10px] w-1/3 ">
        <label className="label">
          <span className="label-text text-[16px]">Actions:</span>
        </label>
        <div className="flex flex-row justify-between pl-[3px]">
          <label className="text-[20px]">Allow Download</label>
          <Switch.Root className="w-[42px] h-[25px] rounded-full relative bg-[#9381FF30] data-[state=checked]:bg-[#9381FF] outline-none cursor-default">
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
        </div>
        <div className="flex flex-row justify-between pl-[3px]">
          <label className="text-[20px]">Allow Fork</label>
          <Switch.Root className="w-[42px] h-[25px] rounded-full relative bg-[#9381FF30] data-[state=checked]:bg-[#9381FF] outline-none cursor-default">
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
        </div>
        <div className="flex flex-row justify-between pl-[3px]">
          <label className="text-[20px]">Allow Contributions</label>
          <Switch.Root className="w-[42px] h-[25px] rounded-full relative bg-[#9381FF30] data-[state=checked]:bg-[#9381FF] outline-none cursor-default">
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
        </div>
        <div className="flex flex-row justify-between pl-[3px]">
          <label className="text-[20px]">Allow API Access</label>
          <Switch.Root className="w-[42px] h-[25px] rounded-full relative bg-[#9381FF30] data-[state=checked]:bg-[#9381FF] outline-none cursor-default">
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
        </div>
      </div>
    </div>
  );
};

export default Step2;
