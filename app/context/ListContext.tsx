"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ListContextType } from "../types/ContextType";
import { ShowType } from "../types/websiteTypes";
import { toast } from "sonner";

type Props = {
  children: ReactNode;
};

const listContext = createContext<ListContextType | undefined>(undefined);

export default function ListProvider({ children }: Props) {
  //Stats
  const [favoritesList, setFavoritesList] = useState<ShowType[]>([]);
  const [watchedList, setWatchedList] = useState<ShowType[]>([]);
  const [watchList, setWatchList] = useState<ShowType[]>([]);

  // handleAddMedia
  const handleAddMedia = (
    setList: Dispatch<SetStateAction<ShowType[]>>,
    media: ShowType
  ) => {
    setList((prevList) => {
      const isMediaExisting = prevList.some(
        (current) => current.id === media.id
      );
      if (!isMediaExisting) {
        toast.success("Media added successfully.");
        return [...prevList, media];
      }
      return prevList;
    });
  };

  // handleDeleteMedia
  const handleDeleteMedia = (
    setList: Dispatch<SetStateAction<ShowType[]>>,
    media: ShowType
  ) => {
    setList((prevList) =>
      prevList.filter((current) => current.id !== media.id)
    );
    toast.error("Removed Media Done.");
  };

  // handleAddMedia To Watched
  const handleAddMediaToWatchedlist = (media: ShowType) => {
    // تحقق أولاً إن كان العنصر موجودًا في watchList
    const isInWatchList = watchList.some((current) => current.id === media.id);

    if (isInWatchList) {
      setWatchList((prevData) =>
        prevData.filter((current) => current.id !== media.id)
      );
      toast.info("Media has been removed from your watch list.");
      toast.success("Media has been successfully added to your watched list.");
    } else {
      setWatchList((prevData) => [...prevData, media]);
      toast.success("Media has been successfully added to your watch list.");
    }

    // ثم أضفه إلى watchedList إذا لم يكن موجودًا
    setWatchedList((prevList) => {
      const isMediaExisting = prevList.some(
        (current) => current.id === media.id
      );
      return isMediaExisting ? prevList : [...prevList, media];
    });
  };

  // Check LocalStorge To Get The initialValue Of Listes

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavorites = localStorage.getItem("favouritList");
      const storedWatched = localStorage.getItem("watchedList");
      const storedWatch = localStorage.getItem("watchList");

      if (storedFavorites) {
        setFavoritesList(JSON.parse(storedFavorites));
      }

      if (storedWatched) {
        setWatchedList(JSON.parse(storedWatched));
      }

      if (storedWatch) {
        setWatchList(JSON.parse(storedWatch));
      }
    }
  }, []);

  // Automatically save lists when they change.
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favouritList", JSON.stringify(favoritesList));
    }
  }, [favoritesList]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("watchedList", JSON.stringify(watchedList));
    }
  }, [watchedList]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("watchList", JSON.stringify(watchList));
    }
  }, [watchList]);

  return (
    <listContext.Provider
      value={{
        favoritesList,
        setFavoritesList,
        watchedList,
        setWatchedList,
        watchList,
        setWatchList,
        handleAddMedia,
        handleDeleteMedia,
        handleAddMediaToWatchedlist,
      }}
    >
      {children}
    </listContext.Provider>
  );
}

export const useList = () => {
  const context = useContext(listContext);
  if (!context) {
    throw new Error("useList must be used within a ListProvider");
  }
  return context;
};
