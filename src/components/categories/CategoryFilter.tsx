'use client';

import FilterSidebar from '@/components/common/FilterSidebar';
import type { FilterSection } from '@/types/filter';

interface CategoryFilterProps {
    availableFilters: Record<string, string[]>;
    selectedFilters: Record<string, string[]>;
    toggleFilter: (category: string, value: string) => void;
    resetFilters: () => void;
    onApply: () => void;
    onClose?: () => void;
    className?: string;
}

export default function CategoryFilter({
    availableFilters,
    selectedFilters,
    toggleFilter,
    resetFilters,
    onApply,
    onClose,
    className = '',
}: CategoryFilterProps) {
    // Convert to FilterSection configuration
    const sections: FilterSection[] = Object.entries(availableFilters)
        .filter(([, values]) => values.length > 0)
        .map(([filterName, values]) => ({
            id: filterName.toLowerCase().replace(/\s+/g, '-'),
            title: filterName,
            type: 'checkbox' as const,
            items: values.map(value => ({
                value,
                label: value
            })),
            selectedItems: selectedFilters[filterName] || [],
            onToggle: (value: string) => toggleFilter(filterName, value)
        }));

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
