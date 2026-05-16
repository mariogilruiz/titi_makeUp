import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 bg-black shadow">
      <nav className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-logo text-3xl md:text-4xl text-white uppercase"
        >
          Nuria Jiménez<span className="text-red-700">.</span>
        </Link>

        <ul className="flex items-center gap-6 text-sm md:text-base text-white uppercase">
          <li className="relative group py-2">
            <button type="button" className="cursor-pointer">
              Servicios
            </button>
            <div className="absolute right-0 top-full mt-1 min-w-52 bg-black/95 border border-white/20 opacity-0 invisible transition-opacity duration-150 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
              <Link
                href="/#NOVIAS"
                className="block px-4 py-2 hover:bg-white/10"
              >
                Novias
              </Link>
              <Link
                href="/#INVITADAS"
                className="block px-4 py-2 hover:bg-white/10"
              >
                Invitadas
              </Link>
              <Link
                href="/#CURSOS"
                className="block px-4 py-2 hover:bg-white/10"
              >
                Cursos
              </Link>
            </div>
          </li>
          <li>
            <Link href="/sobre-mi" className="hover:text-gray-300">
              Sobre mi
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
