"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Search, Phone, X } from "lucide-react";
import MobileMenuDrawer from "./MobileMenuDrawer";

export const popularSearches = ["Peanut Butter", "Oats", "Protein Powder"];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const pathname = usePathname();
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Focus desktop input when search opens
    useEffect(() => {
        if (isSearchOpen) {
            const timer = setTimeout(() => {
                searchInputRef.current?.focus();
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [isSearchOpen]);

    // Close search overlays on route change
    useEffect(() => {
        setIsSearchOpen(false);
        setIsMobileSearchOpen(false);
    }, [pathname]);

    // Prevent background scrolling when mobile menu or mobile search is open
    useEffect(() => {
        if (isMobileMenuOpen || isMobileSearchOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen, isMobileSearchOpen]);

    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Categories", href: "/categories" },
        { name: "Contact", href: "/contact" },
    ];

    const isActiveLink = (path: string) => pathname === path;

    return (
        <>
            <header className="sticky top-0 left-0 right-0 z-50 bg-[#EBE6DE]/95 backdrop-blur-md shadow-sm border-b border-gray-100/50">
                {/* Main header row */}
                <div className="container relative z-10 py-4">
                    <div className="flex items-center justify-between gap-8">

                        {/* Left Section: Logo + Navigation */}
                        <div className="flex items-center gap-8 lg:gap-12">
                            {/* Logo */}
                            <Link href="/" className="shrink-0 block group">
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

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center gap-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`relative group text-xl font-roca font-semibold transition-all duration-300 ${isActiveLink(link.href) ? "text-secondary" : "text-neutral-800 hover:text-secondary"
                                            }`}
                                    >
                                        {link.name}
                                        <span
                                            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-secondary transition-all duration-300 ease-out ${isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Right Section: Desktop Search Text + Call Button */}
                        <div className="hidden lg:flex items-center gap-6">
                            {/* Desktop Search Text Button (no icon) */}
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="text-neutral-900 hover:text-secondary font-roca text-xl font-semibold transition-all duration-300 cursor-pointer"
                                aria-label="Toggle search"
                                aria-expanded={isSearchOpen}
                            >
                                {isSearchOpen ? "Close" : "Search"}
                            </button>

                            {/* Call Now Button */}
                            <Link
                                href="tel:+1234567890"
                                className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full font-medium hover:bg-secondary/90 transition-all duration-300 shadow hover:shadow-md hover:-translate-y-0.5 text-sm uppercase tracking-wide"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Call Now</span>
                            </Link>
                        </div>

                        {/* Mobile / Tablet Actions: Search Icon + Hamburger */}
                        <div className="lg:hidden flex items-center gap-3 ml-auto">
                            {/* Mobile Search Icon Button */}
                            <button
                                className="p-2 text-neutral-900 hover:text-secondary focus:outline-none cursor-pointer"
                                onClick={() => setIsMobileSearchOpen(true)}
                                aria-label="Open search"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Hamburger */}
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

                {/* Desktop Search Dropdown Panel — slides down from top: 0, covering the header (lg+ only) */}
                <div
                    className={`hidden lg:block absolute top-0 left-0 w-full bg-[#EBE6DE]/95 backdrop-blur-md shadow-md border-b border-gray-100/50 transition-all duration-500 ease-in-out z-50 ${isSearchOpen
                            ? "translate-y-0 opacity-100 pointer-events-auto"
                            : "-translate-y-full opacity-0 pointer-events-none"
                        }`}
                    style={{
                        transitionTimingFunction: isSearchOpen
                            ? "cubic-bezier(0.22, 1, 0.36, 1)"
                            : "cubic-bezier(0.55, 0, 1, 0.45)",
                    }}
                >
                    <div className="container py-4 flex flex-row items-center justify-between gap-8 h-full">
                        {/* Logo on the left */}
                        <div className="w-28 md:w-32 shrink-0 flex items-center">
                            <Link href="/" className="block group w-full" onClick={() => setIsSearchOpen(false)}>
                                <Image
                                    src="/Logo.png"
                                    alt="Nutranza Logo"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Search Input and Popular Searches in the center */}
                        <div className="flex-1 max-w-2xl flex flex-col items-center gap-3">
                            <div className="relative w-full">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search products"
                                    className="w-full pl-12 pr-12 py-3 rounded-full border border-secondary bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all duration-200 placeholder:text-gray-400"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-900 hover:text-secondary transition-colors"
                                        aria-label="Clear search"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* Popular Searches */}
                            <div className="flex items-center justify-center gap-3 flex-wrap">
                                <span className="text-sm text-neutral-900 font-medium">
                                    Popular Searches:
                                </span>
                                {popularSearches.map((term) => (
                                    <button
                                        key={term}
                                        onClick={() => setSearchQuery(term)}
                                        className="text-sm font-semibold text-secondary hover:underline transition-all duration-200"
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Close button on the right */}
                        <div className="w-28 md:w-32 shrink-0 flex justify-end items-center">
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="text-neutral-700 hover:text-secondary transition-colors duration-200 uppercase text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer"
                                aria-label="Close search"
                            >
                                Close
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenuDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                isMobileSearchOpen={isMobileSearchOpen}
                onCloseMobileSearch={() => setIsMobileSearchOpen(false)}
                links={links}
                isActiveLink={isActiveLink}
                popularSearches={popularSearches}
            />
        </>
    );
}
