"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { recipes } from "@/data/recipes";

export default function RecipeSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Auto-rotate images every 5 seconds (but pause when hovering) - Desktop only
    useEffect(() => {
        if (isHovered) return; // Don't start interval when hovering

        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % recipes.length);
        }, 5000);

        // Cleanup interval on unmount or when hover state changes
        return () => clearInterval(intervalId);
    }, [isHovered]);

    // Determine which image to show: hovered index or active index
    const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    const handleMouseEnter = (index: number) => {
        setIsHovered(true);
        setHoveredIndex(index);
        setActiveIndex(index); // Update active index to match hovered
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredIndex(null);
        // Active index remains at the last hovered position
        // Auto-rotation will resume from there
    };

    return (
        <section className="py-16 lg:py-20" aria-labelledby="recipes-heading">
            <div className="container">

                {/* Mobile Horizontal Carousel - Visible on mobile only */}
                <div className="block lg:hidden">
                    {/* Section Header */}
                    <div className="mb-8">
                        <h2 id="recipes-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
                            Elevated, easy-to-make recipes for every occasion.
                        </h2>
                    </div>

                    {/* Horizontal Scroll Container with Peek Effect */}
                    <div className="overflow-x-scroll snap-x snap-mandatory flex gap-4 -mx-4 px-4 scrollbar-hide">
                        {recipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="snap-center shrink-0 w-full"
                            >
                                {/* Recipe Card */}
                                <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
                                    {/* Recipe Image */}
                                    <div className="relative aspect-4/3 w-full">
                                        <Image
                                            src={recipe.image}
                                            alt={recipe.name}
                                            fill
                                            className="object-cover"
                                            sizes="100vw"
                                        />
                                    </div>
                                    {/* Recipe Info */}
                                    <div className="p-4 text-center">
                                        <p className="text-lg font-medium italic text-neutral-900">
                                            {recipe.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Split-screen Layout - Visible on desktop only */}
                <div className="hidden lg:flex flex-col lg:flex-row gap-4">

                    {/* Left Panel: Auto-Rotating Images */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                            {recipes.map((recipe, index) => (
                                <Image
                                    key={recipe.id}
                                    src={recipe.image}
                                    alt={recipe.name}
                                    fill
                                    className={`object-cover transition-opacity duration-1000 ${index === displayIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority={index === 0}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Recipe List with Active State */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        {/* Section Header */}
                        <div className="mb-8">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                Elevated, <span className="text-primary">easy-to-make recipes</span> for every occasion.
                            </h2>
                        </div>

                        {/* Recipe Names List */}
                        <ul className="border-t border-neutral-200">
                            {recipes.map((recipe, index) => (
                                <li
                                    key={recipe.id}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    className={`py-6 border-b border-white text-2xl font-medium transition-colors duration-500 cursor-pointer ${index === displayIndex
                                        ? "text-primary"
                                        : "text-white"
                                        }`}
                                >
                                    {recipe.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
