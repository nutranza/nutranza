'use client';

import CountUp from 'react-countup';

const stats = [
    {
        id: 1,
        value: 50,
        suffix: '+',
        label: 'Countries Served'
    },
    {
        id: 2,
        value: 500,
        suffix: '+',
        label: 'B2B Partners'
    },
    {
        id: 3,
        value: 10,
        suffix: 'M+',
        label: 'Units Exported'
    },
    {
        id: 4,
        value: 15,
        suffix: '+',
        label: 'Years Experience'
    }
];

export default function TrustSection() {
    return (
        <section className="md:py-20 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-sm border border-neutral-100/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex items-baseline">
                                <CountUp
                                    end={stat.value}
                                    duration={2.5}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                <span className="text-primary">{stat.suffix}</span>
                            </div>
                            <p className="text-sm md:text-base font-medium text-neutral-600 uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
