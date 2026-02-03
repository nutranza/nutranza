import { Product } from '@/data/products';
import { BadgeCentIcon, BadgeCheck, Earth } from 'lucide-react';

interface ProductHeaderProps {
    product: Product;
}

export default function ProductHeader({ product }: ProductHeaderProps) {
    return (
        <div className="space-y-4">
            {/* Stock Status and SKU */}
            <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase rounded">
                    In Stock
                </span>
                {product.sku && (
                    <span className="text-sm text-secondary">SKU: {product.sku}</span>
                )}
            </div>

            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
                {product.name}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <BadgeCheck size={18} className="text-primary" />
                    <span className="text-sm font-medium">Premium Export Quality</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <Earth size={18} className="text-primary" />
                    <span className="text-sm font-medium">Origin: {product.origin}</span>
                </div>
            </div>
        </div>
    );
}
