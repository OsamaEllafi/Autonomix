import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We analyze your business needs and identify high-impact automation opportunities.'
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'Our architects design a custom AI roadmap tailored to your specific goals.'
    },
    {
        number: '03',
        title: 'Development',
        description: 'We build and train your custom AI agents using our proprietary framework.'
    },
    {
        number: '04',
        title: 'Deployment',
        description: 'Seamless integration into your existing workflow with zero downtime.'
    }
];

const ProcessSection = () => {
    return (
        <section className="py-20 bg-black/30 relative">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-header font-bold mb-4">How We <span className="text-secondary">Work</span></h2>
                    <p className="text-dim max-w-2xl mx-auto">
                        A proven methodology to transform your business with AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="w-24 h-24 bg-black border border-glass-border rounded-full flex items-center justify-center text-3xl font-header font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-6 mx-auto shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                                {step.number}
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-dim text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
