"use server";

import { sendContactEmail } from "./mail";
import {
    ContactFormSchema,
    type ContactFormState,
} from "./schema";

function getFormValue(formData: FormData, key: string): string {
    const value = formData.get(key);

    return typeof value === "string" ? value : "";
}

export async function submitContactForm(
    _previousState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const rawData = {
        name: getFormValue(formData, "name"),
        email: getFormValue(formData, "email"),
        location: getFormValue(formData, "location"),
        subject: getFormValue(formData, "subject"),
        message: getFormValue(formData, "message"),
    };

    const validation = ContactFormSchema.safeParse(rawData);

    if (!validation.success) {
        return {
            status: "error",
            fieldErrors: validation.error.flatten().fieldErrors,
            message: "Please correct the highlighted form errors.",
        };
    }

    try {
        await sendContactEmail(validation.data);
    } catch (error: unknown) {
        console.error("Failed to send contact form email:", error);

        return {
            status: "error",
            fieldErrors: {},
            message: "We could not send your message right now. Please try again.",
        };
    }

    return {
        status: "success",
        fieldErrors: {},
        message: "Thank you! We'll respond within 24 hours.",
    };
}
