"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const SYSTEMS = [
    {
        name: "MASTER REFERENCE",
        description: "Pure transparency. Features Quadral Platinum+ series with customized OSD Pro amplification.",
        components: ["Quadral Platinum+ Nine", "OSD Pro Custom Amp", "Unika Power Conditioners"],
        vibe: "Transparent / Analytical / Powerful"
    },
    {
        name: "ANALOG WARMTH",
        description: "Classic silk-dome smoothness. Optimized for vinyl playback and vocal intimacy.",
        components: ["OSD Pro M6 Active", "Voltraq Power Matrix", "Gaodimic Reference Mic Pre"],
        vibe: "Warm / Textured / Intimate"
    },
    {
        name: "ARCHITECTURAL SOUND",
        description: "Invisible performance. Precision in-wall systems that disappear into the acoustics.",
        components: ["OSD Pro S6-IW", "iweex Network Hub", "Vivi Intelligent Screens"],
        vibe: "Clean / Integrated / Precise"
    }
];

export default function ListeningRoom() {
    return (
        <main className="min-h-screen bg-charcoal-dark text-crema font-sans overflow-x-hidden">
            {/* Header / Navigation Back */}
            <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-charcoal-dark to-transparent">
                <Link href="/" className="font-mono text-xs tracking-[0.4em] text-crema/40 hover:text-glow transition-colors uppercase">
                    // BACK TO SYSTEM_ROOT
                </Link>
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-glow animate-pulse" />
                    <span className="font-mono text-xs tracking-widest text-glow uppercase">LIVE SESSION: ON</span>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="h-[70vh] flex flex-col items-center justify-center relative px-4">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2000')] bg-cover bg-center opacity-20 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/60 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center"
                >
                    <span className="text-glow font-mono text-xs tracking-[0.5em] block mb-4 uppercase">Acoustic Sanctuary</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">The Listening <br /> Room</h1>
                    <div className="w-24 h-px bg-crema/20 mx-auto mb-8" />
                    <p className="max-w-xl mx-auto text-crema/60 font-mono text-sm leading-relaxed uppercase tracking-wide">
                        A curated environment where air, wood, and electricity converge into pure sonic fidelity.
                    </p>
                </motion.div>
            </section>

            {/* Systems Showcase */}
            <section className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-32">
                        {SYSTEMS.map((system, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                            >
                                {/* System Visual Placeholder */}
                                <div className="w-full md:w-1/2 aspect-video hardware-border relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-umber-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center border border-white/5 uppercase font-mono text-[10px] tracking-[1em] text-white/10">
                                        System_Node_{index + 1}
                                    </div>
                                    {/* Scanline effect */}
                                    <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-10" />
                                </div>

                                {/* System Info */}
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="space-y-2">
                                        <span className="text-glow font-mono text-[10px] tracking-[0.3em] uppercase">Signature Profile // {system.vibe}</span>
                                        <h2 className="text-3xl md:text-4xl font-bold uppercase">{system.name}</h2>
                                    </div>
                                    <p className="text-crema/60 leading-relaxed font-mono text-sm uppercase">
                                        {system.description}
                                    </p>
                                    <div className="space-y-3 pt-4">
                                        <span className="block font-mono text-xs text-crema/40 tracking-widest uppercase border-b border-white/5 pb-2">Integrated Components:</span>
                                        <ul className="space-y-2">
                                            {system.components.map((comp, i) => (
                                                <li key={i} className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-crema/80">
                                                    <div className="w-1 h-1 bg-glow rounded-full" />
                                                    {comp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Detail Section */}
            <section className="py-24 bg-charcoal border-y border-white/5 px-4 overflow-hidden relative">
                {/* Decorative circuit pattern backgrounds could go here */}
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-glow font-mono text-xs tracking-[0.4em] block mb-6 uppercase">Technical Foundation</span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Acoustic Architecture</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "REV_TIME", value: "0.28s" },
                            { label: "NOISE_FLOOR", value: "-95dB" },
                            { label: "ISO_LEVEL", value: "STC 65" },
                            { label: "POWER_THD", value: "<0.01%" }
                        ].map((stat, i) => (
                            <div key={i} className="hardware-border p-4 space-y-2">
                                <div className="text-[10px] font-mono text-crema/40 tracking-widest uppercase">{stat.label}</div>
                                <div className="text-xl font-bold text-crema tracking-tighter">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-24 text-center px-4">
                <div className="max-w-xl mx-auto space-y-8">
                    <div className="w-px h-16 bg-gradient-to-b from-glow to-transparent mx-auto" />
                    <p className="font-mono text-xs tracking-widest text-crema/40 uppercase leading-relaxed">
                        The Listening Room is a by-appointment-only experience. <br />
                        Located at the heart of the Manila Audio District.
                    </p>
                    <button className="hardware-border px-10 py-4 clicky-button hover:bg-crema hover:text-charcoal-dark font-mono text-xs tracking-[0.3em] uppercase">
                        Request Private Session
                    </button>
                </div>
            </footer>
        </main>
    );
}
