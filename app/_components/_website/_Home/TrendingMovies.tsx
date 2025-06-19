"use client";
import { ShowType } from "@/app/types/websiteTypes";
import React, { useEffect, useState } from "react";
import { useData } from "@/app/context/DataContext";
import { gener } from "@/app/types/ContextType";
import CurrentSlideComponent from "../../_client/CurrentSlideComponent";
import { useVariables } from "@/app/context/VariablesContext";
import { motion } from "framer-motion";
import SliderTrending from "../../_client/Sliders/SliderTrending";

interface props {
  data: ShowType[];
}

export default function TrendingMovies({ data }: props) {
  const { genres } = useData();
  const { trendingState } = useVariables();
  const [currentSlideId, setcurrentSlideId] = useState<number | null>(null);
  const [currentMovie, setCurrentMovie] = useState<ShowType>(data[0]);
  const [movieGenres, setMovieGenres] = useState<gener[] | undefined>([]);

  useEffect(() => {
    const selectCurrentMovie = data.find((movie) => movie.id == currentSlideId);

    if (selectCurrentMovie) {
      setCurrentMovie(selectCurrentMovie);
    }
    if (!currentMovie || !genres) return;
    const matchedGenres =
      currentMovie &&
      genres.filter(
        (genre) =>
          genre.id !== null && currentMovie.genre_ids.includes(genre.id)
      );

    setMovieGenres(matchedGenres);
  }, [currentMovie, currentSlideId, data, genres]);

  return (
    <>
      {trendingState === "movies" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="xl:w-[90%] w-[98%] border border-gray-700 shadow-md mx-auto h-fit lg:h-screen 2xl:h-[75vh] bg-thired_dash relative rounded-md flex items-start max-xl:flex-col-reverse max-xl:gap-4 mb-12"
        >
          {/* Movie Content */}
          <CurrentSlideComponent
            currentSlide={currentMovie}
            currentGenres={movieGenres}
          />

          {/* Slider Of Movies */}
          <SliderTrending data={data} setCurrent={setcurrentSlideId} />
        </motion.div>
      )}
    </>
  );
}
