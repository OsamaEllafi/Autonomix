import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="fixed w-full flex justify-center pt-4 px-4" style={{ zIndex: 100 }}>
            <nav
                className={`transition-all duration-500 rounded-full px-8 py-3 flex items-center gap-8 ${scrolled
                        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/[0.04] border border-black/[0.06]'
                        : 'bg-white/50 backdrop-blur-md border border-transparent'
                    }`}
                style={{ maxWidth: '720px', width: '100%' }}
            >
                <Link to="/" className="text-lg font-bold font-header tracking-wider text-primary whitespace-nowrap">
                    AUTONOM<span className="text-accent">IX</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 ml-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-xs uppercase tracking-[0.15em] transition-all duration-300 relative ${location.pathname === link.path
                                    ? 'text-primary font-semibold'
                                    : 'text-dim hover:text-primary'
                                }`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden ml-auto text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-black/[0.06] shadow-lg md:hidden flex flex-col items-center py-6 gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm uppercase tracking-widest ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-dim'
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
