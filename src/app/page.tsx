import Hero from "@/app/components/home/hero-section/page";
import ProjectsSection from "./components/home/project-section/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-7xl px-6 space-y-24">
        <div className="pointer-events-none top-1/4 absolute inset-0 dot-grid opacity-80" />

        <section id="hero">
          <Hero />
          <ProjectsSection />
        </section>
      </main>
    </div>
  );
}
