"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function FeatureTile({
  icon,
  text,
  size,
}: {
  icon: string;
  text: string;
  size: number;
}) {
  return (
    <motion.div
      className="flex h-28 w-40 flex-col items-center justify-center gap-3 text-center border border-white/20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-white/90">
        <Image src={icon} alt="" width={size ?? 32} height={size ?? 32} />
      </div>

      <div className="px-3 text-xs leading-4 text-white/80">{text}</div>
    </motion.div>
  );
}

export default function ProjectFeatures({ items }: { items: any[] }) {
  return (
    <div className="flex flex-wrap gap-6">
      {items.map((item, i) => (
        <FeatureTile
          key={i}
          icon={item.icon}
          text={item.text}
          size={item.size}
        />
      ))}
    </div>
  );
}
