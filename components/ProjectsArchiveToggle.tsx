"use client";

import React, { useState } from "react";
import { ChevronDown, Archive } from "lucide-react";
import { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

interface ProjectsArchiveToggleProps {
  projects: Project[];
}

export default function ProjectsArchiveToggle({
  projects,
}: ProjectsArchiveToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <section
      aria-labelledby="earlier-projects-heading"
      className="mt-14 border-t border-white/[0.08] pt-10"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#0e121a]/70 px-5 py-4 text-left transition-colors hover:border-white/[0.16] hover:bg-[#131824]"
      >
        <div className="flex items-center gap-3.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-colors group-hover:text-slate-200">
            <Archive size={16} />
          </span>
          <div>
            <h2
              id="earlier-projects-heading"
              className="text-sm font-semibold text-slate-200 sm:text-base"
            >
              Earlier &amp; Learning Projects ({projects.length})
            </h2>
            <p className="text-xs text-slate-500">
              URL Shortener (Azure backend currently offline) plus bootcamp and
              frontend exercises.
            </p>
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180 text-white" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
