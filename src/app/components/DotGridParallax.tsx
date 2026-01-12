"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@/app/components/LenisProvider";

export default function DotGridParallax({
  className = "",
  strength = 0.2, // smaller = more subtle
}: {
  className?: string;
  strength?: number;
}) {
  const lenis = useLenis();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY || 0;
      // Move slower than page scroll
      el.style.transform = `translate3d(0, ${y * strength}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis, strength]);

  return (
    <div
      ref={ref}
      className={[
        "pointer-events-none absolute inset-0 will-change-transform",
        className,
      ].join(" ")}
    />
  );
}
