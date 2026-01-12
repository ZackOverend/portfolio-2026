"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Device = "mobile" | "desktop";

type ProjectCardProps = {
  title: string;
  tech: string;
  href?: string;
  device?: Device;
  iconSrc?: string;
};

function DeviceIcon({ device = "desktop" }: { device?: Device }) {
  const src =
    device === "mobile"
      ? "/projects-icons/mobile.svg"
      : "/projects-icons/desktop.svg";

  return <Image src={src} alt="" width={32} height={32} />;
}

export default function ProjectCard({
  title,
  tech,
  href,
  device = "desktop",
  iconSrc,
}: ProjectCardProps) {
  const Card = href ? motion.a : motion.div;

  return (
    <Card
      href={href}
      className="group block rounded-none"
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {/* top media box */}
      <motion.div
        className="relative aspect-video w-full overflow-hidden bg-white/5"
        initial={false}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        {/* centered icon */}
        {iconSrc ? (
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <Image src={iconSrc} alt="" width={480} height={480} className="" />
          </div>
        ) : null}
      </motion.div>

      {/* bottom row */}
      <div className="mt-4 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="truncate text-lg text-white/90">{title}</h3>
          <p className="mt-2 truncate text-sm text-white/40">{tech}</p>
        </div>

        <div className="mt-1 shrink-0 opacity-100 transition group-hover:opacity-100">
          <DeviceIcon device={device} />
        </div>
      </div>
    </Card>
  );
}
