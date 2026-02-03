'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Product } from '@/data/products';
import type { CategoryProductsContentProps } from '@/types/products';
import ProductGrid from '@/components/products/ProductGrid';
import CategoryFilter from '@/components/categories/CategoryFilter';
import { Search, Dot } from 'lucide-react';

export default function CategoryProductsContent({
    categoryProducts,
    categoryName,
    categorySlug,
}: CategoryProductsContentProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
    const [appliedFilters, setAppliedFilters] = useState<Record<string, string[]>>({});
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Generate dynamic filters from category products
    const availableFilters = useMemo(() => {
        const filters: Record<string, Set<string>> = {
            'Dietary Tags': new Set(),
            'Certifications': new Set(),
            'Goals': new Set(),
        };

        categoryProducts.forEach(product => {
            product.dietaryTags.forEach(tag => filters['Dietary Tags'].add(tag));
            product.certifications.forEach(cert => filters['Certifications'].add(cert));
            product.goals.forEach(goal => filters['Goals'].add(goal));
        });

        return Object.fromEntries(
            Object.entries(filters).map(([key, value]) => [key, Array.from(value).sort()])
        );
    }, [categoryProducts]);

    // Toggle filter selection
    const toggleFilter = (category: string, value: string) => {
        setSelectedFilters(prev => {
            const current = prev[category] || [];
            const updated = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value];

            if (updated.length === 0) {
                const { [category]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [category]: updated };
        });
    };

    // Apply filters and close mobile drawer
    const handleApplyFilters = () => {
        setAppliedFilters({ ...selectedFilters });
        setIsMobileFilterOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Reset all filters
    const handleResetFilters = () => {
        setSelectedFilters({});
        setAppliedFilters({});
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Filter products using appliedFilters instead of selectedFilters
    const filteredProducts = useMemo(() => {
        return categoryProducts.filter(product => {
            // Search filter
            if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }

            // Apply selected filters (deferred)
            for (const [filterCat, values] of Object.entries(appliedFilters)) {
                if (values.length === 0) continue;

                let productValues: string[] = [];
                if (filterCat === 'Dietary Tags') productValues = product.dietaryTags;
                else if (filterCat === 'Certifications') productValues = product.certifications;
                else if (filterCat === 'Goals') productValues = product.goals;

                const hasMatch = values.some(v => productValues.includes(v));
                if (!hasMatch) return false;
            }

            return true;
        });
    }, [categoryProducts, searchQuery, appliedFilters]);

    return (
        <div>
            <div className="flex items-start gap-8">
                {/* Desktop Sticky Sidebar */}
                <aside className="hidden lg:block w-72 shrink-0 sticky top-28 overflow-y-auto">
                    <CategoryFilter
                        availableFilters={availableFilters}
                        selectedFilters={selectedFilters}
                        toggleFilter={toggleFilter}
                        resetFilters={handleResetFilters}
                        onApply={handleApplyFilters}
                        className="bg-transparent rounded-xl border border-gray-200 overflow-hidden"
                    />
                </aside>

                {/* Mobile Filter Drawer */}
                <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm h-dvh w-screen"
                        onClick={() => setIsMobileFilterOpen(false)}
                    />

                    {/* Drawer Panel */}
                    <aside
                        className={`absolute inset-y-0 left-0 w-80 max-w-[85vw] h-dvh transform transition-transform duration-300 ease-in-out ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                        <CategoryFilter
                            availableFilters={availableFilters}
                            selectedFilters={selectedFilters}
                            toggleFilter={toggleFilter}
                            resetFilters={handleResetFilters}
                            onApply={handleApplyFilters}
                            onClose={() => setIsMobileFilterOpen(false)}
                            className="h-full shadow-2xl rounded-none"
                        />
                    </aside>
                </div>

                {/* Main Content */}
                <div className="flex-1 h-full min-w-0">
                    {/* Header */}
                    <div className="flex flex-col gap-6 mb-8">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-neutral-900">
                                    {categoryName}
                                </h1>
                                <p className="text-neutral-700 text-lg md:text-xl leading-relaxed">
                                    Explore our {categoryName.toLowerCase()} product range
                                </p>
                            </div>
                        </div>

                        {/* Search & Actions Bar */}
                        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                            {/* Search Input */}
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="text-gray-500 w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full rounded-full py-3 pl-12 pr-4 border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                                    placeholder={`Search in ${categoryName}...`}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Filters/Sort Row */}
                            <div className="flex items-center gap-3">
                                <button
                                    className="lg:hidden flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-neutral-900 ring-1 ring-inset ring-gray-200"
                                    onClick={() => setIsMobileFilterOpen(true)}
                                >
                                    <Search className="w-5 h-5" />
                                    Filters
                                </button>
                            </div>
                        </div>

                        {/* Stats Bar */}
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center text-sm font-semibold text-secondary">
                                {filteredProducts.length} Products Found
                            </span>
                            <Dot size={20} />
                            <span className="text-sm font-semibold text-neutral-900">Showing 1-{filteredProducts.length}</span>
                        </div>
                    </div>

                    <ProductGrid products={filteredProducts} categorySlug={categorySlug} />
                </div>
            </div>
        </div>
    );
}
