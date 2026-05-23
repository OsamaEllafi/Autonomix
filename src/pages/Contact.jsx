import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, ArrowRight, ShieldCheck, RefreshCw, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../hooks/useAudio';

const Contact = () => {
    const { playClick, playKey, playUplink } = useAudio();
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, transmitting, success
    const [uplinkLogs, setUplinkLogs] = useState([]);

    const handleInputChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.message) {
            playClick();
            alert("Mandatory vector parameters missing: Email & Payload are required.");
            return;
        }

        playClick();
        setStatus('transmitting');
        setUplinkLogs([]);

        const steps = [
            'SYS: PACKAGING DATA PAYLOAD [ZIP/AES-256]',
            'SYS: RESOLVING SECURE UPLINK GATEWAY...',
            'SYS: OPENING TLS v1.3 SHIELDED TUNNEL...',
            'SYS: TRANSMITTING VECTOR BLOCKS (4.09 KB)...',
            'SUCCESS: UPLINK SECURED. TRANSACTION CONFIRMED.'
        ];

        for (let i = 0; i < steps.length; i++) {
            await new Promise(r => setTimeout(r, 500 + Math.random() * 250));
            setUplinkLogs(prev => [...prev, steps[i]]);
            if (i === steps.length - 1) {
                playUplink();
            } else {
                playKey();
            }
        }

        await new Promise(r => setTimeout(r, 600));
        setStatus('success');
    };

    const handleReset = () => {
        playClick();
        setForm({ firstName: '', lastName: '', email: '', message: '' });
        setStatus('idle');
        setUplinkLogs([]);
    };

    return (
        <div className="pt-32 pb-32 min-h-screen bg-white relative overflow-hidden" style={{ zIndex: 10 }}>
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 max-w-7xl">

                {/* Header Section — Massive Editorial Typography */}
                <div className="mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[140px] font-bold font-header text-primary leading-[0.8] tracking-tight ml-[-8px]">
                            INITIATE
                            <br />
                            <span className="text-primary/[0.08] inline-block mt-2 md:mt-6">CONTACT.</span>
                        </h1>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Column: Contact Info & Avant-Garde Visual */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        >
                            <p className="text-xl text-primary font-light mb-12 leading-relaxed max-w-md">
                                Ready to integrate autonomous intelligence into your infrastructure? Our architects are on standby.
                            </p>

                            <div className="space-y-10">
                                {[
                                    { Icon: MapPin, label: 'Global Node', value: '123 Innovation Drive, Sector 9\nSan Francisco, CA 94107' },
                                    { Icon: Mail, label: 'Encrypted Channel', value: 'systems@autonomix.ai' },
                                    { Icon: Phone, label: 'Direct Line', value: '+1 (800) 555-0199' },
                                ].map(({ Icon, label, value }, i) => (
                                    <div key={i} className="flex items-start gap-6 group cursor-default">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/[0.04] text-primary/50 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-primary/[0.08] group-hover:text-primary">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-header text-xs tracking-[0.2em] font-bold text-primary mb-2 uppercase">{label}</h4>
                                            <p className="text-dim text-sm leading-relaxed whitespace-pre-line">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Floating Decorative Element */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="hidden lg:flex mt-24 items-center gap-4 text-primary/20"
                        >
                            <div className="w-12 h-[1px] bg-primary/20" />
                            <span className="font-header text-xs tracking-widest uppercase">System Online</span>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Glass Form / Uplink Console */}
                    <div className="lg:col-span-7 relative">
                        {/* Decorative background grid line */}
                        <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-primary/[0.04] hidden lg:block" />

                        <div className="glass-premium ambient-shadow p-8 lg:p-14 rounded-[32px] border border-white/60 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                            {/* Inner subtle glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-[50px] pointer-events-none rounded-full" />

                            <AnimatePresence mode="wait">
                                {status === 'idle' && (
                                    <motion.form
                                        key="form-idle"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.3 }}
                                        onSubmit={handleFormSubmit}
                                        className="space-y-10 relative z-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-3 relative group">
                                                <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-bold block transition-colors group-focus-within:text-primary">Identification / First</label>
                                                <input 
                                                    type="text"
                                                    value={form.firstName}
                                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                    className="w-full bg-transparent border-b border-primary/10 pb-3 focus:border-primary focus:outline-none transition-all text-primary text-base placeholder:text-dim/30 rounded-none px-0"
                                                    placeholder="John" 
                                                />
                                            </div>
                                            <div className="space-y-3 relative group">
                                                <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-bold block transition-colors group-focus-within:text-primary">Identification / Last</label>
                                                <input 
                                                    type="text"
                                                    value={form.lastName}
                                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                    className="w-full bg-transparent border-b border-primary/10 pb-3 focus:border-primary focus:outline-none transition-all text-primary text-base placeholder:text-dim/30 rounded-none px-0"
                                                    placeholder="Doe" 
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3 relative group">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-bold block transition-colors group-focus-within:text-primary">Transmission Vector (Email) *</label>
                                            <input 
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className="w-full bg-transparent border-b border-primary/10 pb-3 focus:border-primary focus:outline-none transition-all text-primary text-base placeholder:text-dim/30 rounded-none px-0"
                                                placeholder="john@enterprise.com" 
                                            />
                                        </div>

                                        <div className="space-y-3 relative group">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-bold block transition-colors group-focus-within:text-primary">Data Payload (Message) *</label>
                                            <textarea 
                                                rows="4"
                                                required
                                                value={form.message}
                                                onChange={(e) => handleInputChange('message', e.target.value)}
                                                className="w-full bg-transparent border-b border-primary/10 pb-3 focus:border-primary focus:outline-none transition-all text-primary text-base placeholder:text-dim/30 resize-none rounded-none px-0"
                                                placeholder="Specify your operational requirements..." 
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <button type="submit" className="group inline-flex items-center gap-4 bg-primary text-white px-8 py-5 rounded-full font-header text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(15,17,23,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(15,17,23,0.6)] hover:-translate-y-1 cursor-pointer">
                                                Transmit Data
                                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                                                    <ArrowRight size={14} />
                                                </span>
                                            </button>
                                        </div>
                                    </motion.form>
                                )}

                                {status === 'transmitting' && (
                                    <motion.div
                                        key="form-transmitting"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="font-mono text-xs md:text-sm text-sky-500/90 leading-relaxed space-y-4"
                                    >
                                        <div className="flex items-center gap-3 text-primary border-b border-primary/10 pb-4 mb-4">
                                            <RefreshCw className="animate-spin text-sky-500" size={18} />
                                            <span className="font-header text-xs tracking-widest font-bold uppercase">ESTABLISHING DATA UPLINK...</span>
                                        </div>

                                        <div className="bg-[#0f1117] text-sky-400 p-6 rounded-2xl h-56 flex flex-col gap-2 overflow-y-auto font-mono">
                                            {uplinkLogs.map((log, index) => (
                                                <div 
                                                    key={index}
                                                    className={log.includes('SUCCESS') ? 'text-emerald-400 font-bold' : ''}
                                                >
                                                    &gt; {log}
                                                </div>
                                            ))}
                                            <span className="animate-pulse text-white/30">&gt; BROADCASTING PACKETS</span>
                                        </div>
                                    </motion.div>
                                )}

                                {status === 'success' && (
                                    <motion.div
                                        key="form-success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeOut' }}
                                        className="text-center space-y-8 z-10"
                                    >
                                        <div className="w-20 h-20 mx-auto bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center shadow-inner shadow-emerald-500/10">
                                            <ShieldCheck size={36} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-header tracking-wide text-primary mb-2">TRANSMISSION SECURED</h3>
                                            <p className="text-dim text-sm max-w-sm mx-auto leading-relaxed">
                                                Payload successfully written to our vector memory nodes. An operational architect will establish contact shortly.
                                            </p>
                                        </div>
                                        <button 
                                            onClick={handleReset}
                                            className="inline-flex items-center gap-2 border border-primary/10 hover:bg-primary/[0.04] text-primary px-6 py-3.5 rounded-full font-header text-xs tracking-widest uppercase transition-all cursor-pointer"
                                        >
                                            <RefreshCw size={13} />
                                            New Transmission
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
