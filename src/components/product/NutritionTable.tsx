import { Product } from '@/data/products';

interface NutritionTableProps {
    product: Product;
}

export default function NutritionTable({ product }: NutritionTableProps) {
    const nutritionEntries = Object.entries(product.nutrition).filter(([, value]) => value);
    const servingSize = product.specs.servingSize;

    return (
        <section className="space-y-3">
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-bold text-neutral-900">Nutritional Information</h2>
                {servingSize && (
                    <span className="text-sm text-neutral-500 shrink-0">
                        Serving Size: <strong className="text-neutral-700">{servingSize}</strong> (Approx. Values)
                    </span>
                )}
            </div>

            <div className="overflow-hidden rounded-xl border border-primary/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-primary/10 text-primary font-semibold border-b border-primary/50">
                            <tr>
                                <th scope="col" className="px-4 py-3 w-1/2">Nutrient</th>
                                <th scope="col" className="px-4 py-3 text-right whitespace-nowrap">Per 100gm</th>
                                {servingSize && (
                                    <th scope="col" className="px-4 py-3 text-right whitespace-nowrap">
                                        Per Serve {servingSize}
                                    </th>
                                )}
                                <th scope="col" className="px-4 py-3 text-right whitespace-nowrap">%RDA*</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {nutritionEntries.map(([key, value], index) => (
                                <tr
                                    key={key}
                                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${index === 0 ? 'font-semibold text-neutral-900' : 'text-neutral-700'}`}
                                >
                                    <td className="px-4 py-2.5">{key}</td>
                                    <td className="px-4 py-2.5 text-right">{value}</td>
                                    {servingSize && (
                                        <td className="px-4 py-2.5 text-right">
                                            {product.nutritionPerServe?.[key] ?? '—'}
                                        </td>
                                    )}
                                    <td className="px-4 py-2.5 text-right">
                                        {product.nutritionRDA?.[key] ?? '—'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="text-xs text-neutral-500">
                *%RDA based on a 2,000 kcal diet. Your daily values may be higher or lower
                depending on your calorie needs.
            </p>
        </section>
    );
}
