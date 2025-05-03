import { Dispatch, SetStateAction } from "react";

export interface gener {
  id: number | null;
  name: string;
}

export interface DataContextType {
  genres: gener[];
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
  trendingStatus: string;
  setTrendingStatus: Dispatch<SetStateAction<"movies" | "shows">>;
}
