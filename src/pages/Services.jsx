import React from 'react';
import { Bot, Code, Workflow, Smartphone, Database, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    { icon: <Workflow size={28} strokeWidth={1.5} />, title: 'Workflow Automation', description: 'Intelligent, self-correcting workflows engineered to eliminate friction.', align: 'left' },
    { icon: <Bot size={28} strokeWidth={1.5} />, title: 'Autonomous Agents', description: 'Bespoke LLM-powered entities capable of executing complex multi-step reasoning.', align: 'right' },
    { icon: <Brain size={28} strokeWidth={1.5} />, title: 'LLM Integration', description: 'Deep integration of foundation models directly into your proprietary data architecture.', align: 'left' },
    { icon: <Database size={28} strokeWidth={1.5} />, title: 'Data Infrastructure', description: 'Zero-trust, high-throughput pipelines designed to fuel enterprise AI.', align: 'right' },
    { icon: <Code size={28} strokeWidth={1.5} />, title: 'Web Architecture', description: 'High-performance, edge-deployed web applications built for scale.', align: 'left' },
    { icon: <Smartphone size={28} strokeWidth={1.5} />, title: 'Mobile Ecosystems', description: 'Native intelligence brought directly to iOS and Android endpoints.', align: 'right' },
];

const Services = () => {
    return (
        <div className="pt-32 pb-32 min-h-screen bg-white relative overflow-hidden" style={{ zIndex: 10 }}>
            {/* Ambient Background Glows */}
            <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 max-w-6xl">

                {/* Header Section */}
                <div className="mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-header text-primary tracking-wide mb-6">
                            INFRASTRUCTURE
                        </h1>
                        <p className="text-lg text-dim max-w-2xl mx-auto font-light leading-relaxed">
                            Comprehensive automation architectures engineered for absolute scale.
                            We build the systems that build your future.
                        </p>
                    </motion.div>
                </div>

                {/* Sleek Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                className="glass-premium ambient-shadow p-8 rounded-[32px] group relative overflow-hidden h-full flex flex-col"
                            >
                                {/* Faint background number */}
                                <div className="absolute top-4 right-6 font-header text-6xl font-bold text-primary/[0.03] select-none pointer-events-none transition-all duration-500 group-hover:text-primary/[0.05] group-hover:scale-110 group-hover:-translate-y-2">
                                    0{index + 1}
                                </div>

                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary/[0.04] text-primary/60 transition-all duration-500 group-hover:bg-primary group-hover:text-white mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary font-header tracking-wide">{service.title}</h3>
                                <p className="text-dim text-sm leading-relaxed flex-grow">{service.description}</p>

                                {/* Bottom Accent Line */}
                                <div className="mt-8 w-12 h-[2px] bg-primary/10 transition-all duration-500 group-hover:w-full group-hover:bg-primary/30" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;
