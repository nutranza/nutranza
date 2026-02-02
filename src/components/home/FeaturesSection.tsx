import { Globe, Leaf, Zap, ShieldCheck } from "lucide-react";

const FEATURES = [
    {
        icon: Globe,
        title: "Global Supply Chain",
        description: "Efficient logistic networks ensuring timely delivery to over 20+ countries worldwide.",
    },
    {
        icon: ShieldCheck,
        title: "Certified Safety",
        description: "Our facilities adhere to the strictest HACCP, ISO 22000, and GMP safety protocols.",
    },
    {
        icon: Leaf,
        title: "Sustainably Sourced",
        description: "We partner with local farmers to ensure ethical sourcing and premium ingredient quality.",
    },
    {
        icon: Zap,
        title: "Custom Formulations",
        description: "Flexible R&D team to create private label products tailored to your brand's specific needs.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Why Partner With Us</span>
                    <h2 className="mt-2 text-3xl md:text-5xl font-heading font-bold text-neutral-900 dark:text-white">
                        Built for Global Scale
                    </h2>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                        Nutranza combines manufacturing expertise with export-grade reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-[var(--color-primary)] transition-colors duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all duration-300">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
