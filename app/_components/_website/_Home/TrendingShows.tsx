"use client";
import { useVariables } from "@/app/context/VariablesContext";
import { ShowType } from "@/app/types/websiteTypes";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SliderTrending from "../../_client/Sliders/SliderTrending";
import { useData } from "@/app/context/DataContext";
import { gener } from "@/app/types/ContextType";
import CurrentSlideComponent from "../../_client/CurrentSlideComponent";

interface props {
  data: ShowType[];
}

export default function TrendingShows({ data }: props) {
  const { trendingState } = useVariables();
  const { genres_Shows } = useData();
  const [currentSlideId, setcurrentSlideId] = useState<number | null>(null);
  const [currentShow, setCurrentShow] = useState<ShowType>(data[0]);
  const [ShowGenres, setShowGenres] = useState<gener[] | undefined>([]);

  useEffect(() => {
    const selectcurrentShow = data.find((Show) => Show.id == currentSlideId);

    if (selectcurrentShow) {
      setCurrentShow(selectcurrentShow);
    }
    if (!currentShow || !genres_Shows) return;
    const matchedGenres =
      currentShow &&
      genres_Shows.filter(
        (genre) => genre.id !== null && currentShow.genre_ids.includes(genre.id)
      );

    setShowGenres(matchedGenres);
  }, [currentShow, currentSlideId, data, genres_Shows]);

  return (
    <>
      {trendingState == "shows" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="xl:w-[90%] w-[98%] border border-gray-700 shadow-md mx-auto h-fit lg:h-screen 2xl:h-[75vh] bg-thired_dash relative rounded-md flex items-start max-xl:flex-col max-xl:gap-4 mb-12"
        >
          {/* Slider Of Movies */}
          <SliderTrending data={data} setCurrent={setcurrentSlideId} />
          <CurrentSlideComponent
            currentSlide={currentShow}
            currentGenres={ShowGenres}
          />
        </motion.div>
      )}
    </>
  );
}
