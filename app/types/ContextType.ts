import { Dispatch, SetStateAction } from "react";

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
}
