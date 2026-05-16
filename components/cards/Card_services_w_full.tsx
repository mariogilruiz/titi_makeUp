import Image from "next/image";

type CardServicesData = {
  h2?: string;
  text: string[];
};

export default function Card_services_w_full({
  dataCardServices,
  reverse = false,
}: {
  dataCardServices: CardServicesData;
  reverse?: boolean;
}) {
  return (
    <div
      className={`CARD_SERVICES w-full flex ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="CARD_SERVICES_IMAGE flex overflow-hidden relative h-[500] w-1/2">
        <Image
          src="/assets/images/home/foto-section_03_services.jpg"
          alt="Maquillaje profesional"
          fill
          className="object-cover"
          sizes="50vw"
          loading="eager"
        />
      </div>
      <div className="CARD_SERVICES_INFO flex flex-col justify-center items-center w-1/2">
        <h2 className="uppercase text-2xl font-bold text-center pt-10 md:pt-4 px-2">
          {dataCardServices.h2 || "Servicios Novia"}
        </h2>

        <div className="p-3">
          {dataCardServices.text.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <p className="font-mono text-start">{service}</p>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <button className=" bg-black font-mono text-white text-lg md:text-2xl font-medium px-4 py-2 my-4 lg:my-0 rounded shadow uppercase hover:bg-black/60 duration-300 cursor-pointer">
            Más información
          </button>
        </div>
      </div>
    </div>
  );
}
