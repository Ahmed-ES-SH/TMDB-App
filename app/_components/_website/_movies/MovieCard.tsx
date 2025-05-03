import React from "react";
import Img from "../../_globalComponents/Img";
import { movieType } from "@/app/types/websiteTypes";
import { gener } from "@/app/types/ContextType";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FaHeart, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
interface props {
  movie: movieType;
  genres: gener[];
  height?: string;
}

export default function MovieCard({
  movie,
  genres,
  height = "h-[500px]",
}: props) {
  const isMany = genres && genres.length > 5 ? true : false;
  const MovieYear = new Date(movie.release_date).getFullYear();
  return (
    <>
      <div
        className={`w-full relative cursor-pointer group overflow-hidden ${height} `}
      >
        <Img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="absolute top-0 left-0 w-full h-full object-cover "
        />
        <div className="w-0 h-full overflow-hidden group-hover:w-full duration-500 absolute top-0 left-0 bg-black/60 rounded-md"></div>
        {/* Head Line & Rate + Faveroit List  */}
        <div className="flex items-center justify-between w-full absolute -top-40 group-hover:top-2  left-1/2 -translate-x-1/2 duration-700  p-3">
          <div className="flex items-center gap-1 p-[7px] bg-thired_dash rounded-md">
            <MdOutlineStarBorderPurple500 className="size-6 text-secondery-green" />
            <p className="text-[16px] text-white">
              {Number(movie.vote_average).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center w-10 h-10 gap-1 p-[6px] bg-thired_dash rounded-md cursor-pointer group/heart">
            <FaHeart className="size-5 text-white group-hover/heart:text-red-400 duration-300" />
          </div>
        </div>
        {/* genres div */}
        <div
          className={`flex flex-col group-hover:left-0 items-start absolute top-0 -left-[50%] -translate-y-1/2 duration-700 gap-3 ${
            isMany ? "group-hover:top-2" : "group-hover:top-1/2 "
          }`}
        >
          {genres &&
            genres.map((genre, index) => (
              <div
                key={index}
                className="py-2 px-4 bg-secondery-green text-gray-200 rounded-r-md hover:bg-white hover:text-black duration-200 cursor-pointer"
              >
                {genre?.name}
              </div>
            ))}
        </div>
        {/* Movie Title + release_date */}
        <div className="flex flex-col gap-2 items-center justify-center w-fit mx-auto absolute -bottom-[20%] group-hover:bottom-[12%] duration-700 left-1/2 -translate-x-1/2">
          <h2 className="text-xl text-gray-200 whitespace-nowrap hover:text-sky-400 duration-200">
            {movie.title.length > 20
              ? movie.title.slice(0, 20) + "..."
              : movie.title}
          </h2>
          <p className="text-[14px] text-orange-400 font-bold">{MovieYear}</p>
        </div>
        {/* Watched List + Watch List  & btns */}
        <div className="flex items-center justify-between w-full absolute -bottom-40 group-hover:bottom-2  left-1/2 -translate-x-1/2 duration-700  p-3">
          <div className="flex items-center justify-center w-10 h-10 gap-1 p-[6px] bg-secondery-green rounded-md cursor-pointer group/heart">
            <FaRegEye className="size-6 text-white group-hover/heart:text-black duration-300" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 gap-1 p-[6px] bg-yellow-300 rounded-md cursor-pointer group/heart">
            <FaRegEyeSlash className="size-6 text-white group-hover/heart:text-black duration-300" />
          </div>
        </div>
      </div>
    </>
  );
}
