"use client";

import { motion } from "framer-motion";
import BodyDesign from "@/app/projects/nwm/sections/body-section/body-design";

export default function NoWasteMateBody() {
  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <BodyDesign />
    </motion.div>
  );
}
