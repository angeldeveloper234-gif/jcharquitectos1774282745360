import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function CTA() {
    return (
        <section className="py-40 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-white/5">
            {/* Gold glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Architectural Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex justify-center mb-12">
                        <div className="p-6 bg-primary/5 border border-primary/20 rounded-full">
                            <Layers size={40} className="text-primary" />
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-9xl font-display mb-12 leading-[0.85] tracking-tighter uppercase">
                        ¿LISTO PARA UN TRABAJO{" "}
                        <br />
                        <span className="text-primary italic">BIEN HECHO?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-zinc-400 mb-20 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                        Contáctanos hoy y recibe tu presupuesto sin costo. Sin sorpresas, con garantía escrita en cada proyecto.
                    </p>

                    {/* Trust pillars */}
                    <div className="flex flex-wrap justify-center gap-12 mb-20">
                        {[
                                { icon: <ShieldCheck size={20} />, text: "Garantía Escrita" },
                                { icon: <Clock size={20} />, text: "Entrega en Tiempo" },
                                { icon: <Layers size={20} />, text: "Diseño Superior" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-zinc-300 text-xs font-mono uppercase tracking-[0.2em]">
                                <span className="text-primary">{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Button
                            size="lg"
                            className="h-24 px-16 bg-primary text-black hover:bg-white rounded-none text-xs tracking-[0.4em] uppercase font-black transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(203,179,126,0.3)] w-full md:w-auto"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Solicitar Presupuesto Gratis <ArrowRight className="ml-6 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-24 px-12 rounded-none border-white/10 text-white hover:bg-white hover:text-black text-xs tracking-[0.4em] uppercase font-black transition-all duration-700 w-full md:w-auto"
                            onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}`}
                        >
                            WhatsApp Directo
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
