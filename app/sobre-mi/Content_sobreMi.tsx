import { AboutData } from "@/types/content";
import Image from "next/image";

interface ContentSobreMiProps {
  datas: AboutData;
}

export default function Content_sobreMi({ datas }: ContentSobreMiProps) {
  return (
    <main className="w-full min-h-screen relative">
      <section className=" min-h-screen w-full mx-auto px-6 container flex flex-col items-center text-center py-30">
        <Image
          src="/api/proxy-image/sobre-mi/foto-sobre-mi.jpg"
          alt="Maquilladora profesional Nuria Gimenez"
          fill
          className="absolute inset-0 w-full h-full grayscale opacity-40 object-cover object-center"
          priority
        />
        <h1 className="text-4xl md:text-5xl font-light text-black pb-20">
          {datas.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Imagen sobre mí */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="relative w-full h-96 md:h-128 overflow-hidden">
              <Image
                src="/api/proxy-image/sobre-mi/foto-sobre-mi.jpg"
                alt="Maquilladora profesional Nuria Gimenez"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />
            </div>
          </div>

          {/* Texto sobre mí */}
          <article className="space-y-5 text-base leading-7 text-neutral-800 ">
            {datas.sections.map((paragraph, idx) => (
              <p key={idx} className="font-mono">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
