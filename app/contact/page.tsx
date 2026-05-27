import FadeInit from "@/components/effects/Fade_init";
import Content_contact from "./Content_contact";

export const metadata = {
  title: "Contacto | Nuria Makeup",
  description:
    "Contacta con Nuria Giménez, maquilladora profesional en Valencia. Solicita información para novias, invitadas o cursos de automaquillaje.",
  keywords: [
    "contacto",
    "maquilladora Valencia",
    "Nuria Giménez",
    "maquillaje profesional",
    "novias",
    "invitadas",
    "cursos automaquillaje",
  ],
  openGraph: {
    title: "Contacto | Nuria Makeup",
    description:
      "Contacta con Nuria Giménez, maquilladora profesional en Valencia. Solicita información para novias, invitadas o cursos de automaquillaje.",
    url: "https://www.nuriajimenezmakeup.es/contact",
    siteName: "Nuria Makeup",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <FadeInit>
      <Content_contact />
    </FadeInit>
  );
}
