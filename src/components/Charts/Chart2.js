import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis } from "recharts";

const Chart2 = () => {
  const data = [
    {
      name: "Monday ",
      Amount: 2,
    },
    {
      name: "Tuesday",
      Amount: 1,
    },
    {
      name: "Wednesday",
      Amount: 3,
    },
    {
      name: "Thursday",
      Amount: 4,
    },
    {
      name: "Friday",
      Amount: 8,
    },
    {
      name: "Saturday",
      Amount: 9,
    },
    {
      name: "Sunday",
      Amount: 3,
    },
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      <p>New Users</p>
      <div className="flex flex-row gap-[8px]">
        <img src="/icons/new-users-icon.svg" className="h-[42px]" alt="" />
        <span className="font-bold text-[32px]">12</span>
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

export default Chart2;
