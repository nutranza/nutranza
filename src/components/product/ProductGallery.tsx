'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import { Product } from '@/data/products';
import ProductLightbox from './ProductLightbox';

interface ProductGalleryProps {
    product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
    const images = product.images || [product.image];
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center rounded-2xl overflow-hidden relative group border border-gray-200 bg-gray-50/50">
                <Image
                    src={images[selectedImageIndex]}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="max-h-full w-auto object-contain p-4 md:p-8 cursor-zoom-in hover:scale-105 transition-transform duration-500"
                    priority
                    onClick={() => setIsLightboxOpen(true)}
                />
                {/* Zoom Button Overlay */}
                <div className="absolute bottom-4 right-4">
                    <button
                        onClick={() => setIsLightboxOpen(true)}
                        className="bg-white/90 backdrop-blur text-gray-900 p-2 rounded-lg shadow-sm hover:bg-white transition-all hover:scale-110 active:scale-95"
                        aria-label="Zoom image"
                    >
                        <ZoomIn className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide p-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`shrink-0 w-24 h-24 rounded-lg overflow-hidden relative transition-all cursor-pointer focus:outline-none ${selectedImageIndex === index
                            ? 'border-2 border-secondary ring-2 ring-secondary/20'
                            : 'border border-gray-200 opacity-70 hover:opacity-100 '
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`${product.name} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {isLightboxOpen && (
                <ProductLightbox
                    isOpen={isLightboxOpen}
                    onClose={() => setIsLightboxOpen(false)}
                    image={images[selectedImageIndex]}
                    alt={product.name}
                />
            )}
        </div>
    );
}
