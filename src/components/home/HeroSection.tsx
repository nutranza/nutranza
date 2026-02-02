import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden md:py-20 py-16 ">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

                    {/* Left: Content */}
                    <div className="space-y-6 text-left">
                        {/* Eyebrow */}
                        <p className="text-sm font-bold tracking-widest uppercase text-secondary">
                            Premium Performance Food
                        </p>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-neutral-900 font-heading">
                            Clean Nutrition for a <br className="hidden md:block" />
                            <span className="text-primary">Premium</span> Lifestyle
                        </h1>

                        {/* Paragraph */}
                        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed lg:max-w-lg">
                            Experience the perfect blend of taste and health with our
                            Peanut Butter Protein Oats. No added sugar, 100% natural,
                            and designed for those who demand more.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                className="inline-flex items-center justify-center h-14 px-8 py-3 rounded-full bg-primary text-neutral-900 font-medium text-lg hover:bg-primary/80 transition-all duration-300 cursor-pointer"
                            >
                                Try Peanut Butter
                            </button>

                            <button
                                className="inline-flex items-center justify-center h-14 px-8 py-3 rounded-full bg-white border border-gray-200 text-neutral-900 font-medium text-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                            >
                                View Collection
                            </button>
                        </div>
                    </div>

                    {/* Right: Product Visual */}
                    <div className="relative flex justify-center lg:justify-end w-full z-10">
                        {/* Card Container - Square Aspect Ratio */}
                        {/* Added bg-neutral-50 to frame the square card visually */}
                        <div className="w-full aspect-square overflow-hidden">
                            <Image
                                src="/images/products/1.jpg"
                                alt="Premium Peanut Butter Oats"
                                width={500}
                                height={500}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                                className="object-contain w-full"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
