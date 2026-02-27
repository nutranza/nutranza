import { Product } from '@/data/products';
import {
    Zap,
    Dumbbell,
    Beef,
    Droplet,
    Wheat,
    Cookie,
    Flame,
    ShieldCheck,
    Waves,
    TriangleAlert
} from 'lucide-react';

interface NutritionTableProps {
    product: Product;
}

const nutrientIcons: Record<string, React.ReactNode> = {
    "Energy": <Zap className="w-5 h-5" />,
    "Protein": <Beef className="w-5 h-5" />,
    "Carbohydrate": <Wheat className="w-5 h-5" />,
    "Dietary Fiber": <Wheat className="w-5 h-5" />,
    "Fiber": <Wheat className="w-5 h-5" />,
    "Total Sugars": <Cookie className="w-5 h-5" />,
    "Added Sugars": <Cookie className="w-5 h-5" />,
    "Total Fats": <Droplet className="w-5 h-5" />,
    "Trans Fat": <Droplet className="w-5 h-5" />,
    "Saturated Fat": <Droplet className="w-5 h-5" />,
    "Sodium": <Waves className="w-5 h-5" />,
    "Cholesterol": <ShieldCheck className="w-5 h-5" />,
    "Iron": <Flame className="w-5 h-5" />,
    "Magnesium": <Dumbbell className="w-5 h-5" />,
};

export default function NutritionTable({ product }: NutritionTableProps) {
    const nutritionEntries = Object.entries(product.nutrition).filter(([, value]) => value);
    const servingSize = product.specs.servingSize;
    const colCount = servingSize ? 4 : 3;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 md:mb-0">Nutritional Information</h2>
                {servingSize && (
                    <span className="text-sm text-white/70 italic">
                        Serving Size: <strong className="text-white">{servingSize}</strong> (Approx. Values)
                    </span>
                )}
            </div>

            <div className="overflow-hidden rounded-[2.5rem] border border-[#EBE6DE] transition-shadow">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[#EBE6DE]">
                                <th scope="col" className="px-6 py-4 w-1/3">
                                    <span className="sm:text-2xl text-xl font-roca font-bold text-white">Nutrient</span>
                                </th>
                                <th scope="col" className="px-6 py-4 text-center border-x border-[#EBE6DE]">
                                    <span className="sm:text-2xl text-xl font-roca font-bold text-white">Per 100gm</span>
                                </th>
                                {servingSize && (
                                    <th scope="col" className="px-6 py-4 text-center border-x border-[#EBE6DE]">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="sm:text-2xl text-xl font-roca font-bold text-white">Per Serve</span>
                                            <span className="sm:text-lg text-base font-bold text-white">({servingSize})</span>
                                        </div>
                                    </th>
                                )}
                                <th scope="col" className="px-6 py-4 text-center border-l border-[#EBE6DE]">
                                    <span className="sm:text-2xl text-xl font-roca font-bold text-white">%RDA*</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EBE6DE]">
                            {nutritionEntries.map(([key, value]) => (
                                <tr key={key} className="transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full border border-[#EBE6DE] flex items-center justify-center text-white shrink-0">
                                                {nutrientIcons[key] || <Zap className="w-5 h-5" />}
                                            </div>
                                            <span className="font-semibold text-white tracking-wide text-base">{key}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center text-white/80 border-x border-[#EBE6DE] text-lg font-medium">
                                        {value}
                                    </td>
                                    {servingSize && (
                                        <td className="px-6 py-4 text-center text-white border-x border-[#EBE6DE] text-xl font-bold">
                                            {product.nutritionPerServe?.[key] ?? '—'}
                                        </td>
                                    )}
                                    <td className="px-6 py-4 text-center text-white/80 border-l border-[#EBE6DE] text-lg font-medium">
                                        {product.nutritionRDA?.[key] ?? '—'}
                                    </td>
                                </tr>
                            ))}

                            {/* Full Ingredient List Row */}
                            {product.ingredients && (
                                <tr className="transition-colors">
                                    <td colSpan={colCount} className="px-6 py-4">
                                        <div className="flex flex-col items-start gap-6">
                                            <div className="flex items-center gap-4 shrink-0 mt-1">
                                                {/* <div className="w-10 h-10 rounded-full border border-[#EBE6DE] flex items-center justify-center text-white shrink-0">
                                                    <Leaf className="w-5 h-5" />
                                                </div> */}
                                                <span className="text-2xl font-roca font-bold text-white whitespace-nowrap">Full Ingredient List</span>
                                            </div>
                                            <div className="flex-1 space-y-4">
                                                <p className="text-lg text-white/80 leading-relaxed font-medium">
                                                    {product.ingredients}
                                                </p>
                                                {product.allergenInfo && (
                                                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 mt-4 max-w-fit">
                                                        <TriangleAlert className="w-5 h-5 text-amber-400 shrink-0" />
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <span className="font-bold text-white block">Allergen Information:</span>
                                                            <span className="text-white/80 leading-relaxed">{product.allergenInfo}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="text-xs text-white/70 uppercase tracking-widest text-center md:text-left">
                *%RDA based on a 2,000 kcal diet. Daily values may vary based on calorie needs.
            </p>
        </div>
    );
}
