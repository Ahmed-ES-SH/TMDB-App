import { Dispatch, SetStateAction } from "react";
import { ShowType } from "./websiteTypes";

export interface gener {
  id: number | null;
  name: string;
}

export interface DataContextType {
  genres: gener[];
  genres_Shows: gener[];
}

export interface VariablesTypes {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  showMobail: boolean;
  setShowMobail: Dispatch<SetStateAction<boolean>>;
  scrollY: number;
  setScrollY: Dispatch<SetStateAction<number>>;
  trendingState: "movies" | "shows";
  setTrendingState: Dispatch<SetStateAction<"movies" | "shows">>;
  SearchbarState: boolean;
  setSearchbarState: Dispatch<SetStateAction<boolean>>;
  width: number;
  currentCategory: "Popular" | "Upcoming" | "now_playing";
  setCurrentCategory: Dispatch<
    SetStateAction<"Popular" | "Upcoming" | "now_playing">
  >;
  trailerState: boolean;
  setTrailerState: Dispatch<SetStateAction<boolean>>;
}

export interface ListContextType {
  favoritesList: ShowType[];
  setFavoritesList: Dispatch<SetStateAction<ShowType[]>>;
  watchedList: ShowType[];
  setWatchedList: Dispatch<SetStateAction<ShowType[]>>;
  watchList: ShowType[];
  setWatchList: Dispatch<SetStateAction<ShowType[]>>;
  handleAddMedia: (
    setList: Dispatch<SetStateAction<ShowType[]>>,
    media: ShowType
  ) => void;
  handleDeleteMedia: (
    setList: Dispatch<SetStateAction<ShowType[]>>,
    media: ShowType
  ) => void;
  handleAddMediaToWatchedlist: (media: ShowType) => void;
}
