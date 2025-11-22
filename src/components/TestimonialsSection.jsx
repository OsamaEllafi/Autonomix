import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Autonomix revolutionized our customer support. We reduced response times by 80% while increasing satisfaction scores.",
        author: "Sarah Jenkins",
        role: "CTO, TechFlow",
        company: "Healthcare"
    },
    {
        quote: "The AI agents they built for us are indistinguishable from human operators. Truly next-level technology.",
        author: "Marcus Chen",
        role: "Director of Ops, Nexus",
        company: "Logistics"
    },
    {
        quote: "Implementation was flawless. Their team understood our complex requirements and delivered ahead of schedule.",
        author: "Elena Rodriguez",
        role: "VP of Engineering, Solara",
        company: "Fintech"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 relative">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-header font-bold mb-4">Client <span className="text-white">Stories</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl relative border border-glass-border/50"
                        >
                            <Quote className="absolute top-6 left-6 text-primary/20" size={48} />
                            <p className="text-lg text-dim mb-8 relative z-10 italic">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                                <div>
                                    <h4 className="font-bold text-white">{item.author}</h4>
                                    <p className="text-xs text-primary uppercase tracking-wider">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
