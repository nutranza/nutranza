'use client';

import { Check, ChevronLeft } from 'lucide-react';
import type { FilterSidebarProps, FilterSection } from '@/types/filter';

// Sub-component for rendering individual filter sections
const FilterSectionRenderer = ({ section }: { section: FilterSection }) => {
    const { title, type, items, selectedItems, onToggle } = section;

    return (
        <div className="pb-6 last:pb-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
                {title}
            </h3>
            <div className="space-y-2">
                {items.map((item) => (
                    <label key={item.value} className="flex items-center gap-3 cursor-pointer group">
                        {type === 'checkbox' ? (
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    className="peer appearance-none h-5 w-5 rounded border border-gray-300 checked:bg-primary checked:border-primary transition-all"
                                    checked={selectedItems.includes(item.value)}
                                    onChange={() => onToggle(item.value)}
                                />
                                <Check className="absolute w-3.5 h-3.5 text-neutral-900 pointer-events-none hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold" strokeWidth={3} />
                            </div>
                        ) : (
                            <input
                                type="radio"
                                name={section.id}
                                value={item.value}
                                checked={selectedItems.includes(item.value)}
                                onChange={() => onToggle(item.value)}
                                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary focus:ring-2"
                            />
                        )}
                        <span className={`text-sm font-medium transition-colors ${selectedItems.includes(item.value)
                            ? 'text-neutral-900'
                            : 'text-neutral-600 group-hover:text-primary'
                            }`}>
                            {item.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default function FilterSidebar({
    title = 'Filters',
    sections,
    onReset,
    onApply,
    onClose,
    className = '',
    showFooter = true,
    showHeader = true,
}: FilterSidebarProps) {
    return (
        <div className={`bg-white flex flex-col ${className}`}>
            {/* Header */}
            {showHeader && (
                <div className="flex items-center justify-between p-4 border-b border-gray-200 shrink-0">
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="lg:hidden p-1 -ml-1 text-neutral-900 hover:text-secondary transition-colors cursor-pointer"
                            aria-label="Close filters"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}

                    <h3 className="text-xl font-bold text-neutral-900">{title}</h3>

                    <div className="flex items-center gap-3">
                        {onReset && (
                            <button
                                onClick={onReset}
                                className="text-sm font-medium text-white bg-secondary hover:bg-secondary/80 rounded-full px-4 py-1 transition-colors cursor-pointer"
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto min-h-0 p-4">
                {sections.map((section) => (
                    <FilterSectionRenderer key={section.id} section={section} />
                ))}
            </div>

            {/* Footer */}
            {showFooter && onApply && (
                <div className="flex flex-col gap-3 p-4 border-t border-gray-200 shrink-0 mt-auto bg-white">
                    <button
                        onClick={onApply}
                        className="w-full inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-neutral-900 font-medium hover:bg-primary/80 transition-all duration-300 cursor-pointer"
                    >
                        View Results
                    </button>
                </div>
            )}
        </div>
    );
}
