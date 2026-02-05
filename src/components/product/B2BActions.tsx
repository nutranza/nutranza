import { Product } from '@/data/products';
import { SendHorizonal } from 'lucide-react';

interface B2BActionsProps {
    product: Product;
}

export default function B2BActions({ product }: B2BActionsProps) {
    return (
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            {/* MOQ Display */}
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm text-primary font-medium">Min. Order Quantity:</span>
                <span className="text-lg font-semibold text-neutral-900">{product.specs.moq}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-neutral-900 font-medium hover:bg-primary/80 transition-all duration-300 cursor-pointer">
                    <span>Request Inquiry</span>
                    <SendHorizonal className="w-5 h-5" />
                </button>
                <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-secondary bg-gray-50 text-secondary font-medium hover:bg-white transition-all duration-300 cursor-pointer">
                    Request Sample
                </button>
            </div>

            {/* Response Time Message */}
            <div className="mt-4 text-sm text-center text-neutral-900">
                Typically responds within 24 hours. B2B Verified Supplier.
            </div>
        </div>
    );
}
