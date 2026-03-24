import { motion } from "framer-motion";
import { config } from "@/config";
import { Contact as SimpleContact } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function Contact() {
    const { branding, demoUser } = config;

    return (
        <main className="pt-32 min-h-screen bg-[#111111] selection:bg-white selection:text-black">
            <SEO 
                title="Contacto" 
                description={`Contacta con ${branding.name}. Proyectos de ${branding.trade} en ${config.dynamicContent.city}.`}
            />

            {/* Huge Hero */}
            <section className="py-24 px-6 mb-32">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-12">CONTACTO / CONSULTAS</span>
                        <h1 className="text-5xl md:text-[10vw] font-display text-white mb-16 tracking-tighter leading-[0.8] uppercase max-w-6xl">
                            DIALOGAR <br />
                            <span className="text-white/20 italic">PARA</span> CREAR
                        </h1>
                    </motion.div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-white text-black p-12 md:p-24 flex flex-col justify-between">
                    <div>
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-8">ESCRIBENOS</span>
                        <a href={`mailto:${demoUser.email}`} className="text-3xl md:text-5xl font-display uppercase tracking-tighter hover:text-zinc-500 transition-colors break-all">
                            {demoUser.email}
                        </a>
                    </div>
                    
                    <div className="mt-24 space-y-12">
                        <div>
                            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-4">UBICACIÓN</span>
                            <p className="text-xl font-display uppercase leading-tight">
                                {config.dynamicContent.city}<br />
                                {config.dynamicContent.localAnchor}
                            </p>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-4">SOCIAL</span>
                            <div className="flex gap-12 text-sm font-mono font-bold uppercase tracking-widest underline decoration-zinc-200">
                                <a href="#">INSTAGRAM</a>
                                <a href="#">LINKEDIN</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#111111] border-l border-white/5">
                    <SimpleContact />
                </div>
            </div>
        </main>
    );
}
