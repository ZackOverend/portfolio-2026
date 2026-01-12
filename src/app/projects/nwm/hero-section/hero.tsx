"use client";
import { motion } from "framer-motion";

export default function NoWasteMateHero() {
  return (
    <motion.div
      className="flex items-start justify-between"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <h1 className="h1">No Waste Mate</h1>

        <div className="py-16 max-w-xl space-y-6 font-mono text-sm leading-6 text-white/75">
          <p>
            NoWasteMate is a capstone thesis project developed collaboratively
            by a three-person team, where I led key aspects of the user
            experience and core application architecture.
          </p>
          <p>
            While the project was built as a team, my role focused on shaping
            the system architecture and the overall user experience, ensuring
            the app was intuitive, cohesive, and well-structured as it grew.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
