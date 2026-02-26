"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        const formData = new FormData(e.currentTarget);
        const result = await submitContactForm(formData);

        setIsSubmitting(false);

        if (result.success) {
            setMessage({ type: "success", text: result.message });
            // Reset form
            e.currentTarget.reset();
        } else {
            setMessage({
                type: "error",
                text: result.message || "Something went wrong",
            });
        }
    };

    return (
        <div className="lg:p-10 sm:p-6 p-4 bg-primary/10 rounded-2xl">
            <div className="mb-8">
                <h2 className="sm:text-3xl text-2xl text-primary font-bold mb-2">
                    Get In Touch
                </h2>
                <p className="text-lg text-neutral-900">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="font-semibold block text-neutral-700">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            required
                            className="w-full px-4 py-3 rounded-full border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-semibold block text-neutral-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            required
                            className="w-full px-4 py-3 rounded-full border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                </div>

                {/* Row 2: Location and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="location" className="font-semibold block text-neutral-700">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="City, Country"
                            required
                            className="w-full px-4 py-3 rounded-full border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="font-semibold block text-neutral-700">
                            Subject
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="How can we help you?"
                            required
                            className="w-full px-4 py-3 rounded-full border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-2">
                    <label htmlFor="message" className="font-semibold block text-neutral-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                        required
                        className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition-all duration-300 cursor-pointer"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                </button>

                {/* Response Message */}
                {message && (
                    <div
                        className={`p-4 rounded-xl text-sm font-medium animate-in fade-in duration-300 ${message.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                            }`}
                    >
                        {message.text}
                    </div>
                )}

                <p className="text-center text-sm text-neutral-900">
                    We typically respond within 24 hours.
                </p>
            </form>
        </div>
    );
}
