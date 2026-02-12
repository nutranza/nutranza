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
        <div className="p-10 border border-gray-200 rounded-2xl">
            <div className="mb-8">
                <h2 className="text-3xl text-secondary font-bold mb-2">
                    Get In Touch
                </h2>
                <p className="text-lg text-neutral-900">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="font-semibold block text-neutral-700">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="John"
                            required
                            className="w-full px-4 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="font-semibold block text-neutral-700">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                            required
                            className="w-full px-4 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                        />
                    </div>
                </div>

                {/* Row 2: Email */}
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
                        className="w-full px-4 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                </div>

                {/* Row 3: Location */}
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
                        className="w-full px-4 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                </div>

                {/* Row 4: Subject */}
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
                        className="w-full px-4 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                </div>

                {/* Row 5: Message */}
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-secondary bg-secondary text-white font-medium hover:bg-secondary/80 transition-all duration-300 cursor-pointer"
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

                <p className="text-center text-sm text-neutral-700">
                    We typically respond within 24 hours.
                </p>
            </form>
        </div>
    );
}
