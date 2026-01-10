import Hero from "@/app/components/sections/hero/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-7xl px-6 space-y-24">
        <div className="pointer-events-none top-1/4 absolute inset-0 dot-grid opacity-80" />

        <section id="hero">
          <Hero />
        </section>
      </main>
    </div>
  );
}
