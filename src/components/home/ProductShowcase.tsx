import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, slugify } from "@/data/products";

interface DisplayProduct {
    id: string;
    name: string;
    slug: string;
    category: string;
    categorySlug: string;
    image: string;
}

const getDisplayProducts = (): DisplayProduct[] => {
    // User requested products 2, 3, 4, 9. Assuming IDs are 'p2', 'p3', 'p4', 'p9'.
    const targetIds = ['p2', 'p3', 'p4', 'p10'];

    return products
        .filter((product) => targetIds.includes(product.id))
        .sort((a, b) => targetIds.indexOf(a.id) - targetIds.indexOf(b.id))
        .map((product) => ({
            id: product.id,
            name: product.name,
            slug: product.slug,
            category: product.category,
            categorySlug: slugify(product.category), // Generate slug for routing
            image: product.image,
        }));
};

export default function ProductShowcase() {
    const displayProducts = getDisplayProducts();

    return (
        <section className="lg:py-20 py-16 " aria-labelledby="gallery-heading">
            <div className="container">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
                    <div className="space-y-5">
                        <h2 id="gallery-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                            Market-Proven <span className="text-secondary">Global Favorites</span>
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-3xl">
                            Our most trusted products for international markets. Premium organic, high-protein foods with proven consumer demand and certified export quality.
                        </p>
                    </div>
                    <Link
                        href="/categories"
                        className="group flex items-center gap-2 font-medium text-neutral-900 hover:text-secondary hover:underline transition-colors"
                    >
                        View Full Catalog
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                    {displayProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/categories/${product.categorySlug}/${product.slug}`}
                            className="group block"
                        >
                            {/* Image Frame */}
                            <div className="relative w-full h-[300px]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </div>

                            {/* Content Below */}
                            <div className="mt-6 flex justify-center items-center">
                                <div className="text-center space-y-4">
                                    <p className="text-lg font-medium text-neutral-900 leading-snug transition-colors text-wrap">
                                        {product.name}
                                    </p>
                                    <button className="bg-secondary text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-secondary/80">
                                        View Product
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
