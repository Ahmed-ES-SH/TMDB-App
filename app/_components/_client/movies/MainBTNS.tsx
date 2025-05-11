"use client";
import { useList } from "@/app/context/ListContext";
import { ShowType } from "@/app/types/websiteTypes";
import React from "react";

type btntype = {
  bg_color: string;
  text: string;
  handle: () => void;
};

interface props {
  media: ShowType;
}

export default function MainBTNS({ media }: props) {
  const { handleAddMedia, handleAddMediaToWatchedlist, setWatchList } =
    useList();
  const btns: btntype[] = [
    {
      bg_color: "bg-yellow-400 ", // لون يدل على الحفظ أو الإضافة للقائمة
      text: "Watch List",
      handle: () => handleAddMedia(setWatchList, media),
    },
    {
      bg_color: "bg-red-500 ", // لون يدل على الانتهاء أو المشاهدة
      text: "Watched",
      handle: () => handleAddMediaToWatchedlist(media),
    },
  ];
  return (
    <>
      <div className="flex items-center gap-4 mt-3">
        {btns.map((btn, index) => (
          <div
            key={index}
            onClick={btn.handle}
            className={`xl:py-3 xl:px-6 p-2 rounded-md whitespace-nowrap text-center ${btn.bg_color} text-white xl:first-letter:text-4xl first-letter:text-2xl xl:text-xl md:text-xl text-[15px] first-letter:text-black hover:bg-white hover:text-black hover:first-letter:text-secondery-green duration-300 cursor-pointer`}
          >
            {btn.text}
          </div>
        ))}
      </div>
    </>
  );
}
