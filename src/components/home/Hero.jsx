"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSlider() {
  const slides = [
    {
      title: "Upgrade Your Skills Today 🚀",
      desc: "Learn from Industry Experts",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    {
      title: "Build Real Projects 💻",
      desc: "Practice while you learn",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      title: "Get Job Ready 🎯",
      desc: "Master in-demand skills",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ];

  return (
    <div className="w-full h-[400px] mt-4 rounded-xl overflow-hidden">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black/50 p-6 rounded-xl">
                <h1 className="text-3xl font-bold">
                  {slide.title}
                </h1>
                <p className="mt-2">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}