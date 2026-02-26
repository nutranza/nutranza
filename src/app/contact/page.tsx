import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import WaveDecoration from "@/components/ui/WaveDecoration";

export const metadata: Metadata = {
    title: "Contact Us | Nutranza",
    description:
        "Get in touch with Nutranza. We're here to answer your questions about our healthy food products and services.",
};

export default function ContactPage() {
    return (
        <main>
            <section className="bg-[#FEFDF7] sm:pt-36 pt-32 lg:pb-20 pb-16 relative z-10 -my-0.5">
                <div className="container">
                    {/* Hero Section */}
                    <div className="flex flex-col gap-8 text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary font-black">
                            Contact Us
                        </h1>
                        <p className="text-base sm:text-xl font-medium text-neutral-900 max-w-3xl mx-auto">
                            Have questions about our products or services? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                        </p>
                    </div>

                    {/* Contact Info (3 Cards) */}
                    <ContactInfo />

                    {/* Main Content Grid - Split Screen Layout */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column: Form (60% on desktop) */}
                        <div className="w-full lg:w-1/2">
                            <ContactForm />
                        </div>

                        {/* Right Column: Contact Map (40% on desktop) */}
                        <div className="w-full lg:w-1/2">
                            <ContactMap />
                        </div>
                    </div>
                </div>
            </section>

            {/* Wave Decoration connecting to Footer */}
            <WaveDecoration
                position="bottom"
                color="text-[#FEFDF7]"
                className="bg-[#EBE6DE]"
            />
        </main>
    );
}
