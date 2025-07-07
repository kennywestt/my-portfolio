import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro />}
      </AnimatePresence>
      <div className={`${showIntro ? "pointer-events-none blur-sm" : ""} transition-all duration-700`}>
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
