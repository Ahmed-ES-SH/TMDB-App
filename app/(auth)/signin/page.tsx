/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaFacebookF,
  FaXTwitter,
  FaGoogle,
} from "react-icons/fa6";
import Img from "@/app/_components/_globalComponents/Img";
import Link from "next/link";

export default function LoginPage() {
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
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Img src="/website/logo.svg" className="w-24" />

        <h2 className="text-white text-xl font-semibold">Welcome Back</h2>
        <p className="text-sm text-gray-300 text-center">
          Login to your account to continue watching.
        </p>

        {/* Email */}
        <div className="w-full relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary_blue placeholder:text-gray-400"
          />
        </div>

        {/* Password */}
        <div className="w-full relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary_blue placeholder:text-gray-400"
          />
        </div>

        {/* تذكرني */}
        <div className="w-full flex items-center justify-between text-sm text-gray-300">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary_blue" />
            Remember me
          </label>
          <a href="#" className="hover:underline text-primary_blue">
            Forgot password?
          </a>
        </div>

        {/* زر تسجيل الدخول */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary_blue hover:bg-blue-600 text-white px-6 py-3 w-full rounded-lg font-semibold flex items-center justify-center gap-2 duration-300"
        >
          Login
        </motion.button>

        {/* أو تسجيل الدخول عبر */}
        <div className="w-full text-center text-gray-400 text-sm">
          or login with
        </div>

        <div className="flex justify-center gap-4 text-white">
          <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full">
            <FaFacebookF />
          </button>
          <button className="bg-black hover:bg-gray-800 p-3 rounded-full">
            <FaXTwitter />
          </button>
          <button className="bg-red-600 hover:bg-red-700 p-3 rounded-full">
            <FaGoogle />
          </button>
        </div>
        <div className="flex mt-4">
          <h2>Don't have an account?</h2>
          <Link href={"/signup"} className="text-primary_blue">
            Sign up !
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
