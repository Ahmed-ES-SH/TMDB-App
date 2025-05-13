import CurrentMediaDetailes from "@/app/_components/_client/mediaPage/CurrentMediaDetailes";
import MediaCommentsAndReviews from "@/app/_components/_client/movies/MediaCommentsAndReviews";
import SliderTopRated from "@/app/_components/_website/_Home/SliderTopRated";
import MediaTrailer from "@/app/_components/_website/_movies/MediaTrailer";
import { upcomingMovies } from "@/app/constants/apis";
import FetchData from "@/app/hooks/FetchData";
import { ShowType } from "@/app/types/websiteTypes";
import React from "react";

interface props {
  searchParams: {
    currentId?: string;
  };
}

export default async function page({ searchParams }: props) {
  //movieId
  const movieId = searchParams?.currentId;

  // CurrentMovie
  const movie: ShowType = await FetchData(
    `/movie/${movieId}?language=en-US`,
    false
  );

  //similarMovies
  const { results: similarMovies } = await FetchData(
    `/movie/${movieId}/similar`,
    false
  );

  // upComingMovies

  const { results: upComingMovies } = await FetchData(
    `${upcomingMovies}page=1`,
    false
  );

  // Movie Trailer
  const { results } = await FetchData(`/movie/${movieId}/videos`, false);
  const trailer =
    results.find(
      (item: ShowType) =>
        item.name.toLowerCase().includes("official") &&
        item.name.toLowerCase().includes("trailer")
    ) ||
    results.find((item: ShowType) =>
      ["official", "trailer"].some((keyword) =>
        item.name.toLowerCase().includes(keyword)
      )
    );

  return (
    <>
      {/* Display current media details (movie or TV show) */}
      <CurrentMediaDetailes media={movie} />

      {/* Display media comments and user reviews */}
      <MediaCommentsAndReviews data={upComingMovies} />

      <div className="my-4">
        {/* Slider showing top-rated similar movies */}
        <SliderTopRated
          bigTitle="Similar Movies"
          dataType="movies"
          data={
            similarMovies && similarMovies.length > 0
              ? similarMovies
              : upComingMovies
          }
        />
      </div>

      {/* Display movie trailer */}
      <MediaTrailer trailer={trailer} />
    </>
  );
}
