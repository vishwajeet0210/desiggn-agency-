"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { TeamMember } from "./team-data";

interface TeamCardProps extends TeamMember {
  index: number;
}

export default function TeamCard({
  name,
  role,
  bio,
  image,
  socials,
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
        delay: index * 0.15,
        duration: 0.6,
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
        p-8
        text-center
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
            left-1/2
            top-0
            h-60
            w-60
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />
      </div>

      {/* Avatar */}

      <div className="relative z-10 mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white/10">

        <Image
          src={image}
          alt={name}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

      </div>

      {/* Name */}

      <h3 className="relative z-10 mt-6 text-2xl font-bold text-white">
        {name}
      </h3>

      {/* Role */}

      <p className="relative z-10 mt-2 font-medium text-blue-400">
        {role}
      </p>

      {/* Bio */}

      <p className="relative z-10 mt-5 leading-7 text-slate-400">
        {bio}
      </p>

      {/* Socials */}

      <div className="relative z-10 mt-8 flex justify-center gap-3">

        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <Link
              key={index}
              href={social.href}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                p-3
                text-slate-300
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-blue-500
                hover:text-white
              "
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}

      </div>
    </motion.article>
  );
}