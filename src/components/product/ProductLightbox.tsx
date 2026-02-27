import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    currentIndex: number;
    onIndexChange: (index: number) => void;
    alt: string;
}

export default function ProductLightbox({
    isOpen,
    onClose,
    images,
    currentIndex,
    onIndexChange,
    alt,
}: ProductLightboxProps) {



    const handlePrevious = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    // Handle escape and arrow keys
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose, currentIndex, handlePrevious, handleNext]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors z-[60] cursor-pointer"
                aria-label="Close lightbox"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 z-50 pointer-events-none">
                <button
                    onClick={handlePrevious}
                    className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all pointer-events-auto cursor-pointer"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                </button>
                <button
                    onClick={handleNext}
                    className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all pointer-events-auto cursor-pointer"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                </button>
            </div>

            {/* Image Container */}
            <div
                className="relative w-full h-full flex items-center justify-center p-2 md:p-8"
                onClick={onClose}
            >
                <div className="relative w-full h-full max-w-7xl max-h-screen flex items-center justify-center">
                    <Image
                        src={images[currentIndex]}
                        alt={`${alt} view ${currentIndex + 1}`}
                        fill
                        quality={100}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full text-white/90 text-sm font-medium">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}
