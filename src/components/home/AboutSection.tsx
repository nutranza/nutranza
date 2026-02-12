import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="md:py-20 py-16 relative overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="space-y-5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                            Your Trusted Partner in <span className="text-primary">Premium Organic</span> Food Export
                        </h2>

                        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                            We deliver certified excellence in organic, plant-based food products to distributors and retailers across 20+ countries. From rigorous quality control to seamless logistics, our commitment to your success drives every decision we make.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "ISO 22000 & HACCP",
                                    description: "Internationally recognized safety standards."
                                },
                                {
                                    title: "Global Reach",
                                    description: "Serving clients in over 20+ countries."
                                },
                                {
                                    title: "100% Organic",
                                    description: "Certified pure, plant-based ingredients."
                                }
                            ].map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{item.title}</h3>
                                    <p className="text-neutral-700 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-neutral-900 font-medium hover:bg-primary/80 transition-all duration-300 cursor-pointer"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative flex items-center justify-center">
                        {/* Main Image */}
                        <div className="w-full aspect-square overflow-hidden">
                            <Image
                                src="/images/products/8.png"
                                alt="Nutranza food production"
                                width={500}
                                height={500}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
