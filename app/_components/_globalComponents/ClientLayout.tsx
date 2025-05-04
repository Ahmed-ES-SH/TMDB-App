"use client";
import DataProvider from "@/app/context/DataContext";
import VaribalesProvider from "@/app/context/VariablesContext";
import { gener } from "@/app/types/ContextType";
import React, { ReactNode } from "react";

type ClientLayoutProps = {
  children: ReactNode;
  genres: gener[];
  genres_Shows: gener[];
};

export default function ClientLayout({
  children,
  genres,
  genres_Shows,
}: ClientLayoutProps) {
  return (
    <>
      <VaribalesProvider>
        <DataProvider genres={genres} genres_Shows={genres_Shows}>
          {children}
        </DataProvider>
      </VaribalesProvider>
    </>
  );
}
