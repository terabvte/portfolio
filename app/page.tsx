import React from "react";
import Link from "next/link";
import {
  FileDown,
  BookOpen,
  Github,
  Linkedin,
  ArrowRight,
  ArrowUpRight,
  Award,
  GraduationCap,
  Briefcase,
  Mail,
} from "lucide-react";
import ArchitectureExplorer from "@/components/ArchitectureExplorer";
import SpotlightCard from "@/components/SpotlightCard";
import { featuredProjects } from "@/data/projects";

const CORE_STACK = [
  "C#",
  ".NET 10",
  "ASP.NET Core",
  "EF Core 10",
  "MediatR",
  "SQL Server",
  "Azure SQL",
  "PostgreSQL",
  "Dapper",
  "Azure App Service",
  "Blob Storage",
  "xUnit",
  "Moq",
  "GitHub Actions",
  "Docker Compose",
  "Serilog",
  "Application Insights",
  "Next.js",
  "TypeScript",
];

const EDILVOS_ROLES = [
  {
    title: "Software Developer",
    period: "Apr 2025 – Present",
    detail:
      "Sole developer of AutoPreventivo (.NET 10, Minimal APIs, EF Core 10, Azure) and edilvos.it (Next.js).",
  },
  {
    title: "Software & Automation Assistant",
    period: "Aug 2024 – Apr 2025",
    detail:
      "Built internal workflow automation and technical tooling for cooperative operations.",
  },
  {
    title: "Office Intern",
    period: "Jun 2023 – Aug 2024",
    detail:
      "Learned renovation estimating workflows, pricing lists, and day-to-day construction operations.",
  },
];

export default function HomePage() {
  const supportingProjects = featuredProjects.filter((p) => p.tier === "core");

  return (
    <div className="relative">
      {/* Ambient Hero Glow + Dot Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[540px] overflow-hidden"
      >
        <div className="bg-dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-28 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/20 via-sky-500/15 to-emerald-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pt-16 pb-24 sm:px-6 sm:pt-24">
        {/* 1. Editorial Hero */}
        <section className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
            Marco Fediuc
            <span className="mt-1 block bg-gradient-to-r from-violet-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              .NET backend developer.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I build production backend systems with{" "}
            <span className="text-slate-200">
              C#, ASP.NET Core, EF Core 10, and Azure
            </span>
            . Sole developer behind{" "}
            <span className="text-slate-200">AutoPreventivo</span>, a
            neuro-symbolic quote engine running in production at Edilvos.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/cv.pdf"
              download="Marco_Fediuc_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-400/50 bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(139,92,246,0.7)] transition-all hover:bg-violet-500"
            >
              <FileDown size={16} />
              <span>Download CV</span>
            </a>

            <a
              href="https://github.com/terabvte/quote-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-white/[0.22] hover:bg-white/[0.08]"
            >
              <BookOpen size={16} className="text-violet-300" />
              <span>AutoPreventivo Case Study</span>
              <ArrowUpRight size={15} className="text-slate-400" />
            </a>

            <a
              href="https://github.com/terabvte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/marco-fediuc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        {/* 2. Interactive Flagship Spotlight */}
        <section aria-label="AutoPreventivo flagship case study" className="mt-16">
          <ArchitectureExplorer />
        </section>

        {/* 3. Selected Work Bento */}
        <section aria-labelledby="selected-work-heading" className="mt-20">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Selected Work
              </p>
              <h2
                id="selected-work-heading"
                className="mt-1 text-2xl font-bold tracking-tight text-white"
              >
                Production &amp; Open Source
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              <span>All projects &amp; earlier work</span>
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {supportingProjects.map((project) => (
              <SpotlightCard
                key={project.id}
                spotlightColor="rgba(56, 189, 248, 0.12)"
                className="flex flex-col justify-between p-6 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
                      {project.status}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                        >
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* 4. Experience & Credentials Bento */}
        <section aria-labelledby="background-heading" className="mt-20">
          <div className="mb-6">
            <p className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Background
            </p>
            <h2
              id="background-heading"
              className="mt-1 text-2xl font-bold tracking-tight text-white"
            >
              Experience &amp; Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Experience Timeline */}
            <SpotlightCard className="p-6 lg:col-span-7">
              <div className="flex items-center justify-between gap-2 border-b border-white/[0.07] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300">
                    <Briefcase size={15} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      EDILVOS
                    </h3>
                    <p className="text-xs text-slate-400">
                      Construction cooperative, 20+ workers · Tuscany, Italy
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-500">
                  2023 – Present
                </span>
              </div>

              <ol className="mt-5 space-y-5">
                {EDILVOS_ROLES.map((role, index) => (
                  <li key={role.title} className="relative pl-5">
                    <span
                      aria-hidden="true"
                      className={`absolute top-1.5 left-0 h-2 w-2 rounded-full ${
                        index === 0 ? "bg-violet-400" : "bg-slate-600"
                      }`}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-100">
                        {role.title}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500">
                        {role.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {role.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </SpotlightCard>

            {/* Education & Awards */}
            <div className="flex flex-col gap-5 lg:col-span-5">
              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.12)"
                className="p-6"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-300">
                    <GraduationCap size={16} />
                  </span>
                  <h3 className="text-sm font-semibold text-white">Education</h3>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-100">
                  BSc (Hons) Computer Science
                </p>
                <p className="text-xs text-sky-300">
                  Specialization in Cloud Computing · OPIT
                </p>
                <p className="mt-2 font-mono text-xs text-slate-400">
                  Aug 2026 · Transcript 99/100 across 25 modules
                </p>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(52, 211, 153, 0.12)"
                className="flex-1 p-6"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                    <Award size={16} />
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    Certifications &amp; Awards
                  </h3>
                </div>
                <ul className="mt-3 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center justify-between gap-2">
                    <span>Microsoft Azure Fundamentals</span>
                    <span className="font-mono text-emerald-300">AZ-900</span>
                  </li>
                  <li className="flex items-center justify-between gap-2">
                    <span>ESCP Scalability Award</span>
                    <span className="font-mono text-slate-400">
                      Team · Sole Dev
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-2">
                    <span>OPIT Hackathon</span>
                    <span className="font-mono text-slate-400">
                      3rd Place (Team)
                    </span>
                  </li>
                </ul>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* 5. Core Stack Strip */}
        <section aria-labelledby="stack-heading" className="mt-20">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Toolbox
              </p>
              <h2
                id="stack-heading"
                className="mt-1 text-2xl font-bold tracking-tight text-white"
              >
                Core Engineering Stack
              </h2>
            </div>
            <Link
              href="/skills"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              <span>Full skills breakdown</span>
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <SpotlightCard className="p-5 sm:p-6">
            <div className="flex flex-wrap gap-2">
              {CORE_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-xs font-medium text-slate-200 transition-colors hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </section>

        {/* 6. Contact CTA */}
        <section className="mt-20">
          <SpotlightCard className="flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="space-y-1.5">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Hiring for a .NET backend role?
              </h2>
              <p className="text-sm text-slate-400">
                Download the 1-page CV, inspect the AutoPreventivo case study, or
                send a direct message.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-400/50 bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </Link>
              <a
                href="/cv.pdf"
                download="Marco_Fediuc_CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                <FileDown size={16} />
                <span>CV (PDF)</span>
              </a>
            </div>
          </SpotlightCard>
        </section>
      </div>
    </div>
  );
}
