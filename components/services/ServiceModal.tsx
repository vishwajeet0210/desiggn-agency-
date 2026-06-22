"use client";

import { CheckCircle2, Clock3, ArrowRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { Service } from "./services-data";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({
  service,
  onClose,
}: ServiceModalProps) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <Dialog
      open={!!service}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        showCloseButton
        className="max-w-5xl overflow-hidden border border-white/10 bg-[#07111f]/95 p-0 text-white backdrop-blur-3xl"
      >
        <div className="max-h-[85vh] overflow-y-auto p-10">

          {/* Header */}

          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-400">
              <Icon className="h-10 w-10" />
            </div>

            <div>

              <h2 className="text-4xl font-black">
                {service.title}
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                {service.overview}
              </p>

            </div>

          </div>

          {/* Timeline */}

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">

            <div className="flex items-center gap-4">

              <Clock3 className="h-7 w-7 text-blue-400" />

              <div>

                <p className="text-sm text-slate-500">
                  Estimated Timeline
                </p>

                <h4 className="mt-1 font-semibold">
                  {service.timeline}
                </h4>

              </div>

            </div>

          </div>

          {/* Includes */}

          <div className="mt-10">

            <h3 className="text-2xl font-bold">
              What is Included
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {service.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </div>

          {/* Technologies */}

          <div className="mt-10">

            <h3 className="text-2xl font-bold">
              Technologies
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">

              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Process */}

          <div className="mt-10">

            <h3 className="text-2xl font-bold">
              Our Process
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-4">

              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >

                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="mt-4 text-slate-300">
                    {step}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="mt-12 flex justify-end">

            <button
              onClick={onClose}
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
            >
              Start Your Project

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

            </button>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}