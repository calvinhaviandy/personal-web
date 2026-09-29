import Link from "next/link";
import projects from "@/public/api/project.json";

const featuredProjects = projects.filter((project) => project.featured);

export default function SelectedWork() {
  return (
    <section id="work" className="content-section work-section" aria-labelledby="work-title">
      <div className="section-label"><span>02 / SELECTED WORK</span><span>{String(featuredProjects.length).padStart(2, "0")} SIGNALS</span></div>
      <h2 id="work-title" className="section-title">Things I&apos;ve built<span className="title-period">.</span></h2>
      <p className="section-intro">A few projects from code, design, and everything in between.</p>

      <div className="project-list">
        {featuredProjects.map((project, index) => (
          <article className="project-row" key={project.slug}>
            <Link href={`/project/${project.slug}`} className="project-row-main">
              <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="project-row-copy">
                <span className="project-row-title">{project.title}</span>
                <span className="project-row-summary">{project.summary}</span>
                <span className="project-row-meta">{project.category} <span aria-hidden="true">/</span> {project.year}</span>
              </span>
              <span className="row-arrow" aria-hidden="true">↗</span>
            </Link>
            {project.website && (
              <Link href={project.website} target="_blank" rel="noreferrer" className="project-live-link">
                Visit live site <span aria-hidden="true">↗</span>
              </Link>
            )}
          </article>
        ))}
      </div>

      <Link href="/project" className="archive-link">
        <span>View all {projects.length} projects</span><span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
