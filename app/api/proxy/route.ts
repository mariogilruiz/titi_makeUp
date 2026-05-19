// Este endpoint actúa como proxy seguro para ocultar la URL real de la API externa
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // La URL base de la API
  const apiBaseUrl = process.env.API_BASE_URL;
  if (!apiBaseUrl) {
    return NextResponse.json({ error: "API URL not configured" }, { status: 500 });
  }

  // Leer el parámetro slug
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "Missing slug parameter" }, { status: 400 });
  }

  // Construir la URL real
  const apiUrl = `${apiBaseUrl}data/${slug}`;

  try {
    // Log temporal para depuración
    console.log("[PROXY] URL solicitada:", apiUrl);
    const response = await fetch(apiUrl, {
      headers: {
        "x-api-key": process.env.API_SECRET || "",
        "Accept": "application/json"
      }
    });
    const contentType = response.headers.get("content-type") || "application/json";
    const text = await response.text();
    console.log("[PROXY] Respuesta cruda:", text);
    // Intentar parsear como JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      return new NextResponse(text, { status: response.status, headers: { "content-type": contentType } });
    }
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("[PROXY] Error:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
