import React, { useEffect, useRef, useState, useCallback } from 'react';
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

const CARD_WIDTH = 240;
const CARD_GAP = 20;
const SLIDE_UNIT = CARD_WIDTH + CARD_GAP;
const ANIM_DURATION = 3000;

const RECT_MAX_WIDTH = 820;

const TestimonialsSection = () => {
    const trackRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const animRef = useRef(null);
    const lastTimeRef = useRef(null);

    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
    const totalOriginalWidth = testimonials.length * SLIDE_UNIT;

    const animate = useCallback(
        (timestamp) => {
            if (!lastTimeRef.current) lastTimeRef.current = timestamp;
            const delta = timestamp - lastTimeRef.current;
            lastTimeRef.current = timestamp;

            if (!isHovered) {
                setOffset((prev) => {
                    let next = prev + (delta / ANIM_DURATION) * SLIDE_UNIT;
                    if (next >= totalOriginalWidth) {
                        next -= totalOriginalWidth;
                    }
                    return next;
                });
            }

            animRef.current = requestAnimationFrame(animate);
        },
        [isHovered, totalOriginalWidth]
    );

    useEffect(() => {
        animRef.current = requestAnimationFrame(animate);
        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, [animate]);

    return (
        <section className="testimonials-section" id="testimonials">
            {/* White rectangle backdrop — centered, covers header + card area */}
            <div className="testimonials-rectangle" />

            {/* Content layer on top of the rectangle */}
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

                {/* Full-width carousel — cards slide across entire viewport */}
                <div
                    className="testimonials-carousel-wrapper"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        lastTimeRef.current = null;
                    }}
                >
                    <div
                        className="testimonials-track"
                        ref={trackRef}
                        style={{
                            transform: `translateX(${-offset}px)`,
                        }}
                    >
                        {extendedTestimonials.map((item, index) => {
                            const containerWidth =
                                typeof window !== 'undefined' ? window.innerWidth : 1200;
                            const centerX = containerWidth / 2;
                            const cardCenter =
                                index * SLIDE_UNIT + CARD_WIDTH / 2 - offset;

                            // Rectangle boundaries
                            const rectWidth = Math.min(RECT_MAX_WIDTH, containerWidth * 0.65);
                            const rectLeft = centerX - rectWidth / 2;
                            const rectRight = centerX + rectWidth / 2;

                            // How much of the card overlaps with the rectangle
                            const cardLeft = cardCenter - CARD_WIDTH / 2;
                            const cardRight = cardCenter + CARD_WIDTH / 2;
                            const overlapLeft = Math.max(cardLeft, rectLeft);
                            const overlapRight = Math.min(cardRight, rectRight);
                            const overlap = Math.max(0, overlapRight - overlapLeft);
                            const insideRatio = overlap / CARD_WIDTH;

                            const scale = 0.82 + insideRatio * 0.18;
                            const shadowOpacity = 0.02 + insideRatio * 0.1;
                            const yShift = (1 - insideRatio) * 8;
                            const zIndex = Math.round(insideRatio * 10);

                            return (
                                <div
                                    key={index}
                                    className="testimonial-card"
                                    style={{
                                        width: CARD_WIDTH,
                                        minWidth: CARD_WIDTH,
                                        marginRight: CARD_GAP,
                                        transform: `scale(${scale}) translateY(${yShift}px)`,
                                        boxShadow: `0 ${2 + insideRatio * 18}px ${8 + insideRatio * 34}px rgba(0, 0, 0, ${shadowOpacity})`,
                                        zIndex,
                                        opacity: 0.45 + insideRatio * 0.55,
                                    }}
                                >
                                    <div className="testimonial-card-inner">
                                        <div className="testimonial-avatar">
                                            <span className="testimonial-avatar-initials">
                                                {item.author
                                                    .split(' ')
                                                    .map((n) => n[0])
                                                    .join('')}
                                            </span>
                                        </div>

                                        <h4 className="testimonial-author">
                                            {item.author}
                                        </h4>
                                        <p className="testimonial-role">{item.role}</p>

                                        <div className="testimonial-quote-wrapper">
                                            <span className="testimonial-quote-mark top-left">
                                                "
                                            </span>
                                            <p className="testimonial-quote-text">
                                                {item.quote}
                                            </p>
                                            <span className="testimonial-quote-mark bottom-right">
                                                "
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
