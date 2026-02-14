import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { products, slugify } from "@/data/products";

// Product Showcase Component
// Displays highlighted products with custom styling per flavor/variant

export default function ProductShowcase() {
    // Select specific products
    const selectedProducts = products.filter(p => ['p1', 'p2', 'p3'].includes(p.id));

    // Custom styles and descriptions mapping (shortened from actual product data)
    const productConfig: Record<string, { bg: string; titleColor: string; description: string; buttonBg: string }> = {
        'p1': { // High Protein Chocolate Oats
            bg: 'bg-[linear-gradient(#5471d2,#7da0f2)]',
            titleColor: 'text-white',
            description: 'Rolled Oats with Vegan Protein, Cocoa, and Nuts.',
            buttonBg: 'bg-[#355cdd]'
        },
        'p2': { // High Protein Coffee Oats
            bg: 'bg-[linear-gradient(#8d5a41,#b58066)]',
            titleColor: 'text-white',
            description: 'Energizing Coffee infused Oats with High Fiber.',
            buttonBg: 'bg-accent'
        },
        'p3': { // High Protein Strawberry Oats
            bg: 'bg-[linear-gradient(#d64d56,#f38990)]',
            titleColor: 'text-white',
            description: 'Delicious Strawberry flavored Oats with Vegan Protein.',
            buttonBg: 'bg-[#eb3c47]'
        }
    };

    return (
        <section className="py-20 bg-[#ffefc4]">
            <div className="container">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="flex items-center justify-center gap-2 text-lg text-secondary uppercase font-medium font-roca">
                        <Star className="w-5 h-5 fill-secondary" />
                        <span>Top Rated</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary text-center">
                        <span className="font-black">Our Best Sellers </span><br className="sm:block hidden"/>
                        <span>loved by everyone</span>
                    </h2>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                    {selectedProducts.map((product) => {
                        const config = productConfig[product.id] || {
                            bg: 'bg-gray-200',
                            titleColor: 'text-gray-900',
                            description: product.description, // Fallback to full description
                            buttonBg: 'bg-black'
                        };

                        return (
                            <Link
                                key={product.id}
                                href={`/categories/${slugify(product.category)}/${product.slug}`}
                                className={`group relative ${config.bg} rounded-[2.5rem] px-5 sm:py-10 py-5 flex flex-col items-center justify-between text-center gap-2`}
                            >
                                {/* Top Content: Name & Description */}
                                <div className="space-y-2 z-10">
                                    <h3 className={`text-3xl sm:text-4xl ${config.titleColor} leading-tight`}>
                                        {product.name.replace('High Protein ', '')} {/* Keep 'Chocolate Oats' but remove 'High Protein' for cleaner look based on image reference, or use raw if preferred */}
                                    </h3>
                                    <p className={`font-light text-base sm:text-lg ${config.titleColor}`}>
                                        {config.description}
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
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
