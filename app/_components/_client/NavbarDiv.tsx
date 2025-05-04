"use client";
import { useVariables } from "@/app/context/VariablesContext";
import React from "react";

interface props {
  children: React.ReactNode;
}

export default function NavbarDiv({ children }: props) {
  const { scrollY, showMobail } = useVariables();
  return (
    <div
      className={`w-full  fixed top-0 duration-500  left-0 z-[999] ${
        scrollY > 5 ? "bg-secondery_dash" : ""
      } ${showMobail ? "bg-secondery_dash" : ""}`}
    >
      {children}
    </div>
  );
}
