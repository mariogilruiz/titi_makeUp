"use client";

import { HomeSection } from "@/types/content";
import Content_sections_home from "../containers/Content_sections_home";

type SectionProps = {
  data: HomeSection;
  border?: "border" | "underline";
  effect?: "fade-right" | "fade-left" | "fade-up" | "fade-down" | "fade-in";
};

export default function Section_05({
  data,
  border = "border",
  effect = "fade-up",
}: SectionProps) {
  return (
    <Content_sections_home data={data} buttonStyle={border} effect={effect} />
  );
}
