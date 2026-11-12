import { getImageProps } from "next/image";
import type { Project } from "./project";

export const GALLERY_SIZES = "(max-width: 639px) calc(100vw - 64px), (max-width: 1151px) calc(100vw - 200px), 952px";
export const LIGHTBOX_SIZES = "(max-width: 1055px) calc(100vw - 64px), 992px";

export function collectGalleryImages(project: Project): string[][] {
  return project.body.flatMap((section) => {
    const items = section.kind === "twoColumn" ? section.gallery.items
      : section.kind === "gallery" ? section.items : [];
    return items.length ? [items.map(({ src }) => src)] : [];
  });
}

export function prioritizeImages(galleries: string[][]): string[] {
  return [...galleries.map(([first]) => first), ...galleries.flatMap((images) => images.slice(1))];
}

const seen = new Set<string>();
const queue: { src: string; priority: number }[] = [];
let active = 0;

function allowed() {
  if (typeof navigator === "undefined") return false;
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  return !connection?.saveData && !["2g", "slow-2g"].includes(connection?.effectiveType ?? "");
}

async function warm(src: string) {
  const { props } = getImageProps({ src, alt: "", fill: true, sizes: GALLERY_SIZES });
  if (seen.has(props.src)) return;
  seen.add(props.src);
  const image = new window.Image();
  image.fetchPriority = "low";
  image.sizes = props.sizes ?? "";
  image.srcset = props.srcSet ?? "";
  image.src = props.src;
  await image.decode();
}

function drain() {
  if (!allowed()) {
    queue.length = 0;
    return;
  }
  while (active < 2 && queue.length) {
    const { src } = queue.shift()!;
    active++;
    void warm(src).catch(() => {}).finally(() => {
      active--;
      drain();
    });
  }
}

export function precacheImages(sources: string[], priority = 1) {
  if (!allowed()) return;
  for (const src of sources) {
    const pending = queue.find((entry) => entry.src === src);
    if (pending) pending.priority = Math.max(pending.priority, priority);
    else queue.push({ src, priority });
  }
  queue.sort((first, second) => second.priority - first.priority);
  drain();
}

export function onIdle(callback: () => void) {
  if (typeof window.requestIdleCallback === "function") {
    const handle = window.requestIdleCallback(callback);
    return () => window.cancelIdleCallback(handle);
  }
  const handle = window.setTimeout(callback, 1000);
  return () => window.clearTimeout(handle);
}
