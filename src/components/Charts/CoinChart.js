import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from "recharts";

const Web3TokensPerformance = () => {
  const data = [
    {
      name: "ETH",
      percentage: 35,
    },
    {
      name: "DOT",
      percentage: 40,
    },
    {
      name: "ADA",
      percentage: 25,
    },
    {
      name: "BNB",
      percentage: 45,
    },
    {
      name: "SOL",
      percentage: 15,
    },
    {
      name: "UNI",
      percentage: 25,
    },
    {
      name: "LINK",
      percentage: 30,
    },
  ];

  return (
    <div className="flex flex-col gap-[10px]">
      <p>Top Performing Web3 Tokens</p>
      <div className="flex flex-row gap-[8px]">
        <span className="font-bold text-[32px]">Top 7</span>
      </div>
      <div className="h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={302} height={100} data={data}>
            <Tooltip />
            <XAxis dataKey="name" hide={true} />
            <Bar type="monotone" dataKey="percentage" fill="#8884d8" />{" "}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Web3TokensPerformance;
