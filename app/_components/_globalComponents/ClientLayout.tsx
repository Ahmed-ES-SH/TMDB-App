"use client";
import React, { ReactNode, useState } from "react";
import DataProvider from "@/app/context/DataContext";
import ListProvider from "@/app/context/ListContext";
import VaribalesProvider from "@/app/context/VariablesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ClientLayoutProps = {
  children: ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <VaribalesProvider>
          <ListProvider>
            <DataProvider>{children}</DataProvider>
          </ListProvider>
        </VaribalesProvider>
      </QueryClientProvider>
    </>
  );
}
