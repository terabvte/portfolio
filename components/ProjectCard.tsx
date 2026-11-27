"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ArrowUpRight, Layers } from "lucide-react";
import { Project } from "@/data/projects";
import SpotlightCard from "@/components/SpotlightCard";

const STATUS_TONES = {
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  slate: "border-white/[0.1] bg-white/[0.04] text-slate-400",
};

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export default function ProjectCard({
  project,
  compact = false,
}: ProjectCardProps) {
  const isInternalWebsite = project.websiteUrl?.startsWith("/");
  const toneClass = STATUS_TONES[project.statusTone || "slate"];

  return (
    <SpotlightCard className="group flex h-full flex-col overflow-hidden hover:-translate-y-0.5">
      {/* Visual Preview */}
      {!compact && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/[0.06] bg-[#090c12]">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={`Preview of ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="bg-dot-grid flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300">
                <Layers size={20} />
              </div>
              <span className="font-mono text-xs tracking-wider text-slate-400 uppercase">
                {project.title}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {project.status && (
          <div className="mb-3">
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase ${toneClass}`}
            >
              {project.status}
            </span>
          </div>
        )}

        <h3 className="text-lg font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="mt-0.5 font-mono text-xs text-slate-400">
            {project.subtitle}
          </p>
        )}

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-white/[0.06] pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-white/[0.2] hover:bg-white/[0.07] hover:text-white"
            >
              <Github size={14} />
              <span>{project.githubLabel || "GitHub"}</span>
            </a>
          )}
          {project.websiteUrl &&
            (isInternalWebsite ? (
              <Link
                href={project.websiteUrl}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-violet-500/35 bg-violet-500/15 px-3.5 py-2 text-xs font-semibold text-violet-100 transition-colors hover:border-violet-400/60 hover:bg-violet-500/25 hover:text-white"
              >
                <span>{project.websiteLabel || "Open"}</span>
                <ArrowUpRight size={14} />
              </Link>
            ) : (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-violet-500/35 bg-violet-500/15 px-3.5 py-2 text-xs font-semibold text-violet-100 transition-colors hover:border-violet-400/60 hover:bg-violet-500/25 hover:text-white"
              >
                <span>{project.websiteLabel || "Live Site"}</span>
                <ArrowUpRight size={14} />
              </a>
            ))}
        </div>
      </div>
    </SpotlightCard>
  );
}
