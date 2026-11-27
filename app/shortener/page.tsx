"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Loader2,
  AlertTriangle,
  ClipboardCopy,
  Link as LinkIcon,
  Info,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

interface ShortenResponse {
  shortUrl: string;
  originalUrl: string;
}

type SubmissionStatus = "idle" | "loading" | "success" | "error";

export default function ShortenerPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<ShortenResponse | null>(null);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("loading");
    setFeedbackMessage("");
    setResult(null);

    if (!apiUrl) {
      setSubmissionStatus("error");
      setFeedbackMessage("API URL is not configured.");
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urlLink: url }),
      });

      const data = await response.json();

      if (!response.ok) {
        const message =
          data.errors?.urlLink?.[0] ||
          data.detail ||
          "An unexpected error occurred.";
        throw new Error(message);
      }

      setSubmissionStatus("success");
      setResult(data);
      setUrl("");
    } catch (err: unknown) {
      setSubmissionStatus("error");
      if (err instanceof Error) {
        setFeedbackMessage(err.message);
      } else {
        setFeedbackMessage("An unexpected error occurred.");
      }
    }
  };

  const handleCopyToClipboard = () => {
    if (result?.shortUrl) {
      navigator.clipboard.writeText(result.shortUrl);
      setFeedbackMessage("Copied to clipboard!");
      setTimeout(() => {
        if (submissionStatus === "success") {
          setFeedbackMessage("");
        }
      }, 2000);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-white"
      >
        <ArrowLeft size={14} />
        <span>Back to Projects</span>
      </Link>

      <header className="mt-5">
        <p className="font-mono text-xs font-semibold tracking-wider text-sky-300 uppercase">
          ASP.NET Core + PostgreSQL + Dapper
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          URL Shortener
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Create a compact link from a long URL.
        </p>
      </header>

      <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-200">
        <Info size={16} className="mt-0.5 shrink-0 text-amber-400" />
        <span>
          Note: the companion Azure App Service backend is currently offline
          pending maintenance, so link creation requests may fail until it is
          re-enabled.
        </span>
      </div>

      <SpotlightCard className="mt-6 p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="url"
              className="mb-1.5 block text-xs font-medium text-slate-300"
            >
              Destination URL
            </label>
            <input
              type="url"
              name="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              placeholder="https://example.com/long-url"
              className="w-full rounded-xl border border-white/[0.1] bg-[#090c12] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-sky-400/70 focus:ring-2 focus:ring-sky-500/25 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={submissionStatus === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sky-400/50 bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submissionStatus === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <LinkIcon className="h-4 w-4" />
            )}
            <span>
              {submissionStatus === "loading"
                ? "Creating Link..."
                : "Shorten URL"}
            </span>
          </button>
        </form>

        {submissionStatus === "error" && feedbackMessage && (
          <div
            role="alert"
            className="mt-5 flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-200"
          >
            <AlertTriangle className="h-4 w-4 shrink-0 text-red-400" />
            <span>{feedbackMessage}</span>
          </div>
        )}

        {submissionStatus === "success" && result && (
          <div className="mt-5 space-y-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
            <div className="flex items-center justify-between gap-3 rounded-lg bg-[#090c12] p-3">
              <a
                href={result.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm break-all text-sky-300 hover:underline"
              >
                {result.shortUrl}
              </a>
              <button
                type="button"
                onClick={handleCopyToClipboard}
                aria-label="Copy shortened URL"
                className="shrink-0 rounded-lg border border-white/[0.1] bg-white/[0.05] p-2 text-slate-200 transition-colors hover:bg-white/[0.12]"
              >
                <ClipboardCopy size={15} />
              </button>
            </div>
            {feedbackMessage && (
              <p className="text-xs text-emerald-300">{feedbackMessage}</p>
            )}
          </div>
        )}
      </SpotlightCard>
    </div>
  );
}
