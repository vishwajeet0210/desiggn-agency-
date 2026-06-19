"use client";

import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
  gradient?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  gradient,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-2xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={alignment}
    >
      <SectionBadge>{badge}</SectionBadge>

      <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}

        {gradient && (
          <span className="mt-2 block 'bg-gradient-to-r' from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            {gradient}
          </span>
        )}
      </h2>

      <p className="mt-8 text-base leading-8 text-slate-400 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}