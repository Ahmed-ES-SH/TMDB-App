"use client";
import { ShowType } from "@/app/types/websiteTypes";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Img from "../_globalComponents/Img";
import { FaLanguage, FaStar } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { TbChartBarPopular } from "react-icons/tb";
import { gener } from "@/app/types/ContextType";
import { useVariables } from "@/app/context/VariablesContext";

interface props {
  currentMovie: ShowType;
  movieGenres: gener[] | undefined;
}

type btntype = {
  bg_color: string;
  text: string;
  handle: () => void;
};

export default function CurrentSlideComponent({
  currentMovie,
  movieGenres,
}: props) {
  const { trendingState } = useVariables();
  const btns: btntype[] = [
    {
      bg_color: "bg-yellow-400 ", // لون يدل على الحفظ أو الإضافة للقائمة
      text: "Watch List",
      handle: () => console.log("watch List"),
    },
    {
      bg_color: "bg-red-500 ", // لون يدل على الانتهاء أو المشاهدة
      text: "Watched",
      handle: () => console.log("Watched"),
    },
    {
      bg_color: "bg-blue-600 ", // لون يدل على الحركة أو المتابعة
      text: `Go to ${trendingState == "movies" ? "Movie" : "Show"}`,
      handle: () => console.log("Go to movie"),
    },
  ];

  const movieDetails = [
    {
      icon: <CiCalendarDate className="text-primary_blue xl:size-6 size-5 " />,
      value: new Date(
        currentMovie?.release_date ||
          currentMovie?.first_air_date ||
          "2000-01-01"
      ).getFullYear(),
    },
    {
      icon: (
        <TbChartBarPopular className="text-primary_blue xl:size-6 size-5 " />
      ),
      value: Number(currentMovie?.popularity).toFixed(2),
    },
    {
      icon: <FaLanguage className="text-primary_blue xl:size-6 size-5 " />,
      value: currentMovie?.original_language,
    },
  ];
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMovie?.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="movie flex flex-col items-start gap-10 w-full xl:w-3/4 xl:h-full h-1/2 lg:px-6 px-2 py-2 relative z-10 pb-4"
        >
          <motion.div
            key={currentMovie?.backdrop_path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="top-0 left-0 bg-center bg-cover opacity-50 -z-10  w-full h-full absolute"
          >
            <Img
              src={`https://image.tmdb.org/t/p/w500${currentMovie?.backdrop_path}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 "></div>
          </motion.div>
          {/* العنوان والتقييم */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between mt-4 w-full"
          >
            <h1 className="italic font-bold text-secondery-green text-2xl md:text-4xl xl:text-6xl font-mono">
              {currentMovie?.title || currentMovie?.name}
            </h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:p-2 p-1 rounded-md flex items-center gap-2 bg-secondery-green"
            >
              <FaStar className=" text-yellow-400" />
              <span className="text-white max-lg:text-[14px]">
                {Number(currentMovie?.vote_average).toFixed(2)}
              </span>
            </motion.div>
          </motion.div>

          {/* الوصف */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="xl:text-xl md:text-xl text-lg text-gray-300"
          >
            {currentMovie?.overview}
          </motion.p>

          {/* التفاصيل */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-12 flex-wrap"
          >
            {movieDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 * (index + 1) }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center  gap-2"
              >
                {item.icon}
                <span className="text-white xl:text-xl text-[17px]">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* التصنيفات */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 flex-wrap"
          >
            {movieGenres?.map((genre, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + index * 0.05 }}
                className="p-2 bg-primary_blue text-white rounded-r-md hover:bg-white hover:text-black cursor-pointer duration-300"
              >
                {genre?.name}
              </motion.div>
            ))}
          </motion.div>

          {/* الأزرار */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="w-fit ml-auto flex items-center flex-wrap gap-4 mt-auto"
          >
            {btns.map((btn, index) => (
              <motion.div
                key={index}
                onClick={btn.handle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className={`xl:py-3 xl:px-6 p-2 rounded-md whitespace-nowrap text-center ${btn.bg_color} text-white xl:first-letter:text-4xl first-letter:text-2xl xl:text-xl md:text-xl text-[15px] first-letter:text-black hover:bg-white hover:text-black hover:first-letter:text-secondery-green duration-300 cursor-pointer`}
              >
                {btn.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
