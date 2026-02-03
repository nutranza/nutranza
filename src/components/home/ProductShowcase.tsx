// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import { products } from "@/data/products";

// interface DisplayProduct {
//     id: string;
//     name: string;
//     slug: string;
//     category: string;
//     image: string;
//     size: string;
// }

// // Map featured products to display grid with custom sizes for masonry layout
// const getDisplayProducts = (): DisplayProduct[] => {
//     const featuredProducts = products.filter((product) => product.featured);

//     // Define custom grid sizes for masonry effect (4 products)
//     const gridSizes = [
//         "col-span-1 md:col-span-2 row-span-2", // Large card
//         "col-span-1 row-span-1",
//         "col-span-1 row-span-1",
//         "col-span-1 md:col-span-2 row-span-1", // Wide card
//     ];

//     return featuredProducts.slice(0, 4).map((product, index) => ({
//         id: product.id,
//         name: product.name,
//         slug: product.slug,
//         category: product.category,
//         image: product.image,
//         size: gridSizes[index] || "col-span-1 row-span-1",
//     }));
// };

// export default function ProductShowcase() {
//     const displayProducts = getDisplayProducts();

//     return (
//         <section className="py-24 bg-white">
//             <div className="container">
//                 <div className="flex flex-col md:flex-row justify-between items-end mb-12">
//                     <div>
//                         <span className="text-secondary font-bold tracking-wider uppercase text-sm">
//                             Our Collection
//                         </span>
//                         <h2 className="mt-2 text-4xl md:text-5xl font-heading font-bold text-neutral-900">
//                             Curated for <span className="text-primary">Excellence</span>
//                         </h2>
//                     </div>
//                     <Link
//                         href="/products"
//                         className="hidden md:flex items-center gap-2 text-neutral-900 font-bold hover:text-secondary transition-colors duration-300"
//                         aria-label="View all products"
//                     >
//                         View All Products <ArrowUpRight className="w-5 h-5" />
//                     </Link>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
//                     {displayProducts.map((product) => (
//                         <Link
//                             key={product.id}
//                             href={`/products/${product.slug}`}
//                             className={`group relative rounded-3xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 hover:shadow-[0_20px_60px_rgb(0,0,0,0.12)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 ${product.size}`}
//                             aria-label={`View ${product.name} in ${product.category} category`}
//                         >
//                             {/* Product Image */}
//                             <div className="absolute inset-0">
//                                 <Image
//                                     src={product.image}
//                                     alt={`${product.name} - Premium ${product.category} product`}
//                                     fill
//                                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                                     loading="lazy"
//                                 />
//                             </div>

//                             {/* Gradient Overlay */}
//                             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

//                             {/* Content */}
//                             <div className="absolute bottom-0 left-0 p-6 w-full">
//                                 {/* Category Badge */}
//                                 <span
//                                     className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-sm transition-transform duration-300 group-hover:scale-105 ${product.category === "Nut Butters"
//                                         ? "bg-primary text-neutral-900"
//                                         : product.category === "Breakfast Cereals"
//                                             ? "bg-secondary text-white"
//                                             : "bg-white/90 backdrop-blur-sm text-neutral-900"
//                                         }`}
//                                 >
//                                     {product.category}
//                                 </span>

//                                 {/* Product Name and Arrow */}
//                                 <div className="flex justify-between items-end gap-4">
//                                     <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
//                                         {product.name}
//                                     </h3>
//                                     <div
//                                         className="shrink-0 w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
//                                         aria-hidden="true"
//                                     >
//                                         <ArrowUpRight className="w-5 h-5" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>

//                 {/* Mobile View All Button */}
//                 <div className="mt-10 text-center md:hidden">
//                     <Link
//                         href="/products"
//                         className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-colors duration-300"
//                     >
//                         View Catalog
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// }



import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

interface DisplayProduct {
    id: string;
    name: string;
    slug: string;
    category: string;
    image: string;
}

// Get first 4 featured products for display
const getDisplayProducts = (): DisplayProduct[] => {
    const featuredProducts = products.filter((product) => product.featured);

    return featuredProducts.slice(0, 4).map((product) => ({
        id: product.id,
        name: product.name,
        slug: product.slug,
        category: product.category,
        image: product.image,
    }));
};

export default function ProductShowcase() {
    const displayProducts = getDisplayProducts();

    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">
                            Our Collection
                        </span>
                        <h2 className="mt-2 text-4xl md:text-5xl font-heading font-bold text-neutral-900">
                            Curated for <span className="text-primary">Excellence</span>
                        </h2>
                    </div>
                    <Link
                        href="/products"
                        className="hidden md:flex items-center gap-2 text-neutral-900 font-bold hover:text-secondary transition-colors duration-300"
                        aria-label="View all products"
                    >
                        View All Products <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="group relative rounded-3xl overflow-hidden bg-white border border-neutral-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 aspect-square"
                            aria-label={`View ${product.name} in ${product.category} category`}
                        >
                            {/* Product Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={product.image}
                                    alt={`${product.name} - Premium ${product.category} product`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                {/* Category Badge */}
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-sm transition-transform duration-300 group-hover:scale-105 ${product.category === "Nut Butters"
                                        ? "bg-primary text-neutral-900"
                                        : product.category === "Breakfast Cereals"
                                            ? "bg-secondary text-white"
                                            : "bg-white/90 backdrop-blur-sm text-neutral-900"
                                        }`}
                                >
                                    {product.category}
                                </span>

                                {/* Product Name and Arrow */}
                                <div className="flex justify-between items-end gap-4">
                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                        {product.name}
                                    </h3>
                                    <div
                                        className="shrink-0 w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                                        aria-hidden="true"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-10 text-center md:hidden">
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-colors duration-300"
                    >
                        View Catalog
                    </Link>
                </div>
            </div>
        </section>
    );
}
