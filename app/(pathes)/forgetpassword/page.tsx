"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import Img from "@/app/_components/_globalComponents/Img";

export default function ForgetPassword() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* الخلفية */}
      <Img
        src="/website/main-bg.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-[1] opacity-40"
      />

      {/* محتوى الفورم */}
      <motion.div
        className="z-[2] bg-fourth_color backdrop-blur-md shadow-lg rounded-xl w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] border border-gray-700 p-6 flex flex-col items-center gap-6"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Img src="/website/logo.svg" className="w-24" />

        <h2 className="text-white text-xl font-semibold">
          Forgot your password?
        </h2>
        <p className="text-sm text-gray-300 text-center">
          No worries, we’ll send you reset instructions to your email.
        </p>

        <div className="w-full relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary_blue placeholder:text-gray-400"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary_blue hover:bg-blue-600 text-white px-6 py-3 w-full rounded-lg font-semibold flex items-center justify-center gap-2 duration-300"
        >
          Send Instructions
          <FaArrowRight />
        </motion.button>
      </motion.div>
    </div>
  );
}
