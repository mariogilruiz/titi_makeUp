import FadeInit from "@/components/effects/Fade_init";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookies | Nuria Makeup",
  description:
    "Informacion sobre el uso de cookies en el sitio web de Nuria Makeup.",
};

export default function PoliticaCookiesPage() {
  return (
    <FadeInit>
      <main className="w-full min-h-screen bg-neutral-100 pt-28 pb-16">
        <section className="max-w-4xl mx-auto px-6 space-y-6 text-neutral-800">
          <h1 className="text-4xl font-light text-black">
            Politica de Cookies
          </h1>
          <p className="text-sm text-neutral-600">
            Ultima actualizacion: 16/05/2026
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">
              1. Que son las cookies
            </h2>
            <p>
              Las cookies son pequenos archivos que se almacenan en tu
              dispositivo cuando visitas una pagina web y permiten reconocer tu
              navegador.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">
              2. Tipos de cookies utilizadas
            </h2>
            <p>
              Este sitio puede utilizar cookies tecnicas necesarias para el
              funcionamiento de la web y, en su caso, cookies de analitica y
              personalizacion previa obtencion del consentimiento
              correspondiente.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">
              3. Gestion de cookies
            </h2>
            <p>
              Puedes configurar o rechazar el uso de cookies desde tu navegador.
              Ten en cuenta que deshabilitar ciertas cookies puede afectar al
              funcionamiento del sitio.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-black">
              4. Mas informacion
            </h2>
            <p>
              Para cualquier consulta sobre esta politica, puedes escribir a
              hola@nuriamakeup.com.
            </p>
          </div>
        </section>
      </main>
    </FadeInit>
  );
}
