import React from "react";
import { Globe } from "lucide-react";
import WaveDecoration from "../ui/WaveDecoration";

interface Strength {
    title: string;
    description: string;
}

export default function WhyChooseUs() {
    const strengths: Strength[] = [
        {
            title: "Certified Global Standards",
            description: "Manufactured in state-of-the-art facilities with ISO, GMP, and HACCP certifications, ensuring international food safety and uncompromised quality for every shipment.",
        },
        {
            title: "End-to-End Export Logistics",
            description: "Streamlined global distribution networks with transparent tracking, guaranteeing on-time delivery across borders without supply chain disruptions.",
        },
        {
            title: "Private Label & Custom Formulation",
            description: "Tailored manufacturing solutions from custom recipes to localized packaging, empowering your brand with premium, market-ready healthcare and food products.",
        },
        {
            title: "Regulatory & Customs Expertise",
            description: "Seamless navigation of complex international trade laws, vital documentation, and destination-specific compliance to ensure smooth, hassle-free customs clearance.",
        },
        {
            title: "Scalable B2B Pricing Structure",
            description: "Factory-direct sourcing with flexible Minimum Order Quantities (MOQs) and transparent cost structures, maximizing your profit margins in competitive markets.",
        },
        {
            title: "Premium & Trending Portfolio",
            description: "Access a highly sought-after range of health foods—from high-protein Peanut Butter and Oats to authentic Shilajit—developed through continuous R&D.",
        },
    ];

    return (
        <section className="w-full overflow-hidden relative">
            {/* Top Wave Transitioning from Gradient Section */}
            <WaveDecoration position="top" color="text-[#5C6AAE]" className="bg-[#f9e2a3]" />

            <div className="md:py-20 py-16 bg-[#5C6AAE] relative z-10 -my-0.5">
                <div className="container text-white relative z-10">
                    {/* Section Header */}
                    <div className="flex flex-col gap-4 text-center items-center mb-6">
                        <div className="flex items-center gap-2 text-lg text-white uppercase font-medium font-roca">
                            <Globe className="w-5 h-5" />
                            <span>Why Choose NutranZa</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mt-4">
                            <span>Your Trusted</span>{" "}<br />
                            <span className="font-black">Export Partner</span>
                        </h2>
                        <p className="text-lg md:text-xl font-medium leading-relaxed text-white max-w-3xl mx-auto mt-4">
                            We provide B2B distributors with unmatched inventory reliability, transparent export logistics, and uncompromising quality standards to keep you ahead of international market demand.
                        </p>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[minmax(280px,auto)] mt-16">
                        {strengths.map((strength, index) => {
                            let gridClass = "col-span-1";
                            if (index === 0) {
                                gridClass = "lg:col-span-2"; // Wide on laptop & desktop
                            } else if (index === 3 || index === 4) {
                                gridClass = "lg:col-span-2 xl:col-span-1"; // Wide on laptop, normal on desktop
                            } else if (index === 5) {
                                gridClass = "xl:col-span-2"; // Normal on laptop, wide on desktop
                            }

                            return (
                                <div
                                    key={index}
                                    className={`border border-[#e5e7eb] bg-white p-6 rounded-3xl transition-all duration-300 flex flex-col w-full h-full ${gridClass}`}
                                >
                                    {/* Top: Title & Number */}
                                    <div className="flex justify-between items-start w-full gap-4">
                                        <h3 className="text-2xl md:text-2xl text-primary">
                                            {strength.title}
                                        </h3>
                                        <span
                                            className="text-6xl shrink-0"
                                            style={{
                                                WebkitTextStroke: "1px rgba(255, 191, 15, 0.4)",
                                                color: "transparent"
                                            }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Separator */}
                                    <hr className="border-primary/40 mt-6 mb-8 w-full" />

                                    {/* Bottom: Description */}
                                    <p className="text-neutral-900 text-lg font-medium leading-relaxed mt-auto">
                                        {strength.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Wave Transitioning into Footer */}
            <WaveDecoration position="bottom" color="text-[#5C6AAE]" className="bg-[#EBE6DE]" />
        </section>
    );
}
