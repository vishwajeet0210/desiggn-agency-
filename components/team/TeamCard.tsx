"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { TeamMember } from "./team-data";

interface TeamCardProps extends TeamMember {
  index: number;
}

export default function TeamCard({
  name,
  role,
  bio,
  image,
  index,
}: TeamCardProps) {
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
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:bg-white/10
        cursor-pointer
      "
    >
      {/* Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={name}
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
           
            from-black/90
            via-black/20
            to-transparent
          "
        />

        {/* View Profile */}

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
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          View Profile

          <ArrowUpRight className="h-4 w-4" />
        </div>

      </div>

      {/* Content */}

      <div className="relative z-10 p-7">

        <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
          {role}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {name}
        </h3>

        <p className="mt-5 leading-7 text-slate-400">
          {bio}
        </p>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

          <span className="text-sm text-slate-500">
            Click to explore
          </span>

          <motion.div
            whileHover={{
              x: 4,
            }}
            className="
              rounded-full
              bg-blue-500
              p-3
              text-white
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>

        </div>

      </div>

    </motion.article>
  );
}