"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is DONE?",
        answer: "We all know most protein drinks are hard to love, too sweet, too heavy, too fake. So we made one that tastes good, feels light, and actually works with your body. DONE is packed with protein and prebiotic fiber, with no sugar, no artificial sweeteners, just smooth, clean fuel that makes feeling good feel easy.",
    },
    {
        question: "How does DONE support gut health?",
        answer: "DONE contains prebiotic fiber that supports healthy digestion and gut balance. It’s also lactose-free and made without artificial sweeteners, making it easy on the stomach.",
    },
    {
        question: "What does DONE use instead of sugar or artificial sweeteners?",
        answer: "DONE is sweetened with stevia and erythritol, clean, plant-based ingredients. There’s no added sugar and no artificial sweeteners. Just smooth, natural flavor.",
    },
    {
        question: "When should I drink DONE?",
        answer: "Whenever you need a boost! It’s perfect post-workout, as an afternoon snack, or whenever you want clean, light protein on the go.",
    },
    {
        question: "Is DONE vegan friendly?",
        answer: "DONE uses high-quality whey protein isolate, so while it is vegetarian-friendly and lactose-free, it is not vegan.",
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#f5efe6] lg:py-20 py-16 ">
            <div className="container">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-accent text-center">
                    Got questions?
                </h2>

                <div className="flex flex-col gap-4 md:gap-6 max-w-5xl mx-auto mt-16">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-[24px] md:rounded-[32px] overflow-hidden transition-colors duration-500 ease-in-out cursor-pointer ${isOpen ? "bg-secondary" : "bg-[#FEFDF7]"
                                    }`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="px-6 py-6 md:px-10 md:py-8 flex justify-between items-center gap-4">
                                    <h3
                                        className={`text-xl md:text-2xl lg:text-3xl font-roca transition-colors duration-500 ease-in-out ${isOpen ? "text-[#fff6ee]" : "text-[#23100c]"
                                            }`}
                                    >
                                        {faq.question}
                                    </h3>
                                    <div
                                        className={`shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? "bg-white text-secondary rotate-180" : "bg-secondary text-white rotate-0"
                                            }`}
                                    >
                                        {isOpen ? (
                                            <Minus size={28} className="stroke-[2.5] md:w-8 md:h-8 w-6 h-6" />
                                        ) : (
                                            <Plus size={28} className="stroke-[2.5] md:w-8 md:h-8 w-6 h-6" />
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 md:px-10 md:pb-10 pt-0 text-[#fff6ee] font-helvetica text-base md:text-lg leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
