"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 bg-black shadow">
      <nav className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-logo text-3xl md:text-4xl text-white uppercase"
          onClick={closeMenu}
        >
          Nuria Jiménez<span className="text-white">.</span>
        </Link>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base text-white uppercase font-mono">
          {pathname !== "/" && (
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
          )}
          <li className="relative group py-2">
            <button
              type="button"
              className="cursor-pointer uppercase hover:text-gray-300"
            >
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
            <Link href="/contact?from=menu" className="hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>

        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-black border-t border-white/10 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <ul className="px-4 py-4 text-white uppercase font-mono text-sm space-y-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="pb-2 border-b border-white/10 ">
              <p className="mb-2 ">Servicios</p>
              <div className="pl-3 flex flex-col gap-2 text-white/80">
                <Link href="/#NOVIAS" onClick={closeMenu}>
                  Novias
                </Link>
                <Link href="/#INVITADAS" onClick={closeMenu}>
                  Invitadas
                </Link>
                <Link href="/#CURSOS" onClick={closeMenu}>
                  Cursos
                </Link>
              </div>
            </li>
            <li>
              <Link href="/sobre-mi" onClick={closeMenu}>
                Sobre mi
              </Link>
            </li>
            <li>
              <Link href="/contact?from=menu-mobile" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
