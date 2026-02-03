'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ProductLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    image: string;
    alt: string;
}

export default function ProductLightbox({
    isOpen,
    onClose,
    image,
    alt,
}: ProductLightboxProps) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);



    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed || !imageRef.current) return;

        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setPosition({ x, y });
    };

    const toggleZoom = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsZoomed(!isZoomed);
    }

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors z-50 cursor-pointer"
                aria-label="Close lightbox"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div
                className={`relative w-full h-full flex items-center justify-center p-4 overflow-hidden cursor-zoom-in ${isZoomed ? 'cursor-zoom-out' : ''
                    }`}
                onClick={toggleZoom}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setIsZoomed(false)}
                ref={imageRef}
            >
                <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        quality={100}
                        className={`object-contain transition-transform duration-200 ease-out ${isZoomed ? 'scale-[2]' : 'scale-100'
                            }`}
                        style={
                            isZoomed
                                ? {
                                    transformOrigin: `${position.x}% ${position.y}%`,
                                }
                                : undefined
                        }
                        priority
                    />
                </div>

                {/* Hint / Controls */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 pointer-events-none">
                    {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                    <span className="text-sm font-medium">
                        {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
                    </span>
                </div>
            </div>
        </div>
    );
}
