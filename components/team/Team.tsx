"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,

} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  {
    name: "Vishwajeet Kumar",
    role: "Founder & Creative Director",
    image: "/team/placeholder.jpg",
    bio: "Creative designer passionate about branding, UI/UX, and premium web experiences.",
    skills: ["Branding", "UI/UX", "Web Design"],
  },
  {
    name: "Rahul",
    role: "Co-Founder",
    image: "/team/placeholder.jpg",
    bio: "Helping businesses grow through strategy and creative direction.",
    skills: ["Strategy", "Marketing", "Branding"],
  },
  {
    name: "Chitij",
    role: "Lead Developer",
    image: "/team/placeholder.jpg",
    bio: "Building fast, responsive and scalable websites.",
    skills: ["Next.js", "React", "TypeScript"],
  },
  {
    name: "Aman A",
    role: "Head of Editing",
    image: "/team/placeholder.jpg",
    bio: "Creating engaging visual content for digital platforms.",
    skills: ["Editing", "Motion", "Content"],
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#08111f] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          badge="Our Team"
          title="Meet The Creative Minds"
          description="A passionate team of designers, developers and creators building exceptional digital experiences."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <GlassCard className="overflow-hidden">

                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-blue-400">
                    {member.role}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <Button size="icon" variant="outline">
                      <User size={18} />
                    </Button>

                    <Button size="icon" variant="outline">
                      <User size={18}  />
                    </Button>
                  </div>

                  <Dialog>

                    <DialogTrigger asChild>
                      <Button className="mt-6 w-full">
                        View Profile
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="border-white/10 bg-[#0B1120] text-white">

                      <DialogHeader>

                        <DialogTitle>
                          {member.name}
                        </DialogTitle>

                        <DialogDescription className="text-slate-400">
                          {member.role}
                        </DialogDescription>

                      </DialogHeader>

                      <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-2xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <p className="text-slate-300">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </DialogContent>

                  </Dialog>

                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}