"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import ProjectCard from "@/app/components/home/project-section/project-card";

const projects = [
  {
    title: "NoWasteMate App",
    tech: "SwiftUI  Python  TensorFlow  Firebase",
    device: "mobile" as const,
    href: "/projects/nwm",
    iconSrc: "/thumbnails/nowastemate.svg",
  },
  {
    title: "Image-In website",
    tech: "C#  Asp.NET  Next.JS  React  TypeScript",
    device: "desktop" as const,
    href: "/imagein",
    iconSrc: "/thumbnails/image-in.svg",
  },
  {
    title: "INDStudio 51 Website",
    tech: "HTML  Next.JS  React  TypeScript",
    device: "desktop" as const,
    iconSrc: "/thumbnails/indstudio51.svg",
  },
  {
    title: "Nova Weather App",
    tech: "Flutter  Python  Custom API  Microsoft Azure",
    device: "mobile" as const,
    iconSrc: "/thumbnails/novaweather.svg",
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
      className="m-24 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((p) => (
        <motion.div key={p.title} variants={item}>
          <ProjectCard
            title={p.title}
            tech={p.tech}
            device={p.device}
            href={p.href}
            iconSrc={p.iconSrc}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
