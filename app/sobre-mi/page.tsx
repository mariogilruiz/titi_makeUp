import FadeInit from "@/components/effects/Fade_init";
import type { Metadata } from "next";
import Content_sobreMi from "./Content_sobreMi";

export const metadata: Metadata = {
  title: "Sobre Mi | Nuria Makeup",
  description:
    "Conoce a Nuria Gimenez, maquilladora profesional especializada en novias, invitadas y cursos de automaquillaje en Valencia.",
};

export default function SobreMiPage() {
  return (
    <FadeInit>
      <Content_sobreMi />
    </FadeInit>
  );
}
