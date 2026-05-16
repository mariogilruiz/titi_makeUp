import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Nuria Makeup",
  description: "Informacion legal y condiciones de uso del sitio web de Nuria Makeup.",
};

export default function AvisoLegalPage() {
  return (
    <main className="w-full min-h-screen bg-neutral-100 pt-28 pb-16">
      <section className="max-w-4xl mx-auto px-6 space-y-6 text-neutral-800">
        <h1 className="text-4xl font-light text-black">Aviso Legal</h1>
        <p className="text-sm text-neutral-600">Ultima actualizacion: 16/05/2026</p>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-black">1. Titular del sitio web</h2>
          <p>
            En cumplimiento de la normativa vigente, se informa que la titularidad
            de este sitio web corresponde a Nuria Makeup.
          </p>
          <p>
            Email de contacto: hola@nuriamakeup.com
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-black">2. Objeto</h2>
          <p>
            El presente sitio web tiene por objeto ofrecer informacion sobre
            servicios de maquillaje profesional para bodas, eventos y formacion.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-black">3. Propiedad intelectual</h2>
          <p>
            Todos los contenidos del sitio web, incluidos textos, imagenes,
            logotipos y diseno, son propiedad de Nuria Makeup o se utilizan con
            autorizacion, quedando prohibida su reproduccion no autorizada.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-black">4. Responsabilidad</h2>
          <p>
            Nuria Makeup no se responsabiliza de los danos derivados del uso del
            sitio web ni de posibles interrupciones del servicio por causas tecnicas.
          </p>
        </div>
      </section>
    </main>
  );
}