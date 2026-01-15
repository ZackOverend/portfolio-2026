"use client";

import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      className="relative mt-24 mb-12 h-px w-full bg-white/80"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
    />
  );
}
