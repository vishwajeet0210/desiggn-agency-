"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  index,
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
        y: -8,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
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

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0
            'bg-gradient-to-t'
            from-[#050816]
            via-[#050816]/20
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
              px-3
              py-1
              text-xs
              font-medium
              text-white
              backdrop-blur-xl
            "
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <div>

            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {description}
            </p>

          </div>

          <div
            className="
              rounded-full
              bg-blue-500/10
              p-3
              text-blue-400
              transition-all
              duration-300
              group-hover:bg-blue-500
              group-hover:text-white
            "
          >
            <ArrowUpRight
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            />
          </div>

        </div>

      </div>
    </motion.article>
  );
}