"use client";
import { useVariables } from "@/app/context/VariablesContext";
import React from "react";

export default function NavbarDiv({ children }) {
  const { scrollY, showMobail } = useVariables();
  return (
    <div
      className={`w-full  fixed top-0 duration-500  left-0 z-[999] ${
        scrollY > 5 ? "bg-thired_dash" : ""
      } ${showMobail ? "bg-thired_dash" : ""}`}
    >
      {children}
    </div>
  );
}
