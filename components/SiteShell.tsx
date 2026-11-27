"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast((current) => (current === msg ? null : current));
    }, 2400);
  }, []);

  const copyEmail = useCallback(() => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText("marcofediuc04@gmail.com")
        .then(() => showToast("Copied marcofediuc04@gmail.com"))
        .catch(() => showToast("Email: marcofediuc04@gmail.com"));
    }
  }, [showToast]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar onOpenCommand={() => setCmdOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer onCopyEmail={copyEmail} />
      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onCopyEmail={copyEmail}
      />

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-5 bottom-5 z-50 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-[#0e121a]/95 px-4 py-2.5 text-xs font-medium text-emerald-200 shadow-2xl backdrop-blur-md"
        >
          <Check size={14} className="text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
