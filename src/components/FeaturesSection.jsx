import React from 'react';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Zap size={32} />,
        title: 'Lightning Fast',
        description: 'Optimized for speed with edge computing and distributed architecture.'
    },
    {
        icon: <Shield size={32} />,
        title: 'Enterprise Security',
        description: 'Bank-grade encryption and compliance with global data standards.'
    },
    {
        icon: <Cpu size={32} />,
        title: 'AI Native',
        description: 'Built from the ground up with artificial intelligence at its core.'
    },
    {
        icon: <Globe size={32} />,
        title: 'Global Scale',
        description: 'Deploy anywhere in the world with our global infrastructure network.'
    }
];

const FeaturesSection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-header font-bold mb-4">Why <span className="text-primary">Autonomix?</span></h2>
                    <p className="text-dim max-w-2xl mx-auto">
                        We combine cutting-edge technology with robust engineering to deliver solutions that scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-6 rounded-xl border border-glass-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-dim text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
