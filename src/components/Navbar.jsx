import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../hooks/useAudio';
import '../styles/index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { isSoundEnabled, toggleSound, playClick, playHover } = useAudio();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleVolumeToggle = (e) => {
        e.preventDefault();
        toggleSound();
        if (!isSoundEnabled) {
            // Briefly trigger a synthesized beep on next tick to confirm toggle
            setTimeout(() => {
                try {
                    const ctx = new (window.AudioContext || window.webkitAudioContext)();
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.frequency.setValueAtTime(2000, ctx.currentTime);
                    gain.gain.setValueAtTime(0.03, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.05);
                } catch {}
            }, 30);
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Terminal', path: '/terminal' },
    ];

    return (
        <div className="fixed w-full flex justify-center pt-4 px-4" style={{ zIndex: 100 }}>
            <nav
                className={`transition-all duration-500 rounded-full px-8 py-3 flex items-center gap-6 ${scrolled
                        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/[0.04] border border-black/[0.06]'
                        : 'bg-white/50 backdrop-blur-md border border-transparent'
                    }`}
                style={{ maxWidth: '760px', width: '100%' }}
            >
                <div className="flex items-center gap-3">
                    <Link 
                        to="/" 
                        onClick={playClick} 
                        onMouseEnter={playHover}
                        className="text-lg font-bold font-header tracking-wider text-primary whitespace-nowrap"
                    >
                        AUTONOM<span className="text-accent">IX</span>
                    </Link>
                    
                    {/* Pulsing System Status Tag */}
                    <Link 
                        to="/terminal" 
                        onClick={playClick}
                        onMouseEnter={playHover}
                        className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-emerald-500/[0.05] border border-emerald-500/10 rounded-full text-[8px] font-header font-bold text-emerald-600 tracking-wider hover:bg-emerald-500/10 transition-colors uppercase select-none"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Nominal
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 ml-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onMouseEnter={playHover}
                            onClick={playClick}
                            className={`text-xs uppercase tracking-[0.15em] transition-all duration-300 relative ${location.pathname === link.path
                                    ? 'text-primary font-semibold'
                                    : 'text-dim hover:text-primary'
                                }`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.span 
                                    layoutId="active-nav-indicator"
                                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                    
                    {/* Audio SFX Toggle */}
                    <button
                        onClick={handleVolumeToggle}
                        className="text-dim hover:text-primary transition-colors p-1 rounded-full hover:bg-primary/[0.04] flex items-center justify-center cursor-pointer"
                        title={isSoundEnabled ? "Mute interface audio" : "Unmute interface audio"}
                    >
                        {isSoundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-4 ml-auto">
                    <button
                        onClick={handleVolumeToggle}
                        className="text-dim hover:text-primary transition-colors p-1 rounded-full flex items-center justify-center cursor-pointer"
                        title={isSoundEnabled ? "Mute interface audio" : "Unmute interface audio"}
                    >
                        {isSoundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
                    </button>
                    <button className="text-primary cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-black/[0.06] shadow-lg md:hidden flex flex-col items-center py-6 gap-5"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onMouseEnter={playHover}
                                onClick={() => {
                                    playClick();
                                    setIsOpen(false);
                                }}
                                className={`text-sm uppercase tracking-widest ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-dim'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Mobile Status Tag */}
                        <div className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-500/[0.05] border border-emerald-500/10 rounded-full text-[9px] font-header font-bold text-emerald-600 tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            SYS NOMINAL
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
