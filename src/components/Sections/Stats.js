import React from "react";
import { Chart1, Chart2, Chart3, Chart4, Chart5, Chart6 } from "../Charts";

const Stats = () => {
  const charts = [Chart1, Chart2, Chart3, Chart4, Chart5, Chart6];

  return (
    <div className="grid grid-cols-3 gap-[40px] my-[40px]">
      {charts.map((ChartComponent, index) => (
        <div
          key={index}
          className="rounded-xl bg-white p-4 ring ring-indigo-50 w-[334px] h-[225px]"
        >
          <ChartComponent />
        </div>
      ))}
    </div>
  );
};

export default Stats;
