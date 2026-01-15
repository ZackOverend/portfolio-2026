"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Device = "mobile" | "desktop";

type ProjectCardProps = {
  title: string;
  summary: string;
  tags: string[];
  href?: string;
  device?: Device;
  iconSrc?: string;
};

function DeviceIcon({ device = "desktop" }: { device?: Device }) {
  const src =
    device === "mobile"
      ? "/projects-icons/mobile.svg"
      : "/projects-icons/desktop.svg";

  return (
    <Image src={src} alt="" width={28} height={28} className="opacity-80" />
  );
}

export default function ProjectCard({
  title,
  summary,
  tags,
  href,
  device = "desktop",
  iconSrc,
}: ProjectCardProps) {
  const Card = href ? motion.a : motion.div;

  return (
    <Card
      href={href}
      className="group block "
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: { y: 0 },
        hover: { y: -6 },
        tap: { y: -2 },
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {/* Media */}
      <motion.div
        className="relative aspect-video w-full overflow-hidden border border-white/10 bg-white/5 rounded-2xl"
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        {/* Hover background */}
        <motion.div
          className="absolute inset-0 bg-white/1"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
        {iconSrc ? (
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              variants={{
                rest: { opacity: 0.65, scale: 1 },
                hover: { opacity: 0.9, scale: 1.03 },
              }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <Image
                src={iconSrc}
                alt=""
                width={420}
                height={420}
                className="w-72 md:w-64 lg:w-80"
              />
            </motion.div>
          </div>
        ) : null}
      </motion.div>

      {/* Meta */}
      <div className="mt-4 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="truncate text-lg text-white/90">{title}</h3>
          <p className="mt-1 text-sm text-white/55">{summary}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-3 text-sm text-white/40 transition group-hover:text-white/70">
            View More →
          </div>
        </div>

        <div className="mt-1 shrink-0">
          <DeviceIcon device={device} />
        </div>
      </div>
    </Card>
  );
}
