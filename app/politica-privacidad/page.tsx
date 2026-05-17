import FadeInit from "@/components/effects/Fade_init";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidad | Nuria Makeup",
  description:
    "Informacion sobre el tratamiento de datos personales en Nuria Makeup.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <FadeInit>
      <main className="w-full min-h-screen bg-neutral-100 pt-28 pb-16">
        <section className="max-w-4xl mx-auto px-6 space-y-6 text-neutral-800">
          <h1 className="text-4xl font-light text-black">
            Politica de Privacidad
          </h1>
          <p className="text-sm text-neutral-600">
            Ultima actualizacion: 16/05/2026
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">
              1. Responsable del tratamiento
            </h2>
            <p>Responsable: Nuria Makeup.</p>
            <p>Email de contacto: hola@nuriamakeup.com</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">
              2. Finalidad de los datos
            </h2>
            <p>
              Los datos facilitados por los usuarios se utilizan para atender
              solicitudes, gestionar citas, responder consultas y mantener la
              comunicacion comercial cuando exista consentimiento.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">
              3. Base juridica
            </h2>
            <p>
              La base legal para el tratamiento es el consentimiento del
              interesado, la ejecucion de una relacion precontractual o
              contractual y el cumplimiento de obligaciones legales aplicables.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">
              4. Conservacion de datos
            </h2>
            <p>
              Los datos se conservaran durante el tiempo necesario para cumplir
              con la finalidad para la que fueron recabados y, en su caso,
              durante los plazos legalmente exigidos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">
              5. Derechos del usuario
            </h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificacion, supresion,
              oposicion, limitacion y portabilidad enviando una solicitud al
              email indicado en esta politica.
            </p>
          </div>
        </section>
      </main>
    </FadeInit>
  );
}
