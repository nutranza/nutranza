"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, ArrowDownToLine } from "lucide-react";
import MobileMenuDrawer from "./MobileMenuDrawer";
import { getCategories } from "@/data/products";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(true);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

    const categories = getCategories();

    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        {
            name: "Categories",
            href: "/categories",
            subLinks: categories.map(cat => ({
                name: cat.name,
                href: `/categories/${cat.slug}`,
            }))
        },
        { name: "Contact", href: "/contact" },
    ];

    const isActiveLink = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full py-4 z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {/* Main header row */}
                <div className="container">

                    <div className="px-4 bg-[#f5f5f5] rounded-full">
                        {/* --- DESKTOP LAYOUT (lg and up) --- */}
                        {/* Left: Nav, Center: Logo, Right: Call Now */}
                        <div className="hidden lg:flex items-center justify-between w-full gap-4">

                            {/* Left Section: Navigation links */}
                            <div className="flex-1 flex justify-start">
                                <nav className="flex items-center gap-7">
                                    {links.map((link) => (
                                        <div
                                            key={link.name}
                                            className="relative flex items-center"
                                            onMouseEnter={() => setActiveDropdown(link.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`flex items-center gap-1 text-lg font-roca font-semibold transition-all duration-300 focus:outline-none py-6 ${isActiveLink(link.href) ? "text-primary" : "text-neutral-900 hover:text-primary"
                                                    }`}
                                            >
                                                {link.name}
                                                {link.subLinks && (
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                                )}
                                            </Link>

                                            {link.subLinks && activeDropdown === link.name && (
                                                <div className="absolute top-full left-0 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                                                    <ul className="bg-[#f5f5f5] shadow-xl rounded-2xl p-2 border border-primary min-w-[200px] flex flex-col gap-1">
                                                        {link.subLinks.map((subLink) => (
                                                            <li key={subLink.name}>
                                                                <Link
                                                                    href={subLink.href}
                                                                    className={`block px-4 py-2.5 rounded-xl font-roca text-base transition-colors duration-200 ${pathname === subLink.href ? "bg-primary/10 text-primary" : "text-neutral-700 hover:bg-black/5 hover:text-primary"}`}
                                                                >
                                                                    {subLink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </nav>
                            </div>

                            {/* Center Section: Logo */}
                            <div className="shrink-0 flex justify-center py-2.5">
                                <Link href="/" className="block group focus:outline-none">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src="/Logo.png"
                                            alt="Nutranza Logo"
                                            width={500}
                                            height={500}
                                            className="h-full w-28 md:w-32 object-contain transition-transform duration-300"
                                            priority
                                        />
                                    </div>
                                </Link>
                            </div>

                            {/* Right Section: Call Button and Brochure Button */}
                            <div className="flex-1 flex justify-end py-2.5 gap-3">
                                <Link
                                    href="/assets/pdf/CHOCOLATE.pdf"
                                    download
                                    target="_blank"
                                    className="hidden lg:flex items-center gap-2 bg-transparent border border-primary text-primary px-5 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 text-lg font-roca focus:outline-none"
                                >
                                    <ArrowDownToLine className="w-5 h-5"  />
                                    Brochure
                                </Link>
                                <Link
                                    href="tel:+1234567890"
                                    className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 text-lg font-roca focus:outline-none"
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
                            <div className="shrink-0 flex items-center py-2.5">
                                <Link href="/" className="block group">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src="/Logo.png"
                                            alt="Nutranza Logo"
                                            width={500}
                                            height={500}
                                            className="h-full w-32 object-contain transition-transform duration-300"
                                            priority
                                        />
                                    </div>
                                </Link>
                            </div>

                            {/* Right Section: Hamburger */}
                            <div className="flex items-center justify-end py-2.5">
                                <button
                                    className="p-2 text-neutral-900 hover:text-primary focus:outline-none z-50 relative cursor-pointer"
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
