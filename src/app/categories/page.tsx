import { Metadata } from 'next';
import { getCategoriesWithProducts } from '@/data/products';
import CategoriesContent from '@/components/categories/CategoriesContent';

export const metadata: Metadata = {
    title: 'Product Categories | Nutranza Export Catalog',
    description: 'Browse our product categories including Breakfast Cereals, Nut Butters, and more premium health food products for global export.',
};

export default function CategoriesPage() {
    const categories = getCategoriesWithProducts();

    return (
        <div className="bg-white md:py-20 py-16">
            <main className="container">
                <CategoriesContent categories={categories} />
            </main>
        </div>
    );
}
