"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Img from "@/app/_components/_globalComponents/Img";
import { useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import SigninForm from "@/app/_components/_client/auth/SigninForm";
import Loading from "@/app/shows/loading";

export default function SignInPage() {
  const router = useRouter();
  const { user } = useUser();
  const { isLoaded } = useSignIn();

  // This not Necessary because middleware File but Just in case
  useEffect(() => {
    if (user) {
      router.push(`/`);
    }
  }, [user, router]);

  if (!isLoaded) return <Loading />;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* background */}
      <Img
        src="/website/main-bg.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-[1] opacity-40"
      />

      {/* Form Content*/}
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
        {/* Sign in Form For Clean Code */}
        <SigninForm />
      </motion.div>
    </div>
  );
}
