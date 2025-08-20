"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Loader2,
  CheckCircle,
  AlertTriangle,
  ClipboardCopy,
  Link as LinkIcon,
} from "lucide-react";

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
    } catch (err: any) {
      setSubmissionStatus("error");
      setFeedbackMessage(err.message);
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
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-gray-800 via-gray-900 to-black text-white">
      <header className="sticky top-0 z-50 bg-gray-900/60 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              URL Shortener
            </h1>
            <Link
              href="/projects"
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-colors duration-200 text-xs sm:text-sm font-medium"
              aria-label="Back to Projects page"
            >
              <ArrowLeft size={18} />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 md:p-10">
          <p className="text-center text-gray-300 mb-8 text-lg">
            Create a compact link from a long URL :]
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="url" className="sr-only">
                Long URL
              </label>
              <input
                type="url"
                name="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                placeholder="https://your-very-long-url.com/goes-here"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={submissionStatus === "loading"}
                className="w-full flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {submissionStatus === "loading" ? (
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                ) : (
                  <LinkIcon className="h-5 w-5 mr-2" />
                )}
                {submissionStatus === "loading"
                  ? "Creating Link..."
                  : "Shorten URL"}
              </button>
            </div>
          </form>

          {submissionStatus === "error" && feedbackMessage && (
            <div className="mt-6 p-4 rounded-lg text-sm flex items-center bg-red-500/20 text-red-300 border border-red-500/30">
              <AlertTriangle className="h-5 w-5 mr-2 shrink-0" />
              {feedbackMessage}
            </div>
          )}

          {submissionStatus === "success" && result && (
            <div className="mt-6 p-4 space-y-3 text-center bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-md">
                <a
                  href={result.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono text-sky-400 hover:underline break-all"
                >
                  {result.shortUrl}
                </a>
                <button
                  onClick={handleCopyToClipboard}
                  className="ml-4 px-3 py-1 text-sm bg-gray-600 hover:bg-gray-500 rounded-md transition-colors"
                  title="Copy to clipboard"
                >
                  <ClipboardCopy size={16} />
                </button>
              </div>
              {feedbackMessage && (
                <p className="text-xs text-green-400">{feedbackMessage}</p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
