'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Product, slugify } from '@/data/products';

interface ProductCardProps {
    product: Product;
    categorySlug?: string;
}

export default function ProductCard({ product, categorySlug }: ProductCardProps) {
    const config = product.colorConfig || {
        bg: 'bg-[linear-gradient(#d4a373,#e6ccb2)]',
        titleColor: 'text-white',
        buttonBg: 'bg-[#b08960]'
    };

    // Determine category slug: either passed explicitly or derived from product
    const finalCategorySlug = categorySlug || slugify(product.category);
    const productUrl = `/categories/${finalCategorySlug}/${product.slug}`;

    return (
        <Link
            href={productUrl}
            className={`group relative ${config.bg} rounded-[2.5rem] px-5 sm:py-10 py-5 flex flex-col items-center justify-between text-center gap-6 focus:outline-none`}
        >
            {/* Top Content: Product Name & Specs */}
            <div className="space-y-2 z-10">
                <h3 className={`text-2xl sm:text-4xl ${config.titleColor}`}>
                    {product.name}
                </h3>
                {/* <p className={`text-lg leading-relaxed ${config.titleColor} `}>
                    {product.specs.netWeight}, {product.specs.form}
                </p> */}
            </div>

            {/* Middle: Floating Image */}
            <div className="w-full relative flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
            </div>

            {/* Bottom: Action Button */}
            <div className="">
                <button className={`${config.buttonBg} text-white px-8 py-3 rounded-full font-medium uppercase flex items-center gap-2`}>
                    View Details
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
            </div>
        </Link>
    );
}
