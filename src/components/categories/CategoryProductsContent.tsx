'use client';

import { useMemo } from 'react';
import type { CategoryProductsContentProps } from '@/types/products';
import ProductGrid from '@/components/products/ProductGrid';

export default function CategoryProductsContent({
    categoryProducts,
    categoryName,
    categorySlug,
}: CategoryProductsContentProps) {
    // Sort products alphabetically by default
    const sortedProducts = useMemo(() => {
        return [...categoryProducts].sort((a, b) => a.name.localeCompare(b.name));
    }, [categoryProducts]);

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col gap-8 text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary">
                    Our <span className="font-black">{categoryName}</span>
                </h2>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-900">
                    Explore our {categoryName.toLowerCase()} product range
                </p>
            </div>

            <ProductGrid products={sortedProducts} categorySlug={categorySlug} />
        </div>
    );
}
