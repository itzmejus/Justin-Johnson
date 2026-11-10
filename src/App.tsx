import { useEffect } from "react";
import { profile } from "./data/profile";
import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import VenturesSection from "./components/sections/VenturesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import LanguagesSection from "./components/sections/LanguagesSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";
import ExploreSection from "./components/sections/ExploreSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ChatWidgetHint from "./components/ChatWidgetHint";
import { CHAT_LAUNCHER_BOX, useChatWidget } from "./hooks/useChatWidget";
import CVPage from "./pages/CVPage";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import FreelancePage from "./pages/FreelancePage";
import ServicesPage from "./pages/ServicesPage";
import SeoPage from "./pages/seo/SeoPage";
import SeoHubPage from "./pages/seo/SeoHubPage";
import SeoNotFoundPage from "./pages/seo/SeoNotFoundPage";
import { getSeoPage } from "./data/seo";
import { hubConfigs } from "./data/seo/hubs";
import type { SeoCategory } from "./data/seo/types";
import { stripLocale, t } from "./i18n/locale";
import { useSEO } from "./hooks/useSEO";

const SEO_DETAIL_CATEGORIES: SeoCategory[] = ["technologies", "solutions", "resources", "industries", "guides"];
const SEO_HUB_CATEGORIES: SeoCategory[] = ["technologies", "solutions", "resources", "industries", "guides"];

export default function App() {
  // Logical route path: the /de prefix is stripped so both languages share one routing table.
  const path = stripLocale(window.location.pathname);
  const chat = useChatWidget();
  // Stack the WhatsApp button above the chat launcher when they share the corner.
  const whatsappAboveChat = chat.ready && chat.position === "right";

  // Full page loads (every nav here is a real browser navigation, not client-side
  // routing) can race the browser's native scroll-to-hash against React mounting
  // the target section, so retry a few times until the element actually exists.
  useEffect(() => {
    if (path !== "/" || !window.location.hash) return;

    const id = window.location.hash.slice(1);
    let attempts = 0;
    const tryScroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(tryScroll, 50);
      }
    };
    tryScroll();
  }, [path]);

  if (path === "/cv" || path === "/cv/") {
    return <CVPage />;
  }

  if (path === "/freelance" || path === "/freelance/") {
    return <FreelancePage />;
  }

  if (path === "/services" || path === "/services/") {
    return <ServicesPage />;
  }

  if (path.startsWith("/services/")) {
    const slug = path.slice("/services/".length).replace(/\/$/, "");
    const page = getSeoPage("services", slug);
    return page ? <SeoPage page={page} /> : <SeoNotFoundPage category="services" />;
  }

  for (const category of SEO_HUB_CATEGORIES) {
    if (path === `/${category}` || path === `/${category}/`) {
      return <SeoHubPage hub={hubConfigs[category]} />;
    }
  }

  for (const category of SEO_DETAIL_CATEGORIES) {
    const prefix = `/${category}/`;
    if (path.startsWith(prefix)) {
      const slug = path.slice(prefix.length).replace(/\/$/, "");
      const page = getSeoPage(category, slug);
      return page ? <SeoPage page={page} /> : <SeoNotFoundPage category={category} />;
    }
  }

  if (path === "/blog" || path === "/blog/") {
    return <BlogListPage />;
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length).replace(/\/$/, "");
    return <BlogPostPage slug={slug} />;
  }

  return <HomePage whatsappAboveChat={whatsappAboveChat} />;
}

function HomePage({ whatsappAboveChat }: { whatsappAboveChat: boolean }) {
  useSEO(
    t({
      en: {
        title: "Justin Johnson | Full Stack Developer & Freelance React/Next.js Engineer",
        description:
          "Justin Johnson is a Full Stack Developer and freelance React, Next.js, Node.js & AWS engineer based in Abu Dhabi, UAE, specializing in e-commerce, Shopify headless commerce, cloud integrations, and multi-market booking platforms. Available for freelance and contract work — explore case studies and get in touch.",
        path: "/",
        keywords:
          "Justin Johnson, Full Stack Developer, Freelance Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, AWS Developer, Shopify Headless Commerce Developer, E-commerce Developer, Web Developer Abu Dhabi, Web Developer UAE, Freelance Web Developer, Hire React Developer, Booking Platform Developer, JavaScript Developer, TypeScript Developer",
      },
      de: {
        title: "Justin Johnson | Full Stack Entwickler – React, Next.js & AWS",
        description:
          "Justin Johnson ist Full Stack Entwickler und freiberuflicher React-, Next.js-, Node.js- & AWS-Entwickler mit Schwerpunkt E-Commerce, Shopify Headless Commerce, Cloud-Integrationen und Buchungsplattformen. Verfügbar für Freelance- und Projektarbeit.",
        path: "/",
        keywords:
          "Justin Johnson, Full Stack Entwickler, Freiberuflicher Full Stack Entwickler, React Entwickler, Next.js Entwickler, Node.js Entwickler, AWS Entwickler, Shopify Headless Commerce Entwickler, E-Commerce Entwickler, Freelance Webentwickler, React Entwickler beauftragen, Buchungsplattform Entwicklung, TypeScript Entwickler, Webentwickler Deutschland",
      },
    }),
  );

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <VenturesSection />
        <ProjectsSection />
        <LanguagesSection />
        <EducationSection />
        <ExploreSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Sticky WhatsApp button */}
      <a
        href={`https://wa.me/${profile.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{
          backgroundColor: "#25D366",
          ...(whatsappAboveChat && { bottom: CHAT_LAUNCHER_BOX + 8, right: CHAT_LAUNCHER_BOX / 2 - 28 }),
        }}
        aria-label={t({ en: "Chat on WhatsApp", de: "Per WhatsApp chatten" })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.04 7.8L.5 31.5l7.93-2.01A15.45 15.45 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.3a13.17 13.17 0 0 1-6.72-1.84l-.48-.29-4.7 1.19 1.24-4.57-.32-.5A13.2 13.2 0 1 1 16 28.8zm7.24-9.88c-.4-.2-2.35-1.16-2.71-1.29-.37-.13-.63-.2-.9.2s-1.03 1.29-1.26 1.55c-.23.27-.46.3-.86.1a10.83 10.83 0 0 1-3.19-1.97 11.96 11.96 0 0 1-2.21-2.74c-.23-.4 0-.61.18-.81.16-.18.4-.46.6-.69.2-.23.26-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.9-2.16-1.23-2.96-.32-.78-.65-.67-.9-.68h-.76c-.27 0-.7.1-1.06.5-.37.4-1.4 1.36-1.4 3.32s1.43 3.85 1.63 4.12c.2.27 2.82 4.3 6.83 6.03.95.41 1.7.66 2.28.84.96.3 1.83.26 2.52.16.77-.12 2.35-.96 2.68-1.89.33-.93.33-1.72.23-1.89-.1-.17-.36-.27-.76-.47z" />
        </svg>
      </a>
      <ChatWidgetHint />
      <ScrollToTopButton />
    </div>
  );
}
