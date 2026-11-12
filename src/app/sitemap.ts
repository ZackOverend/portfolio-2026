import type { MetadataRoute } from "next";
import { projectSlugs } from "@/app/projects/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...projectSlugs.map((slug) => `/projects/${slug}`)].map((path) => ({
    url: `https://zackaryoverend.com${path}`,
  }));
}
