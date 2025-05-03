"use client";
import { useVariables } from "@/app/context/VariablesContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

export default function MobailLinks() {
  const { showMobail } = useVariables();
  return (
    <AnimatePresence>
      {showMobail && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "230px", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="max-md:w-full w-[80%] max-lg:w-[95%] bg-thired_dash mx-auto border-b border-gray-300 p-4 overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            <Link
              className="text-lg hover:text-primary_blue text-white duration-300 whitespace-nowrap"
              href={"/"}
            >
              Home
            </Link>
            <div className="flex items-center gap-2 text-white cursor-pointer hover:text-primary_blue duration-300  group/show">
              <p className="whitespace-nowrap">Top Movies</p>
              <FaCircle className="size-2" />
            </div>
            <Link
              className="text-lg hover:text-primary_blue text-white duration-300 whitespace-nowrap"
              href={"/movies"}
            >
              Movies
            </Link>
            <Link
              className="text-lg hover:text-primary_blue text-white duration-300 whitespace-nowrap"
              href={"/movies"}
            >
              Pricing plans
            </Link>
            <BiDotsHorizontalRounded className="text-white size-6 cursor-pointer hover:text-primary_blue duration-300" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
