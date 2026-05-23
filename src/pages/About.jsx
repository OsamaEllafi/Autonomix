import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Layers, ShieldAlert, CircleDot, Activity } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import { useAudio } from '../hooks/useAudio';
import { useSEO } from '../hooks/useSEO';

const versions = [
    {
        tag: 'v1.0',
        name: 'Genesis Engine',
        date: 'Q1 2024',
        latency: '140ms',
        load: '15%',
        description: 'First-generation cognitive routing architecture. Established basic distributed worker queues and sequential task scheduling.',
        features: ['Cognitive API Router', 'Sequential Task Queues', 'Structured JSON Ingestion'],
        status: 'Deprecated'
    },
    {
        tag: 'v2.0',
        name: 'Vector Mesh',
        date: 'Q3 2024',
        latency: '45ms',
        load: '40%',
        description: 'Second-generation semantic coordination. Integrated high-throughput embedding synchronizers and hot-swap vector pools.',
        features: ['Semantic Embedding Sync', 'Hot-Swap Vector Pools', 'Multi-Agent Broker Node'],
        status: 'Deprecated'
    },
    {
        tag: 'v3.0',
        name: 'Autonomous Fabric',
        date: 'Active',
        latency: '12ms',
        load: '88%',
        description: 'Current production protocol. Powered by recursive reasoning clusters, real-time SVG routing, and self-healing micro-agent states.',
        features: ['Recursive Reasoning Mesh', 'SVG Real-time Packet Routing', 'Self-Healing Core Fabric'],
        status: 'Active'
    }
];

const About = () => {
    useSEO('Manifesto & Mission Control', 'Founded at the exact intersection of software systems and artificial intelligence. Read the Autonomix manifesto.');
    const { playClick, playHover } = useAudio();
    const [selectedIdx, setSelectedIdx] = useState(2); // default to v3.0

    const handleVersionClick = (idx) => {
        playClick();
        setSelectedIdx(idx);
    };

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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32">

                    {/* Left Column: Mission Control Visual */}
                    <div className="lg:col-span-5 relative perspective-1000">
                        <TiltCard className="w-full h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
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
                        </TiltCard>
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

                {/* Section 2: Interactive Protocol Evolution Timeline */}
                <div className="border-t border-primary/10 pt-32 max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-header font-bold text-primary tracking-wide mb-6">PROTOCOL EVOLUTION</h2>
                        <div className="section-accent-line" />
                        <p className="text-dim text-base max-w-md mx-auto leading-relaxed">
                            Chronology of simulated cognitive architectures. Click nodes to review previous deployments.
                        </p>
                    </div>

                    {/* Timeline Tracker Chassis */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Selector Column (5 cols) */}
                        <div className="lg:col-span-5 flex flex-col gap-6 relative z-10">
                            {versions.map((ver, idx) => (
                                <button
                                    key={ver.tag}
                                    onClick={() => handleVersionClick(idx)}
                                    onMouseEnter={playHover}
                                    className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                                        selectedIdx === idx
                                            ? 'bg-primary text-white border-primary shadow-xl shadow-primary/10 scale-[1.02]'
                                            : 'bg-white text-primary border-black/[0.05] hover:bg-black/[0.02]'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`font-header font-bold text-xs tracking-wider px-2.5 py-1 rounded-md ${
                                            selectedIdx === idx 
                                                ? 'bg-white/10 text-white' 
                                                : 'bg-primary/[0.04] text-primary'
                                        }`}>
                                            {ver.tag}
                                        </span>
                                        <div>
                                            <h4 className="font-header font-bold text-sm tracking-wide">{ver.name}</h4>
                                            <span className={`text-[9px] uppercase tracking-widest font-mono ${
                                                selectedIdx === idx ? 'text-white/55' : 'text-dim'
                                            }`}>
                                                {ver.date}
                                            </span>
                                        </div>
                                    </div>
                                    <CircleDot size={16} className={selectedIdx === idx ? 'text-emerald-400' : 'text-primary/20'} />
                                </button>
                            ))}
                        </div>

                        {/* Interactive Viewer Column (7 cols) */}
                        <div className="lg:col-span-7 h-[360px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                {versions.map((ver, idx) => {
                                    if (selectedIdx !== idx) return null;
                                    return (
                                        <motion.div
                                            key={ver.tag + '-detail'}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.35, ease: 'easeOut' }}
                                            className="w-full h-full glass-premium rounded-[32px] p-8 md:p-10 border border-white flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-6 border-b border-black/[0.03] pb-4">
                                                    <h3 className="font-header font-bold text-lg text-primary tracking-wide">{ver.name} Specs</h3>
                                                    <span className={`text-[8px] font-header font-bold px-2 py-0.5 rounded uppercase tracking-widest ${
                                                        ver.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600 animate-pulse' : 'bg-red-500/10 text-red-500'
                                                    }`}>
                                                        {ver.status}
                                                    </span>
                                                </div>
                                                <p className="text-dim text-sm leading-relaxed mb-6 font-light">{ver.description}</p>
                                                
                                                {/* Features list */}
                                                <div className="space-y-2">
                                                    <span className="text-[9px] font-header tracking-wider uppercase text-primary/40 block mb-3">Core Modules</span>
                                                    {ver.features.map((feat, fidx) => (
                                                        <div key={fidx} className="flex items-center gap-2 text-xs text-primary font-medium">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                                            {feat}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Diagnostic Specs Footer */}
                                            <div className="grid grid-cols-2 gap-4 border-t border-black/[0.03] pt-6 mt-6">
                                                <div>
                                                    <span className="text-[9px] text-dim uppercase block font-header">Operational Latency</span>
                                                    <span className="font-mono text-base font-bold text-primary flex items-center gap-1.5 mt-1">
                                                        <Zap size={14} className="text-amber-500" />
                                                        {ver.latency}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-[9px] text-dim uppercase block font-header">Cognitive Thread Load</span>
                                                    <span className="font-mono text-base font-bold text-primary flex items-center gap-1.5 mt-1">
                                                        <Cpu size={14} className="text-sky-500" />
                                                        {ver.load}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
