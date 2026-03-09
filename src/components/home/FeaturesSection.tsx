import { Globe, FlaskConical, Zap, ShieldCheck, Heart } from "lucide-react";
import Image from "next/image";
import WaveDecoration from "../ui/WaveDecoration";

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Certified Excellence",
        description: "ISO, GMP and FDA certifications ensure world-class safety standards and international compliance.",
    },
    {
        icon: FlaskConical,
        title: "Honest Ingredients",
        description: "We use sugar and artificial flavors for some flavored peanut butter.",
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

const CERTIFICATION_LOGOS = [
    {
        src: "/assets/images/fssai_logo.png",
        alt: "FSSAI Certified",
    },
    {
        src: "/assets/images/iso-logo.png",
        alt: "ISO Certified",
    },
    {
        src: "/assets/images/gmp-logo.png",
        alt: "GMP Certified",
    },
    {
        src: "/assets/images/fda-logo.png",
        alt: "FDA Registered",
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative ">
            {/* Top Wave */}
            <WaveDecoration position="top" color="text-accent" className="bg-[#FEFDF7]" />

            <div className="lg:py-20 py-16 bg-accent relative z-10 -my-0.5">

                <div className="container relative z-10">
                    {/* Header */}
                    <div className="flex flex-col gap-8 text-center">
                        <div className="flex items-center justify-center gap-2 text-lg text-white uppercase font-medium font-roca">
                            <Heart className="w-5 h-5 fill-white" />
                            <span>Here when you need us</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">
                            <span className="font-black">Why choose Nutranza</span>{" "}<br />
                            <span>for your health</span>
                        </h2>
                        <p className="text-lg md:text-xl font-medium leading-relaxed text-white max-w-4xl mx-auto">
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
                                <h3 className="text-xl md:text-2xl text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-white leading-relaxed text-base">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Banner */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
                        <div className="flex-1 text-center sm:text-left">
                            <h3 className="text-3xl lg:text-4xl text-accent">
                                Certified care you can rely on
                            </h3>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                            {CERTIFICATION_LOGOS.map((logo) => (
                                <div
                                    key={logo.src}
                                    className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={96}
                                        height={96}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
