'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/data/products';
import ProductLightbox from './ProductLightbox';

interface ProductGalleryProps {
    product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
    const images = product.images || [product.image];
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center rounded-2xl overflow-hidden relative group bg-gray-50/50">
                <Image
                    src={images[selectedImageIndex]}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="max-h-full w-auto object-contain p-4 md:p-8 cursor-pointer transition-transform duration-500 group-hover:scale-105"
                    priority
                    onClick={() => setIsLightboxOpen(true)}
                />

                {/* Navigation Arrows */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                    <button
                        onClick={handlePrevious}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-sm text-gray-800 hover:bg-white transition-all duration-300 pointer-events-auto -translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 cursor-pointer"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-sm text-gray-800 hover:bg-white transition-all duration-300 pointer-events-auto translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 cursor-pointer"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Zoom Button Overlay */}
                <div className="absolute bottom-4 right-4 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    <button
                        onClick={() => setIsLightboxOpen(true)}
                        className="bg-white/90 backdrop-blur text-gray-900 p-2.5 rounded-full shadow-lg hover:bg-white transition-colors cursor-pointer"
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
                            ? 'border-2 border-primary'
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
                    images={images}
                    currentIndex={selectedImageIndex}
                    onIndexChange={setSelectedImageIndex}
                    alt={product.name}
                />
            )}
        </div>
    );
}
