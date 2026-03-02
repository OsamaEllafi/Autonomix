import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="pt-20 pb-20" style={{ position: 'relative', zIndex: 10 }}>
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-header mb-4 text-primary">Get In Touch</h1>
                    <div className="section-accent-line" />
                    <p className="text-lg text-dim max-w-xl mx-auto">
                        Ready to transform your business? Let's discuss how Autonomix can help.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="glass p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-6 text-primary">Contact Information</h3>
                            <div className="space-y-6">
                                {[
                                    { Icon: MapPin, label: 'Headquarters', value: '123 Innovation Drive, Tech City, TC 90210' },
                                    { Icon: Mail, label: 'Email Us', value: 'hello@autonomix.ai' },
                                    { Icon: Phone, label: 'Call Us', value: '+1 (555) 123-4567' },
                                ].map(({ Icon, label, value }, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-primary/[0.06] text-primary/60 flex-shrink-0">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-primary">{label}</h4>
                                            <p className="text-dim text-sm">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="glass p-8 rounded-2xl space-y-5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-[0.12em] text-dim font-semibold">First Name</label>
                                <input type="text"
                                    className="w-full bg-white border border-primary/[0.08] rounded-xl p-3 focus:border-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/[0.06] transition-all text-primary text-sm placeholder:text-dim/50"
                                    placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-[0.12em] text-dim font-semibold">Last Name</label>
                                <input type="text"
                                    className="w-full bg-white border border-primary/[0.08] rounded-xl p-3 focus:border-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/[0.06] transition-all text-primary text-sm placeholder:text-dim/50"
                                    placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-[0.12em] text-dim font-semibold">Email Address</label>
                            <input type="email"
                                className="w-full bg-white border border-primary/[0.08] rounded-xl p-3 focus:border-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/[0.06] transition-all text-primary text-sm placeholder:text-dim/50"
                                placeholder="john@company.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-[0.12em] text-dim font-semibold">Message</label>
                            <textarea rows="4"
                                className="w-full bg-white border border-primary/[0.08] rounded-xl p-3 focus:border-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/[0.06] transition-all text-primary text-sm placeholder:text-dim/50 resize-none"
                                placeholder="Tell us about your project..." />
                        </div>

                        <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2">
                            Send Message <Send size={16} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
