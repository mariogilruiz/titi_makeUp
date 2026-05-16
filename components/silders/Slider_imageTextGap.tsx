"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

type SliderImage = {
  src: string;
  alt: string;
  text?: string;
};

type SliderImageGapProps = {
  dataSlider: Record<string, SliderImage>;
};

export default function Slider_imageTextGap({
  dataSlider,
}: SliderImageGapProps) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 16 },
          768: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        speed={1000}
        modules={[Navigation, Autoplay]}
        className="mySwiper pb-10"
      >
        {Object.values(dataSlider).map((image) => (
          <SwiperSlide key={image.src}>
            <div className="relative h-115 overflow-hidden  md:h-130 lg:h-140">
              <Image
                src={image.src}
                alt={image.alt + " - " + (image.text || "")}
                fill
                loading="eager"
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
              />
              {image.text && (
                <div className="absolute bottom-0 w-50 lg:w-70 xl:w-90 bg-white p-3 m-3">
                  <p className="font-mono  text-center text-xs md:text-sm lg:text-base">
                    {image.text}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
