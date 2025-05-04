"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface props {
  opation: string[];
  className: string;
  dropState: boolean;
}

const dropdownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Dropdown({
  opation,
  className = "",
  dropState,
}: props) {
  return (
    <AnimatePresence>
      {dropState && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
          className={className}
        >
          <ul>
            {opation.map((title) => (
              <li
                className="p-1 hover:text-primary_blue duration-200 cursor-pointer"
                key={title}
              >
                {title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
