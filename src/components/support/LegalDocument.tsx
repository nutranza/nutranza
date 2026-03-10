import type { SupportSection } from "@/data/support";

interface LegalDocumentProps {
    sections: readonly SupportSection[];
}

export default function LegalDocument({ sections }: LegalDocumentProps) {
    return (
        <article className="bg-white rounded-[32px] border border-primary/10 shadow-soft overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-10">
                    {sections.map((section) => (
                        <section key={section.title} className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl text-accent font-black">
                                {section.title}
                            </h2>

                            {section.paragraphs.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className="text-base sm:text-lg font-medium text-neutral-900 leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}

                            {section.bullets ? (
                                <ul className="space-y-3 pl-5">
                                    {section.bullets.map((bullet) => (
                                        <li
                                            key={bullet}
                                            className="text-base sm:text-lg font-medium text-neutral-900 leading-relaxed list-disc"
                                        >
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </section>
                    ))}
                </div>
            </div>
        </article>
    );
}
