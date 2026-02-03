import { Product } from '@/data/products';

interface NutritionTableProps {
    product: Product;
}

export default function NutritionTable({ product }: NutritionTableProps) {
    const nutritionEntries = Object.entries(product.nutrition).filter(([_, value]) => value);

    return (
        <section>
            <h2 className="text-xl font-bold mb-4 text-neutral-900">Nutritional Information</h2>
            <div className="overflow-hidden rounded-xl border border-primary/50">
                <table className="w-full text-sm text-left">
                    <thead className="bg-primary/10 text-primary font-semibold border-b border-primary/50">
                        <tr>
                            <th className="px-6 py-3">Component</th>
                            <th className="px-6 py-3">Per 100g</th>
                            <th className="px-6 py-3">% Daily Value*</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {nutritionEntries.slice(0, 6).map(([key, value]) => (
                            <tr key={key} className="text-neutral-900">
                                <td className="px-6 py-3">{key}</td>
                                <td className="px-6 py-3">{value}</td>
                                <td className="px-6 py-3">-</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-2 text-xs text-neutral-700">
                * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be
                higher or lower depending on your calorie needs.
            </p>
        </section>
    );
}
