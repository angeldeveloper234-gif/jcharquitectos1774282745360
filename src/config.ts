export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface ProductItem {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
}

export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    problem: string;
    agitation: string;
    solve: string;
    price: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    tags: string[];
}

export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    supabase: {
        url: string;
        anonKey: string;
    };
    analytics: {
        webhookUrl: string;
    };
    bookingUrl: string;
    paymentLink: string;
    googleMapsReviewUrl: string;
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
            m2Built?: string;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
        pricing: {
            basic: string;
            comprehensive: string;
            retainer: string;
        };
        section_details?: {
            Hero?: {
                background_concept?: string;
            };
        };
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    demoUser: {
        name: string;
        email: string;
        whatsapp: string;
    };
    features: {
        showGallery: boolean;
        showProducts: boolean;
        showTestimonials: boolean;
        showFAQ: boolean;
        showStats: boolean;
    };
    gallery: GalleryItem[];
    products: ProductItem[];
}

export const config: Config = {
    branding: {
        name: "NÉCTAR ARQUITECTOS",
        slogan: "MINIMALISMO ESTRUCTURAL",
        logo: "NÉCTAR",
        trade: "Architecture & Residential Design",
    },
    supabase: {
        url: "",
        anonKey: "",
    },
    analytics: {
        webhookUrl: "",
    },
    bookingUrl: "#contact",
    paymentLink: "",
    googleMapsReviewUrl: "",
    dynamicContent: {
        city: "{dynamic_city}",
        localAnchor: "Estudio Central",
        stats: {
            projectsDone: 124,
            experienceYears: 15,
            happyClients: 110,
            m2Built: "45,000"
        },
        specialization: {
            title: "ARQUITECTURA",
            pain: "Espacios sin identidad",
            ego: "Tu Visión Materializada",
            hook: "Diseño que Perdura"
        },
        roadmap: [
            {
                step: "01",
                title: "DIAGNÓSTICO",
                desc: "Análisis topográfico y conceptualización de necesidades espaciales."
            },
            {
                step: "02",
                title: "ESTRATEGIA",
                desc: "Desarrollo de planos arquitectónicos, renders y cálculo estructural."
            },
            {
                step: "03",
                title: "RESOLUCIÓN",
                desc: "Ejecución de obra y supervisión de acabados de alta gama."
            }
        ],
        pricing: {
            basic: "Consultoría",
            comprehensive: "Proyecto Ejecutivo",
            retainer: "Supervisión"
        },
        section_details: {
            Hero: {
                background_concept: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            }
        }
    },
    services: [
        {
            id: "01",
            icon: "📐",
            title: "Diseño Residencial",
            problem: "Falta de integración con el entorno.",
            agitation: "Vivir en espacios desconectados reduce la calidad de vida.",
            solve: "Arquitectura orgánica que respeta y potencia el contexto.",
            price: "pricing.comprehensive"
        },
        {
            id: "02",
            icon: "🏢",
            title: "Desarrollo Vertical",
            problem: "Ineficiencia en el uso del suelo.",
            agitation: "Proyectos que no maximizan el retorno de inversión.",
            solve: "Optimización espacial para desarrollos de alto impacto.",
            price: "pricing.basic"
        },
        {
            id: "03",
            icon: "🏳️",
            title: "Interiorismo",
            problem: "Espacios fríos y sin carácter.",
            agitation: "El interior debe ser una extensión del alma del habitante.",
            solve: "Curaduría de materiales y luz para atmósferas únicas.",
            price: "pricing.retainer"
        }
    ],
    testimonials: [
        {
            name: "Carlos M.",
            role: "Inversionista",
            text: "La precisión técnica y la estética minimalista elevaron el valor de nuestra propiedad un 40%.",
            tags: ["Precisión", "Plusvalía"]
        },
        {
            name: "Ana S.",
            role: "Propietaria",
            text: "Entendieron que buscábamos silencio visual. El resultado es una obra de arte habitable.",
            tags: ["Diseño", "Minimalismo"]
        }
    ],
    demoUser: {
        name: "Arquitecto Principal",
        email: "proyectos@nectar.arq",
        whatsapp: "+525512345678"
    },
    features: {
        showGallery: true,
        showProducts: false,
        showTestimonials: true,
        showFAQ: false,
        showStats: true
    },
    gallery: [
        {
            title: "Casa Brutalista",
            category: "Residencial",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Loft Urbano",
            category: "Interiorismo",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Pabellón de Cristal",
            category: "Comercial",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Residencia Bosque",
            category: "Residencial",
            image: "https://images.unsplash.com/photo-1600596542815-6ad4c7213299?q=80&w=800&auto=format&fit=crop"
        }
    ],
    products: []
};