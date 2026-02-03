'use client';

import FilterSidebar from '@/components/common/FilterSidebar';
import type { FilterSection } from '@/types/filter';

interface CategorySidebarProps {
    sortBy: string;
    onSortChange: (sort: string) => void;
    onClose?: () => void;
    className?: string;
}

export default function CategorySidebar({ sortBy, onSortChange, onClose, className = '' }: CategorySidebarProps) {
    // Convert to FilterSection configuration
    const sections: FilterSection[] = [
        {
            id: 'sort',
            title: 'Sort By',
            type: 'radio',
            items: [
                { value: 'name', label: 'Name (A-Z)' },
                { value: 'count', label: 'Product Count (High to Low)' }
            ],
            selectedItems: [sortBy],
            onToggle: onSortChange
        }
    ];

    return (
        <FilterSidebar
            title="Sort Options"
            sections={sections}
            showFooter={false}
            showHeader={true}
            onClose={onClose}
            className={className}
        />
    );
}
