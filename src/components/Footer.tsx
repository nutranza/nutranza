import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white  pt-16 pb-8 border-t border-gray-200">
            <div className="container">
                {/* Main Footer Content - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand & Social */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/Logo.png"
                                alt="Nutranza"
                                width={200}
                                height={200}
                                className=""
                            />
                        </Link>
                        <p className="text-neutral-700 leading-relaxed">
                            Premium organic, plant-based food export solutions. Trusted by distributors and retailers in 20+ countries.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors group"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors group"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors group"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors group"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-semibold text-lg text-neutral-900">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-neutral-700 hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-neutral-700 hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories" className="text-neutral-700 hover:text-primary transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-neutral-700 hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-neutral-700 hover:text-primary transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Newsletter */}
                    <div className="space-y-6">
                        <h4 className="font-semibold text-lg text-neutral-900">Get In Touch</h4>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-neutral-700">
                                <Mail size={16} className="text-primary" />
                                <span>support@nutranza.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-neutral-700">
                                <Phone size={16} className="text-primary" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Certifications */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-neutral-700">
                        © 2024-2025 Nutranza | All Rights Reserved
                    </p>
                    <div className="text-sm text-neutral-700">
                        <span className="inline-block">ISO 22000 Certified</span>
                        <span className="mx-2">•</span>
                        <span className="inline-block">HACCP Certified</span>
                        <span className="mx-2">•</span>
                        <span className="inline-block">Organic Certified</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
