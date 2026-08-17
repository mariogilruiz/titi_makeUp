type CardInfoData = {
  heading?: string;
  body?: string;
};

type CardInfoProps = {
  data?: CardInfoData;
  title?: string;
  text?: string;
  buttonStyle?: "border" | "underline";
};

export default function Card_info({
  data,
  title,
  text,
  buttonStyle = "border",
}: CardInfoProps) {
  const cardTitle = data?.heading ?? title ?? "Reunión inicial";
  const cardText =
    data?.body ??
    text ??
    "Comenzamos con una primera toma de contacto por teléfono o videollamada para conocernos, resolver dudas y entender tu estilo, tus gustos y todos los detalles de tu boda.";
  const isBorder = buttonStyle === "border";

  return (
    <article className="w-full md:w-70 max-w-sm rounded-sm p-5">
      <div
        className={[
          "flex w-full items-center justify-center bg-transparent px-4 py-3 text-center ",
          isBorder ? "border-2 border-black" : "border-b-2 border-black/80",
        ].join(" ")}
      >
        <h2 className="text-lg uppercase tracking-[0.08em] font-medium text-black">
          {cardTitle}
        </h2>
      </div>

      <p className="mt-4 font-mono text-sm leading-relaxed text-black/80">
        {cardText}
      </p>
    </article>
  );
}
