export const metadata = {
  title: "Nuria Makeup | Maquilladora profesional en Valencia",
  description:
    "Maquilladora profesional en Valencia especializada en novias, invitadas y cursos de automaquillaje. Descubre los servicios de Nuria Giménez y reserva tu cita.",
  keywords: [
    "maquilladora Valencia",
    "Nuria Giménez",
    "maquillaje profesional",
    "novias",
    "invitadas",
    "cursos automaquillaje",
  ],
  openGraph: {
    title: "Nuria Makeup | Maquilladora profesional en Valencia",
    description:
      "Maquilladora profesional en Valencia especializada en novias, invitadas y cursos de automaquillaje. Descubre los servicios de Nuria Giménez y reserva tu cita.",
    url: "https://www.nuriajimenezmakeup.es/",
    siteName: "Nuria Makeup",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "/",
  },
};
import FadeInit from "@/components/effects/Fade_init";
import Content_AOS from "@/components/home/Content_AOS";
import Hero_section from "@/components/home/Hero_section";
import Section_02 from "@/components/home/Section_02";

import { getPageData } from "@/lib/api/datas";

export default async function Home() {
  const respond = await getPageData("home");

  return (
    <FadeInit>
      <main className="overflow-hidden">
        <Hero_section datas={respond} />
        <Section_02 datas={respond} />
        <Content_AOS datas={respond} />
      </main>
    </FadeInit>
  );
}
