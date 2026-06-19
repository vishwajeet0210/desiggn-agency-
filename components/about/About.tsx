"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28 lg:py-36"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
          >
            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-blue-400" />

              <span className="text-sm font-medium text-blue-300">
                About DES!GGN
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                text-4xl
                font-black
                leading-tight
                text-white

                sm:text-5xl
                lg:text-6xl
              "
            >
              We Create Digital Products That
              <span className="block 'bg-gradient-to-r' from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Inspire, Convert & Grow
              </span>
            </h2>

            {/* Description */}

            <p className="mt-8 text-base leading-8 text-slate-400 md:text-lg">
              At DES!GGN, we combine creativity, strategy, and technology
              to craft digital experiences that help brands stand out.
              Every website, interface, and interaction is designed with
              purpose—creating products that look exceptional and perform
              even better.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
              We believe that great design is not just about aesthetics.
              It is about solving problems, building trust, and creating
              memorable experiences that users genuinely enjoy.
            </p>

            {/* CTA */}

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="
                  group
                  rounded-full
                  bg-blue-600
                  px-8
                  hover:bg-blue-500
                "
              >
                <Link href="#services">
                  Explore Services

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
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <AboutCards />
          </motion.div>

        </div>
      </div>
    </section>
  );
}