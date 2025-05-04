"use client";
import DataProvider from "@/app/context/DataContext";
import VaribalesProvider from "@/app/context/VariablesContext";
import React, { ReactNode } from "react";

type ClientLayoutProps = {
  children: ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <VaribalesProvider>
        <DataProvider>{children}</DataProvider>
      </VaribalesProvider>
    </>
  );
}
