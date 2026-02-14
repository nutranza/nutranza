import React from 'react';

interface MarqueeProps {
    children: React.ReactNode;
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    className?: string;
    speed?: number; // Duration in seconds
}

const Marquee: React.FC<MarqueeProps> = ({
    children,
    direction = 'left',
    pauseOnHover = false,
    className = '',
    speed = 30,
}) => {
    return (
        <div
            className={`group flex w-full overflow-hidden select-none ${className}`}
        >
            <div
                className={`flex min-w-full shrink-0 gap-6 items-center justify-start p-2 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
                    } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
                style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
            >
                {children}
            </div>
            <div
                aria-hidden="true"
                className={`flex min-w-full shrink-0 gap-6 items-center justify-start p-2 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
                    } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
                style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
            >
                {children}
            </div>
        </div>
    );
};

export default Marquee;
