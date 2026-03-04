import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Autonomix revolutionized our customer support. We reduced response times by 80% while increasing satisfaction scores.",
        author: "Sarah Jenkins",
        role: "CTO, TechFlow",
    },
    {
        quote: "The AI agents they built for us are indistinguishable from human operators. Truly next-level technology.",
        author: "Marcus Chen",
        role: "Director of Ops, Nexus",
    },
    {
        quote: "Implementation was flawless. Their team understood our complex requirements and delivered ahead of schedule.",
        author: "Elena Rodriguez",
        role: "VP of Engineering, Solara",
    },
    {
        quote: "Their automation solutions saved us over 200 hours per month. The ROI was visible within the first week.",
        author: "David Kim",
        role: "Founder, DataPulse",
    },
    {
        quote: "We've partnered with many tech firms, but Autonomix stands out for their innovation and attention to detail.",
        author: "Amira Patel",
        role: "COO, BrightEdge",
    },
];

const RECT_MAX_WIDTH = 880;

const TestimonialsSection = () => {
    const trackRef = useRef(null);
    const cardRefs = useRef([]);
    const offsetRef = useRef(0);
    const animRef = useRef(null);
    const lastTimeRef = useRef(null);
    const isHoveredRef = useRef(false);
    const dimsRef = useRef({ cardWidth: 280, cardGap: 24, speed: 3000 });

    // Triple the list for seamless looping
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    // Recalculate dimensions on mount and resize
    useEffect(() => {
        const updateDims = () => {
            const w = window.innerWidth;
            if (w <= 480) {
                dimsRef.current = { cardWidth: 220, cardGap: 16, speed: 4000 };
            } else if (w <= 768) {
                dimsRef.current = { cardWidth: 240, cardGap: 20, speed: 3500 };
            } else {
                dimsRef.current = { cardWidth: 280, cardGap: 24, speed: 3000 };
            }
            // Update card widths directly
            cardRefs.current.forEach((el) => {
                if (el) {
                    el.style.width = dimsRef.current.cardWidth + 'px';
                    el.style.minWidth = dimsRef.current.cardWidth + 'px';
                    el.style.marginRight = dimsRef.current.cardGap + 'px';
                }
            });
        };
        updateDims();
        window.addEventListener('resize', updateDims, { passive: true });
        return () => window.removeEventListener('resize', updateDims);
    }, []);

    // Animation loop — direct DOM manipulation, no React state
    useEffect(() => {
        const animate = (timestamp) => {
            if (!lastTimeRef.current) lastTimeRef.current = timestamp;
            const delta = timestamp - lastTimeRef.current;
            lastTimeRef.current = timestamp;

            const { cardWidth, cardGap, speed } = dimsRef.current;
            const slideUnit = cardWidth + cardGap;
            const totalOriginalWidth = testimonials.length * slideUnit;

            if (!isHoveredRef.current) {
                offsetRef.current += (delta / speed) * slideUnit;
                if (offsetRef.current >= totalOriginalWidth) {
                    offsetRef.current -= totalOriginalWidth;
                }
            }

            const offset = offsetRef.current;

            // Move the track — GPU-accelerated via translate3d
            if (trackRef.current) {
                trackRef.current.style.transform = `translate3d(${-offset}px, 0, 0)`;
            }

            // Update each card's style directly
            const vw = window.innerWidth;
            const centerX = vw / 2;
            const rectWidth = Math.min(RECT_MAX_WIDTH, vw * 0.7);
            const rectLeft = centerX - rectWidth / 2;
            const rectRight = centerX + rectWidth / 2;

            const len = cardRefs.current.length;
            for (let i = 0; i < len; i++) {
                const el = cardRefs.current[i];
                if (!el) continue;

                const cardCenter = i * slideUnit + cardWidth / 2 - offset;
                const cardLeft = cardCenter - cardWidth / 2;
                const cardRight = cardCenter + cardWidth / 2;
                const overlapLeft = cardLeft > rectLeft ? cardLeft : rectLeft;
                const overlapRight = cardRight < rectRight ? cardRight : rectRight;
                const overlap = overlapRight - overlapLeft;
                const t = overlap > 0 ? overlap / cardWidth : 0;

                // Physics values tailored for glassmorphism pop
                const scale = 0.85 + t * 0.15;
                const yShift = (1 - t) * 12;
                const opacity = 0.3 + t * 0.7;

                // Deep ambient shadow physics
                const shadowY = 4 + t * 20;
                const shadowBlur = 12 + t * 40;
                const shadowAlpha = 0.03 + t * 0.07;

                el.style.transform = `scale(${scale}) translateY(${yShift}px)`;
                el.style.opacity = opacity;
                el.style.boxShadow = `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowAlpha})`;
                el.style.zIndex = Math.round(t * 10);

                // Toggle glass border visibility based on focus
                if (t > 0.8) {
                    el.style.borderColor = 'rgba(0,0,0,0.05)';
                    el.style.backgroundColor = 'rgba(255,255,255,0.95)';
                } else {
                    el.style.borderColor = 'transparent';
                    el.style.backgroundColor = 'rgba(255,255,255,0.5)';
                }
            }

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, []);

    const handleMouseEnter = () => { isHoveredRef.current = true; };
    const handleMouseLeave = () => {
        isHoveredRef.current = false;
        lastTimeRef.current = null;
    };

    // Touch support for mobile
    const touchRef = useRef({ startX: 0, startOffset: 0, isDragging: false });

    const handleTouchStart = (e) => {
        isHoveredRef.current = true;
        touchRef.current.startX = e.touches[0].clientX;
        touchRef.current.startOffset = offsetRef.current;
        touchRef.current.isDragging = true;
    };

    const handleTouchMove = (e) => {
        if (!touchRef.current.isDragging) return;
        const dx = touchRef.current.startX - e.touches[0].clientX;
        const { cardWidth, cardGap } = dimsRef.current;
        const totalOriginalWidth = testimonials.length * (cardWidth + cardGap);
        let newOffset = touchRef.current.startOffset + dx;
        if (newOffset < 0) newOffset += totalOriginalWidth;
        if (newOffset >= totalOriginalWidth) newOffset -= totalOriginalWidth;
        offsetRef.current = newOffset;
    };

    const handleTouchEnd = () => {
        touchRef.current.isDragging = false;
        isHoveredRef.current = false;
        lastTimeRef.current = null;
    };

    return (
        <section className="relative w-full py-32 overflow-hidden bg-white/50" id="testimonials">

            {/* The structural massive background rectangle for cards to interact with */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[880px] h-[360px] md:h-[400px] bg-white rounded-[48px] border border-black/[0.03] shadow-[0_40px_100px_rgba(0,0,0,0.02)] hidden md:block z-0" />

            <div className="relative z-10 w-full">

                {/* Header Section */}
                <motion.div
                    className="flex flex-col items-center justify-center text-center px-4 mb-20 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    {/* Massive background quotes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] md:text-[240px] font-serif italic text-black/[0.02] select-none pointer-events-none -z-10 tracking-tighter leading-none mt-10">
                        "
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-header font-bold text-primary tracking-tight">
                        Client Matrix
                    </h2>
                    <div className="w-12 h-1 bg-primary/20 mt-6 rounded-full" />
                </motion.div>

                {/* Infinite Carousel Track */}
                <div
                    className="w-full relative py-10 overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ touchAction: 'pan-y' }}
                >
                    <div
                        className="flex will-change-transform"
                        ref={trackRef}
                    >
                        {extendedTestimonials.map((item, index) => (
                            <div
                                key={index}
                                className="shrink-0 transition-transform duration-300 ease-out p-2"
                                ref={(el) => { cardRefs.current[index] = el; }}
                            >
                                <div className="h-full w-full rounded-[32px] p-8 md:p-10 flex flex-col justify-between items-center text-center relative overflow-hidden backdrop-blur-xl border border-transparent transition-colors duration-300">

                                    {/* Small aesthetic quotes */}
                                    <div className="absolute top-6 left-6 text-6xl font-serif italic text-primary/[0.04] leading-none pointer-events-none select-none">"</div>
                                    <div className="absolute bottom-6 right-6 text-6xl font-serif italic text-primary/[0.04] leading-none pointer-events-none select-none">"</div>

                                    {/* Author Info */}
                                    <div className="mb-8 flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-[#050505] text-white flex items-center justify-center font-header font-bold tracking-widest text-lg mb-4 shadow-lg shadow-black/10">
                                            {item.author.split(' ').map((n) => n[0]).join('')}
                                        </div>
                                        <h4 className="font-header font-bold text-primary text-xl tracking-wide">{item.author}</h4>
                                        <p className="text-[10px] uppercase font-header tracking-[0.2em] text-primary/40 mt-1">{item.role}</p>
                                    </div>

                                    {/* Quote */}
                                    <div className="relative z-10">
                                        <p className="font-light italic text-primary/70 leading-relaxed text-sm md:text-base px-2">
                                            {item.quote}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
