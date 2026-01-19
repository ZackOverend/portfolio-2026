"use client";

import NoWasteMateNavigation from "@/app/projects/nwm/sections/nav-section/nav-section";
import NoWasteMateProjects from "@/app/projects/nwm/sections/projects-section/projects-section";
import NoWasteMateHero from "@/app/projects/nwm/sections/hero-section/hero-section";
import NoWasteMateBody from "@/app/projects/nwm/sections/body-section/body-section";
import DotGridParallax from "@/app/components/DotGridParallax";
import { NoWasteMateConcepts } from "@/app/projects/nwm/sections/concepts-section/concepts-section";
import { useLenisAnchor } from "@/app/hooks/useLenisAnchor";
import Divider from "@/app/projects/components/divider";

export default function NoWasteMatePage() {
  const scrollTo = useLenisAnchor();

  return (
    <main className="bg-nwm min-h-screen" id="top">
      <DotGridParallax className="dot-grid opacity-80" strength={0.2} />

      <div className="relative mx-auto max-w-6xl px-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
          {/* CONTENT COLUMN */}
          <div className="pt-32 pb-8">
            <NoWasteMateHero />
            <NoWasteMateProjects />
            <Divider />
            <NoWasteMateConcepts />
            <Divider />

            <NoWasteMateBody />
            <div className="mt-10 flex justify-end">
              <button
                onClick={() => scrollTo("top")}
                className="text-xs text-white/40 hover:text-white/70 transition"
              >
                Back to top ↑
              </button>
            </div>
          </div>

          {/* NAVIGATION COLUMN */}
          <div className="fixed top-8 right-8 sm:sticky sm:top-8 sm:right-auto sm:self-start flex justify-end sm:ç">
            <NoWasteMateNavigation />
          </div>
        </div>
      </div>
    </main>
  );
}
