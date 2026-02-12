"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
    {
        id: 1,
        image: "/images/hero-slide-1.png",
        alt: "Nutranza Hero Slide 1",
    },
    {
        id: 2,
        image: "/images/hero-slide-2.png",
        alt: "Nutranza Hero Slide 2",
    },
    {
        id: 3,
        image: "/images/hero-slide-3.png",
        alt: "Nutranza Hero Slide 3",
    },
    {
        id: 4,
        image: "/images/hero-slide-4.png",
        alt: "Nutranza Hero Slide 4",
    },
];

export default function HeroSlider() {
    return (
        <section className="w-full aspect-21/10 relative">
            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                priority={slide.id === 1}
                                className="object-cover w-full h-full"
                                sizes="100vw"
                            />
                            {/* Overlay gradient for better text readability if we add text later */}
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    );
}
