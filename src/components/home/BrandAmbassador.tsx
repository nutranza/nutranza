import Image from "next/image";
import Link from "next/link";

export default function BrandAmbassador() {
    return (
        <section className="bg-[#ffefc4] w-full lg:py-20 py-16 overflow-hidden">
            <div className="container">
                {/* 
                    Wrapper div for positioning. 
                    We removed overflow-hidden from here to allow the image to pop out. 
                */}
                <div className="relative w-full rounded-[2.5rem] shadow-2xl bg-accent">

                    {/* Content Layer - sits on top of background (z-10), allows overflow */}
                    <div className="flex flex-col lg:flex-row items-stretch md:p-12 p-8 relative lg:gap-0 gap-8">

                        {/* Text Content Side */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 order-last lg:order-first">
                            {/* Handwritten/Script Style Header */}
                            {/* <span className="font-heading2 text-white/90 text-3xl md:text-4xl lg:text-5xl -rotate-2">
                                Go Global with Nutranza
                            </span> */}

                            {/* Main Headline */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                                Join Our Global <br />
                                <span className="text-white">Partner Program</span>
                            </h2>

                            {/* Subhead / Value Prop */}
                            <p className="text-lg md:text-xl text-white leading-relaxed">
                                Unlock exclusive access to premium healthcare food products.
                                Manufactured for excellence, exported to the world.
                            </p>

                            {/* Offer / Incentive */}
                            <div className="flex flex-col items-center lg:items-start space-y-1">
                                <span className="text-white font-bold text-lg">
                                    Start your B2B journey today
                                </span>
                                <span className="text-primary font-semibold">
                                    Distributors • Retailers • Wholesalers
                                </span>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-primary hover:bg-primary/80 text-neutral-900 font-medium rounded-full transition-all duration-300 flex items-center gap-2"
                            >
                                Become a Partner
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link>
                        </div>

                        <div className="w-full lg:w-1/2 relative z-0 min-h-[500px] lg:min-h-full order-first lg:order-last">
                            <Image
                                src="/images/brand-ambassador.png"
                                alt="Nutranza Brand Ambassador"
                                fill
                                className="object-contain xl:scale-[1.5] lg:scale-[1.4] lg:-mt-10"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
