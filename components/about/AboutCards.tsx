"use client";

import { motion } from "framer-motion";
import { aboutCards } from "./about-data";

export default function AboutCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {aboutCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
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
            whileHover={{
              y: -8,
            }}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-blue-500/40
              hover:bg-white/10
              hover:shadow-xl
              hover:shadow-blue-500/10
            "
          >
            {/* Icon */}

            <div
              className="
                mb-6
                inline-flex
                rounded-2xl
                bg-blue-500/10
                p-4
                text-blue-400
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              <Icon className="h-7 w-7" />
            </div>

            {/* Title */}

            <h3 className="text-xl font-bold text-white">
              {card.title}
            </h3>

            {/* Description */}

            <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}