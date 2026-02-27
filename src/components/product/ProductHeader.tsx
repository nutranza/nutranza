import { Product } from '@/data/products';
import Breadcrumb from '@/components/product/Breadcrumb';

interface ProductHeaderProps {
    product: Product;
    breadcrumbCategory?: string;
}

export default function ProductHeader({ product, breadcrumbCategory }: ProductHeaderProps) {
    return (
        <div className="space-y-5">
            <Breadcrumb
                productName={product.name}
                category={breadcrumbCategory || product.category}
            />

            {/* Product Title */}
            <h1
                className="text-3xl md:text-4xl font-bold transition-colors duration-300"
                style={{ color: product.themeColor || '#171717' }}
            >
                {product.name}
            </h1>

            {/* Description */}
            {product.description && (
                <p className="text-neutral-900 text-lg font-medium leading-relaxed">
                    {product.description}
                </p>
            )}

            {/* Size */}
            {product.specs.netWeight && (
                <div className="flex items-center gap-2">
                    <span className="font-medium"
                        style={{ color: product.themeColor }}>Net Weight:</span>
                    <p className={` bg-white font-bold px-6 py-2 border-2 border-${product.themeColor} rounded-full`}
                        style={{ color: product.themeColor }}>
                        {product.specs.netWeight}
                    </p>
                </div>
            )}

            {/* Product Tags */}
            {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                    {product.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-1.5 bg-primary text-white font-roca font-bold rounded-full border-2 border-transparent hover:border-primary hover:bg-white hover:text-primary transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Key Benefits with Icons */}
            {product.keyBenefits && product.keyBenefits.length > 0 && (
                <div className="bg-white rounded-2xl p-6 max-w-lg">
                    <h3 className="text-primary font-bold text-sm mb-4">Benefits</h3>
                    <div className="space-y-2">
                        {product.keyBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span>{benefit.icon}</span>
                                <span className="text-primary font-medium">{benefit.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}


            {/* Origin & Quality Badges */}
            {/* <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <BadgeCheck size={18} className="text-primary" />
                    <span className="text-sm font-medium">Premium Export Quality</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <Earth size={18} className="text-primary" />
                    <span className="text-sm font-medium">Origin: {product.origin}</span>
                </div>
            </div> */}
        </div>
    );
}
