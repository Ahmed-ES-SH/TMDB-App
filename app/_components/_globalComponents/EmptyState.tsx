"use client";
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface EmptyStateProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  actionLabel?: string;
  actionLink?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  subtitle,
  icon: Icon,
  actionLabel,
  actionLink,
}) => {
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-md bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50"
      >
        <div className="w-20 h-20 bg-primary_blue/10 rounded-full flex items-center justify-center mb-6">
          <Icon className="w-10 h-10 text-primary_blue" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">{subtitle}</p>

        {actionLabel && actionLink && (
          <Link href={actionLink}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary_blue text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-primary_blue/20"
            >
              {actionLabel}
            </motion.button>
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default EmptyState;
