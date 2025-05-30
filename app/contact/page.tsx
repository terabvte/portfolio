"use client"; // This component uses client-side interactivity (useState, form handling)

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
// import type { Metadata } from "next"; // Metadata should be defined in a server component or page.tsx directly if needed statically

// If you need dynamic metadata based on client state, it's more complex.
// For a static contact page, define metadata in a separate `page.tsx` or layout if this becomes purely client.
// However, for App Router, this client component can be the main export of a page.tsx.

// export const metadata: Metadata = { // Cannot export metadata from a "use client" component.
//   title: "Contact Me | Marco Fediuc",
//   description: "Get in touch with Marco Fediuc. Send a message through the contact form.",
// };

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setSubmissionStatus("error");
        setFeedbackMessage(
          result.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setSubmissionStatus("error");
      setFeedbackMessage("An unexpected error occurred. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-gray-800 via-gray-900 to-black text-white">
      <header className="sticky top-0 z-50 bg-gray-900/60 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Contact Me
            </h1>
            <Link
              href="/"
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-colors duration-200 text-xs sm:text-sm font-medium"
              aria-label="Back to Home page"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 md:p-10">
          <p className="text-center text-gray-300 mb-8 text-lg">
            Have a question or want to work together? Fill out the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
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
                className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
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
                className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
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
                className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                placeholder="Your message here..."
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={submissionStatus === "loading"}
                className="w-full flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {submissionStatus === "loading" ? (
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                ) : (
                  <Send className="h-5 w-5 mr-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                )}
                {submissionStatus === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {feedbackMessage && submissionStatus !== "loading" && (
            <div
              className={`mt-6 p-4 rounded-lg text-sm flex items-center ${
                submissionStatus === "success"
                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                  : "bg-red-500/20 text-red-300 border border-red-500/30"
              }`}
            >
              {submissionStatus === "success" ? (
                <CheckCircle className="h-5 w-5 mr-2 shrink-0" />
              ) : (
                <AlertTriangle className="h-5 w-5 mr-2 shrink-0" />
              )}
              {feedbackMessage}
            </div>
          )}
        </div>
      </main>


    </div>
  );
};

export default ContactPage;

// To set static metadata for this page, you would typically do it
// in a `layout.tsx` or if `app/contact/page.tsx` was a Server Component.
// If this `ContactPage` component is the default export of `app/contact/page.tsx`,
// you can add metadata directly in that file as a Server Component would:
//
// export const metadata: Metadata = {
//   title: "Contact Me | Marco Fediuc",
//   description: "Get in touch with Marco Fediuc. Send a message through the contact form.",
// };
//
// Then, make sure the ContactPage component itself is the default export.
// For a "use client" component, you can't export metadata directly from it.
// The best practice is to have `app/contact/page.tsx` be a server component
// that imports and renders this client component, allowing metadata export from the server component.
// For simplicity here, I've included the structure and noted metadata placement.
