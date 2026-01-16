"use client";
import MediaCard from "@/app/_components/_website/_movies/MediaCard";
import { useData } from "@/app/context/DataContext";
import { ShowType } from "@/app/types/websiteTypes";
import React, { useEffect, useState } from "react";
import EmptyState from "@/app/_components/_globalComponents/EmptyState";
import { Heart } from "lucide-react";

export default function FavouritList() {
  const { genres, genres_Shows } = useData();
  const [favouritList, setFavouritList] = useState<ShowType[]>([]);

  useEffect(() => {
    const storedList = localStorage.getItem("favouritList");
    if (storedList) {
      setFavouritList(JSON.parse(storedList));
    }
  }, []);

  return (
    <>
      <div className="w-full grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  3xl:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] justify-items-center gap-6 p-2">
        {favouritList && favouritList.length > 0 ? (
          favouritList.map((media, index) => {
            const isShow = media.name || false;
            const matchedGenres =
              genres && genres_Shows && media && Array.isArray(media.genre_ids)
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
          })
        ) : (
          <div className="col-span-full w-full">
            <EmptyState
              title="No Favorites Yet"
              subtitle="Start adding movies and shows to your favorites list to keep track of what you love!"
              icon={Heart}
              actionLabel="Explore Movies"
              actionLink="/movies"
            />
          </div>
        )}
      </div>
    </>
  );
}
