import { motion } from "framer-motion";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";

export function Services() {
    const { branding, services } = config;

    return (
        <main className="pt-32 min-h-screen bg-[#111111] selection:bg-white selection:text-black">
            <SEO 
                title="Servicios" 
                description={`Áreas de expertise de ${branding.name}.`}
            />

            {/* Hero Section */}
            <section className="py-24 px-6 border-b border-white/5 pb-32">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-12">EXPERTISE / CAPACIDADES</span>
                        <h1 className="text-5xl md:text-[10vw] font-display text-white mb-16 tracking-tighter leading-[0.8] uppercase max-w-6xl">
                            SOLUCIONES <br />
                            <span className="text-white/20 italic">SIN</span> LÍMITES
                        </h1>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <p className="text-2xl md:text-3xl font-light text-zinc-400 leading-relaxed max-w-xl text-balance">
                            Ofrecemos un espectro integral de diseño arquitectónico, desde el plan maestro conceptual hasta el detalle más fino de ejecución.
                        </p>
                    </div>
                </div>
            </section>

            {/* Asymmetric List Section */}
            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <div className="space-y-40">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col md:flex-row gap-20 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full md:w-1/2 aspect-video bg-zinc-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                    <img 
                                        src={`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop&sig=${index}`} 
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 pt-12">
                                    <span className="text-xs font-mono text-zinc-600 mb-6 block">0{index + 1} / CAPACIDAD</span>
                                    <h2 className="text-4xl md:text-6xl font-display text-white uppercase mb-8 tracking-tighter">
                                        {service.title}
                                    </h2>
                                    <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12 max-w-md">
                                        {service.solve}. {service.agitation}
                                    </p>
                                    <div className="h-[1px] w-full bg-white/5" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="py-32 bg-white text-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-7xl font-display uppercase tracking-tighter mb-12">
                        ¿LISTO PARA <br /> <span className="italic">EMPEZAR</span>?
                    </h2>
                    <a 
                        href="/contact"
                        className="inline-block border-b-2 border-black pb-2 text-2xl font-display uppercase tracking-widest hover:translate-x-4 transition-transform duration-500"
                    >
                        HABLEMOS DE TU PROYECTO
                    </a>
                </div>
            </section>
        </main>
    );
}
