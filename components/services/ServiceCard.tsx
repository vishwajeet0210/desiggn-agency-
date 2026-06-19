"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
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
        delay: index * 0.1,
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-white/10
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
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
        <Icon className="h-7 w-7" />
      </div>

      {/* Content */}

      <div className="relative z-10 mt-8">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

      </div>

      {/* Footer */}

      <div
        className="
          relative
          z-10
          mt-8
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-sm
            font-medium
            text-blue-400
          "
        >
          Learn More
        </span>

        <ArrowUpRight
          className="
            h-5
            w-5
            text-slate-500
            transition-all
            duration-300
            group-hover:text-blue-400
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </div>

      {/* Bottom Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          'bg-gradient-to-r'
          from-blue-500
          to-cyan-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.article>
  );
}