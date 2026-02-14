"use client";
import Image from "next/image";
import CountUp from "react-countup";

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

const stats = [
    {
        id: 1,
        value: 50,
        suffix: '+',
        label: 'Countries Served'
    },
    {
        id: 2,
        value: 500,
        suffix: '+',
        label: 'B2B Partners'
    },
    {
        id: 3,
        value: 10,
        suffix: 'M+',
        label: 'Units Exported'
    },
    {
        id: 4,
        value: 15,
        suffix: '+',
        label: 'Years Experience'
    }
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
                    <h2 className="text-center text-primary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black pb-4 lg:pb-16">
                        Shop by Category
                    </h2>

                    {/* Categories - Curved Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center lg:items-end gap-x-4 gap-y-10 md:gap-x-8 lg:gap-x-4 xl:gap-x-12 xl:min-h-[360px] lg:min-h-[300px] xl:mt-20 mt-10">
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
                                    className={`flex flex-col items-center group cursor-pointer w-full transition-transform duration-500 ease-out ${translateY}`}
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

                                    <p className="text-center text-sm md:text-lg font-medium text-neutral-900">
                                        {category.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Stats */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mt-24 lg:mt-32">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center justify-center text-center lg:p-6 p-4 bg-white rounded-2xl shadow-sm border border-neutral-100/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary mb-2 flex items-baseline font-roca">
                                <CountUp
                                    end={stat.value}
                                    duration={2.5}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                <span className="text-primary">{stat.suffix}</span>
                            </div>
                            <p className="text-base font-medium text-neutral-900 font-quicksand">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}
