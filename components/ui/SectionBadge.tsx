"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface SectionBadgeProps {
  children: React.ReactNode;
}

export default function SectionBadge({
  children,
}: SectionBadgeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
      }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-4
        py-2
        backdrop-blur-xl
      "
    >
      <Sparkles className="h-4 w-4 text-blue-400" />

      <span className="text-sm font-medium text-blue-300">
        {children}
      </span>
    </motion.div>
  );
}