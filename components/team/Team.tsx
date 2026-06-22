"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";
import { teamMembers, TeamMember } from "./team-data";

export default function Team() {
  const [selectedMember, setSelectedMember] =
    useState<TeamMember | null>(null);

  return (
    <section
      id="team"
      className="relative overflow-hidden py-20 md:py-28 lg:py-36"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 'h-[28rem] w-[28rem]' -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-blue-400" />

            <span className="text-sm font-medium text-blue-300">
              Meet The Team
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Creative Minds Behind

            <span className="block ,bg-gradient-to-r, from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Every Great Experience
            </span>
          </h2>

          <p className="mt-8 text-base leading-8 text-slate-400 md:text-lg">
            Designers, developers and strategists working together to
            transform ambitious ideas into world-class digital products.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer"
            >
              <TeamCard
                {...member}
                index={index}
              />
            </div>
          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="group rounded-full bg-blue-600 px-8 hover:bg-blue-500"
          >
            <Link href="#contact">
              Work With Us

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

      </div>

      {/* Modal */}

      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}