"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import PortfolioCard from "./PortfolioCard";
import { portfolioItems } from "./portfolio-data";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-20 md:py-28 lg:py-36"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-blue-400" />

            <span className="text-sm font-medium text-blue-300">
              Featured Projects
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Work That Speaks
            <span className="block 'bg-gradient-to-r' from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              For Itself
            </span>
          </h2>

          {/* Description */}

          <p className="mt-8 text-base leading-8 text-slate-400 md:text-lg">
            Every project is crafted with strategy, creativity, and precision.
            Here are a few of our favorite collaborations.
          </p>
        </motion.div>

        {/* Portfolio Grid */}

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((project, index) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
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
            <Link href="#contact">
              Start Your Project

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
        </motion.div>

      </div>
    </section>
  );
}