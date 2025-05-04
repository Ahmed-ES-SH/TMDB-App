"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Pagination from "../../_globalComponents/Pagination";
import { ShowType } from "@/app/types/websiteTypes";
import {
  nowPlaying,
  PopularMovies,
  upcomingMovies,
} from "@/app/constants/apis";
import { useData } from "@/app/context/DataContext";
import MovieCard from "../_movies/MovieCard";
import { gener } from "@/app/types/ContextType";
import "../../../Css/loader.css";
import useFetchData from "@/app/hooks/FetchClientData";
import { useVariables } from "@/app/context/VariablesContext";

export default function ShowMovies() {
  const { genres } = useData();
  const { currentCategory } = useVariables();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentApi, setCurrentApi] = useState<string>("");

  // Fetch The Data
  const { data, totalPages, loading } = useFetchData<{
    results: ShowType[];
  }>(currentApi, true);

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
  }, [currentPage]); // Trigger when currentPage changes

  if (loading)
    return (
      <div className="w-full h-screen fixed top-0 left-0 z-[99] bg-thired_dash flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );

  return (
    <>
      <div className="custom-container grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
        {data &&
          data.results.map((movie: ShowType, index: number) => {
            const matchedGenres =
              genres &&
              movie &&
              genres.filter(
                (genre: gener) =>
                  genre.id !== null && movie.genre_ids.includes(genre.id)
              );
            return (
              <MovieCard key={index} movie={movie} genres={matchedGenres} />
            );
          })}
      </div>
      <Pagination
        totalPages={totalPages && totalPages > 500 ? 500 : totalPages || 500}
        currentPage={currentPage || 1}
        setCurrentPage={setCurrentPage as Dispatch<SetStateAction<number>>}
      />
    </>
  );
}
