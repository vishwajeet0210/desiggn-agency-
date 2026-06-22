"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  gradient: string;
  description: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  gradient,
  description,
  center = true,
}: SectionHeaderProps) {
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
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`mx-auto max-w-3xl ${
        center ? "text-center" : ""
      }`}
    >
      {/* Badge */}

      <div
        className="
          mb-6
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
          {badge}
        </span>
      </div>

      {/* Title */}

      <h2
        className="
          text-4xl
          font-black
          leading-tight
          text-white

          sm:text-5xl
          lg:text-6xl
        "
      >
        {title}

        <span className="block 'bg-gradient-to-r' from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          {gradient}
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          text-base
          leading-8
          text-slate-400

          md:text-lg
        "
      >
        {description}
      </p>
    </motion.div>
  );
}