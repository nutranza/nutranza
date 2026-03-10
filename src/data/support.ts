export interface SupportSection {
    title: string;
    paragraphs: readonly string[];
    bullets?: readonly string[];
}

export interface SupportFaqItem {
    question: string;
    answer: string;
}

export const supportFaqs: readonly SupportFaqItem[] = [
    {
        question: "What products does NutranZa currently offer for export?",
        answer:
            "NutranZa currently showcases Peanut Butter and High Protein Oats on the website, and the broader business content also mentions categories such as Muesli, Shilajit, Rice Cakes, and Protein Bars for B2B discussions.",
    },
    {
        question: "Do you offer private label or custom packaging?",
        answer:
            "Yes. NutranZa positions itself as a B2B export partner and can discuss private label opportunities, packaging formats, and market-specific branding requirements based on your order volume and destination market.",
    },
    {
        question: "What are your minimum order quantities?",
        answer:
            "Minimum order quantities depend on the product category, packaging format, and export destination. The fastest way to get an exact MOQ is to contact NutranZa with the product, quantity target, and destination country.",
    },
    {
        question: "Which certifications and quality standards do you mention?",
        answer:
            "The website highlights certifications and quality references such as FSSAI, ISO, GMP, and FDA-related positioning. Final product and shipment documentation should always be confirmed directly during the inquiry process.",
    },
    {
        question: "Which countries or markets do you serve?",
        answer:
            "NutranZa presents itself as an export-focused supplier serving international markets including the USA, Europe, Canada, UAE, Africa, and other regions, with logistics handled according to the buyer's destination and shipping mode.",
    },
    {
        question: "Do you support export logistics and documentation?",
        answer:
            "Yes. The site messaging positions NutranZa as a global B2B supplier that can support export coordination, shipping discussions, and related documentation as part of the sales process.",
    },
    {
        question: "What is the typical shelf life of your products?",
        answer:
            "Most product pages currently highlight a shelf life of around 12 months, but the exact shelf life, storage method, and packaging configuration should be confirmed for the final SKU you plan to order.",
    },
    {
        question: "Can I request a brochure, quote, or product details?",
        answer:
            "Yes. You can download the brochure from the website and contact NutranZa through the contact form, email, or WhatsApp for quotations, product discussions, and export-related questions.",
    },
    {
        question: "How can I contact NutranZa for a business inquiry?",
        answer:
            "You can use the website contact form, send an email, call the listed phone number, or start a WhatsApp conversation from the header call-to-action.",
    },
];

export const featuredSupportFaqs = supportFaqs.slice(0, 5);

export const privacyPolicySections: readonly SupportSection[] = [
    {
        title: "Information We Collect",
        paragraphs: [
            "We collect the information you choose to share with us when you contact NutranZa through the website or through direct communication channels.",
            "This may include your name, email address, location, subject line, message details, and any additional information you send by email or WhatsApp.",
        ],
        bullets: [
            "Contact form details: name, email, location, subject, and message",
            "Information you send by direct email or WhatsApp",
            "Basic technical data that may be captured through normal website hosting, security, or browser requests",
        ],
    },
    {
        title: "How We Use Your Information",
        paragraphs: [
            "We use inquiry information to respond to your messages, discuss product requirements, provide business information, and manage follow-up communication.",
            "We may also use the information to keep internal records, improve customer support, and protect the security and reliability of the website.",
        ],
    },
    {
        title: "How We Share Information",
        paragraphs: [
            "We do not sell your personal information. We only share information when it is reasonably necessary to run the website or respond to your inquiry.",
            "Depending on how you interact with the site, this may include service providers used for hosting, email handling, maps, or direct messaging.",
        ],
        bullets: [
            "Website and hosting infrastructure providers",
            "Email providers used to receive and send inquiry messages",
            "Third-party services you choose to use, such as Google Maps or WhatsApp",
            "Legal or regulatory authorities when required by law",
        ],
    },
    {
        title: "Third-Party Services And Links",
        paragraphs: [
            "The website includes links or integrations that may take you to third-party services, including email, WhatsApp, and Google Maps. Those third parties may collect or process information under their own terms and privacy policies.",
            "We recommend reviewing the policies of those services before sharing information through them.",
        ],
    },
    {
        title: "Data Retention And Security",
        paragraphs: [
            "We keep inquiry information only for as long as it is reasonably needed to respond to you, maintain business records, or meet legal and operational requirements.",
            "We use practical administrative and technical measures to help protect business communications, but no website or internet transmission can be guaranteed to be completely secure.",
        ],
    },
    {
        title: "Your Choices",
        paragraphs: [
            "You can contact NutranZa if you want to update, correct, or ask about the personal information you have shared with us.",
            "If you no longer want us to continue a business conversation, you can ask us to stop using your inquiry details for future communication.",
        ],
    },
    {
        title: "Policy Updates",
        paragraphs: [
            "We may update this Privacy Policy from time to time to reflect website changes, service updates, or legal requirements.",
            "When we make material changes, we will update the effective date shown on this page.",
        ],
    },
];

