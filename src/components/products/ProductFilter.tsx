'use client';

import FilterSidebar from '@/components/common/FilterSidebar';
import type { FilterSection } from '@/types/filter';
import { filterCategories } from '@/data/products';

interface ProductFilterProps {
    selectedCategories: string[];
    toggleCategory: (category: string) => void;
    resetFilters: () => void;
    onApply: () => void;
    onClose?: () => void;
    className?: string;
}

export default function ProductFilter({
    selectedCategories,
    toggleCategory,
    resetFilters,
    onApply,
    onClose,
    className = '',
}: ProductFilterProps) {
    // Convert to FilterSection configuration
    const sections: FilterSection[] = [
        {
            id: 'category',
            title: 'Category',
            type: 'checkbox',
            items: filterCategories.map(cat => ({
                value: cat,
                label: cat
            })),
            selectedItems: selectedCategories,
            onToggle: toggleCategory
        }
    ];

    return (
        <FilterSidebar
            title="Filters"
            sections={sections}
            onReset={resetFilters}
            onApply={onApply}
            onClose={onClose}
            className={className}
            showFooter={true}
            showHeader={true}
        />
    );
}
