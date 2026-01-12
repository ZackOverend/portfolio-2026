"use client";

import Image from "next/image";
import Link from "next/link";
import Gallery, { type GalleryItem } from "@/app/projects/nwm/gallery";
import { useState } from "react";
import { motion } from "framer-motion";

function ActionButton({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="flex flex-col items-center gap-2">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-black shadow-sm transition group-hover:scale-[1.02]">
        {children}
      </div>
      <span className="text-xs text-white/70">{label}</span>
    </Link>
  );
}

function FeatureTile({
  icon,
  text,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex h-28 w-40 flex-col items-center justify-center gap-3 text-center",
        "border bg-white/5 transition",
        active ? "border-white/60" : "border-white/25 hover:border-white/45",
      ].join(" ")}
    >
      <div className="text-white/90">{icon}</div>
      <div className="px-3 text-[11px] leading-4 text-white/80">{text}</div>
    </button>
  );
}

export default function NoWasteMatePage() {
  const items: GalleryItem[] = [
    { src: "/nwm/01-ios.png", title: "iOS App (SwiftUI)" },
    { src: "/nwm/02-swiftui.png", title: "SwiftUI UI & UX" },
    { src: "/nwm/03-python.png", title: "Python Backend (FastAPI)" },
    { src: "/nwm/04-api.png", title: "API Integration" },
    { src: "/nwm/05-firebase.png", title: "Firebase Auth + Firestore" },
  ];

  const [index, setIndex] = useState(0);

  return (
    <main className="bg-nwm min-h-screen">
      {/* dot grid overlay */}
      <div className="relative mx-auto max-w-6xl px-8 py-10 ">
        <div className="sticky top-8 flex justify-end gap-6">
          <ActionButton label="Go Back" href="/">
            {/* back icon */}
            <Image
              src={"/go-back.svg"}
              alt={"apple logo"}
              width={24}
              height={24}
            />
          </ActionButton>

          <ActionButton label="View Project" href="#">
            {/* external link icon */}
            <Image
              src={"/external-link.svg"}
              alt={"apple logo"}
              width={24}
              height={24}
            />
          </ActionButton>
        </div>
        {/* top actions */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl leading-tight tracking-tight sm:text-5xl">
              No Waste Mate
            </h1>

            <div className="mt-6 max-w-xl space-y-6 font-mono text-sm leading-6 text-white/75">
              <p>
                NoWasteMate is a capstone thesis project developed
                collaboratively by a three-person team, where I led key aspects
                of the user experience and core application architecture.
              </p>
              <p>
                While the project was built as a team, my role focused on
                shaping the system architecture and the overall user experience,
                ensuring the app was intuitive, cohesive, and well-structured as
                it grew.
              </p>
            </div>
          </div>
        </div>

        {/* feature tiles row */}
        <div className="mt-36 flex flex-wrap gap-6">
          <FeatureTile
            active={index === 0}
            onClick={() => setIndex(0)}
            icon={
              <Image
                src={"/projects-icons/apple.svg"}
                alt={"apple logo"}
                width={32}
                height={32}
              />
            }
            text="Developed for iPhone and iPad Devices"
          />
          <FeatureTile
            active={index === 1}
            onClick={() => setIndex(1)}
            icon={
              <Image
                src={"/projects-icons/swift.svg"}
                alt={"swift logo"}
                width={32}
                height={32}
              />
            }
            text="Native SwiftUI-driven interface"
          />
          <FeatureTile
            active={index === 2}
            onClick={() => setIndex(2)}
            icon={
              <Image
                src={"/projects-icons/python.svg"}
                alt={"python logo"}
                width={32}
                height={32}
              />
            }
            text="FastAPI Python-Powered Backend"
          />
          <FeatureTile
            active={index === 3}
            onClick={() => setIndex(3)}
            icon={
              <Image
                src={"/projects-icons/api.svg"}
                alt={"api logo"}
                width={32}
                height={32}
              />
            }
            text="API-Driven Data Flow with Barcode Scanning"
          />
          <FeatureTile
            active={index === 4}
            onClick={() => setIndex(4)}
            icon={
              <Image
                src={"/projects-icons/firebase.svg"}
                alt={"firebase logo"}
                width={32}
                height={32}
              />
            }
            text="Token-based Firebase Authentication & Sync"
          />
        </div>
        <div className="mt-10">
          <div className="mx-leading w-full max-w-4xl">
            <Gallery items={items} index={index} setIndex={setIndex} />
          </div>
        </div>

        {/* next section */}
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
              In addition to my technical responsibilities, I played a key role
              in the design and visual direction of NoWasteMate.{" "}
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
      </div>
    </main>
  );
}
