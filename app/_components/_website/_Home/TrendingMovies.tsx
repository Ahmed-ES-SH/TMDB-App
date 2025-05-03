"use client";
import { movieType } from "@/app/types/websiteTypes";
import React, { useEffect, useState } from "react";
import VerticalSlider from "../../_client/Sliders/VerticalSlider";
import { useData } from "@/app/context/DataContext";
import { gener } from "@/app/types/ContextType";
import CurrentMovieComponent from "../../_client/CurrentMovieComponent";

interface props {
  data: movieType[];
}

export default function TrendingMovies({ data }: props) {
  const { genres } = useData();
  const [currentSlideId, setcurrentSlideId] = useState<number | null>(null);
  const [currentMovie, setCurrentMovie] = useState<movieType>(data[0]);
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
      <div className="xl:w-[90%] w-[98%]  border  border-gray-700  shadow-md mx-auto h-fit xl:h-[75vh] bg-thired_dash relative rounded-md flex items-start max-xl:flex-col-reverse max-xl:gap-4">
        {/* المحتوى */}
        <CurrentMovieComponent
          currentMovie={currentMovie}
          movieGenres={movieGenres}
        />

        {/* السلايدر يبقى ثابت بدون حركة */}
        <VerticalSlider data={data} setCurrent={setcurrentSlideId} />
      </div>
    </>
  );
}
