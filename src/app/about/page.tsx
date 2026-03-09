import type { Metadata } from "next";
import HeroSection from "@/components/about/HeroSection";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import OurMissionTeamSection from "@/components/about/OurMissionTeamSection";
import ExportExperience from "@/components/about/ExportExperience";

import WhyChooseUs from "@/components/about/WhyChooseUs";

export const metadata: Metadata = {
    title: "About Us | Nutranza - Premium Healthcare Food Exporters",
    description:
        "Nutranza is a trusted B2B partner in premium organic food export. We serve 20+ countries with ISO, GMP, FSSAI and FDA certified products including peanut butter, protein oats, muesli, and more. Discover our export excellence.",
    openGraph: {
        title: "About Nutranza - Your Global Partner in Healthcare Food Export",
        description:
            "Learn about our journey, certifications, and commitment to delivering premium organic food products to international buyers and distributors worldwide.",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <OurMissionTeamSection />
            <div style={{ background: "linear-gradient(#f3cf6e, #f9e2a3 50%)" }}>
                <WhoWeAreSection />
                <ExportExperience />
            </div>
            <WhyChooseUs />
        </main>
    );
}
