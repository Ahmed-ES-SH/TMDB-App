"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Pagination from "../../_globalComponents/Pagination";
import { ShowType } from "@/app/types/websiteTypes";
import {
  nowPlaying,
  PopularMovies,
  upcomingMovies,
} from "@/app/constants/apis";
import { useData } from "@/app/context/DataContext";
import { gener } from "@/app/types/ContextType";
import { useVariables } from "@/app/context/VariablesContext";
import MediaCard from "../_movies/MediaCard";
import { useFetchData } from "@/app/hooks/FetchClientData";
import "../../../Css/loader.css";

interface DataType {
  results: ShowType[];
  total_pages: number;
}

export default function ShowMovies() {
  const { genres } = useData();
  const { currentCategory } = useVariables();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentApi, setCurrentApi] = useState<string>(
    `${PopularMovies}page=1`
  );

  // Fetch The Data
  const { data, isLoading, error } = useFetchData<DataType>(currentApi, true);

  const totalPages = data && data.total_pages;

  useEffect(() => {
    // Set API and reset page when category changes
    switch (currentCategory) {
      case "Popular":
        setCurrentApi(`${PopularMovies}page=1`); // Set to page 1 initially
        break;
      case "now_playing":
        setCurrentApi(`${nowPlaying}page=1`);
        break;
      case "Upcoming":
        setCurrentApi(`${upcomingMovies}page=1`);
        break;
      default:
        setCurrentApi(`${PopularMovies}page=1`);
    }
    setCurrentPage(1); // Reset page to 1 whenever category changes
  }, [currentCategory]); // Only trigger on category change

  // Whenever the page changes, update the API with the new page
  useEffect(() => {
    // Scroll behavior when changing pages
    if (currentPage !== 1) {
      window.scrollTo({
        top: 800,
        left: 0,
        behavior: "smooth",
      });
    }
    const apiWithPage = `${currentApi.split("page=")[0]}page=${currentPage}`;
    setCurrentApi(apiWithPage);
  }, [currentApi, currentPage]); // Trigger when currentPage changes

  // Show The Error In Console

  if (error) console.log(error);

  if (isLoading)
    return (
      <div className="w-full h-screen fixed top-0 left-0 z-99 bg-thired_dash flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );

  return (
    <>
      <div className="custom-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  min-[1700px]:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4">
        {data &&
          data.results.map((media: ShowType, index: number) => {
            const matchedGenres =
              genres &&
              media &&
              genres.filter(
                (genre: gener) =>
                  genre.id !== null && media.genre_ids.includes(genre.id)
              );
            return (
              <MediaCard
                index={index}
                key={index}
                media={media}
                genres={matchedGenres}
              />
            );
          })}
      </div>
      <div className="custom-container">
        <Pagination
          totalPages={totalPages && totalPages > 500 ? 500 : totalPages || 500}
          currentPage={currentPage || 1}
          setCurrentPage={setCurrentPage as Dispatch<SetStateAction<number>>}
        />
      </div>
    </>
  );
}
