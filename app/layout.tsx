import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Serif_Display,
  Inter,
  Newsreader,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const primaryFont = Cormorant_Garamond({
  variable: "--font-primary",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const secondaryFont = Inter({
  variable: "--font-secondary",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const logoFont = DM_Serif_Display({
  variable: "--font-logo",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuria Makeup | Maquilladora para Bodas y Eventos en Valencia",
  description:
    "Maquilladora profesional en Valencia para bodas y eventos. Maquillaje de novia e invitadas a domicilio. Reserva tu fecha y pide presupuesto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning={true}
      lang="es"
      className={`${primaryFont.variable} ${secondaryFont.variable} ${logoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
