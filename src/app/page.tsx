import HeroSection from "@/app/components/home/hero-section/hero-section";
import ProjectsSection from "./components/home/project-section/project-section";
import DotGridParallax from "./components/DotGridParallax";
import ContactSection from "./components/home/contact-section/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-7xl px-6 space-y-24">
        <DotGridParallax
          className="top-36 absolute inset-0 dot-grid opacity-80"
          strength={0.15}
        />

        <section id="hero">
          <HeroSection />
          <div className="relative mt-10 h-px w-full bg-white/80" />
          <ProjectsSection />
          <div className="relative mt-10 h-px w-full bg-white/80" />
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
