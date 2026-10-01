import Link from "next/link";
import ProjectVisual from "./ProjectVisual";

type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  cover: string;
  website: string;
  repository: string;
};

export default function ProjectCard({ project, index, headingLevel = "h3" }: {
  project: Project;
  index: number;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const externalUrl = project.website || project.repository;
  const externalLabel = project.website ? "Visit live site" : project.repository.includes("figma.com") ? "Open Figma file" : "View source";

  return (
    <article className="work-card">
      <Link href={`/project/${project.slug}`} className="work-card-main">
        <ProjectVisual slug={project.slug} title={project.title} category={project.category} year={project.year} cover={project.cover} />
        <div className="work-card-copy">
          <div className="work-card-heading">
            <span className="work-card-index">{String(index + 1).padStart(2, "0")}</span>
            <Heading>{project.title}</Heading>
            <span className="work-card-arrow" aria-hidden="true">↗</span>
          </div>
          <p>{project.summary}</p>
          <p className="work-card-meta">{project.category} / {project.year}</p>
        </div>
      </Link>
      <a href={externalUrl} target="_blank" rel="noreferrer" className="work-card-external" aria-label={`${externalLabel} — ${project.title}`}>{externalLabel}<span aria-hidden="true">↗</span></a>
    </article>
  );
}
