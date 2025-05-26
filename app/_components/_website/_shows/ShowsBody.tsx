import { gener } from "@/app/types/ContextType";
import { ShowType } from "@/app/types/websiteTypes";
import React from "react";
import MediaCard from "../_movies/MediaCard";
import FetchData from "@/app/hooks/FetchData";
import { popularTvShow } from "@/app/constants/apis";
import ServerPagination from "../../_globalComponents/ServerPagination";

interface props {
  showGenres: gener[];
  currentPage: number;
}

export default async function ShowsBody({ showGenres, currentPage }: props) {
  const { data, total_pages } = await FetchData(
    `${popularTvShow}page=${currentPage}`,
    true
  );
  return (
    <>
      <div className="w-full  grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 xl:gap-5">
        {data &&
          data.results.length > 0 &&
          data.results.map((show: ShowType, index: number) => {
            const matchedGenres =
              showGenres &&
              showGenres.filter((genre: gener) =>
                show.genre_ids.includes(genre.id as number)
              );

            return (
              <MediaCard
                index={index}
                key={index}
                media={show}
                genres={matchedGenres}
              />
            );
          })}
      </div>

      <ServerPagination
        usedURL="/shows"
        currentPage={currentPage}
        totalPages={total_pages >= 500 ? 500 : total_pages}
      />
    </>
  );
}
