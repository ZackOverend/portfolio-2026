"use client";

import Image from "next/image";
import Gallery, {
  type GalleryItem,
} from "@/app/projects/nwm/projects-section/gallery";
import { useState } from "react";

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
      <div className="px-3 text-xs leading-4 text-white/80">{text}</div>
    </button>
  );
}

export default function NoWasteMateProjects() {
  const items: GalleryItem[] = [
    { src: "/nwm/01-ios.png", title: "iOS App for iPhone & iPad" },
    { src: "/nwm/02-swiftui.png", title: "Built using SwiftUI" },
    { src: "/nwm/03-python.png", title: "Python Backend (FastAPI)" },
    { src: "/nwm/04-api.png", title: "API Integration" },
    { src: "/nwm/05-firebase.png", title: "Firebase Auth + Firestore" },
  ];

  const [index, setIndex] = useState(0);

  return (
    <>
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
      <div className="mt-16">
        <div className="mx-leading w-full max-w-4xl">
          <Gallery items={items} index={index} setIndex={setIndex} />
        </div>
      </div>
    </>
  );
}
