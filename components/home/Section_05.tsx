"use client";

import Card_services_w_full from "../cards/Card_services_w_full";

export default function Section_05() {
  const dataCardServices_01 = {
    h2: "Servicio de Invitada o social",
    text: [
      "Asesoramiento previo al servicio",
      "Atencion personalizada)",
      "Maquillaje profesional para el día de la boda o evento",
      "Prueba de maquillaje (Opcional)",
      "Pestañas postizas",
      "Servicio a domicilio (Casa, hotel, masia)",
    ],
  };

  const dataCardServices_02 = {
    h2: "cursos de automaquillaje",
    text: [
      "Asesoramiento previo al servicio",
      "Atencion personalizada)",
      "Maquillaje profesional para el día de la boda o evento",
      "Prueba de maquillaje (Opcional)",
      "Pestañas postizas",
      "Servicio a domicilio (Casa, hotel, masia)",
    ],
  };
  return (
    <>
      <div id="INVITADAS" className="scroll-mt-24" data-aos="fade-right">
        <Card_services_w_full dataCardServices={dataCardServices_01} />
      </div>
      <div id="CURSOS" className="scroll-mt-24" data-aos="fade-left">
        <Card_services_w_full
          dataCardServices={dataCardServices_02}
          reverse={true}
        />
      </div>
    </>
  );
}
