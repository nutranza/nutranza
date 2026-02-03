'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { slugify } from '@/data/products';

interface BreadcrumbProps {
    productName: string;
    category: string;
}

export default function Breadcrumb({ productName, category }: BreadcrumbProps) {
    const pathname = usePathname();
    const categorySlug = slugify(category);

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Categories', href: '/categories' },
        { label: category, href: `/categories/${categorySlug}` },
        { label: productName, href: pathname, active: true }
    ];

    return (
        <nav className="flex flex-wrap items-center gap-2 mb-8" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2 text-neutral-900">
                    {index > 0 && <ChevronRight className="w-4 h-4 " />}
                    {crumb.active ? (
                        <span className="font-medium text-secondary">{crumb.label}</span>
                    ) : (
                        <Link
                            href={crumb.href}
                            className="hover:text-secondary transition-colors"
                        >
                            {crumb.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
