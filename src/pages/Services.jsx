import React, { useState } from 'react';
import { Bot, Code, Workflow, Smartphone, Database, Brain, X, Sliders, Cpu, Activity, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import { useAudio } from '../hooks/useAudio';

const services = [
    { 
        icon: <Workflow size={28} strokeWidth={1.5} />, 
        title: 'Workflow Automation', 
        description: 'Intelligent, self-correcting workflows engineered to eliminate friction.',
        specs: {
            model: 'Claude 3.5 Sonnet',
            concurrency: 120,
            buffer: '16 MB',
            latency: 12,
            throughput: '4.2 GB/s',
            security: 'AES-256 GCM'
        }
    },
    { 
        icon: <Bot size={28} strokeWidth={1.5} />, 
        title: 'Autonomous Agents', 
        description: 'Bespoke LLM-powered entities capable of executing complex multi-step reasoning.',
        specs: {
            model: 'Gemini 1.5 Pro',
            concurrency: 250,
            buffer: '64 MB',
            latency: 180,
            throughput: '9.4 GB/s',
            security: 'Zero-Trust RSA'
        }
    },
    { 
        icon: <Brain size={28} strokeWidth={1.5} />, 
        title: 'LLM Integration', 
        description: 'Deep integration of foundation models directly into your proprietary data architecture.',
        specs: {
            model: 'Llama 3.1 70B',
            concurrency: 80,
            buffer: '32 MB',
            latency: 45,
            throughput: '2.8 GB/s',
            security: 'TLS v1.3'
        }
    },
    { 
        icon: <Database size={28} strokeWidth={1.5} />, 
        title: 'Data Infrastructure', 
        description: 'Zero-trust, high-throughput pipelines designed to fuel enterprise AI.',
        specs: {
            model: 'Apache Iceberg v2',
            concurrency: 500,
            buffer: '128 MB',
            latency: 8,
            throughput: '12.4 GB/s',
            security: 'AES-256 GCM'
        }
    },
    { 
        icon: <Code size={28} strokeWidth={1.5} />, 
        title: 'Web Architecture', 
        description: 'High-performance, edge-deployed web applications built for scale.',
        specs: {
            model: 'NextJS / Edge',
            concurrency: 1000,
            buffer: '8 MB',
            latency: 18,
            throughput: '15.2 GB/s',
            security: 'Cloudflare WAF'
        }
    },
    { 
        icon: <Smartphone size={28} strokeWidth={1.5} />, 
        title: 'Mobile Ecosystems', 
        description: 'Native intelligence brought directly to iOS and Android endpoints.',
        specs: {
            model: 'Gemma 2B (On-Device)',
            concurrency: 50,
            buffer: '4 MB',
            latency: 24,
            throughput: '1.2 GB/s',
            security: 'Secure Enclave'
        }
    },
];

const Services = () => {
    const { playClick, playHover, playKey } = useAudio();
    const [selectedService, setSelectedService] = useState(null);
    const [config, setConfig] = useState({ concurrency: 100, buffer: 16 });

    const handleOpenDrawer = (service) => {
        playClick();
        setSelectedService(service);
        setConfig({
            concurrency: service.specs.concurrency,
            buffer: parseInt(service.specs.buffer)
        });
    };

    const handleCloseDrawer = () => {
        playClick();
        setSelectedService(null);
    };

    const handleSliderChange = (field, val) => {
        playKey();
        setConfig(prev => ({ ...prev, [field]: val }));
    };

    // Calculate simulated dynamic latency based on concurrency load
    const getCalculatedLatency = () => {
        if (!selectedService) return 0;
        const base = selectedService.specs.latency;
        const ratio = config.concurrency / selectedService.specs.concurrency;
        return Math.max(1, Math.round(base * (0.6 + ratio * 0.4)));
    };

    // Calculate simulated throughput
    const getCalculatedThroughput = () => {
        if (!selectedService) return '0 GB/s';
        const base = parseFloat(selectedService.specs.throughput);
        const ratio = config.buffer / parseInt(selectedService.specs.buffer);
        const newThru = (base * (0.7 + ratio * 0.3)).toFixed(1);
        return `${newThru} GB/s`;
    };

    return (
        <div className="pt-32 pb-32 min-h-screen bg-white relative overflow-hidden" style={{ zIndex: 10 }}>
            {/* Ambient Background Glows */}
            <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 max-w-6xl">

                {/* Header Section */}
                <div className="mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-header text-primary tracking-wide mb-6">
                            INFRASTRUCTURE
                        </h1>
                        <p className="text-lg text-dim max-w-2xl mx-auto font-light leading-relaxed">
                            Comprehensive automation architectures engineered for absolute scale.
                            Click a capability node to enter details configuration.
                        </p>
                    </motion.div>
                </div>

                {/* Sleek Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="perspective-1000"
                        >
                            <TiltCard 
                                className="h-full"
                                onClick={() => handleOpenDrawer(service)}
                            >
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 6 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                    className="glass-premium ambient-shadow p-8 rounded-[32px] group relative overflow-hidden h-full flex flex-col cursor-pointer border border-transparent hover:border-black/[0.05]"
                                    onMouseEnter={playHover}
                                >
                                    {/* Faint background number */}
                                    <div className="absolute top-4 right-6 font-header text-6xl font-bold text-primary/[0.03] select-none pointer-events-none transition-all duration-500 group-hover:text-primary/[0.05] group-hover:scale-110 group-hover:-translate-y-2">
                                        0{index + 1}
                                    </div>

                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary/[0.04] text-primary/60 transition-all duration-500 group-hover:bg-primary group-hover:text-white mb-6">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-primary font-header tracking-wide">{service.title}</h3>
                                    <p className="text-dim text-sm leading-relaxed flex-grow">{service.description}</p>

                                    {/* Bottom Accent / Interact Indicator */}
                                    <div className="mt-8 flex items-center justify-between">
                                        <div className="w-12 h-[2px] bg-primary/10 transition-all duration-500 group-hover:w-20 group-hover:bg-primary/30" />
                                        <span className="text-[9px] font-header tracking-wider uppercase text-primary/0 group-hover:text-primary/40 transition-colors duration-300">configure</span>
                                    </div>
                                </motion.div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Slide-out Drawer Panel */}
            <AnimatePresence>
                {selectedService && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseDrawer}
                            className="fixed inset-0 bg-black backdrop-blur-sm z-50"
                        />

                        {/* Drawer content chassis */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-[480px] bg-white/95 backdrop-blur-2xl border-l border-black/[0.05] shadow-[0_0_80px_rgba(0,0,0,0.08)] z-50 p-8 flex flex-col justify-between"
                        >
                            <div>
                                {/* Close Button */}
                                <div className="flex items-center justify-between mb-10 border-b border-black/[0.05] pb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/[0.04] text-primary/70 flex items-center justify-center">
                                            {selectedService.icon}
                                        </div>
                                        <h3 className="font-header font-bold text-sm tracking-widest text-primary uppercase">Blueprint Config</h3>
                                    </div>
                                    <button 
                                        onClick={handleCloseDrawer}
                                        className="w-8 h-8 rounded-full border border-black/[0.05] hover:bg-black/[0.04] flex items-center justify-center text-primary/60 cursor-pointer transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                {/* Title & Info */}
                                <div className="mb-10">
                                    <h2 className="text-2xl font-bold font-header tracking-wide text-primary mb-4">{selectedService.title}</h2>
                                    <p className="text-dim text-sm leading-relaxed">{selectedService.description}</p>
                                </div>

                                {/* Live Configuration Controls */}
                                <div className="space-y-8 mb-10">
                                    <div className="flex items-center gap-2 text-primary/40 font-header text-[10px] tracking-wider uppercase border-b border-black/[0.03] pb-2">
                                        <Sliders size={12} /> Parameters tuning
                                    </div>

                                    {/* Slider 1: Concurrency */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-xs font-header font-bold uppercase text-primary">
                                            <span>Concurrency Thread Limit</span>
                                            <span className="font-mono text-sky-600 bg-sky-50 px-2 py-0.5 rounded">{config.concurrency} Nodes</span>
                                        </div>
                                        <input 
                                            type="range" 
                                            min="10" 
                                            max={selectedService.specs.concurrency * 1.5}
                                            value={config.concurrency}
                                            onChange={(e) => handleSliderChange('concurrency', parseInt(e.target.value))}
                                            className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                                        />
                                        <p className="text-[9px] text-dim">Defines the total concurrent agent worker pools allocated to run queries.</p>
                                    </div>

                                    {/* Slider 2: Buffer Allocation */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-xs font-header font-bold uppercase text-primary">
                                            <span>Vector Buffer Cache</span>
                                            <span className="font-mono text-sky-600 bg-sky-50 px-2 py-0.5 rounded">{config.buffer} MB</span>
                                        </div>
                                        <input 
                                            type="range" 
                                            min="1" 
                                            max={parseInt(selectedService.specs.buffer) * 2}
                                            value={config.buffer}
                                            onChange={(e) => handleSliderChange('buffer', parseInt(e.target.value))}
                                            className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                                        />
                                        <p className="text-[9px] text-dim">Pre-allocated memory sizing for embeddings processing nodes.</p>
                                    </div>
                                </div>

                                {/* Dynamic Diagnostics Panel */}
                                <div className="space-y-4 bg-primary/[0.02] border border-primary/[0.05] p-6 rounded-[24px]">
                                    <div className="flex items-center gap-2 text-primary/40 font-header text-[10px] tracking-wider uppercase border-b border-black/[0.03] pb-2">
                                        <Activity size={12} /> Real-time Diagnostics
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-[9px] text-dim uppercase block">Calculated Latency</span>
                                            <span className="font-mono text-base font-bold text-primary flex items-center gap-1.5 mt-1">
                                                <Zap size={14} className="text-amber-500" />
                                                {getCalculatedLatency()} ms
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[9px] text-dim uppercase block">Vector Throughput</span>
                                            <span className="font-mono text-base font-bold text-primary flex items-center gap-1.5 mt-1">
                                                <Cpu size={14} className="text-sky-500" />
                                                {getCalculatedThroughput()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Action */}
                            <div className="border-t border-black/[0.05] pt-6 flex flex-col gap-3">
                                <div className="flex justify-between text-[10px] font-header text-dim uppercase">
                                    <span>Cognitive Protocol</span>
                                    <span className="font-bold text-primary">{selectedService.specs.model}</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-header text-dim uppercase">
                                    <span>Cryptographic Layer</span>
                                    <span className="font-bold text-primary">{selectedService.specs.security}</span>
                                </div>
                                <button 
                                    onClick={handleCloseDrawer}
                                    className="w-full py-4 bg-primary text-white rounded-xl font-header font-bold text-xs tracking-widest uppercase hover:bg-primary/95 transition-all shadow-lg shadow-black/[0.08] cursor-pointer mt-4"
                                >
                                    Deploy Configuration
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Services;
