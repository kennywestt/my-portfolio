import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection />
      </main>
      <Footer />

    </>
  );
}
