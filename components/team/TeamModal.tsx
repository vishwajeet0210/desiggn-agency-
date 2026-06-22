"use client";

import Image from "next/image";
import { Mail, MapPin, Briefcase } from "lucide-react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { TeamMember } from "./team-data";

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamModal({
  member,
  onClose,
}: TeamModalProps) {
  if (!member) return null;

  return (
    <Dialog
      open={!!member}
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
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">

          {/* Left */}

          <div>
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right */}

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              {member.role}
            </p>

            <h2 className="mt-3 text-4xl font-black">
              {member.name}
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              {member.bio}
            </p>

            {/* Info */}

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Briefcase className="mb-3 h-6 w-6 text-blue-400" />

                <p className="text-sm text-slate-500">
                  Experience
                </p>

                <h4 className="mt-2 font-semibold">
                  {member.experience}
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <MapPin className="mb-3 h-6 w-6 text-blue-400" />

                <p className="text-sm text-slate-500">
                  Location
                </p>

                <h4 className="mt-2 font-semibold">
                  {member.location}
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Mail className="mb-3 h-6 w-6 text-blue-400" />

                <p className="text-sm text-slate-500">
                  Email
                </p>

                <h4 className="mt-2 break-all font-semibold">
                  {member.email}
                </h4>
              </div>

            </div>

            {/* Skills */}

            <div className="mt-10">

              <h3 className="mb-5 text-xl font-bold">
                Skills
              </h3>

              <div className="flex flex-wrap gap-3">

                {member.skills.map((skill) => (
                  <span
                    key={skill}
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
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}