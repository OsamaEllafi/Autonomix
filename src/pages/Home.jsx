import React from 'react';
import { ArrowRight } from 'lucide-react';
import FeaturesSection from '../components/FeaturesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ParticlesBackground from '../components/ParticlesBackground';

const Home = () => {
    return (
        <div className="relative" style={{ zIndex: 10 }}>
            <ParticlesBackground />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Hero3D is now global in Layout */}

                <div className="container relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-pulse drop-shadow-lg">
                        FUTURE OF <br />
                        <span className="text-white drop-shadow-md">AUTOMATION</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-dim mb-8 max-w-2xl mx-auto">
                        We build intelligent AI agents and autonomous workflows for the next generation of enterprises.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="btn btn-primary flex items-center gap-2">
                            Get Started <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-outline">
                            View Services
                        </button>
                    </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-dark)] pointer-events-none"></div>
            </section>

            <FeaturesSection />
            <ProcessSection />

            {/* Services Preview */}
            <section className="py-20 container relative z-10">
                <h2 className="text-3xl font-header mb-10 text-center">Our <span className="text-primary">Services</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass p-8 rounded-xl hover:border-primary transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-full mb-4 flex items-center justify-center text-primary">
                                AI
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI Workflow Automation</h3>
                            <p className="text-dim">Streamline your business processes with our cutting-edge AI solutions.</p>
                        </div>
                    ))}
                </div>
            </section>

            <TestimonialsSection />
        </div>
    );
};

export default Home;
