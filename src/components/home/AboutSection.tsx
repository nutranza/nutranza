import { CheckCircle } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Content - Using local image 8.jpg */}
                    <div className="relative order-2 lg:order-1 animate-fade-in-left">
                        <div className="absolute -top-10 -left-10 w-2/3 h-2/3 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                        <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/images/products/8.jpg"
                                alt="Nutranza Manufacturing"
                                className="w-full h-full object-cover"
                            />

                            {/* Clean Stat Card */}
                            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 max-w-xs hidden sm:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-2xl text-neutral-900">5+ Years</p>
                                        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Of Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8 order-1 lg:order-2 animate-fade-in-right">
                        <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-primary text-sm font-bold tracking-wide uppercase">
                            Our Story
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 leading-tight">
                            Crafting Health, <br />
                            <span className="text-neutral-400">One Batch at a Time.</span>
                        </h2>

                        <p className="text-lg text-neutral-600 leading-relaxed font-sans">
                            Nutranza isn&apos;t just a manufacturer; we are culinary innovators. From selecting the finest peanuts to formulating the perfect protein blend, our process is driven by an obsession with quality and purity.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                "Sustainable Sourcing",
                                "Food Safety Certified",
                                "Custom Formulations",
                                "Global Logistics"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
                                    <span className="text-neutral-900 font-bold">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button className="text-neutral-900 font-bold border-b-2 border-neutral-900 hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all pb-1">
                                Discover Our Process
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
