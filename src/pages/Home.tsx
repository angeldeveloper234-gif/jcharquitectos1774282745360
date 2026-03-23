import { Hero, Gallery, Roadmap, Stats, Features, Testimonials, CTA, Contact, BentoGrid } from "@/components/sections";
import { CustomCursor } from "@/components/features/CustomCursor";
import { StickyCallBar } from "@/components/StickyCallBar";
import { SEO } from "@/components/ui/SEO";
import { config } from "@/config";

interface HomeProps {
    dynamic_city?: string;
    metric_counter?: number;
    pain_point_headline?: string;
}

export function Home({ dynamic_city, metric_counter, pain_point_headline }: HomeProps) {
    const { branding, features } = config;

    return (
        <main className="relative selection:bg-white selection:text-black bg-[#111111]">
            <SEO 
                description={`Arquitectura y diseño residencial en ${dynamic_city || config.dynamicContent.city}.`}
                keywords={`${branding.name}, arquitectura, diseño, planos`}
            />
            
            <Hero 
                dynamic_city={dynamic_city} 
                pain_point_headline={pain_point_headline}
            />
            
            {features.showStats && <Stats />}
            
            <BentoGrid />
            
            <Features />
            
            {features.showGallery && <Gallery />}
            
            <Roadmap />
            
            {features.showTestimonials && <Testimonials />}
            
            <CTA />
            
            <Contact />

            <CustomCursor />
            <StickyCallBar />
        </main>
    );
}