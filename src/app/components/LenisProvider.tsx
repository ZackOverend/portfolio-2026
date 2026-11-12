"use client";

import { ReactLenis } from "lenis/react";
export { useLenis } from "lenis/react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{ duration: 1, smoothWheel: true, touchMultiplier: 1.5, autoRaf: true }}
    >
      {children}
    </ReactLenis>
  );
}
