import React, { lazy, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FeaturesSection from '../components/FeaturesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Home = () => {
    return (
        <div className="relative" style={{ zIndex: 10 }}>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Spline 3D Background */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'auto',
                }}>
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center bg-[#f5f6f8]">
                            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                        </div>
                    }>
                        <Spline
                            scene="https://prod.spline.design/iWAidKCdLjPFumxL/scene.splinecode?v=2"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </Suspense>
                </div>

                {/* Hero Content — positioned at the bottom of the viewport */}
                <div className="container absolute bottom-16 left-1/2 -translate-x-1/2 z-10 text-center" style={{ pointerEvents: 'none' }}>
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-5"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        style={{
                            color: 'rgba(15, 17, 23, 0.75)',
                            textShadow: '0 1px 16px rgba(245,246,248,0.6)',
                        }}
                    >
                        FUTURE OF{' '}
                        <span style={{ color: 'rgba(15, 17, 23, 0.45)' }}>AUTOMATION</span>
                    </motion.h1>

                    <motion.p
                        className="text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                        style={{
                            color: 'rgba(15, 17, 23, 0.5)',
                            textShadow: '0 1px 12px rgba(245,246,248,0.5)',
                        }}
                    >
                        Intelligent AI agents and autonomous workflows for the next generation of enterprises.
                    </motion.p>

                    <motion.div
                        className="flex justify-center gap-3"
                        style={{ pointerEvents: 'auto' }}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                    >
                        <button className="btn btn-primary flex items-center gap-2 text-sm">
                            Get Started <ArrowRight size={16} />
                        </button>
                        <button className="btn btn-outline flex items-center gap-2 text-sm">
                            View Services
                        </button>
                    </motion.div>
                </div>

                {/* Overlay Gradient — fades to bg */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    zIndex: 5,
                    background: 'linear-gradient(to bottom, transparent 55%, var(--bg-dark) 100%)',
                }}></div>
            </section>

            <FeaturesSection />
            <ProcessSection />

            {/* Services Preview — Avant-Garde Bento Box */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

                <div className="container relative z-10 max-w-6xl">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-4xl md:text-5xl font-header font-bold mb-6 text-primary tracking-wide">
                            OUR SERVICES
                        </h2>
                        <div className="section-accent-line" />
                        <p className="text-dim max-w-xl mx-auto text-lg leading-relaxed">
                            Cutting-edge AI blueprints engineered for massive scale and flawless precision.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                        {/* Featured Service (Spans 8 cols) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="md:col-span-8 group perspective-1000"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                                className="glass-premium h-full p-10 lg:p-14 rounded-[32px] ambient-shadow relative overflow-hidden flex flex-col justify-between"
                            >
                                <div className="absolute top-0 right-0 p-8 text-primary/[0.03] font-header text-8xl font-bold select-none pointer-events-none">01</div>

                                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-primary/[0.04] text-primary/70 font-bold text-lg font-header border border-primary/[0.05] transition-transform duration-700 group-hover:scale-110">
                                    AI
                                </div>
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-primary font-header tracking-wide">AI Workflow Automation</h3>
                                    <p className="text-dim text-lg leading-relaxed max-w-md">Streamline your entire business topology. We identify bottlenecks and deploy autonomous micro-agents to resolve them instantly.</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Stacked Side Services (Spans 4 cols) */}
                        <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="h-full group"
                            >
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="glass-premium p-8 rounded-[28px] h-full relative overflow-hidden"
                                >
                                    <h4 className="text-xs font-header tracking-[0.2em] text-accent mb-4 uppercase">Node 02</h4>
                                    <h3 className="text-xl font-bold mb-3 text-primary tracking-wide">Custom AI Agents</h3>
                                    <p className="text-dim text-sm leading-relaxed">Bespoke LLM-powered entities trained securely on your proprietary data schemas.</p>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="h-full group"
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="bg-primary p-8 rounded-[28px] h-full relative overflow-hidden"
                                >
                                    <h4 className="text-xs font-header tracking-[0.2em] text-white/40 mb-4 uppercase">Node 03</h4>
                                    <h3 className="text-xl font-bold mb-3 text-white tracking-wide">Enterprise Solutions</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">Full-stack infrastructure transformation. From raw data lakes to autonomous decision matrices.</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsSection />
        </div>
    );
};

export default Home;
