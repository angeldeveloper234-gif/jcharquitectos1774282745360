import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { config } from "@/config";
import { useState } from "react";

export function FeaturedWorks() {
    const featuredProjects = config.projects.slice(0, 3);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <section className="py-32 bg-[#111111] overflow-hidden" onMouseMove={handleMouseMove}>
            <div className="container mx-auto px-6 mb-20">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">OBRAS SELECCIONADAS</span>
                        <h2 className="text-3xl md:text-5xl font-display text-white uppercase tracking-tighter">PROJECTS</h2>
                    </div>
                </div>
            </div>

            <div className="space-y-32">
                {featuredProjects.map((project, idx) => (
                    <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        onMouseEnter={() => setHoveredProject(project.title)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="block relative overflow-hidden group border-t border-white/10 pt-12 last:border-b last:pb-32"
                    >
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                                <div className="md:col-span-8 overflow-hidden aspect-[16/9]">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                                    />
                                </div>
                                <div className="md:col-span-4">
                                    <span className="text-xs font-mono text-primary mb-2 block">{project.year} | {project.location}</span>
                                    <h3 className="text-2xl md:text-5xl font-display text-white uppercase mb-4 tracking-tighter leading-none">{project.title}</h3>
                                    <p className="text-zinc-500 font-light mb-8 max-w-sm">{project.description}</p>
                                    <div className="flex items-center gap-4 group-hover:gap-8 transition-all duration-500">
                                        <div className="h-[1px] w-8 bg-primary" />
                                        <span className="inline-flex items-center text-[10px] font-mono font-black text-white uppercase tracking-widest">
                                            VER PROYECTO
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Custom Mouse Follower */}
            <motion.div
                style={{
                    position: "fixed",
                    left: springX,
                    top: springY,
                    pointerEvents: "none",
                    zIndex: 100,
                    mixBlendMode: "difference"
                }}
                animate={{
                    opacity: hoveredProject ? 1 : 0,
                    scale: hoveredProject ? 1 : 0
                }}
                className="bg-white rounded-full px-6 py-3 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center"
            >
                <span className="text-black font-mono text-xs font-bold uppercase whitespace-nowrap">
                    EXPLORAR
                </span>
            </motion.div>
        </section>
    );
}
