import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUp, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Top CTA Band */}
            <div className="footer-cta">
                <div className="container">
                    <div className="footer-cta-inner">
                        <div className="footer-cta-text">
                            <h3 className="footer-cta-title">Ready to automate?</h3>
                            <p className="footer-cta-desc">Let's build intelligent solutions for your business.</p>
                        </div>
                        <Link to="/contact" className="footer-cta-btn">
                            Get in Touch <ArrowUp size={14} style={{ transform: 'rotate(45deg)' }} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <h2 className="footer-logo">
                                AUTONOM<span className="footer-logo-accent">IX</span>
                            </h2>
                            <p className="footer-brand-desc">
                                Building the future of intelligent automation. We empower enterprises with AI agents and autonomous workflows.
                            </p>
                            <div className="footer-social">
                                {[
                                    { Icon: Twitter, label: 'Twitter', href: '#' },
                                    { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                                    { Icon: Github, label: 'GitHub', href: '#' },
                                    { Icon: Mail, label: 'Email', href: 'mailto:hello@autonomix.ly' },
                                ].map(({ Icon, label, href }) => (
                                    <a key={label} href={href} className="footer-social-link" aria-label={label}>
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Navigation</h4>
                            <ul className="footer-links">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Services', path: '/services' },
                                    { name: 'About', path: '/about' },
                                    { name: 'Contact', path: '/contact' },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="footer-link">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Services</h4>
                            <ul className="footer-links">
                                {[
                                    'AI Workflow Automation',
                                    'Custom AI Agents',
                                    'Enterprise Solutions',
                                    'Consulting',
                                ].map((item) => (
                                    <li key={item}>
                                        <Link to="/services" className="footer-link">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Contact</h4>
                            <ul className="footer-contact-list">
                                <li className="footer-contact-item">
                                    <Mail size={14} />
                                    <span>hello@autonomix.ly</span>
                                </li>
                                <li className="footer-contact-item">
                                    <Phone size={14} />
                                    <span>+218 91 000 0000</span>
                                </li>
                                <li className="footer-contact-item">
                                    <MapPin size={14} />
                                    <span>Tripoli, Libya</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-inner">
                        <p className="footer-copyright">
                            &copy; {currentYear} Autonomix. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#" className="footer-bottom-link">Privacy Policy</a>
                            <a href="#" className="footer-bottom-link">Terms of Service</a>
                        </div>
                        <button onClick={scrollToTop} className="footer-top-btn" aria-label="Back to top">
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
