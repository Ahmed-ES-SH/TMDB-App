import React from "react";
import TrendingHeader from "../../_client/TrendingHeader";
import TrendingMovies from "./TrendingMovies";
import FetchData from "@/app/hooks/FetchData";
import { trendingMovies, trendingShows } from "@/app/constants/apis";
import TrendingShows from "./TrendingShows";

export default async function HeroSection() {
  const { results } = await FetchData(trendingMovies, false);
  const { results: showsResults } = await FetchData(trendingShows, false);
  return (
    <>
      <TrendingHeader />
      <TrendingMovies data={results} />
      <TrendingShows data={showsResults} />
    </>
  );
}
