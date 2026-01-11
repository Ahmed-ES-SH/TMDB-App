/* eslint-disable @typescript-eslint/no-explicit-any */
import CurrentMediaDetailes from "@/app/_components/_client/mediaPage/CurrentMediaDetailes";
import MediaCommentsAndReviews from "@/app/_components/_client/movies/MediaCommentsAndReviews";
import SliderTopRated from "@/app/_components/_website/_Home/SliderTopRated";
import MediaTrailer from "@/app/_components/_website/_movies/MediaTrailer";
import { upcomingShows } from "@/app/constants/apis";
import FetchData from "@/app/hooks/FetchData";
import { ShowType } from "@/app/types/websiteTypes";

export default async function ShowPage({ searchParams }: any) {
  //movieId
  const { showId } = await searchParams;

  // CurrentMovie
  const show: ShowType = await FetchData(`/tv/${showId}?language=en-US`, false);

  //similarMovies
  const { results: similarShows } = await FetchData(
    `/tv/${showId}/similar`,
    false
  );

  // upComingShows
  const { results: upComingShows } = await FetchData(
    `${upcomingShows}page=1`,
    false
  );

  // Movie Trailer
  const { results } = await FetchData(`/tv/${showId}/videos`, false);
  const trailer =
    results.find(
      (item: ShowType) =>
        item.name.toLowerCase().includes("official") &&
        item.name.toLowerCase().includes("trailer")
    ) ||
    results.find((item: ShowType) =>
      ["official", "trailer"].some((keyword) =>
        item.name.toLowerCase().includes(keyword)
      )
    );
  return (
    <>
      {/* Display current media details (movie or TV show) */}
      <CurrentMediaDetailes media={show} />

      {/* Display media comments and user reviews */}
      <MediaCommentsAndReviews data={upComingShows} />

      <div className="my-4">
        {/* Slider showing top-rated similar movies */}
        <SliderTopRated
          bigTitle="Similar Shows"
          dataType="shows"
          data={
            similarShows && similarShows.length > 0
              ? similarShows
              : upcomingShows
          }
        />
      </div>

      {/* Display movie trailer */}
      <MediaTrailer trailer={trailer} />
    </>
  );
}
