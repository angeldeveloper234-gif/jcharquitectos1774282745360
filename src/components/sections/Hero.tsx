import { motion } from "framer-motion";
import { config } from "@/config";

interface HeroProps {
    dynamic_city?: string;
    pain_point_headline?: string;
}

export function Hero({ dynamic_city, pain_point_headline }: HeroProps) {
    const { dynamicContent, branding } = config;
    const city = dynamic_city || dynamicContent.city;

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#111111] selection:bg-white selection:text-black">
            {/* Background Image - Inmersive & Full Screen */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    src={config.dynamicContent.section_details?.Hero?.background_concept || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop"}
                    alt="High-end Architecture"
                    className="w-full h-full object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/40 via-transparent to-[#111111]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full text-center"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-[11vw] font-display font-black text-white mb-8 leading-[0.75] tracking-tighter uppercase break-words hover:text-primary transition-all duration-1000 cursor-default">
                        {branding.name}
                    </h1>
                    
                    <div className="flex flex-col items-center">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "128px" }}
                            transition={{ delay: 1, duration: 2 }}
                            className="h-[4px] bg-primary mb-12"
                        ></motion.div>
                        <p className="text-xs md:text-sm font-mono text-white/90 uppercase tracking-[0.8em] font-black">
                            {branding.trade} — {city}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">SCROLL</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
            </motion.div>

            {/* Technical Decor */}
            <div className="absolute top-32 right-10 hidden md:block text-right">
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    ESTUDIO: {branding.name}
                </p>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    LOC: {city.toUpperCase()}
                </p>
            </div>
        </section>
    );
}