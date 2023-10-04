import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from "recharts";

const Chart4 = () => {
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
      Amount: 26,
    },
    {
      name: "Thursday",
      Amount: 34,
    },
    {
      name: "Friday",
      Amount: 20,
    },
    {
      name: "Saturday",
      Amount: 37,
    },
    {
      name: "Sunday",
      Amount: 19,
    },
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      <p>AI actions</p>
      <div className="flex flex-row gap-[8px]">
        <img src="/icons/ai-actions.svg" className="h-[42px]" alt="" />
        <span className="font-bold text-[32px]">117</span>
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

export default Chart4;
