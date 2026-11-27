import React from "react";
import type { Metadata } from "next";
import { skillsData, SkillCategory } from "@/data/skills";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Marco Fediuc's backend, data, cloud, testing, and frontend engineering stack: C#, .NET 10, ASP.NET Core, EF Core, Azure, SQL Server, and Next.js.",
};

const ACCENT_MAP: Record<
  SkillCategory["accent"],
  { dot: string; iconBox: string; spotlight: string }
> = {
  violet: {
    dot: "bg-violet-400",
    iconBox: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    spotlight: "rgba(139, 92, 246, 0.13)",
  },
  teal: {
    dot: "bg-teal-400",
    iconBox: "border-teal-500/30 bg-teal-500/10 text-teal-300",
    spotlight: "rgba(45, 212, 191, 0.12)",
  },
  blue: {
    dot: "bg-sky-400",
    iconBox: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    spotlight: "rgba(56, 189, 248, 0.12)",
  },
  slate: {
    dot: "bg-slate-400",
    iconBox: "border-white/[0.12] bg-white/[0.04] text-slate-300",
    spotlight: "rgba(148, 163, 184, 0.11)",
  },
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <p className="font-mono text-xs font-semibold tracking-wider text-violet-300 uppercase">
          Engineering Stack
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Technical Skills
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          Technologies used across production .NET backend services, relational
          data layers, Azure hosting, CI pipelines, and React/Next.js frontends.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillsData.map((category) => {
          const Icon = category.icon;
          const styles = ACCENT_MAP[category.accent];
          return (
            <SpotlightCard
              key={category.id}
              spotlightColor={styles.spotlight}
              className="flex flex-col p-6"
            >
              <div className="flex items-start gap-3 border-b border-white/[0.07] pb-4">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${styles.iconBox}`}
                >
                  <Icon size={18} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
                    <h2 className="text-base font-semibold text-white">
                      {category.name}
                    </h2>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-white/[0.18] hover:bg-white/[0.07] hover:text-white"
                    >
                      <SkillIcon
                        size={15}
                        style={{ color: skill.color || "currentColor" }}
                        className="shrink-0"
                      />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
}
