"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import AnimatedBackground from "./AnimatedBackground";
import MouseSpotlight from "./MouseSpotlight";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-36"
    >
      <AnimatedBackground />
      <MouseSpotlight />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-blue-400" />

            <span className="text-sm font-medium text-blue-300">
              Premium Creative Agency
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="
              max-w-5xl
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-white

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            We Build

            <span className="block 'bg-gradient-to-r' from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>

            That People Remember
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mt-8
              max-w-2xl
              text-base
              leading-relaxed
              text-slate-300

              md:text-lg
              lg:text-xl
            "
          >
            We craft modern brands, high-converting websites,
            and exceptional digital products that combine
            creativity, strategy, and cutting-edge technology.
          </motion.p>
                    {/* CTA Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="
                group
                h-12
                w-full
                rounded-full
                bg-blue-600
                px-8
                text-base
                font-semibold
                hover:bg-blue-500
                sm:w-auto
              "
            >
              <Link href="#contact">
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
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="
                group
                h-12
                w-full
                rounded-full
                border-white/20
                bg-white/5
                px-8
                text-base
                text-white
                backdrop-blur-xl
                hover:bg-white/10
                sm:w-auto
              "
            >
              <Link href="#portfolio">
                <PlayCircle className="mr-2 h-5 w-5" />

                View Portfolio
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badge */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.45,
              duration: 0.6,
            }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              text-sm
              text-slate-400
            "
          >
            <div className="h-2 w-2 rounded-full bg-emerald-400" />

            Trusted by startups, creators & businesses worldwide
          </motion.div>

          {/* Floating Cards */}

          <div className="pointer-events-none absolute inset-x-0 top-[62%] hidden lg:block">

            {/* Left Card */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.7,
              }}
              className="
                absolute
                left-0
            
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-xl
              "
            >
              <p className="text-sm text-slate-400">
                Client Satisfaction
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                98%
              </h3>
            </motion.div>

            {/* Right Card */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="
                absolute
                right-6
              
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-xl
              "
            >
              <p className="text-sm text-slate-400">
                Years Experience
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                10+
              </h3>
            </motion.div>

          </div>

          {/* Hero Stats */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.6,
            }}
            className="mt-40 w-full"
          >
            <HeroStats />
          </motion.div>
                    {/* Scroll Indicator */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, 10, 0],
            }}
            transition={{
              delay: 1.2,
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mt-20 flex justify-center"
          >
            <Link
              href="#about"
              aria-label="Scroll to About section"
              className="group flex flex-col items-center gap-3"
            >
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-slate-500 transition-colors duration-300 group-hover:text-white">
                Scroll
              </span>

              <div
                className="
                  flex
                  h-14
                  w-8
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  p-1
                  backdrop-blur-xl
                "
              >
                <motion.div
                  animate={{
                    y: [0, 18, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                  className="h-3 w-3 rounded-full bg-blue-500"
                />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}