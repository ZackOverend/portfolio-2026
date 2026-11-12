"use client";

import { motion, type Variants, easeOut } from "motion/react";
import ProjectCard from "@/app/components/home/project-section/project-card";

const projects = [
  {
    title: "ResuHost Resume API",
    summary: "FastAPI backend for resume management and PDF generation",
    tags: ["FastAPI", "Python", "PostgreSQL", "Docker"],
    device: "desktop" as const,
    href: "/projects/resuhost",
    iconSrc: "/thumbnails/resuhost.svg",
  },
  {
    title: "NoWasteMate App",
    summary: "iOS Food Waste Manager",
    tags: ["SwiftUI", "FastAPI", "Firebase", "TensorFlow"],
    device: "mobile" as const,
    href: "/projects/nwm",
    iconSrc: "/thumbnails/nowastemate.svg",
  },
  {
    title: "Nova Weather App",
    summary: "Weather app with custom API + cloud integration",
    tags: ["Flutter", "Python", "Azure", "API"],
    device: "mobile" as const,
    href: "/projects/nova-weather",
    iconSrc: "/thumbnails/novaweather.svg",
  },
  {
    title: "Image-In website",
    summary: "Drag & Drop Images for Content Analysis Website",
    tags: ["Next.js", "React", "TypeScript", "C# API"],
    device: "desktop" as const,
    href: "/projects/image-in",
    iconSrc: "/thumbnails/image-in.svg",
  },
  {
    title: "INDStudio 51 Website",
    summary: "Business site rebuild with a clean, responsive layout",
    tags: ["Next.js", "React", "TypeScript", "UI/UX"],
    device: "desktop" as const,
    href: "/projects/indstudio51",
    iconSrc: "/thumbnails/indstudio51.svg",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(1px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function ProjectsSection() {
  return (
    <motion.div
      className="mx-4 my-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:mx-10 md:grid-cols-2 lg:mx-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
        margin: "0px 0px 200px 0px", // trigger ~200px earlier
      }}
    >
      {projects.map((p) => (
        <motion.div key={p.title} variants={item}>
          <ProjectCard
            title={p.title}
            summary={p.summary}
            tags={p.tags}
            device={p.device}
            href={p.href}
            iconSrc={p.iconSrc}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
