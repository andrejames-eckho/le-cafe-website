"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
    const [isWarmedUp, setIsWarmedUp] = useState(false);
    const [isPoweringUp, setIsPoweringUp] = useState(false);
    const [powerStatus, setPowerStatus] = useState("OFF");

    useEffect(() => {
        const sequence = async () => {
            // Small delay before start
            await new Promise((r) => setTimeout(r, 1000));
            setIsPoweringUp(true);
            setPowerStatus("STANDBY");

            await new Promise((r) => setTimeout(r, 800));
            setPowerStatus("WARMING UP...");

            await new Promise((r) => setTimeout(r, 2000));
            setPowerStatus("READY");
            setIsWarmedUp(true);
        };
        sequence();
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal-dark uppercase">
            {/* Background "Vacuum Tube" Glow */}
            <motion.div
                animate={{
                    opacity: isWarmedUp ? 0.15 : 0.05,
                    scale: isWarmedUp ? 1.1 : 1,
                }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-radial-gradient from-glow/40 to-transparent pointer-events-none"
            />

            <div className="z-10 text-center px-4">
                {/* Status Indicator Panel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-8 font-mono text-xs tracking-[0.3em] flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{
                                backgroundColor: isWarmedUp ? "#FF4D00" : "#333333",
                                boxShadow: isWarmedUp ? "0 0 10px #FF4D00" : "none",
                            }}
                            className="w-2 h-2 rounded-full"
                        />
                        <span className={isWarmedUp ? "text-glow" : "text-crema/40"}>
                            POWER: {powerStatus}
                        </span>
                    </div>
                    <div className="w-48 h-1 bg-umber-dark border border-white/5 relative">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: isPoweringUp ? "100%" : "0%" }}
                            transition={{ duration: 2.8, ease: "linear" }}
                            className="absolute inset-y-0 left-0 bg-glow/50"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: isWarmedUp ? 1 : 0.3 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter text-crema leading-none"
                >
                    Le Cafe <br /> Philippines
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isWarmedUp ? 0.6 : 0 }}
                    className="mt-6 font-mono text-sm md:text-base tracking-widest text-crema max-w-xl mx-auto"
                >
                    Reference Grade Audio Systems. <br />
                    Tactility. Precision. Acoustic Richness.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isWarmedUp ? 1 : 0, y: isWarmedUp ? 0 : 20 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12"
                >
                    <Link href="/listening-room">
                        <button className="hardware-border px-8 py-3 clicky-button hover:bg-crema hover:text-charcoal-dark font-mono text-sm tracking-widest">
                            ENTER THE LISTENING ROOM
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Hardware Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-white/20" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border-r border-b border-white/20" />
            </div>
        </section>
    );
}
