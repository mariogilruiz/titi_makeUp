import "server-only";
import type { HomeData, AboutData, Personal } from "@/types/content";

export async function getPersonalData(): Promise<Personal> {
  // Detectar si estamos en el servidor o cliente
  const isServer = typeof window === "undefined";
  const url = isServer
    ? `http://localhost:3000/api/proxy?slug=personal`
    : `/api/proxy?slug=personal`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch personal data: ${response.status}`);
  }

  return (await response.json()) as Personal;
}

export async function getAboutData(): Promise<AboutData> {
  // Detectar si estamos en el servidor o cliente
  const isServer = typeof window === "undefined";
  const url = isServer
    ? `http://localhost:3000/api/proxy?slug=about`
    : `/api/proxy?slug=about`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch about data: ${response.status}`);
  }

  return (await response.json()) as AboutData;
}

export async function getPageData(slug: string): Promise<HomeData> {
  if (!slug) {
    throw new Error("Missing slug parameter");
  }

  // Detectar si estamos en el servidor o cliente
  const isServer = typeof window === "undefined";
  // Cambia la URL según el entorno
  const url = isServer
    ? `http://localhost:3000/api/proxy?slug=${encodeURIComponent(slug)}`
    : `/api/proxy?slug=${encodeURIComponent(slug)}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    // next: { revalidate: 86400 }, // Revalidate every 24 hours
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch home data: ${response.status}`);
  }

  return (await response.json()) as HomeData;
}



