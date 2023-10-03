import projects from "../data/projects.json";

import type Project from "../types/Project";

export default function getProjects(): Project[] {
  return projects.filter((project) => !project.hidden);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
