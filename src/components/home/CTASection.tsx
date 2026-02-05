import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative md:pb-20 pb-16 overflow-hidden">
            <div className="container">
                <div className="relative z-10 bg-accent lg:p-20 md:p-12 p-8 rounded-3xl">
                    <div className="text-center space-y-5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white lg:max-w-2xl max-w-lg mx-auto">
                            Join the Nutranza Performance Community
                        </h2>
                        <p className="text-lg md:text-xl text-white leading-relaxed">
                            Get exclusive access to nutritional guides, early product drops, and <br />15% off your first order.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center w-full sm:max-w-md mx-auto gap-3">
                            <input className="w-full bg-white/20 border-white/20 rounded-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white text-white" placeholder="Your email address" type="email" />
                            <button className="sm:w-auto w-full px-6 py-3 rounded-full bg-primary text-neutral-900 font-semibold hover:bg-primary/80 transition-all duration-300 cursor-pointer">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
