import React, { useState, useEffect } from 'react';
import { ShieldAlert, ShieldCheck, Key, Lock, Globe, RefreshCw, AlertTriangle, Cpu, Terminal as TermIcon, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../hooks/useAudio';
import { useSEO } from '../hooks/useSEO';
import TiltCard from '../components/TiltCard';

const Security = () => {
    useSEO('Zero Trust Security Node', 'Inspect enterprise cryptographic layers, zero trust configurations, and dynamic intrusion prevention metrics.');
    const { playClick, playHover, playKey, playUplink } = useAudio();
    const [threatStatus, setThreatStatus] = useState('clear'); // clear, active_scan, blocked_threat
    const [scanProgress, setScanProgress] = useState(0);
    const [activeScan, setActiveScan] = useState(false);
    const [keyGenerated, setKeyGenerated] = useState('');
    const [generatingKey, setGeneratingKey] = useState(false);
    const [logs, setLogs] = useState([
        'SYS: Zero-trust firewall initialized.',
        'SYS: Ingress filter rules compiled [SHA-256].',
        'SYS: Tunnel vector 0x4f82 active.'
    ]);

    const addLog = (msg) => {
        setLogs(prev => [msg, ...prev.slice(0, 4)]);
    };

    // Simulated real-time integrity logs
    useEffect(() => {
        const interval = setInterval(() => {
            if (!activeScan) {
                const threats = ['Blocked TCP attempt from blocklist node', 'Refused handshake request (no cert)', 'Vector memory index sync validated', 'Ingress encryption checked'];
                const randomMsg = threats[Math.floor(Math.random() * threats.length)];
                addLog(`SEC: ${randomMsg}.`);
            }
        }, 8000);
        return () => clearInterval(interval);
    }, [activeScan]);

    const runIntegrityScan = async () => {
        if (activeScan) return;
        playClick();
        setActiveScan(true);
        setScanProgress(0);
        setThreatStatus('active_scan');
        addLog('SYS: Initiating full-fabric security integrity scan...');

        for (let i = 0; i <= 100; i += 10) {
            await new Promise(r => setTimeout(r, 200 + Math.random() * 150));
            setScanProgress(i);
            playKey();
            if (i === 50) {
                addLog('SYS: Scanning cryptographic handshake logs...');
            }
            if (i === 80) {
                addLog('SYS: Resolving active threat vectors...');
            }
        }

        playUplink();
        setActiveScan(false);
        setThreatStatus('clear');
        addLog('RESOLVED: Integrity check nominal. 0 threats detected.');
    };

    const generateSecurityKey = async () => {
        if (generatingKey) return;
        playClick();
        setGeneratingKey(true);
        setKeyGenerated('');
        addLog('CRYPT: Generating ephemeral Diffie-Hellman session key...');

        const steps = ['DH-2048', 'AES-256-GCM', 'SHA-384', 'KEY-STRENGTH-OK'];
        for (let step of steps) {
            await new Promise(r => setTimeout(r, 400));
            playKey();
            addLog(`CRYPT: Pre-compiled cryptographic step: ${step}`);
        }

        const characters = 'ABCDEF0123456789';
        let key = 'AUTONOMIX-SEC-';
        for (let i = 0; i < 32; i++) {
            if (i > 0 && i % 8 === 0) key += '-';
            key += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        playUplink();
        setKeyGenerated(key);
        setGeneratingKey(false);
        addLog('CRYPT: Secure session handshake key active.');
    };

    return (
        <div className="pt-32 pb-32 min-h-screen bg-white relative overflow-hidden" style={{ zIndex: 10 }}>
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/[0.01] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="container max-w-6xl relative z-10 px-4">
                
                {/* Header Section */}
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-header text-primary tracking-wide mb-6">
                            SECURITY NODE
                        </h1>
                        <div className="section-accent-line" />
                        <p className="text-lg text-dim max-w-2xl mx-auto font-light leading-relaxed">
                            Monitor the Autonomix zero-trust secure layer. Generate ephemeral handshake keys, trace intrusion logs, and run cryptographic health audits.
                        </p>
                    </motion.div>
                </div>

                {/* Dashboard Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Threat Status Card (Spans 4 cols) */}
                    <div className="md:col-span-4 flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="glass-premium p-8 rounded-[32px] border border-white flex flex-col justify-between h-full min-h-[300px]"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-header font-bold text-xs tracking-[0.2em] text-primary uppercase">Security Shield</h3>
                                <span className={`w-2.5 h-2.5 rounded-full ${
                                    threatStatus === 'active_scan' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'
                                }`} />
                            </div>

                            <div className="text-center my-6 flex flex-col items-center justify-center">
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 ${
                                    threatStatus === 'active_scan' ? 'bg-amber-500/10 text-amber-600' : 'bg-emerald-500/10 text-emerald-600'
                                }`}>
                                    {threatStatus === 'active_scan' ? <ShieldAlert size={36} className="animate-pulse" /> : <ShieldCheck size={36} />}
                                </div>
                                <h4 className="font-header font-bold text-lg text-primary uppercase mb-2">
                                    {threatStatus === 'active_scan' ? `SCANNING: ${scanProgress}%` : 'SHIELD ENGAGED'}
                                </h4>
                                <p className="text-xs text-dim max-w-[200px] leading-relaxed">
                                    {threatStatus === 'active_scan' ? 'Tracing connections...' : 'Zero threat vectors detected inside fabric.'}
                                </p>
                            </div>

                            <button 
                                onClick={runIntegrityScan}
                                disabled={activeScan}
                                className="w-full py-4 border border-black/10 hover:bg-black/[0.03] text-primary rounded-xl font-header font-bold text-xs tracking-widest uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                            >
                                <RefreshCw size={13} className={activeScan ? 'animate-spin' : ''} />
                                {activeScan ? 'Running Scan...' : 'Audit System Integrity'}
                            </button>
                        </motion.div>
                    </div>

                    {/* Cryptographic Key Generator (Spans 8 cols) */}
                    <div className="md:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            viewport={{ once: true }}
                            className="glass-premium p-8 md:p-10 rounded-[32px] border border-white flex flex-col justify-between h-full min-h-[300px]"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="font-header font-bold text-xs tracking-[0.2em] text-primary uppercase flex items-center gap-2">
                                        <Key size={14} /> Cryptographic Protocols
                                    </h3>
                                    <span className="text-[10px] font-mono text-sky-600 bg-sky-50 px-2 py-0.5 rounded uppercase">Diffie-Hellman-2048</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <h4 className="text-xl font-bold font-header text-primary">Handshake Key Generator</h4>
                                    <p className="text-xs text-dim leading-relaxed max-w-xl">
                                        Deploy cryptographic tokens to establish authenticated sessions with secure cognitive router threads. These keys expire dynamically after 90 seconds.
                                    </p>
                                </div>

                                {/* Generated Key Display Box */}
                                <div className="w-full p-6 bg-[#0f1117] rounded-[24px] border border-white/5 font-mono text-xs flex items-center justify-between min-h-[64px] mb-8 overflow-x-auto text-sky-400">
                                    {generatingKey ? (
                                        <div className="flex items-center gap-2 text-white/40">
                                            <RefreshCw size={14} className="animate-spin text-sky-500" />
                                            <span>COMPILING ENTROPY POOLS...</span>
                                        </div>
                                    ) : keyGenerated ? (
                                        <span className="font-bold tracking-widest text-emerald-400 select-all">{keyGenerated}</span>
                                    ) : (
                                        <span className="text-white/30 italic">AWAITING TRIGGER DIRECTIVE...</span>
                                    )}
                                    {keyGenerated && !generatingKey && (
                                        <span className="text-[9px] font-header font-bold px-2.5 py-1 bg-emerald-500/10 text-emerald-600 rounded-full tracking-wider uppercase shrink-0">
                                            Active Token
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4 border-t border-black/[0.05]">
                                <div className="flex items-center gap-4 text-primary/40 font-header text-[10px] tracking-widest uppercase">
                                    <span className="flex items-center gap-1"><Lock size={12} /> AES-256-GCM</span>
                                    <span className="flex items-center gap-1"><Globe size={12} /> TLS v1.3</span>
                                </div>
                                <button 
                                    onClick={generateSecurityKey}
                                    disabled={generatingKey}
                                    className="btn btn-primary px-6 py-3.5 text-xs tracking-wider uppercase disabled:opacity-50 flex items-center gap-2 shrink-0 w-full sm:w-auto cursor-pointer"
                                >
                                    <Key size={14} />
                                    {generatingKey ? 'Compiling Key...' : 'Generate Session Token'}
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Threat Intrusion Logs (Spans 7 cols) */}
                    <div className="md:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            viewport={{ once: true }}
                            className="glass-premium p-8 rounded-[32px] border border-white h-full"
                        >
                            <div className="flex items-center justify-between mb-8 border-b border-black/[0.05] pb-4">
                                <h3 className="font-header font-bold text-xs tracking-[0.2em] text-primary uppercase flex items-center gap-2">
                                    <FileText size={14} /> Zero-Trust Access Logs
                                </h3>
                                <span className="text-[10px] font-header font-bold text-primary/40 tracking-widest uppercase">Live Vector</span>
                            </div>

                            <div className="font-mono text-[11px] leading-relaxed bg-[#0f1117] text-sky-400 p-6 rounded-2xl h-56 flex flex-col gap-2 overflow-y-auto font-mono scrollbar-none border border-white/5">
                                <AnimatePresence>
                                    {logs.map((log, index) => (
                                        <motion.div 
                                            key={log + index}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={log.includes('RESOLVED') || log.includes('checked') ? 'text-emerald-400 font-bold' : log.includes('Blocked') || log.includes('Refused') ? 'text-red-400 font-bold' : ''}
                                        >
                                            &gt; {log}
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                                <span className="animate-pulse text-white/30">&gt; RUNNING ZERO-TRUST FILTERS</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Network Infrastructure Nodes (Spans 5 cols) */}
                    <div className="md:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            viewport={{ once: true }}
                            className="glass-premium p-8 rounded-[32px] border border-white h-full flex flex-col justify-between"
                        >
                            <div className="mb-6">
                                <h3 className="font-header font-bold text-xs tracking-[0.2em] text-primary uppercase flex items-center gap-2">
                                    <Cpu size={14} /> Secure Tunnel Channels
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { name: 'Gateway Node 01', status: 'nominal', secure: true, type: 'TLS 1.3' },
                                    { name: 'Vector Database Pool', status: 'nominal', secure: true, type: 'AES-256' },
                                    { name: 'Cognitive Route Thread', status: 'nominal', secure: true, type: 'Zero-Trust RSA' }
                                ].map((node, i) => (
                                    <div key={i} className="flex items-center justify-between p-3.5 bg-primary/[0.02] border border-primary/[0.04] rounded-2xl">
                                        <div>
                                            <h4 className="font-header font-bold text-[10px] tracking-wider text-primary uppercase">{node.name}</h4>
                                            <span className="text-[8px] text-dim font-mono">{node.type}</span>
                                        </div>
                                        <span className="text-[8px] font-header font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded-full tracking-wider uppercase">
                                            Nominal
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Security;
