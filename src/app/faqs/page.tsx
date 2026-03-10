import type { Metadata } from "next";
import { CircleHelp } from "lucide-react";
import FAQAccordion from "@/components/support/FAQAccordion";
import SupportPageLayout from "@/components/support/SupportPageLayout";
import { supportFaqs } from "@/data/support";
import {
    CONTACT_EMAIL_ADDRESS,
    CONTACT_EMAIL_MAILTO_URL,
    CONTACT_PHONE_DISPLAY,
    CONTACT_WHATSAPP_URL,
} from "@/lib/contact";

export const metadata: Metadata = {
    title: "FAQs | NutranZa",
    description:
        "Find answers to common B2B export questions about NutranZa products, MOQ, private label support, certifications, and shipping discussions.",
};

export default function FAQsPage() {
    return (
        <SupportPageLayout
            eyebrow="Support"
            eyebrowIcon={CircleHelp}
            eyebrowClassName="text-secondary"
            title="Frequently Asked Questions"
            titleSegments={[
                { text: "Frequently" },
                { text: "Asked" },
                { text: "Questions", emphasized: true },
            ]}
            titleClassName="text-accent"
            description="These are the most common B2B and export questions visitors ask about NutranZa products, packaging, certifications, and inquiry flow."
        >
            <div className="max-w-5xl mx-auto">
                <FAQAccordion items={supportFaqs} />
            </div>

            <div className="max-w-5xl mx-auto mt-10 bg-primary/10 rounded-[2.5rem] md:p-12 sm:p-8 p-6 text-center space-y-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-accent font-semibold">
                    Still need help?
                </h2>
                <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                    If your question is not covered here, you can contact NutranZa
                    directly by email or continue the conversation on WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={CONTACT_EMAIL_MAILTO_URL}
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-secondary hover:bg-secondary hover:text-white transition-colors"
                    >
                        {CONTACT_EMAIL_ADDRESS}
                    </a>
                    <a
                        href={CONTACT_WHATSAPP_URL}
                        className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-secondary/90 transition-colors"
                    >
                        WhatsApp {CONTACT_PHONE_DISPLAY}
                    </a>
                </div>
            </div>
        </SupportPageLayout>
    );
}
