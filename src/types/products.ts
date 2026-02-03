// Type definitions for product filtering and categories

import type { Product } from '@/data/products';

export interface Category {
    id: string;
    name: string;
    slug: string;
    count: number;
    image?: string;
    icon?: string;
    description?: string;
}

export interface ProductsPageProps {
    searchParams: Promise<{
        category?: string;
        search?: string;
    }>;
}

export interface CategoryCardsProps {
    categories: Category[];
    selectedCategory: string | null;
}

export interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export interface CategoryProductsContentProps {
    categoryProducts: Product[];
    categoryName: string;
    categorySlug: string;
}
