"use client";

import { HomeSection } from "@/types/content";
import Slider_imageTextGap from "../silders/Slider_imageTextGap";

type SectionProps = {
  data: HomeSection;
};

export default function Section_04({ data }: SectionProps) {
  // // console.log("hola soy data de section04", data);

  return (
    <section className="w-full mt-10 md:mt-20 bg-black p-10">
      <Slider_imageTextGap dataSlider={data.cards || []} />
    </section>
  );
}
