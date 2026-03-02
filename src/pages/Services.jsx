import React from 'react';
import { Bot, Code, Workflow, Smartphone, Database, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    { icon: <Workflow size={32} />, title: 'AI Workflow Automation', description: 'Streamline complex business processes with intelligent, self-correcting workflows that reduce manual effort by up to 90%.' },
    { icon: <Bot size={32} />, title: 'Custom AI Agents', description: 'Deploy autonomous agents capable of handling customer support, data analysis, and decision-making tasks 24/7.' },
    { icon: <Code size={32} />, title: 'Web Application Development', description: 'Scalable, high-performance web apps built with modern frameworks and integrated with AI capabilities.' },
    { icon: <Smartphone size={32} />, title: 'Mobile App Development', description: 'Native and cross-platform mobile solutions that bring your AI-powered services to iOS and Android users.' },
    { icon: <Database size={32} />, title: 'Data Engineering', description: 'Robust data pipelines and infrastructure to fuel your AI models and business intelligence tools.' },
    { icon: <Brain size={32} />, title: 'LLM Integration', description: 'Seamlessly integrate Large Language Models like GPT-4 and Claude into your existing software ecosystem.' },
];

const Services = () => {
    return (
        <div className="pt-20 pb-20" style={{ position: 'relative', zIndex: 10 }}>
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-header mb-4 text-primary">Our Services</h1>
                    <div className="section-accent-line" />
                    <p className="text-lg text-dim max-w-xl mx-auto">
                        Comprehensive AI and development solutions tailored for enterprise scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.07 }}
                            className="glass p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-primary/[0.06] text-primary/60 group-hover:bg-primary/[0.1] transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">{service.title}</h3>
                            <p className="text-dim text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
