"use client";

import Form_contact from "@/components/forms/Form_contact";
import Image from "next/image";

export default function Content_contact() {
  return (
    <main className="relative min-h-dvh pt-28 pb-16 px-4 bg-gray-100 flex items-center justify-center overflow-hidden">
      <Image
        src="/api/proxy-image/contact/foto-contact-bg.jpg"
        alt="Fondo contacto Nuria Makeup"
        fill
        className="absolute inset-0 object-cover z-0 grayscale opacity-50 pointer-events-none select-none"
        priority
        sizes="100vw"
      />
      <Form_contact />
    </main>
  );
}
