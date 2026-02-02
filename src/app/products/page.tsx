'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilter from '@/components/products/ProductFilter';
import { Search } from 'lucide-react';

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const toggleFilter = (item: string, current: string[], setFn: (items: string[]) => void) => {
        if (current.includes(item)) {
            setFn(current.filter((i) => i !== item));
        } else {
            setFn([...current, item]);
        }
    };

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Search
            if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }
            // Categories - Strict mapping based on user request
            if (selectedCategories.length > 0) {
                const matchesCategory = selectedCategories.some(cat => {
                    // Logic to map the customized specific labels to actual product data
                    if (cat === 'Peanut butter') return product.subCategory === 'Peanut Butter';
                    if (cat === 'Protein Oats') return product.subCategory === 'Oats' && product.name.toLowerCase().includes('protein');
                    if (cat === 'Muesli') return product.subCategory === 'Muesli' || product.category === 'Muesli';
                    if (cat === 'Shilajit') return product.subCategory === 'Ayurveda' || product.name.toLowerCase().includes('shilajit');
                    if (cat === 'Rice Cake') return product.subCategory === 'Rice Cakes' || product.name.toLowerCase().includes('rice cake');
                    if (cat === 'Protein Bar') return product.subCategory === 'Protein Bars' || product.name.toLowerCase().includes('bar');
                    return false;
                });
                if (!matchesCategory) return false;
            }

            return true;
        });
    }, [searchQuery, selectedCategories]);

    return (
        <div className="min-h-screen bg-white pb-20">
            <main className="flex w-full max-w-[1600px] mx-auto px-4 gap-8">

                {/* Sidebar */}
                <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-100 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:bg-transparent lg:border-0 lg:w-72 lg:block ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="h-full overflow-y-auto lg:h-auto lg:overflow-visible p-4 lg:p-0">
                        <div className="lg:hidden flex justify-end mb-4">
                            <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 text-gray-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <ProductFilter
                            selectedCategories={selectedCategories}
                            toggleCategory={(c) => toggleFilter(c, selectedCategories, setSelectedCategories)}
                        />
                    </div>
                </aside>

                {/* Overlay for mobile filter */}
                {isMobileFilterOpen && (
                    <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsMobileFilterOpen(false)} />
                )}

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-col gap-6 mb-8">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-3xl lg:text-4xl font-heading font-black text-neutral-900 leading-tight tracking-tight">
                                    Export Catalog
                                </h1>
                                <p className="text-gray-500 text-base">
                                    Browse our premium range of health food exports tailored for global markets.
                                </p>
                            </div>
                            <div className="hidden lg:block text-right">
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Global Support</p>
                                <p className="text-sm font-bold text-neutral-900">+91 22 4567 8900</p>
                            </div>
                        </div>

                        {/* Search & Actions Bar */}
                        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                            {/* Search Input */}
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="text-gray-400 w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full rounded-lg border-0 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder-gray-400 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    placeholder="Search by SKU, ingredient, or product name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Filters/Sort Row */}
                            <div className="flex gap-3">
                                <button
                                    className="lg:hidden flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-neutral-900 ring-1 ring-inset ring-gray-200"
                                    onClick={() => setIsMobileFilterOpen(true)}
                                >
                                    <Search className="w-5 h-5" />
                                    Filters
                                </button>

                                <div className="relative flex items-center gap-2 min-w-[180px]">
                                    <span className="text-sm text-gray-500 whitespace-nowrap hidden sm:inline">Sort by:</span>
                                    <select className="block w-full rounded-lg border-0 bg-white py-3 pl-3 pr-8 text-neutral-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 font-bold cursor-pointer">
                                        <option>Popularity</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Newest Arrivals</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Stats Bar */}
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                {filteredProducts.length} Products Found
                            </span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">Showing 1-{filteredProducts.length}</span>
                        </div>
                    </div>

                    <ProductGrid products={filteredProducts} />
                </div>
            </main>
        </div>
    );
}
