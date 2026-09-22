import ProjectDetail from "@/app/layouts/project/detail";
import projects from "@/public/api/project.json";
import type { Metadata } from "next";

interface Params {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  return {
    title: project?.title ?? "Project",
    description: project?.description,
  };
}

export default function ProjectPage({ params }: Params) {
  return <ProjectDetail slug={params.slug} />;
}
