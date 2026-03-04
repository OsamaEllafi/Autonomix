import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
    { number: '01', title: 'Discovery', description: 'We analyze your business needs, identifying high-impact automation opportunities hidden in your current workflows.' },
    { number: '02', title: 'Strategy', description: 'Our architects design a custom AI roadmap tailored to your specific goals, mapping out the precise intelligent architecture.' },
    { number: '03', title: 'Development', description: 'We build and train your custom AI agents using our proprietary framework, ensuring absolute precision and minimal latency.' },
    { number: '04', title: 'Deployment', description: 'Seamless integration into your existing ecosystem with zero downtime and continuous learning loops.' },
];

const ProcessSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax logic for the central line line
    const strokeLength = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-32 relative bg-white overflow-hidden">
            <div className="container relative z-10 max-w-6xl">
                <motion.div
                    className="text-center mb-32"
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-4xl md:text-5xl font-header font-bold mb-6 text-primary tracking-wide">
                        THE METHOD
                    </h2>
                    <p className="text-dim max-w-xl mx-auto text-lg leading-relaxed">
                        A rigorous, mathematically proven methodology to transform your enterprise with autonomous systems.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Parallax Line */}
                    <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-primary/[0.04] -translate-x-1/2" />
                    <motion.div
                        className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 to-accent/30 -translate-x-1/2 origin-top"
                        style={{ height: strokeLength }}
                    />

                    <div className="flex flex-col gap-24 md:gap-32 w-full">
                        {steps.map((step, index) => (
                            <ProcessStep key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProcessStep = ({ step, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-32 w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* Center Node dot */}
            <div className="absolute left-[24px] md:left-1/2 top-10 md:top-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_15px_rgba(15,17,23,0.3)]" />

            {/* Empty space for alternating layout on desktop */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content Box */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: true, margin: "-20%" }}
                className={`w-full md:w-1/2 relative pl-16 md:pl-0 ${isEven ? 'md:pr-12 lg:pr-24 text-left' : 'md:pl-12 lg:pl-24 md:text-right'}`}
            >
                {/* Floating Parallax Number Watermark */}
                <motion.div
                    className={`absolute top-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-header font-bold text-primary/[0.03] select-none pointer-events-none z-0 ${isEven ? 'left-6 md:auto md:-right-10' : 'left-6 md:-left-10'}`}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                    {step.number}
                </motion.div>

                <div className="relative z-10 glass-premium p-8 md:p-10 rounded-[28px]">
                    <h3 className="text-2xl font-bold mb-4 text-primary font-header tracking-wide inline-block relative">
                        {step.title}
                        <div className={`absolute -bottom-2 h-[2px] bg-primary/20 w-12 ${isEven ? 'left-0' : 'left-0 md:left-auto md:right-0'}`} />
                    </h3>
                    <p className="text-dim text-base leading-relaxed mt-4">
                        {step.description}
                    </p>
                </div>
            </motion.div>

        </div>
    );
};

export default ProcessSection;
