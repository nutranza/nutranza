'use client';

import Image from 'next/image';
import { Product } from '@/data/products';
import { ArrowRight, Globe, Heart } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // Extract top 3 nutrition facts for the grid
    const nutritionEntries = Object.entries(product.nutrition).slice(0, 3);

    return (
        <div className="group h-full flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-primary overflow-hidden transition-all duration-300 ">
            {/* Image Section */}
            <div className="relative h-full w-full overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-cover group-hover:scale-105 transition-all duration-300"
                />

                {/* Featured / Dietary Badge */}
                <div className="absolute top-3 right-3 flex gap-1 z-10">
                    {product.featured && (
                        <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-neutral-900 shadow-xs">
                            Best Seller
                        </div>
                    )}
                    {!product.featured && product.dietaryTags[0] && (
                        <div className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-neutral-700 shadow-xs border border-gray-100">
                            {product.dietaryTags[0]}
                        </div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-5">
                <div className="mb-1 flex justify-between items-start">
                    <h3 className="text-lg font-bold font-heading text-neutral-900 leading-tight">
                        {product.name}
                    </h3>
                </div>

                <p className="mb-4 text-sm font-medium text-neutral-500 truncate">
                    {product.specs.netWeight}, {product.specs.form}
                </p>

                {/* Nutrition Grid */}
                <div className="mb-5 grid grid-cols-3 gap-2 rounded-lg bg-soft-bg p-2 text-center border border-gray-100">
                    {nutritionEntries.map(([key, value], index) => (
                        <div key={key} className={`${index === 1 ? 'border-x border-gray-200' : ''}`}>
                            <div className="text-xs font-semibold text-secondary">{key}</div>
                            <div className="text-sm font-semibold text-neutral-900 mt-1">{value}</div>
                        </div>
                    ))}
                    {nutritionEntries.length === 0 && (
                        <div className="col-span-3 text-xs text-gray-400 py-2">Specs available on request</div>
                    )}
                </div>

                {/* Action */}
                <div className="mt-auto">
                    <button className="w-full inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-neutral-900 font-medium text-lg hover:bg-primary/80 transition-all duration-300 cursor-pointer">
                        <span>Request Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
