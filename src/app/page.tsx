import Hero from "@/app/components/sections/hero/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-3xl px-6 py-20 space-y-24">
        <section id="hero">
          <Hero />
        </section>
      </main>
    </div>
  );
}
