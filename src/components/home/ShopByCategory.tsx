"use client";
import Image from "next/image";

const categories = [
    {
        name: "Peanut Butter",
        image: "/assets/images/categories/Categories-1.png",
    },
    {
        name: "Supernatural Protein",
        image: "/assets/images/categories/Categories-2.png",
    },
    {
        name: "Super Oats",
        image: "/assets/images/categories/Categories-3.png",
    },
    {
        name: "Super Muesli",
        image: "/assets/images/categories/Categories-4.png",
    },
    {
        name: "Corn Flakes",
        image: "/assets/images/categories/Categories-5.png",
    },
];

export default function ShopByCategory() {
    const bgColors = [
        "bg-[#FFE5EC]", // Pinkish
        "bg-[#E5F0FF]", // Bluish
        "bg-[#E5F7D3]", // Greenish
        "bg-[#FFEAD5]", // Orangish
        "bg-[#EDF7D3]", // Light Greenish
    ];

    return (
        <section className="bg-[#FEFDF7] py-16 lg:py-20 relative overflow-hidden">
            <div className="container relative z-10">
                <div>
                    <h2 className="text-center text-primary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl pb-4 lg:pb-16">
                        Shop by <span className="font-black">Category</span>
                    </h2>

                    {/* Categories - Curved Layout */}
                    <div className="grid grid-flow-col auto-cols-[50%] sm:auto-cols-[42%] md:grid-flow-row md:grid-cols-3 lg:flex lg:justify-center lg:items-end gap-4 gap-y-10 md:gap-x-8 lg:gap-x-4 xl:gap-x-12 xl:min-h-[360px] lg:min-h-[300px] xl:mt-20 mt-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide">
                        {categories.map((category, index) => {
                            // Calculate vertical offset for curve effect
                            // Middle item (index 2) is highest
                            // Outer items (0, 4) are lowest
                            let translateY = "translate-y-0";
                            if (index === 1 || index === 3) translateY = "lg:-translate-y-12 xl:-translate-y-16"; // Responsive offset
                            if (index === 2) translateY = "lg:-translate-y-24 xl:-translate-y-32"; // Responsive offset

                            return (
                                <div
                                    key={category.name}
                                    className={`flex flex-col items-center group cursor-pointer w-full snap-start md:snap-none transition-transform duration-500 ease-out ${translateY}`}
                                >
                                    <div className={`relative w-full aspect-square rounded-full ${bgColors[index % bgColors.length]} flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-sm`}>
                                        <div className="w-full h-full relative">
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                fill
                                                className="object-contain transition-all duration-500 group-hover:scale-105 "
                                                sizes="(max-width: 768px) 140px, (max-width: 1024px) 160px, (max-width: 1280px) 160px, 220px"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-center text-lg md:text-xl font-medium leading-relaxed text-neutral-900">
                                        {category.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
