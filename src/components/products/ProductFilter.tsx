'use client';

import { filterCategories } from '@/data/products';
import { Filter } from 'lucide-react';



interface FilterSectionProps {
    title: string;
    items: string[];
    selectedItems: string[];
    toggleItem: (item: string) => void;
}

const FilterSection = ({
    title,
    items,
    selectedItems,
    toggleItem
}: FilterSectionProps) => (
    <div className="mb-6 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{title}</h3>
        <div className="space-y-2">
            {items.map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                        <input
                            type="checkbox"
                            className="peer appearance-none h-5 w-5 rounded border border-gray-300 checked:bg-primary checked:border-primary transition-all"
                            checked={selectedItems.includes(item)}
                            onChange={() => toggleItem(item)}
                        />
                        <svg className="absolute w-3.5 h-3.5 text-neutral-900 pointer-events-none hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className={`text-sm font-medium transition-colors ${selectedItems.includes(item) ? 'text-neutral-900' : 'text-gray-600 group-hover:text-primary'}`}>
                        {item}
                    </span>
                </label>
            ))}
        </div>
    </div>
);

export default function ProductFilter({
    selectedCategories,
    toggleCategory,
    className = '',
}: {
    selectedCategories: string[];
    toggleCategory: (category: string) => void;
    className?: string;
}) {

    return (
        <div className={`bg-white rounded-xl border border-soft-border p-6 sticky top-24 ${className}`}>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Filters</h3>
                <button
                    onClick={() => {
                        // Reset logic placeholder
                        // In a real app this would call a passed reset function
                    }}
                    className="text-xs font-medium text-gray-400 hover:text-primary transition-colors"
                >
                    Reset All
                </button>
            </div>

            <FilterSection
                title="Category"
                items={filterCategories}
                selectedItems={selectedCategories}
                toggleItem={toggleCategory}
            />

            {/* Export Options (UI only) */}
            <div className="mb-6 border-b border-gray-100 pb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Export Options</p>
                <div className="space-y-3">
                    <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm font-medium text-gray-700">Express Shipping</span>
                        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none has-checked:bg-primary">
                            <input className="peer sr-only" type="checkbox" />
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 peer-checked:translate-x-6"></span>
                        </div>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm font-medium text-gray-700">Bulk Discounts</span>
                        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none has-checked:bg-primary">
                            <input className="peer sr-only" type="checkbox" defaultChecked />
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 peer-checked:translate-x-6"></span>
                        </div>
                    </label>
                </div>
            </div>

            {/* Download CTA */}
            <div className="pt-2">
                <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-3 px-4 bg-gray-100 text-neutral-900 text-sm font-bold border border-transparent hover:border-gray-300 transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Catalog PDF</span>
                </button>
            </div>
        </div>
    );
}
