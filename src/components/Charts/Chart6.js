import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from "recharts";

const Chart3 = () => {
  const data = [
    {
      name: "Monday ",
      Amount: 12,
    },
    {
      name: "Tuesday",
      Amount: 10,
    },
    {
      name: "Wednesday",
      Amount: 6,
    },
    {
      name: "Thursday",
      Amount: 4,
    },
    {
      name: "Friday",
      Amount: 10,
    },
    {
      name: "Saturday",
      Amount: 7,
    },
    {
      name: "Sunday",
      Amount: 9,
    },
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      <p>Contributions</p>
      <div className="flex flex-row gap-[8px]">
        <img src="/icons/contributions.svg" className="h-[42px]" alt="" />
        <span className="font-bold text-[32px]">36</span>
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

export default Chart3;
