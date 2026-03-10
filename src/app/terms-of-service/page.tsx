import type { Metadata } from "next";
import { FileText } from "lucide-react";
import LegalDocument from "@/components/support/LegalDocument";
import SupportPageLayout from "@/components/support/SupportPageLayout";
import { termsOfServiceSections } from "@/data/support";

export const metadata: Metadata = {
    title: "Terms of Service | NutranZa",
    description:
        "Read the terms that apply when you browse the NutranZa website or contact us for business inquiries.",
};

export default function TermsOfServicePage() {
    return (
        <SupportPageLayout
            eyebrow="Support"
            eyebrowIcon={FileText}
            eyebrowClassName="text-secondary"
            title="Terms of Service"
            titleSegments={[
                { text: "Terms" },
                { text: "of" },
                { text: "Service", emphasized: true },
            ]}
            titleClassName="text-secondary"
            description="These terms cover how the current NutranZa website may be used and how website information should be treated during business inquiries."
        >
            <LegalDocument sections={termsOfServiceSections} />
        </SupportPageLayout>
    );
}
