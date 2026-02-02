import { ShieldCheck, Zap, Leaf } from "lucide-react";

const features = [
    {
        title: "Lab Tested",
        description: "Certified manufacturing quality.",
        icon: ShieldCheck,
    },
    {
        title: "High Protein",
        description: "Optimized for daily performance.",
        icon: Zap,
    },
    {
        title: "100% Organic",
        description: "No artificial sweeteners used.",
        icon: Leaf,
    },
];

export default function FeatureCards() {
    return (
        <section className="md:pb-20 pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group flex items-center sm:p-6 p-4 bg-white border border-gray-50 rounded-2xl shadow-sm"
                        >
                            {/* Icon Wrapper */}
                            <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 text-primary mr-5 transition-colors group-hover:bg-primary/20">
                                <feature.icon className="w-7 h-7 fill-current" />
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="font-bold text-lg text-neutral-900 mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
