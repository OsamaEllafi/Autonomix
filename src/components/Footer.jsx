import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-16 pb-8" style={{ background: 'linear-gradient(180deg, var(--bg-dark), #edeef1)' }}>
            <div className="absolute top-0 left-0 w-full h-px bg-primary/[0.06]" />

            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-bold font-header mb-3 text-primary">
                            AUTONOM<span className="text-accent">IX</span>
                        </h2>
                        <p className="text-dim text-sm leading-relaxed max-w-sm">
                            Building the future of intelligent automation. We empower enterprises with AI agents and autonomous workflows.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-primary mb-4">Navigation</h4>
                        <div className="space-y-3">
                            {['Home', 'Services', 'About', 'Contact'].map((item) => (
                                <a key={item} href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                                    className="block text-dim text-sm hover:text-primary transition-colors duration-300">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-primary mb-4">Connect</h4>
                        <div className="flex gap-2">
                            {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                                <a key={i} href="#"
                                    className="w-9 h-9 rounded-xl flex items-center justify-center text-dim bg-primary/[0.04] hover:bg-primary/[0.08] hover:text-primary transition-all duration-300">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/[0.06]">
                    <p className="text-dim text-xs mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Autonomix. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-dim bg-primary/[0.04] hover:bg-primary/[0.08] hover:text-primary transition-all duration-300"
                    >
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
