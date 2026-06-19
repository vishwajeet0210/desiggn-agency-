"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={hover ? { y: -8 } : undefined}
      className={cn(
        `
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-white/10
        `,
        className
      )}
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -right-24
            -top-24
            h-56
            w-56
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}