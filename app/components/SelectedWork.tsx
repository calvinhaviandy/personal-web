"use client";

import Link from "next/link";
import { useState } from "react";
import projects from "@/public/api/project.json";
import ProjectVisual from "@/app/components/ProjectVisual";

const featuredProjects = projects.filter((project) => project.featured);

export default function SelectedWork() {
  const [activeSlug, setActiveSlug] = useState(featuredProjects[0].slug);
  const activeProject =
    featuredProjects.find((project) => project.slug === activeSlug) ?? featuredProjects[0];

  return (
    <section id="work" className="scroll-mt-20 bg-[#121210] text-[#f2f0e9]">
      <div className="site-shell py-20 sm:py-28 lg:py-32">
        <div className="section-heading border-white/20">
          <div>
            <p className="eyebrow text-white/45">01 / Selected work</p>
            <h2 className="section-title max-w-3xl text-[#f2f0e9]">
              Recent things I&apos;ve put into the world.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/50 sm:text-right">
            Real products, client work, and small experiments. No imaginary case studies.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="border-t border-white/20">
            {featuredProjects.map((project, index) => {
              const isActive = activeProject.slug === project.slug;

              return (
                <Link
                  href={`/project/${project.slug}`}
                  key={project.slug}
                  onMouseEnter={() => setActiveSlug(project.slug)}
                  onFocus={() => setActiveSlug(project.slug)}
                  className="group block border-b border-white/20 py-6 outline-none sm:py-7"
                >
                  <div className="mb-5 lg:hidden">
                    <ProjectVisual
                      title={project.title}
                      category={project.category}
                      year={project.year}
                      tone={project.tone}
                      cover={project.cover}
                    />
                  </div>
                  <div className="grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-start gap-3 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-5">
                    <span className="pt-1 font-mono text-xs text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className={`break-words text-2xl font-archiabold tracking-[-0.035em] transition sm:text-3xl ${
                          isActive ? "text-white" : "text-white/55"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                        {project.summary}
                      </p>
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
                        {project.category} · {project.year}
                      </p>
                    </div>
                    <span
                      className={`pt-1 text-lg transition ${
                        isActive ? "translate-x-0 text-[#ff542e]" : "-translate-x-1 text-white/25"
                      }`}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              key={activeProject.slug}
              href={`/project/${activeProject.slug}`}
              className="group sticky top-28 block preview-enter"
              aria-label={`Read the ${activeProject.title} case study`}
            >
              <ProjectVisual
                title={activeProject.title}
                category={activeProject.category}
                year={activeProject.year}
                tone={activeProject.tone}
                cover={activeProject.cover}
                priority
              />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex justify-end sm:mt-16">
          <Link href="/project" className="text-link text-white/60 hover:text-white">
            Browse all {projects.length} projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
