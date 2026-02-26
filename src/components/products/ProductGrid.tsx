import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
    products: Product[];
    categorySlug?: string;
}

export default function ProductGrid({ products, categorySlug }: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">No products found</h3>
                <p className="text-neutral-600 text-center max-w-md">
                    Try adjusting your filters or search criteria to find what you&apos;re looking for.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} categorySlug={categorySlug} />
            ))}
        </div>
    );
}
