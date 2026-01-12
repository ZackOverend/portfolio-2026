"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type GalleryItem = { src: string; title: string };

export default function Gallery({
  items,
  index,
  setIndex,
}: {
  items: GalleryItem[];
  index: number;
  setIndex: (i: number) => void;
}) {
  const current = items[index];

  const next = () => setIndex((index + 1) % items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);

  return (
    <div className="">
      <div className="relative aspect-video w-full overflow-hidden ">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.title}
              fill
              className="object-contain p-4"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="truncate text-sm text-white/70">{current.title}</div>
          <div className="text-xs text-white/50">
            {index + 1} / {items.length}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="rounded-md border border-white/20 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="rounded-md border border-white/20 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
