import { config } from '@/config';
import { ReviewCard } from '@/components/ReviewCard';

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section className="py-32 bg-[#111111] border-t border-white/5 relative">
            <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-xs font-mono text-zinc-500 mb-12 uppercase tracking-widest text-center">
                    // Client Feedback
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((t, i) => (
                        <ReviewCard 
                            key={i} 
                            name={t.name} 
                            role={t.role} 
                            text={t.text} 
                            delay={i * 0.1} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}