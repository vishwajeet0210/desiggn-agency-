export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description: string;

  challenge: string;
  solution: string;

  technologies: string[];

  client: string;
  year: string;
  duration: string;

  liveDemo: string;
  github: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Nova Studio",
    category: "Brand Identity",
    image: "/portfolio/project1.jpg",

    description:
      "Complete branding and responsive website for a modern creative studio.",

    challenge:
      "Nova Studio needed a premium visual identity that could communicate creativity while attracting high-end clients.",

    solution:
      "We designed a complete brand system, responsive website and interactive animations focused on storytelling and user engagement.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
    ],

    client: "Nova Studio",
    year: "2025",
    duration: "6 Weeks",

    liveDemo: "#",
    github: "#",
  },

  {
    title: "Finance Flow",
    category: "Web Design",
    image: "/portfolio/project2.jpg",

    description:
      "Premium fintech landing page focused on performance and conversion.",

    challenge:
      "The client needed a trustworthy and modern landing page capable of converting visitors into customers.",

    solution:
      "Created a conversion-focused interface with smooth animations, optimized performance and premium UI.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],

    client: "Finance Flow",
    year: "2025",
    duration: "4 Weeks",

    liveDemo: "#",
    github: "#",
  },

  {
    title: "Aura Mobile",
    category: "Mobile App",
    image: "/portfolio/project3.jpg",

    description:
      "Modern mobile application UI designed for speed and usability.",

    challenge:
      "Build a mobile experience that felt intuitive for first-time users while maintaining a premium appearance.",

    solution:
      "Designed an elegant mobile interface with a clean UX flow and consistent design system.",

    technologies: [
      "Figma",
      "React Native",
      "Expo",
      "Firebase",
    ],

    client: "Aura",
    year: "2024",
    duration: "5 Weeks",

    liveDemo: "#",
    github: "#",
  },

  {
    title: "Vision Agency",
    category: "UI / UX",
    image: "/portfolio/project4.jpg",

    description:
      "Creative agency website with immersive animations and interactions.",

    challenge:
      "Create an award-style agency website that showcased creativity without sacrificing usability.",

    solution:
      "Designed and developed a premium experience with glassmorphism, animations and responsive layouts.",

    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "GSAP",
    ],

    client: "Vision Agency",
    year: "2025",
    duration: "8 Weeks",

    liveDemo: "#",
    github: "#",
  },
];