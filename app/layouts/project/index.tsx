import Link from "next/link";
import projects from "@/public/api/project.json";

export default function ProjectIndex() {
  return (
    <main className="archive-page" id="top">
      <div className="archive-content">
        <Link href="/#work" className="back-link"><span aria-hidden="true">←</span> Back to home</Link>
        <div className="section-label archive-meta"><span>ALL PROJECTS</span><span>{String(projects.length).padStart(2, "0")} ENTRIES</span></div>
        <h1 className="archive-heading">The work<span className="title-period">.</span></h1>
        <p className="archive-intro">Websites, tools, and product ideas. Click through to see what went into each one.</p>

        <div className="archive-list">
          {projects.map((project, index) => (
            <article className="archive-project" key={project.slug}>
              <Link href={`/project/${project.slug}`} className="archive-item">
                <span className="archive-item-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="archive-item-copy">
                  <strong>{project.title}</strong>
                  <span>{project.summary}</span>
                </span>
                <span className="archive-item-arrow" aria-hidden="true">↗</span>
              </Link>
              {project.website && (
                <a href={project.website} target="_blank" rel="noreferrer" className="archive-live-link">
                  Visit live site <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>

        <p className="archive-end">More experiments live on <Link href="https://github.com/calvinhaviandy?tab=repositories" target="_blank" rel="noreferrer">GitHub ↗</Link></p>
      </div>
    </main>
  );
}
