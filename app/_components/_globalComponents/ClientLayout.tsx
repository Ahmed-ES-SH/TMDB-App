"use client";
import DataProvider from "@/app/context/DataContext";
import VaribalesProvider from "@/app/context/VariablesContext";
import { gener } from "@/app/types/ContextType";
import React, { ReactNode } from "react";

type ClientLayoutProps = {
  children: ReactNode;
  genres: gener[];
};

export default function ClientLayout({ children, genres }: ClientLayoutProps) {
  return (
    <>
      <VaribalesProvider>
        <DataProvider genres={genres}>{children}</DataProvider>
      </VaribalesProvider>
    </>
  );
}
