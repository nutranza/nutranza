"use client";

import React, { useRef } from "react";
import { Quote, MoveRight, MoveLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";

const reviews = [
    {
        id: 1,
        text: "“I didn’t think I could love a protein drink. But this one makes me feel good, not just full.”",
        bgColor: "bg-[#FF9900]", // Saffron
        textColor: "text-[#23100c]",
    },
    {
        id: 2,
        text: "“Finally found a protein that doesn’t fight my gut. It just works, you can feel the difference.”",
        bgColor: "bg-[#F26B75]", // Dark Pink / Coral
        textColor: "text-white",
    },
    {
        id: 3,
        text: "“The cleanest energy I've felt in ages. No bloat, amazing flavor. Highly recommended.”",
        bgColor: "bg-[#803B2C]", // Umber / Deep Brown
        textColor: "text-white",
    },
    {
        id: 4,
        text: "“Truly crave-worthy! It's so creamy and perfect for my morning energy boost.”",
        bgColor: "bg-[#FBDADF]", // Light Pink
        textColor: "text-[#23100c]",
    }
];

export default function ReviewsSection() {
    const swiperRef = useRef<SwiperType | null>(null);

    // We manually handle progress exactly how donedrinks/splide does for perfectly smooth drag-linked scaling
    // This binds the layout scale directly to the user's swipe intensity rather than snapping at the end.
    const handleProgress = (swiper: SwiperType) => {
        for (let i = 0; i < swiper.slides.length; i++) {
            const slide = swiper.slides[i] as HTMLElement & { progress: number };
            // slide.progress is 0 when active, +/-1 when adjacent
            const progress = slide.progress;

            // Calculate continuous scale: 1.1 at center, 0.8 at sides
            const maxScale = 1.1;
            const minScale = 0.8;

            // When progress = 0 (center), scale is 1.1
            // When progress = 1 (1 slide away), scale is 1.1 - 0.3 = 0.8
            // If progress > 1, we cap scale at 0.8
            const scale = maxScale - (Math.min(Math.abs(progress), 1) * (maxScale - minScale));

            const innerCard = slide.querySelector('.testimonial-inner-card') as HTMLElement | null;
            if (innerCard) {
                innerCard.style.transform = `scale(${scale})`;
            }
        }
    };

    // Sync transition duration natively with Swiper to maintain the extreme liquid smoothness
    const handleSetTransition = (swiper: SwiperType, duration: number) => {
        for (let i = 0; i < swiper.slides.length; i++) {
            const slide = swiper.slides[i] as HTMLElement;
            const innerCard = slide.querySelector('.testimonial-inner-card') as HTMLElement | null;
            if (innerCard) {
                innerCard.style.transitionDuration = `${duration}ms`;
            }
        }
    };

    return (
        <section className="w-full lg:py-20 py-16 overflow-hidden bg-[#f5efe6]">
            <div className="container">
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Badge */}
                    <div className="flex items-center justify-center gap-2 text-lg text-secondary uppercase font-medium font-roca">
                        <Quote className="w-5 h-5 fill-current" />
                        <span>Testimonials</span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary text-center">
                        <span>Why people keep </span><br className="sm:block hidden" />
                        <span className="font-black">coming back</span>
                    </h2>
                </div>
            </div>

            <div className="relative w-full lg:mt-18 mt-14">
                <style dangerouslySetInnerHTML={{
                    __html: `
          .pixel-perfect-swiper {
            overflow: visible !important; 
          }

          /* Fixed exact dimensions for the track slide to ensure absolute stability */
          .pixel-perfect-swiper .swiper-slide {
            display: flex;
            justify-content: center;
            height: auto !important;
          }
          
          @media (min-width: 1024px) {
            .pixel-perfect-swiper .swiper-slide {
              width: 700px !important; 
            }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .pixel-perfect-swiper .swiper-slide {
              width: 500px !important; 
            }
          }
          @media (max-width: 767px) {
            .pixel-perfect-swiper .swiper-slide {
              width: 85vw !important; 
            }
          }

          /* Base CSS for inner card. The scale is set via Javascript onProgress for perfect 60fps drag sync */
          .pixel-perfect-swiper .swiper-slide .testimonial-inner-card {
            width: 100%;
            height: 100%;
            transition-property: transform;
            /* smooth out non-drag transitions (like clicking arrows) */
            transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          }
        `}} />

                <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView="auto"
                    centeredSlides={true}
                    loop={true}
                    speed={1000} // MATCH REFERENCE SLOW PAN: 1 full second transition speed for extreme smoothness
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    watchSlidesProgress={true} // VITAL: calculates slide.progress
                    onProgress={handleProgress}
                    onSetTransition={handleSetTransition}
                    onBeforeInit={(swiper: SwiperType) => {
                        swiperRef.current = swiper;
                    }}
                    className="pixel-perfect-swiper"
                >
                    {[...reviews, ...reviews, ...reviews].map((review, index) => (
                        <SwiperSlide key={`${review.id}-${index}`} className="cursor-grab active:cursor-grabbing">
                            <div
                                className={`testimonial-inner-card rounded-[32px] px-8 md:px-10 lg:px-14 py-10 md:py-12 lg:py-16 flex flex-col justify-center text-center shadow-none ${review.bgColor}`}
                            >
                                <div className={`lg:text-3xl md:text-2xl text-xl font-roca ${review.textColor}`}>
                                    {review.text}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Arrows */}
                <div className="flex justify-center items-center gap-6 mt-10 w-full z-20 relative px-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-14 h-14 md:w-18 md:h-18 rounded-full border border-secondary hover:border-primary flex items-center justify-center hover:bg-primary transition-all duration-300 ease-in-out focus:outline-none group"
                        aria-label="Previous slide"
                    >
                        <MoveLeft size={28} className="text-secondary group-hover:text-white" />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-14 h-14 md:w-18 md:h-18 rounded-full border border-secondary hover:border-primary flex items-center justify-center hover:bg-primary transition-all duration-300 ease-in-out focus:outline-none group"
                        aria-label="Next slide"
                    >
                        <MoveRight size={28} className="text-secondary group-hover:text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}
