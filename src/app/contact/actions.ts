"use server";

import { ContactFormSchema } from "./schema";

export async function submitContactForm(formData: FormData) {
    // Extract form values for all 6 fields
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        location: formData.get("location"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    };

    // Validate with Zod
    const validation = ContactFormSchema.safeParse(rawData);

    if (!validation.success) {
        return {
            success: false,
            errors: validation.error.flatten().fieldErrors,
            message: "Please correct the form errors",
        };
    }

    // Log the validated data (for prototype - in production this would go to a database/email service)
    console.log("Contact Form Submission:", validation.data);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
        success: true,
        message: "Thank you! We'll respond within 24 hours.",
    };
}
