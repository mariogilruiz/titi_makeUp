"use client";
import { SubmitEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const sourceLabels: Record<string, string> = {
  hero: "botón principal de inicio",
  novias: "sección novias",
  invitadas: "sección invitadas",
  cursos: "sección cursos",
  menu: "menú principal",
  "menu-mobile": "menú móvil",
};

const sourceMessages: Record<string, string> = {
  hero: "Hola Nuria, he visto tu sección principal y quiero consultar disponibilidad para mi fecha.",
  novias:
    "Hola Nuria, estoy interesada en tu servicio de maquillaje para novias y quiero consultar disponibilidad.",
  invitadas:
    "Hola Nuria, me interesa el servicio de maquillaje para invitadas y me gustaría recibir información.",
  cursos:
    "Hola Nuria, me interesan tus cursos de automaquillaje y quiero más información.",
  menu: "Hola Nuria, te escribo desde la página de contacto para pedir información.",
  "menu-mobile":
    "Hola Nuria, te contacto desde el menú móvil y quiero recibir información.",
  default: "Me gustaría recibir información sobre tus servicios.",
};

const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "http://localhost:4000/contact";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "605426375";

function normalizeSource(from: string | string[] | undefined): string {
  if (Array.isArray(from)) {
    return from[0] ?? "default";
  }

  return from ?? "default";
}

type SubmitState = "idle" | "loading" | "success" | "error";
type Channel = "email" | "whatsapp";

export default function Form_contact() {
  const searchParams = useSearchParams();
  const sourceKey = normalizeSource(searchParams.get("from") ?? undefined);
  const sourceLabel = useMemo(
    () => sourceLabels[sourceKey] ?? "acceso directo",
    [sourceKey],
  );
  const baseMessage = useMemo(
    () => sourceMessages[sourceKey] ?? sourceMessages.default,
    [sourceKey],
  );

  const [channel, setChannel] = useState<Channel | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(baseMessage);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");
  const [waTouched, setWaTouched] = useState(false);

  const whatsappHref = useMemo(() => {
    const normalizedName = name.trim();
    const normalizedMessage = message.trim();

    const textLines = [
      "Hola Nuria, te escribo desde la web.",
      normalizedName ? `Nombre: ${normalizedName}` : "",
      "",
      normalizedMessage,
      "",
      `[meta] source=${sourceKey} (${sourceLabel})`,
    ];

    const whatsappText = textLines.filter(Boolean).join("\n");
    const cleanedNumber = WHATSAPP_NUMBER.replace(/\D/g, "");

    return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(whatsappText)}`;
  }, [message, name, sourceKey, sourceLabel]);

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    const normalizedPhone = phone.trim();
    const normalizedMessage = message.trim();

    if (normalizedName.length < 2) {
      setStatus("error");
      setFeedback("El nombre debe tener al menos 2 caracteres.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setStatus("error");
      setFeedback("Introduce un email válido.");
      return;
    }

    if (normalizedMessage.length < 10) {
      setStatus("error");
      setFeedback("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const messageWithMeta = `${normalizedMessage}\n\n[meta] source=${sourceKey} (${sourceLabel})`;

      const payload: {
        name: string;
        email: string;
        message: string;
        phone?: string;
      } = {
        name: normalizedName,
        email: normalizedEmail,
        message: messageWithMeta,
      };

      if (normalizedPhone) {
        payload.phone = normalizedPhone;
      }

      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      console.log("Respuesta del servidor:", data);

      if (!res.ok) {
        const errorMessage =
          (typeof data?.message === "string" && data.message) ||
          "No se pudo enviar el formulario. Intentalo de nuevo.";
        throw new Error(errorMessage);
      }

      setStatus("success");
      setFeedback(
        "Mensaje enviado por email correctamente. Te respondere pronto.",
      );
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Hubo un error al enviar el formulario.",
      );
    }
  };

  const isNameValid = name.trim().length >= 2;
  return (
    <section className="relative z-10 max-w-3xl mx-auto bg-white rounded-lg shadow p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-light mb-3">Contacto</h1>
      <p className="text-sm md:text-base text-gray-700 mb-6 font-mono">
        Elige como quieres contactar y completa un formulario rapido.
      </p>

      {!channel ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => {
              setChannel("email");
              setStatus("idle");
              setFeedback("");
            }}
            className="inline-flex justify-center items-center bg-blue-600 text-white px-5 py-4 rounded font-mono font-bold uppercase text-sm hover:bg-blue-700 transition-colors"
          >
            Quiero enviar Email
          </button>
          <button
            type="button"
            onClick={() => {
              setChannel("whatsapp");
              setStatus("idle");
              setFeedback("");
            }}
            className="inline-flex justify-center items-center bg-[#1f9d52] text-white px-5 py-4 rounded font-mono font-bold uppercase text-sm hover:bg-[#198347] transition-colors"
          >
            Quiero enviar WhatsApp
          </button>
        </div>
      ) : null}

      {channel ? (
        <form className="mt-6 space-y-4  font-mono" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-gray-700">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              minLength={2}
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={`w-full rounded px-3 py-2 outline-none focus:border-black border ${channel === "whatsapp" && waTouched && !isNameValid ? "border-green-500" : "border-gray-300"}`}
            />
            {channel === "whatsapp" && waTouched && !isNameValid ? (
              <p className="text-xs text-red-700 mt-1">
                El nombre es obligatorio para poder dirigirme a ti por WhatsApp.
              </p>
            ) : null}
          </div>

          {channel === "email" && (
            <>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-1 text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-black"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm mb-1 text-gray-700"
                >
                  Teléfono (opcional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-black"
                />
              </div>
            </>
          )}

          <div>
            <label
              htmlFor="message"
              className="block text-sm mb-1 text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              minLength={10}
              required
              rows={7}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-black"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {channel === "email" ? (
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex bg-blue-600 text-white px-5 py-3 rounded font-mono font-bold uppercase text-sm hover:bg-blue-700 transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar Email"}
              </button>
            ) : (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#1f9d52] text-white px-5 py-3 rounded font-mono font-bold uppercase text-sm hover:bg-[#198347] cursor-pointer transition-colors"
                onClick={(e) => {
                  setWaTouched(true);
                  if (!isNameValid) {
                    e.preventDefault();
                    setFeedback(
                      "Por favor, indica tu nombre para poder dirigirme a ti por WhatsApp.",
                    );
                  }
                }}
              >
                Continuar a WhatsApp
              </a>
            )}

            <button
              type="button"
              onClick={() => {
                setChannel(null);
                setStatus("idle");
                setFeedback("");
              }}
              className="inline-flex bg-gray-300 text-gray-800 px-5 py-3 rounded font-mono font-bold uppercase text-sm hover:bg-gray-400 transition-colors"
            >
              Cambiar opcion
            </button>
          </div>
        </form>
      ) : null}
    </section>
  );
}
