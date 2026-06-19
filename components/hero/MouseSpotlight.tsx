"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseSpotlight() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 20,
        mass: 0.8,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        'h-[500px]'
        'w-[500px]'
        rounded-full
        bg-blue-500/10
        blur-[120px]
      "
    />
  );
}