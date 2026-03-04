import React from 'react';
import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-avant-garde relative border-t border-white/[0.02]">
            {/* Extremely subtle background */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            <div className="container relative z-10 py-10 lg:py-12">
                {/* Strict 3-Column Grid for flawless single row alignment */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center">

                    {/* Brand & Copyright - Left */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8">
                        <h2 className="text-3xl font-header font-bold text-white tracking-widest leading-none whitespace-nowrap">
                            AUTONOM<span className="text-white/30">IX</span>
                        </h2>
                        <div className="hidden sm:block w-[1px] h-6 bg-white/10" />
                        <p className="text-[10px] lg:text-xs text-white/30 font-header tracking-[0.2em] uppercase shrink-0">
                            &copy; {currentYear} ALL NOMINAL.
                        </p>
                    </div>

                    {/* Navigation - Center */}
                    <nav className="flex justify-center overflow-hidden">
                        <ul className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-4 sm:gap-8 lg:gap-10 xl:gap-14">
                            {[
                                { name: 'Terminal', path: '/' },
                                { name: 'Capabilities', path: '/services' },
                                { name: 'Manifesto', path: '/about' },
                                { name: 'Comms', path: '/contact' },
                            ].map((item) => (
                                <li key={item.name} className="shrink-0 bg-[#050505] lg:bg-transparent px-2 lg:px-0 rounded z-10">
                                    <Link to={item.path} className="text-xs lg:text-sm font-header tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Socials & Actions - Right */}
                    <div className="flex items-center justify-center lg:justify-end gap-6 sm:gap-8">
                        <div className="flex gap-4 lg:gap-6">
                            {[
                                { Icon: Twitter, label: 'X', href: '#' },
                                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                                { Icon: Github, label: 'Github', href: '#' }
                            ].map(({ Icon, label, href }) => (
                                <a key={label} href={href} className="text-white/30 hover:text-white transition-colors duration-300 transform hover:-translate-y-1" aria-label={label}>
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        <div className="hidden sm:block w-[1px] h-6 bg-white/10" />

                        <button
                            onClick={scrollToTop}
                            className="group flex items-center justify-center p-3 hover:bg-white/[0.05] rounded-full transition-all duration-300 shrink-0"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={18} className="text-white/40 group-hover:text-white transition-colors duration-300" />
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
