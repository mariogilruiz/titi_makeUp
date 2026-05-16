"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section_03 from "./Section_03";
import Section_04 from "./Section_04";
import Section_05 from "./Section_05";

export default function Content_AOS() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      offset: 100, // Distancia desde el viewport en la que comienza la animación
      easing: "ease-in-out", // Tipo de transición
      once: true, // Si se ejecuta solo una vez o en cada scroll
    });
  }, []);
  return (
    <>
      <Section_03 />
      <Section_04 />
      <Section_05 />
    </>
  );
}
