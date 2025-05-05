import React from "react";
import Img from "../../_globalComponents/Img";
import { ShowType } from "@/app/types/websiteTypes";
import { gener } from "@/app/types/ContextType";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FaHeart, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { formatTitle } from "@/app/_helpers/helpers";
import { motion } from "framer-motion";
interface props {
  movie: ShowType;
  genres: gener[];
  height?: string;
  index: number;
}

export default function MovieCard({
  movie,
  genres,
  height = "h-[500px]",
  index,
}: props) {
  const MovieYear = new Date(
    movie.release_date || movie.first_air_date
  ).getFullYear();
  const movieTitle = movie.title || movie.name;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 }}
        className={`w-full relative cursor-pointer group rounded-md overflow-hidden ${height} `}
      >
        <Img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="absolute top-0 left-0 w-full h-full rounded-md object-cover "
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
          className={`flex flex-col group-hover:left-0 items-start absolute top-0 -left-[50%] -translate-y-1/2 duration-700 gap-3 group-hover:top-1/2 `}
        >
          {genres &&
            genres.slice(0, 4).map((genre, index) => (
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
          <Link
            href={`/${movie.name ? "shows" : "movies"}/${formatTitle(
              movie.title || movie.name
            )}?currentId=${movie.id}`}
            className="text-xl text-gray-200 whitespace-nowrap hover:text-sky-400 duration-200"
          >
            {movieTitle.length > 20
              ? movieTitle.slice(0, 20) + "..."
              : movieTitle}
          </Link>
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
      </motion.div>
    </>
  );
}
