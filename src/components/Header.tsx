"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import MobileMenuDrawer from "./MobileMenuDrawer";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname();

    // Handle scroll direction to show/hide header
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Categories", href: "/categories" },
        { name: "Contact", href: "/contact" },
    ];

    const isActiveLink = (path: string) => pathname === path;

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full py-4 z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {/* Main header row */}
                <div className="container">

                    <div className="py-2.5 px-4 bg-[#f5f5f5] rounded-full">
                        {/* --- DESKTOP LAYOUT (lg and up) --- */}
                        {/* Left: Nav, Center: Logo, Right: Call Now */}
                        <div className="hidden lg:flex items-center justify-between w-full gap-4">

                            {/* Left Section: Navigation links */}
                            <div className="flex-1 flex justify-start">
                                <nav className="flex items-center gap-8">
                                    {links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`relative group text-lg font-roca font-semibold transition-all duration-300 focus:outline-none ${isActiveLink(link.href) ? "text-secondary" : "text-neutral-900 hover:text-secondary"
                                                }`}
                                        >
                                            {link.name}
                                            {/* <span
                                                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-secondary transition-all duration-300 ease-out ${isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                                                    }`}
                                            /> */}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Center Section: Logo */}
                            <div className="shrink-0 flex justify-center">
                                <Link href="/" className="block group focus:outline-none">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src="/Logo.png"
                                            alt="Nutranza Logo"
                                            width={500}
                                            height={500}
                                            className="h-full w-28 md:w-32 object-contain transition-transform duration-300 group-hover:scale-105"
                                            priority
                                        />
                                    </div>
                                </Link>
                            </div>

                            {/* Right Section: Call Button */}
                            <div className="flex-1 flex justify-end">
                                <Link
                                    href="tel:+1234567890"
                                    className="flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-full font-medium hover:bg-secondary/90 transition-all duration-300 text-lg focus:outline-none"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call Now</span>
                                </Link>
                            </div>

                        </div>

                        {/* --- MOBILE / TABLET LAYOUT (below lg) --- */}
                        {/* Left: Logo, Right: Hamburger */}
                        <div className="flex lg:hidden items-center justify-between w-full">

                            {/* Left Section: Logo */}
                            <div className="shrink-0 flex items-center">
                                <Link href="/" className="block group">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src="/Logo.png"
                                            alt="Nutranza Logo"
                                            width={500}
                                            height={500}
                                            className="h-full w-32 object-contain transition-transform duration-300 group-hover:scale-105"
                                            priority
                                        />
                                    </div>
                                </Link>
                            </div>

                            {/* Right Section: Hamburger */}
                            <div className="flex items-center justify-end">
                                <button
                                    className="p-2 text-neutral-900 hover:text-secondary focus:outline-none z-50 relative cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    aria-label="Toggle menu"
                                >
                                    <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                                        <span
                                            className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 origin-left ${isMobileMenuOpen ? "rotate-45 translate-x-px translate-y-px" : ""
                                                }`}
                                        />
                                        <span
                                            className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? "opacity-0 translate-x-3" : "opacity-100"
                                                }`}
                                        />
                                        <span
                                            className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 origin-left ${isMobileMenuOpen ? "-rotate-45 translate-x-px -translate-y-px" : ""
                                                }`}
                                        />
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>


            </header>

            <MobileMenuDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                links={links}
                isActiveLink={isActiveLink}
            />
        </>
    );
}
