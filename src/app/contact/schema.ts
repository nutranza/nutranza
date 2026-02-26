import { z } from "zod";

// Validation schema for enhanced contact form with 6 fields
export const ContactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    location: z.string().min(2, "Location must be at least 2 characters"),
    subject: z.string().min(3, "Subject must be at least 3 characters").max(100, "Subject must be less than 100 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

// TypeScript type inferred from the schema
export type ContactFormData = z.infer<typeof ContactFormSchema>;
