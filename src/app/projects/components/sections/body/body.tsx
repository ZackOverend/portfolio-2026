"use client";

import { motion } from "motion/react";
import Gallery from "@/app/projects/components/gallery";
import { useState, type CSSProperties } from "react";
import type { Project, TwoColumnSection, RichTextSection, GallerySection } from "@/app/projects/project";

export default function ProjectBody({ body }: { body: Project["body"] }) {
  return (
    <div className="space-y-16">
      {body.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
}

function Section({ section }: { section: Project["body"][number] }) {
  if (section.kind === "twoColumn") return <TwoColumn section={section} />;
  if (section.kind === "richText") return <RichText section={section} />;
  if (section.kind === "gallery")
    return <StandaloneGallery section={section} />;
  return null;
}

function TwoColumn({ section }: { section: TwoColumnSection }) {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_var(--right-width)]"
      style={{ "--right-width": `${section.layout?.rightWidth ?? 420}px` } as CSSProperties}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="space-y-4">
        <h2 className="h2">{section.title}</h2>
        {section.paragraphs?.map((p: string, i: number) => (
          <p key={i} className="p-body">
            {p}
          </p>
        ))}
      </div>

      <div className="min-h-128 lg:min-h-64 h-full">
        <Gallery
          items={section.gallery.items}
          index={index}
          setIndex={setIndex}
        />
      </div>
    </motion.div>
  );
}

function RichText({ section }: { section: RichTextSection }) {
  return (
    <motion.div
      className="space-y-6 max-w-4xl"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="h2">{section.title}</h2>
      {section.paragraphs?.map((p: string, i: number) => (
        <p key={i} className="p-body">
          {p}
        </p>
      ))}
    </motion.div>
  );
}

function StandaloneGallery({ section }: { section: GallerySection }) {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.4,
        margin: section.motion?.viewportMargin ?? "0px 0px 0px 0px",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {section.title ? <h2 className="h2 mb-6">{section.title}</h2> : null}
      <div className="aspect-video">
        <Gallery items={section.items} index={index} setIndex={setIndex} />
      </div>
    </motion.div>
  );
}
