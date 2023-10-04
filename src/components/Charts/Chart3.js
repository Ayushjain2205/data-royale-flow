import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis } from "recharts";

const Chart6 = () => {
  const data = [
    {
      name: "Monday ",
      Amount: 30,
    },
    {
      name: "Tuesday",
      Amount: 32,
    },
    {
      name: "Wednesday",
      Amount: 21,
    },
    {
      name: "Thursday",
      Amount: 49,
    },
    {
      name: "Friday",
      Amount: 28,
    },
    {
      name: "Saturday",
      Amount: 18,
    },
    {
      name: "Sunday",
      Amount: 43,
    },
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      <p>Downloads</p>
      <div className="flex flex-row gap-[8px]">
        <img src="/icons/downloads.svg" className="h-[42px]" alt="" />
        <span className="font-bold text-[32px]">180</span>
      </div>
      <div className="h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={302} height={100} data={data}>
            <Tooltip />
            <XAxis dataKey="name" hide={true} />
            <Line type="monotone" dataKey="Amount" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart6;
