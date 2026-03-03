import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#EBE6DE] pt-20 pb-10 text-neutral-900">
            <div className="container mx-auto px-4 md:px-8">
                {/* Top Section - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6 flex flex-col items-start text-left">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/Logo.png"
                                alt="Nutranza"
                                width={180}
                                height={50}
                            />
                        </Link>
                        <p className="text-base font-medium leading-relaxed max-w-xs text-neutral-900">
                            Nutranza provides trusted, compassionate healthcare for families through clinic, pharmacy, and telehealth services.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-3 group border border-secondary rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300" aria-label="Facebook">
                                <Facebook size={22} strokeWidth={1.5} className="text-secondary group-hover:text-white" />
                            </Link>
                            <Link href="#" className="p-3 group border border-secondary rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300" aria-label="Instagram">
                                <Instagram size={22} strokeWidth={1.5} className="text-secondary group-hover:text-white" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Company */}
                    <div className="space-y-5 flex flex-col items-start text-left lg:ml-8">
                        <h4 className="font-bold text-xl text-secondary mb-4">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-base font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">Home</Link></li>
                            <li><Link href="/categories" className="text-base font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">Categories</Link></li>
                            <li><Link href="/about" className="text-base font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">About Us</Link></li>
                            <li><Link href="/contact" className="text-base font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Legal & Support */}
                    <div className="space-y-5 flex flex-col items-start text-left">
                        <h4 className="font-bold text-xl text-secondary mb-4">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-base font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-base font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">Terms of Service</Link></li>
                            <li><Link href="#" className="text-base font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="space-y-5 flex flex-col items-start text-left">
                        <h4 className="font-bold text-xl text-secondary mb-4">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="mailto:support@nutranza.com" className="text-base font-medium text-neutral-900 hover:text-secondary transition-colors block">
                                    support@nutranza.com
                                </Link>
                            </li>
                            <li>
                                <Link href="tel:+15551234567" className="text-base font-medium text-neutral-900 hover:text-secondary transition-colors block">
                                    +1 (555) 123-4567
                                </Link>
                            </li>
                            <li className="text-base font-medium text-neutral-900 block">
                                123 Nutrition Way,<br /> Wellness City, WC 12345
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Credits */}
                <div className="pt-8 border-t border-neutral-300">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left border-t-0">
                        <p className="text-base font-medium text-neutral-900">
                            © {new Date().getFullYear()} Nutranza. All rights reserved.
                        </p>
                        <div className="flex items-center gap-1 text-base font-medium text-neutral-900">
                            <span>Powered by</span>
                            <Link href="https://apexture.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-semibold ml-1">
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
