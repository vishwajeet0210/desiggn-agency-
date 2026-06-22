"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  CalendarDays,
  Clock3,
  Building2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { PortfolioItem } from "./portfolio-data";

interface PortfolioModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({
  project,
  onClose,
}: PortfolioModalProps) {
  if (!project) return null;

  return (
    <Dialog
      open={!!project}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        showCloseButton
        className="
          max-h-[90vh]
          overflow-y-auto
          border
          border-white/10
          bg-[#07111f]/95
          p-10
          text-white
          backdrop-blur-3xl
          sm:max-w-6xl
        "
      >
        <div className="space-y-10">

          {/* Image */}

          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Header */}

          <div>

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              {project.category}
            </span>

            <h2 className="mt-5 text-4xl font-black">
              {project.title}
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              {project.description}
            </p>

          </div>

          {/* Info */}

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Building2 className="mb-3 h-6 w-6 text-blue-400" />

              <p className="text-sm text-slate-500">
                Client
              </p>

              <h4 className="mt-2 font-semibold">
                {project.client}
              </h4>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <CalendarDays className="mb-3 h-6 w-6 text-blue-400" />

              <p className="text-sm text-slate-500">
                Year
              </p>

              <h4 className="mt-2 font-semibold">
                {project.year}
              </h4>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Clock3 className="mb-3 h-6 w-6 text-blue-400" />

              <p className="text-sm text-slate-500">
                Duration
              </p>

              <h4 className="mt-2 font-semibold">
                {project.duration}
              </h4>
            </div>

          </div>

          {/* Challenge */}

          <div>

            <h3 className="text-2xl font-bold">
              Challenge
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              {project.challenge}
            </p>

          </div>

          {/* Solution */}

          <div>

            <h3 className="text-2xl font-bold">
              Solution
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              {project.solution}
            </p>

          </div>

          {/* Technologies */}

          <div>

            <h3 className="text-2xl font-bold">
              Technologies
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">

              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-blue-500/30
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    text-blue-300
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4">

            <Link
              href={project.liveDemo}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-600
                px-6
                py-3
                font-semibold
                transition
                hover:bg-blue-500
              "
            >
              <ExternalLink className="h-5 w-5" />
              Live Demo
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                font-semibold
                transition
                hover:bg-white/10
              "
            >
              <FaGithub className="h-5 w-5" />
              GitHub
            </Link>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}