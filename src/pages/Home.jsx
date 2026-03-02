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

            {/* Services Preview */}
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
                            Our Services
                        </h2>
                        <div className="section-accent-line" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {['AI Workflow Automation', 'Custom AI Agents', 'Enterprise Solutions'].map((title, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-2xl hover:-translate-y-1 transition-all duration-400 group"
                            >
                                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-primary/[0.06] text-primary/70 font-bold text-sm font-header group-hover:bg-primary/[0.1] transition-colors">
                                    AI
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-primary">{title}</h3>
                                <p className="text-dim text-sm leading-relaxed">Streamline your business processes with our cutting-edge AI solutions.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialsSection />
        </div>
    );
};

export default Home;
