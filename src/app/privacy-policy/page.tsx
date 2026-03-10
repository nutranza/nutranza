import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import LegalDocument from "@/components/support/LegalDocument";
import SupportPageLayout from "@/components/support/SupportPageLayout";
import { privacyPolicySections } from "@/data/support";

export const metadata: Metadata = {
    title: "Privacy Policy | NutranZa",
    description:
        "Read how NutranZa handles website inquiries, contact information, and business communications on the current website.",
};

export default function PrivacyPolicyPage() {
    return (
        <SupportPageLayout
            eyebrow="Support"
            eyebrowIcon={ShieldCheck}
            eyebrowClassName="text-primary"
            title="Privacy Policy"
            titleSegments={[
                { text: "Privacy" },
                { text: "Policy", emphasized: true },
            ]}
            titleClassName="text-primary"
            description="This page explains what information NutranZa collects through the current website, why we use it, and how you can contact us about your details."
        >
            <LegalDocument sections={privacyPolicySections} />
        </SupportPageLayout>
    );
}
