"use client";

import { motion } from "framer-motion";

function ConceptItem({ text }: { text: string }) {
  return (
    <motion.li
      className="flex items-start gap-3 text-sm text-white/75"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.6,
        margin: "0px 0px -50px 0px",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <span className="mt-[0.48em] h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
      <span className="text-white/80">{text}</span>
    </motion.li>
  );
}

export function ProjectConcepts({
  sections,
}: {
  sections: {
    label: string;
    items: string[];
  }[];
}) {
  return (
    <div className="max-w-xl space-y-14">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <motion.h3
            className="text-sm tracking-widest text-white/50"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            {section.label}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.35,
            }}
          >
            <ul className="mt-6 space-y-4">
              {section.items.map((text, i) => (
                <ConceptItem key={i} text={text} />
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
