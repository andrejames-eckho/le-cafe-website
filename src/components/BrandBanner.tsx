"use client";

import { motion } from "framer-motion";

const BRANDS = [
    "OSD Pro",
    "Unika",
    "iweex",
    "Gaodimic",
    "Voltraq Power",
    "Quadral",
    "Vivi screen",
];

export default function BrandBanner() {
    // Calculate duration based on number of brands to keep speed consistent
    // Approx 4 seconds per brand seems like a good "audiophile" pace
    const scrollDuration = Math.max(BRANDS.length * 4, 20);

    const BrandList = () => (
        <div className="flex shrink-0 items-center">
            {BRANDS.map((brand, index) => (
                <div
                    key={index}
                    className="flex items-center px-8 md:px-12 group shrink-0"
                >
                    <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-crema/40 uppercase transition-all duration-300 group-hover:text-glow group-hover:scale-105 cursor-default">
                        {brand}
                    </span>
                    <div className="ml-8 md:ml-12 w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
            ))}
        </div>
    );

    return (
        <div className="bg-charcoal-dark border-y border-white/5 overflow-hidden py-6 select-none relative group/banner">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] to-transparent pointer-events-none" />

            <motion.div
                className="flex"
                animate={{
                    x: [0, "-50%"],
                }}
                transition={{
                    duration: scrollDuration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                <BrandList />
                <BrandList />
            </motion.div>
        </div>
    );
}
