"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-28 lg:py-36"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <motion.div
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
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-blue-400" />

            <span className="text-sm font-medium text-blue-300">
              Contact Us
            </span>
          </div>

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
            Let us Build Something
            <span className="block 'bg-gradient-to-r' from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mt-8 text-base leading-8 text-slate-400 md:text-lg">
            Whether you are launching a startup, refreshing your brand,
            or building your next big digital product, we are here to help.
          </p>
        </motion.div>

        {/* Contact Info */}

        <div className="mt-16">
          <ContactInfo />
        </div>

        {/* Contact Form */}

        <div className="mx-auto mt-16 max-w-4xl">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}