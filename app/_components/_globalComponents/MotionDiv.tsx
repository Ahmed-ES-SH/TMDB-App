"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MotionDiv({ children, variants, className }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
