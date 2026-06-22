"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  delay = 0,
  hover = true,
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
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.02,
            }
          : undefined
      }
      className={cn(
        `
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:bg-white/10
        `,
        className
      )}
    >
      {/* Glow */}

      <div
        className="
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
            left-1/2
            top-0
            h-64
            w-64
            -translate-x-1/2
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