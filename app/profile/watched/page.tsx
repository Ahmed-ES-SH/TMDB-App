"use client";
import MediaCard from "@/app/_components/_website/_movies/MediaCard";
import { useData } from "@/app/context/DataContext";
import { ShowType } from "@/app/types/websiteTypes";
import React, { useEffect, useState } from "react";

export default function WatchedListPage() {
  const { genres, genres_Shows } = useData();
  const [watchedList, setWatchedList] = useState<ShowType[]>([]);

  useEffect(() => {
    const storedList = localStorage.getItem("watchedList");
    if (storedList) {
      setWatchedList(JSON.parse(storedList));
    }
  }, []);

  return (
    <>
      <div className="w-full grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  3xl:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] justify-items-center gap-6 p-2">
        {watchedList &&
          watchedList.map((media, index) => {
            const isShow = media.name || false;
            const matchedGenres =
              genres && genres_Shows && media && Array.isArray(media.genre_ids) // تأكد أن genre_ids مصفوفة
                ? (isShow ? genres_Shows : genres).filter(
                    (genre) =>
                      genre.id !== null && media.genre_ids.includes(genre.id)
                  )
                : [];
            return (
              <MediaCard
                key={index}
                media={media}
                index={index}
                genres={matchedGenres}
              />
            );
          })}
      </div>
    </>
  );
}
