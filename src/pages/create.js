import React, { useState } from "react";
import { Step1, Step2, Step3, Step4 } from "../components/Steps";

const Create = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { label: "About", content: <Step1 /> },
    { label: "Rules", content: <Step2 /> },
    { label: "Add Data", content: <Step3 /> },
    { label: "Confirm", content: <Step4 /> },
  ];

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onFinish = () => {
    console.log("Finish Clicked"); // Replace this with your onFinish logic
  };

  return (
    <div className="flex flex-col gap-[20px]">
      <ul className="steps">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step ${currentStep >= index ? "step-primary" : ""}`}
          >
            {step.label}
          </li>
        ))}
      </ul>
      <div className="step-content rounded-xl bg-white p-4 ring ring-indigo-50 w-[800px] h-[674px] m-auto">
        {steps[currentStep].content}
      </div>
      <div className="navigation-buttons flex flex-row gap-[50px] justify-end w-[800px] m-auto">
        {currentStep > 0 && (
          <button
            className="btn btn-outline btn-primary rounded-xl"
            onClick={goPrev}
          >
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button
            className="btn btn-outline btn-primary rounded-xl"
            onClick={goNext}
          >
            Next
          </button>
        )}
        {currentStep === steps.length - 1 && (
          <button
            className="btn btn-outline btn-primary rounded-xl"
            onClick={onFinish}
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Create;
