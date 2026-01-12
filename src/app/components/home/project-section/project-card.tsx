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
      <Image
        src={"/projects-icons/mobile.svg"}
        alt={"apple logo"}
        width={32}
        height={32}
      />
    );
  }

  // desktop
  return (
    <Image
      src={"/projects-icons/desktop.svg"}
      alt={"apple logo"}
      width={32}
      height={32}
    />
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
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
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
