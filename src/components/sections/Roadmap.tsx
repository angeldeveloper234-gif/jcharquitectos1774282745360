import { config } from '@/config';
import { RoadmapBlock } from '@/components/RoadmapBlock';

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    return (
        <section className="py-32 bg-[#111111] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-tighter">
                            BLUEPRINT <br/>
                            <span className="text-zinc-600">PROCESS</span>
                        </h2>
                        <p className="text-zinc-400 max-w-md font-light">
                            Metodología estructurada para garantizar la integridad del diseño y la ejecución técnica.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {roadmap.map((item, index) => (
                            <RoadmapBlock 
                                key={index} 
                                step={item.step} 
                                title={item.title} 
                                desc={item.desc} 
                                index={index} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}