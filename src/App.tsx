import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { UserProvider } from "@/context/UserContext";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";


// --- AI AGENT GUIDANCE ---
// Template: Construcción (Residencial, Comercial, Industrial)
// Para personalizar:
// 1. Branding y servicios: src/config.ts
// 2. Paleta de colores: tailwind.config.ts (primary: #F59E0B)
// 3. Nuevas páginas: agregar en src/pages y registrar en <Routes>
// -------------------------



function App() {
    return (
        <UserProvider>
            <Router>
                <div className="relative min-h-screen bg-[#0F1115] overflow-x-hidden">
                    <div className="noise-bg" />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                    <Footer />
                    <WhatsAppWidget />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
