"use client";

import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

export interface LinkItem {
    name: string;
    href: string;
    subLinks?: { name: string; href: string }[];
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
    const [expandedLinks, setExpandedLinks] = useState<Record<string, boolean>>({});

    const toggleExpand = (name: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedLinks(prev => ({ ...prev, [name]: !prev[name] }));
    };
    return (
        <>
            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-[110px] left-4 right-4 bg-[#f5f5f5] rounded-[32px] shadow-2xl z-50 transition-all duration-500 ease-[cubic-bezier(0.3,0.0,0.0,1.0)] lg:hidden flex flex-col h-[calc(100dvh-124px)] overflow-hidden ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-8 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col flex-1 px-4 py-6 overflow-y-auto gap-2 scrollbar-hide">
                    {links.map((link) => (
                        <div key={link.name} className="flex flex-col">
                            <Link
                                href={link.href}
                                className={`w-full group flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 font-roca font-semibold ${isActiveLink(link.href)
                                    ? "text-primary"
                                    : "bg-transparent text-neutral-900 hover:text-primary"
                                    }`}
                                onClick={onClose}
                            >
                                <span className="text-xl font-roca">{link.name}</span>
                                {link.subLinks && (
                                    <span
                                        onClick={(e) => toggleExpand(link.name, e)}
                                        className="p-2 -mr-2 text-neutral-500 hover:text-primary focus:outline-none"
                                    >
                                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedLinks[link.name] ? "rotate-180" : ""}`} />
                                    </span>
                                )}
                            </Link>

                            {link.subLinks && (
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedLinks[link.name] ? "max-h-[400px] opacity-100 mb-2" : "max-h-0 opacity-0"}`}
                                >
                                    <div className="flex flex-col gap-1 pl-10 pr-6 py-2 border-l-2 border-neutral-200 ml-6">
                                        {link.subLinks.map(subLink => (
                                            <Link
                                                key={subLink.name}
                                                href={subLink.href}
                                                className={`block py-2.5 text-lg font-roca transition-colors ${isActiveLink(subLink.href) ? "text-primary" : "text-neutral-600 hover:text-primary"}`}
                                                onClick={onClose}
                                            >
                                                {subLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Drawer Footer — Call button only */}
                <div className="p-6">
                    <Link
                        href="tel:+1234567890"
                        className="flex items-center justify-center gap-2 bg-primary text-white w-full py-4 rounded-full font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all duration-300 text-base"
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
