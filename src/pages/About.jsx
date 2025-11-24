import React from 'react';

const About = () => {
    return (
        <div className="pt-20 pb-20 container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold font-header mb-8">
                        We Are <span className="text-gradient">Autonomix</span>
                    </h1>
                    <p className="text-lg text-dim mb-6 leading-relaxed">
                        Founded in 2024, Autonomix is at the forefront of the AI revolution. We believe that true automation isn't just about scripts—it's about creating intelligent systems that adapt, learn, and evolve.
                    </p>
                    <p className="text-lg text-dim mb-6 leading-relaxed">
                        Our team consists of elite engineers, data scientists, and designers dedicated to building the infrastructure for the autonomous enterprise. We serve healthcare, education, and tech giants, helping them unlock unprecedented efficiency.
                    </p>
                    <div className="flex gap-8 mt-12">
                        <div>
                            <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                            <p className="text-sm text-dim uppercase tracking-widest">Enterprise Clients</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-secondary mb-2">100+</h3>
                            <p className="text-sm text-dim uppercase tracking-widest">AI Agents Deployed</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                            <p className="text-sm text-dim uppercase tracking-widest">System Uptime</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden glass flex items-center justify-center border border-glass-border">
                        {/* Placeholder for an image or 3D element */}
                        <div className="text-center">
                            <div className="text-6xl mb-4">🚀</div>
                            <p className="font-header text-xl">Mission Control</p>
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default About;
