"use client";
import { useVariables } from "@/app/context/VariablesContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
import DotsNavbar from "../_client/DotsNavbar";
import { navLinks } from "@/app/constants/website";

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
          className="max-md:w-full w-[80%] max-lg:w-[95%] bg-secondery_dash mx-auto border-b border-gray-300 p-4 "
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg hover:text-primary_blue text-white duration-300 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                );
              } else if (item.type === "custom") {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 text-white cursor-pointer hover:text-primary_blue duration-300 group/show"
                  >
                    <p className="whitespace-nowrap">{item.label}</p>
                    <FaCircle className="size-2 text-red-400" />
                  </Link>
                );
              } else {
                return null; // للتأكد من عدم حدوث خطأ إن لم يكن النوع معروفًا
              }
            })}

            {/* يجب وضع المكون خارج map بعد انتهائه */}
            <DotsNavbar />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
