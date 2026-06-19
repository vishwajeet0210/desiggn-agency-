"use client";

import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Team",
    href: "#team",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "#",
  },
  {
    icon: FaLinkedin,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaDribbble,
    href: "#",
  },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10">

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Top */}

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Logo */}

          <div>

            <Link
              href="/"
              className="text-4xl font-black tracking-[0.18em] text-white"
            >
              DES
              <span className="text-blue-500">!</span>
              GGN
            </Link>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              We craft premium digital experiences through
              strategy, design, and technology that inspire,
              convert, and grow brands.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Navigation
            </h3>

            <nav className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  {link.title}
                </Link>
              ))}

            </nav>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-4">

              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.href}
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

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="flex items-center gap-2 text-sm text-slate-400">
            © {new Date().getFullYear()} DES!GGN.
            Made with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            using Next.js.
          </p>

          <button
            onClick={scrollTop}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              p-3
              text-white
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-blue-500
            "
          >
            <ArrowUp className="h-5 w-5" />
          </button>

        </div>

      </div>
    </footer>
  );
}