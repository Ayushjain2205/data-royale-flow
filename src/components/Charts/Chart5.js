import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from "recharts";

const Chart5 = () => {
  const data = [
    {
      name: "Monday ",
      Amount: 82,
    },
    {
      name: "Tuesday",
      Amount: 110,
    },
    {
      name: "Wednesday",
      Amount: 68,
    },
    {
      name: "Thursday",
      Amount: 104,
    },
    {
      name: "Friday",
      Amount: 45,
    },
    {
      name: "Saturday",
      Amount: 37,
    },
    {
      name: "Sunday",
      Amount: 89,
    },
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      <p>API calls</p>
      <div className="flex flex-row gap-[8px]">
        <img src="/icons/api-calls.svg" className="h-[42px]" alt="" />
        <span className="font-bold text-[32px]">401</span>
      </div>
      <div className="h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={302} height={100} data={data}>
            <Tooltip />
            <XAxis dataKey="name" hide={true} />
            <Bar type="monotone" dataKey="Amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart5;
