"use client";

import React, { useEffect, useState } from "react";
import {
  Play,
  RotateCcw,
  ArrowUpRight,
  Cpu,
  Sparkles,
  FileText,
  MessageSquareText,
  CheckCircle2,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

interface PipelineStage {
  id: string;
  step: string;
  layer: string;
  title: string;
  shortDesc: string;
  accent: "slate" | "violet" | "sky" | "emerald";
  icon: React.ReactNode;
  summary: string;
  guarantees: string[];
  codeTitle: string;
  codeLang: string;
  codeBlock: React.ReactNode;
  tech: string[];
}

const STAGES: PipelineStage[] = [
  {
    id: "input",
    step: "01",
    layer: "INPUT",
    title: "Italian Free-Text",
    shortDesc: "6 renovation types + CreaTivo",
    accent: "slate",
    icon: <MessageSquareText size={16} />,
    summary:
      "Homeowners describe a renovation in plain Italian via edilvos.it (or operators enter items directly through the CreaTivo manual builder). Requests are validated before touching downstream services.",
    guarantees: [
      "Supports six renovation types across AI and manual (CreaTivo) paths",
      "Strict request validation on API ingress before pipeline execution",
      "Production traffic of 5-30 quotes/month assisting a manual workflow",
    ],
    codeTitle: "request.json",
    codeLang: "json",
    codeBlock: (
      <>
        <span className="text-slate-500 italic">{"// POST /api/quotes/generate"}</span>
        {"\n"}
        <span className="text-slate-400">{"{"}</span>
        {"\n  "}
        <span className="text-sky-300">{'"type"'}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-emerald-300">{'"kitchen"'}</span>
        <span className="text-slate-400">{","}</span>
        {"\n  "}
        <span className="text-sky-300">{'"areaSqm"'}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-amber-300">{"12"}</span>
        <span className="text-slate-400">{","}</span>
        {"\n  "}
        <span className="text-sky-300">{'"notes"'}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-emerald-300">{'"Piastrelle e idraulico"'}</span>
        {"\n"}
        <span className="text-slate-400">{"}"}</span>
      </>
    ),
    tech: ["Next.js 15", "ASP.NET Core Minimal APIs", "Request Validation"],
  },
  {
    id: "neural",
    step: "02",
    layer: "NEURAL",
    title: "LLM Intent Parse",
    shortDesc: "Model translates, never totals",
    accent: "violet",
    icon: <Sparkles size={16} />,
    summary:
      "The OpenAI API translates unstructured Italian into structured renovation intent (recipe, dimensions, scope flags, materials). The model is strictly bounded: it never computes line totals or final quote prices.",
    guarantees: [
      "JSON-schema-constrained intent extraction with invariant repair",
      "Candidate reranking with sanity guards for non-exact items",
      "Unmatched lines receive an explicitly labelled AI_ESTIMATE, never a silent guess",
    ],
    codeTitle: "intent.schema.json",
    codeLang: "json",
    codeBlock: (
      <>
        <span className="text-slate-500 italic">{"// Structured model output"}</span>
        {"\n"}
        <span className="text-slate-400">{"{"}</span>
        {"\n  "}
        <span className="text-sky-300">{'"recipe"'}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-emerald-300">{'"kitchen_renovation"'}</span>
        <span className="text-slate-400">{","}</span>
        {"\n  "}
        <span className="text-sky-300">{'"areaSqm"'}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-amber-300">{"12.0"}</span>
        <span className="text-slate-400">{","}</span>
        {"\n  "}
        <span className="text-sky-300">{'"items"'}</span>
        <span className="text-slate-400">{": ["}</span>
        {"\n    "}
        <span className="text-emerald-300">{'"tile_removal"'}</span>
        <span className="text-slate-400">{","}</span>
        {"\n    "}
        <span className="text-emerald-300">{'"plumbing_rough_in"'}</span>
        <span className="text-slate-400">{","}</span>
        {"\n    "}
        <span className="text-emerald-300">{'"wall_painting"'}</span>
        {"\n  "}
        <span className="text-slate-400">{"],"}</span>
        {"\n  "}
        <span className="text-sky-300">{'"unmatched"'}</span>
        <span className="text-slate-400">{": []"}</span>
        {"\n"}
        <span className="text-slate-400">{"}"}</span>
      </>
    ),
    tech: ["OpenAI API", "Structured Schema", "Labelled Fallback"],
  },
  {
    id: "symbolic",
    step: "03",
    layer: "SYMBOLIC",
    title: "C# Recipes & Catalogue",
    shortDesc: "Deterministic decimal totals",
    accent: "sky",
    icon: <Cpu size={16} />,
    summary:
      "Deterministic C# renovation recipes expand structured intent into quantities, waste factors, and catalogue lookups. Every unit calculation, subtotal, and quote total executes in C# decimal arithmetic.",
    guarantees: [
      "Matched items are priced deterministically from the catalogue",
      "All subtotals and final totals calculated in C# decimal arithmetic",
      "48 in-process xUnit/Moq tests gate GitHub Actions deployment",
    ],
    codeTitle: "QuotePricer.cs",
    codeLang: "csharp",
    codeBlock: (
      <>
        <span className="text-slate-500 italic">{"// Deterministic C# pricing"}</span>
        {"\n"}
        <span className="text-violet-300">{"var "}</span>
        <span className="text-slate-100">{"unit "}</span>
        <span className="text-slate-400">{"= "}</span>
        <span className="text-slate-200">{"catalog"}</span>
        <span className="text-slate-400">{"."}</span>
        <span className="text-sky-300">{"GetPrice"}</span>
        <span className="text-slate-400">{"("}</span>
        <span className="text-slate-200">{"item"}</span>
        <span className="text-slate-400">{");"}</span>
        {"\n"}
        <span className="text-violet-300">{"var "}</span>
        <span className="text-slate-100">{"line "}</span>
        <span className="text-slate-400">{"= "}</span>
        <span className="text-violet-300">{"decimal"}</span>
        <span className="text-slate-400">{"."}</span>
        <span className="text-sky-300">{"Round"}</span>
        <span className="text-slate-400">{"("}</span>
        {"\n  "}
        <span className="text-slate-200">{"item"}</span>
        <span className="text-slate-400">{"."}</span>
        <span className="text-slate-200">{"Qty "}</span>
        <span className="text-slate-400">{"* "}</span>
        <span className="text-slate-200">{"unit"}</span>
        <span className="text-slate-400">{", "}</span>
        <span className="text-amber-300">{"2"}</span>
        {"\n"}
        <span className="text-slate-400">{");"}</span>
        {"\n"}
        <span className="text-violet-300">{"var "}</span>
        <span className="text-slate-100">{"total "}</span>
        <span className="text-slate-400">{"= "}</span>
        <span className="text-slate-200">{"lines"}</span>
        <span className="text-slate-400">{"."}</span>
        <span className="text-sky-300">{"Sum"}</span>
        <span className="text-slate-400">{"("}</span>
        <span className="text-slate-200">{"l "}</span>
        <span className="text-violet-300">{"=> "}</span>
        <span className="text-slate-200">{"l"}</span>
        <span className="text-slate-400">{"."}</span>
        <span className="text-slate-200">{"Total"}</span>
        <span className="text-slate-400">{");"}</span>
        {"\n\n"}
        <span className="text-slate-500 italic">{"// Thesis case (15 iterations):"}</span>
        {"\n"}
        <span className="text-emerald-400/90 italic">{"// €6,537.72 -> €4,714.89"}</span>
      </>
    ),
    tech: ["C#", ".NET 10", "MediatR", "xUnit / Moq"],
  },
  {
    id: "output",
    step: "04",
    layer: "OUTPUT",
    title: "Itemised Quote & PDF",
    shortDesc: "QuestPDF · Azure Blob · SQL",
    accent: "emerald",
    icon: <FileText size={16} />,
    summary:
      "QuestPDF renders an itemised customer PDF with any AI-estimated line visibly marked. The PDF is uploaded to Azure Blob Storage, metadata persists in Azure SQL via EF Core 10, and telemetry logs via Serilog & Application Insights.",
    guarantees: [
      "Fail-closed admin-key filter (SHA-256 + FixedTimeEquals) protects admin routes",
      "Structured telemetry: Serilog, Application Insights, correlation IDs, /health",
      "PDFs persisted in Azure Blob Storage and linked from Azure SQL",
    ],
    codeTitle: "quote.persisted.json",
    codeLang: "json",
    codeBlock: (
      <>
        <span className="text-slate-500 italic">{"// Persisted artifact (SQL + Blob)"}</span>
        {"\n"}
        <span className="text-slate-400">{"{"}</span>
        {"\n  "}
        <span className="text-sky-300">{'"status"'}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-emerald-300">{'"Generated"'}</span>
        <span className="text-slate-400">{","}</span>
        {"\n  "}
        <span className="text-sky-300">{'"pdfBlob"'}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-emerald-300">{'"quotes/sample.pdf"'}</span>
        <span className="text-slate-400">{","}</span>
        {"\n  "}
        <span className="text-sky-300">{'"aiEstimatedLines"'}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-amber-300">{"0"}</span>
        <span className="text-slate-400">{","}</span>
        {"\n  "}
        <span className="text-sky-300">{'"correlationId"'}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-emerald-300">{'"00-trace-id"'}</span>
        {"\n"}
        <span className="text-slate-400">{"}"}</span>
      </>
    ),
    tech: ["QuestPDF", "EF Core 10", "Azure SQL", "Blob Storage", "Serilog"],
  },
];

const ACCENT_STYLES = {
  slate: {
    ring: "border-slate-400/50 bg-slate-500/10",
    idle: "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18]",
    badge: "text-slate-300",
    dot: "bg-slate-400",
    pill: "border-slate-500/30 bg-slate-500/10 text-slate-300",
  },
  violet: {
    ring: "border-violet-400/70 bg-violet-500/15 shadow-[0_0_24px_-6px_rgba(139,92,246,0.45)]",
    idle: "border-violet-500/25 bg-violet-500/[0.05] hover:border-violet-400/50",
    badge: "text-violet-300",
    dot: "bg-violet-400",
    pill: "border-violet-500/30 bg-violet-500/10 text-violet-200",
  },
  sky: {
    ring: "border-sky-400/70 bg-sky-500/15 shadow-[0_0_24px_-6px_rgba(56,189,248,0.45)]",
    idle: "border-sky-500/25 bg-sky-500/[0.05] hover:border-sky-400/50",
    badge: "text-sky-300",
    dot: "bg-sky-400",
    pill: "border-sky-500/30 bg-sky-500/10 text-sky-200",
  },
  emerald: {
    ring: "border-emerald-400/70 bg-emerald-500/15 shadow-[0_0_24px_-6px_rgba(52,211,153,0.45)]",
    idle: "border-emerald-500/25 bg-emerald-500/[0.05] hover:border-emerald-400/50",
    badge: "text-emerald-300",
    dot: "bg-emerald-400",
    pill: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
  },
};

export default function ArchitectureExplorer() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [tracing, setTracing] = useState(false);

  useEffect(() => {
    if (!tracing) return;
    const timer = setInterval(() => {
      setSelectedIndex((prev) => {
        if (prev >= STAGES.length - 1) {
          setTracing(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, [tracing]);

  const startTrace = () => {
    setSelectedIndex(0);
    setTracing(true);
  };

  const activeStage = STAGES[selectedIndex];
  const activeAccent = ACCENT_STYLES[activeStage.accent];

  return (
    <SpotlightCard
      spotlightColor="rgba(139, 92, 246, 0.12)"
      className="overflow-hidden"
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-violet-500 via-sky-500 via-50% to-emerald-500 animate-gradient-flow" />

      <div className="p-5 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-violet-300 uppercase">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-subtle-pulse" />
              <span>Flagship Production System · Interactive Explorer</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              AutoPreventivo - Neuro-Symbolic Quote Engine
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
              Built as sole developer for{" "}
              <a
                href="https://www.edilvos.it"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-200 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
              >
                Edilvos
              </a>
              . Click any stage below, or run a trace, to inspect how
              natural-language intent is isolated from deterministic C# pricing.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={tracing ? () => setTracing(false) : startTrace}
              className="inline-flex items-center gap-2 rounded-xl border border-violet-500/40 bg-violet-500/15 px-3.5 py-2 text-xs font-semibold text-violet-100 transition-all hover:border-violet-400/70 hover:bg-violet-500/25"
            >
              {tracing ? (
                <>
                  <RotateCcw size={14} className="animate-spin" />
                  <span>Tracing...</span>
                </>
              ) : (
                <>
                  <Play size={14} className="fill-current" />
                  <span>Trace Request</span>
                </>
              )}
            </button>
            <a
              href="https://github.com/terabvte/quote-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white"
            >
              <span>Full Case Study</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Interactive 4-Stage Pipeline */}
        <div
          role="tablist"
          aria-label="AutoPreventivo pipeline stages"
          className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STAGES.map((stage, idx) => {
            const isActive = idx === selectedIndex;
            const st = ACCENT_STYLES[stage.accent];
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setTracing(false);
                  setSelectedIndex(idx);
                }}
                className={`group relative flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-200 ${
                  isActive ? st.ring : st.idle
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span
                    className={`font-mono text-[10px] font-bold tracking-wider uppercase ${st.badge}`}
                  >
                    {stage.step} · {stage.layer}
                  </span>
                  <span className={`${st.badge} opacity-80`}>{stage.icon}</span>
                </div>
                <span className="mt-2 text-sm font-semibold text-white">
                  {stage.title}
                </span>
                <span className="mt-0.5 font-mono text-[11px] text-slate-400">
                  {stage.shortDesc}
                </span>
                {isActive && (
                  <span
                    className={`mt-3 h-0.5 w-8 rounded-full ${st.dot}`}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Stage Inspector Panel */}
        <div
          role="tabpanel"
          className="mt-5 grid grid-cols-1 gap-5 rounded-xl border border-white/[0.08] bg-[#090c12] p-5 lg:grid-cols-12"
        >
          <div className="space-y-4 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold ${activeAccent.pill}`}
              >
                <span>
                  Stage {activeStage.step} - {activeStage.layer}
                </span>
              </span>
              <h3 className="text-base font-semibold text-white">
                {activeStage.title}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              {activeStage.summary}
            </p>

            <ul className="space-y-2">
              {activeStage.guarantees.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400"
                >
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeStage.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-white/[0.07] bg-[#06080d] p-4 lg:col-span-5">
            <div className="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="font-mono text-[11px] text-slate-400">
                {activeStage.codeTitle}
              </span>
              <span className="rounded bg-white/[0.05] px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
                {activeStage.codeLang}
              </span>
            </div>
            <pre className="whitespace-pre-wrap break-words font-mono text-[11.5px] leading-relaxed">
              <code>{activeStage.codeBlock}</code>
            </pre>
          </div>
        </div>

        {/* Verified Evidence Strip */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
            <div className="font-mono text-sm font-semibold tabular-nums text-white">
              €6,537.72 → €4,714.89
            </div>
            <div className="mt-0.5 text-xs text-slate-400">
              Thesis kitchen case across 15 iterations (42 expert runs; €1,822.83 removed)
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
            <div className="font-mono text-sm font-semibold tabular-nums text-white">
              48 xUnit / Moq Tests
            </div>
            <div className="mt-0.5 text-xs text-slate-400">
              In-process WebApplicationFactory suite gating GitHub Actions deploys
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
            <div className="font-mono text-sm font-semibold text-white">
              .NET 10 · EF Core 10
            </div>
            <div className="mt-0.5 text-xs text-slate-400">
              Fail-closed admin-key filter, Serilog, Application Insights, /health
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
