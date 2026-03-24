import { motion, useMotionValue, useSpring } from "framer-motion";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";
import { useState } from "react";

export function About() {
    const { branding, dynamicContent } = config;
    const { team, awards } = dynamicContent;
    const [activeAward, setActiveAward] = useState<number | null>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <main className="pt-32 min-h-screen bg-[#111111] selection:bg-white selection:text-black" onMouseMove={handleMouseMove}>
            <SEO 
                title="Estudio" 
                description={`Conoce la visión y el equipo detrás de ${branding.name}.`}
            />

            {/* Philosophy Hero */}
            <section className="py-24 px-6 border-b border-white/5 pb-32">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-12">NUESTRA FILOSOFÍA</span>
                        <h1 className="text-5xl md:text-[10vw] font-display text-white mb-16 tracking-tighter leading-[0.8] uppercase max-w-6xl">
                            DISEÑO <br />
                            <span className="text-white/20 italic">QUE</span> PERSISTE
                        </h1>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <p className="text-2xl md:text-3xl font-light text-zinc-400 leading-relaxed max-w-xl text-balance">
                            {dynamicContent.specialization.ego}. Creemos que cada centímetro cuenta para la experiencia humana de un espacio.
                        </p>
                        <div className="flex flex-col justify-end">
                            <p className="text-sm font-sans text-primary uppercase tracking-widest leading-loose max-w-sm font-bold">
                                {config.branding.trade} — Basados en {dynamicContent.city}. Llevamos más de {config.dynamicContent.stats.experienceYears} años materializando arquitectura de alta gama.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Break */}
            <section className="h-[80vh] overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <motion.img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
                    alt="Architecture philosophy"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}
                    className="w-full h-full object-cover grayscale brightness-50"
                />
            </section>

            {/* Team Section */}
            <section className="py-40 bg-zinc-50 text-black">
                <div className="container mx-auto px-6">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-12">EL EQUIPO</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        {team.map((member, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group"
                            >
                                <div className="aspect-[4/5] overflow-hidden bg-zinc-200 mb-8 grayscale hover:grayscale-0 transition-all duration-1000">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="text-4xl font-display uppercase tracking-tighter mb-2">{member.name}</h3>
                                <div className="text-xs font-mono text-[#8B7345] uppercase tracking-widest mb-6 font-bold">{member.role}</div>
                                <p className="text-sm text-zinc-500 font-sans leading-relaxed max-w-sm">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Section - ULTIMATE WOW DESIGN */}
            <section className="py-60 bg-[#0A0A0A] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
                        <div>
                            <span className="text-[10px] font-mono text-primary uppercase tracking-[1em] block mb-8 font-black">ESTÁNDARES</span>
                            <h2 className="text-6xl md:text-[12vw] font-display text-white uppercase tracking-tighter leading-[0.75]">
                                RECON<span className="text-primary italic">OCIM</span>IENTO
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1">
                        {awards.map((award, idx) => (
                            <motion.div 
                                key={idx}
                                onMouseEnter={() => setActiveAward(idx)}
                                onMouseLeave={() => setActiveAward(null)}
                                className="group relative border-b border-white/5 last:border-0"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between py-20 transition-all duration-700 cursor-none px-4 group-hover:bg-primary/5">
                                    <div className="flex items-center gap-12 md:gap-32">
                                        <span className="text-5xl md:text-8xl font-display font-black text-white/5 group-hover:text-primary transition-colors duration-700">
                                            0{idx + 1}
                                        </span>
                                        <div>
                                            <span className="text-[10px] font-mono text-primary group-hover:text-white transition-colors block mb-4 tracking-widest font-black">{award.year} — AWARD</span>
                                            <h4 className="text-3xl md:text-6xl font-display text-white uppercase group-hover:translate-x-12 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]">{award.title}</h4>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <span className="text-xs font-mono text-white uppercase tracking-widest italic">{award.award}</span>
                                        <span className="text-[10px] font-mono text-primary uppercase mt-2">Verified Achievement</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Floating Image Follower */}
                <motion.div
                    style={{
                        position: "fixed",
                        left: springX,
                        top: springY,
                        pointerEvents: "none",
                        zIndex: 100,
                        width: "400px",
                        height: "250px",
                    }}
                    animate={{
                        opacity: activeAward !== null ? 1 : 0,
                        scale: activeAward !== null ? 1 : 0.8,
                        rotate: activeAward !== null ? 5 : 0
                    }}
                    className="overflow-hidden bg-zinc-900 border border-primary/20 pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"
                >
                    <img 
                        src={`https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=600&auto=format&fit=crop&sig=${activeAward}`} 
                        alt="Award Preview" 
                        className="w-full h-full object-cover grayscale brightness-50"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </motion.div>
            </section>
        </main>
    );
}
