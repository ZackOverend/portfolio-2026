"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    <motion.div
      className="flex h-28 w-40 flex-col items-center justify-center gap-3 text-center border border-white/20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="text-white/90">{icon}</div>
      <div className="px-3 text-xs leading-4 text-white/80">{text}</div>
    </motion.div>
  );
}

export default function NoWasteMateProjects() {
  return (
    <div className="flex flex-wrap gap-6">
      <FeatureTile
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
  );
}
