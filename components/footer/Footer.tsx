import { getPersonalData } from "@/lib/api/datas";
import { Personal } from "@/types/content";
import Link from "next/link";

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const respond: Personal = await getPersonalData();

  // // console.log("Footer personal data:", respond);

  const { Email, Teléfono, WhatsApp } = respond.data || {};

  return (
    <footer className="w-full bg-black text-white">
      <div className="py-2 md:py-5" />
      <div className="h-full max-w-6xl mx-auto px-6 py-6 flex flex-col justify-between">
        <div>
          <p className="text-xl font-semibold font-logo uppercase">
            Nuria Jiménez Makeup
          </p>
          <div className="flex justify-start w-full py-2">
            <div className="w-40 h-0.5 bg-white " />
          </div>
          <p className="text-sm text-gray-300 mt-1">
            Maquillaje profesional para bodas y eventos en Valencia.
          </p>
        </div>

        <div className="text-sm text-gray-300 leading-6 ">
          <p>Email: {Email}</p>
          <div className="pt-1">
            Teléfono:
            <a
              href={Teléfono ? `tel:${Teléfono}` : undefined}
              className="underline hover:text-white ps-2"
            >
              {Teléfono ? `Llamar ${Teléfono}` : "No disponible"}
            </a>
          </div>
          <p>
            WhatsApp:
            <a
              href={
                WhatsApp
                  ? `https://wa.me/${WhatsApp.replace(/\D/g, "")}`
                  : undefined
              }
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white ps-2"
            >
              {WhatsApp ? "Escribeme por WhatsApp" : "No disponible"}
            </a>
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-xs">
            <Link href="/aviso-legal" className="underline hover:text-white">
              Aviso legal
            </Link>
            <Link
              href="/politica-privacidad"
              className="underline hover:text-white"
            >
              Politica de privacidad
            </Link>
            <Link
              href="/politica-cookies"
              className="underline hover:text-white"
            >
              Politica de cookies
            </Link>
          </div>
        </div>
        <div className="py-2 md:py-5" />
        <p className="text-xs text-gray-400 pt-5 text-center">
          © {currentYear} Nuria Makeup. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
