"use client";

import Image from "next/image";
import Link from "next/link";

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
      <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-sm transition group-hover:scale-[1.02]">
        {children}
      </div>
      <span className="text-xs text-white/70">{label}</span>
    </Link>
  );
}

export default function NoWasteMateNavigation() {
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
      <ActionButton label="Go Back" href="/">
        {/* back icon */}
        <Image src={"/go-back.svg"} alt={"apple logo"} width={24} height={24} />
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
  );
}
