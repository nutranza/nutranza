'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { slugify } from '@/data/products';

interface BreadcrumbProps {
    productName: string;
    category: string;
}

export default function Breadcrumb({ category }: BreadcrumbProps) {
    const categorySlug = slugify(category);

    return (
        <nav className="" aria-label="Breadcrumb">
            <Link
                href={`/categories/${categorySlug}`}
                className="inline-flex items-center gap-2 p-2.5 bg-accent font-bold text-xs text-primary rounded-full transition-colors uppercase focus:outline-none"
            >
                <ChevronLeft size={20} />
                Nutranza {category}
            </Link>
        </nav>
    );
}
