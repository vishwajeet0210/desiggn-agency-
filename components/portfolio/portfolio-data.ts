export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Nova Studio",
    category: "Brand Identity",
    image: "/portfolio/project1.jpg",
    description:
      "Complete branding and responsive website for a modern creative studio.",
  },
  {
    title: "Finance Flow",
    category: "Web Design",
    image: "/portfolio/project2.jpg",
    description:
      "Premium fintech landing page focused on performance and conversion.",
  },
  {
    title: "Aura Mobile",
    category: "Mobile App",
    image: "/portfolio/project3.jpg",
    description:
      "Modern mobile application UI designed for speed and usability.",
  },
  {
    title: "Vision Agency",
    category: "UI / UX",
    image: "/portfolio/project4.jpg",
    description:
      "Creative agency website with immersive animations and interactions.",
  },
];