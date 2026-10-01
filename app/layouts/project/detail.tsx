import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Icon from "@/app/components/Icon";
import ProjectVisual from "@/app/components/ProjectVisual";
import projects from "@/public/api/project.json";

export default function ProjectDetail({ slug }: { slug: string }) {
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const sourceLabel = project.repository.includes("figma.com") ? "Open Figma file" : "View source";

  return (
    <main className="detail-page" id="top">
      <div className="detail-content">
        <Link href="/project" className="back-link"><Icon name="arrow-left" /> All projects</Link>
        <p className="project-detail-label">PROJECT {String(projectIndex + 1).padStart(2, "0")} / {project.year}</p>
        <h1 className="detail-heading">{project.title}<span className="title-period">.</span></h1>
        <p className="detail-summary">{project.summary}</p>

        <div className="detail-actions">
          {project.website && (
            <Link href={project.website} target="_blank" rel="noreferrer" className="detail-action primary">Visit live site <span aria-hidden="true"><Icon name="arrow-up-right" /></span></Link>
          )}
          <Link href={project.repository} target="_blank" rel="noreferrer" className={`detail-action${project.website ? "" : " primary"}`}>{sourceLabel} <span aria-hidden="true"><Icon name="arrow-up-right" /></span></Link>
        </div>

        <div className="detail-visual-wrap">
          <ProjectVisual slug={project.slug} title={project.title} category={project.category} year={project.year} cover={project.cover} />
        </div>

        <div className="detail-body">
          <dl className="detail-meta">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Category</dt><dd>{project.category}</dd></div>
            <div><dt>Year</dt><dd>{project.year}</dd></div>
            <div><dt>Built with</dt><dd>{project.tag.join(" / ")}</dd></div>
          </dl>
          <p className="detail-description">{project.description}</p>
        </div>

        {project.gallery.length > 0 && (
          <div className="detail-gallery">
            {project.gallery.map((image) => (
              <Image key={image} src={`/image/project/${image}`} alt={`${project.title} interface preview`} width={1200} height={900} />
            ))}
          </div>
        )}
      </div>

      <Link href={`/project/${nextProject.slug}`} className="next-project">
        <span><small>Next project</small><strong>{nextProject.title}</strong></span>
        <span aria-hidden="true"><Icon name="arrow-up-right" /></span>
      </Link>
    </main>
  );
}
