"use client";

import DotGridParallax from "@/app/components/DotGridParallax";
import Divider from "@/app/projects/components/divider";
import { useLenisAnchor } from "@/app/hooks/useLenisAnchor";

import ProjectHero from "@/app/projects/components/sections/hero/hero";
import ProjectFeatures from "@/app/projects/components/sections/features/features";
import ProjectNav from "@/app/projects/components/sections/nav/nav";
import { ProjectConcepts } from "@/app/projects/components/sections/concepts/concepts";
import ProjectBody from "@/app/projects/components/sections/body/body";

import indstudio51 from "@/app/projects/indstudio51/indstudio51.json";

export default function ProjectsPage() {
  const scrollTo = useLenisAnchor();

  const data: any = indstudio51;

  return (
    <main className={`${data.themeClass} min-h-screen`} id="top">
      <DotGridParallax
        className={data.dotGridClass ?? "dot-grid opacity-80"}
        strength={0.2}
      />

      <div className="relative mx-auto max-w-6xl px-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
          {/* CONTENT COLUMN */}
          <div className="pt-32 pb-8">
            <ProjectHero hero={data.hero} />
            <ProjectFeatures items={data.features} />
            <Divider />
            <ProjectConcepts sections={data.concepts} />
            <Divider />

            <ProjectBody body={data.body} />
            <div className="mt-10 flex justify-end">
              <button
                onClick={() => scrollTo("top")}
                className="text-xs text-white/40 transition hover:text-white/70"
              >
                Back to top ↑
              </button>
            </div>
          </div>

          {/* NAV COLUMN */}
          <div className="fixed right-8 top-8 flex justify-end sm:sticky sm:right-auto sm:self-start">
            <ProjectNav externalUrl={data.nav?.externalUrl} />
          </div>
        </div>
      </div>
    </main>
  );
}
