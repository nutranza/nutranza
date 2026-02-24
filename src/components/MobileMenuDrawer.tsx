"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Search, Phone, X } from "lucide-react";

interface LinkItem {
    name: string;
    href: string;
}

interface MobileMenuDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    isMobileSearchOpen: boolean;
    onCloseMobileSearch: () => void;
    links: LinkItem[];
    isActiveLink: (path: string) => boolean;
    popularSearches: string[];
}

export default function MobileMenuDrawer({
    isOpen,
    onClose,
    isMobileSearchOpen,
    onCloseMobileSearch,
    links,
    isActiveLink,
    popularSearches,
}: MobileMenuDrawerProps) {
    const [mobileSearchQuery, setMobileSearchQuery] = useState<string>("");
    const mobileSearchInputRef = useRef<HTMLInputElement>(null);

    // Focus mobile input when mobile search opens
    useEffect(() => {
        if (isMobileSearchOpen) {
            const timer = setTimeout(() => {
                mobileSearchInputRef.current?.focus();
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isMobileSearchOpen]);

    // Handle close search
    const handleCloseSearch = () => {
        onCloseMobileSearch();
        setMobileSearchQuery("");
    };

    return (
        <>
            {/* ── Mobile Full-Screen Search Overlay ── */}
            <div
                className={`fixed inset-0 z-[60] bg-[#F9F0EF] flex flex-col lg:hidden transition-all duration-500 ${isMobileSearchOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-4"
                    }`}
                style={{
                    transitionTimingFunction: isMobileSearchOpen
                        ? "cubic-bezier(0.22, 1, 0.36, 1)"
                        : "cubic-bezier(0.55, 0, 1, 0.45)",
                }}
            >
                {/* Overlay Header */}
                <div className="flex items-center justify-between px-5 pt-6 pb-5">
                    <h2 className="text-lg font-extrabold tracking-widest uppercase text-secondary">
                        Search Our Store
                    </h2>
                    <button
                        onClick={handleCloseSearch}
                        className="p-1 text-neutral-800 hover:text-secondary transition-colors"
                        aria-label="Close search"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Search Input */}
                <div className="px-5">
                    <div className="relative">
                        <input
                            ref={mobileSearchInputRef}
                            type="text"
                            value={mobileSearchQuery}
                            onChange={(e) => setMobileSearchQuery(e.target.value)}
                            placeholder="Search products"
                            className="w-full pl-5 pr-12 py-4 rounded-full border-2 border-secondary/40 bg-white text-sm focus:outline-none focus:border-secondary transition-all duration-200 placeholder:text-gray-400"
                        />
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Popular Searches */}
                <div className="px-5 mt-5">
                    <p className="text-sm font-semibold text-neutral-600 mb-3">
                        Popular Searches:
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {popularSearches.map((term) => (
                            <button
                                key={term}
                                onClick={() => setMobileSearchQuery(term)}
                                className="text-sm font-bold text-secondary hover:underline transition-all duration-200"
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-0 right-0 h-dvh w-full sm:w-[350px] bg-[#EBE6DE] shadow-2xl z-50 transition-transform duration-500 ease-[cubic-bezier(0.3,0.0,0.0,1.0)] lg:hidden flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-300/30">
                    <span className="font-roca font-semibold text-2xl">Menu</span>
                    <button
                        className="p-2 text-neutral-900 hover:text-black focus:outline-none"
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <X size={24} className="hover:text-secondary" />
                    </button>
                </div>

                <div className="flex flex-col flex-1 px-6 py-8 overflow-y-auto">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`group flex items-center justify-between py-4 border-b border-gray-300/30 transition-colors ${isActiveLink(link.href) ? "text-secondary" : "text-neutral-800 hover:text-secondary"
                                }`}
                            onClick={onClose}
                        >
                            <span className="text-xl font-semibold font-roca">{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Drawer Footer — Call button only */}
                <div className="p-6 bg-white/50 border-t border-gray-300/30">
                    <a
                        href="tel:+1234567890"
                        className="flex items-center justify-center gap-2 bg-secondary text-white w-full py-3.5 rounded-full font-medium hover:bg-secondary/90 transition-colors shadow shadow-secondary/20 text-sm tracking-wide uppercase"
                    >
                        <Phone className="w-4 h-4" />
                        <span>Call +1 234 567 890</span>
                    </a>
                </div>
            </div>

            {/* Mobile Blur Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                style={{ top: 0, left: 0, right: 0, bottom: 0, height: "100dvh" }}
                onClick={onClose}
                aria-hidden="true"
            />
        </>
    );
}
