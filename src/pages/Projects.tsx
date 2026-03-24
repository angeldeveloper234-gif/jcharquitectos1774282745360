import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";

export function Projects() {
    return (
        <main className="pt-32 min-h-screen bg-[#111111]">
            <SEO 
                title="Proyectos" 
                description="Explora nuestro portafolio de arquitectura y diseño."
            />

            <div className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl"
                >
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">PORTAFOLIO</span>
                    <h1 className="text-5xl md:text-7xl font-display text-white uppercase tracking-tighter mb-8 leading-none">
                        OBRAS <br /> SELECCIONADAS
                    </h1>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {config.projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <Link to={`/projects/${project.id}`}>
                                <div className="aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-display text-white uppercase">{project.title}</h3>
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{project.category}</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-400">{project.year}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
