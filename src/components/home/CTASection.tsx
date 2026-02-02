import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Soft Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-yellow-50" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
                    Ready to Elevate <br /> Your Product Line?
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-10">
                    Join hundreds of brands who trust Nutranza for premium manufacturing and global export.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-neutral-900 text-white font-bold text-lg hover:bg-neutral-800 hover:scale-105 transition-all shadow-xl"
                    >
                        Get a Custom Quote
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-neutral-900 font-bold text-lg hover:bg-neutral-50 transition-all border border-neutral-200 shadow-sm"
                    >
                        Browse Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
