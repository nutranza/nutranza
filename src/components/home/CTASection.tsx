

export default function CTASection() {
    return (
        <section className="relative md:py-20 py-16 overflow-hidden bg-[#FEFDF7]">
            <div className="container">
                <div>
                    <div className="text-center space-y-5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 lg:max-w-2xl max-w-lg mx-auto">
                            Join the Nutranza Performance Community
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                            Get exclusive access to nutritional guides, early product drops, and <br />15% off your first order.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center w-full sm:max-w-md mx-auto gap-3">
                            <input className="w-full bg-white/20 border border-neutral-900 rounded-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-900 text-neutral-900" placeholder="Your email address" type="email" />
                            <button className="sm:w-auto w-full px-6 py-3 rounded-full bg-primary text-neutral-900 font-semibold hover:bg-primary/80 transition-all duration-300 cursor-pointer">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
