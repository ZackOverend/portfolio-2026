"use client";
import { motion } from "framer-motion";

export default function ProjectHero({ hero }: { hero: any }) {
  return (
    <motion.div
      className="flex items-start justify-between"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <h1 className="h1">{hero.title}</h1>

        <div className="py-16 max-w-xl space-y-6 font-mono text-sm leading-6 text-white/75">
          {(hero.paragraphs ?? []).map((text: string, i: number) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
