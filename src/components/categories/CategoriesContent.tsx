"use client";
import { useMemo } from 'react';
import type { Category } from '@/types/products';
import CategoryGrid from './CategoryGrid';

interface CategoriesContentProps {
    categories: Category[];
}

export default function CategoriesContent({ categories }: CategoriesContentProps) {
    // Sort alphabetically by default
    const sortedCategories = useMemo(() => {
        return [...categories].sort((a, b) => a.name.localeCompare(b.name));
    }, [categories]);

    return (
        <div className="flex items-start gap-8">
            {/* Main Content */}
            <div className="flex-1 h-full min-w-0">
                {/* Header Section */}
                <div className="flex flex-col gap-8 text-center">                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary">
                        Our <span className='font-black'>Categories</span>
                    </h2>
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-900">
                        Explore our range of premium health food products organized by category to support your healthy lifestyle.
                    </p>
                </div>

                {/* Categories Grid */}
                {sortedCategories.length > 0 ? (
                    <CategoryGrid categories={sortedCategories} />
                ) : (
                    <div className="text-center py-16">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                            No categories found
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
}
