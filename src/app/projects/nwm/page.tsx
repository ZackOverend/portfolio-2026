"use client";

import NoWasteMateNavigation from "./sections/nav-section/page";
import NoWasteMateProjects from "./sections/projects-section/page";
import NoWasteMateHero from "./sections/hero-section/page";
import NoWasteMateBody from "./sections/body-section/page";
import DotGridParallax from "@/app/components/DotGridParallax";
import { NoWasteMateConcepts } from "./sections/concepts-section/page";
import { useLenisAnchor } from "@/app/hooks/useLenisAnchor";

export default function NoWasteMatePage() {
  const scrollTo = useLenisAnchor();

  return (
    <main className="bg-nwm min-h-screen" id="#top">
      <DotGridParallax className="dot-grid opacity-80" strength={0.2} />

      <div className="relative mx-auto max-w-6xl px-8 py-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
          {/* CONTENT COLUMN */}
          <div className="py-32 ">
            <NoWasteMateHero />
            <NoWasteMateProjects />
            <div className="relative mt-24 mb-12 h-px w-full bg-white/80" />

            <NoWasteMateConcepts />
            <div className="relative my-12 h-px w-full bg-white/80" />

            <NoWasteMateBody />
            <div className="mt-12 ml-auto">
              <button
                onClick={() => scrollTo("top")}
                className="text-xs text-white/40 hover:text-white/70 transition"
              >
                Back to top ↑
              </button>
            </div>
          </div>

          {/* NAVIGATION COLUMN */}
          <div className="fixed sm:sticky top-8 sm:self-start self-end">
            <NoWasteMateNavigation />
          </div>
        </div>
      </div>
    </main>
  );
}
