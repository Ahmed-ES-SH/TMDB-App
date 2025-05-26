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
    let alreadyExists = false;

    setList((prevList) => {
      alreadyExists = prevList.some((current) => current.id === media.id);
      if (!alreadyExists) {
        return [...prevList, media];
      }
      return prevList;
    });

    if (alreadyExists) {
      toast.info("Media already exists in the list.");
    } else {
      toast.success("Media added successfully.");
    }
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
    const isInWatchList = watchList.some((current) => current.id === media.id);

    if (isInWatchList) {
      setWatchList((prevData) =>
        prevData.filter((current) => current.id !== media.id)
      );
      toast.info("Media has been moved from your watch list to watched list.");
    } else {
      setWatchList((prevData) => [...prevData, media]);
      toast.success("Media has been added to your watch list.");
    }

    // أضفه إلى watchedList فقط إذا لم يكن موجودًا بالفعل
    setWatchedList((prevList) => {
      const isMediaExisting = prevList.some(
        (current) => current.id === media.id
      );
      if (!isMediaExisting) {
        toast.success("Media has been added to your watched list.");
        return [...prevList, media];
      } else {
        toast.info("Media is already in your watched list.");
        return prevList;
      }
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
