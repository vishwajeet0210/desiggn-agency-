"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Briefcase, Users, Award, Star } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 120,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: 80,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Industry Awards",
  },
  {
    icon: Star,
    value: 5,
    suffix: ".0",
    label: "Client Rating",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-12 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/40
              hover:bg-white/10
            "
          >
            <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="text-2xl font-bold text-white md:text-3xl">
              <CountUp
                end={stat.value}
                duration={2}
                enableScrollSpy
              />
              {stat.suffix}
            </h3>

            <p className="mt-2 text-sm text-slate-400 md:text-base">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}