/* eslint-disable @typescript-eslint/no-explicit-any */
import ShowsBody from "@/app/_components/_website/_shows/ShowsBody";
import { genresShows } from "@/app/constants/apis";
import FetchData from "@/app/hooks/FetchData";
import React from "react";

export default async function ShowsPage({ searchParams }: any) {
  const genres = await FetchData(genresShows, false);
  const showGenres = genres.genres;
  const currentPage = Number(searchParams?.page || 1);

  return (
    <div className="w-[95%] max-md:w-full max-md:p-2 mb-3 mx-auto mt-20">
      <ShowsBody currentPage={currentPage} showGenres={showGenres} />
    </div>
  );
}
