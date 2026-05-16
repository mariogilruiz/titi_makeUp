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
};

type SliderImageGapProps = {
  dataSlider: Record<string, SliderImage>;
};

export default function Slider_imageGap({ dataSlider }: SliderImageGapProps) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1.15}
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
          delay: 1000,
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
                alt={image.alt}
                fill
                loading="eager"
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
