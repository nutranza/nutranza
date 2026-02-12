import React from 'react';
import { cn } from "@/lib/utils";

interface WaveSeparatorProps extends React.SVGProps<SVGSVGElement> {
    position?: 'top' | 'bottom';
    color?: string;
    backgroundColor?: string;
    height?: string; // Tailwind height class or CSS value
    className?: string;
    isAbsolute?: boolean;
}

export default function WaveSeparator({
    position = 'bottom',
    color = '#EBE6DE',
    backgroundColor,
    height = 'h-[60px] md:h-[100px]',
    className,
    isAbsolute = true,
    style,
    ...props
}: WaveSeparatorProps) {
    return (
        <div
            className={cn(
                "w-full overflow-hidden z-20 pointer-events-none",
                isAbsolute ? "absolute left-0" : "relative",
                isAbsolute && (position === 'top' ? "top-0 rotate-180" : "bottom-0"),
                !isAbsolute && position === 'top' && "rotate-180",
                className
            )}
            style={{ backgroundColor: backgroundColor, ...style }}
        >
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className={cn(
                    "relative block w-[calc(110%+1.3px)]",
                    height
                )}
                style={{ fill: color }}
                {...props}
            >
                <path d="M0,160L24,181.3C48,203,96,245,144,261.3C192,277,240,267,288,234.7C336,203,384,149,432,154.7C480,160,528,224,576,224C624,224,672,160,720,154.7C768,149,816,203,864,208C912,213,960,171,1008,181.3C1056,192,1104,256,1152,261.3C1200,267,1248,213,1296,208C1344,203,1392,245,1416,266.7L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
            </svg>
        </div>
    );
}
