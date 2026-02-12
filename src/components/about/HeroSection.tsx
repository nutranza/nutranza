export default function HeroSection() {
    const metrics = [
        { label: "Countries Served", value: "20+" },
        { label: "Certified Organic", value: "100%" },
        { label: "Years of Excellence", value: "9+" },
    ];

    return (
        <section className="md:py-20 py-16">
            <div className="container max-w-5xl">
                {/* Main Content */}
                <div className="text-center space-y-8">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                        Premium Healthcare Food{" "}
                        <span className="text-primary">Export Excellence</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted B2B partner in organic, plant-based food products. Delivering certified quality to international distributors and retailers across the globe.
                    </p>

                    {/* Simple Metrics Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 bg-soft-bg rounded-full border border-neutral-200"
                            >
                                <span className="text-2xl font-bold text-primary">
                                    {metric.value}
                                </span>
                                <span className="text-sm text-neutral-600">
                                    {metric.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
