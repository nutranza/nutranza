import Image from "next/image";
import Link from "next/link";
import WaveDecoration from "../ui/WaveDecoration";


export default function BrandAmbassador() {
    return (
        <section className="w-full overflow-hidden relative">
            <div className="bg-[#ffefc4] xl:pt-28 lg:pt-20 pt-16 relative z-10 -mt-[2px] -mb-[2px]">
                <div className="container">
                    {/* 
                        Wrapper div for positioning. 
                        We removed overflow-hidden from here to allow the image to pop out. 
                    */}
                    <div className="relative w-full rounded-[2.5rem] shadow-2xl bg-accent">

                        {/* Content Layer - sits on top of background (z-10), allows overflow */}
                        <div className="flex flex-col lg:flex-row items-stretch md:p-12 sm:p-8 p-6 relative lg:gap-0 gap-8">

                            {/* Text Content Side */}
                            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 order-last lg:order-first">

                                {/* Main Headline */}
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary">
                                    <span className="font-black">Join Our Global</span> <br />
                                    <span className="text-white">Partner Program</span>
                                </h2>

                                {/* Subhead / Value Prop */}
                                <p className="text-base sm:text-xl font-medium text-white max-w-xl">
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

                            <div className="w-full lg:w-2/5 relative z-0 order-first lg:order-last">
                                <div className="lg:absolute xl:-bottom-12 lg:-bottom-15 right-0 xl:h-[600px] lg:h-[550px] h-[450px] w-full">
                                    <Image
                                        src="/assets/images/brand-ambassador-1.png"
                                        alt="Nutranza Brand Ambassador"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Wave */}
            <WaveDecoration position="bottom" color="text-[#ffefc4]" className="bg-[#f5efe6]" />
        </section>
    );
}
