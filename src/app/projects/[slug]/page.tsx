import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DotGridParallax from "@/app/components/DotGridParallax";
import Divider from "@/app/projects/components/divider";
import ProjectHero from "@/app/projects/components/sections/hero/hero";
import ProjectFeatures from "@/app/projects/components/sections/features/features";
import ProjectNav from "@/app/projects/components/sections/nav/nav";
import { ProjectConcepts } from "@/app/projects/components/sections/concepts/concepts";
import ProjectBody from "@/app/projects/components/sections/body/body";
import BackToTop from "@/app/projects/components/back-to-top";
import { getProject, projectSlugs } from "@/app/projects/data";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const title = project.hero.title;
  const description = project.hero.paragraphs[0];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/projects/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zackary Overend Portfolio" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const data = getProject(slug);
  if (!data) notFound();

  return (
    <main className={`${data.themeClass} min-h-screen`} id="top">
      <DotGridParallax
        className={data.dotGridClass ?? "dot-grid opacity-80"}
        strength={0.2}
      />

      <div className="relative mx-auto max-w-6xl px-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="pt-32 pb-8">
            <ProjectHero hero={data.hero} />
            <ProjectFeatures items={data.features} />
            <Divider />
            <ProjectConcepts sections={data.concepts} />
            <Divider />
            <ProjectBody body={data.body} />
            <div className="mt-10 flex justify-end">
              <BackToTop />
            </div>
          </div>

          <div className="fixed right-8 top-8 flex justify-end sm:sticky sm:right-auto sm:self-start">
            <ProjectNav externalUrl={data.nav?.externalUrl} />
          </div>
        </div>
      </div>
    </main>
  );
}
