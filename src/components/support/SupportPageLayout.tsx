import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import WaveDecoration from "@/components/ui/WaveDecoration";
import { cn } from "@/lib/utils";

interface TitleSegment {
    text: string;
    emphasized?: boolean;
}

interface SupportPageLayoutProps {
    title: string;
    titleSegments?: readonly TitleSegment[];
    description: string;
    eyebrow?: string;
    eyebrowIcon?: LucideIcon;
    eyebrowClassName?: string;
    titleClassName?: string;
    children: ReactNode;
}

export default function SupportPageLayout({
    title,
    titleSegments,
    description,
    eyebrow,
    eyebrowIcon: EyebrowIcon,
    eyebrowClassName,
    titleClassName,
    children,
}: SupportPageLayoutProps) {
    return (
        <main>
            <section className="bg-[#FEFDF7] sm:pt-36 pt-32 lg:pb-20 pb-16 relative z-10 -my-0.5">
                <div className="container">
                    <div className="flex flex-col gap-8 text-center max-w-4xl mx-auto">
                        {eyebrow ? (
                            <div
                                className={cn(
                                    "flex items-center justify-center gap-2 text-lg uppercase font-medium font-roca",
                                    eyebrowClassName ?? "text-secondary"
                                )}
                            >
                                {EyebrowIcon ? <EyebrowIcon className="w-5 h-5" /> : null}
                                <span>{eyebrow}</span>
                            </div>
                        ) : null}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                            {titleSegments && titleSegments.length > 0 ? (
                                titleSegments.map((segment) => (
                                    <span
                                        key={segment.text}
                                        className={cn(
                                            segment.emphasized ? "font-black" : "font-normal",
                                            titleClassName ?? "text-primary"
                                        )}
                                    >
                                        {segment.text}{" "}
                                    </span>
                                ))
                            ) : (
                                <span
                                    className={cn(
                                        "font-black",
                                        titleClassName ?? "text-primary"
                                    )}
                                >
                                    {title}
                                </span>
                            )}
                        </h1>
                        <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-900 max-w-4xl mx-auto">
                            {description}
                        </p>
                    </div>

                    <div className="mt-16">{children}</div>
                </div>
            </section>

            <WaveDecoration
                position="bottom"
                color="text-[#FEFDF7]"
                className="bg-[#EBE6DE]"
            />
        </main>
    );
}
