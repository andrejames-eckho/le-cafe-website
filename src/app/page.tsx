import Hero from "@/components/Hero";
import SpecCard from "@/components/SpecCard";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />

            <section className="py-24 px-4 bg-charcoal">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <span className="text-glow font-mono text-xs tracking-widest block mb-4">SYSTEM ARCHITECTURE // v3</span>
                            <h2 className="text-4xl md:text-5xl font-bold">Speakers & <br /> Monitors</h2>
                        </div>
                        <p className="max-w-md text-crema/60 font-mono text-xs uppercase leading-relaxed text-right">
                            Every component is engineered for harmonic transparency, ensuring that the listener experiences the full richness of the original recording.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <SpecCard
                            model="S210"
                            type="2-Way Speaker"
                            freqResponse="50Hz - 20kHz"
                            impedance="4 Ohms"
                            drivers={["75core Neodymium", "2x 10\" Woofers"]}
                            sensitivity="1 watt/peak @ 1 meter: 97dB / 130 dB"
                        />
                        <SpecCard
                            model="OSDPRO M6"
                            type="Studio Monitor"
                            freqResponse="60Hz - 18kHz"
                            impedance="8 Ohms"
                            drivers={["1.1\" Silk Dome", "7\" Paper"]}
                            sensitivity="87dB @ 2.83V"
                        />
                        <SpecCard
                            model="Tower Reference"
                            type="4-Way Ported"
                            freqResponse="22Hz - 40kHz"
                            impedance="6 Ohms"
                            drivers={["Ribbon", "2\" Mid", "2x 10\" Sub"]}
                            sensitivity="93dB @ 2.83V"
                        />
                    </div>
                </div>
            </section>

            <footer className="py-12 border-t border-white/5 text-center">
                <div className="font-mono text-[10px] tracking-[0.5em] text-white/20 uppercase">
                    Le Cafe Philippines © 2026 // Integrated Audio Systems
                </div>
            </footer>
        </main>
    );
}
