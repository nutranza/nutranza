import React from 'react';

interface WaveDecorationProps {
    position?: 'top' | 'bottom';
    color?: string; // Tailwind text color class, e.g., 'text-[#ffefc4]'
    className?: string; // Additional classes for the container (e.g., bg color)
    style?: React.CSSProperties; // Inline styles for dynamic colors
}

export default function WaveDecoration({
    position = 'bottom',
    color = 'text-current',
    className = '',
    style
}: WaveDecorationProps) {
    // 6 waves to ensure it covers even ultra-wide 4k screens smoothly.
    // Each wave is 1442px wide. Track width is 6 * 1442 = 8652px.
    // Half track is 4326px, making translation seamless.
    const waves = Array.from({ length: 6 });

    // The SVG: flat at y=0, wavy at y=151.
    // For position="bottom", flat is at top (starts at section bottom), wavy is at bottom.
    // For position="top", we use -scale-y-100. Flat becomes bottom (connects to section top), wavy is top.

    return (
        <div className={`relative w-full overflow-hidden leading-0 ${className}`}>
            <div
                className={`flex w-[8652px] animate-wave-scroll ${position === 'top' ? '-scale-y-100' : ''} ${color}`}
                style={style}
            >
                {waves.map((_, i) => (
                    <div key={i} className="w-[1442px] shrink-0 relative h-[151px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1442 151"
                            preserveAspectRatio="none"
                            fill="none"
                            className="block absolute top-0 h-[151px]"
                            style={{ left: '-1px', width: 'calc(100% + 2px)', maxWidth: 'none' }}
                        >
                            <path
                                d="M0.775391 0.403137C0.775391 0.403137 0.775391 82.2085 0.775391 82.3236C0.775391 82.3679 13.9613 82.2482 21.028 83.2223C37.2691 85.4539 56.9904 91.0949 71.2921 99.0294C85.5938 106.964 98.3458 115.465 113.568 119.716C132.307 124.95 152.701 123.781 170.722 116.369C173.423 115.262 176.089 114.084 178.745 112.871C182.279 111.241 185.777 109.55 189.248 107.805C189.416 107.717 189.593 107.637 189.762 107.548C190.426 107.212 191.09 106.875 191.754 106.548C203.435 100.641 215.071 94.5485 227.309 89.8639C261.589 76.7223 296.311 75.4825 330.582 85.1616C365.004 94.7433 399.133 115.164 433.262 128.031C467.392 140.907 501.512 146.229 535.641 141.616C583.258 135.178 625.206 109.709 670.086 94.398C715.081 79.0513 758.048 79.9811 801.414 100.73C831.328 115.049 860.401 136.471 893.521 134.903C924.205 133.442 949.904 112.525 977.648 99.3394C1002.67 87.4464 1031.02 81.6106 1058.4 85.8435C1122.3 95.7352 1169.79 155.962 1237.49 150.046C1296.87 144.857 1345.3 104.458 1401.41 88.3408C1413.19 84.958 1425.33 82.7795 1437.6 82.3987C1437.76 82.3987 1441.49 82.2887 1441.49 82.3241V0.403564L0.775391 0.403137Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
}
