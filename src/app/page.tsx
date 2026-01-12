import Hero from "@/app/components/home/hero-section/page";
import ProjectsSection from "./components/home/project-section/page";
import DotGridParallax from "./components/DotGridParallax";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-7xl px-6 space-y-24">
        <DotGridParallax
          className="top-1/6 absolute inset-0 dot-grid opacity-80"
          strength={0.15}
        />

        <section id="hero">
          <Hero />
          <ProjectsSection />
        </section>
      </main>
    </div>
  );
}
