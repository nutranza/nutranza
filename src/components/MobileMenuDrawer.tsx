"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

interface LinkItem {
    name: string;
    href: string;
}

interface MobileMenuDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    links: LinkItem[];
    isActiveLink: (path: string) => boolean;
}

export default function MobileMenuDrawer({
    isOpen,
    onClose,
    links,
    isActiveLink,
}: MobileMenuDrawerProps) {
    return (
        <>
            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-[110px] left-4 right-4 bg-[#f5f5f5] rounded-[32px] shadow-2xl z-50 transition-all duration-500 ease-[cubic-bezier(0.3,0.0,0.0,1.0)] lg:hidden flex flex-col h-[calc(100dvh-124px)] overflow-hidden ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-8 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col flex-1 px-4 py-6 overflow-y-auto gap-2 scrollbar-hide">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`group flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 font-roca font-semibold ${isActiveLink(link.href)
                                ? "text-secondary"
                                : "bg-transparent text-neutral-900 hover:text-secondary"
                                }`}
                            onClick={onClose}
                        >
                            <span className="text-xl font-roca">{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Drawer Footer — Call button only */}
                <div className="p-6">
                    <Link
                        href="tel:+1234567890"
                        className="flex items-center justify-center gap-2 bg-secondary text-white w-full py-4 rounded-full font-medium shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all duration-300 text-base"
                    >
                        <Phone className="w-5 h-5" />
                        <span>Call +1 234 567 890</span>
                    </Link>
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
