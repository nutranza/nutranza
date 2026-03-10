import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import {
    CONTACT_ADDRESS_DISPLAY,
    CONTACT_EMAIL_ADDRESS,
    CONTACT_EMAIL_MAILTO_URL,
    CONTACT_PHONE_DISPLAY,
    CONTACT_PHONE_TEL_URL,
} from "@/lib/contact";

const companyLinks = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
] as const;

const Footer = () => {
    return (
        <footer className="bg-[#EBE6DE] pt-20 pb-10 text-neutral-900">
            <div className="container">
                <div className="mb-16 grid grid-cols-1 gap-12 md:gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)_minmax(0,0.9fr)] lg:items-start lg:gap-10 xl:gap-14">
                    <div className="flex flex-col items-start text-left">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/Logo.png"
                                alt="Nutranza"
                                width={180}
                                height={50}
                            />
                        </Link>

                        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-neutral-900 lg:max-w-lg">
                            Nutranza offers high-quality, protein-rich and nutritious foods crafted for modern, health-conscious consumers around the world.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://www.instagram.com/nutranzafoods?igsh=cGk0NndudnA2eWJl&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-full border border-secondary p-3 transition-all duration-300 hover:bg-secondary hover:border-secondary"
                                aria-label="Instagram"
                            >
                                <Instagram
                                    size={22}
                                    strokeWidth={1.5}
                                    className="text-secondary group-hover:text-white"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-5 text-left lg:justify-self-center">
                        <h4 className="mb-4 text-xl font-bold text-secondary">Quick Links</h4>
                        <ul className="space-y-4">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="inline-block text-base font-medium text-neutral-900 transition-colors hover:text-secondary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-5 text-left">
                        <h4 className="mb-4 text-xl font-bold text-secondary">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={CONTACT_EMAIL_MAILTO_URL}
                                    className="flex items-start gap-3 text-base font-medium text-neutral-900 transition-colors hover:text-secondary"
                                >
                                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                                    <span className="break-all sm:break-normal">{CONTACT_EMAIL_ADDRESS}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={CONTACT_PHONE_TEL_URL}
                                    className="flex items-start gap-3 text-base font-medium text-neutral-900 transition-colors hover:text-secondary"
                                >
                                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                                    <span>{CONTACT_PHONE_DISPLAY}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-base font-medium leading-relaxed text-neutral-900">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                                <span>{CONTACT_ADDRESS_DISPLAY}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-300 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                        <p className="text-base font-medium text-neutral-900">
                            &copy; {new Date().getFullYear()} Nutranza. All rights reserved.
                        </p>
                        <div className="flex items-center gap-1 text-base font-medium text-neutral-900">
                            <span>Powered by</span>
                            <Link
                                href="https://apexture.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 font-semibold text-secondary hover:underline"
                            >
                                Apexture Pvt. Ltd.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
