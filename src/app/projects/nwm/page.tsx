"use client";

import { motion } from "framer-motion";
import NoWasteMateNavigation from "./nav-section/nwm-nav";
import NoWasteMateProjects from "./projects-section/nwm-projects";

export default function NoWasteMatePage() {
  return (
    <main className="bg-nwm min-h-screen">
      <div className="relative mx-auto max-w-6xl px-8 py-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="pt-32">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl leading-tight tracking-tight sm:text-5xl">
                  No Waste Mate
                </h1>

                <div className="mt-6 max-w-xl space-y-6 font-mono text-sm leading-6 text-white/75">
                  <p>
                    NoWasteMate is a capstone thesis project developed
                    collaboratively by a three-person team, where I led key
                    aspects of the user experience and core application
                    architecture.
                  </p>
                  <p>
                    While the project was built as a team, my role focused on
                    shaping the system architecture and the overall user
                    experience, ensuring the app was intuitive, cohesive, and
                    well-structured as it grew.
                  </p>
                </div>
              </div>
            </div>
            <NoWasteMateProjects />
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-light tracking-tight">
                The Problem Identified
              </h2>

              <div className="mt-8 max-w-4xl space-y-6 text-md">
                <p>
                  In addition to my technical responsibilities, I played a key
                  role in the design and visual direction of NoWasteMate.{" "}
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
                  testing user flows, and visual hierarchy before
                  implementation.
                </p>
                <p></p>
              </div>
            </motion.div>
          </div>
          <div className="fixed sm:sticky top-8 sm:self-start self-end">
            <NoWasteMateNavigation />
          </div>
        </div>
      </div>
    </main>
  );
}
