"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { ShowType } from "@/app/types/websiteTypes";
import { Virtual, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useData } from "@/app/context/DataContext";
import SliderCard from "../../_website/_movies/SliderCard";
import "swiper/css";
import "swiper/css/virtual";

interface props {
  data: ShowType[];
  setCurrent: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function SliderTrending({ data, setCurrent }: props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movieId, setMovieId] = useState<number | null>(null);
  const { genres } = useData();

  const handleCurrentSlide = (id: number) => {
    setMovieId(id);
  };

  useEffect(() => {
    if (movieId !== null) {
      setCurrent(movieId);
    } else {
      setCurrent(currentIndex);
    }
  }, [currentIndex, movieId, setCurrent]);

  return (
    <div className="w-1/4 max-xl:w-full max-lg:h-[35vh] lg:h-[45vh]  xl:h-full max-xl:p-2 overflow-hidden">
      <Swiper
        className="w-full h-full "
        virtual
        modules={[Virtual, Autoplay]}
        autoplay={{
          delay: 4500,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          620: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((movie: ShowType | ShowType, index) => {
          const matchedGenres =
            genres &&
            movie &&
            genres.filter(
              (genre) => genre.id !== null && movie.genre_ids.includes(genre.id)
            );
          return (
            <SwiperSlide
              className="rounded-md w-full  my-auto"
              key={movie.id}
              virtualIndex={index}
              onClick={() => handleCurrentSlide(movie.id)}
            >
              <SliderCard
                height="h-full"
                movie={movie}
                genres={matchedGenres}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
