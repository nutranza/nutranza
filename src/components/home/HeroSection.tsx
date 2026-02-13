"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative lg:h-[90vh] lg:py-20 py-16 bg-[#EBE6DE]">

            {/* MAIN CONTENT CONTAINER */}
            <div className="container">

                <div className="lg:block flex flex-col items-center justify-center h-full">
                    {/* LEFT CONTENT (Heading & Text) */}
                    <div className="lg:max-w-4xl w-full flex flex-col items-center lg:items-start gap-8 text-center lg:text-left relative z-10">
                        <h1 className="text-neutral-900 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-16">
                            <span className="leading-[10px]">Nutrition for a</span>
                            <span className="block font-bold text-secondary leading-tight">premium lifestyle</span>
                        </h1>

                        <p className="text-neutral-900 text-base md:text-xl font-medium max-w-xl">
                            Experience the perfect blend of taste and health with our Peanut Butter Protein Oats. No added sugar, 100% natural, and designed for those who demand more.
                        </p>

                        <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-base lg:text-lg shadow-lg hover:bg-secondary/80 transition-all transform hover:scale-105">
                            Shop Now
                        </button>
                    </div>

                    {/* RIGHT CONTENT (Image) */}

                    <div className="lg:max-w-3/4 lg:h-3/4 w-full h-full lg:absolute xl:top-1/5 top-1/3 right-0 ">
                        <Image
                            src="/images/Hero copy.png"
                            alt="Dining Experience"
                            width={0}
                            height={0}
                            priority
                            className="object-contain w-full h-full"
                            sizes="100vw"
                        />
                    </div>

                </div>


            </div>
        </section>
    );
}
