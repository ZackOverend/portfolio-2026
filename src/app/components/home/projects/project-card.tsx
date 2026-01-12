import Image from "next/image";

type Device = "mobile" | "desktop";

type ProjectCardProps = {
  title: string;
  tech: string;
  href?: string;
  device?: Device;
  imageSrc?: string; // optional thumbnail
};

function DeviceIcon({ device = "desktop" }: { device?: Device }) {
  if (device === "mobile") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/80">
        <path d="M16 1H8C6.9 1 6 1.9 6 3v18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-4 21c-.83 0-1.5-.67-1.5-1.5S11.17 19 12 19s1.5.67 1.5 1.5S12.83 22 12 22zm6-4H8V4h10v14z" />
      </svg>
    );
  }

  // desktop
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/80">
      <path d="M4 5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h6l-1 2H7v2h10v-2h-2l-1-2h6c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H4zm16 11H4V7h16v9z" />
    </svg>
  );
}

export default function ProjectCard({
  title,
  tech,
  href,
  device = "desktop",
  imageSrc,
}: ProjectCardProps) {
  const CardTag: any = href ? "a" : "div";

  return (
    <CardTag
      href={href}
      className={[
        "group block",
        "rounded-none",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60",
      ].join(" ")}
    >
      {/* top media box */}
      <div
        className={[
          "relative aspect-[16/9]",
          "w-full overflow-hidden",
          "border border-white/10",
          "bg-white",
          "shadow-[0_0_0_1px_rgba(0,0,0,0.35)]",
          "transition",
          "group-hover:shadow-[0_0_0_1px_rgba(118,255,191,0.25),0_18px_60px_-30px_rgba(0,0,0,0.9)]",
        ].join(" ")}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority={false}
          />
        ) : null}
      </div>

      {/* bottom row */}
      <div className="mt-4 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="truncate text-lg text-white/90">{title}</h3>
          <p className="mt-2 truncate text-sm text-white/40">{tech}</p>
        </div>

        <div className="mt-1 shrink-0 opacity-80 transition group-hover:opacity-100">
          <DeviceIcon device={device} />
        </div>
      </div>
    </CardTag>
  );
}
