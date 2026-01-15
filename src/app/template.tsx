"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* accent wash */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0.0 }}
          animate={{ opacity: 0.0 }}
          exit={{ opacity: 0.0 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
        >
          {/* quick flash */}
          <motion.div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          />
          {children}
        </motion.div>

        {/* overlay that actually animates */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />

        {/* single “flash” layer */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />

        {/* Keep it simple: just one layer */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0.28 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0.28 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(900px 500px at 30% 20%, rgba(118,255,191,0.12), transparent 60%)",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