export const termsOfServiceSections: readonly SupportSection[] = [
    {
        title: "Website Purpose",
        paragraphs: [
            "The NutranZa website is provided for general information, product discovery, and B2B business inquiries related to our food and nutrition offerings.",
            "Browsing the website or sending an inquiry does not create a purchase contract, supply agreement, or guaranteed business relationship.",
        ],
    },
    {
        title: "Product Information",
        paragraphs: [
            "We aim to keep product, packaging, certification, and business information accurate and useful. However, product specifications, availability, packaging, market coverage, and commercial terms may change over time.",
            "Final pricing, order terms, lead times, documentation, and shipment commitments should always be confirmed directly with NutranZa during the sales process.",
        ],
    },
    {
        title: "Acceptable Use",
        paragraphs: [
            "You may use this website only for lawful business or informational purposes. You must not use the site in a way that damages the website, interferes with its operation, or attempts to access systems or data without authorization.",
        ],
        bullets: [
            "Do not submit false, misleading, or harmful information",
            "Do not attempt to disrupt, reverse engineer, or misuse the website",
            "Do not copy or reuse website materials in a misleading or unauthorized way",
        ],
    },
    {
        title: "Intellectual Property",
        paragraphs: [
            "Unless stated otherwise, the branding, design, text, images, graphics, downloadable materials, and other website content belong to NutranZa or are used with permission.",
            "You may not reproduce, republish, or commercially use website content without prior written permission.",
        ],
    },
    {
        title: "Third-Party Services",
        paragraphs: [
            "The website may link to or rely on third-party services such as WhatsApp, email providers, or map services. NutranZa is not responsible for the content, availability, or policies of those third-party services.",
        ],
    },
    {
        title: "Disclaimers",
        paragraphs: [
            "The website is provided on an 'as is' and 'as available' basis for general business information.",
            "To the fullest extent permitted by applicable law, we do not guarantee that the website will always be uninterrupted, error-free, or suitable for every specific commercial purpose.",
        ],
    },
    {
        title: "Limitation Of Liability",
        paragraphs: [
            "NutranZa will not be liable for indirect, incidental, special, or consequential losses arising from your use of, or inability to use, the website.",
            "If you rely on website content for a business decision, you remain responsible for confirming the final commercial, legal, and technical details with us before acting on that information.",
        ],
    },
    {
        title: "Governing Law",
        paragraphs: [
            "For this prototype, these Terms are governed by the laws of India. Any dispute related to the website will be subject to the courts located in Surat, Gujarat, unless a different written agreement applies to a specific business relationship.",
        ],
    },
    {
        title: "Changes To These Terms",
        paragraphs: [
            "We may update these Terms of Service from time to time. Continued use of the website after changes are published means you accept the updated Terms.",
        ],
    },
];
