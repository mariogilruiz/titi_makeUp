import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ section: string; imageName: string }> }
) {
  const apiBaseUrl = process.env.API_BASE_URL;
  if (!apiBaseUrl) {
    return new NextResponse("API_BASE_URL not configured", { status: 500 });
  }

  const { section, imageName } = await context.params;
  console.log("[PROXY-IMG] section:", section, "imageName:", imageName);
  if (!section || !imageName) {
    console.error("[PROXY-IMG] Missing section or imageName");
    return new NextResponse("Missing section or imageName", { status: 400 });
  }

  const imageUrl = `${apiBaseUrl}images/${section}/${imageName}`;
  console.log("[PROXY-IMG] imageUrl:", imageUrl);

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      console.error("[PROXY-IMG] Image not found:", imageUrl);
      return new NextResponse("Image not found", { status: 404 });
    }
    const contentType = response.headers.get("content-type") || "image/jpeg";
    const buffer = await response.arrayBuffer();
    console.log("[PROXY-IMG] Image fetched, content-type:", contentType);
    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    console.error("[PROXY-IMG] Error:", error);
    return new NextResponse("Error fetching image", { status: 500 });
  }
}
