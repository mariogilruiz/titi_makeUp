export default function Content_sobreMi() {
  return (
    <main className="w-full min-h-screen bg-neutral-100 pt-28 pb-16">
      <section className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light text-black">Sobre mi</h1>
        <div className="w-20 h-2 bg-white my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <article className="space-y-5 text-base leading-7 text-neutral-800">
            <p>
              Soy Nuria Gimenez, maquilladora profesional especializada en
              maquillaje social y de novia en Valencia.
            </p>
            <p>
              Me enfoco en crear looks elegantes, luminosos y naturales,
              adaptados a tus rasgos, estilo y tipo de evento para que te
              sientas tu misma, pero en tu mejor version.
            </p>
            <p>
              Trabajo con asesoramiento personalizado, preparacion previa de la
              piel y tecnicas de larga duracion para que el maquillaje se
              mantenga impecable durante todo el dia.
            </p>
          </article>

          <aside className="bg-white border border-neutral-200 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-black">Mi enfoque</h2>
            <ul className="mt-4 space-y-3 text-neutral-700">
              <li>Atencion cercana y personalizada.</li>
              <li>Maquillaje adaptado a tu piel y estilo.</li>
              <li>Acabados naturales con tecnica profesional.</li>
              <li>Calma, orden y confianza en todo el proceso.</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
