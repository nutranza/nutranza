"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            className="relative lg:h-screen lg:py-20 py-16 overflow-hidden"
            style={{ background: "linear-gradient(#f3cf6e, #f9e2a3 50%)" }}
        >
            {/* MAIN CONTENT CONTAINER */}
            <div className="container">
                <div className="lg:block flex flex-col items-center justify-center h-full">
                    {/* LEFT CONTENT (Heading & Text) */}
                    <div className="lg:max-w-4xl w-full flex flex-col items-center lg:items-start gap-8 text-center lg:text-left relative z-10">
                        <h1 className="text-neutral-900 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl sm:leading-16">
                            <span>Nutrition for a</span>
                            <span className="block font-black text-secondary leading-tight">premium lifestyle</span>
                        </h1>

                        <p className="text-neutral-900 text-base sm:text-xl font-medium max-w-xl">
                            Experience the perfect blend of taste and health with our Peanut Butter, Protein Oats. No added sugar, 100% natural, and designed for those who demand more.
                        </p>

                        <button className="bg-secondary text-white px-10 py-3 rounded-full font-medium text-base hover:bg-secondary/80 transition-all duration-300 cursor-pointer">
                            Shop Now
                        </button>
                    </div>

                    {/* RIGHT CONTENT (Image) */}

                    <div className="xl:max-w-fit lg:max-w-2xl lg:h-3/4 w-full h-full lg:absolute xl:top-1/5 top-1/3 xl:right-20 right-10 z-10 pointer-events-none">
                        <Image
                            src="/assets/images/Hero-1.png"
                            alt="Dining Experience"
                            width={800}
                            height={800}
                            priority
                            className="object-contain w-full h-full"
                            sizes="100vw"
                        />
                    </div>
                </div>
            </div>

            {/* FLOATING IMAGES */}
            {/* Top Right - Peanut Spoon */}
            <div className="lg:absolute top-10 right-0 xl:right-0 z-0 lg:block hidden pointer-events-none">
                <Image
                    src="/assets/images/floating-images/Peanut_Spoone.png"
                    alt=""
                    width={250}
                    height={250}
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Bottom Left - Chocolate */}
            <div className="lg:absolute xl:bottom-0 left-0 xl:left-20 2xl:left-1/6 z-0 rotate-90 lg:block hidden pointer-events-none">
                <Image
                    src="/assets/images/floating-images/Chocolate.png"
                    alt=""
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                />
            </div>
        </section>
    );
}
