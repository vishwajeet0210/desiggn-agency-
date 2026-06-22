import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Team from "@/components/team/Team";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  );
}