"use client";
import { useList } from "@/app/context/ListContext";
import { ShowType } from "@/app/types/websiteTypes";
import React from "react";
import { FaHeart } from "react-icons/fa";

interface props {
  media: ShowType;
}

export default function HeartIcon({ media }: props) {
  const { setFavoritesList, handleAddMedia } = useList();
  return (
    <>
      <div
        onClick={() => handleAddMedia(setFavoritesList, media)}
        className="flex items-center justify-center w-10 h-10 gap-1 p-[6px] bg-thired_dash rounded-md cursor-pointer group/heart"
      >
        <FaHeart className="size-5 text-white group-hover/heart:text-red-400 duration-300" />
      </div>
    </>
  );
}
