import Link from "next/link";
import projects from "@/public/api/project.json";

export default function ProjectIndex() {
  return (
    <main>
      <section className="site-shell pb-14 pt-10 sm:pb-20 sm:pt-16 lg:pb-24">
        <Link href="/#work" className="text-link">
          <span aria-hidden="true">←</span> Home
        </Link>
        <div className="mt-14 grid gap-8 sm:mt-20 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="eyebrow">Project archive / 2022—2026</p>
            <h1 className="mt-5 max-w-5xl text-[clamp(3.75rem,12vw,9rem)] font-archiabold leading-[0.82] tracking-[-0.075em]">
              THE WORK.
            </h1>
          </div>
          <p className="max-w-md text-base leading-7 text-black/55 lg:pb-2">
            Client sites, product experiments, team builds, and interface studies. A record of
            what I learned by shipping.
          </p>
        </div>
      </section>

      <section className="border-t border-black/20">
        <div className="site-shell">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group grid gap-5 border-b border-black/20 py-7 sm:grid-cols-[3rem_minmax(0,0.95fr)_minmax(0,1.1fr)_auto] sm:items-start sm:gap-8 sm:py-9"
            >
              <span className="pt-1 font-mono text-[10px] text-black/35">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <Link href={`/project/${project.slug}`} className="inline-block outline-none">
                  <h2 className="text-2xl font-archiabold tracking-[-0.035em] transition group-hover:text-[#ff542e] sm:text-3xl">
                    {project.title}
                  </h2>
                </Link>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-black/35">
                  {project.category} · {project.year}
                </p>
              </div>
              <p className="max-w-xl text-sm leading-6 text-black/50">{project.summary}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.1em] sm:justify-end">
                {project.website && (
                  <Link
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#ff542e]"
                  >
                    Live ↗
                  </Link>
                )}
                <Link href={`/project/${project.slug}`} className="transition hover:text-[#ff542e]">
                  Case ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell py-20 sm:py-28">
        <p className="eyebrow">That&apos;s the public archive.</p>
        <p className="mt-5 max-w-2xl text-3xl font-archiabold leading-tight tracking-[-0.04em] sm:text-5xl">
          There&apos;s more code, less polish, on GitHub.
        </p>
        <Link
          href="https://github.com/calvinhaviandy?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="button-dark mt-8"
        >
          Browse GitHub ↗
        </Link>
      </section>
    </main>
  );
}
