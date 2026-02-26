import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { products, slugify } from "@/data/products";
import WaveDecoration from "@/components/ui/WaveDecoration";

// Product Showcase Component
// Displays highlighted products with custom styling per flavor/variant

export default function ProductShowcase() {
    // Select specific products
    const selectedProducts = products.filter(p => ['p1', 'p2', 'p3'].includes(p.id));

    // Custom descriptions mapping (styles now moved to product data)
    const productDescriptions: Record<string, string> = {
        'p1': 'Rolled Oats with Vegan Protein, Cocoa, and Nuts.',
        'p2': 'Energizing Coffee infused Oats with High Fiber.',
        'p3': 'Delicious Strawberry flavored Oats with Vegan Protein.',
    };

    return (
        <section className="relative w-full overflow-hidden">
            {/* Top Wave */}
            <WaveDecoration position="top" color="text-[#ffefc4]" className="bg-accent" />

            <div className="lg:py-20 py-16 bg-[#ffefc4] relative z-10 -my-0.5">
                <div className="container">
                    {/* Section Header */}
                    <div className="flex flex-col items-center justify-center gap-6">
                        <div className="flex items-center justify-center gap-2 text-lg text-secondary uppercase font-medium font-roca">
                            <Star className="w-5 h-5 fill-secondary" />
                            <span>Top Rated</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary text-center">
                            <span className="font-black">Our Best Sellers </span><br className="sm:block hidden" />
                            <span>loved by everyone</span>
                        </h2>
                    </div>

                    {/* Product Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                        {selectedProducts.map((product) => {
                            const config = product.colorConfig || {
                                bg: 'bg-[linear-gradient(#5471d2,#7da0f2)]',
                                titleColor: 'text-white',
                                buttonBg: 'bg-[#355cdd]'
                            };
                            const shortDesc = productDescriptions[product.id] || product.description;

                            return (
                                <Link
                                    key={product.id}
                                    href={`/categories/${slugify(product.category)}/${product.slug}`}
                                    className={`group relative ${config.bg} rounded-[2.5rem] px-5 sm:py-10 py-5 flex flex-col items-center justify-between text-center gap-2 focus:outline-none`}
                                >
                                    {/* Top Content: Name & Description */}
                                    <div className="space-y-2 z-10">
                                        <h3 className={`text-2xl sm:text-4xl ${config.titleColor}`}>
                                            {product.name.replace('High Protein ', '')} {/* Keep 'Chocolate Oats' but remove 'High Protein' for cleaner look based on image reference, or use raw if preferred */}
                                        </h3>
                                        <p className={`text-lg leading-relaxed ${config.titleColor}`}>
                                            {shortDesc}
                                        </p>
                                    </div>

                                    {/* Middle: Floating Image */}
                                    <div className="w-full relative flex items-center justify-center">
                                        <div className="relative w-full h-[400px]">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain drop-shadow-2xl"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                priority
                                            />
                                        </div>
                                    </div>

                                    {/* Bottom: Button */}
                                    <div>
                                        <button className={` ${config.buttonBg} text-white px-8 py-3 rounded-full font-medium uppercase flex items-center gap-2 `}>
                                            View Now
                                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
