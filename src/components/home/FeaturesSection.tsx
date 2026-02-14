import { Globe, Leaf, Zap, ShieldCheck, Heart } from "lucide-react";
import Image from "next/image";

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
        <section className="relative lg:py-20 py-16 bg-[#912727]">

            <div className="container relative z-10">
                {/* Header */}
                <div className="flex flex-col gap-8 lg:text-left text-center">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-lg text-white uppercase font-medium font-roca">
                        <Heart className="w-4 h-4 fill-white" />
                        <span>Here when you need us</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-black ">
                        Why choose Nutranza for your health
                    </h2>
                    <p className="text-base sm:text-xl font-medium text-white max-w-4xl">
                        Your trusted partner for premium organic, plant-based foods. We deliver certified excellence, complete transparency, and export-ready solutions to fuel healthier markets worldwide.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 my-20">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-left group"
                        >
                            <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-300 origin-left">
                                <feature.icon className="w-10 h-10" strokeWidth={1} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-white leading-relaxed font-light text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
                    <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-3xl md:text-4xl text-[#912727]">
                            Certified care you can rely on
                        </h3>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <Image
                                src="/assets/images/fssai_logo.png"
                                alt="FSSAI Certified"
                                width={100}
                                height={100}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
