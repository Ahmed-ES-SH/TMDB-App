"use client";
import { useVariables } from "@/app/context/VariablesContext";
import React from "react";

export default function TrendingHeader() {
  const { trendingState, setTrendingState } = useVariables();

  const btns = [
    {
      status: "shows",
      text: "Trending TV Shows",
      handle: () => setTrendingState("shows"),
    },
    {
      status: "movies",
      text: "Trending Movies",
      handle: () => setTrendingState("movies"),
    },
  ];

  return (
    <>
      <div className="xl:w-[90%] w-[95%] mx-auto mt-24 mb-4">
        <div className="flex items-center flex-wrap gap-4 w-fit  ml-auto">
          {btns.map((btn, index) => (
            <button
              onClick={btn.handle}
              key={index}
              className={`md:py-2 md:px-6 flex-1 p-2 whitespace-nowrap hover:border-primary_blue duration-300 text-white rounded-full text-center flex items-center justify-center  border border-gray-500 cursor-pointer ${
                trendingState == btn.status
                  ? "bg-sky-500 border-sky-600"
                  : "bg-thired_dash"
              }`}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
