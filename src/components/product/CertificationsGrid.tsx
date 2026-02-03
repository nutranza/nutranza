import { Product } from '@/data/products';
import { Leaf, ShieldCheck, Award, Microscope } from 'lucide-react';

interface CertificationsGridProps {
    product: Product;
}

const certificationIcons: Record<string, React.ReactNode> = {
    'FSSAI': <Leaf className="w-10 h-10 text-green-600" />,
    'ISO 22000': <ShieldCheck className="w-10 h-10 text-blue-600" />,
    'ISO 9001': <ShieldCheck className="w-10 h-10 text-blue-600" />,
    'HACCP': <Award className="w-10 h-10 text-orange-500" />,
    'GMP': <Microscope className="w-10 h-10 text-purple-600" />,
    'Vegan Certified': <Leaf className="w-10 h-10 text-green-600" />,
    'Export Quality': <Award className="w-10 h-10 text-orange-500" />,
    'Organic Friendly': <Leaf className="w-10 h-10 text-green-600" />,
    'Halal': <Award className="w-10 h-10 text-purple-600" />,
};

export default function CertificationsGrid({ product }: CertificationsGridProps) {
    return (
        <section className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-neutral-900">Certifications & Compliance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 text-center hover:shadow-md transition-shadow bg-white"
                    >
                        {certificationIcons[cert] || <Award className="w-10 h-10 text-gray-600" />}
                        <span className="text-sm font-bold text-neutral-900">{cert}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
