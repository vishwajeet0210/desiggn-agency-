import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    icon: IconType;
    href: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Morgan",
    role: "Creative Director",
    image: "/team/team1.jpg",
    bio: "Passionate about creating premium digital experiences with strategy and creativity.",
    socials: [
      {
        icon: FaLinkedin,
        href: "#",
      },
      {
        icon: FaDribbble,
        href: "#",
      },
    ],
  },
  {
    name: "Sophia Lee",
    role: "UI / UX Designer",
    image: "/team/team2.jpg",
    bio: "Designing intuitive interfaces that connect brands with people.",
    socials: [
      {
        icon: FaLinkedin,
        href: "#",
      },
      {
        icon: FaDribbble,
        href: "#",
      },
    ],
  },
  {
    name: "James Carter",
    role: "Frontend Developer",
    image: "/team/team3.jpg",
    bio: "Building lightning-fast modern web experiences with React and Next.js.",
    socials: [
      {
        icon: FaGithub,
        href: "#",
      },
      {
        icon: FaLinkedin,
        href: "#",
      },
    ],
  },
];