import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Activity, HardDrive, Cpu, Terminal as TermIcon, Zap, Play, AlertOctagon, RefreshCw } from 'lucide-react';
import TiltCard from './TiltCard';

const TopologySection = () => {
    const [status, setStatus] = useState('nominal'); // nominal, anomaly, optimizing
    const [logs, setLogs] = useState([
        'SYS: System initialized. Core frequency stable.',
        'SYS: 24 active worker agents online.',
        'SYS: Ingress rate nominal (4.2 GB/s).'
    ]);
    const [ping, setPing] = useState(14);
    const [packetTrigger, setPacketTrigger] = useState(0);

    const addLog = (msg) => {
        setLogs((prev) => [msg, ...prev.slice(0, 3)]);
    };

    // Simulate real-time ticks
    useEffect(() => {
        const interval = setInterval(() => {
            if (status === 'nominal') {
                const randomAgent = Math.floor(Math.random() * 8) + 1;
                addLog(`AGENT-${randomAgent}: Executed query pipeline in ${Math.floor(Math.random() * 20) + 5}ms.`);
                setPing(Math.floor(Math.random() * 4) + 12);
            }
        }, 6000);
        return () => clearInterval(interval);
    }, [status]);

    const handleTransmit = () => {
        setPacketTrigger(prev => prev + 1);
        addLog('SYS: Manual payload transmit initiated.');
    };

    const handleAnomaly = () => {
        setStatus('anomaly');
        setPing(184);
        addLog('WARN: Latency spike detected on Agent Mesh Node-03!');
        addLog('CRIT: Node-03 buffer overflow. Auto-re-routing packets.');
        
        // Auto resolve after 5 seconds
        setTimeout(() => {
            setStatus('nominal');
            setPing(15);
            addLog('RESOLVED: Re-routed traffic via Node-04. Health OK.');
        }, 5000);
    };

    const handleOptimize = () => {
        setStatus('optimizing');
        setPing(4);
        addLog('SYS: Optimizing node connection vectors...');
        
        setTimeout(() => {
            setStatus('nominal');
            setPing(8);
            addLog('SYS: Optimization complete. Latency reduced to 8ms.');
        }, 3000);
    };

    return (
        <section className="py-32 relative bg-white overflow-hidden border-t border-black/[0.03]">
            {/* Background elements */}
            <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-primary/[0.01] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/[0.01] rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-header font-bold mb-6 text-primary tracking-wide">
                            ACTIVE TOPOLOGY
                        </h2>
                        <div className="section-accent-line" />
                        <p className="text-dim max-w-xl mx-auto text-lg leading-relaxed">
                            Live visualization of autonomous agents processing enterprise transactions across the system fabric.
                        </p>
                    </motion.div>
                </div>

                {/* Dashboard grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
                    
                    {/* Log Console & Control Room (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col justify-between glass-premium rounded-[32px] p-8 border border-white relative overflow-hidden">
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-header font-bold text-sm tracking-[0.2em] text-primary uppercase flex items-center gap-2">
                                    <Activity size={16} className={status === 'anomaly' ? 'text-red-500 animate-pulse' : 'text-primary'} />
                                    Control Room
                                </h3>
                                <span className={`text-[10px] font-header font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                                    status === 'nominal' ? 'bg-emerald-500/10 text-emerald-600' :
                                    status === 'anomaly' ? 'bg-red-500/10 text-red-600 animate-pulse' :
                                    'bg-sky-500/10 text-sky-600'
                                }`}>
                                    {status}
                                </span>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-primary/[0.02] border border-primary/[0.04] rounded-2xl">
                                    <div className="text-[10px] font-header tracking-wider text-dim uppercase mb-1">Latency</div>
                                    <div className="font-header font-bold text-2xl text-primary">{ping}ms</div>
                                </div>
                                <div className="p-4 bg-primary/[0.02] border border-primary/[0.04] rounded-2xl">
                                    <div className="text-[10px] font-header tracking-wider text-dim uppercase mb-1">Bandwidth</div>
                                    <div className="font-header font-bold text-2xl text-primary">
                                        {status === 'anomaly' ? '0.8 GB/s' : status === 'optimizing' ? '8.4 GB/s' : '4.2 GB/s'}
                                    </div>
                                </div>
                            </div>

                            {/* Logs Display */}
                            <div className="mb-8">
                                <div className="text-[10px] font-header tracking-wider text-dim uppercase mb-3">Operational Logs</div>
                                <div className="font-mono text-[11px] leading-relaxed bg-[#0f1117] text-white/70 p-4 rounded-xl h-44 overflow-hidden flex flex-col justify-start gap-1">
                                    <AnimatePresence>
                                        {logs.map((log, i) => (
                                            <motion.div
                                                key={log + i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`truncate ${
                                                    log.includes('WARN') ? 'text-amber-400' :
                                                    log.includes('CRIT') ? 'text-red-400' :
                                                    log.includes('SYS') ? 'text-sky-400' : 'text-emerald-400'
                                                }`}
                                            >
                                                &gt; {log}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Buttons */}
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={handleTransmit}
                                className="w-full flex items-center justify-between text-xs font-header font-bold tracking-wider uppercase bg-primary text-white py-3.5 px-5 rounded-xl hover:bg-primary/95 transition-all shadow-[0_4px_12px_rgba(15,17,23,0.15)] group"
                            >
                                Transmit Payload
                                <Play size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={handleAnomaly}
                                    className="flex items-center justify-center gap-2 text-[10px] font-header font-bold tracking-wider uppercase border border-red-500/20 text-red-600 bg-red-500/[0.02] hover:bg-red-500/[0.06] py-3 px-4 rounded-xl transition-all"
                                >
                                    <AlertOctagon size={13} />
                                    Inject Anomaly
                                </button>
                                <button
                                    onClick={handleOptimize}
                                    className="flex items-center justify-center gap-2 text-[10px] font-header font-bold tracking-wider uppercase border border-primary/10 text-primary hover:bg-primary/[0.04] py-3 px-4 rounded-xl transition-all"
                                >
                                    <RefreshCw size={13} className={status === 'optimizing' ? 'animate-spin' : ''} />
                                    Optimize Nodes
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Node Interactive Canvas (8 cols) */}
                    <div className="lg:col-span-8 glass-premium rounded-[32px] p-8 md:p-10 border border-white flex flex-col justify-center relative overflow-hidden h-[540px]">
                        
                        {/* Connecting SVGs (Lines & Pacman pack-dot loops) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                            <defs>
                                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#0f1117" stopOpacity="0.05" />
                                    <stop offset="50%" stopColor="#5a5f73" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#0f1117" stopOpacity="0.05" />
                                </linearGradient>
                                <linearGradient id="gradient-line-active" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#0f1117" stopOpacity="0.2" />
                                    <stop offset="50%" stopColor="#0f1117" stopOpacity="0.9" />
                                    <stop offset="100%" stopColor="#0f1117" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>

                            {/* Node Connectors */}
                            {/* Ingress -> Decision (100,250 to 300,250) */}
                            <path d="M 120 250 L 260 250" stroke={status === 'anomaly' ? '#ef4444' : 'url(#gradient-line)'} strokeWidth="1.5" fill="none" />
                            {/* Decision -> Agent 01 (300,250 to 500,150) */}
                            <path d="M 340 230 C 400 200, 420 150, 480 150" stroke={status === 'anomaly' ? '#ef4444' : 'url(#gradient-line)'} strokeWidth="1.5" fill="none" />
                            {/* Decision -> Agent 02 (300,250 to 500,350) */}
                            <path d="M 340 270 C 400 300, 420 350, 480 350" stroke={status === 'anomaly' ? '#ef4444' : 'url(#gradient-line)'} strokeWidth="1.5" fill="none" />
                            {/* Agent 01 -> Persistence (520,150 to 660,250) */}
                            <path d="M 520 150 C 580 150, 600 200, 660 230" stroke={status === 'anomaly' ? '#ef4444' : 'url(#gradient-line)'} strokeWidth="1.5" fill="none" />
                            {/* Agent 02 -> Persistence (520,350 to 660,250) */}
                            <path d="M 520 350 C 580 350, 600 300, 660 270" stroke={status === 'anomaly' ? '#ef4444' : 'url(#gradient-line)'} strokeWidth="1.5" fill="none" />

                            {/* Animated Packets along Paths */}
                            {/* Ingress -> Decision */}
                            <motion.circle r="3" fill={status === 'anomaly' ? '#ef4444' : '#0f1117'}
                                initial={{ offset: 0 }}
                                animate={{
                                    cx: [120, 260],
                                    cy: [250, 250],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: status === 'optimizing' ? 0.6 : 1.2,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: 0
                                }}
                            />

                            {/* Decision -> Agent 1 */}
                            <motion.circle r="3" fill="#0f1117"
                                initial={{ offset: 0 }}
                                animate={{
                                    cx: [340, 370, 430, 480],
                                    cy: [230, 210, 160, 150],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: status === 'optimizing' ? 0.8 : 1.6,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: 0.3
                                }}
                            />

                            {/* Decision -> Agent 2 */}
                            <motion.circle r="3" fill={status === 'anomaly' ? '#ef4444' : '#0f1117'}
                                initial={{ offset: 0 }}
                                animate={{
                                    cx: [340, 370, 430, 480],
                                    cy: [270, 290, 340, 350],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: status === 'anomaly' ? 2.5 : status === 'optimizing' ? 0.8 : 1.6,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: 0.9
                                }}
                            />

                            {/* Agent 1 -> Persistence */}
                            <motion.circle r="3" fill="#0f1117"
                                initial={{ offset: 0 }}
                                animate={{
                                    cx: [520, 570, 610, 660],
                                    cy: [150, 150, 200, 230],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: status === 'optimizing' ? 0.7 : 1.4,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: 0.6
                                }}
                            />

                            {/* Agent 2 -> Persistence */}
                            <motion.circle r="3" fill={status === 'anomaly' ? '#ef4444' : '#0f1117'}
                                initial={{ offset: 0 }}
                                animate={{
                                    cx: [520, 570, 610, 660],
                                    cy: [350, 350, 300, 270],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: status === 'anomaly' ? 2.5 : status === 'optimizing' ? 0.7 : 1.4,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: 1.2
                                }}
                            />

                            {/* Additional burst flow dots triggered by button */}
                            {packetTrigger > 0 && Array.from({ length: 4 }).map((_, i) => (
                                <motion.circle key={`burst-${packetTrigger}-${i}`} r="4" fill="#5a5f73"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        cx: [120, 260, 300, 370, 480, 520, 660],
                                        cy: [250, 250, 250, i % 2 === 0 ? 200 : 300, i % 2 === 0 ? 150 : 350, i % 2 === 0 ? 150 : 350, 250],
                                        opacity: [0, 1, 1, 1, 1, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2.2,
                                        ease: 'easeInOut',
                                        delay: i * 0.15
                                    }}
                                />
                            ))}
                        </svg>

                        {/* Interactive Node Cards */}
                        <div className="absolute left-4 top-[210px] z-10 w-24">
                            <TiltCard>
                                <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-black/[0.04] p-3 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-8 h-8 mx-auto rounded-xl bg-primary/[0.04] flex items-center justify-center text-primary/70 mb-2">
                                        <TermIcon size={16} />
                                    </div>
                                    <h4 className="font-header text-[8px] tracking-[0.1em] text-primary uppercase font-bold">API Ingress</h4>
                                    <div className="h-1 w-4 bg-primary/20 mx-auto mt-2 rounded-full" />
                                </div>
                            </TiltCard>
                        </div>

                        <div className="absolute left-[240px] top-[200px] z-10 w-28">
                            <TiltCard>
                                <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-black/[0.04] p-3.5 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-8 h-8 mx-auto rounded-xl bg-primary/[0.04] flex items-center justify-center text-primary/70 mb-2">
                                        <Cpu size={16} />
                                    </div>
                                    <h4 className="font-header text-[8px] tracking-[0.1em] text-primary uppercase font-bold">Core Router</h4>
                                    <p className="text-[7px] text-dim uppercase mt-1 font-mono">Routing: ok</p>
                                </div>
                            </TiltCard>
                        </div>

                        <div className="absolute left-[460px] top-[100px] z-10 w-28">
                            <TiltCard>
                                <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-black/[0.04] p-3.5 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-8 h-8 mx-auto rounded-xl bg-primary/[0.04] flex items-center justify-center text-primary/70 mb-2">
                                        <Zap size={16} />
                                    </div>
                                    <h4 className="font-header text-[8px] tracking-[0.1em] text-primary uppercase font-bold">Recon Agent</h4>
                                    <p className="text-[7px] text-dim uppercase mt-1 font-mono">Status: Idle</p>
                                </div>
                            </TiltCard>
                        </div>

                        <div className={`absolute left-[460px] top-[300px] z-10 w-28 transition-colors duration-500 rounded-2xl ${
                            status === 'anomaly' ? 'ring-2 ring-red-500/50' : ''
                        }`}>
                            <TiltCard>
                                <div className={`backdrop-blur-md rounded-2xl border p-3.5 text-center shadow-lg transition-all duration-300 ${
                                    status === 'anomaly' ? 'bg-red-500/[0.05] border-red-500/20' : 'bg-white/80 border-black/[0.04]'
                                }`}>
                                    <div className={`w-8 h-8 mx-auto rounded-xl flex items-center justify-center mb-2 ${
                                        status === 'anomaly' ? 'bg-red-500/10 text-red-600' : 'bg-primary/[0.04] text-primary/70'
                                    }`}>
                                        <Shield size={16} className={status === 'anomaly' ? 'animate-bounce' : ''} />
                                    </div>
                                    <h4 className={`font-header text-[8px] tracking-[0.1em] uppercase font-bold ${
                                        status === 'anomaly' ? 'text-red-700' : 'text-primary'
                                    }`}>Mesh Agent-03</h4>
                                    <p className={`text-[7px] uppercase mt-1 font-mono ${
                                        status === 'anomaly' ? 'text-red-500 font-bold' : 'text-dim'
                                    }`}>
                                        {status === 'anomaly' ? 'SPIKE 184ms' : 'Status: OK'}
                                    </p>
                                </div>
                            </TiltCard>
                        </div>

                        <div className="absolute right-4 top-[200px] z-10 w-28">
                            <TiltCard>
                                <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-black/[0.04] p-3.5 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-8 h-8 mx-auto rounded-xl bg-primary/[0.04] flex items-center justify-center text-primary/70 mb-2">
                                        <HardDrive size={16} />
                                    </div>
                                    <h4 className="font-header text-[8px] tracking-[0.1em] text-primary uppercase font-bold">Vector Pool</h4>
                                    <p className="text-[7px] text-dim uppercase mt-1 font-mono">Sync: 100%</p>
                                </div>
                            </TiltCard>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopologySection;
