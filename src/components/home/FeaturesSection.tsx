import { Globe, Leaf, Zap, ShieldCheck } from "lucide-react";
import WaveSeparator from "../ui/WaveSeparator";

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
        <section className="relative lg:pt-20 pt-16 bg-[#912727]">
            {/* Top Wave */}
            {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-[99%]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-[calc(110%+1.3px)] h-[60px] md:h-[100px] fill-[#912727]">
                    <path d="M0,160L24,181.3C48,203,96,245,144,261.3C192,277,240,267,288,234.7C336,203,384,149,432,154.7C480,160,528,224,576,224C624,224,672,160,720,154.7C768,149,816,203,864,208C912,213,960,171,1008,181.3C1056,192,1104,256,1152,261.3C1200,267,1248,213,1296,208C1344,203,1392,245,1416,266.7L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                </svg>
            </div> */}

            <div className="container relative z-10">
                <div className="text-center space-y-5 mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white lg:max-w-2xl max-w-lg mx-auto">
                        Why Nutranza
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mt-4 text-white/90 max-w-2xl mx-auto font-light">
                        Your trusted partner for premium organic, plant-based foods. We deliver certified excellence, complete transparency, and export-ready solutions to fuel healthier markets worldwide.
                    </p>
                </div>
            </div>


            {/* Featurs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/20">
                {FEATURES.map((feature, index) => (
                    <div
                        key={index}
                        className={`group p-8 pb-20 h-[420px] flex flex-col justify-between items-start text-left hover:bg-white/5 transition-colors duration-300
                            border-white/20
                            border-b last:border-b-0
                            md:border-b-0 md:odd:border-r md:nth-[-n+2]:border-b
                            lg:border-b-0 lg:border-r-0 lg:not-last:border-r`}
                    >
                        <div className="text-white group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-12 h-12" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-white/80 leading-relaxed font-light text-sm">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Wave */}
            <WaveSeparator
                position="bottom"
                color="#EBE6DE"
                height="h-[60px] md:h-[100px]"
            />
        </section>
    );
}
