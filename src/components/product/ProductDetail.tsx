'use client';

import Breadcrumb from '@/components/product/Breadcrumb';
import ProductGallery from '@/components/product/ProductGallery';
import ProductHeader from '@/components/product/ProductHeader';
import B2BActions from '@/components/product/B2BActions';
import ProductSpecs from '@/components/product/ProductSpecs';
import LogisticsEstimator from '@/components/product/LogisticsEstimator';
import NutritionTable from '@/components/product/NutritionTable';
import CertificationsGrid from '@/components/product/CertificationsGrid';
import SidebarContact from '@/components/product/SidebarContact';
import SimilarProducts from '@/components/product/SimilarProducts';
import type { Product } from '@/data/products';

interface ProductDetailProps {
    product: Product;
    breadcrumbCategory?: string;
}

export default function ProductDetail({ product, breadcrumbCategory }: ProductDetailProps) {
    return (
        <div className="bg-white py-20">
            <main className="container">
                {/* Breadcrumb Navigation */}
                <Breadcrumb
                    productName={product.name}
                    category={breadcrumbCategory || product.category}
                />

                {/* Main Product Section */}
                <div className="flex lg:flex-row flex-col gap-10">
                    {/* Left Column: Images */}
                    <div className="lg:w-3/5 w-full">
                        <ProductGallery product={product} />
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="lg:w-2/5 w-full flex flex-col gap-6">
                        <ProductHeader product={product} />
                        <B2BActions product={product} />
                        <ProductSpecs product={product} />
                        <LogisticsEstimator />
                    </div>
                </div>

                {/* Detailed Info Section */}
                <div className="mt-16 lg:mt-24">
                    {/* Tab Navigation - Static for now */}
                    <div className="border-b border-gray-200 mb-8">
                        <div className="flex gap-8 overflow-x-auto pb-2">
                            <button className=" text-neutral-900 font-bold whitespace-nowrap">
                                Nutritional Facts
                            </button>
                            <button className="border-transparent text-neutral-600 font-medium hover:text-neutral-900 transition-colors whitespace-nowrap">
                                Certifications
                            </button>
                            <button className="border-transparent text-neutral-600 font-medium hover:text-neutral-900 transition-colors whitespace-nowrap">
                                Manufacturing Quality
                            </button>
                            <button className="border-transparent text-neutral-600 font-medium hover:text-neutral-900 transition-colors whitespace-nowrap">
                                Export Logistics
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Main Content Area */}
                        <div className="lg:w-2/3 w-full space-y-8">
                            <NutritionTable product={product} />
                            <CertificationsGrid product={product} />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3 w-full">
                            <SidebarContact />
                        </div>
                    </div>

                    {/* Similar Products */}
                    <SimilarProducts currentProduct={product} />
                </div>
            </main>
        </div>
    );
}
