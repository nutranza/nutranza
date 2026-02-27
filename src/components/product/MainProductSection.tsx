'use client';

import ProductGallery from '@/components/product/ProductGallery';
import ProductHeader from '@/components/product/ProductHeader';
import type { Product } from '@/data/products';

interface MainProductSectionProps {
    product: Product;
    breadcrumbCategory?: string;
}

export default function MainProductSection({ product, breadcrumbCategory }: MainProductSectionProps) {
    return (
        <section className="bg-[#EBE6DE] sm:pt-36 pt-32 lg:pb-20 pb-16">
            <div className="container">
                <div className="flex lg:flex-row flex-col gap-10">
                    {/* Left Column: Images */}
                    <div className="lg:w-1/2 w-full">
                        <ProductGallery product={product} />
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="lg:w-1/2 w-full flex flex-col gap-6">
                        <ProductHeader product={product} breadcrumbCategory={breadcrumbCategory} />
                    </div>
                </div>
            </div>
        </section>
    );
}
