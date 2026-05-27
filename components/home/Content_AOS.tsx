"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section_03 from "./Section_03";
import Section_04 from "./Section_04";
import Section_05 from "./Section_05";
import { HomeData } from "@/types/content";

type ContentAOSProps = {
  datas: HomeData;
};

export default function Content_AOS({ datas }: ContentAOSProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Ejemplo: obtener la sección 03
  const section03 = datas.sections.find((s) => s.key === "section_03");
  const section04 = datas.sections.find((s) => s.key === "section_04");
  const section05 = datas.sections.find((s) => s.key === "section_05");

  return (
    <>
      {section03 && <Section_03 data={section03} />}
      {section04 && <Section_04 data={section04} />}
      {section05 && <Section_05 data={section05} />}
    </>
  );
}
