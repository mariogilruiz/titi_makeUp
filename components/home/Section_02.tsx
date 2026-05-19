import { HomeData } from "@/types/content";
import Slider_imageGap from "../silders/Slider_imageGap";

type Section_02Props = {
  datas: HomeData;
};

export default function Section_02({ datas }: Section_02Props) {
  const sectionData = datas.sections.find(
    (section) => section.key === "section_02",
  );

  const homeSliderImages = {
    slider_home_01: {
      src: "/api/proxy-image/home/slider_home_01.jpg",
      alt: "Maquillaje de novia natural realizado por Nuria Gimenez, maquilladora profesional en Valencia",
    },
    slider_home_02: {
      src: "/api/proxy-image/home/slider_home_02.jpg",
      alt: "Look de maquillaje elegante para invitada de boda por Nuria Gimenez en la zona de Valencia",
    },
    slider_home_03: {
      src: "/api/proxy-image/home/slider_home_03.jpg",
      alt: "Maquillaje profesional para eventos especiales en Valencia con mas de 20 anos de experiencia",
    },
    slider_home_04: {
      src: "/api/proxy-image/home/slider_home_04.jpg",
      alt: "Preparacion de novia con acabado luminoso por Nuria Gimenez, especialista en bodas en Valencia",
    },
    slider_home_05: {
      src: "/api/proxy-image/home/slider_home_05.jpg",
      alt: "Maquillaje para madrina e invitadas de boda por maquilladora profesional Nuria Gimenez",
    },
    slider_home_06: {
      src: "/api/proxy-image/home/slider_home_06.jpg",
      alt: "Servicio de maquillaje a domicilio para bodas y eventos en Valencia por Nuria Gimenez",
    },
    slider_home_07: {
      src: "/api/proxy-image/home/slider_home_07.jpg",
      alt: "Maquillaje social de larga duracion para celebraciones en Valencia con Nuria Gimenez",
    },
    slider_home_08: {
      src: "/api/proxy-image/home/slider_home_08.jpg",
      alt: "Detalle de maquillaje de boda sofisticado por Nuria Gimenez, mas de 20 anos en el sector",
    },
    slider_home_09: {
      src: "/api/proxy-image/home/slider_home_09.jpg",
      alt: "Resultado final de maquillaje profesional para novia y eventos en la zona de Valencia",
    },
  };

  // console.log("hlaaa", sectionData);
  return (
    <section className="w-full flex flex-col justify-center items-center pt-20">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center p-4">
          <span className="text-2xl border-4 p-2 rounded-lg">soy logo</span>
        </div>
        <div className="w-full flex justify-center container mx-auto px-4 text-center pb-28 pt-5">
          <h2
            className="text-4xl font-light"
            dangerouslySetInnerHTML={{ __html: sectionData?.heading ?? "" }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center  p-3">
        <Slider_imageGap dataSlider={homeSliderImages} />
      </div>
    </section>
  );
}
