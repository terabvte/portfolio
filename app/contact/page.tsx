"use client";

import React, { useState, FormEvent } from "react";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Linkedin,
  Github,
  FileDown,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmissionStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("marcofediuc04@gmail.com").then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus("success");
        setFeedbackMessage(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmissionStatus("error");
        setFeedbackMessage(
          result.error || "Failed to send message. Please try again."
        );
      }
    } catch {
      setSubmissionStatus("error");
      setFeedbackMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <p className="font-mono text-xs font-semibold tracking-wider text-violet-300 uppercase">
          Contact
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          Reach out directly by email, LinkedIn, or the form below.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Direct Channels */}
        <div className="space-y-4 lg:col-span-5">
          <SpotlightCard className="p-6">
            <h2 className="text-sm font-semibold text-white">Direct links</h2>
            <p className="mt-1 text-xs text-slate-400">
              Fastest ways to reach me or review my work.
            </p>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3">
                <a
                  href="mailto:marcofediuc04@gmail.com"
                  className="flex min-w-0 items-center gap-2.5 text-xs font-medium text-slate-200 hover:text-white"
                >
                  <Mail size={15} className="shrink-0 text-violet-300" />
                  <span className="truncate font-mono">
                    marcofediuc04@gmail.com
                  </span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:bg-white/[0.1] hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href="https://www.linkedin.com/in/marco-fediuc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 text-xs font-medium text-slate-200 transition-colors hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white"
              >
                <span className="flex items-center gap-2.5">
                  <Linkedin size={15} className="text-sky-400" />
                  <span>LinkedIn</span>
                </span>
                <ArrowUpRight size={14} className="text-slate-500" />
              </a>

              <a
                href="https://github.com/marcofediuc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 text-xs font-medium text-slate-200 transition-colors hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white"
              >
                <span className="flex items-center gap-2.5">
                  <Github size={15} className="text-slate-300" />
                  <span>GitHub (@marcofediuc)</span>
                </span>
                <ArrowUpRight size={14} className="text-slate-500" />
              </a>

              <a
                href="/cv.pdf"
                download="Marco_Fediuc_CV.pdf"
                className="flex items-center justify-between rounded-xl border border-violet-500/35 bg-violet-500/10 px-3.5 py-3 text-xs font-semibold text-violet-100 transition-colors hover:border-violet-400/60 hover:bg-violet-500/20 hover:text-white"
              >
                <span className="flex items-center gap-2.5">
                  <FileDown size={15} className="text-violet-300" />
                  <span>Download CV (PDF)</span>
                </span>
                <span className="font-mono text-[11px] text-violet-300">
                  1 page A4
                </span>
              </a>
            </div>
          </SpotlightCard>
        </div>

        {/* Contact Form */}
        <SpotlightCard className="p-6 sm:p-8 lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium text-slate-300"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/[0.1] bg-[#090c12] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-violet-400/70 focus:ring-2 focus:ring-violet-500/25 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium text-slate-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/[0.1] bg-[#090c12] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-violet-400/70 focus:ring-2 focus:ring-violet-500/25 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about the role or project..."
                className="w-full rounded-xl border border-white/[0.1] bg-[#090c12] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-violet-400/70 focus:ring-2 focus:ring-violet-500/25 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={submissionStatus === "loading"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/50 bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submissionStatus === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              <span>
                {submissionStatus === "loading" ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>

          {feedbackMessage && submissionStatus !== "loading" && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-5 flex items-center gap-2.5 rounded-xl border p-4 text-xs font-medium ${
                submissionStatus === "success"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                  : "border-red-500/30 bg-red-500/10 text-red-200"
              }`}
            >
              {submissionStatus === "success" ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              ) : (
                <AlertTriangle className="h-4 w-4 shrink-0 text-red-400" />
              )}
              <span>{feedbackMessage}</span>
            </div>
          )}
        </SpotlightCard>
      </div>
    </div>
  );
}
