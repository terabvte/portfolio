import { redirect, notFound } from "next/navigation";

interface PageProps {
  params: {
    shortCode: string;
  };
}

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

    if (response.status === 302 || response.status === 301) {
      const location = response.headers.get("Location");
      return location;
    }

    return null;
  } catch (error) {
    console.error("Error fetching original URL:", error);
    return null;
  }
}

export default async function ShortLinkRedirect({ params }: PageProps) {
  const { shortCode } = params;

  const originalUrl = await getOriginalUrl(shortCode);

  if (originalUrl) {
    redirect(originalUrl);
  } else {
    notFound();
  }
}
