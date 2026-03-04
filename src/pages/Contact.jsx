import React from 'react';
import { Send, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
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

                    {/* Right Column: Premium Glass Form */}
                    <div className="lg:col-span-7 relative">
                        {/* Decorative background grid line */}
                        <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-primary/[0.04] hidden lg:block" />

                        <motion.form
                            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            className="glass-premium ambient-shadow p-8 lg:p-14 rounded-[32px] space-y-10 border border-white/60 relative overflow-hidden"
                        >
                            {/* Inner subtle glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-[50px] pointer-events-none rounded-full" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                                <div className="space-y-3 relative group">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-bold block transition-colors group-focus-within:text-primary">Identification / First</label>
                                    <input type="text"
                                        className="w-full bg-transparent border-b border-primary/10 pb-3 focus:border-primary focus:outline-none transition-all text-primary text-base placeholder:text-dim/30 rounded-none px-0"
                                        placeholder="John" />
                                </div>
                                <div className="space-y-3 relative group">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-bold block transition-colors group-focus-within:text-primary">Identification / Last</label>
                                    <input type="text"
                                        className="w-full bg-transparent border-b border-primary/10 pb-3 focus:border-primary focus:outline-none transition-all text-primary text-base placeholder:text-dim/30 rounded-none px-0"
                                        placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-3 relative group z-10">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-bold block transition-colors group-focus-within:text-primary">Transmission Vector (Email)</label>
                                <input type="email"
                                    className="w-full bg-transparent border-b border-primary/10 pb-3 focus:border-primary focus:outline-none transition-all text-primary text-base placeholder:text-dim/30 rounded-none px-0"
                                    placeholder="john@enterprise.com" />
                            </div>

                            <div className="space-y-3 relative group z-10">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-bold block transition-colors group-focus-within:text-primary">Data Payload (Message)</label>
                                <textarea rows="4"
                                    className="w-full bg-transparent border-b border-primary/10 pb-3 focus:border-primary focus:outline-none transition-all text-primary text-base placeholder:text-dim/30 resize-none rounded-none px-0"
                                    placeholder="Specify your operational requirements..." />
                            </div>

                            <div className="pt-4 relative z-10">
                                <button type="button" className="group inline-flex items-center gap-4 bg-primary text-white px-8 py-5 rounded-full font-header text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(15,17,23,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(15,17,23,0.6)] hover:-translate-y-1">
                                    Transmit Data
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight size={14} />
                                    </span>
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
