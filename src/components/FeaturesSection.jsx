import React from 'react';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    { icon: <Zap size={24} />, title: 'Lightning Fast', description: 'Optimized for speed with edge computing and distributed architecture.' },
    { icon: <Shield size={24} />, title: 'Enterprise Security', description: 'Bank-grade encryption and compliance with global data standards.' },
    { icon: <Cpu size={24} />, title: 'AI Native', description: 'Built from the ground up with artificial intelligence at its core.' },
    { icon: <Globe size={24} />, title: 'Global Scale', description: 'Deploy anywhere in the world with our global infrastructure network.' },
];

const FeaturesSection = () => {
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
                    <h2 className="text-3xl md:text-4xl font-header font-bold mb-4 text-primary">
                        Why Autonomix?
                    </h2>
                    <div className="section-accent-line" />
                    <p className="text-dim max-w-xl mx-auto">
                        We combine cutting-edge technology with robust engineering to deliver solutions that scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="glass p-7 rounded-2xl group hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-primary/[0.06] text-primary/60 mb-5 group-hover:bg-primary/[0.1] transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-bold mb-2 text-primary">{feature.title}</h3>
                            <p className="text-dim text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
