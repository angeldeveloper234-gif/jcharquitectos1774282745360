import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

interface HeroProps {
    dynamic_city?: string;
    pain_point_headline?: string;
}

export function Hero({ dynamic_city, pain_point_headline }: HeroProps) {
    const { dynamicContent } = config;
    const city = dynamic_city || dynamicContent.city;
    const headline = pain_point_headline || dynamicContent.specialization.pain;

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#111111]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={config.dynamicContent.section_details?.Hero?.background_concept || "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"}
                    alt="Architecture Blueprint"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
                <div className="absolute inset-0 blueprint-grid opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-white"></div>
                        <span className="text-xs font-mono text-white uppercase tracking-[0.3em]">
                            {config.branding.trade}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-display text-white mb-8 leading-[0.9] tracking-tighter uppercase">
                        {headline}
                    </h1>

                    <p className="text-xl text-zinc-400 font-light max-w-xl mb-12 border-l border-white/20 pl-6 py-2">
                        Gestión integral y diseño arquitectónico en <span className="text-white">{city}</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-zinc-200 rounded-none px-10 h-16 text-xs tracking-[0.2em] uppercase font-bold"
                            onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}`}
                        >
                            CONTACTAR POR WHATSAPP
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Technical Decor */}
            <div className="absolute bottom-10 right-10 hidden md:block text-right">
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    COORD: 19.4326° N, 99.1332° W
                </p>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    STATUS: ACTIVE PROJECT
                </p>
            </div>
        </section>
    );
}