import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-20 pb-20" style={{ position: 'relative', zIndex: 10 }}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold font-header mb-8 text-primary">
                            We Are Autonomix
                        </h1>
                        <p className="text-base text-dim mb-5 leading-relaxed">
                            Founded in 2024, Autonomix is at the forefront of the AI revolution. We believe that true automation isn't just about scripts—it's about creating intelligent systems that adapt, learn, and evolve.
                        </p>
                        <p className="text-base text-dim mb-5 leading-relaxed">
                            Our team consists of elite engineers, data scientists, and designers dedicated to building the infrastructure for the autonomous enterprise.
                        </p>
                        <div className="flex gap-10 mt-10">
                            {[
                                { value: '50+', label: 'Enterprise Clients' },
                                { value: '100+', label: 'AI Agents Deployed' },
                                { value: '24/7', label: 'System Uptime' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                                >
                                    <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                                    <p className="text-xs text-dim uppercase tracking-widest">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🚀</div>
                                <p className="font-header text-lg text-primary/60">Mission Control</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
