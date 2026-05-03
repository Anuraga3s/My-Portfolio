import { Navbar } from "../components/Navbar";
import { CarHeroSection } from "../components/CarHeroSection";
import { ProjectsCarousel } from "../components/ProjectsCarousel";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <CarHeroSection />
        <ProjectsCarousel />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
