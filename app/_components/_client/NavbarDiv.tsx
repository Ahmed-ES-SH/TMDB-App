"use client";
import { useVariables } from "@/app/context/VariablesContext";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { CiCircleList } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

interface props {
  children: React.ReactNode;
}

export default function NavbarDiv({ children }: props) {
  const { scrollY, showMobail, showSidebar, setShowSidebar } = useVariables();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes("/profile")) {
      setShowSidebar(true);
    }
  }, [pathname, setShowSidebar]);

  return (
    <div
      className={`w-full fixed top-0 duration-500 left-0 z-[999] ${
        scrollY > 5 || pathname.startsWith("/profile") || showMobail
          ? "bg-secondery_dash"
          : ""
      }`}
    >
      <AnimatePresence>
        {!showSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowSidebar(true)}
            className={`w-8 h-8 cursor-pointer flex items-center justify-center text-white bg-primary_blue absolute top-16 ${
              showMobail ? "top-72" : "top-16"
            } duration-700 left-4 z-[9] rounded-b-md`}
          >
            <CiCircleList className="size-6" />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
