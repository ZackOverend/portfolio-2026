"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import ProjectCard from "@/app/components/home/projects/project-card";

const projects = [
  {
    title: "NoWasteMate App",
    tech: "SwiftUI  Python  TensorFlow  Firebase",
    device: "mobile" as const,
    href: "/projects/nwm",
  },
  {
    title: "Image-In website",
    tech: "C#  Asp.NET  Next.JS  React  TypeScript",
    device: "desktop" as const,
    href: "/imagein",
  },
  {
    title: "INDStudio 51 Website",
    tech: "HTML  Next.JS  React  TypeScript",
    device: "desktop" as const,
    href: "/indstudio51",
  },
  {
    title: "Nova Weather App",
    tech: "Flutter  Python  Custom API  Microsoft Azure",
    device: "mobile" as const,
    href: "/novaweather",
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
      className="mt-8 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((p) => (
        <motion.div
          key={p.title}
          variants={item}
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <ProjectCard
            title={p.title}
            tech={p.tech}
            device={p.device}
            href={p.href}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
