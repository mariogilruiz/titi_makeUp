import "server-only";
import type { HomeData } from "@/types/content";

export async function getPageData(slug: string): Promise<HomeData> {
  const baseUrl = process.env.API_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing API_BASE_URL environment variable");
  }

  if (!slug) {
    throw new Error("Missing slug parameter");
  }

  const url = `${baseUrl}data/${slug}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
    Accept: "application/json",
    "x-api-key": process.env.API_SECRET || "",
  },
    // // next: { revalidate: 86400 }, // Revalidate every 24 hours
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch home data: ${response.status}`);
  }

  return (await response.json()) as HomeData;
}

export async function getHomeData(): Promise<HomeData> {
  return getPageData("home");
}
