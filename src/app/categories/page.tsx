import { Metadata } from 'next';
import { getCategoriesWithProducts } from '@/data/products';
import CategoriesContent from '@/components/categories/CategoriesContent';
import WaveDecoration from '@/components/ui/WaveDecoration';

export const metadata: Metadata = {
    title: 'Product Categories | Nutranza Export Catalog',
    description: 'Browse our product categories including Breakfast Cereals, Nut Butters, and more premium health food products for global export.',
};

export default function CategoriesPage() {
    const categories = getCategoriesWithProducts();

    return (
        <main>
            <section className="bg-[#FEFDF7] sm:pt-36 pt-32 lg:pb-20 pb-16 relative z-10 -my-0.5">
                <div className="container">
                    <CategoriesContent categories={categories} />
                </div>
            </section>

            {/* Wave Decoration connecting to Footer */}
            <WaveDecoration
                position="bottom"
                color="text-[#FEFDF7]"
                className="bg-[#EBE6DE]"
            />
        </main>
    );
}
