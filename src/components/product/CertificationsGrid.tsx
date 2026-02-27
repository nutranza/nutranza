import { ReactNode } from 'react';
import { Leaf, ShieldCheck, Award, Microscope } from 'lucide-react';
import { Product } from '@/data/products';

interface CertificationsGridProps {
    product: Product;
}

const certificationIcons: Record<string, ReactNode> = {
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

const certificationDescriptions: Record<string, string> = {
    'FSSAI': 'India Food Safety Authority',
    'Export Quality': 'Certified for International Markets',
    'Halal': 'Halal Certified Product',
    'Organic Friendly': 'Made with Organic Ingredients',
    'ISO 22000': 'Food Safety Management System',
    'ISO 9001': 'Quality Management System',
    'HACCP': 'Hazard Analysis Critical Control',
    'GMP': 'Good Manufacturing Practice',
    'Vegan Certified': 'Certified Vegan Product',
};

export default function CertificationsGrid({ product }: CertificationsGridProps) {
    return (
        <section className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900">Certifications &amp; Compliance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="p-5 border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 text-center hover:shadow-md transition-shadow bg-white"
                    >
                        {certificationIcons[cert] ?? <Award className="w-10 h-10 text-gray-500" />}
                        <span className="text-sm font-bold text-neutral-900">{cert}</span>
                        {certificationDescriptions[cert] && (
                            <span className="text-xs text-neutral-500 leading-tight">
                                {certificationDescriptions[cert]}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
