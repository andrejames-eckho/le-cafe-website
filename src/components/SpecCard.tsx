import { motion } from "framer-motion";

interface SpecCardProps {
    brand: string;
    model: string;
    type: string;
    freqResponse: string;
    impedance: string;
    sensitivity: string;
    drivers: string[];
}

export default function SpecCard({
    brand,
    model,
    type,
    freqResponse,
    impedance,
    sensitivity,
    drivers
}: SpecCardProps) {
    return (
        <div className="hardware-border bg-charcoal-dark p-6 max-w-md w-full font-mono flex flex-col h-full">
            <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                <div>
                    <div className="text-[10px] text-glow mb-1 font-bold tracking-widest uppercase opacity-80">{brand}</div>
                    <h3 className="text-crema text-lg mb-1">{model}</h3>
                    <p className="text-[10px] text-crema/40 uppercase tracking-[0.2em]">Product Reference: LC-AS-{brand.substring(0, 3).toUpperCase()}-{model.substring(0, 10).replace(/\s/g, "").toUpperCase()}</p>
                </div>
                <div className="text-right">
                    <div className="text-[10px] text-crema/40 uppercase mb-1">Status</div>
                    <div className="flex items-center gap-2 justify-end">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-green-500">AVAILABLE</span>
                    </div>
                </div>
            </div>

            <table className="w-full text-xs text-crema/70">
                <tbody className="divide-y divide-white/5">
                    <tr className="group">
                        <td className="py-3 uppercase text-crema/40 tracking-wider">Type</td>
                        <td className="py-3 text-right group-hover:text-glow transition-colors">{type}</td>
                    </tr>
                    <tr className="group">
                        <td className="py-3 uppercase text-crema/40 tracking-wider">Freq Response</td>
                        <td className="py-3 text-right group-hover:text-glow transition-colors">{freqResponse}</td>
                    </tr>
                    <tr className="group">
                        <td className="py-3 uppercase text-crema/40 tracking-wider">Impedance</td>
                        <td className="py-3 text-right group-hover:text-glow transition-colors">{impedance}</td>
                    </tr>
                    <tr className="group">
                        <td className="py-3 uppercase text-crema/40 tracking-wider">Driver Array</td>
                        <td className="py-3 text-right">
                            <div className="flex flex-wrap justify-end gap-2">
                                {drivers.map((driver) => (
                                    <span
                                        key={driver}
                                        className="border border-white/10 px-2 py-0.5 text-[9px] uppercase hover:bg-white/5 transition-colors"
                                    >
                                        {driver}
                                    </span>
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 uppercase text-crema/40 tracking-wider">Sensitivity</td>
                        <td className="py-3 text-right font-bold text-crema">{sensitivity}</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center bg-white/5 -mx-6 -mb-6 px-6 py-4">
                <span className="text-[9px] text-white/20 tracking-tighter">SPECIFICATION DATA SHEET v3.0 // AUDIO SYSTEM</span>
                <button className="text-[10px] text-glow hover:underline hover:text-white transition-all uppercase">
                    Technical Drawings
                </button>
            </div>
        </div>
    );
}
