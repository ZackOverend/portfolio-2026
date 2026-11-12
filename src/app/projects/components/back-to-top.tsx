"use client";

import { useLenisAnchor } from "@/app/hooks/useLenisAnchor";

export default function BackToTop() {
  const scrollTo = useLenisAnchor();

  return (
    <button
      onClick={() => scrollTo("top")}
      className="text-xs text-white/40 transition hover:text-white/70"
    >
      Back to top ↑
    </button>
  );
}
