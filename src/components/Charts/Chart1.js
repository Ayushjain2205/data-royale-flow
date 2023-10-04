import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis } from "recharts";

const Chart1 = () => {
  const data = [
    {
      name: "Monday ",
      Amount: 24,
    },
    {
      name: "Tuesday",
      Amount: 13,
    },
    {
      name: "Wednesday",
      Amount: 98,
    },
    {
      name: "Thursday",
      Amount: 39,
    },
    {
      name: "Friday",
      Amount: 48,
    },
    {
      name: "Saturday",
      Amount: 38,
    },
    {
      name: "Sunday",
      Amount: 43,
    },
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      <p>Total Revenue</p>
      <div className="flex flex-row gap-[8px]">
        <img src="/icons/royale-coin.svg" className="h-[42px]" alt="" />
        <span className="font-bold text-[32px]">480</span>
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

export default Chart1;
