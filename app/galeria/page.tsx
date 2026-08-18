import FadeInit from "@/components/effects/Fade_init";
import type { Metadata } from "next";
import Content_galeria from "./Content_galeria";

export const metadata: Metadata = {
  title: "Galería | Nuria Makeup",
  description:
    "Galeria de trabajos de Nuria Gimenez, maquilladora profesional en Valencia para novias, invitadas y eventos.",
  keywords: [
    "galeria maquillaje",
    "maquilladora Valencia",
    "Nuria Gimenez",
    "maquillaje novias",
    "maquillaje invitadas",
    "maquillaje profesional",
    "portfolio maquillaje",
  ],
  openGraph: {
    title: "Galeria | Nuria Makeup",
    description:
      "Descubre la galeria de trabajos de Nuria Gimenez, maquilladora profesional en Valencia para novias, invitadas y eventos.",
    url: "https://www.nuriajimenezmakeup.es/galeria",
    siteName: "Nuria Makeup",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "/galeria",
  },
};

export default function Page() {
  return (
    <FadeInit>
      <Content_galeria />
    </FadeInit>
  );
}
