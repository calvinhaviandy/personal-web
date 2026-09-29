import ProjectDetail from "@/app/layouts/project/detail";
import projects from "@/public/api/project.json";
import type { Metadata } from "next";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project?.title ?? "Project",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
