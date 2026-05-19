import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white">
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
          <p>Email: hola@nuriamakeup.com</p>
          <p>
            WhatsApp:
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white ps-2"
            >
              Escribeme por WhatsApp
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

        <p className="text-xs text-gray-400 pt-5 text-center">
          © {currentYear} Nuria Makeup. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
