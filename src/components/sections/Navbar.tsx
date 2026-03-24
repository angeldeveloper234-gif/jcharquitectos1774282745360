import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { branding } = config;

    const links = [
        { href: "/", label: "INICIO" },
        { href: "/projects", label: "PROYECTOS" },
        { href: "/about", label: "ESTUDIO" },
        { href: "/services", label: "SERVICIOS" },
        { href: "/contact", label: "CONTACTO" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0F1115]/90 backdrop-blur-sm border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <span className="text-xl font-display font-bold tracking-widest text-white uppercase">
                        {branding.logo}
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-xs font-sans tracking-[0.2em] transition-colors uppercase font-bold ${
                                isActive(link.href) ? "text-primary" : "text-zinc-400 hover:text-primary"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <Button
                            variant="default"
                            className="bg-[#CBB37E] hover:bg-[#DCC58F] text-[#0A0A0A] rounded-none px-12 h-14 tracking-[0.2em] text-[10px] font-black border-none transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(203,179,126,0.2)]"
                        >
                            PRESUPUESTO GRATIS
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[#0F1115] border-b border-white/10"
                >
                    <div className="flex flex-col p-6 gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-sm font-sans tracking-widest uppercase font-bold ${
                                    isActive(link.href) ? "text-primary" : "text-zinc-400 hover:text-primary"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact">
                            <Button
                                variant="default"
                                className="w-full bg-primary text-black hover:bg-white rounded-none tracking-widest text-xs font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                PRESUPUESTO GRATIS
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
