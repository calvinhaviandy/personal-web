import Link from "next/link";
import Icon from "./Icon";
import ProjectCard from "./ProjectCard";
import projects from "@/public/api/project.json";

const featuredProjects = projects.filter((project) => project.featured);

export default function SelectedWork() {
  return (
    <section id="work" className="content-section work-section" aria-labelledby="work-title">
      <div className="section-label"><span>02 / SELECTED WORK</span><span>{String(featuredProjects.length).padStart(2, "0")} SIGNALS</span></div>
      <h2 id="work-title" className="section-title">Things I&apos;ve built<span className="title-period">.</span></h2>
      <p className="section-intro">A few projects from code, design, and everything in between.</p>

      <div className="project-list">
        {featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
      </div>

      <Link href="/project" className="archive-link">
        <span>View all {projects.length} projects</span><span aria-hidden="true"><Icon name="arrow-up-right" /></span>
      </Link>
    </section>
  );
}
