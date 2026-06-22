"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { PortfolioItem } from "./portfolio-data";

interface PortfolioCardProps extends PortfolioItem {
  index: number;
  onClick: () => void;
}

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  index,
  onClick,
}: PortfolioCardProps) {
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
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
      }}
      onClick={onClick}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/40
      "
    >
      {/* Image */}

      <div className="relative 'aspect-[4/3]' overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            'bg-gradient-to-t'
            from-[#050816]
            via-[#050816]/30
            to-transparent
          "
        />

        {/* Category */}

        <div className="absolute left-5 top-5">

          <span
            className="
              rounded-full
              border
              border-white/10
              bg-black/40
              px-4
              py-2
              text-xs
              font-medium
              text-white
              backdrop-blur-xl
            "
          >
            {category}
          </span>

        </div>

        {/* View Project */}

        <div
          className="
            absolute
            right-5
            top-5
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
            transition
            duration-300
            group-hover:opacity-100
          "
        >
          View Project

          <ArrowUpRight className="h-4 w-4" />

        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

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

      </div>

    </motion.article>
  );
}