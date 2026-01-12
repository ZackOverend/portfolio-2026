"use client";

import { motion } from "framer-motion";
import NoWasteMateNavigation from "./nav-section/nwm-nav";
import NoWasteMateProjects from "./projects-section/nwm-projects";
import NoWasteMateHero from "./hero-section/hero";
import NoWasteMateBody from "./body-section/body";
import DotGridParallax from "@/app/components/DotGridParallax";

export default function NoWasteMatePage() {
  return (
    <main className="bg-nwm min-h-screen">
      <DotGridParallax className="dot-grid opacity-80" strength={0.2} />

      <div className="relative mx-auto max-w-6xl px-8 py-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
          {/* CONTENT COLUMN */}
          <div className="py-32 ">
            <NoWasteMateHero />
            <NoWasteMateProjects />
            <div className="relative my-24 h-px w-full bg-white/80" />
            <NoWasteMateBody />
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
