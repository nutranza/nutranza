import Image from 'next/image';
import WaveDecoration from '../ui/WaveDecoration';

export default function OurMissionTeamSection() {
    return (
        <section className="w-full overflow-hidden relative">
            <div className="py-16 lg:py-20 bg-[#EBE6DE] relative z-10 -my-0.5">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:h-[600px] lg:h-[560px]">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-6 h-full">
                            <div className="w-full aspect-4/3 md:aspect-auto flex-1 rounded-3xl overflow-hidden relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                                    alt="NutranZa Team"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="w-full rounded-3xl bg-accent p-6 flex flex-col justify-center items-center text-center shadow-sm">
                                <h3 className="sm:text-3xl text-2xl font-semibold text-white mb-4">Our Team</h3>
                                <p className="text-white font-medium text-lg">
                                    Our experienced team offers personalized, respectful service to ensure your B2B shipments run smoothly, delivering quality products across borders at every stage.
                                </p>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="h-full aspect-4/3 md:aspect-auto rounded-3xl overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?q=80&w=2669&auto=format&fit=crop"
                                alt="NutranZa Professional"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-6 h-full">
                            <div className="w-full rounded-3xl bg-accent p-6 flex flex-col justify-center items-center text-center shadow-sm">
                                <h3 className="sm:text-3xl text-2xl font-semibold text-white mb-4">Our Mission</h3>
                                <p className="text-white font-medium text-lg">
                                    NutranZa delivers trusted, accessible health-conscious products including peanut butter, protein oats, Shilajit, and rice cakes, ensuring reliable supply chains for B2B clients globally.
                                </p>
                            </div>
                            <div className="w-full aspect-4/3 md:aspect-auto flex-1 rounded-3xl overflow-hidden relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
                                    alt="NutranZa Partnership"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Wave Transitioning into Gradient Section */}
            <WaveDecoration position="bottom" color="text-[#EBE6DE]" className="bg-[#f3cf6e]" />
        </section>
    );
}
