import WaveDecoration from "../ui/WaveDecoration";
import FAQAccordion from "@/components/support/FAQAccordion";
import { featuredSupportFaqs } from "@/data/support";

export default function FAQSection() {
    return (
        <section className="overflow-hidden">

            <div className="bg-[#f5efe6] lg:py-20 py-16 relative z-10 -my-0.5">
                <div className="container">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-accent text-center">
                        Got <span className="font-black">questions?</span>
                    </h2>

                    <div className="max-w-5xl mx-auto mt-16">
                        <FAQAccordion items={featuredSupportFaqs} />
                    </div>
                </div>
            </div>
            {/* Bottom Wave */}
            <WaveDecoration position="bottom" color="text-[#f5efe6]" className="bg-[#EBE6DE]" />

        </section>
    );
}
