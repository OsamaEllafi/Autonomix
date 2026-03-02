import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { number: '01', title: 'Discovery', description: 'We analyze your business needs and identify high-impact automation opportunities.' },
    { number: '02', title: 'Strategy', description: 'Our architects design a custom AI roadmap tailored to your specific goals.' },
    { number: '03', title: 'Development', description: 'We build and train your custom AI agents using our proprietary framework.' },
    { number: '04', title: 'Deployment', description: 'Seamless integration into your existing workflow with zero downtime.' },
];

const ProcessSection = () => {
    return (
        <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, rgba(15,17,23,0.02) 0%, rgba(15,17,23,0.04) 50%, rgba(15,17,23,0.02) 100%)' }}>
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-header font-bold mb-4 text-primary">How We Work</h2>
                    <div className="section-accent-line" />
                    <p className="text-dim max-w-xl mx-auto">
                        A proven methodology to transform your business with AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-[36px] left-[12.5%] w-[75%] h-px bg-primary/10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            viewport={{ once: true }}
                            className="relative z-10 text-center"
                        >
                            <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center text-xl font-header font-bold mb-6 mx-auto bg-white border border-primary/10 text-primary/50 shadow-sm transition-all hover:border-primary/20 hover:text-primary/70 duration-300">
                                {step.number}
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">{step.title}</h3>
                            <p className="text-dim text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
