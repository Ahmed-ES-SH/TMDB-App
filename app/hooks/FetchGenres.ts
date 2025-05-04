import { genersMovies } from "../constants/apis";
import FetchData from "./FetchData";

export default async function getGenres() {
  const genres = await FetchData(genersMovies, false);
  return genres;
}
