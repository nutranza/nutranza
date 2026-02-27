import NutritionTable from '@/components/product/NutritionTable';
import type { Product } from '@/data/products';
import WaveDecoration from '@/components/ui/WaveDecoration';

interface ProductDetailedInfoProps {
    product: Product;
}
export default function ProductDetailedInfo({ product }: ProductDetailedInfoProps) {
    const bgClass = product.colorConfig?.bg || 'bg-[#FEFDF7]';

    // Extract hex colors from the gradient string for precise wave matching
    const hexMatch = bgClass.match(/#[0-9a-fA-F]{3,6}/g);
    const startColor = hexMatch?.[0] || '#FEFDF7';
    const endColor = hexMatch?.[hexMatch.length - 1] || '#FEFDF7';

    return (
        <section className={` overflow-hidden`}>
            {/* Top Wave: Transition from MainProductSection (#EBE6DE) */}
            <WaveDecoration
                position="top"
                color="text-current"
                style={{ color: startColor }}
                className="bg-[#EBE6DE]"
            />

            <div className={`${bgClass} relative z-10 -my-0.5 lg:py-20 py-16`}>
                <div className="container">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white text-center">
                            <span className="font-black">The Powerful Natural</span><br className="sm:block hidden" />
                            <span>Ingredient Blend</span>
                        </h2>
                    </div>
                    <div className="max-w-5xl mx-auto mt-16">
                        <NutritionTable product={product} />
                    </div>
                </div>
            </div>

            {/* Bottom Wave: Transition to Footer (#EBE6DE) */}
            <WaveDecoration
                position="bottom"
                color="text-current"
                style={{ color: endColor }}
                className="bg-[#EBE6DE]"
            />
        </section>
    );
}
