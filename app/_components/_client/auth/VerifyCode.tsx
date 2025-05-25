"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useSignUp } from "@clerk/nextjs";
import { VscLoading } from "react-icons/vsc";
import { useRouter } from "next/navigation";

export default function VerifyCode() {
  const { signUp, isLoaded } = useSignUp();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const code = values.join("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;

    const newValues = [...values];
    newValues[index] = val.slice(-1);

    setValues(newValues);

    if (val.length === 1 && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && values[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
      const newValues = [...values];
      newValues[index - 1] = "";
      setValues(newValues);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(paste)) return;

    const pasteArr = paste.split("");
    const newValues = [...values];
    for (let i = 0; i < 6; i++) {
      newValues[i] = pasteArr[i] || "";
    }
    setValues(newValues);

    const lastIndex = pasteArr.length >= 6 ? 5 : pasteArr.length;
    inputsRef.current[lastIndex]?.focus();
  };

  if (!signUp) return;

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      setLoading(true);
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        toast.success("User signed up and verified!");
        setValues(Array(6).fill(""));
        router.push("/signin");
      } else {
        toast.error("Verification incomplete");
      }
    } catch (err) {
      console.error("Verification error:", err);
      toast.error("Verification error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleVerify}
      className="h-fit flex flex-col items-center justify-center bg-slate-900 p-4 rounded-xl space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center gap-3"
      >
        {values.map((val, idx) => (
          <input
            key={idx}
            ref={(el) => {
              if (el) {
                inputsRef.current[idx] = el;
              }
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 text-center rounded-lg border-2 border-gray-700 focus:border-secondery-green duration-300 outline-none text-xl font-mono"
            value={val}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            onPaste={handlePaste}
            autoComplete="one-time-code"
          />
        ))}
      </motion.div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-primary_blue hover:bg-blue-600 text-white px-6 py-3 w-full rounded-lg font-semibold flex items-center justify-center gap-2 duration-300"
      >
        {loading ? (
          <motion.div
            animate={{ rotate: "360deg" }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <VscLoading />
          </motion.div>
        ) : (
          <p>Verify Email</p>
        )}
      </motion.button>
    </form>
  );
}
