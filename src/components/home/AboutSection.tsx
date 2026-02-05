import { ShieldCheck, Globe, Leaf, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Content - Using local image 8.jpg */}
                    <div className="relative order-2 lg:order-1 animate-fade-in-left">
                        <div className="absolute -top-10 -left-10 w-2/3 h-2/3 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                        <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-[500px]">
                            <Image
                                src="/images/products/8.jpg"
                                alt="Nutranza food production facility with organic ingredients"
                                fill
                                className="object-cover"
                            />

                            {/* Clean Stat Card */}
                            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 max-w-xs hidden sm:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-2xl text-neutral-900">20+ Countries</p>
                                        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8 order-1 lg:order-2 animate-fade-in-right">
                        <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-primary text-sm font-bold tracking-wide uppercase">
                            About Us
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 leading-tight">
                            Your Trusted Partner in Premium Organic Food Export
                        </h2>

                        <p className="text-lg text-neutral-700 leading-relaxed font-sans">
                            We deliver certified excellence in organic, plant-based food products to distributors and retailers across 20+ countries. From rigorous quality control to seamless logistics, our commitment to your success drives every decision we make.
                        </p>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            {[
                                {
                                    icon: ShieldCheck,
                                    title: "ISO 22000 & HACCP Certified",
                                    description: "Internationally recognized food safety standards ensuring the highest quality for your customers."
                                },
                                {
                                    icon: Globe,
                                    title: "20+ Countries Served",
                                    description: "Proven global export expertise with reliable supply chain management and documentation."
                                },
                                {
                                    icon: Leaf,
                                    title: "100% Organic & Plant-Based",
                                    description: "Certified organic ingredients meeting the growing demand for sustainable, health-conscious products."
                                }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
                                        <div className="shrink-0">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-neutral-900 font-semibold mb-1">{item.title}</h3>
                                            <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pt-6">
                            <Link
                                href="/contact"
                                className="inline-block bg-primary text-neutral-900 px-6 py-3 rounded-xl font-semibold hover:bg-secondary hover:text-white transition-all shadow-lg hover:shadow-primary/20"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
