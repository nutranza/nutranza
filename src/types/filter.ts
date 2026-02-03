export interface FilterItem {
    value: string;
    label: string;
}

export interface FilterSection {
    id: string;
    title: string;
    type: 'checkbox' | 'radio';
    items: FilterItem[];
    selectedItems: string[];
    onToggle: (item: string) => void;
}

export interface FilterSidebarProps {
    title?: string;
    sections: FilterSection[];
    onReset?: () => void;
    onApply?: () => void;
    onClose?: () => void;
    className?: string;
    showFooter?: boolean;
    showHeader?: boolean;
}
