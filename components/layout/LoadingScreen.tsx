"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 'z-9999' flex items-center justify-center bg-[#050816]"
    >
      <div className="text-center">

        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-6xl font-black"
        >
          DES
          <span className="text-blue-500">!</span>
          GGN
        </motion.h1>

        <p className="mt-5 text-slate-400">
          Design Beyond Expectations
        </p>

        <motion.div
          className="mx-auto mt-8 h-1 w-40 overflow-hidden rounded-full bg-white/10"
        >
          <motion.div
            className="h-full bg-blue-500"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

      </div>
    </motion.div>
  );
}