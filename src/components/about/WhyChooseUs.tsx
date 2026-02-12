"use client";

import { Award, DollarSign, Truck, TrendingUp, Shield, Package, Headphones } from "lucide-react";

interface Strength {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

export default function WhyChooseUs() {
    const strengths: Strength[] = [
        {
            title: "Global Market Access",
            description: "Direct access to premium international markets and distribution networks.",
            icon: TrendingUp,
        },
        {
            title: "Certified Quality",
            description: "ISO 22000, HACCP, and organic certifications for guaranteed excellence.",
            icon: Shield,
        },
        {
            title: "Competitive Pricing",
            description: "Factory-direct pricing with transparent cost structures.",
            icon: DollarSign,
        },
        {
            title: "Reliable Logistics",
            description: "On-time delivery with optimized supply chain management.",
            icon: Truck,
        },
        {
            title: "Product Innovation",
            description: "Continuous R&D for market-leading healthcare food products.",
            icon: Award,

        },
        {
            title: "Flexible MOQ",
            description: "Scalable order quantities to match your business needs.",
            icon: Package,
        },
        {
            title: "Regulatory Expertise",
            description: "Complete compliance with international food import regulations.",
            icon: Shield,
        },
        {
            title: "Dedicated Support",
            description: "B2B-focused account management and responsive customer service.",
            icon: Headphones,
        },
    ];

    return (
        <section className="relative md:py-20 py-16 overflow-hidden">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12 space-y-5">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                        Your Strategic Export Partner
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-700 max-w-2xl mx-auto">
                        Your success is our priority. We deliver more than products—we deliver partnership, reliability, and growth.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                    {strengths.map((strength, index) => {
                        const Icon = strength.icon;

                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl transition-all duration-300 hover:shadow-sm group flex flex-col items-start justify-start relative overflow-hidden"
                            >
                                {/* Icon */}
                                <div className="inline-flex p-3 rounded-xl mb-4 transition-colors relative z-10 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 space-y-2 mt-auto">
                                    <h3 className="font-bold text-lg text-neutral-900 group-hover:text-primary transition-colors">
                                        {strength.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {strength.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
