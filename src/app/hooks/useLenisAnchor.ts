"use client";

import { useLenis } from "@/app/components/LenisProvider";

export function useLenisAnchor() {
  const lenis = useLenis();

  const scrollTo = (target: string | HTMLElement) => {
    if (!lenis) return;

    lenis.scrollTo(target, {
      offset: 0,
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
    });
  };

  return scrollTo;
}
