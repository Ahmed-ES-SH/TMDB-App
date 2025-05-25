/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { toast } from "sonner";
import Link from "next/link";
import { useSignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import OtherMethods from "./OtherMethods";

export default function SigninForm() {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [trySign, setTrySign] = useState(false);
  const [passwordFildType, setPasswordFildType] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (!signIn) return null;

  const handleSignIn = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoaded) return;

    // ✅ Validate empty form fields
    if (!form.email || !form.password) {
      toast.error("Please Write Your Email and Password");
      return;
    }

    try {
      setTrySign(true);

      const result = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      await setActive({ session: result.createdSessionId });
      router.push(`/`);
    } catch (err: any) {
      const errorMessage = err.errors?.[0]?.message || "Something went wrong";

      // ✅ Show error toast
      toast.error(errorMessage);
    } finally {
      setTrySign(false);
    }
  };

  const handleChangePasswordFildType = () => {
    setPasswordFildType((prev) => !prev);
  };

  return (
    <>
      <form
        className="w-full flex flex-col gap-6 items-center"
        onSubmit={handleSignIn}
      >
        {/* Email */}
        <div className="w-full relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            onChange={onChange}
            name="email"
            value={form.email}
            type="email"
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary_blue placeholder:text-gray-400"
          />
        </div>

        {/* Password */}
        <div className="w-full relative">
          {form.password.length > 0 && (
            <div
              onClick={handleChangePasswordFildType}
              className=" absolute top-1/2 -translate-y-1/2 right-4"
            >
              {passwordFildType ? (
                <FaEyeSlash className="size-5 text-gray-400 cursor-pointer" />
              ) : (
                <FaEye className="size-5 text-gray-400 cursor-pointer" />
              )}
            </div>
          )}
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            onChange={onChange}
            name="password"
            value={form.password}
            type={passwordFildType ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary_blue placeholder:text-gray-400"
          />
        </div>

        {/* Ticket */}
        <div className="w-full flex items-center justify-between text-sm text-gray-300">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary_blue" />
            Remember me
          </label>
          <Link
            href="/forgetpassword"
            className="hover:underline text-primary_blue"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login btn*/}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary_blue hover:bg-blue-600 text-white px-6 py-3 w-full rounded-lg font-semibold flex items-center justify-center gap-2 duration-300"
        >
          {trySign ? (
            <motion.div
              animate={{ rotate: "360deg" }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <VscLoading />
            </motion.div>
          ) : (
            <p>Login</p>
          )}
        </motion.button>
      </form>

      {/* other methods*/}
      <div className="w-full text-center text-gray-400 text-sm">
        or login with
      </div>

      <OtherMethods />
      <div className="flex gap-1 mt-4">
        <h2>Don't have an account?</h2>
        <Link href={"/signup"} className="text-primary_blue underline">
          Sign up
        </Link>
      </div>
    </>
  );
}
