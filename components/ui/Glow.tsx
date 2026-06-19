"use client";

import { cn } from "@/lib/utils";

interface GlowProps {
  className?: string;
  color?: "blue" | "cyan" | "purple";
}

export default function Glow({
  className,
  color = "blue",
}: GlowProps) {
  const colors = {
    blue: "bg-blue-500/15",
    cyan: "bg-cyan-500/15",
    purple: "bg-violet-500/15",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full blur-[140px]",
        colors[color],
        className
      )}
    />
  );
}