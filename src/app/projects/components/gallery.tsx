"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import type { GalleryItem } from "@/app/projects/project";

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
  const [open, setOpen] = useState(false);

  const next = () => setIndex((index + 1) % items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);

  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, width: 0, height: 0 });

  // Close on Esc
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, items.length]);

  const TIP_W = 96; // approx width of "Click to expand"
  const TIP_H = 28; // approx height
  const PAD = 8;

  const wrapW = pos.width;
  const wrapH = pos.height;

  const left = pos.x + PAD + TIP_W > wrapW ? pos.x - PAD - TIP_W : pos.x + PAD;

  const topRaw = pos.y + PAD;
  const top = Math.min(Math.max(topRaw, PAD), wrapH - TIP_H - PAD);

  return (
    <>
      <div className="flex h-full w-full flex-col">
        {/* MEDIA AREA — fills available space */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
              width: rect.width,
              height: rect.height,
            });
          }}
          className="relative flex-1 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 text-left"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.src}
              className="absolute inset-0"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Image
                src={current.src}
                alt={current.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 639px) calc(100vw - 64px), (max-width: 1151px) calc(100vw - 200px), 952px"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            {hover && (
              <motion.div
                className="pointer-events-none absolute z-20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                style={{ left, top }}
              >
                <div className="rounded-md border border-white/15 bg-black/40 px-2 py-1 text-[11px] text-white backdrop-blur">
                  Click to expand
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* tiny hint */}
          <div className="pointer-events-none absolute right-4 top-4 backdrop-blur">
            <Image
              src={"/nwm/zoom.svg"}
              alt={"zoom icon"}
              height={24}
              width={24}
            />{" "}
          </div>
        </button>

        {/* FOOTER / CONTROLS */}
        <div className="flex items-center justify-between gap-4 pt-6">
          <div className="min-w-0">
            <div className="truncate text-sm text-white/70">
              {current.title}
            </div>
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

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-999 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* backdrop */}
            <motion.button
              type="button"
              aria-label="Close expanded image"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
            />

            {/* panel */}
            <motion.div
              className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/10 backdrop-blur-3xl"
              initial={{ scale: 0.98, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: open ? 0.3 : 0,
              }}
            >
              {/* top bar */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm text-white/80">
                    {current.title}
                  </div>
                  <div className="text-xs text-white/50">
                    {index + 1} / {items.length}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="rounded-md border border-white/15 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
                  >
                    Prev
                  </button>
                  <button
                    onClick={next}
                    className="rounded-md border border-white/15 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
                  >
                    Next
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-md border border-white/15 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* image area */}
              <div className="relative h-[70vh] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.src}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <Image
                      src={current.src}
                      alt={current.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1055px) calc(100vw - 64px), 992px"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
