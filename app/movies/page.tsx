/* eslint-disable @typescript-eslint/no-explicit-any */
import { genersMovies, PopularMovies } from "../constants/apis";
import MediaCard from "../_components/_website/_movies/MediaCard";
import { gener } from "../types/ContextType";
import { ShowType } from "../types/websiteTypes";
import ServerPagination from "../_components/_globalComponents/ServerPagination";
import FetchData from "../hooks/FetchData";

export default async function page({ searchParams }: any) {
  const { genres } = await FetchData(genersMovies, false);
  const { currentPage } = await searchParams;

  const { data, total_pages } = await FetchData(
    `${PopularMovies}page=${currentPage ? currentPage : 1}`,
    true
  );

  if (!data) return null;

  const { results } = await data;

  return (
    <>
      <div className="w-[95%] max-md:w-full max-md:p-2 mb-3 mx-auto mt-20">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  min-[1700px]:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 xl:gap-5">
          {results &&
            results.length > 0 &&
            results.map((show: ShowType, index: number) => {
              const matchedGenres =
                genres &&
                genres.filter((genre: gener) =>
                  show.genre_ids.includes(genre.id as number)
                );

              return (
                <MediaCard
                  index={index}
                  key={`movie-key-${index}`}
                  media={show}
                  genres={matchedGenres}
                />
              );
            })}
        </div>

        <ServerPagination
          usedURL="/movies"
          currentPage={currentPage}
          totalPages={total_pages >= 500 ? 500 : total_pages}
        />
      </div>
    </>
  );
}
