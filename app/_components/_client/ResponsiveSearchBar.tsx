"use client";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import { CiSearch } from "react-icons/ci";
import InputSearchData from "./InputSearchData";

export default function ResponsiveSearchBar() {
  const { SearchbarState, setSearchbarState, width, setShowMobail } =
    useVariables();

  const toggleSearchBar = () => {
    setSearchbarState((prev) => !prev);
    setShowMobail(false);
  };

  useEffect(() => {
    if (width > 1024) setSearchbarState(false);
  }, [setSearchbarState, width]);

  return (
    <AnimatePresence mode="wait">
      {SearchbarState ? (
        <motion.div
          key="searchbar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 z-[20] w-full bg-thired_dash h-[70px]"
        >
          <div className="flex items-center justify-between w-[80%] max-md:w-[95%] h-full mx-auto max-md:gap-2 max-lg:gap-4">
            <div className="lg:hidden block w-full">
              <InputSearchData />
            </div>
            <div
              onClick={toggleSearchBar}
              className="w-6 h-6 flex items-center justify-center bg-thired_dash border border-primary_blue rounded-md cursor-pointer"
            >
              <IoMdClose className="size-4 text-primary_blue" />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="searchIcon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
        >
          <CiSearch
            onClick={toggleSearchBar}
            className="lg:size-5 size-7 text-primary_blue"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
