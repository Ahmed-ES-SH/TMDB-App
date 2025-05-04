import { TopratedMovies } from "@/app/constants/apis";
import FetchData from "@/app/hooks/FetchData";
import React from "react";
import MovieCard from "./MovieCard";
import getGenres from "@/app/hooks/FetchGenres";
import MotionDiv from "../../_globalComponents/MotionDiv";

export default async function TopMovies() {
  const { results } = await FetchData(TopratedMovies, false);
  const genres = await getGenres();
  const genreMap = genres && new Map(genres.map((g) => [g.id, g.name]));

  const variants = {
    hidden: {
      opacity: 0,
      y: -400,
    },

    animate: {
      opacity: 1,
      y: 0,
    },

    exit: {
      opacity: 0,
      y: -400,
    },
  };

  return (
    <>
      <MotionDiv
        variants={variants}
        className="w-full  absolute h-fit left-0 top-20  bg-secondery_dash grid  xl:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-5  gap-3 p-4    duration-500"
      >
        {results &&
          results.length > 0 &&
          results.slice(0, 10).map((movie, index) => {
            const movieGenres = movie.genre_ids.map((id) => ({
              id,
              name: genreMap.get(id),
            }));
            return <MovieCard key={index} genres={movieGenres} movie={movie} />;
          })}
      </MotionDiv>
    </>
  );
}
