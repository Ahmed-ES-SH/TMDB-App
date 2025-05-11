"use client";
import { useList } from "@/app/context/ListContext";
import { ShowType } from "@/app/types/websiteTypes";
import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface props {
  media: ShowType;
}

export default function IconsCard({ media }: props) {
  const { handleAddMedia, handleAddMediaToWatchedlist, setWatchList } =
    useList();
  return (
    <>
      <div className="flex items-center justify-between w-full absolute -bottom-40 group-hover:bottom-2  left-1/2 -translate-x-1/2 duration-700  p-3">
        <div
          onClick={() => handleAddMediaToWatchedlist(media)}
          className="flex items-center justify-center w-10 h-10 gap-1 p-[6px] bg-secondery-green rounded-md cursor-pointer group/heart"
        >
          <FaRegEye className="size-6 text-white group-hover/heart:text-black duration-300" />
        </div>
        <div
          onClick={() => handleAddMedia(setWatchList, media)}
          className="flex items-center justify-center w-10 h-10 gap-1 p-[6px] bg-yellow-300 rounded-md cursor-pointer group/heart"
        >
          <FaRegEyeSlash className="size-6 text-white group-hover/heart:text-black duration-300" />
        </div>
      </div>
    </>
  );
}
