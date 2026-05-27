import FadeInit from "@/components/effects/Fade_init";
import type { Metadata } from "next";
import Content_sobreMi from "./Content_sobreMi";
import { getAboutData, getPageData } from "@/lib/api/datas";

export const metadata: Metadata = {
  title: "Sobre Mí | Nuria Makeup",
  description:
    "Conoce a Nuria Giménez, maquilladora profesional especializada en novias, invitadas y cursos de automaquillaje en Valencia.",
  keywords: [
    "sobre mí",
    "Nuria Giménez",
    "maquilladora Valencia",
    "maquillaje profesional",
    "novias",
    "invitadas",
    "cursos automaquillaje",
  ],
  openGraph: {
    title: "Sobre Mí | Nuria Makeup",
    description:
      "Conoce a Nuria Giménez, maquilladora profesional especializada en novias, invitadas y cursos de automaquillaje en Valencia.",
    url: "https://www.nuriajimenezmakeup.es/sobre-mi",
    siteName: "Nuria Makeup",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "/sobre-mi",
  },
};

export default async function SobreMiPage() {
  const respond = await getAboutData();
  // // console.log("SobreMiPage data:", respond);

  return (
    <FadeInit>
      <Content_sobreMi datas={respond} />
    </FadeInit>
  );
}
