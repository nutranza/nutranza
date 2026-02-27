'use client';

import { useState } from 'react';
import MainProductSection from '@/components/product/MainProductSection';
import NutritionTable from '@/components/product/NutritionTable';
import IngredientsSection from '@/components/product/IngredientsSection';
import CertificationsGrid from '@/components/product/CertificationsGrid';
import SimilarProducts from '@/components/product/SimilarProducts';
import type { Product } from '@/data/products';

interface ProductDetailProps {
    product: Product;
    breadcrumbCategory?: string;
}

type ActiveTab = 'nutrition' | 'ingredients' | 'certifications';

const tabs: { id: ActiveTab; label: string }[] = [
    { id: 'nutrition', label: 'Nutritional Facts' },
    { id: 'ingredients', label: 'Ingredients & Allergens' },
    { id: 'certifications', label: 'Certifications' },
];

export default function ProductDetail({ product, breadcrumbCategory }: ProductDetailProps) {
    const [activeTab, setActiveTab] = useState<ActiveTab>('nutrition');

    return (
        <main>
            <MainProductSection product={product} breadcrumbCategory={breadcrumbCategory} />

            <section className="bg-[#FEFDF7] lg:pb-20 pb-16">
                <div className="container">
                    {/* Detailed Info Section */}
                    <div>
                        {/* Tab Navigation */}
                        <div className="border-b border-gray-200 mb-8">
                            <div
                                className="flex gap-0 overflow-x-auto"
                                role="tablist"
                                aria-label="Product information tabs"
                            >
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        role="tab"
                                        aria-selected={activeTab === tab.id}
                                        aria-controls={`tabpanel-${tab.id}`}
                                        id={`tab-${tab.id}`}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors duration-200 cursor-pointer ${activeTab === tab.id
                                            ? '' // Active classes controlled by inline style below
                                            : 'border-transparent text-neutral-500 hover:text-neutral-900'
                                            }`}
                                        style={
                                            activeTab === tab.id
                                                ? {
                                                    borderColor: product.themeColor || '#ff660f',
                                                    color: product.themeColor || '#ff660f',
                                                }
                                                : undefined
                                        }
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Panels — full width, no sidebar */}
                        <div
                            id={`tabpanel-${activeTab}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${activeTab}`}
                        >
                            {activeTab === 'nutrition' && (
                                <NutritionTable product={product} />
                            )}
                            {activeTab === 'ingredients' && (
                                <IngredientsSection product={product} />
                            )}
                            {activeTab === 'certifications' && (
                                <CertificationsGrid product={product} />
                            )}
                        </div>

                        {/* Similar Products */}
                        <SimilarProducts currentProduct={product} />
                    </div>
                </div>
            </section>
        </main>
    );
}
