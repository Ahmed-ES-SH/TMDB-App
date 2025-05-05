import MainBTNS from "@/app/_components/_client/movies/MainBTNS";
import OpenTrailer from "@/app/_components/_client/movies/OpenTrailer";
import Img from "@/app/_components/_globalComponents/Img";
import SliderTopRated from "@/app/_components/_website/_Home/SliderTopRated";
import MovieTrailer from "@/app/_components/_website/_movies/MovieTrailer";
import FetchData from "@/app/hooks/FetchData";
import { fullMovie } from "@/app/types/websiteTypes";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";

interface props {
  searchParams: {
    currentId?: string;
  };
}

export default async function page({ searchParams }: props) {
  //movieId
  const movieId = searchParams?.currentId;

  // CurrentMovie
  const movie: fullMovie = await FetchData(
    `/movie/${movieId}?language=en-US`,
    false
  );

  //similarMovies
  const { results: similarMovies } = await FetchData(
    `/movie/${movieId}/similar`,
    false
  );

  // Movie Trailer
  const { results } = await FetchData(`/movie/${movieId}/videos`, false);
  const trailer =
    results.find(
      (item: fullMovie) =>
        item.name.toLowerCase().includes("official") &&
        item.name.toLowerCase().includes("trailer")
    ) ||
    results.find((item: fullMovie) =>
      ["official", "trailer"].some((keyword) =>
        item.name.toLowerCase().includes(keyword)
      )
    );

  // Format The Movie Time
  const formatRuntime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  const runTime = formatRuntime(movie.runtime);

  // Get The Movie Year
  const fullYear = new Date(movie.release_date).getFullYear();

  return (
    <>
      <div className="w-full min-h-screen relative mt-20 flex items-center justify-start">
        <Img
          className="w-full h-3/4 object-cover absolute top-0 left-0 z-[2] mask-b-from-1 "
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black/50 z-[3]"></div>
        <div className="flex items-center justify-between custom-container z-[10]">
          <div className="flex flex-col gap-6  relative w-full">
            <OpenTrailer />
            <h1 className="text-2xl text-gray-300">{movie.title}</h1>
            <p className="text-gray-200 text-[16px] max-lg:w-full lg:w-3/4 xl:w-1/2 my-3">
              {movie.overview}
            </p>
            <div className="flex items-center flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <IoMdStarOutline className="size-6 text-primary_blue" />
                <p className="text-gray-200 text-[15px]">
                  {Number(movie.vote_average).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="size-2 text-primary_blue" />
                <p className="text-gray-200 text-[15px]">
                  {movie.genres && movie.genres[0]?.name}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="size-2 text-primary_blue" />
                <p className="text-gray-200 text-[15px]">{fullYear}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="size-2 text-primary_blue" />
                <p className="text-gray-200 text-[15px]">{runTime}</p>
              </div>
            </div>
            <MainBTNS />
          </div>
          <Img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="hidden lg:block lg:w-[350px] xl:w-[400px] rounded-lg border border-sky-400 shadow-lg shadow-primary_blue hover:shadow-2xl hover:-translate-y-7 duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="my-4">
        <SliderTopRated
          bigTitle="Similar Movies"
          dataType="movies"
          data={similarMovies}
        />
      </div>
      <MovieTrailer trailer={trailer} />
    </>
  );
}
