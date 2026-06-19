"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group inline-flex items-center"
      aria-label="DES!GGN Home"
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="flex items-center text-2xl font-black tracking-[0.18em] text-white md:text-3xl"
      >
        <span>DES</span>

        <span className="mx-1 text-blue-500 transition-transform duration-300 group-hover:rotate-12">
          !
        </span>

        <span>GGN</span>
      </motion.span>
    </Link>
  );
}