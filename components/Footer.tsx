"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, FileDown, Mail, BookOpen } from "lucide-react";

interface FooterProps {
  onCopyEmail: () => void;
}

export default function Footer({ onCopyEmail }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.07] bg-[#07090e]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <span>Marco Fediuc</span>
            <span className="text-slate-600">·</span>
            <span className="font-mono text-xs font-normal text-slate-400">
              .NET Backend Developer
            </span>
          </div>
          <p className="text-xs text-slate-500">
            C#, ASP.NET Core, EF Core 10, Azure · Press{" "}
            <kbd className="rounded border border-white/[0.12] bg-white/[0.04] px-1.5 py-0.5 font-mono text-[11px] text-slate-300">
              ⌘K
            </kbd>{" "}
            to jump anywhere.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-400">
          <a
            href="/cv.pdf"
            download="Marco_Fediuc_CV.pdf"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <FileDown size={14} />
            <span>CV (PDF)</span>
          </a>
          <a
            href="https://github.com/marcofediuc/quote-engine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <BookOpen size={14} />
            <span>Case Study</span>
          </a>
          <a
            href="https://github.com/marcofediuc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/marco-fediuc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>
          <button
            type="button"
            onClick={onCopyEmail}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail size={14} />
            <span>Copy Email</span>
          </button>
          <Link
            href="/contact"
            className="transition-colors hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
