"use client";

import Image from "next/image";

export default function Section_03() {
  const dataCardServices = [
    "Asesoramiento y atención personalizada",
    " Entrevista previa y prueba de novia (Opcional)",
    "Estudio de la piel y rutina skincare",
    "Maquillaje profesional del día de la Boda",
    "Pestañas postizas",
    "Servicio a domicilio (Casa, hotel, masia)",
  ];
  return (
    <div className="" data-aos="fade-right">
      <div className="w-full flex justify-center container mx-auto px-4 text-center pt-28 ">
        <h2 className="text-4xl font-light">
          Si el día de tu boda quieres un maquillaje profesional que te haga
          sentir <strong>elegante, luminosa y natural</strong>, sigue leyendo:
          esto te interesa.
        </h2>
      </div>
      <div className=" w-full flex justify-center p-4 pt-10">
        <div className="CARD_SERVICES w-[900] flex flex-col md:flex-row bg-gray-200">
          <div className="w-full md:w-1/2 flex overflow-hidden relative h-[400] md:order-2">
            <Image
              src="/assets/images/home/foto-section_03_services.jpg"
              alt="Maquillaje profesional"
              fill
              className="object-cover"
              sizes="50vw"
              loading="eager"
            />
          </div>
          <div
            id="NOVIAS"
            className="scroll-mt-24 w-full md:w-1/2 flex flex-col justify-center items-center md:order-1"
          >
            <h3 className="uppercase text-2xl font-bold text-center pt-10 md:pt-4 px-2">
              Servicios Novia
            </h3>
            <div className="flex justify-start w-full">
              <div className="w-20 h-2 bg-red-700 my-6 " />
            </div>

            <div className="p-3">
              {dataCardServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <p className="font-mono text-start">{service}</p>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <button className=" bg-black font-mono text-white text-lg md:text-2xl font-medium px-4 py-2 my-4 lg:my-0 rounded shadow uppercase hover:bg-black/60 duration-300 cursor-pointer">
                Contacar con nuria
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
