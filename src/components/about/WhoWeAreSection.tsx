"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake } from "lucide-react";

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

const AnimatedDigit = ({ digit, direction, inView }: { digit: string; direction: "up" | "down", inView: boolean }) => {
    const num = parseInt(digit, 10);
    // Render non-numbers normally
    if (isNaN(num)) {
        return <span className="h-[1em] flex items-center">{digit}</span>;
    }

    let seq;
    let initialY;
    let animateY;

    if (direction === "up") {
        // Bottom to Top -> Starts at 0, goes to num
        seq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, num];
        initialY = "0%";
        animateY = `-${((seq.length - 1) / seq.length) * 100}%`;
    } else {
        // Top to Bottom -> Starts at 0, goes to num
        seq = [num, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 0];
        initialY = `-${((seq.length - 1) / seq.length) * 100}%`;
        animateY = "0%";
    }

    return (
        <span className="relative inline-flex overflow-hidden" style={{ height: "1em", lineHeight: "1em" }}>
            <motion.span
                initial={{ y: initialY }}
                animate={inView ? { y: animateY } : { y: initialY }}
                transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-0 flex flex-col"
            >
                {seq.map((n, i) => (
                    <span key={i} className="h-[1em] flex items-center justify-center">
                        {n}
                    </span>
                ))}
            </motion.span>
            <span className="invisible">{digit}</span>
        </span>
    );
};

const AnimatedCounter = ({ value, inView }: { value: number, inView: boolean }) => {
    const digits = String(value).split("");

    return (
        <span className="inline-flex">
            {digits.map((digit, i) => (
                <AnimatedDigit key={i} digit={digit} direction={i % 2 === 0 ? "down" : "up"} inView={inView} />
            ))}
        </span>
    );
};

export default function WhoWeAreSection() {
    const gridRef = useRef(null);
    const inView = useInView(gridRef, { once: true, margin: "-50px" });

    return (
        <section className="py-16 lg:py-20 overflow-hidden">
            <div className="container">
                {/* Top Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="flex items-center gap-2 text-lg text-secondary uppercase font-medium font-roca">
                            <Handshake className="w-5 h-5" />
                            <span>Who We Are</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-secondary">
                            <span>Delivering Global</span>{" "}
                            <span className="font-black">Excellence</span>
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2 flex items-center">
                        <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-900">
                            NutranZa is a premier global exporter dedicated to connecting international markets with the highest quality health-conscious products. As a trusted B2B partner, we leverage our expansive supply chain and stringent manufacturing standards to deliver premium Peanut Butter, Protein Oats, and Shilajit seamlessly across borders, ensuring consistent excellence in every shipment.
                        </p>
                    </div>
                </div>

                {/* Bottom Stats Container */}
                <div ref={gridRef} className="bg-white rounded-xl sm:rounded-2xl lg:p-12 sm:p-8 p-6 mt-16">
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.1
                                }
                            }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] lg:gap-12 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <React.Fragment key={stat.id}>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.8, ease: "easeOut" }
                                        }
                                    }}
                                    className="flex flex-col sm:items-start gap-4"
                                >
                                    <span className="text-2xl sm:text-3xl lg:text-5xl font-medium text-primary flex items-center font-roca">
                                        <AnimatedCounter value={stat.value} inView={inView} />
                                        {stat.suffix}
                                    </span>
                                    <span className="text-neutral-900 font-medium text-lg">
                                        {stat.label}
                                    </span>
                                </motion.div>

                                {/* Divider - Only visible on md+ breakpoint */}
                                {index < stats.length - 1 && (
                                    <div className="block sm:w-px sm:h-full h-px w-full bg-primary/40 self-center" />
                                )}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
