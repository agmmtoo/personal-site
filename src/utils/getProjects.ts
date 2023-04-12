import projects from "../data/projects.json";

import Project from "../types/Project";

export default function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
