import { ShieldCheck, FileCheck, Leaf, Award, CheckCircle2, Sparkles } from "lucide-react";

interface Certification {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

export default function QualityCertifications() {
    const certifications: Certification[] = [
        {
            name: "ISO 22000",
            description: "International food safety management system certification",
            icon: ShieldCheck,
        },
        {
            name: "HACCP",
            description: "Hazard Analysis and Critical Control Points certification",
            icon: FileCheck,
        },
        {
            name: "Organic Certified",
            description: "NPOP and international organic standards compliance",
            icon: Leaf,
        },
        {
            name: "FSSAI Licensed",
            description: "Food Safety and Standards Authority of India license",
            icon: Award,
        },
        {
            name: "GMP Certified",
            description: "Good Manufacturing Practices certification",
            icon: CheckCircle2,
        },
        {
            name: "FSSC 22000",
            description: "Food Safety System Certification scheme",
            icon: Sparkles,
        },
    ];

    return (
        <section className="md:py-24 py-16 bg-soft-bg">
            <div className="container max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                        Quality Certifications
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Internationally recognized certifications ensuring every product meets the highest standards of quality and safety.
                    </p>
                </div>

                {/* Certifications Grid - Minimal Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <div
                                key={index}
                                className="space-y-4"
                            >
                                {/* Icon */}
                                <div className="inline-flex p-3 rounded-lg bg-white border border-neutral-200">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>

                                {/* Certification Name */}
                                <h3 className="text-xl font-bold text-neutral-900">
                                    {cert.name}
                                </h3>

                                {/* Description */}
                                <p className="text-neutral-600 leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
