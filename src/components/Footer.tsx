import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#EBE6DE] pt-16 pb-8 text-white">
            <div className="container mx-auto px-4">
                {/* Main Footer Content - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5px_36.6512%_1.5px_1fr] lg:gap-16 gap-4 md:gap-8 mb-12">
                    {/* Column 1: Quick Links (Left) */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-secondary rounded-full"></div>
                            <h4 className="font-semibold text-xl text-secondary">Quick Links</h4>
                        </div>
                        <ul className="space-y-4 w-full">
                            <li>
                                <Link href="/" className="text-lg font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-lg font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories" className="text-lg font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" className="text-lg font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-lg font-medium text-neutral-900 hover:text-secondary transition-colors inline-block">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Divider 1 */}
                    <div className="flex justify-center items-center w-full md:w-auto my-2 md:my-0">
                        <div className="h-0.5 w-full md:h-full md:w-full bg-linear-to-r md:bg-linear-to-b from-transparent via-secondary to-transparent"></div>
                    </div>

                    {/* Column 2: Brand & Social (Center) */}
                    <div className="space-y-6 flex flex-col items-center text-center">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-2 justify-center">
                                {/* Use a brightness filter to make the logo white if it's black, or rely on it being visible. 
                                    Assuming the existing logo might need adjustment or is PNG. 
                                    For now, using the image as is but noting it might need a white version. 
                                    If the logo is dark, we might need a wrapper or filter.
                                    Let's attempt a brightness filter just in case, or remove if it looks bad.
                                */}
                                <Image
                                    src="/Logo.png"
                                    alt="Nutranza"
                                    width={180}
                                    height={50}
                                    className=""
                                />
                            </div>
                        </Link>

                        <p className="text-lg font-medium text-neutral-900 leading-relaxed">
                            Nutranza provides trusted, compassionate healthcare for families through clinic, pharmacy, and telehealth services.
                        </p>

                        <div className="flex gap-4 justify-center">
                            <Link
                                href="#"
                                className="p-3 group border border-secondary rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} className="text-secondary group-hover:text-white" />
                            </Link>
                            <Link
                                href="#"
                                className="p-3 group border border-secondary rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} className="text-secondary group-hover:text-white" />
                            </Link>
                            <Link
                                href="#"
                                className="p-3 group border border-secondary rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} className="text-secondary group-hover:text-white" />
                            </Link>
                            <Link
                                href="#"
                                className="p-3 group border border-secondary rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} className="text-secondary group-hover:text-white" />
                            </Link>
                        </div>
                    </div>

                    {/* Divider 2 */}
                    <div className="flex justify-center items-center w-full md:w-auto my-2 md:my-0">
                        <div className="h-0.5 w-full md:h-full md:w-full bg-linear-to-r md:bg-linear-to-b from-transparent via-secondary to-transparent"></div>
                    </div>

                    {/* Column 3: Get In Touch (Right) */}
                    <div className="space-y-6 flex flex-col items-center md:items-end text-center md:text-right">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-secondary rounded-full"></div>
                            <h4 className="font-semibold text-xl text-secondary">Get In Touch</h4>
                        </div>
                        <ul className="space-y-4 w-full">
                            <li>
                                <a href="mailto:support@nutranza.com" className="text-lg font-medium text-neutral-900 hover:text-secondary transition-colors block">
                                    support@nutranza.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+15551234567" className="text-lg font-medium text-neutral-900 hover:text-secondary transition-colors block">
                                    +1 (555) 123-4567
                                </a>
                            </li>
                            <li>
                                <span className="text-lg font-medium text-neutral-900 block">
                                    123 Nutrition Way,<br /> Wellness City, WC 12345
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Credits */}
                <div className="flex flex-col">
                    <div className="h-0.5 w-full bg-linear-to-r from-transparent via-secondary to-transparent mb-8"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-medium text-neutral-900">
                            © 2026 Nutranza | All Rights Reserved
                        </p>
                        <div className="flex gap-1">
                            <span className="font-medium text-neutral-900">Powered by -</span>
                            <Link href="https://apexture.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Apexture Pvt. Ltd.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
