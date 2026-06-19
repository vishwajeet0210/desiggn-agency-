"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "./nav-links";

interface DesktopMenuProps {
  activeSection: string;
}

export default function DesktopMenu({
  activeSection,
}: DesktopMenuProps) {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      {/* Navigation */}

      <nav className="flex items-center gap-8">
        {navLinks.map((item) => {
          const isActive = activeSection === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group relative text-sm font-medium tracking-wide transition-colors duration-300"
            >
              <span
                className={
                  isActive
                    ? "text-white"
                    : "text-slate-300 transition-colors duration-300 group-hover:text-white"
                }
              >
                {item.title}
              </span>

              <span
                className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                  isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* CTA */}

      <Button
        size="lg"
        className="
          group
          rounded-full
          bg-blue-600
          px-6
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-blue-500
          hover:shadow-lg
          hover:shadow-blue-500/30
        "
      >
        Start Project

        <ArrowRight
          className="
            ml-2
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Button>
    </div>
  );
}