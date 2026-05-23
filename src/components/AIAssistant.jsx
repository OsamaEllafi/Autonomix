import React, { useState, useEffect, useRef } from 'react';
import { Bot, MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../hooks/useAudio';

const AIAssistant = () => {
    const { playClick, playKey, playUplink } = useAudio();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { 
            role: 'assistant', 
            content: 'Systems nominal. Cognitive routing node active. How can I assist you with Autonomix workflows or custom configurations?' 
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Scroll to bottom on new message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleToggle = () => {
        playClick();
        setIsOpen(!isOpen);
    };

    const handleSend = async (e) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        playKey();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: trimmed }]);
        setIsLoading(true);

        try {
            // Vite bakes VITE_* vars at build time.
            // Locally: set VITE_OPENROUTER_API_KEY in .env
            // GitHub Pages: add VITE_OPENROUTER_API_KEY as a repository Actions secret
            const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
            if (!apiKey) {
                throw new Error("VITE_OPENROUTER_API_KEY not configured.");
            }

            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": window.location.origin,
                    "X-Title": "Autonomix Global AI Assistant"
                },
                body: JSON.stringify({
                    model: "openai/gpt-4.1-mini",
                    messages: [
                        {
                            role: "system",
                            content: "You are the Autonomix Cognitive Assistant, a highly professional AI guide integrated into the Autonomix web platform. Help users configure automation blueprints, answer security queries, and explain our services (Workflow Automation, Custom LLMs, Data Infrastructure). Keep your answers helpful, highly professional, clean, and concise (under 3-4 sentences)."
                        },
                        ...messages.map(m => ({ role: m.role, content: m.content })),
                        { role: 'user', content: trimmed }
                    ]
                })
            });

            if (!response.ok) {
                const errBody = await response.text().catch(() => '');
                throw new Error(`HTTP ${response.status}: ${errBody.slice(0, 120)}`);
            }

            const data = await response.json();
            const reply = data.choices[0].message.content.trim();
            playUplink();
            setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
        } catch (err) {
            console.error("Assistant Error:", err);
            // Fallback model trial
            try {
                const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
                if (apiKey) {
                    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${apiKey}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            model: "openai/gpt-4o-mini",
                            messages: [
                                {
                                    role: "system",
                                    content: "You are the Autonomix Cognitive Assistant. Help users with platform queries concisely."
                                },
                                ...messages.map(m => ({ role: m.role, content: m.content })),
                                { role: 'user', content: trimmed }
                            ]
                        })
                    });
                    if (response.ok) {
                        const data = await response.json();
                        const reply = data.choices[0].message.content.trim();
                        playUplink();
                        setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
                        setIsLoading(false);
                        return;
                    }
                }
            } catch {}

            await new Promise(r => setTimeout(r, 600));
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: `Transmission error: ${err.message || 'Unknown'}. Check browser console (F12) for details. If this persists, contact systems@autonomix.ai.` 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="glass-premium border border-white/60 rounded-[28px] w-[360px] md:w-[380px] h-[480px] flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(15,17,23,0.15)] mb-4"
                    >
                        {/* Header bar */}
                        <div className="bg-primary text-white p-5 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                                    <Bot size={16} />
                                </div>
                                <div>
                                    <h4 className="font-header font-bold text-[10px] tracking-[0.2em] uppercase leading-none">Cognitive Node</h4>
                                    <span className="text-[7px] text-emerald-400 font-mono uppercase tracking-wider block mt-1">Uplink Nominal</span>
                                </div>
                            </div>
                            <button 
                                onClick={handleToggle}
                                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </div>

                        {/* Messages view */}
                        <div className="flex-grow p-5 overflow-y-auto space-y-4 bg-white/30 backdrop-blur-md">
                            {messages.map((m, i) => (
                                <div 
                                    key={i} 
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div 
                                        className={`max-w-[80%] rounded-[20px] px-4 py-3 text-xs leading-relaxed ${
                                            m.role === 'user'
                                                ? 'bg-primary text-white shadow-md rounded-tr-none'
                                                : 'bg-white/80 border border-black/[0.04] text-primary shadow-sm rounded-tl-none'
                                        }`}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/80 border border-black/[0.04] rounded-[20px] rounded-tl-none px-4 py-3 text-xs text-primary shadow-sm flex items-center gap-2">
                                        <Loader2 size={12} className="animate-spin text-sky-600" />
                                        <span>Analyzing context...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input bar */}
                        <form 
                            onSubmit={handleSend}
                            className="bg-white/70 border-t border-black/[0.05] p-3 flex items-center gap-2"
                        >
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Consult the system mesh..."
                                disabled={isLoading}
                                className="flex-grow bg-transparent outline-none border-none text-xs text-primary px-3 focus:ring-0 placeholder:text-dim/40"
                            />
                            <button 
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 disabled:opacity-30 disabled:hover:bg-primary transition-all cursor-pointer shrink-0"
                            >
                                <Send size={12} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating button */}
            <motion.button
                onClick={handleToggle}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer relative z-50 group border border-white/25"
            >
                {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
                
                {/* Floating status dot */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
                )}
            </motion.button>
        </div>
    );
};

export default AIAssistant;
