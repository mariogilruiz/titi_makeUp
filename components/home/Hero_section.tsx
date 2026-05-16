import Image from "next/image";
import type { HomeData } from "@/types/content";
import "animate.css";

type HeroSectionProps = {
  datas: HomeData;
};

export default function Hero_section({ datas }: HeroSectionProps) {
  const hero = datas.sections.find((section) => section.key === "hero");

  if (!hero) {
    return null;
  }

  return (
    <section
      className={`Hero_section flex w-full min-h-dvh pt-20 flex-col md:flex-row  bg-gray-200 `}
    >
      <div
        className={`hero_iamge z-10 heroImage animate__animated animate__slideInLeft animate__fast relative min-h-[50dvh] w-full  lg:w-3/5 overflow-hidden`}
      >
        <Image
          src="/assets/images/home/foto-hero.jpg"
          alt="Maquillaje profesional"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
        />
      </div>
      <div
        className={`Hero_info flex w-full justify-center flex-col px-9  lg:w-2/5`}
      >
        <h1 className="text-4xl  font-light pt-9 md:pt-3 ">{hero?.heading}</h1>
        <div className="w-20 h-2 bg-red-700 my-6 "/>
        {hero.body.map((item, index) => (
          <h2 className="mt-1 text-lg font-mono" key={`${hero?.key}-${index}`}>
            {item}
          </h2>
        ))}
        <div className="flex w-full justify-center p-2 md:mt-20">
          <button className=" bg-black font-mono text-white text-lg md:text-2xl font-medium px-4 py-2 my-4 lg:my-0 rounded shadow uppercase hover:bg-black/60 duration-300 cursor-pointer">
            Consultar disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
}
