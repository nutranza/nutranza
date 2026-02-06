import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
    title: "Contact Us | Nutranza",
    description:
        "Get in touch with Nutranza. We're here to answer your questions about our healthy food products and services.",
};

export default function ContactPage() {
    return (
        <section className="md:py-20 py-16">
            <div className="container">
                {/* Hero Section */}
                <div className="mb-12 text-center space-y-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
                        Have questions about our products or services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                {/* Main Content Grid - Split Screen Layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Form (60% on desktop) */}
                    <div className="w-full lg:w-3/5">
                        <ContactForm />
                    </div>

                    {/* Right Column: Contact Info (40% on desktop) */}
                    <div className="w-full lg:w-2/5">
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </section>
    );
}
