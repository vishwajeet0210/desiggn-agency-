"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Aurora 1 */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[-10%]
          'h-[28rem]'
          'w-[28rem]'
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      {/* Aurora 2 */}

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 70, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-10%]
          top-[20%]
          'h-[24rem]'
          'w-[24rem]'
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />

      {/* Aurora 3 */}

      <motion.div
        animate={{
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-10%]
          left-1/2
          'h-[26rem]'
         ' w-[26rem]'
          -translate-x-1/2
          rounded-full
          bg-indigo-500/20
          blur-[140px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          'bg-[size:64px_64px]'
          opacity-20
        "
      />

      {/* Radial Fade */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050816_100%)]" />
    </div>
  );
}