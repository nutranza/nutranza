"use client";

import { useActionState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";
import {
    initialContactFormState,
    type ContactFormFieldName,
} from "@/app/contact/schema";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction, isPending] = useActionState(
        submitContactForm,
        initialContactFormState
    );

    useEffect(() => {
        if (state.status === "success") {
            formRef.current?.reset();
        }
    }, [state]);

    const getFieldError = (fieldName: ContactFormFieldName): string | undefined =>
        state.fieldErrors[fieldName]?.[0];
    const nameError = getFieldError("name");
    const emailError = getFieldError("email");
    const locationError = getFieldError("location");
    const subjectError = getFieldError("subject");
    const messageError = getFieldError("message");

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

            <form ref={formRef} action={formAction} className="space-y-4">
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
                            aria-invalid={Boolean(nameError)}
                            aria-describedby={nameError ? "name-error" : undefined}
                            className="w-full px-4 py-3 rounded-full border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        {nameError ? (
                            <p id="name-error" className="text-sm text-red-700">
                                {nameError}
                            </p>
                        ) : null}
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
                            aria-invalid={Boolean(emailError)}
                            aria-describedby={emailError ? "email-error" : undefined}
                            className="w-full px-4 py-3 rounded-full border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        {emailError ? (
                            <p id="email-error" className="text-sm text-red-700">
                                {emailError}
                            </p>
                        ) : null}
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
                            aria-invalid={Boolean(locationError)}
                            aria-describedby={locationError ? "location-error" : undefined}
                            className="w-full px-4 py-3 rounded-full border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        {locationError ? (
                            <p id="location-error" className="text-sm text-red-700">
                                {locationError}
                            </p>
                        ) : null}
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
                            aria-invalid={Boolean(subjectError)}
                            aria-describedby={subjectError ? "subject-error" : undefined}
                            className="w-full px-4 py-3 rounded-full border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        {subjectError ? (
                            <p id="subject-error" className="text-sm text-red-700">
                                {subjectError}
                            </p>
                        ) : null}
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
                        aria-invalid={Boolean(messageError)}
                        aria-describedby={messageError ? "message-error" : undefined}
                        className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    {messageError ? (
                        <p id="message-error" className="text-sm text-red-700">
                            {messageError}
                        </p>
                    ) : null}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isPending}
                    aria-disabled={isPending}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {isPending ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                </button>

                {state.message ? (
                    <div
                        aria-live="polite"
                        role={state.status === "error" ? "alert" : "status"}
                        className={`p-4 rounded-xl text-sm font-medium animate-in fade-in duration-300 ${
                            state.status === "success"
                                ? "bg-green-50 text-green-800 border border-green-200"
                                : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                    >
                        {state.message}
                    </div>
                ) : null}

                <p className="text-center text-sm text-neutral-900">
                    We typically respond within 24 hours.
                </p>
            </form>
        </div>
    );
}
