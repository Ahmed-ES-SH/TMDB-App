import React from "react";
// import TrendingDataShow from "./TrendingDataShow";
import TrendingHeader from "../../_client/TrendingHeader";
import TrendingMovies from "./TrendingMovies";
import FetchData from "@/app/helpers/FetchData";
import { trendingMovies } from "@/app/constants/apis";

export default async function HeroSection() {
  const { results } = await FetchData(trendingMovies, false);
  return (
    <>
      <TrendingHeader />
      <div className="h-fit w-full flex items-center justify-center  mb-12">
        <TrendingMovies data={results} />
        {/* <TrendingShows data={showsResults} /> */}
      </div>
    </>
  );
}
