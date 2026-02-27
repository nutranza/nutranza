import Link from 'next/link';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

interface SimilarProductsProps {
    currentProduct: Product;
}

export default function SimilarProducts({ currentProduct }: SimilarProductsProps) {
    // Get similar products from the same category
    const similarProducts = products
        .filter(
            (p) =>
                p.id !== currentProduct.id &&
                (p.category === currentProduct.category ||
                    p.subCategory === currentProduct.subCategory)
        )
        .slice(0, 3);

    if (similarProducts.length === 0) {
        return null;
    }

    return (
        <div className="mt-20 border-t border-gray-200 pt-10">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-secondary border-l-4 border-secondary pl-3">
                    Similar Products
                </h2>
                <Link
                    href="/products"
                    className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-secondary/20 transition-colors"
                >
                    View All
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
