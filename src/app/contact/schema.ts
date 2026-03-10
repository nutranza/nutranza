import { z } from "zod";

export const ContactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(80, "Name must be less than 80 characters"),
    email: z
        .string()
        .trim()
        .email("Please enter a valid email address")
        .max(320, "Email must be less than 320 characters"),
    location: z
        .string()
        .trim()
        .min(2, "Location must be at least 2 characters")
        .max(120, "Location must be less than 120 characters"),
    subject: z
        .string()
        .trim()
        .min(3, "Subject must be at least 3 characters")
        .max(120, "Subject must be less than 120 characters"),
    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters")
        .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
export type ContactFormFieldName = keyof ContactFormData;
export type ContactFormFieldErrors = Partial<Record<ContactFormFieldName, string[]>>;

export type ContactFormState = {
    status: "idle" | "success" | "error";
    message: string;
    fieldErrors: ContactFormFieldErrors;
};

export const initialContactFormState: ContactFormState = {
    status: "idle",
    message: "",
    fieldErrors: {},
};
