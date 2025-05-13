"use client";
import Img from "../../_globalComponents/Img";
import { ShowType } from "@/app/types/websiteTypes";
import { gener } from "@/app/types/ContextType";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Link from "next/link";
import { formatTitle } from "@/app/_helpers/helpers";
import { motion } from "framer-motion";
import IconsCard from "./IconsCard";
import HeartIcon from "./HeartIcon";

interface props {
  media: ShowType;
  genres: gener[];
  height?: string;
  index: number;
}

export default function MediaCard({
  media,
  genres,
  height = "h-[500px]",
  index,
}: props) {
  const mediaYear = new Date(
    media.release_date || media.first_air_date
  ).getFullYear();
  const mediaTitle = media.title || media.name;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 }}
        className={`w-full relative cursor-pointer group rounded-md overflow-hidden ${height} `}
      >
        <Img
          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
          className="absolute top-0 left-0 w-full h-full rounded-md object-cover "
        />
        <div className="w-0 h-full overflow-hidden group-hover:w-full duration-500 absolute top-0 left-0 bg-black/60 rounded-md"></div>
        {/* Head Line & Rate + Faveroit List  */}
        <div className="flex items-center justify-between w-full absolute -top-40 group-hover:top-2  left-1/2 -translate-x-1/2 duration-700  p-3">
          <div className="flex items-center gap-1 p-[7px] bg-thired_dash rounded-md">
            <MdOutlineStarBorderPurple500 className="size-6 text-secondery-green" />
            <p className="text-[16px] text-white">
              {Number(media.vote_average).toFixed(2)}
            </p>
          </div>
          <HeartIcon media={media} />
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
        {/* media Title + release_date */}
        <div className="flex flex-col gap-2 items-center justify-center w-fit mx-auto absolute -bottom-[20%] group-hover:bottom-[12%] duration-700 left-1/2 -translate-x-1/2">
          <Link
            href={`/${media.name ? "shows" : "movies"}/${formatTitle(
              media.title || media.name
            )}?currentId=${media.id}`}
            className="text-xl text-gray-200 whitespace-nowrap hover:text-sky-400 duration-200"
          >
            {mediaTitle.length > 20
              ? mediaTitle.slice(0, 20) + "..."
              : mediaTitle}
          </Link>
          <p className="text-[14px] text-orange-400 font-bold">{mediaYear}</p>
        </div>
        {/* Watched List + Watch List  & btns */}
        <IconsCard media={media} />
      </motion.div>
    </>
  );
}
