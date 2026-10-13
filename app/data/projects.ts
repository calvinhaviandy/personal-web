import projectData from "@/public/api/project.json";

export const projects = projectData;
export const featuredProjects = projects.filter((project) => project.featured);
export type Project = (typeof projects)[number];
