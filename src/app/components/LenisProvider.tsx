"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
export { useLenis } from "lenis/react";

function ProjectScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (!pathname.startsWith("/projects/") || window.location.hash) return;
    // Cancel momentum from the previous page as well as resetting native scroll.
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

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
      <ProjectScrollReset />
      {children}
    </ReactLenis>
  );
}
