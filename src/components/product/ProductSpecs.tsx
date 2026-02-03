import { Product } from '@/data/products';
import { Download } from 'lucide-react';

interface ProductSpecsProps {
    product: Product;
}

export default function ProductSpecs({ product }: ProductSpecsProps) {
    const specs = [
        { label: 'HS Code', value: product.specs.hsCode || 'N/A' },
        { label: 'Shelf Life', value: product.specs.shelfLife },
        { label: 'Net Weight', value: product.specs.netWeight || 'N/A' },
        { label: 'Case Pack', value: product.specs.casePack || 'N/A' }
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-lg mb-4 text-neutral-900">At a Glance</h3>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {specs.map((spec, index) => (
                    <div key={index}>
                        <p className="text-xs text-primary uppercase tracking-wider">{spec.label}</p>
                        <p className="font-medium text-neutral-900">{spec.value}</p>
                    </div>
                ))}
            </div>

            {/* Download Button */}
            <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                <button className="w-full flex items-center justify-center gap-2 text-primary font-semibold hover:underline">
                    <Download className="w-5 h-5" />
                    Download Spec Sheet (PDF)
                </button>
            </div>
        </div>
    );
}
