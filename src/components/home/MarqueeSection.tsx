import React from 'react';
import Marquee from '@/components/ui/Marquee';

const ATTR_TAGS = [
    { text: 'High fiber', className: 'bg-pink-100 text-pink-900' },
    { text: 'Prebiotic fiber', className: 'bg-orange-400 text-white' },
    { text: 'Non-GMO', className: 'bg-red-600 text-white' },
    { text: 'No artificial sweeteners', className: 'bg-rose-400 text-white' },
    { text: 'Gluten free', className: 'bg-amber-700 text-white' },
    { text: 'No added sugar', className: 'bg-orange-100 text-orange-900' },
    { text: 'High protein', className: 'bg-orange-600 text-white' },
    { text: 'Lactose free', className: 'bg-amber-900 text-white' },
];

const PRODUCT_TAGS = [
    { text: 'Peanut Butter', className: 'bg-yellow-400 text-yellow-900' },
    { text: 'Protein Oats', className: 'bg-emerald-600 text-white' },
    { text: 'Muesli', className: 'bg-amber-100 text-amber-900' },
    { text: 'Shilajit', className: 'bg-slate-800 text-white' },
    { text: 'Rice Cakes', className: 'bg-stone-200 text-stone-800' },
    { text: 'Protein Bars', className: 'bg-orange-500 text-white' },
    { text: 'Global Export', className: 'bg-blue-600 text-white' },
    { text: 'B2B', className: 'bg-indigo-500 text-white' },
];

const Tag = ({ text, className }: { text: string; className: string }) => (
    <span
        className={`px-7 py-2.5 rounded-full font-roca font-bold sm:text-xl text-base whitespace-nowrap ${className}`}
    >
        {text}
    </span>
);

const MarqueeSection = () => {
    return (
        <section className="w-full pt-12 bg-[#FEFDF7] overflow-hidden">
            <div className="flex flex-col">
                {/* Row 1: Right to Left (Standard) */}
                <Marquee direction="left" speed={150}>
                    {[...ATTR_TAGS, ...ATTR_TAGS, ...ATTR_TAGS, ...ATTR_TAGS].map((tag, index) => (
                        <Tag key={`attr-${index}`} text={tag.text} className={tag.className} />
                    ))}
                </Marquee>

                {/* Row 2: Left to Right */}
                <Marquee direction="right" speed={150}>
                    {[...PRODUCT_TAGS, ...PRODUCT_TAGS, ...PRODUCT_TAGS, ...PRODUCT_TAGS].map((tag, index) => (
                        <Tag key={`prod-${index}`} text={tag.text} className={tag.className} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default MarqueeSection;
