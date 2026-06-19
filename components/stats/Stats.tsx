"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    end: 120,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    end: 50,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    end: 5,
    suffix: "+",
    label: "Creative Experts",
  },
  {
    end: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#08111f] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
          >
            <h3 className="text-5xl font-black text-blue-500">
              <CountUp
                end={stat.end}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
              />
              {stat.suffix}
            </h3>

            <p className="mt-4 text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}