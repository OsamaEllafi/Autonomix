import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    { quote: "Autonomix revolutionized our customer support. We reduced response times by 80% while increasing satisfaction scores.", author: "Sarah Jenkins", role: "CTO, TechFlow" },
    { quote: "The AI agents they built for us are indistinguishable from human operators. Truly next-level technology.", author: "Marcus Chen", role: "Director of Ops, Nexus" },
    { quote: "Implementation was flawless. Their team understood our complex requirements and delivered ahead of schedule.", author: "Elena Rodriguez", role: "VP of Engineering, Solara" },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-header font-bold mb-4 text-primary">Client Stories</h2>
                    <div className="section-accent-line" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl relative group hover:-translate-y-1 transition-all duration-300"
                        >
                            <Quote className="absolute top-6 left-6 text-primary/[0.06]" size={40} />
                            <p className="text-sm text-dim mb-8 relative z-10 italic leading-relaxed">"{item.quote}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/[0.08] flex items-center justify-center text-primary/50 font-bold text-xs font-header">
                                    {item.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-sm">{item.author}</h4>
                                    <p className="text-xs text-dim">{item.role}</p>
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
