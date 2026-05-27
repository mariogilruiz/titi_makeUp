import Image from "next/image";
import Link from "next/link";

type CardServicesData = {
  h2?: string;
  services: string[];
  src: string;
};

export default function Card_services_w_full({
  dataCardServices,
  reverse = false,
  contactSource = "home-services",
}: {
  dataCardServices: CardServicesData;
  reverse?: boolean;
  contactSource?: string;
}) {
  return (
    <div
      className={`CARD_SERVICES w-full flex flex-col${reverse ? " md:flex-row-reverse" : " md:flex-row"}`}
    >
      <div className="CARD_SERVICES_IMAGE flex overflow-hidden relative w-full h-74 md:h-[500px] md:w-1/2">
        <Image
          src={dataCardServices.src}
          alt="Maquillaje profesional"
          fill
          className="object-cover"
          sizes="50vw"
          loading="eager"
        />
      </div>
      <div className="CARD_SERVICES_INFO flex flex-col justify-center items-center w-full md:w-1/2 pb-10 md:pb-0">
        <h2 className="uppercase text-2xl font-bold text-center pt-6 md:pt-4 px-2">
          {dataCardServices.h2 || "Servicios Novia"}
        </h2>

        <div className="p-3">
          {dataCardServices.services.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <p className="font-mono text-start">{service}</p>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <Link
            href={`/contact?from=${encodeURIComponent(contactSource)}`}
            className=" bg-black font-mono text-white text-lg md:text-2xl font-medium px-4 py-2 my-4  lg:my-0 rounded shadow uppercase hover:bg-black/60 duration-300 cursor-pointer"
          >
            Más información
          </Link>
        </div>
      </div>
    </div>
  );
}
