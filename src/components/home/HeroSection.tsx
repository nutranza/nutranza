import Image from "next/image";
import Link from "next/link";
import { Cookie, Wheat, Layers, Disc } from "lucide-react";

const CATEGORIES = [
    { name: "Peanut Butter", Icon: Cookie, href: "/categories/peanut-butter" },
    { name: "Protein Oats", Icon: Wheat, href: "/categories/protein-oats" },
    { name: "Muesli", Icon: Layers, href: "#" },
    { name: "Rice Cakes", Icon: Disc, href: "#" },
];

export default function HeroSection() {
    return (
        <>
            <section
                className="relative flex items-center overflow-hidden"
                style={{ background: "linear-gradient(#f3cf6e, #f9e2a3 50%)" }}
            >
                <div className="container relative z-10">
                    {/* Two-column: LEFT (text) | RIGHT (image + pills) */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:py-32 py-28">

                        {/* ── LEFT: Text Content ── */}
                        <div className="lg:max-w-4xl w-full flex flex-col items-center lg:items-start gap-8 text-center lg:text-left relative z-10">
                            <h1 className="text-neutral-900 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                                <span>Nutrition for a</span>
                                <span className="block font-black text-secondary leading-tight">Premium lifestyle</span>
                            </h1>

                            <p className="text-neutral-900 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                                Experience the perfect blend of taste and health with our Peanut Butter, Protein Oats. natural, and designed for those who demand more.
                            </p>

                            <div className="flex items-center gap-3 flex-wrap">
                                <Link href="/categories">
                                    <button className="bg-secondary text-white px-10 py-3 rounded-full font-medium text-base transition-all duration-300 cursor-pointer">
                                        Shop Now
                                    </button>
                                </Link>
                                <Link href="/categories">
                                    <button className="bg-white text-secondary px-10 py-3 rounded-full font-medium text-base transition-all duration-300 cursor-pointer">
                                        Explore Products
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* ── RIGHT: Circular Image + Category Pills ── */}
                        <div className="flex flex-col items-center lg:gap-0 gap-6 lg:flex-row lg:items-center shrink-0">

                            {/* Circular Image */}
                            <div className="relative w-64 h-64 sm:w-[340px] sm:h-[340px] xl:w-[480px] xl:h-[480px] rounded-full overflow-hidden shrink-0">
                                <Image
                                    src="/assets/images/hero-img.png"
                                    alt="Nutranza premium nutrition food plate"
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
                                />
                            </div>

                            {/* Category Pills */}
                            <div className="flex flex-row flex-wrap justify-center gap-3 lg:flex-col lg:flex-nowrap lg:justify-start shrink-0">
                                {CATEGORIES.map(({ name, Icon, href }) => (
                                    <Link key={name} href={href}>
                                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer border-[1.5px] border-secondary text-secondary hover:bg-secondary hover:text-white">
                                            <Icon className="w-[15px] h-[15px]" />
                                            {name}
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                        {/* ── END RIGHT ── */}

                    </div>
                </div>
            </section>

        </>
    );
}
