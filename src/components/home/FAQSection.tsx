"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import WaveDecoration from "../ui/WaveDecoration";

const faqs = [
    {
        question: "What products do you export, and do you offer private labeling?",
        answer: "We export premium Peanut Butter, Protein Oats, Muesli, Shilajit, Rice Cakes, and Protein Bars. Yes, we offer private labeling and custom packaging solutions for our international B2B clients and distributors.",
    },
    {
        question: "What are your Minimum Order Quantities (MOQs) for international export?",
        answer: "Our MOQs vary by product category to ensure cost-effective shipping and production. We work flexibly with both emerging distributors and established wholesale buyers. Please contact our sales team for exact MOQs based on your selected products and destination.",
    },
    {
        question: "What quality certifications and standards do your products meet?",
        answer: "We strictly adhere to international food safety standards, including ISO, HACCP, and GMP certifications. Our export-grade products undergo rigorous quality control, from raw material sourcing to final packaging, ensuring a premium experience for your customers.",
    },
    {
        question: "How do you handle international shipping and logistics?",
        answer: "We partner with experienced global freight forwarders to ensure safe and timely delivery via sea or air freight. We offer both FOB and CIF pricing and support you with all necessary export documentation, including origin certificates, health certificates, and customs clearance paperwork.",
    },
    {
        question: "What is the typical shelf life of your export products?",
        answer: "We guarantee maximum freshness for our international shipments. Products like our Peanut Butter and Protein Bars have an extended shelf life of 12-18 months, utilizing export-safe, moisture-proof packaging to maintain product integrity throughout the supply chain.",
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="overflow-hidden">

            <div className="bg-[#f5efe6] lg:py-20 py-16 relative z-10 -my-0.5">
                <div className="container">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-accent text-center">
                        Got <span className="font-black">questions?</span>
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
                                            className={`text-xl md:text-2xl lg:text-3xl font-roca transition-colors duration-500 ease-in-out ${isOpen ? "text-[#fff6ee]" : "text-neutral-900"
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
                                                <div className="px-6 pb-6 md:px-10 md:pb-10 pt-0 text-[#fff6ee] font-medium text-base md:text-lg leading-relaxed">
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
            </div>
            {/* Bottom Wave */}
            <WaveDecoration position="bottom" color="text-[#f5efe6]" className="bg-[#EBE6DE]" />

        </section>
    );
}
