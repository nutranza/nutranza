import Image from "next/image";
import { Leaf, XCircle, Zap } from "lucide-react";

export default function NutritionalBenefits() {
    return (
        <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-800/30 -skew-x-12 translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-400 text-sm font-bold tracking-wide uppercase">
                            <Zap className="w-4 h-4 fill-current" />
                            Data-Driven Nutrition
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                            The Science of <br />
                            <span className="text-primary">Uncompromising Purity.</span>
                        </h2>

                        <p className="text-lg text-neutral-400 leading-relaxed font-sans max-w-md">
                            We don&apos;t just make food; we engineer nutrition. Every jar is packed with verified macro-nutrients designed to fuel your ambition without the filler.
                        </p>

                        <div className="pt-4 grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <Leaf className="w-6 h-6 text-green-400 mb-2" />
                                <p className="font-bold text-white">100% Plant-Based</p>
                                <p className="text-sm text-neutral-500">No animal products</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <XCircle className="w-6 h-6 text-red-400 mb-2" />
                                <p className="font-bold text-white">Zero Added Sugar</p>
                                <p className="text-sm text-neutral-500">Natural sweetness only</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Stat Card 1 */}
                        <div className="p-8 rounded-3xl bg-primary text-neutral-900 flex flex-col justify-between aspect-square">
                            <span className="text-6xl font-black tracking-tighter">30g</span>
                            <span className="font-bold text-lg leading-tight opacity-80">High Quality <br /> Protein Per Serving</span>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="p-8 rounded-3xl bg-white text-neutral-900 flex flex-col justify-between aspect-square">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <span className="block text-4xl font-black mb-1">100%</span>
                                <span className="font-bold text-sm text-neutral-500">Natural Ingredients</span>
                            </div>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="p-8 rounded-3xl bg-neutral-800 text-white flex flex-col justify-between aspect-square border border-white/10">
                            <div>
                                <span className="block text-4xl font-black mb-1 text-secondary">Zero</span>
                                <span className="font-bold text-sm text-neutral-400">Preservatives or Artificial Flavors</span>
                            </div>
                            <div className="w-10 h-1 rounded-full bg-neutral-700" />
                        </div>

                        {/* Stat Card 4 */}
                        <div className="p-8 rounded-3xl bg-white text-neutral-900 flex flex-col justify-between aspect-square relative overflow-hidden">
                            <Image
                                src="/assets/images/products/2.jpg"
                                alt="Protein"
                                width={300}
                                height={300}
                                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[140%] max-w-none opacity-20 rotate-12"
                            />
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <span className="font-bold text-xl">Lab Tested <br /> for Purity</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
