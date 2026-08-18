"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section_03 from "./Section_03";
import Section_04 from "./Section_04";
import Section_05 from "./Section_05";
import { HomeData } from "@/types/content";
import Section_06 from "./Section_06";
import Button_basic from "../buttons/Button_basic";

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
  const section06 = datas.sections.find((s) => s.key === "section_06");

  return (
    <>
      <div id="NOVIAS" className="bg-gray-200">
        {section03 && (
          <Section_03 data={section03} border="border" effect="fade-left" />
        )}
      </div>

      {section04 && (
        <Section_04 data={section04} border="underline" effect="fade-right" />
      )}
      <div className="flex w-full justify-center p-2  mb-10">
        <Button_basic />
      </div>

      <div id="INVITADAS" className="bg-gray-200">
        {section05 && (
          <Section_05 data={section05} border="border" effect="fade-left" />
        )}
      </div>

      {section06 && (
        <Section_06 data={section06} border="underline" effect="fade-right" />
      )}
    </>
  );
}
