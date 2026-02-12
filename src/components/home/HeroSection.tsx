"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full lg:pt-20 pt-16 bg-[#EBE6DE] overflow-hidden flex items-center">

            {/* MAIN CONTENT CONTAINER */}
            <div className="container  flex flex-col lg:flex-row items-center justify-between h-full gap-10 lg:gap-0">

                {/* LEFT CONTENT (Heading & Text) */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                    <h1 className="text-neutral-900 font-extrabold text-4xl md:text-5xl xl:text-7xl mb-6">
                        Clean Nutrition for a
                        <span className="block text-secondary">Premium Lifestyle</span>
                    </h1>

                    <p className="text-neutral-900 text-base md:text-lg lg:text-xl mb-8 font-medium leading-relaxed max-w-lg">
                        Experience the perfect blend of taste and health with our Peanut Butter Protein Oats. No added sugar, 100% natural, and designed for those who demand more.
                    </p>

                    <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-base lg:text-lg shadow-lg hover:bg-secondary/80 transition-all transform hover:scale-105">
                        Shop Now
                    </button>
                </div>

                {/* RIGHT CONTENT (Image) */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-0">
                    <div className="relative w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
                        <Image
                            src="/images/hero(1).png"
                            alt="Dining Experience"
                            width={800}
                            height={1000}
                            priority
                            className="object-contain w-full h-auto drop-shadow-2xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
