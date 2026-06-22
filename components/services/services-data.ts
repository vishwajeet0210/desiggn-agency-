import {
  Palette,
  Globe,
  Smartphone,
  PenTool,
  Layers3,
  Rocket,
  LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;

  overview: string;

  includes: string[];

  technologies: string[];

  timeline: string;

  process: string[];
}

export const services: Service[] = [
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Beautiful, intuitive, and user-focused interfaces that deliver memorable digital experiences.",

    overview:
      "We design intuitive user experiences that increase engagement, improve usability, and create memorable digital products.",

    includes: [
      "Wireframes",
      "User Research",
      "Design Systems",
      "Interactive Prototypes",
      "Dashboard Design",
      "Mobile UI Design",
    ],

    technologies: [
      "Figma",
      "Adobe XD",
      "FigJam",
      "Maze",
    ],

    timeline: "2–4 Weeks",

    process: [
      "Research",
      "Wireframes",
      "UI Design",
      "Prototype",
    ],
  },

  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites built with the latest modern technologies.",

    overview:
      "We build high-performance websites optimized for speed, SEO, scalability, and conversions using modern web technologies.",

    includes: [
      "Landing Pages",
      "Business Websites",
      "E-Commerce",
      "CMS Integration",
      "Dashboards",
      "API Integration",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Framer Motion",
    ],

    timeline: "3–6 Weeks",

    process: [
      "Planning",
      "Development",
      "Testing",
      "Deployment",
    ],
  },

  {
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Responsive mobile-first experiences designed for every screen size and platform.",

    overview:
      "Modern mobile interfaces crafted for both iOS and Android with usability and performance in mind.",

    includes: [
      "App UI Design",
      "Responsive Layouts",
      "User Flows",
      "Interactive Prototype",
      "Design System",
    ],

    technologies: [
      "Figma",
      "React Native",
      "Expo",
    ],

    timeline: "2–5 Weeks",

    process: [
      "Research",
      "UX Design",
      "UI Design",
      "Prototype",
    ],
  },

  {
    icon: PenTool,
    title: "Brand Identity",
    description:
      "Logos, visual systems, and brand experiences that leave a lasting impression.",

    overview:
      "Build a memorable brand with a complete visual identity that communicates professionalism and trust.",

    includes: [
      "Logo Design",
      "Typography",
      "Color Palette",
      "Brand Guidelines",
      "Social Assets",
    ],

    technologies: [
      "Illustrator",
      "Photoshop",
      "Figma",
    ],

    timeline: "2–4 Weeks",

    process: [
      "Discovery",
      "Concept",
      "Revision",
      "Delivery",
    ],
  },

  {
    icon: Layers3,
    title: "Product Design",
    description:
      "Complete digital product design from wireframes to polished user interfaces.",

    overview:
      "From initial ideas to polished user interfaces, we design products that are scalable and user-friendly.",

    includes: [
      "Product Strategy",
      "Wireframes",
      "User Testing",
      "UI Design",
      "Interactive Prototype",
    ],

    technologies: [
      "Figma",
      "FigJam",
      "Notion",
    ],

    timeline: "4–8 Weeks",

    process: [
      "Research",
      "UX",
      "UI",
      "Testing",
    ],
  },

  {
    icon: Rocket,
    title: "Growth Strategy",
    description:
      "Helping businesses grow through design, technology, and strategic thinking.",

    overview:
      "Data-driven strategies focused on increasing traffic, conversions, and long-term business growth.",

    includes: [
      "SEO",
      "Analytics",
      "Marketing Strategy",
      "Performance Optimization",
      "Business Consulting",
    ],

    technologies: [
      "Google Analytics",
      "Search Console",
      "Ahrefs",
      "Notion",
    ],

    timeline: "Ongoing",

    process: [
      "Audit",
      "Strategy",
      "Implementation",
      "Optimization",
    ],
  },
];