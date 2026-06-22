"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      // Always show at the top
      if (currentScroll < 120) {
        setShowNavbar(true);
        lastScroll = currentScroll;
        return;
      }

      // Hide only after enough downward movement
      if (currentScroll > lastScroll + 40) {
        setShowNavbar(false);
        lastScroll = currentScroll;
      }

      // Show only after enough upward movement
      if (currentScroll < lastScroll - 20) {
        setShowNavbar(true);
        lastScroll = currentScroll;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: showNavbar ? 0 : -120,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-black tracking-[0.15em] text-white sm:text-3xl"
          >
            DES
            <span className="text-blue-500">!</span>
            GGN
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}

          <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 lg:block"
>
  Start Project
</button>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {open ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-6 text-2xl font-semibold text-white"
                >
                  {item.name}
                </Link>
              ))}

             <button
  onClick={() => {
    setOpen(false);

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  }}
  className="mt-10 rounded-full bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white"
>
  Start Project
</button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}