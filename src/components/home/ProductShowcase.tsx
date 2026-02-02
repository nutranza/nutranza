import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Using local images 1.jpg to 6.jpg with specific "New" and "Bestseller" tags
const PRODUCTS = [
    {
        id: 1,
        name: "Classic Peanut Butter",
        category: "Bestseller",
        image: "/images/products/2.jpg",
        size: "col-span-1 md:col-span-2 row-span-2",
    },
    {
        id: 2,
        name: "Protein Oats",
        category: "High Fiber",
        image: "/images/products/3.jpg",
        size: "col-span-1 row-span-1",
    },
    {
        id: 3,
        name: "Pure Shilajit",
        category: "Trending", // Updated category
        image: "/images/products/4.jpg",
        size: "col-span-1 row-span-1",
    },
    {
        id: 4,
        name: "Crunchy Muesli",
        category: "Breakfast",
        image: "/images/products/5.jpg",
        size: "col-span-1 md:col-span-2 row-span-1",
    },
    {
        id: 5,
        name: "Protein Bars",
        category: "On-The-Go",
        image: "/images/products/6.jpg",
        size: "col-span-1 row-span-1",
    },
    {
        id: 6,
        name: "Rice Cakes",
        category: "Low Calorie",
        image: "/images/products/7.jpg",
        size: "col-span-1 row-span-1",
    },
];

export default function ProductShowcase() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-[var(--color-secondary)] font-bold tracking-wider uppercase text-sm">Our Collection</span>
                        <h2 className="mt-2 text-4xl md:text-5xl font-heading font-bold text-neutral-900">
                            Curated for <span className="text-[var(--color-primary)]">Excellence</span>
                        </h2>
                    </div>
                    <Link
                        href="/products"
                        className="hidden md:flex items-center gap-2 text-neutral-900 font-bold hover:text-[var(--color-secondary)] transition-colors"
                    >
                        View All Products <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className={`group relative rounded-3xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 hover:shadow-2xl transition-all duration-500 ${product.size}`}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Clean White Overlay on Hover */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 shadow-sm ${product.category === 'Bestseller' ? 'bg-[var(--color-primary)] text-black' :
                                        product.category === 'Trending' ? 'bg-orange-500 text-white' : 'bg-white/90 backdrop-blur-sm text-neutral-900'
                                    }`}>
                                    {product.category}
                                </span>
                                <div className="flex justify-between items-end">
                                    <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-md">
                                        {product.name}
                                    </h3>
                                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-neutral-900 text-white font-bold"
                    >
                        View Catalog
                    </Link>
                </div>
            </div>
        </section>
    );
}
