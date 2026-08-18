import Image from "next/image";

type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/api/proxy-image/home/slider_home_01.jpg",
    alt: "Maquillaje profesional para novia",
    width: 980,
    height: 1560,
  },
  {
    src: "/api/proxy-image/home/slider_home_02.jpg",
    alt: "Look elegante para invitada",
    width: 1680,
    height: 990,
  },
  {
    src: "/api/proxy-image/home/slider_home_03.jpg",
    alt: "Detalle de maquillaje natural",
    width: 920,
    height: 1710,
  },
  {
    src: "/api/proxy-image/home/slider_home_04.jpg",
    alt: "Preparacion de novia",
    width: 1750,
    height: 1120,
  },
  {
    src: "/api/proxy-image/home/slider_home_05.jpg",
    alt: "Maquillaje para madrina",
    width: 1260,
    height: 1260,
  },
  {
    src: "/api/proxy-image/home/slider_home_06.jpg",
    alt: "Servicio de maquillaje para eventos",
    width: 1040,
    height: 1460,
  },
  {
    src: "/api/proxy-image/home/slider_home_07.jpg",
    alt: "Maquillaje social de larga duracion",
    width: 860,
    height: 1820,
  },
  {
    src: "/api/proxy-image/home/slider_home_08.jpg",
    alt: "Acabado sofisticado para boda",
    width: 1820,
    height: 1210,
  },
  {
    src: "/api/proxy-image/home/slider_home_09.jpg",
    alt: "Resultado final de maquillaje profesional",
    width: 1450,
    height: 960,
  },
  {
    src: "/api/proxy-image/home/slider_home_01.jpg",
    alt: "Maquillaje de novia con acabado luminoso",
    width: 1110,
    height: 1780,
  },
  {
    src: "/api/proxy-image/home/slider_home_02.jpg",
    alt: "Maquillaje elegante para evento",
    width: 1540,
    height: 1020,
  },
  {
    src: "/api/proxy-image/home/slider_home_03.jpg",
    alt: "Detalle beauty de piel natural",
    width: 980,
    height: 1490,
  },
  {
    src: "/api/proxy-image/home/slider_home_04.jpg",
    alt: "Look sofisticado de novia",
    width: 1620,
    height: 1180,
  },
  {
    src: "/api/proxy-image/home/slider_home_05.jpg",
    alt: "Maquillaje social para celebracion",
    width: 1180,
    height: 1340,
  },
  {
    src: "/api/proxy-image/home/slider_home_06.jpg",
    alt: "Sesion de maquillaje profesional",
    width: 1320,
    height: 920,
  },
  {
    src: "/api/proxy-image/home/slider_home_07.jpg",
    alt: "Maquillaje de larga duracion para boda",
    width: 930,
    height: 1660,
  },
  {
    src: "/api/proxy-image/home/slider_home_08.jpg",
    alt: "Acabado editorial para invitada",
    width: 1700,
    height: 1280,
  },
  {
    src: "/api/proxy-image/home/slider_home_09.jpg",
    alt: "Retrato final de maquillaje profesional",
    width: 1240,
    height: 1740,
  },
  {
    src: "/api/proxy-image/home/slider_home_03.jpg",
    alt: "Primer plano de maquillaje suave",
    width: 1360,
    height: 1080,
  },
  {
    src: "/api/proxy-image/home/slider_home_06.jpg",
    alt: "Maquillaje para evento de noche",
    width: 1010,
    height: 1590,
  },
  {
    src: "/api/proxy-image/home/slider_home_01.jpg",
    alt: "Look final para sesion de fotos",
    width: 1580,
    height: 1140,
  },
];

export default function Content_galeria() {
  return (
    <section className="w-full min-h-screen px-4 py-20 sm:px-6 md:px-10 lg:px-14 ">
      <div className="w-full flex justify-center container mx-auto px-4 text-center pb-10 pt-5">
        <h1 className="text-2xl sm:text-3xl font-light uppercase">
          Galería de maquillaje profesional
        </h1>
      </div>
      <div className="mx-auto w-full max-w-7xl columns-1 gap-4 sm:columns-2 md:gap-5 lg:columns-3 xl:columns-4">
        {galleryPhotos.map((photo, index) => (
          <figure
            key={`${photo.src}-${index}`}
            className="mb-4 break-inside-avoid overflow-hidden bg-neutral-100"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              priority={index < 3}
              className="h-auto w-full object-cover"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
