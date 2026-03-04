import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-32 pb-32 min-h-screen bg-white relative overflow-hidden" style={{ zIndex: 10 }}>
            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 max-w-7xl">

                {/* Hero / Header Section — Massive Editorial Typography */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold font-header text-primary leading-[0.85] tracking-tight ml-[-8px]">
                            WE ARE
                            <br />
                            <span className="text-primary/10 inline-block mt-4">AUTONOMIX.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Content Split: Asymmetrical Editorial Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Mission Control Visual */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="aspect-[4/5] rounded-[40px] glass-premium ambient-shadow flex flex-col items-center justify-center relative overflow-hidden group"
                        >
                            {/* Slowly rotating abstract element in background */}
                            <motion.div
                                className="absolute inset-0 border-[1px] border-primary/[0.05] rounded-full scale-150"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            />

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="text-center z-10"
                            >
                                <div className="w-24 h-24 mx-auto rounded-3xl bg-primary shadow-2xl flex items-center justify-center mb-8 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                                    <span className="text-white font-header text-3xl font-bold tracking-widest">IX</span>
                                </div>
                                <p className="font-header text-sm tracking-[0.3em] text-primary/40 uppercase">Mission Control</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Narrative and Stats */}
                    <div className="lg:col-span-7 flex flex-col justify-center pt-8 lg:pt-20">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        >
                            <h3 className="text-2xl font-header font-bold text-primary mb-8 tracking-wide">
                                Engineering the Autonomous Enterprise
                            </h3>
                            <p className="text-lg text-dim mb-8 leading-relaxed max-w-2xl font-light">
                                Founded in 2024, Autonomix sits at the exact intersection of sophisticated software architecture and artificial intelligence. We believe that true automation goes beyond rigid scripts—it requires creating intelligent, adaptive systems possessing absolute precision.
                            </p>
                            <p className="text-lg text-dim mb-16 leading-relaxed max-w-2xl font-light">
                                Our collective of elite engineers, AI researchers, and systems architects is dedicated exclusively to building the underlying infrastructure for next-generation enterprises. No templates. No compromises. Just pure, scalable intelligence.
                            </p>
                        </motion.div>

                        {/* Stats — Staggered float in */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16 border-t border-primary/10 pt-16">
                            {[
                                { value: '50+', label: 'Enterprise Nodes' },
                                { value: '100+', label: 'Agents Airborne' },
                                { value: '24/7', label: 'Continuous Uptime' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.1 }}
                                >
                                    <h3 className="text-4xl lg:text-5xl font-bold font-header text-primary mb-3 tracking-tight">{stat.value}</h3>
                                    <p className="text-xs text-dim uppercase tracking-[0.2em] font-medium">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
