"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileDown, Command, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCommand: () => void;
}

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ onOpenCommand }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#07090e]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-lg text-sm font-semibold tracking-tight text-slate-100"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 font-mono text-xs font-bold text-violet-300 transition-colors group-hover:border-violet-400/60 group-hover:bg-violet-500/20">
            MF
          </span>
          <span className="hidden sm:inline">Marco Fediuc</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/[0.08] text-white"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommand}
            aria-label="Open command palette"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-slate-400 transition-colors hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-slate-200"
          >
            <Command size={13} />
            <span>K</span>
          </button>

          <a
            href="/cv.pdf"
            download="Marco_Fediuc_CV.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg border border-violet-500/40 bg-violet-500/15 px-3 py-1.5 text-xs font-semibold text-violet-200 transition-all hover:border-violet-400/70 hover:bg-violet-500/25 hover:text-white"
          >
            <FileDown size={14} />
            <span>CV</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="inline-flex items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] p-1.5 text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/[0.07] bg-[#0b0e16]/95 px-4 py-3 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-white/[0.08] text-white"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
