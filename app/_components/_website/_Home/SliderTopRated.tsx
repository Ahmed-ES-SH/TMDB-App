"use client";
import { ShowType } from "@/app/types/websiteTypes";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SliderHeader from "../../_client/SliderHeader";
import { useData } from "@/app/context/DataContext";
import MediaCard from "../_movies/MediaCard";

interface props {
  data: ShowType[];
  dataType: "movies" | "shows";
  bigTitle: string;
}

export default function SliderTopRated({ data, dataType, bigTitle }: props) {
  const { genres, genres_Shows } = useData();
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
      <SliderHeader
        BigTitle={bigTitle}
        goNext={() => swiperRef.current?.slideNext()}
        goPrev={() => swiperRef.current?.slidePrev()}
      />
      <Swiper
        className="custom-container"
        modules={[Autoplay]}
        autoplay={{
          delay: 4500,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        slidesPerView={5}
        spaceBetween={30}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data &&
          data.map((item, index) => {
            const matchedGenres =
              genres &&
              genres_Shows &&
              item &&
              (dataType == "shows" ? genres_Shows : genres).filter(
                (genre) =>
                  genre.id !== null && item.genre_ids.includes(genre.id)
              );
            return (
              <SwiperSlide key={index}>
                <MediaCard media={item} index={index} genres={matchedGenres} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
