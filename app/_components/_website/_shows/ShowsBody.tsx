import { gener } from "@/app/types/ContextType";
import { ShowType } from "@/app/types/websiteTypes";
import MediaCard from "../_movies/MediaCard";
import FetchData from "@/app/hooks/FetchData";
import { popularTvShow } from "@/app/constants/apis";
import ServerPagination from "../../_globalComponents/ServerPagination";

interface props {
  showGenres: gener[];
  currentPage: number;
}

export default async function ShowsBody({ showGenres, currentPage }: props) {
  const { data, total_pages } = await FetchData(
    `${popularTvShow}page=${currentPage ? currentPage : 1}`,
    true
  );

  if (!data) return null;

  const { results } = await data;

  return (
    <>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  min-[1700px]:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 xl:gap-5">
        {results &&
          results.length > 0 &&
          results.map((show: ShowType, index: number) => {
            const matchedGenres =
              showGenres &&
              showGenres.filter((genre: gener) =>
                show.genre_ids.includes(genre.id as number)
              );

            return (
              <MediaCard
                index={index}
                key={`show-key-${index}`}
                media={show}
                genres={matchedGenres}
              />
            );
          })}
      </div>

      <ServerPagination
        usedURL="/shows"
        currentPage={currentPage}
        totalPages={total_pages >= 500 ? 500 : total_pages}
      />
    </>
  );
}
