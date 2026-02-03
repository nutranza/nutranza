'use client';

import { useState, useMemo } from 'react';
import { matchesCategory } from '@/data/products';
import type { Product } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilter from '@/components/products/ProductFilter';
import { Dot, Search } from 'lucide-react';

interface ProductsContentProps {
    initialProducts: Product[];
    allProducts: Product[];
    selectedCategoryFilter: string | null;
}

export default function ProductsContent({
    initialProducts,
    allProducts,
    selectedCategoryFilter
}: ProductsContentProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [appliedCategories, setAppliedCategories] = useState<string[]>([]);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const toggleFilter = (item: string, current: string[], setFn: (items: string[]) => void) => {
        if (current.includes(item)) {
            setFn(current.filter((i) => i !== item));
        } else {
            setFn([...current, item]);
        }
    };

    const handleApplyFilters = () => {
        setAppliedCategories([...selectedCategories]);
        setIsMobileFilterOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleResetFilters = () => {
        setSelectedCategories([]);
        setAppliedCategories([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredProducts = useMemo(() => {
        // Start with products already filtered by URL category (from server)
        const productsToFilter = selectedCategoryFilter
            ? initialProducts
            : allProducts;

        return productsToFilter.filter((product) => {
            // Search filter
            if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }

            // Sidebar category filters (deferred with "Apply" button)
            if (appliedCategories.length > 0) {
                const matchesSidebarCategory = appliedCategories.some(cat => matchesCategory(product, cat));
                if (!matchesSidebarCategory) return false;
            }

            return true;
        });
    }, [searchQuery, appliedCategories, initialProducts, allProducts, selectedCategoryFilter]);

    return (
        <div className='flex items-start gap-8'>
            {/* Desktop Sticky Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-28 overflow-y-auto">
                <ProductFilter
                    selectedCategories={selectedCategories}
                    toggleCategory={(c) => toggleFilter(c, selectedCategories, setSelectedCategories)}
                    resetFilters={handleResetFilters}
                    onApply={handleApplyFilters}
                    className="bg-transparent rounded-xl border border-gray-200 overflow-hidden"
                />
            </aside>

            {/* Mobile Filter Drawer */}
            <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsMobileFilterOpen(false)}
                />

                {/* Drawer Panel */}
                <aside
                    className={`absolute inset-y-0 left-0 w-80 max-w-[85vw] transform transition-transform duration-300 ease-in-out ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <ProductFilter
                        selectedCategories={selectedCategories}
                        toggleCategory={(c) => toggleFilter(c, selectedCategories, setSelectedCategories)}
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
                                {selectedCategoryFilter ? `${selectedCategoryFilter}` : 'Export Catalog'}
                            </h1>
                            <p className="text-neutral-700 text-lg md:text-xl leading-relaxed">
                                {selectedCategoryFilter
                                    ? `Explore our ${selectedCategoryFilter.toLowerCase()} product range`
                                    : 'Browse our premium range of health food exports tailored for global markets.'
                                }
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
                                placeholder="Search by SKU, ingredient, or product name..."
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
                        <span className="inline-flex items-center text-sm font-semibold text-secondary ">
                            {filteredProducts.length} Products Found
                        </span>
                        <Dot size={20} />
                        <span className="text-sm font-semibold text-neutral-900">Showing 1-{filteredProducts.length}</span>
                    </div>
                </div>

                <ProductGrid products={filteredProducts} />
            </div>
        </div>
    );
}
