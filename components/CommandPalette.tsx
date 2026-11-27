"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Home,
  Briefcase,
  Cpu,
  Mail,
  Link2,
  FileDown,
  BookOpen,
  Github,
  Linkedin,
  Copy,
  CornerDownLeft,
  X,
} from "lucide-react";

interface CommandItem {
  id: string;
  group: "Navigate" | "Actions";
  label: string;
  hint: string;
  keywords: string;
  icon: React.ReactNode;
  run: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export default function CommandPalette({
  open,
  onClose,
  onCopyEmail,
}: CommandPaletteProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const items: CommandItem[] = useMemo(
    () => [
      {
        id: "home",
        group: "Navigate",
        label: "Overview",
        hint: "/",
        keywords: "home landing overview hero autopreventivo",
        icon: <Home size={15} />,
        run: () => router.push("/"),
      },
      {
        id: "projects",
        group: "Navigate",
        label: "Projects",
        hint: "/projects",
        keywords: "projects work case study autopreventivo edilvos portfolio",
        icon: <Briefcase size={15} />,
        run: () => router.push("/projects"),
      },
      {
        id: "skills",
        group: "Navigate",
        label: "Skills & Stack",
        hint: "/skills",
        keywords: "skills stack c# dotnet azure sql ef core react nextjs",
        icon: <Cpu size={15} />,
        run: () => router.push("/skills"),
      },
      {
        id: "contact",
        group: "Navigate",
        label: "Contact",
        hint: "/contact",
        keywords: "contact email message form hire",
        icon: <Mail size={15} />,
        run: () => router.push("/contact"),
      },
      {
        id: "shortener",
        group: "Navigate",
        label: "URL Shortener UI",
        hint: "/shortener",
        keywords: "shortener url links",
        icon: <Link2 size={15} />,
        run: () => router.push("/shortener"),
      },
      {
        id: "cv",
        group: "Actions",
        label: "Download CV (PDF)",
        hint: "Marco_Fediuc_CV.pdf",
        keywords: "cv resume pdf download",
        icon: <FileDown size={15} />,
        run: () => {
          const link = document.createElement("a");
          link.href = "/cv.pdf";
          link.download = "Marco_Fediuc_CV.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
      },
      {
        id: "case-study",
        group: "Actions",
        label: "Open AutoPreventivo Case Study",
        hint: "github.com/terabvte/quote-engine",
        keywords: "quote engine autopreventivo neuro symbolic case study",
        icon: <BookOpen size={15} />,
        run: () => window.open("https://github.com/terabvte/quote-engine", "_blank", "noopener,noreferrer"),
      },
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy Email Address",
        hint: "marcofediuc04@gmail.com",
        keywords: "copy email address clipboard contact",
        icon: <Copy size={15} />,
        run: () => onCopyEmail(),
      },
      {
        id: "github",
        group: "Actions",
        label: "Open GitHub Profile",
        hint: "github.com/terabvte",
        keywords: "github profile code repos",
        icon: <Github size={15} />,
        run: () => window.open("https://github.com/terabvte", "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        group: "Actions",
        label: "Open LinkedIn",
        hint: "linkedin.com/in/marco-fediuc",
        keywords: "linkedin profile career",
        icon: <Linkedin size={15} />,
        run: () => window.open("https://www.linkedin.com/in/marco-fediuc/", "_blank", "noopener,noreferrer"),
      },
    ],
    [router, onCopyEmail]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q) ||
        item.keywords.includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) =>
          filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0
        );
      } else if (e.key === "Enter" && filtered[activeIndex]) {
        e.preventDefault();
        filtered[activeIndex].run();
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex, onClose]);

  if (!open) return null;

  const groups: Array<"Navigate" | "Actions"> = ["Navigate", "Actions"];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0e121a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3.5">
          <Search size={16} className="shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to a page or run an action..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close command palette"
            className="rounded-md p-1 text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-slate-200"
          >
            <X size={15} />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-slate-500">
              No matching commands.
            </p>
          ) : (
            groups.map((group) => {
              const groupItems = filtered.filter((i) => i.group === group);
              if (groupItems.length === 0) return null;
              return (
                <div key={group} className="mb-2 last:mb-0">
                  <div className="px-3 py-1.5 font-mono text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                    {group}
                  </div>
                  {groupItems.map((item) => {
                    const idx = filtered.indexOf(item);
                    const selected = idx === activeIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => {
                          item.run();
                          onClose();
                        }}
                        className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                          selected
                            ? "bg-violet-500/15 text-white"
                            : "text-slate-300 hover:bg-white/[0.04]"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={
                              selected ? "text-violet-300" : "text-slate-500"
                            }
                          >
                            {item.icon}
                          </span>
                          <span className="font-medium">{item.label}</span>
                        </span>
                        <span className="hidden font-mono text-xs text-slate-500 sm:inline">
                          {item.hint}
                        </span>
                      </button>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.02] px-4 py-2 font-mono text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <CornerDownLeft size={12} /> Select
          </span>
          <span>↑↓ Navigate · Esc Close</span>
        </div>
      </div>
    </div>
  );
}
