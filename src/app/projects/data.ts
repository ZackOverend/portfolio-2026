import imageIn from "./image-in/image-in.json";
import indstudio51 from "./indstudio51/indstudio51.json";
import novaWeather from "./nova-weather/nova-weather.json";
import nwm from "./nwm/nwm.json";
import resuhost from "./resuhost/resuhost.json";
import type { Project } from "./project";

const projectData = {
  "image-in": imageIn,
  indstudio51,
  "nova-weather": novaWeather,
  nwm,
  resuhost,
};

export const projects = projectData as Record<keyof typeof projectData, Project>;
export const projectSlugs = Object.keys(projects);

export function getProject(slug: string): Project | undefined {
  return Object.hasOwn(projects, slug)
    ? projects[slug as keyof typeof projects]
    : undefined;
}
