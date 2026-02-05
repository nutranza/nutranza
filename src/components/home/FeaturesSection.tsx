import { Globe, Leaf, Zap, ShieldCheck } from "lucide-react";

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Certified Excellence",
        description: "HACCP, ISO 22000, and organic certifications ensure world-class safety standards and international compliance.",
    },
    {
        icon: Leaf,
        title: "100% Natural Purity",
        description: "Plant-based formulations with zero added sugar, artificial additives, or preservatives. Only pure, traceable ingredients.",
    },
    {
        icon: Zap,
        title: "High-Protein Innovation",
        description: "Premium protein-rich products meeting the growing global demand for functional nutrition and clean label solutions.",
    },
    {
        icon: Globe,
        title: "Global Export Ready",
        description: "Proven logistics, complete export documentation, and reliable delivery to 20+ countries. Your trusted B2B partner.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="md:py-20 py-16">
            <div className="container">
                <div className=" bg-neutral-900 rounded-3xl lg:py-20 sm:py-12 py-6 sm:px-8 px-4">

                    <div className="text-center space-y-5 mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white lg:max-w-2xl max-w-lg mx-auto">
                            Why Nutranza
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed mt-4 text-neutral-400 max-w-2xl mx-auto">
                            Your trusted partner for premium organic, plant-based foods. We deliver certified excellence, complete transparency, and export-ready solutions to fuel healthier markets worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {FEATURES.map((feature, index) => (
                            <div
                                key={index}
                                className="group lg:p-6 p-4 rounded-3xl border border-neutral-700 hover:border-primary transition-colors duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-neutral-900 transition-all duration-300">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
