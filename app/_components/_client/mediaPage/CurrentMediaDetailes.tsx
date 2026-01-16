import React from "react";
import { FaCircle } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import Img from "../../_globalComponents/Img";
import { ShowType } from "@/app/types/websiteTypes";
import OpenTrailer from "../movies/OpenTrailer";
import MainBTNS from "../movies/MainBTNS";

interface props {
  media: ShowType;
}

export default function CurrentMediaDetailes({ media }: props) {
  // Format The media Time
  const formatRuntime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  const runTime = formatRuntime(media.runtime) || "unKnowun Time";

  // Get The media Year
  const fullYear =
    new Date(media.release_date || media.first_air_date).getFullYear() ||
    "unKnowun Date";

  return (
    <>
      <div className="w-full min-h-screen relative mt-20 pb-3 flex  items-center justify-start">
        <Img
          className="w-full h-3/4 object-cover absolute top-0 left-0 z-[2] mask-b-from-1 "
          src={`https://image.tmdb.org/t/p/w500${
            media.backdrop_path || media.poster_path
          }`}
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black/50 z-[3]"></div>
        <div className="max-lg:flex-col-reverse max-lg:gap-6 gap-2 flex items-center justify-between  custom-container z-[10]">
          <div className="flex flex-col gap-6  relative w-full">
            <OpenTrailer />
            <h1 className="text-2xl text-white font-bold italic text-shadow-lg text-shadow-primary_blue">
              {media.title || media.name}
            </h1>
            <p className="text-gray-200 text-[16px] max-lg:w-full max-xl:w-3/4 2xl:w-[60%] my-3">
              {media.overview}
            </p>
            <div className="flex items-center flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <IoMdStarOutline className="size-6 text-primary_blue" />
                <p className="text-gray-200 text-[15px]">
                  {Number(media.vote_average).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="size-2 text-primary_blue" />
                <p className="text-gray-200 text-[15px]">
                  {(media.genres && media.genres[0]?.name) || "unKnowun Genre"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="size-2 text-primary_blue" />
                <p className="text-gray-200 text-[15px]">{fullYear}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="size-2 text-primary_blue" />
                <p className="text-gray-200 text-[15px]">
                  {media.name
                    ? `${media.number_of_episodes}  Episodes`
                    : runTime}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {media.genres &&
                media.genres.slice(0, 5).map((genre, index) => (
                  <span
                    key={index}
                    className="p-2 rounded-r-md text-white bg-fourth_color cursor-pointer hover:bg-white hover:text-black duration-300"
                  >
                    {genre.name}
                  </span>
                ))}
            </div>
            <MainBTNS media={media} />
          </div>
          <Img
            src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
            className=" lg:w-[350px] xl:w-[430px] md:w-[300px] w-[220px] rounded-lg border border-sky-400 shadow-lg shadow-primary_blue hover:shadow-2xl hover:-translate-y-7 duration-300 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
