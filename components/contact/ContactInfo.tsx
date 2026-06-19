"use client";

import { motion } from "framer-motion";

import { contactInfo } from "./contact-data";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {contactInfo.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
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
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -6,
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
            "
          >
            {/* Icon */}

            <div
              className="
                mb-5
                inline-flex
                rounded-2xl
                bg-blue-500/10
                p-4
                text-blue-400
                transition-all
                duration-300
                group-hover:scale-110
              "
            >
              <Icon className="h-6 w-6" />
            </div>

            {/* Title */}

            <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3>

            {/* Value */}

            <p className="mt-3 'break-words' text-slate-400">
              {item.value}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}