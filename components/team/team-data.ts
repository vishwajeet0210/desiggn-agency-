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
  experience: string;
  location: string;
  email: string;
  skills: string[];

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

    experience: "10+ Years",
    location: "New York, USA",
    email: "alex@desiggn.com",

    skills: [
      "Brand Strategy",
      "UI Design",
      "Creative Direction",
      "Figma",
      "Leadership",
    ],

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

    experience: "7 Years",
    location: "Singapore",
    email: "sophia@desiggn.com",

    skills: [
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],

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

    experience: "6 Years",
    location: "London",
    email: "james@desiggn.com",

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],

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