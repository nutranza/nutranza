'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { Category } from '@/types/products';
import CategoryGrid from './CategoryGrid';
import CategorySidebar from './CategorySidebar';

interface CategoriesContentProps {
    categories: Category[];
}

export default function CategoriesContent({ categories }: CategoriesContentProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Filter and sort categories
    const filteredCategories = useMemo(() => {
        let result = [...categories];

        // Filter by search
        if (searchQuery) {
            result = result.filter(cat =>
                cat.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sort
        if (sortBy === 'name') {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'count') {
            result.sort((a, b) => b.count - a.count);
        }

        return result;
    }, [categories, searchQuery, sortBy]);

    return (
        <div className="flex items-start gap-8">
            {/* Desktop Sticky Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-28 overflow-hidden">
                <CategorySidebar
                    sortBy={sortBy}
                    onSortChange={setSortBy}
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
                    <CategorySidebar
                        sortBy={sortBy}
                        onSortChange={(value) => {
                            setSortBy(value);
                            setIsMobileFilterOpen(false);
                        }}
                        onClose={() => setIsMobileFilterOpen(false)}
                        className="h-full shadow-2xl rounded-none"
                    />
                </aside>
            </div>

            {/* Main Content */}
            <div className="flex-1 h-full min-w-0">
                {/* Header */}
                <div className="flex flex-col gap-6 mb-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-neutral-900">
                            Product Categories
                        </h1>
                        <p className="text-neutral-700 text-lg md:text-xl leading-relaxed">
                            Explore our range of premium health food products organized by category
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="text-gray-500 w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                className="block w-full rounded-full py-3 pl-12 pr-4 border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                                placeholder="Search categories..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Mobile Filter Button */}
                        <div className="flex items-center gap-3">
                            <button
                                className="lg:hidden flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-neutral-900 ring-1 ring-inset ring-gray-200"
                                onClick={() => setIsMobileFilterOpen(true)}
                            >
                                <SlidersHorizontal className="w-5 h-5" />
                                Sort
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-secondary">
                            {filteredCategories.length} {filteredCategories.length === 1 ? 'Category' : 'Categories'} Found
                        </span>
                    </div>
                </div>

                {/* Categories Grid */}
                {filteredCategories.length > 0 ? (
                    <CategoryGrid categories={filteredCategories} />
                ) : (
                    <div className="text-center py-16">
                        <div className="text-gray-400 mb-4">
                            <Search className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                            No categories found
                        </h3>
                        <p className="text-neutral-600 mb-6">
                            Try adjusting your search query
                        </p>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="px-6 py-2 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors"
                            >
                                Clear Search
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
