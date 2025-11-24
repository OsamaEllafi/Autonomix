import React from 'react';
import { Bot, Code, Workflow, Smartphone, Database, Brain } from 'lucide-react';

const services = [
    {
        icon: <Workflow size={40} />,
        title: 'AI Workflow Automation',
        description: 'Streamline complex business processes with intelligent, self-correcting workflows that reduce manual effort by up to 90%.'
    },
    {
        icon: <Bot size={40} />,
        title: 'Custom AI Agents',
        description: 'Deploy autonomous agents capable of handling customer support, data analysis, and decision-making tasks 24/7.'
    },
    {
        icon: <Code size={40} />,
        title: 'Web Application Development',
        description: 'Scalable, high-performance web apps built with modern frameworks (React, Next.js) and integrated with AI capabilities.'
    },
    {
        icon: <Smartphone size={40} />,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile solutions that bring your AI-powered services to iOS and Android users.'
    },
    {
        icon: <Database size={40} />,
        title: 'Data Engineering',
        description: 'Robust data pipelines and infrastructure to fuel your AI models and business intelligence tools.'
    },
    {
        icon: <Brain size={40} />,
        title: 'LLM Integration',
        description: 'Seamlessly integrate Large Language Models like GPT-4 and Claude into your existing software ecosystem.'
    }
];

const Services = () => {
    return (
        <div className="pt-20 pb-20 container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold font-header mb-4">Our <span className="text-primary">Services</span></h1>
                <p className="text-xl text-dim max-w-2xl mx-auto">
                    Comprehensive AI and development solutions tailored for enterprise scale and performance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="glass p-8 rounded-xl hover:border-primary transition-all duration-300 hover:-translate-y-2 group">
                        <div className="mb-6 text-primary group-hover:text-secondary transition-colors duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-dim leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
