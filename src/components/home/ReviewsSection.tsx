"use client";

import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import ReviewCard from "./ReviewCard";
import { reviews, Review } from "@/data/reviews";
import { motion, useMotionValue } from "framer-motion";

export default function ReviewsSection() {
    // 1. Optimize Data Stability: Memoize the duplicated array
    const displayReviews = useMemo(() => [...reviews, ...reviews, ...reviews], []);

    const containerRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);

    const handleReady = useCallback(() => setIsReady(true), []);

    return (
        <section
            className="py-20 bg- overflow-hidden relative"
        >
            <div className="container mx-auto px-4 mb-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Loved by <span className="">Thousands</span>
                        </h2>
                    </motion.div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden" ref={containerRef}>
                <div className={`flex select-none cursor-grab active:cursor-grabbing transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
                    <InfiniteDragSlider
                        items={displayReviews}
                        onReady={handleReady}
                    />
                </div>
            </div>
        </section>
    );
}

function InfiniteDragSlider({ items, onReady }: { items: Review[], onReady: () => void }) {
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.scrollWidth;
            setContentWidth(width);

            // 2. "Start in Middle" Strategy
            // We have 3 sets. We want to start at the beginning of Set 2.
            // Set 1: [0 to -width/3]
            // Set 2: [-width/3 to -2*width/3]
            // Set 3: [-2*width/3 to -width]

            const oneSetWidth = width / 3;

            // Initialize Position: Start at the beginning of the second set
            x.set(-oneSetWidth);

            // Set constraints large enough to never hit them before loop triggers
            setConstraints({ left: -width * 2, right: width });

            // Signal ready
            onReady();
        }
    }, [items, onReady, x]);

    useEffect(() => {
        // Infinite loop logic
        const unsubscribe = x.on("change", (latest) => {
            if (contentWidth === 0) return;

            const oneSetWidth = contentWidth / 3;

            // Define Loop Boundaries
            // If we drag RIGHT past the start of Set 2 (into Set 1)...
            // Position: > -oneSetWidth + buffer? No, simpler:
            // The "Middle Zone" (Set 2) is from -oneSetWidth to -2*oneSetWidth.

            // Viewport is at X.
            // If X > 0 (Start of Set 1), wrap to -oneSetWidth (Start of Set 2).
            // Actually, Set 1 and Set 2 are identical. 
            // So if x > 0, we can jump to -oneSetWidth.

            // But we initialized at -oneSetWidth.
            // If we drag RIGHT, x increases (e.g., -900, -800...).
            // If x hits 0, that is the start of Set 1.
            // Visually, 0 is identical to -oneSetWidth.
            // So if x >= 0, set x = -oneSetWidth.

            if (latest >= 0) {
                x.set(-oneSetWidth);
            }
            // If we drag LEFT, x decreases (e.g., -1100, -1200...).
            // If x hits -2 * oneSetWidth (Start of Set 3).
            // Visually, -2*oneSetWidth is identical to -oneSetWidth.
            // So if x <= -2 * oneSetWidth, set x = -oneSetWidth.
            else if (latest <= -2 * oneSetWidth) {
                x.set(-oneSetWidth);
            }
        });

        return () => unsubscribe();
    }, [x, contentWidth]);

    return (
        <motion.div
            ref={containerRef}
            className="flex gap-6 px-4"
            style={{ x }}
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.05}
            dragMomentum={true}
            whileTap={{ cursor: "grabbing" }}
        >
            {items.map((review, idx) => (
                <div key={`${review.id}-${idx}`} className="h-full">
                    <ReviewCard review={review} />
                </div>
            ))}
        </motion.div>
    );
}
