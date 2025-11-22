import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-glass-border">
            <div className="container flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold font-header mb-2">AUTONOM<span className="text-primary">IX</span></h2>
                    <p className="text-dim text-sm">Empowering the future with AI & Automation.</p>
                </div>

                <div className="flex space-x-6 mb-6 md:mb-0">
                    <a href="#" className="text-dim hover:text-primary transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-dim hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-dim hover:text-primary transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-dim hover:text-primary transition-colors"><Mail size={20} /></a>
                </div>

                <div className="text-dim text-xs">
                    &copy; {new Date().getFullYear()} Autonomix. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
