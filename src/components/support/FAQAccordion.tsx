"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { SupportFaqItem } from "@/data/support";

interface FAQAccordionProps {
    items: readonly SupportFaqItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const accordionId = useId();

    const toggleItem = (index: number) => {
        setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
    };

    return (
        <div className="flex flex-col gap-4 md:gap-6">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                const buttonId = `${accordionId}-button-${index}`;
                const panelId = `${accordionId}-panel-${index}`;

                return (
                    <div
                        key={item.question}
                        className={`rounded-[24px] md:rounded-[32px] overflow-hidden transition-colors duration-500 ease-in-out ${
                            isOpen ? "bg-secondary" : "bg-[#ffffff]"
                        }`}
                    >
                        <h2>
                            <button
                                id={buttonId}
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                className="w-full px-6 py-6 md:px-10 md:py-8 flex justify-between items-center gap-4 text-left cursor-pointer"
                                onClick={() => toggleItem(index)}
                            >
                                <span
                                    className={`text-xl md:text-2xl lg:text-3xl font-roca transition-colors duration-500 ease-in-out ${
                                        isOpen ? "text-[#fff6ee]" : "text-neutral-900"
                                    }`}
                                >
                                    {item.question}
                                </span>
                                <span
                                    className={`shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${
                                        isOpen
                                            ? "bg-white text-secondary rotate-180"
                                            : "bg-secondary text-white rotate-0"
                                    }`}
                                    aria-hidden="true"
                                >
                                    {isOpen ? (
                                        <Minus
                                            size={28}
                                            className="stroke-[2.5] md:w-8 md:h-8 w-6 h-6"
                                        />
                                    ) : (
                                        <Plus
                                            size={28}
                                            className="stroke-[2.5] md:w-8 md:h-8 w-6 h-6"
                                        />
                                    )}
                                </span>
                            </button>
                        </h2>

                        <AnimatePresence initial={false}>
                            {isOpen ? (
                                <motion.div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 md:px-10 md:pb-10 pt-0 text-[#fff6ee] font-medium text-base md:text-lg leading-relaxed">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
