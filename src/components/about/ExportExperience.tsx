"use client";

import WorldMap from "@/components/ui/WorldMap";

export default function ExportExperience() {
    return (
        <section className="md:py-20 py-16 ">
            <div className="container">
                <div className="bg-neutral-900 md:p-10 p-4 rounded-3xl">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: World Map Visualization */}
                        <div className="w-full order-2 lg:order-1">
                            <WorldMap />
                        </div>

                        {/* Right: Content */}
                        <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                Global Footprints
                            </h2>

                            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-neutral-400">
                                <p>
                                    Today, we take pride in supplying our products to major retailers worldwide,
                                    including the USA, Europe, Canada, UAE, Africa, Asian Countries, and beyond.
                                    Our markets continue to expand, a testament to the global appeal and trust in our brand.
                                </p>
                                <p>
                                    Join us on our journey to spread the goodness of peanuts, one jar of peanut butter at a time,
                                    as we persistently push boundaries, break barriers, and pave the way for a healthier, happier world!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
