import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marco.gl"),
  title: {
    default: "Marco Fediuc - .NET Backend Developer",
    template: "%s | Marco Fediuc",
  },
  description:
    "Marco Fediuc, .NET backend developer building production systems with C#, ASP.NET Core, EF Core 10, and Azure. Sole developer behind AutoPreventivo at Edilvos.",
  openGraph: {
    title: "Marco Fediuc - .NET Backend Developer",
    description:
      "C#, ASP.NET Core, EF Core 10, and Azure. Sole developer behind AutoPreventivo, a neuro-symbolic quote engine in production at Edilvos.",
    url: "https://www.marco.gl",
    siteName: "Marco Fediuc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Fediuc - .NET Backend Developer",
    description:
      "C#, ASP.NET Core, EF Core 10, and Azure. AutoPreventivo case study, projects, and CV.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased">
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
