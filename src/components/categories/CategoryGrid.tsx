'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Category } from '@/types/products';

interface CategoryGridProps {
    categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
    // Styling configurations to cycle through for each category card
    const styleConfigs = [
        {
            bg: 'bg-[linear-gradient(#d4a373,#e6ccb2)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#b08960]'
        },
        {
            bg: 'bg-[linear-gradient(#4a7c59,#68a078)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#366042]'
        },
        {
            bg: 'bg-[linear-gradient(#5471d2,#7da0f2)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#355cdd]'
        },
        {
            bg: 'bg-[linear-gradient(#8d5a41,#b58066)]',
            titleColor: 'text-white',
            buttonBg: 'bg-accent'
        },
        {
            bg: 'bg-[linear-gradient(#d64d56,#f38990)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#eb3c47]'
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {categories.map((category, index) => {
                const config = styleConfigs[index % styleConfigs.length];

                return (
                    <Link
                        key={category.id}
                        href={`/categories/${category.slug}`}
                        className={`group relative ${config.bg} rounded-[2.5rem] px-5 sm:py-10 py-5 flex flex-col items-center justify-between text-center gap-6 focus:outline-none`}
                    >
                        {/* Top Content: Category Name & Count */}
                        <div className="space-y-2 z-10">
                            <h3 className={`text-2xl sm:text-4xl ${config.titleColor}`}>
                                {category.name}
                            </h3>
                            <p className={`text-lg leading-relaxed ${config.titleColor} `}>
                                {category.description}
                            </p>
                        </div>

                        {/* Middle: Floating Image */}
                        <div className="w-full relative flex items-center justify-center">
                            {category.image ? (
                                <div className="relative w-full h-[300px] lg:h-[400px]">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-contain drop-shadow-2xl transition-transform duration-500 ease-out"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-white/10 rounded-3xl m-4">
                                    <div className={`text-6xl font-bold ${config.titleColor} opacity-50`}>
                                        {category.name.charAt(0)}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom: Action Button */}
                        <div className="">
                            <button className={`${config.buttonBg} text-white px-8 py-3 rounded-full font-medium uppercase flex items-center gap-2`}>
                                View Category
                                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
