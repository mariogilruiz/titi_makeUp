// Ejemplo de cómo consumir el endpoint proxy desde el frontend

export async function fetchDataFromApi() {
  try {
    const res = await fetch("/api/proxy");
    if (!res.ok) throw new Error("Error al obtener datos");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
