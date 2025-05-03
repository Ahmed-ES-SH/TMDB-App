"use client";
import { useVariables } from "@/app/context/VariablesContext";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

export default function BarsButton() {
  const { setShowMobail, showMobail } = useVariables();
  const handleToggle = () => {
    setShowMobail((prev) => !prev);
  };
  return (
    <>
      <div onClick={handleToggle} className="">
        {!showMobail ? (
          <HiBars3BottomRight className="size-7 text-white rotate-180 xl:hidden block cursor-pointer" />
        ) : (
          <IoCloseOutline className="size-8 text-primary_blue rotate-180 xl:hidden block cursor-pointer" />
        )}
      </div>
    </>
  );
}
