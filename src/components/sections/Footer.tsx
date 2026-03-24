import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { config } from "@/config";

export function Footer() {
    const { branding, demoUser } = config;

    return (
        <footer className="bg-[#0A0909] text-white pt-32 pb-12 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                    {/* Left: Huge CTA */}
                    <div>
                        <motion.a 
                            href={`https://wa.me/${demoUser.whatsapp.replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-6 group-hover:text-primary transition-colors">¿TIENES UN PROYECTO?</span>
                            <h2 className="text-5xl md:text-8xl font-display leading-[0.8] tracking-tighter uppercase group-hover:text-primary transition-all duration-700">
                                INICIEMOS <br />
                                UN PROYECTO <span className="text-white/20 italic group-hover:text-primary/40 group-hover:translate-x-4 inline-block transition-all italic">→</span>
                            </h2>
                        </motion.a>
                    </div>

                    {/* Right: Links & Info */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block">MENÚ</span>
                            <ul className="space-y-4">
                                <li><Link to="/" className="text-sm font-light hover:text-zinc-400 transition-colors">HOME</Link></li>
                                <li><Link to="/projects" className="text-sm font-light hover:text-zinc-400 transition-colors">PROYECTOS</Link></li>
                                <li><Link to="/about" className="text-sm font-light hover:text-zinc-400 transition-colors">ESTUDIO</Link></li>
                                <li><Link to="/services" className="text-sm font-light hover:text-zinc-400 transition-colors">SERVICIOS</Link></li>
                                <li><Link to="/contact" className="text-sm font-light hover:text-zinc-400 transition-colors">CONTACTO</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block">SOCIAL</span>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-sm font-light hover:text-zinc-400 transition-colors">INSTAGRAM</a></li>
                                <li><a href="#" className="text-sm font-light hover:text-zinc-400 transition-colors">LINKEDIN</a></li>
                                <li><a href="#" className="text-sm font-light hover:text-zinc-400 transition-colors">BEHANCE</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6 col-span-2 md:col-span-1">
                            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block">CONTACTO</span>
                            <div className="space-y-4">
                                <p className="text-sm font-light text-zinc-400 leading-relaxed uppercase">
                                    {config.dynamicContent.city}<br />
                                    {config.dynamicContent.localAnchor}
                                </p>
                                <a href={`mailto:${demoUser.email}`} className="text-sm font-light block hover:text-zinc-400 transition-colors underline decoration-white/20">
                                    {demoUser.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-12">
                    <div className="mb-8 md:mb-0">
                        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em] font-mono">
                            © {new Date().getFullYear()} {branding.name}. ARCHITECTURAL STUDIO.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <a href="/privacy" className="text-zinc-700 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-mono">PRIVACY</a>
                        <a href="/terms" className="text-zinc-700 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-mono">TERMS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
