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
    <Link href={href} className="group flex flex-col items-center gap-2">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-black shadow-sm transition group-hover:scale-[1.02]">
        {children}
      </div>
      <span className="text-xs text-white/70">{label}</span>
    </Link>
  );
}

function FeatureTile({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex h-28 w-40 flex-col items-center justify-center gap-3 border border-white/25 bg-white/5 text-center">
      <div className="text-white/90">{icon}</div>
      <div className="px-3 text-[11px] leading-4 text-white/80">{text}</div>
    </div>
  );
}

export default function NoWasteMatePage() {
  return (
    <main className="bg-nwm-background min-h-screen text-white">
      {/* dot grid overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-420px dot-grid-soft" />

      <div className="relative mx-auto max-w-6xl px-8 py-10">
        {/* top actions */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-6xl font-light tracking-tight">
              No Waste Mate
            </h1>

            <div className="mt-6 max-w-xl space-y-6 font-mono text-sm leading-6 text-white/75">
              <p>
                NoWasteMate is a capstone thesis project developed
                collaboratively by a three-person team, where I led key aspects
                of the user experience and core application architecture.
              </p>
              <p>
                While the project was built as a team, my focus is on shaping
                how the system feels to use and how it is structured under the
                hood, ensuring the product remained cohesive, scalable, and
                user-centered as features evolved.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
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
        </div>

        {/* feature tiles row */}
        <div className="mt-14 flex flex-wrap gap-6">
          <FeatureTile
            icon={
              <Image
                src={"/projects-icons/apple.svg"}
                alt={"apple logo"}
                width={48}
                height={48}
              />
            }
            text="Developed for iPhone and iPad Devices"
          />
          <FeatureTile
            icon={
              <Image
                src={"/projects-icons/swift.svg"}
                alt={"swift logo"}
                width={32}
                height={32}
              />
            }
            text="Developed for iPhone and iPad Devices"
          />
          <FeatureTile
            icon={
              <Image
                src={"/projects-icons/python.svg"}
                alt={"python logo"}
                width={32}
                height={32}
              />
            }
            text="Developed for iPhone and iPad Devices"
          />
          <FeatureTile
            icon={
              <Image
                src={"/projects-icons/api.svg"}
                alt={"api logo"}
                width={32}
                height={32}
              />
            }
            text="Developed for iPhone and iPad Devices"
          />
          <FeatureTile
            icon={
              <Image
                src={"/projects-icons/firebase.svg"}
                alt={"firebase logo"}
                width={32}
                height={32}
              />
            }
            text="Developed for iPhone and iPad Devices"
          />
        </div>

        {/* next section */}
        <div className="mt-20">
          <h2 className="text-5xl font-light tracking-tight">
            The Problem Identified
          </h2>

          <div className="mt-8 max-w-xl space-y-6 font-mono text-sm leading-6 text-white/75">
            <p>
              NoWasteMate is a full-stack application designed to help people
              reduce household food waste by making it easier to track
              groceries, understand expiration timelines, and turn existing
              ingredients into usable meals.
            </p>
            <p>
              The project focuses on real-world behavior: people forget what
              they have, lose track of freshness, and waste food as a result.
              NoWasteMate addresses this by combining intuitive inventory
              tracking with smart recipe generation, all built around a clean,
              user-centered experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
