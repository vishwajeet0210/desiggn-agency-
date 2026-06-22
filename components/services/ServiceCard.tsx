"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  onClick: () => void;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  onClick,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -10,
      }}
      onClick={onClick}
      className="
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:bg-white/10
      "
    >
      {/* Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* View Service */}

      <div
        className="
          absolute
          right-6
          top-6
          flex
          items-center
          gap-2
          rounded-full
          bg-white/10
          px-4
          py-2
          text-sm
          text-white
          backdrop-blur-xl
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
        "
      >
        View Service

        <ArrowUpRight className="h-4 w-4" />
      </div>

      {/* Icon */}

      <div
        className="
          relative
          z-10
          inline-flex
          rounded-2xl
          bg-blue-500/10
          p-4
          text-blue-400
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-blue-500/20
        "
      >
        <Icon className="h-8 w-8" />
      </div>

      {/* Content */}

      <div className="relative z-10 mt-8">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 leading-7 text-slate-400">
          {description}
        </p>

      </div>

      {/* Footer */}

      <div className="relative z-10 mt-10 flex items-center justify-between border-t border-white/10 pt-6">

        <span className="text-sm text-slate-500">
          Click to explore
        </span>

        <div
          className="
            rounded-full
            bg-blue-500
            p-3
            text-white
            transition-transform
            duration-300
            group-hover:rotate-45
          "
        >
          <ArrowUpRight className="h-4 w-4" />
        </div>

      </div>

    </motion.article>
  );
}