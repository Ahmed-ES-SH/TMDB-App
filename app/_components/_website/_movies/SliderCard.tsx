"use client";

import React, { useState } from "react";
import Img from "../../_globalComponents/Img";
import { ShowType } from "@/app/types/websiteTypes";
import { gener } from "@/app/types/ContextType";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

interface props {
  movie: ShowType;
  genres: gener[];
  height?: string;
}

export default function SliderCard({
  movie,
  genres,
  height = "h-[500px]",
}: props) {
  const [isTouched, setIsTouched] = useState(false);

  const MovieYear = new Date(
    movie?.release_date || movie?.first_air_date || "2000-01-01"
  ).getFullYear();

  return (
    <div
      onTouchStart={() => setIsTouched(true)}
      onMouseLeave={() => setIsTouched(false)}
      className={`w-full relative cursor-pointer group overflow-hidden ${height}`}
    >
      <Img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* غطاء شفاف */}
      <div
        className={`h-full overflow-hidden duration-500 absolute top-0 left-0 bg-black/60 ${
          isTouched ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></div>

      {/* التقييم والقلب */}
      <div
        className={`xl:flex items-center justify-between w-full absolute left-1/2 -translate-x-1/2 duration-700 p-3 flex ${
          isTouched ? "top-2" : "-top-40 group-hover:top-2"
        }`}
      >
        <div className="flex items-center gap-1 xl:p-[7px] p-[5px] bg-thired_dash rounded-md">
          <MdOutlineStarBorderPurple500 className="xl:size-6 size-4 text-secondery-green" />
          <p className="xl:text-[16px] text-[12px] text-white">
            {Number(movie.vote_average).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-center xl:w-10 xl:h-10 w-7 h-7 gap-1 p-[6px] bg-thired_dash rounded-md cursor-pointer group/heart">
          <FaHeart className="text-white group-hover/heart:text-red-400 duration-300 max-lg:size-4" />
        </div>
      </div>

      {/* الأنواع */}
      <div
        className={`flex flex-col items-start absolute duration-700 gap-3 ${
          isTouched
            ? "left-0 top-1/2 -translate-y-1/2"
            : "group-hover:left-0 group-hover:top-1/2 top-0 -left-[80%] -translate-y-1/2"
        }`}
      >
        {genres &&
          genres.slice(0, 3).map((genre, index) => (
            <div
              key={index}
              className="xl:py-2 xl:px-4 p-1 text-[14px] xl:text-[17px] bg-secondery-green text-gray-200 rounded-r-md hover:bg-white hover:text-black duration-200 cursor-pointer"
            >
              {genre?.name}
            </div>
          ))}
      </div>

      {/* العنوان وسنة الإصدار */}
      <div
        className={`flex flex-col gap-2 items-center justify-center w-fit mx-auto absolute left-1/2 -translate-x-1/2 duration-700 ${
          isTouched ? "bottom-[12%]" : "-bottom-[20%] group-hover:bottom-[12%]"
        }`}
      >
        <h2 className="xl:text-xl text-[17px] text-gray-200 whitespace-nowrap hover:text-sky-400 duration-200">
          {movie &&
            ((movie.title || movie.name)?.length > 15
              ? (movie.title || movie.name)?.slice(0, 15) + "..."
              : movie.title || movie.name)}
        </h2>
        <p className="text-[14px] text-orange-400 font-bold">{MovieYear}</p>
      </div>
    </div>
  );
}
