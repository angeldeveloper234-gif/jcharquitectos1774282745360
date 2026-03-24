import { motion, useScroll, useTransform } from "framer-motion";
import { config } from "@/config";
import { useRef } from "react";

export function Manifesto() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const xRight = useTransform(scrollYProgress, [0, 1], [200, -200]);

    return (
        <section ref={sectionRef} className="py-60 bg-white text-black overflow-hidden relative">
            {/* Background Texture/Grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-12">
                    <motion.div style={{ x: xLeft }} className="whitespace-nowrap opacity-30">
                        <h2 className="text-6xl md:text-[14vw] font-display font-black uppercase tracking-tighter leading-none text-zinc-200 italic">
                            FILOSOFÍA / ESTÉTICA / ANALÍTICA
                        </h2>
                    </motion.div>

                    <div className="max-w-6xl mx-auto py-20 text-center">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-mono text-[#8B7345] uppercase tracking-[0.5em] block mb-12 font-black"
                        >
                            EL ESTUDIO
                        </motion.span>
                        <h3 className="text-4xl md:text-8xl font-display font-light leading-[0.85] tracking-tighter text-zinc-900">
                            {config.dynamicContent.manifesto.split(' ').map((word, i) => (
                                <motion.span 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`inline-block mr-4 ${i % 5 === 0 ? "text-[#8B7345] font-black italic" : "text-zinc-900"}`}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h3>
                    </div>

                    <motion.div style={{ x: xRight }} className="whitespace-nowrap opacity-30">
                        <h2 className="text-6xl md:text-[14vw] font-display font-black uppercase tracking-tighter leading-none text-zinc-200 italic">
                            CONSTRUCCIÓN / DISEÑO / FUTURO
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* Floating details */}
            <div className="absolute bottom-20 left-20 hidden lg:block">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest vertical-text rotate-180">
                    AWWWARDS STYLE MANIFESTO 2024
                </p>
            </div>
        </section>
    );
}
