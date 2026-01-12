"use client";

import { motion } from "framer-motion";

export default function NoWasteMateBody() {
  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="h2">Design Development & Process</h2>
      <div className="mt-8 max-w-4xl space-y-6 text-md">
        <p>
          In addition to my technical responsibilities, I played a key role in
          the design and visual direction of NoWasteMate.{" "}
          <motion.span
            className="inline-block relative"
            initial={{ "--underline-scale": 0 } as any}
            whileInView={{ "--underline-scale": 1 } as any}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          >
            <span className="animated-underline">
              I led the UI and interaction design process in Figma,
            </span>
          </motion.span>{" "}
          testing user flows, and visual hierarchy before implementation.
        </p>
        <p></p>
      </div>
    </motion.div>
  );
}
