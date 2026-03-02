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

const RECT_MAX_WIDTH = 820;

const TestimonialsSection = () => {
    const trackRef = useRef(null);
    const cardRefs = useRef([]);
    const offsetRef = useRef(0);
    const animRef = useRef(null);
    const lastTimeRef = useRef(null);
    const isHoveredRef = useRef(false);
    const dimsRef = useRef({ cardWidth: 240, cardGap: 20, speed: 3000 });

    // Triple the list for seamless looping
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    // Recalculate dimensions on mount and resize
    useEffect(() => {
        const updateDims = () => {
            const w = window.innerWidth;
            if (w <= 480) {
                dimsRef.current = { cardWidth: 180, cardGap: 14, speed: 4000 };
            } else if (w <= 768) {
                dimsRef.current = { cardWidth: 200, cardGap: 16, speed: 3500 };
            } else {
                dimsRef.current = { cardWidth: 240, cardGap: 20, speed: 3000 };
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
            const rectWidth = Math.min(RECT_MAX_WIDTH, vw * 0.65);
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

                const scale = 0.82 + t * 0.18;
                const yShift = (1 - t) * 8;
                const opacity = 0.45 + t * 0.55;
                const shadowY = 2 + t * 18;
                const shadowBlur = 8 + t * 34;
                const shadowAlpha = 0.02 + t * 0.1;

                el.style.transform = `scale(${scale}) translateY(${yShift}px)`;
                el.style.opacity = opacity;
                el.style.boxShadow = `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowAlpha})`;
                el.style.zIndex = Math.round(t * 10);
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
        <section className="testimonials-section" id="testimonials">
            <div className="testimonials-rectangle" />

            <div className="testimonials-content">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="testimonials-quote-bg">"</div>
                    <h2 className="testimonials-title">
                        What our Clients say!
                    </h2>
                    <div className="testimonials-title-underline" />
                </motion.div>

                <div
                    className="testimonials-carousel-wrapper"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="testimonials-track"
                        ref={trackRef}
                    >
                        {extendedTestimonials.map((item, index) => (
                            <div
                                key={index}
                                className="testimonial-card"
                                ref={(el) => { cardRefs.current[index] = el; }}
                            >
                                <div className="testimonial-card-inner">
                                    <div className="testimonial-avatar">
                                        <span className="testimonial-avatar-initials">
                                            {item.author.split(' ').map((n) => n[0]).join('')}
                                        </span>
                                    </div>
                                    <h4 className="testimonial-author">{item.author}</h4>
                                    <p className="testimonial-role">{item.role}</p>
                                    <div className="testimonial-quote-wrapper">
                                        <span className="testimonial-quote-mark top-left">"</span>
                                        <p className="testimonial-quote-text">{item.quote}</p>
                                        <span className="testimonial-quote-mark bottom-right">"</span>
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
