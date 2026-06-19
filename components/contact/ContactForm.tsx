"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <motion.form
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl

        md:p-8
        lg:p-10
      "
    >
      {/* Name + Email */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="
              h-12
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-500
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="
              h-12
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-500
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "
          />
        </div>

      </div>

      {/* Subject */}

      <div className="mt-6">
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Subject
        </label>

        <input
          id="subject"
          type="text"
          placeholder="Project Discussion"
          className="
            h-12
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-500
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
          "
        />
      </div>

      {/* Message */}

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Message
        </label>

        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your project..."
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-500
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
          "
        />
      </div>

      {/* Button */}

      <div className="mt-8">
        <Button
          type="submit"
          className="
            group
            h-12
            w-full
            rounded-full
            bg-blue-600
            text-base
            font-semibold
            transition-all
            duration-300
            hover:bg-blue-500
            md:w-auto
            md:px-8
          "
        >
          Send Message

          <Send
            className="
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Button>
      </div>
    </motion.form>
  );
}