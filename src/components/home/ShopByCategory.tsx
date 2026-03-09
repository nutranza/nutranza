"use client";
import Image from "next/image";

const categories = [
    {
        name: "Peanut Butter",
        image: "/assets/images/categories/Categories-2.png",
    },
    {
        name: "Oats",
        image: "/assets/images/categories/Categories-1.png",
    },
    {
        name: "Muesli",
        image: "/assets/images/categories/Categories-4.png",
    },
    {
        name: "Rice Cakes",
        image: "/assets/images/categories/Categories-5.png",
    },
];

export default function ShopByCategory() {
    const bgColors = [
        "bg-[#FFE5EC]", // Pinkish
        "bg-[#E5F0FF]", // Bluish
        "bg-[#E5F7D3]", // Greenish
        "bg-[#FFEAD5]", // Orangish
    ];

    return (
        <section className="bg-[#FEFDF7] py-16 lg:py-20 relative overflow-hidden">
            <div className="container relative z-10">
                <div>
                    <h2 className="text-center text-primary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                        Shop by <span className="font-black">Category</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                        {categories.map((category, index) => {
                            return (
                                <div
                                    key={category.name}
                                    className="flex flex-col items-center group cursor-pointer w-full snap-start md:snap-none transition-transform duration-500 ease-out"
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
