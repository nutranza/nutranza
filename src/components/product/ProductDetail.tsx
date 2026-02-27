'use client';

import MainProductSection from '@/components/product/MainProductSection';
import ProductDetailedInfo from '@/components/product/ProductDetailedInfo';
import type { Product } from '@/data/products';

interface ProductDetailProps {
    product: Product;
    breadcrumbCategory?: string;
}
export default function ProductDetail({ product, breadcrumbCategory }: ProductDetailProps) {
    return (
        <main>
            <MainProductSection product={product} breadcrumbCategory={breadcrumbCategory} />

            <ProductDetailedInfo product={product} />
        </main>
    );
}
