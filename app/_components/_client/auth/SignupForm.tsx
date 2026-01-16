"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSignUp, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { VscLoading } from "react-icons/vsc";
import OtherMethods from "./OtherMethods";
import VerifyCode from "./VerifyCode";

export default function SignupForm() {
  const { user } = useUser();
  const { isLoaded, signUp } = useSignUp();

  const router = useRouter();
  // This not Necessary because middleware File but Just in case
  useEffect(() => {
    if (user) {
      router.push(`/`);
    }
  }, [user, router]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [trySign, setTrySign] = useState(false);
  const [passwordFildType, setPasswordFildType] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const iconStyle = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";
  const inputs = [
    {
      name: "name",
      value: form.name,
      placeHolder: "Enter Your Name",
      type: "text",
      icon: <FaUser className={`${iconStyle}`} />,
    },
    {
      name: "email",
      value: form.email,
      placeHolder: "Enter Your Email",
      type: "email",
      icon: <FaEnvelope className={`${iconStyle}`} />,
    },
    {
      name: "password",
      value: form.password,
      placeHolder: "Enter Your Password",
      type: "password",
      icon: <FaLock className={`${iconStyle}`} />,
    },
  ];

  const handleChangePasswordFildType = () => {
    setPasswordFildType((prev) => !prev);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    // ✅ Validate empty form fields
    if (!form.email || !form.password || !form.name) {
      toast.error("Please Write Your Email and Password , Name");
      return;
    }
    try {
      setTrySign(true);
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      toast.success(
        "The account has been created successfully. Please check your email to activate the account and log in at any time."
      );
      setPendingVerification(true);
      setForm({
        name: "",
        email: "",
        password: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error.errors?.[0]?.message;
      toast.error(errorMessage);
    } finally {
      setTrySign(false);
    }
  };

  return (
    <>
      {!pendingVerification ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 items-center w-full"
          >
            <div className="hidden" id="clerk-captcha" />
            {/* Inputs Section */}
            {inputs.map((input, index) => (
              <div key={index} className="w-full relative">
                {input.type == "password" && form.password.length > 0 && (
                  <div
                    onClick={handleChangePasswordFildType}
                    className="absolute top-1/2 -translate-y-1/2 right-4"
                  >
                    {passwordFildType ? (
                      <FaEyeSlash className="size-5 text-gray-400 cursor-pointer" />
                    ) : (
                      <FaEye className="size-5 text-gray-400 cursor-pointer" />
                    )}
                  </div>
                )}
                {input.icon}
                <input
                  onChange={onChange}
                  value={input.value}
                  name={input.name}
                  type={
                    input.type == "password"
                      ? passwordFildType
                        ? "text"
                        : "password"
                      : input.type
                  }
                  placeholder={input.placeHolder}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary_blue placeholder:text-gray-400"
                />
              </div>
            ))}

            {/* Sign up btn*/}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={trySign}
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
                <p>Sign up</p>
              )}
            </motion.button>
          </form>

          {/* other methods*/}
          <div className="w-full text-center text-gray-400 text-sm">
            or sign up with
          </div>

          {/* Other Sign in Method */}
          <OtherMethods />

          <div className="flex gap-1 mt-4">
            <h2>You have an account?</h2>
            <Link href={"/signin"} className="text-primary_blue underline">
              Login
            </Link>
          </div>
        </>
      ) : (
        <VerifyCode />
      )}
    </>
  );
}
