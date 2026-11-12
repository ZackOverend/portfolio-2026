"use client";

import Image from "next/image";
import Link from "next/link";

function ActionButton({
  label,
  href,
  children,
  target,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
  target: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2"
      target={target}
    >
      <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-sm transition hover:scale-[1.03] hover:rotate-2">
        {children}
      </div>
      <span className="text-xs text-white/70">{label}</span>
    </Link>
  );
}

export default function ProjectNav({ externalUrl }: { externalUrl?: string }) {
  return (
    <div
      className="z-50 flex gap-6 rounded-xl
        px-3 py-2
        backdrop-blur
        bg-white/10
        border border-white/15
        shadow-lg
        sm:backdrop-blur-3xl
        sm:bg-transparent
        sm:border-transparent
        sm:shadow-none"
    >
      <ActionButton label="Go Back" href="/" target="">
        {/* back icon */}
        <Image src={"/go-back.svg"} alt="Back arrow" width={24} height={24} />
      </ActionButton>

      {externalUrl ? (
        <ActionButton label="View Project" href={externalUrl} target="_blank">
          <Image
            src="/external-link.svg"
            alt="External link icon"
            width={24}
            height={24}
          />
        </ActionButton>
      ) : null}
    </div>
  );
}
