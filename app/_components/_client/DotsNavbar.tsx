"use client";
import React, { useState } from "react";
import Dropdown from "../_website/DropDown";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { opation_nav } from "@/app/constants/website";

export default function DotsNavbar() {
  const [showDrop, setShowDrop] = useState(false);

  const handleToggle = () => {
    setShowDrop((prev) => !prev);
  };

  return (
    <>
      <div className="relative">
        <BiDotsHorizontalRounded
          onClick={handleToggle}
          className="text-white size-6 cursor-pointer hover:text-primary_blue duration-300"
        />
        <Dropdown
          setShowDrop={setShowDrop}
          dropState={showDrop}
          className=" w-[180px] h-[200px] absolute overflow-y-auto p-2 rounded-md bg-thired_dash text-white z-[20]"
          opation={opation_nav}
        />
      </div>
    </>
  );
}
