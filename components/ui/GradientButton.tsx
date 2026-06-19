"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({
  href,
  children,
  className,
}: GradientButtonProps) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Button
        asChild
        size="lg"
        className={cn(
          `
          group
          relative
          overflow-hidden
          rounded-full
          border
          border-blue-500/30
          'bg-gradient-to-r'
          from-blue-600
          via-blue-500
          to-cyan-500
          px-8
          text-white
          shadow-lg
          shadow-blue-500/20
          transition-all
          duration-300
          hover:shadow-blue-500/40
          `,
          className
        )}
      >
        <Link
          href={href}
          className="flex items-center"
        >
          <span className="relative z-10">
            {children}
          </span>

          <ArrowRight
            className="
              relative
              z-10
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

          {/* Shine Effect */}

          <span
            className="
              absolute
              inset-0
              -translate-x-full
              'bg-gradient-to-r'
              from-transparent
              via-white/20
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />
        </Link>
      </Button>
    </motion.div>
  );
}