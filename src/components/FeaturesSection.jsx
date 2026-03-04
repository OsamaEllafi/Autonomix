import React from 'react';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    { icon: <Zap size={28} strokeWidth={1.5} />, title: 'Lightning Fast', description: 'Optimized for speed with edge computing and distributed architecture. Expect sub-millisecond latency globally.' },
    { icon: <Shield size={28} strokeWidth={1.5} />, title: 'Enterprise Security', description: 'Bank-grade encryption and strict compliance with global data standards, ensuring absolute zero trust.' },
    { icon: <Cpu size={28} strokeWidth={1.5} />, title: 'AI Native', description: 'Built from the ground up with artificial intelligence at its core, enabling systems that learn and adapt continuously.' },
    { icon: <Globe size={28} strokeWidth={1.5} />, title: 'Global Scale', description: 'Deploy anywhere in the world with our globally distributed infrastructure network, built for scale.' },
];

const FeaturesSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Very subtle ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] pointer-events-none opacity-50" />

            <div className="container relative z-10">
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-4xl md:text-5xl font-header font-bold mb-6 text-primary tracking-wide">
                        WHY AUTONOMIX
                    </h2>
                    <p className="text-dim max-w-xl mx-auto text-lg leading-relaxed">
                        We combine cutting-edge technology with robust engineering to deliver intelligent solutions that operate at scale.
                    </p>
                </motion.div>

                {/* Asymmetrical layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">

                    {/* Left Column (Pushed down slightly) */}
                    <div className="flex flex-col gap-8 lg:gap-16 md:mt-24">
                        {[features[0], features[2]].map((feature, i) => (
                            <FeatureCard key={`left-${i}`} feature={feature} index={i * 2} />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 lg:gap-16">
                        {[features[1], features[3]].map((feature, i) => (
                            <FeatureCard key={`right-${i}`} feature={feature} index={i * 2 + 1} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ feature, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div
                // Antigravity drift
                animate={{ y: [0, -12, 0] }}
                transition={{
                    duration: 6 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                }}
                className="glass-premium p-10 md:p-12 rounded-[32px] group relative overflow-hidden"
            >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/[0.04] text-primary/70 mb-8 transition-colors duration-500 group-hover:bg-primary/[0.08] group-hover:text-primary">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary font-header tracking-wide">{feature.title}</h3>
                <p className="text-dim text-base leading-relaxed">{feature.description}</p>
            </motion.div>
        </motion.div>
    );
};

export default FeaturesSection;
