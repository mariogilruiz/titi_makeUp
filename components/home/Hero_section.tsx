import Image from "next/image";
import type { HomeData } from "@/types/content";
import "animate.css";
import Link from "next/link";

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
        <img
          src="/api/proxy-image/home/foto-hero.jpg"
          alt="Maquillaje profesional"
          className="object-cover object-top w-full h-full absolute inset-0"
          loading="eager"
        />
      </div>
      <div
        className={`Hero_info flex w-full justify-center flex-col  lg:w-2/5`}
      >
        <div className="px-9 ">
          <h1 className="text-4xl  font-light pt-9 md:pt-3 pb-5 ">
            {hero?.heading}
          </h1>
          {/* <div className="w-20 h-2 bg-white my-6 " /> */}
          {hero.body?.map((item, index) => (
            <h2
              className="mt-1 text-lg font-mono"
              key={`${hero?.key}-${index}`}
            >
              {item}
            </h2>
          ))}
        </div>
        <div className="flex w-full justify-center p-2 md:mt-20">
          <Link
            href="/contact?from=hero"
            className=" bg-black font-mono text-white text-lg md:text-2xl font-medium px-4 py-2 my-4 lg:my-0 rounded shadow uppercase hover:bg-black/60 duration-300 cursor-pointer"
          >
            Consultar disponibilidad
          </Link>
        </div>
      </div>
    </section>
  );
}
