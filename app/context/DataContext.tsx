"use client";
import { createContext, ReactNode, useContext } from "react";

import { DataContextType, gener } from "../types/ContextType";

type Props = {
  children: ReactNode;
  genres: gener[];
  genres_Shows: gener[];
};

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({ children, genres, genres_Shows }: Props) => {
  return (
    <DataContext.Provider value={{ genres, genres_Shows }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
