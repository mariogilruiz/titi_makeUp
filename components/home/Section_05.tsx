"use client";

import { HomeSection } from "@/types/content";
import Card_services_w_full from "../cards/Card_services_w_full";

type SectionProps = {
  data: HomeSection;
};

export default function Section_05({ data }: SectionProps) {
  // // console.log("hola soy data de section05", data);

  const emptyCard = {
    services: [],
    src: "",
    text: "",
    h3: "",
  };

  const dataCardServices_01 = (data.cards || [])[0]
    ? {
        ...(data.cards || [])[0],
        services: (data.cards || [])[0].services || [],
        src: (data.cards || [])[0].src || "",
        text: (data.cards || [])[0].text || "",
        h3: (data.cards || [])[0].h3 || "",
      }
    : emptyCard;

  const dataCardServices_02 = (data.cards || [])[1]
    ? {
        ...(data.cards || [])[1],
        services: (data.cards || [])[1].services || [],
        src: (data.cards || [])[1].src || "",
        text: (data.cards || [])[1].text || "",
        h3: (data.cards || [])[1].h3 || "",
      }
    : emptyCard;
  return (
    <>
      <div id="INVITADAS" className="scroll-mt-24" data-aos="fade-right">
        <Card_services_w_full
          dataCardServices={dataCardServices_01}
          contactSource="invitadas"
        />
      </div>
      <div id="CURSOS" className="scroll-mt-24" data-aos="fade-left">
        <Card_services_w_full
          dataCardServices={dataCardServices_02}
          reverse={true}
          contactSource="cursos"
        />
      </div>
    </>
  );
}
