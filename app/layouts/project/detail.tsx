import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "@/app/components/ProjectVisual";
import projects from "@/public/api/project.json";

export default function ProjectDetail({ slug }: { slug: string }) {
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const repositoryLabel = project.repository.includes("figma.com")
    ? "Open Figma file"
    : "View source";

  return (
    <main>
      <section className="site-shell pb-12 pt-8 sm:pb-16 sm:pt-12">
        <Link href="/project" className="text-link">
          <span aria-hidden="true">←</span> All projects
        </Link>

        <div className="mt-14 grid gap-10 border-b border-black/20 pb-10 sm:mt-20 sm:pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="min-w-0">
            <p className="eyebrow">
              Project {String(projectIndex + 1).padStart(2, "0")} / {project.year}
            </p>
            <h1 className="mt-5 break-words text-[clamp(3.4rem,11vw,9rem)] font-archiabold leading-[0.82] tracking-[-0.075em]">
              {project.title.toUpperCase()}.
            </h1>
          </div>

          <div>
            <p className="max-w-xl text-xl font-archiabold leading-[1.25] tracking-[-0.025em] sm:text-2xl">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {project.website && (
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="button-dark"
                >
                  Visit live site ↗
                </Link>
              )}
              <Link
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="button-line"
              >
                {repositoryLabel} ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell">
        <ProjectVisual
          title={project.title}
          category={project.category}
          year={project.year}
          tone={project.tone}
          cover={project.cover}
          priority
        />
      </section>

      <section className="site-shell section-space">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <p className="eyebrow">Project notes</p>
            <dl className="mt-8 border-t border-black/20 text-sm">
              <div className="border-b border-black/20 py-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-black/35">
                  Role
                </dt>
                <dd className="mt-2">{project.role}</dd>
              </div>
              <div className="border-b border-black/20 py-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-black/35">
                  Type
                </dt>
                <dd className="mt-2">{project.category}</dd>
              </div>
              <div className="border-b border-black/20 py-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-black/35">
                  Built with
                </dt>
                <dd className="mt-2 leading-6">{project.tag.join(" / ")}</dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="max-w-4xl text-3xl font-archiabold leading-[1.15] tracking-[-0.04em] sm:text-5xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="site-shell grid gap-5 pb-20 sm:pb-28 md:grid-cols-2">
          {project.gallery.map((image) => (
            <img
              key={image}
              src={`/image/project/${image}`}
              alt={`${project.title} interface`}
              className="h-auto w-full border border-black/10 bg-white"
            />
          ))}
        </section>
      )}

      <section className="bg-[#121210] text-[#f2f0e9]">
        <Link href={`/project/${nextProject.slug}`} className="site-shell group block py-20 sm:py-28">
          <p className="eyebrow text-white/40">Next project</p>
          <div className="mt-5 flex min-w-0 items-end justify-between gap-5">
            <h2 className="min-w-0 break-words text-5xl font-archiabold leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              {nextProject.title}
            </h2>
            <span className="shrink-0 text-3xl text-[#ff542e] transition group-hover:translate-x-2">
              →
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
}
