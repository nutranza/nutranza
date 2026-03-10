import nodemailer from "nodemailer";
import type { ContactFormData } from "./schema";

type RequiredMailEnvKey = "CONTACT_EMAIL_FROM" | "CONTACT_EMAIL_APP_PASSWORD";
type OptionalMailEnvKey = "CONTACT_EMAIL_TO";

const escapeHtmlMap: Readonly<Record<string, string>> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
};

function getRequiredEnv(key: RequiredMailEnvKey): string {
    const value = process.env[key]?.trim();

    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }

    return value;
}

function getOptionalEnv(key: OptionalMailEnvKey): string | undefined {
    const value = process.env[key]?.trim();

    return value || undefined;
}

function escapeHtml(value: string): string {
    return value.replace(/[&<>"']/g, (character) => escapeHtmlMap[character] ?? character);
}

function buildTextBody(data: ContactFormData): string {
    return [
        "New contact form submission",
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Location: ${data.location}`,
        `Subject: ${data.subject}`,
        "",
        "Message:",
        data.message,
    ].join("\n");
}

function buildHtmlBody(data: ContactFormData): string {
    return [
        "<div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #111827;\">",
        "<h2 style=\"margin-bottom: 16px;\">New contact form submission</h2>",
        `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>`,
        `<p><strong>Location:</strong> ${escapeHtml(data.location)}</p>`,
        `<p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>`,
        "<p><strong>Message:</strong></p>",
        `<p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>`,
        "</div>",
    ].join("");
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
    const fromEmail = getRequiredEnv("CONTACT_EMAIL_FROM");
    const appPassword = getRequiredEnv("CONTACT_EMAIL_APP_PASSWORD").replace(/\s+/g, "");
    const toEmail = getOptionalEnv("CONTACT_EMAIL_TO") ?? fromEmail;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: fromEmail,
            pass: appPassword,
        },
    });

    await transporter.sendMail({
        from: `Nutranza <${fromEmail}>`,
        to: toEmail,
        replyTo: data.email,
        subject: `${data.subject}`,
        text: buildTextBody(data),
        html: buildHtmlBody(data),
    });
}
