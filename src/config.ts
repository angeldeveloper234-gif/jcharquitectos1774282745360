export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    year: string;
    location: string;
    area: string;
    description: string;
    gallery?: string[];
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
        manifesto: string;
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
        awards: Array<{ year: string; title: string; award: string }>;
        team: Array<{ name: string; role: string; bio: string; image: string }>;
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
    projects: Project[];
}

export const config: Config = {
    branding: {
        name: "JCH+ARQUITECTOS",
        slogan: "ESTÉTICA ANALÍTICA",
        logo: "JCH+ARQUITECTOS",
        trade: "Estudio de Arquitectura & Diseño",
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
        city: "Playa del Carmen, QR",
        localAnchor: "Av. 38 x C. 25, Fracc. Tohoku",
        manifesto: "Somos un despacho de arquitectos enfocado al diseño de proyectos que cumplen con las necesidades de nuestros clientes y se mantienen vigentes por mucho tiempo.",
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
        },
        awards: [
            { year: "2023", title: "Bienal de Arquitectura", award: "Mención Honorífica" },
            { year: "2022", title: "ArchDaily Building of the Year", award: "Finalista" },
            { year: "2021", title: "Premio Obras CEMEX", award: "Primer Lugar - Residencial" }
        ],
        team: [
            { 
                name: "Arq. Julián Casas", 
                role: "Founding Partner", 
                bio: "Especialista en integración paisajística con más de 15 años de trayectoria.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
            },
            { 
                name: "Arq. Elena Rivas", 
                role: "Design Director", 
                bio: "Enfocada en el minimalismo estructural y nuevas materialidades.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
            }
        ]
    },
    services: [
        {
            id: "01",
            icon: "📐",
            title: "Planificación & Planos",
            problem: "Diseños que no cumplen normativas.",
            agitation: "Un proyecto mal planeado es una pérdida de tiempo y recursos.",
            solve: "Elaboración de planos arquitectónicos y de instalaciones precisos.",
            price: "Consultar"
        },
        {
            id: "02",
            icon: "📜",
            title: "Gestión & Licencias",
            problem: "Trámites burocráticos interminables.",
            agitation: "Retrasos legales pueden detener tu visión indefinidamente.",
            solve: "Gestión completa de licencias y permisos necesarios para cualquier proyecto.",
            price: "Consultar"
        },
        {
            id: "03",
            icon: "🏗️",
            title: "Construcción",
            problem: "Del papel a la realidad con errores.",
            agitation: "La brecha entre el diseño y la obra puede arruinar la estética.",
            solve: "Conversión fiel del proyecto plasmado en papel a la realidad física.",
            price: "Presupuesto"
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
        name: "JCH+ARQUITECTOS",
        email: "contacto@jcharq.mx",
        whatsapp: "+529841135167"
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
    products: [],
    projects: [
        {
            id: "casa-brutalista",
            title: "Casa Brutalista",
            category: "Residencial",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
            year: "2023",
            location: "Valle de Bravo",
            area: "450m²",
            description: "Una exploración del concreto aparente y la luz cenital.",
            gallery: [
                "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
            ]
        },
        {
            id: "loft-urbano",
            title: "Loft Urbano",
            category: "Interiorismo",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
            year: "2022",
            location: "CDMX",
            area: "120m²",
            description: "Reactivación de espacios industriales para la vida moderna.",
            gallery: [
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
            ]
        },
        {
            id: "pabellon-cristal",
            title: "Pabellón de Cristal",
            category: "Comercial",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
            year: "2023",
            location: "Monterrey",
            area: "800m²",
            description: "Transparencia extrema y fluidez espacial.",
            gallery: [
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
            ]
        }
    ]
};