"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { services, Service } from "./services-data";

export default function Services() {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  return (
    <>
      <section
        id="services"
        className="relative overflow-hidden py-20 md:py-28 lg:py-36"
      >
        {/* Background */}

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
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
                Our Services
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Everything You Need To

              <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Build Your Digital Brand
              </span>
            </h2>

            <p className="mt-8 text-base leading-8 text-slate-400 md:text-lg">
              From strategy and branding to design and development,
              we create digital experiences that are beautiful,
              functional, and built to grow your business.
            </p>
          </motion.div>

          {/* Grid */}

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
                onClick={() => setSelectedService(service)}
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
              className="group rounded-full bg-blue-600 px-8 hover:bg-blue-500"
            >
              <Link href="#portfolio">
                View Our Work

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

        </div>
      </section>

      {/* Modal */}

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}