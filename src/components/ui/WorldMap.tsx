"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Connection {
    start: { x: number; y: number };
    end: { x: number; y: number };
    label?: string;
}

const connections: Connection[] = [
    { start: { x: 570, y: 260 }, end: { x: 160, y: 180 }, label: "USA" }, // USA
    { start: { x: 570, y: 260 }, end: { x: 420, y: 160 }, label: "Europe" }, // Europe
    { start: { x: 570, y: 260 }, end: { x: 500, y: 240 }, label: "Middle East" }, // Middle East
    { start: { x: 570, y: 260 }, end: { x: 680, y: 360 }, label: "Australia" }, // Australia
    { start: { x: 570, y: 260 }, end: { x: 450, y: 320 }, label: "Africa" }, // Africa
    { start: { x: 570, y: 260 }, end: { x: 650, y: 240 }, label: "Asia" }, // Asia
];

export default function WorldMap() {
    return (
        <div className="relative w-full aspect-784/458 max-w-5xl mx-auto">
            {/* Base Map */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/world-map.svg"
                    alt="World Map"
                    fill
                    className="object-contain opacity-80"
                    priority
                />
            </div>

            {/* Overlay Connections */}
            <svg
                viewBox="0 0 784 458"
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff660f" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#ffbf0f" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {connections.map((conn, i) => {
                    // Calculate a curve point
                    // Simple quadratic bezier control point offset
                    const midX = (conn.start.x + conn.end.x) / 2;
                    const midY = (conn.start.y + conn.end.y) / 2;

                    // Add curvature. If long distance, more curve upward (-y)
                    const dx = conn.end.x - conn.start.x;
                    const dy = conn.end.y - conn.start.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const curveOffset = dist * -0.2;

                    return (
                        <g key={i}>
                            {/* Path */}
                            <motion.path
                                d={`M ${conn.start.x} ${conn.start.y} Q ${midX} ${midY + curveOffset} ${conn.end.x} ${conn.end.y}`}
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                strokeDasharray="6 4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                            />

                            {/* End Dot */}
                            <motion.circle
                                cx={conn.end.x}
                                cy={conn.end.y}
                                r="4"
                                className="fill-secondary"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
                            />

                            {/* Start Dot (India) */}
                            <circle
                                cx={conn.start.x}
                                cy={conn.start.y}
                                r="3"
                                className="fill-secondary"
                            />
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
