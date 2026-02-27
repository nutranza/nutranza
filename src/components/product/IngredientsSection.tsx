import { TriangleAlert } from 'lucide-react';
import { Product } from '@/data/products';

interface IngredientsSectionProps {
    product: Product;
}

export default function IngredientsSection({ product }: IngredientsSectionProps) {
    return (
        <section className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900">Ingredients &amp; Allergens</h2>

            {/* Ingredients Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Full Ingredient List
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                    {product.ingredients}
                </p>
            </div>

            {/* Allergen Warning Banner */}
            {product.allergenInfo && (
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <TriangleAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-amber-800">Allergen Information</p>
                        <p className="text-sm text-amber-700 mt-0.5">{product.allergenInfo}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
