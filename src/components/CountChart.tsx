"use client";

import Image from "next/image";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 1566,
    fill: "white",
  },
  {
    name: "Girls",
    count: 877,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 689,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-sky rounded-full"></div>
          <h1 className="font-bold">1.225</h1>
          <h2 className="text-xs text-gray-300">Boys (57%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow rounded-full"></div>
          <h1 className="font-bold">1.225</h1>
          <h2 className="text-xs text-gray-300">Girls (43%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
