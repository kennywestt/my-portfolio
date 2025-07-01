import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <main className="relative z-10 pt-[100vh]">
          <AboutSection />
          <ProjectSection />
          <ContactSection />
          <Footer />
        </main>
    </>
  );
}
