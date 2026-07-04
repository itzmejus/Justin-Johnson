import { profile } from "./data/profile";
import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import LanguagesSection from "./components/sections/LanguagesSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import CVPage from "./pages/CVPage";

export default function App() {
  if (window.location.pathname === "/cv") {
    return <CVPage />;
  }

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <ProjectsSection />
        <LanguagesSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Sticky WhatsApp button */}
      <a
        href={`https://wa.me/${profile.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.04 7.8L.5 31.5l7.93-2.01A15.45 15.45 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.3a13.17 13.17 0 0 1-6.72-1.84l-.48-.29-4.7 1.19 1.24-4.57-.32-.5A13.2 13.2 0 1 1 16 28.8zm7.24-9.88c-.4-.2-2.35-1.16-2.71-1.29-.37-.13-.63-.2-.9.2s-1.03 1.29-1.26 1.55c-.23.27-.46.3-.86.1a10.83 10.83 0 0 1-3.19-1.97 11.96 11.96 0 0 1-2.21-2.74c-.23-.4 0-.61.18-.81.16-.18.4-.46.6-.69.2-.23.26-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.9-2.16-1.23-2.96-.32-.78-.65-.67-.9-.68h-.76c-.27 0-.7.1-1.06.5-.37.4-1.4 1.36-1.4 3.32s1.43 3.85 1.63 4.12c.2.27 2.82 4.3 6.83 6.03.95.41 1.7.66 2.28.84.96.3 1.83.26 2.52.16.77-.12 2.35-.96 2.68-1.89.33-.93.33-1.72.23-1.89-.1-.17-.36-.27-.76-.47z" />
        </svg>
      </a>
    </div>
  );
}
