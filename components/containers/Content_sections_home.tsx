import { HomeSection } from "@/types/content";
import Image from "next/image";
import Card_info from "../cards/Card_info";

type SectionProps = {
  data: HomeSection;
  buttonStyle?: "border" | "underline";
  effect?: "fade-right" | "fade-left" | "fade-up" | "fade-down" | "fade-in";
};

export default function Content_sections_home({
  data,
  buttonStyle = "border",
  effect = "fade-right",
}: SectionProps) {
  const cards = data?.cards ?? [];
  const sectionImage = data.image ?? data.src;

  const imageCard = sectionImage ? (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-sm">
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={sectionImage}
            alt={data.heading ?? "Imagen de la sección"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <section
      className="w-full py-10 md:py-16"
      data-aos={effect ?? "fade-right"}
    >
      {data.heading && (
        <h2 className="px-6 md:px-10 mb-8 text-center text-xl font-light uppercase tracking-[0.08em] text-black">
          {data.heading}
        </h2>
      )}

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {data.image_position === "start" && imageCard}

          {cards.map((card, index) => (
            <div
              key={`${card.heading ?? "card"}-${index}`}
              className="flex w-full justify-center"
            >
              <Card_info data={card} buttonStyle={buttonStyle} />
            </div>
          ))}

          {data.image_position === "end" && imageCard}
        </div>
      </div>
    </section>
  );
}
