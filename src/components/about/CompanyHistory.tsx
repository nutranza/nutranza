"use client";

import { Building2, Globe, Shield, TrendingUp } from "lucide-react";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: "building" | "globe" | "shield" | "trending";
}

export default function CompanyHistory() {
    const timeline: TimelineItem[] = [
        {
            year: "2015",
            title: "Company Founded",
            description:
                "Nutranza was established with a vision to provide premium, organic healthcare food products.",
            icon: "building",
        },
        {
            year: "2017",
            title: "First International Export",
            description:
                "Successfully entered the North American market with signature peanut butter products.",
            icon: "globe",
        },
        {
            year: "2019",
            title: "ISO 22000 & HACCP Certified",
            description:
                "Achieved internationally recognized food safety certifications.",
            icon: "shield",
        },
        {
            year: "2024",
            title: "Global Presence",
            description:
                "Now serving 20+ countries with a diverse, premium product portfolio.",
            icon: "trending",
        },
    ];

    const getIcon = (iconType: TimelineItem["icon"]) => {
        const iconProps = { className: "w-8 h-8 text-primary" };
        switch (iconType) {
            case "building":
                return <Building2 {...iconProps} />;
            case "globe":
                return <Globe {...iconProps} />;
            case "shield":
                return <Shield {...iconProps} />;
            case "trending":
                return <TrendingUp {...iconProps} />;
        }
    };

    return (
        <section className="md:py-20 py-16 overflow-hidden">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12 space-y-5">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                        Our Journey
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-600 max-w-2xl mx-auto">
                        From humble beginnings to becoming a trusted name in international healthcare food export.
                    </p>
                </div>

                {/* Horizontal Timeline - Desktop & Tablet */}
                <div className="hidden md:block">
                    <div className="relative scroll-hint">
                        <div className="flex gap-8 overflow-x-auto scroll-smooth scroll-snap-x">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 w-80 scroll-snap-center"
                                >
                                    <div className="h-full border-2 border-primary rounded-2xl">
                                        <div className="timeline-gradient-content p-8 h-full flex flex-col space-y-4">
                                            {/* Icon */}
                                            <div className="flex items-center justify-center">
                                                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                                                    {getIcon(item.icon)}
                                                </div>
                                            </div>

                                            {/* Year */}
                                            <div className="text-center">
                                                <div className="inline-block px-6 py-2 bg-linear-to-r from-primary/20 via-secondary/20 to-gold/20 rounded-full">
                                                    <span className="text-3xl font-bold bg-linear-to-r from-primary via-secondary to-gold bg-clip-text text-transparent">
                                                        {item.year}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 space-y-3 text-center">
                                                <h3 className="text-2xl font-bold text-neutral-900">
                                                    {item.title}
                                                </h3>
                                                <p className="text-neutral-700 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Vertical Timeline - Mobile */}
                <div className="md:hidden space-y-8">
                    {timeline.map((item, index) => (
                        <div key={index} className="border-2 border-primary rounded-2xl">
                            <div className="p-6 space-y-5">
                                {/* Icon & Year */}
                                <div className="flex items-center justify-between">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        {getIcon(item.icon)}
                                    </div>
                                    <div className="px-4 py-2 bg-linear-to-r from-primary/20 via-secondary/20 to-gold/20 rounded-full">
                                        <span className="text-2xl font-bold bg-linear-to-r from-primary via-secondary to-gold bg-clip-text text-transparent">
                                            {item.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-neutral-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Progress Indicator */}
                                <div className="pt-2">
                                    <div className="flex gap-1">
                                        {timeline.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1 flex-1 rounded-full ${i <= index
                                                    ? "bg-linear-to-r from-primary via-secondary to-gold"
                                                    : "bg-neutral-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
