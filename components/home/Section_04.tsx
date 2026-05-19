"use client";

import Slider_imageTextGap from "../silders/Slider_imageTextGap";

export default function Section_04() {
  const homeSliderImages = {
    slider_home_01: {
      src: "/api/proxy-image/home/slider_home_01.jpg",
      text: "Prueba de maquillaje a domicilio, para que no tengas que preocuparte de nada y puedas disfrutar del proceso con calma",
    },
    slider_home_02: {
      src: "/api/proxy-image/home/slider_home_02.jpg",
      text: "Haremos estudio de la piel para asesorarte con una rutina de skincare.Todo se diseñateniendo en cuenta el bridal look para que el conjunto sea coherente, elegante y fiel a ti",
    },
    slider_home_03: {
      src: "/api/proxy-image/home/slider_home_03.jpg",
      text: "Realizaremos una pequeña entrevista previa para conocer tus gustos, tu estilo y el tipo de acabado que deseas",
    },
    slider_home_04: {
      src: "/api/proxy-image/home/slider_home_04.jpg",
      text: "Día B: ¡Y por fin llega el día! El día de tu boda crearé un entorno de calma y confianza para que disfrutes de tu momento beauty sin prisas. Te acompañaré hasta el último retoque, asegurándome de que todo quede impecable antes de salir",
    },
    slider_home_05: {
      src: "/api/proxy-image/home/slider_home_05.jpg",
      text: "Maquillaje profesional para invitadas y familiares, para que todas os veáis radiantes y el servicio siga el mismo estilo elegante y cuidado",
    },
  };

  return (
    <section className="w-full mt-10 md:mt-20 bg-black p-10">
      <Slider_imageTextGap dataSlider={homeSliderImages} />
    </section>
  );
}
