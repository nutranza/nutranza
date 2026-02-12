// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// export default function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const pathname = usePathname();

//     const leftLinks = [
//         { name: "Home", href: "/" },
//         { name: "About Us", href: "/about" },
//     ];

//     const rightLinks = [
//         { name: "Products", href: "/products" },
//         { name: "Contact", href: "/contact" },
//     ];

//     const allLinks = [...leftLinks, ...rightLinks];

//     const isActiveLink = (path: string) => pathname === path;

//     return (
//         <header
//             className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-gray-100/50"
//         >
//             <div className="container mx-auto px-4">
//                 <div className="flex items-center justify-between">

//                     {/* Mobile Logo (Left Aligned) */}
//                     <div className="md:hidden shrink-0">
//                         <Link href="/" className="flex items-center">
//                             <div className="relative">
//                                 <Image
//                                     src="/Logo.png"
//                                     alt="Nutranza Logo"
//                                     width={500}
//                                     height={500}
//                                     className="h-full w-28 object-contain"
//                                     priority
//                                 />
//                             </div>
//                         </Link>
//                     </div>

//                     {/* Desktop Centered Navigation (Home, About, LOGO, Product, Contact) */}
//                     <nav className="hidden md:flex flex-1 items-center justify-center gap-12">
//                         {/* Left Links */}
//                         <div className="flex items-center gap-8">
//                             {leftLinks.map((link) => (
//                                 <Link
//                                     key={link.name}
//                                     href={link.href}
//                                     className={`font-medium transition-colors duration-200 relative group text-base ${isActiveLink(link.href) ? "text-secondary" : "text-black hover:text-secondary"
//                                         }`}
//                                 >
//                                     {link.name}
//                                     <span
//                                         className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
//                                             }`}
//                                     />
//                                 </Link>
//                             ))}
//                         </div>

//                         {/* Centered Logo */}
//                         <Link href="/" className="shrink-0 ">
//                             <div className="flex items-center shrink-0 focus-visible:outline-none">
//                                 <Image
//                                     src="/Logo.png"
//                                     alt="Nutranza Logo"
//                                     width={500}
//                                     height={500}
//                                     className="h-auto w-32 max-w-full"
//                                     priority
//                                 />
//                             </div>
//                         </Link>

//                         {/* Right Links */}
//                         <div className="flex items-center gap-8">
//                             {rightLinks.map((link) => (
//                                 <Link
//                                     key={link.name}
//                                     href={link.href}
//                                     className={`font-medium transition-colors duration-200 relative group text-base ${isActiveLink(link.href) ? "text-secondary" : "text-black hover:text-secondary"
//                                         }`}
//                                 >
//                                     {link.name}
//                                     <span
//                                         className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
//                                             }`}
//                                     />
//                                 </Link>
//                             ))}
//                         </div>
//                     </nav>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden flex items-center">
//                         <button
//                             className="p-2 text-black hover:text-secondary focus:outline-none"
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             aria-label="Toggle menu"
//                         >
//                             <div className="w-6 h-5 relative flex flex-col justify-between">
//                                 <span
//                                     className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
//                                         }`}
//                                 />
//                                 <span
//                                     className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
//                                         }`}
//                                 />
//                                 <span
//                                     className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
//                                         }`}
//                                 />
//                             </div>
//                         </button>
//                     </div>

//                 </div>

//                 {/* Mobile Navigation */}
//                 <div
//                     className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                         }`}
//                 >
//                     <div className="flex flex-col px-4 py-4 space-y-4">
//                         {allLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 href={link.href}
//                                 className={`font-medium text-lg border-b border-gray-50 pb-2 transition-colors ${isActiveLink(link.href) ? "text-secondary" : "text-black hover:text-secondary"
//                                     }`}
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, Phone } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Categories", href: "/categories" },
        { name: "Contact", href: "/contact" },
    ];

    const isActiveLink = (path: string) => pathname === path;

    return (
        <header
            className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#EBE6DE] py-4"
        >
            <div className="container">
                <div className="flex items-center justify-between gap-8">

                    {/* Left Section: Logo + Navigation */}
                    <div className="flex items-center gap-8">
                        {/* Logo */}
                        <Link href="/" className="shrink-0 block">
                            <div className="relative">
                                <Image
                                    src="/Logo.png"
                                    alt="Nutranza Logo"
                                    width={500}
                                    height={500}
                                    className="h-full w-32 object-contain"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={` transition-colors duration-200 relative group text-lg tracking-wider font-heading font-semibold ${isActiveLink(link.href) ? "text-secondary" : "text-neutral-900 hover:text-secondary"
                                        }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Right Section: Search + Call Button */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Search Input */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all w-64 text-sm"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>

                        {/* Call Now Button */}
                        <a
                            href="tel:+1234567890"
                            className="flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-full font-medium hover:bg-secondary/90 transition-colors shadow-sm text-sm"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Call Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center ml-auto">
                        <button
                            className="p-2 text-black hover:text-secondary focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                        }`}
                                />
                            </div>
                        </button>
                    </div>

                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden absolute top-full left-0 right-0 bg-[#EBE6DE] backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col px-4 py-4 space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-lg pb-2 transition-colors font-heading font-semibold ${isActiveLink(link.href) ? "text-secondary" : "text-black hover:text-secondary"
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Mobile Action Items */}
                        <div className="pt-2 flex flex-col gap-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-sm"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center justify-center gap-2 bg-secondary text-white px-5 py-2 rounded-full font-medium hover:bg-secondary/90 transition-colors shadow-sm text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
