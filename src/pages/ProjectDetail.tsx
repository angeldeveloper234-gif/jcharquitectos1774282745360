import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";
import { useRef } from "react";

export function ProjectDetail() {
    const { id } = useParams();
    const project = config.projects.find(p => p.id === id);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    if (!project) return <div>Project not found</div>;

    return (
        <main className="bg-[#111111] overflow-hidden" ref={containerRef}>
            <SEO 
                title={project.title} 
                description={project.description}
            />

            {/* Hero Detail */}
            <section className="h-screen w-full relative flex items-center justify-center pt-20">
                <motion.img 
                    src={project.image} 
                    alt={project.title}
                    style={{ y }}
                    className="absolute inset-0 w-full h-full object-cover scale-110 grayscale brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-[12vw] font-display font-bold leading-none uppercase text-white tracking-tighter"
                    >
                        {project.title}
                    </motion.h1>
                </div>
            </section>

            {/* Project Data */}
            <section className="py-32 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
                        <div className="md:col-span-8">
                            <h2 className="text-3xl font-display text-white uppercase mb-8">Concepto Arquitectónico</h2>
                            <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed text-balance">
                                {project.description} — Proyectamos espacios que integren la funcionalidad con la estética minimalista, asegurando que cada detalle responda a la visión del usuario y al contexto del sitio.
                            </p>
                        </div>
                        <div className="md:col-span-4 flex flex-col justify-end">
                            <div className="space-y-8 border-l border-white/10 pl-8">
                                <div>
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Año</span>
                                    <span className="text-white uppercase font-display">{project.year}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Ubicación</span>
                                    <span className="text-white uppercase font-display">{project.location}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Metraje</span>
                                    <span className="text-white uppercase font-display">{project.area}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Gallery */}
            <section className="py-32 space-y-32">
                {project.gallery?.map((img, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="container mx-auto px-6"
                    >
                        <div className="aspect-[16/9] overflow-hidden bg-zinc-900">
                            <img 
                                src={img} 
                                alt={`${project.title} gallery ${idx}`} 
                                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                            />
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Back Navigation */}
            <div className="pb-32 container mx-auto px-6 text-center">
                <Link to="/projects" className="text-white/40 hover:text-white transition-colors flex items-center justify-center gap-4 group">
                    <span className="text-3xl font-display uppercase tracking-[0.2em]">CERRAR</span>
                    <span className="group-hover:translate-x-4 transition-transform duration-500 italic text-3xl font-display">→</span>
                </Link>
            </div>
        </main>
    );
}
