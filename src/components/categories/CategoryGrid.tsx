'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Category } from '@/types/products';

interface CategoryGridProps {
    categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="group h-full flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-primary overflow-hidden transition-all duration-300"
                >
                    {/* Image Section */}
                    {category.image ? (
                        <div className="relative h-96 w-full overflow-hidden">
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    ) : (
                        <div className="relative h-64 w-full bg-secondary/10 flex items-center justify-center">
                            <div className="text-4xl font-bold text-secondary/30">
                                {category.name.charAt(0)}
                            </div>
                        </div>
                    )}

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-xl font-bold font-heading text-neutral-900 leading-tight mb-2">
                            {category.name}
                        </h3>

                        <p className="text-sm font-medium text-neutral-500 mb-5">
                            {category.count} {category.count === 1 ? 'product' : 'products'} available
                        </p>

                        {/* Action */}
                        <div className="mt-auto">
                            <span className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-neutral-900 font-medium hover:bg-primary/80 transition-all duration-300 cursor-pointer">
                                <span>View Category</span>
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
