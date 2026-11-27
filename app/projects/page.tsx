import React from "react";
import type { Metadata } from "next";
import { Github, ArrowUpRight, Layers, CheckCircle2 } from "lucide-react";
import { featuredProjects, earlierProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectsArchiveToggle from "@/components/ProjectsArchiveToggle";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected .NET backend and frontend work by Marco Fediuc, led by the AutoPreventivo neuro-symbolic quote engine case study.",
};

export default function ProjectsPage() {
  const flagship = featuredProjects.find((p) => p.tier === "flagship");
  const coreProjects = featuredProjects.filter((p) => p.tier === "core");

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <p className="font-mono text-xs font-semibold tracking-wider text-violet-300 uppercase">
          Selected Work
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          Production .NET backend systems and web applications, with older
          learning exercises tucked cleanly at the bottom.
        </p>
      </header>

      {/* Flagship Spotlight Card */}
      {flagship && (
        <section aria-label="Flagship project" className="mt-10">
          <SpotlightCard
            spotlightColor="rgba(139, 92, 246, 0.14)"
            className="overflow-hidden"
          >
            <div className="h-[2px] w-full bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-500 animate-gradient-flow" />
            <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-12">
              <div className="space-y-4 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-violet-300 uppercase">
                  <Layers size={12} />
                  <span>{flagship.status}</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    {flagship.title}
                  </h2>
                  {flagship.subtitle && (
                    <p className="mt-1 font-mono text-xs text-slate-400">
                      {flagship.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-slate-300">
                  {flagship.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {flagship.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {flagship.githubUrl && (
                    <a
                      href={flagship.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-violet-400/50 bg-violet-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
                    >
                      <Github size={15} />
                      <span>Read Case Study (quote-engine)</span>
                    </a>
                  )}
                  {flagship.websiteUrl && (
                    <a
                      href={flagship.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
                    >
                      <span>Visit edilvos.it</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Technical Proof Column */}
              <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#090c12] p-5 lg:col-span-5">
                <div>
                  <div className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                    Verified System Highlights
                  </div>
                  <ul className="mt-4 space-y-3 text-xs leading-relaxed text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-violet-400"
                      />
                      <span>
                        Neuro-symbolic boundary: OpenAI parses intent; C#
                        recipes &amp; catalogue compute totals; unmatched lines
                        are visibly labelled.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-sky-400"
                      />
                      <span>
                        Hardened .NET 10 API: request validation, fail-closed
                        admin-key filter, Serilog, Application Insights,
                        correlation IDs, <code>/health</code>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />
                      <span>
                        48 in-process xUnit/Moq tests gating GitHub Actions
                        deployment; QuestPDF output stored in Azure Blob Storage.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 border-t border-white/[0.07] pt-3 font-mono text-[11px] text-slate-400">
                  Thesis evaluation: €6,537.72 → €4,714.89 over 15 iterations
                  (42 runs)
                </div>
              </div>
            </div>
          </SpotlightCard>
        </section>
      )}

      {/* Supporting Core Work */}
      <section aria-label="Core projects" className="mt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {coreProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Tucked Earlier & Learning Projects */}
      <ProjectsArchiveToggle projects={earlierProjects} />
    </div>
  );
}
