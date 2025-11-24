import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20 pb-20 container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold font-header mb-4">Get In <span className="text-primary">Touch</span></h1>
                <p className="text-xl text-dim max-w-2xl mx-auto">
                    Ready to transform your business? Let's discuss how Autonomix can help you achieve your goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="glass p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Headquarters</h4>
                                    <p className="text-dim">123 Innovation Drive, Tech City, TC 90210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <p className="text-dim">hello@autonomix.ai</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg text-white">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Call Us</h4>
                                    <p className="text-dim">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="glass p-8 rounded-xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-wider text-dim">First Name</label>
                            <input type="text" className="w-full bg-black/50 border border-glass-border rounded-lg p-3 focus:border-primary focus:outline-none transition-colors text-white" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-wider text-dim">Last Name</label>
                            <input type="text" className="w-full bg-black/50 border border-glass-border rounded-lg p-3 focus:border-primary focus:outline-none transition-colors text-white" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-wider text-dim">Email Address</label>
                        <input type="email" className="w-full bg-black/50 border border-glass-border rounded-lg p-3 focus:border-primary focus:outline-none transition-colors text-white" placeholder="john@company.com" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-wider text-dim">Message</label>
                        <textarea rows="4" className="w-full bg-black/50 border border-glass-border rounded-lg p-3 focus:border-primary focus:outline-none transition-colors text-white" placeholder="Tell us about your project..."></textarea>
                    </div>

                    <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
