// app/[shortCode]/page.tsx
import { redirect, notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ shortCode: string }>;
};

async function getOriginalUrl(shortCode: string): Promise<string | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("API URL not configured");
    return null;
  }

  try {
    const baseUrl = apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl;
    const response = await fetch(`${baseUrl}/${shortCode}`, {
      method: "GET",
      redirect: "manual",
      cache: "no-store",
    });

    if (response.status === 301 || response.status === 302) {
      return response.headers.get("Location");
    }

    return null;
  } catch (error) {
    console.error("Error fetching original URL:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { shortCode } = await params;

  const originalUrl = await getOriginalUrl(shortCode);

  return {
    title: originalUrl
      ? `Redirecting to ${originalUrl}`
      : `Short link not found`,
    description: originalUrl
      ? `You are being redirected to ${originalUrl}`
      : "Short link could not be found",
    openGraph: {
      title: originalUrl
        ? `Redirecting to ${originalUrl}`
        : "Short link not found",
      description: originalUrl
        ? `You are being redirected to ${originalUrl}`
        : "Short link could not be found",
    },
  };
}

export default async function ShortLinkRedirect({ params }: PageProps) {
  const { shortCode } = await params;
  const originalUrl = await getOriginalUrl(shortCode);

  if (originalUrl) {
    redirect(originalUrl);
  } else {
    notFound();
  }

  return <div>Redirecting...</div>;
}
