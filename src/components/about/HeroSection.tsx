import { Earth } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="sm:pt-36 pt-32 lg:pb-20 pb-16 bg-[#EBE6DE]">
            <div className="container">
                {/* Main Content */}
                <div className="flex flex-col gap-8 text-center">
                    {/* Subtitle */}
                    <div className="flex items-center justify-center gap-2 text-lg text-secondary uppercase font-medium font-roca">
                        <Earth className="w-5 h-5" />
                        <span>About Us</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-secondary">
                        <span>About</span>
                        <span className="font-black">{" "}NutranZa</span>
                    </h1>
                    {/* Description */}
                    <p className="text-base sm:text-xl font-medium text-neutral-900 max-w-4xl mx-auto">
                        NutranZa is your trusted global B2B partner for premium, health-conscious foods like Peanut Butter, Protein Oats, and Shilajit. We bridge the gap between world-class manufacturing and international distributors with a commitment to quality and seamless logistics.
                    </p>
                </div>
            </div>
        </section>
    );
}
