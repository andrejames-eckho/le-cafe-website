import Hero from "@/components/Hero";
import SpecCard from "@/components/SpecCard";
import BrandBanner from "@/components/BrandBanner";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <BrandBanner />

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
                            brand="OSD PRO"
                            model="S210"
                            type="2-Way Speaker"
                            freqResponse="50Hz - 20kHz"
                            impedance="4 Ohms"
                            drivers={["75-core Neodymium", "2x 10\" Woofers"]}
                            sensitivity="1 watt/peak @ 1 meter: 97dB / 130 dB"
                        />
                        <SpecCard
                            brand="OSD PRO"
                            model="M6 Active"
                            type="Studio Monitor"
                            freqResponse="60Hz - 18kHz"
                            impedance="8 Ohms"
                            drivers={["1.1\" Silk Dome", "7\" Paper"]}
                            sensitivity="87dB @ 2.83V"
                        />
                        <SpecCard
                            brand="OSD PRO"
                            model="S6-IW"
                            type="IN-WALL SPEAKER"
                            freqResponse="80Hz - 20kHz"
                            impedance="8 Ohms"
                            drivers={["36-Core Neodymium", "1.4\" Voice Coil", "6.5\" Neodymium Sub", "11.5\" Voice Coil"]}
                            sensitivity="1 watt/peak @ 1 meter: 93dB / 122 dB"
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
