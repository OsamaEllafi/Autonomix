import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TermIcon, Shield, Server, Cpu, Play } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';
import { useSEO } from '../hooks/useSEO';

const Terminal = () => {
    useSEO('Active System Terminal Node', 'Execute command-line operations, inspect node statuses, and compile agent blueprints.');
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: 'AUTONOMIX TERMINAL v1.0.4 - ONLINE' },
        { type: 'system', text: 'Type "help" to display operational directives.' },
        { type: 'system', text: '' }
    ]);
    const [isProcessing, setIsProcessing] = useState(false);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);
    
    const { playKey, playUplink } = useAudio();

    // Focus input on mount
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Scroll terminal to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    const runCommandSimulation = async (cmd) => {
        const cleaned = cmd.trim().toLowerCase();
        const args = cleaned.split(' ');
        const baseCmd = args[0];

        setHistory(prev => [...prev, { type: 'input', text: `guest@autonomix:~$ ${cmd}` }]);

        if (cleaned === '') {
            return;
        }

        setIsProcessing(true);

        // Simulate small processing delays
        await new Promise(r => setTimeout(r, 150));

        switch (baseCmd) {
            case 'help':
                setHistory(prev => [
                    ...prev,
                    { type: 'output', text: 'Operational Commands:' },
                    { type: 'output', text: '  help              Show this guide' },
                    { type: 'output', text: '  status            Check system metrics and node health' },
                    { type: 'output', text: '  brand             Print branding vector ASCII representation' },
                    { type: 'output', text: '  capabilities      Display AI agent node service configurations' },
                    { type: 'output', text: '  agent run <name>  Deploy a custom agent node (recon | database | synthesis)' },
                    { type: 'output', text: '  clear             Flush terminal cache' },
                    { type: 'output', text: '  <query>           Type any query to consult the Autonomix Cognitive Agent' }
                ]);
                break;

            case 'clear':
                setHistory([]);
                break;

            case 'status':
                setHistory(prev => [
                    ...prev,
                    { type: 'output', text: 'STATUS: NOMINAL (200 OK)' },
                    { type: 'output', text: 'CORE CLOCK: 4.82 GHz' },
                    { type: 'output', text: 'INGRESS NODE: online (100% capacity)' },
                    { type: 'output', text: 'AGENT WORKERS: 24 active, 0 standby' },
                    { type: 'output', text: 'MEMORY POOL: 4.2TB / 8.0TB Sync' },
                    { type: 'output', text: 'FIREWALL DEPLOYMENT: Zero-trust active [AES-256]' }
                ]);
                break;

            case 'brand':
                setHistory(prev => [
                    ...prev,
                    { type: 'output', text: '    _   _   _ _____ ___  _   _  ___  __  __ _____  __' },
                    { type: 'output', text: '   / \\ | | | |_   _/ _ \\| \\ | |/ _ \\|  \\/  |_ _\\ \\/ /' },
                    { type: 'output', text: '  / _ \\| | | | | || | | |  \\| | | | | |\\/| | |  \\  /' },
                    { type: 'output', text: ' / ___ \\ |_| | | || |_| | |\\  | |_| | |  | | |  /  \\' },
                    { type: 'output', text: '/_/   \\_\\___/  |_| \\___/|_| \\_|\\___/|_|  |_|___/_/\\_\\' },
                    { type: 'output', text: '' },
                    { type: 'output', text: 'AUTONOMIX UI // FUTURISTIC INTELLIGENT AUTOMATION' }
                ]);
                break;

            case 'capabilities':
                setHistory(prev => [
                    ...prev,
                    { type: 'output', text: 'SYSTEM CAPABILITIES BLUEPRINTS:' },
                    { type: 'output', text: '  01 - WORKFLOW AUTOMATION : Self-correcting logic pipelines' },
                    { type: 'output', text: '  02 - AUTONOMOUS AGENTS   : LLM multi-step reasoning entities' },
                    { type: 'output', text: '  03 - INTEGRATED DATA FLOW: High-throughput ingestion pools' },
                    { type: 'output', text: '  04 - ZERO-TRUST SECURITY : Enterprise firewall nodes' }
                ]);
                break;

            case 'agent':
                if (args[1] === 'run') {
                    const agentName = args[2];
                    if (!agentName) {
                        setHistory(prev => [...prev, { type: 'error', text: 'Error: Must specify agent name. Usage: "agent run <recon | database | synthesis>"' }]);
                    } else if (['recon', 'database', 'synthesis'].includes(agentName)) {
                        await simulateAgentDeployment(agentName);
                    } else {
                        setHistory(prev => [...prev, { type: 'error', text: `Error: Unknown agent blueprint "${agentName}". Try "recon", "database", or "synthesis".` }]);
                    }
                } else {
                    setHistory(prev => [...prev, { type: 'error', text: 'Error: Unknown agent directive. Usage: "agent run <name>"' }]);
                }
                break;

            default:
                setHistory(prev => [...prev, { type: 'system', text: 'SYS: CONTACTING COGNITIVE SUB-AGENT NODE...' }]);
                try {
                    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
                    if (!apiKey) {
                        throw new Error("VITE_OPENROUTER_API_KEY not set in environment.");
                    }

                    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${apiKey}`,
                            "Content-Type": "application/json",
                            "HTTP-Referer": window.location.origin,
                            "X-Title": "Autonomix UI Terminal"
                        },
                        body: JSON.stringify({
                            model: "openai/gpt-4.1-mini",
                            messages: [
                                {
                                    role: "system",
                                    content: "You are the Autonomix Terminal Agent, an advanced, highly intellectual autonomous sub-system. Keep your responses short, technical, and formatted like computer terminal outputs. Use technical jargon (nodes, vector, matrix, pipeline, latency, protocols, AES-256) and write in a futuristic, minimal tone. Do not use markdown styling like bold stars or headers. Output plain text suitable for a console. Keep it to 1-3 lines."
                                },
                                {
                                    role: "user",
                                    content: cmd
                                }
                            ]
                        })
                    });

                    if (!response.ok) {
                        const data = await response.json();
                        throw new Error(data?.error?.message || `HTTP ${response.status}`);
                    }

                    const data = await response.json();
                    const aiText = data.choices[0].message.content.trim();
                    playUplink();
                    setHistory(prev => [...prev, { type: 'output', text: aiText }]);
                } catch (err) {
                    console.error("OpenRouter error:", err);
                    try {
                        const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
                        if (!apiKey) throw new Error();
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
                                        content: "You are the Autonomix Terminal Agent. Keep it to 1-3 lines, technical, cold tone."
                                    },
                                    {
                                        role: "user",
                                        content: cmd
                                    }
                                ]
                            })
                        });
                        if (response.ok) {
                            const data = await response.json();
                            const aiText = data.choices[0].message.content.trim();
                            playUplink();
                            setHistory(prev => [...prev, { type: 'output', text: aiText }]);
                            break;
                        }
                    } catch {}
                    
                    await new Promise(r => setTimeout(r, 400));
                    setHistory(prev => [
                        ...prev,
                        { type: 'error', text: `SYS ERROR: Uplink failed. Vector response simulated:` },
                        { type: 'output', text: `LOCAL-SIM: Node processed query "${cmd}". Operational limits nominal. Request logged in transaction history.` }
                    ]);
                }
                break;
        }

        setIsProcessing(false);
    };

    const simulateAgentDeployment = async (name) => {
        const steps = [
            `SYS: Fetching "${name}" agent configuration blueprint...`,
            `SYS: Allocating thread blocks on core cognitive router...`,
            `SYS: Linking vector db memory node [Sync active]...`,
            `SYS: Securing communication socket [Port 8443]...`,
            `DEPLOY: Compiling neural matrices [=========> ] 75%`,
            `DEPLOY: Registering agent telemetry...`,
            `SUCCESS: Agent "${name.toUpperCase()}" initialized. Latency: 12ms. Status: Nominal.`
        ];

        for (let i = 0; i < steps.length; i++) {
            setHistory(prev => [...prev, { type: 'output', text: steps[i] }]);
            if (i === steps.length - 1) {
                playUplink();
            } else {
                playKey();
            }
            await new Promise(r => setTimeout(r, 450 + Math.random() * 200));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const cmd = input;
        setInput('');
        runCommandSimulation(cmd);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        playKey();
    };

    return (
        <div className="pt-32 pb-32 min-h-screen bg-[#f5f6f8] relative overflow-hidden" style={{ zIndex: 10 }}>
            {/* Soft decorative glows */}
            <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.01] rounded-full blur-[120px] pointer-events-none" />

            <div className="container max-w-4xl relative z-10 px-4">
                
                {/* Visual Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-header text-primary tracking-wide mb-4">
                        SYSTEM TERMINAL
                    </h1>
                    <p className="text-dim text-sm max-w-md mx-auto leading-relaxed">
                        Secure command line portal into the Autonomix automation engine. Inspect metrics, fetch blueprints, and deploy agent nodes.
                    </p>
                </div>

                {/* Simulated Terminal Chassis */}
                <div 
                    onClick={handleTerminalClick}
                    className="relative w-full h-[500px] rounded-[32px] overflow-hidden bg-[#0f1117]/95 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(15,17,23,0.3)] flex flex-col cursor-text"
                >
                    {/* Header Bar */}
                    <div className="w-full h-12 bg-white/[0.03] border-b border-white/[0.05] px-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <TermIcon size={14} className="text-white/40" />
                            <span className="font-header font-bold text-[10px] text-white/50 tracking-[0.15em] uppercase">SYSTEM NODE @ GUEST-01</span>
                        </div>
                        <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        </div>
                    </div>

                    {/* Console Output Area */}
                    <div className="flex-grow p-6 md:p-8 overflow-y-auto font-mono text-xs md:text-sm text-sky-400/90 leading-relaxed flex flex-col gap-2 scrollbar-none">
                        {history.map((log, index) => {
                            if (log.type === 'input') {
                                return (
                                    <div key={index} className="text-white">
                                        {log.text}
                                    </div>
                                );
                            }
                            if (log.type === 'error') {
                                return (
                                    <div key={index} className="text-red-400">
                                        {log.text}
                                    </div>
                                );
                            }
                            if (log.type === 'system') {
                                return (
                                    <div key={index} className="text-white/40">
                                        {log.text}
                                    </div>
                                );
                            }
                            return (
                                <div key={index} className="whitespace-pre">
                                    {log.text}
                                </div>
                            );
                        })}
                        {isProcessing && (
                            <div className="text-white/30 flex items-center gap-1">
                                <span className="animate-pulse">&gt; PROCESSING TASK DIRECTIVE</span>
                                <span className="animate-bounce font-bold">.</span>
                                <span className="animate-bounce font-bold [animation-delay:0.2s]">.</span>
                                <span className="animate-bounce font-bold [animation-delay:0.4s]">.</span>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input Prompt Bar */}
                    <form 
                        onSubmit={handleFormSubmit}
                        className="w-full h-14 bg-white/[0.02] border-t border-white/[0.05] px-6 md:px-8 flex items-center gap-2"
                    >
                        <span className="font-mono text-xs md:text-sm text-white/50 select-none">guest@autonomix:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            disabled={isProcessing}
                            className="flex-grow bg-transparent border-none outline-none font-mono text-xs md:text-sm text-white focus:ring-0 p-0"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                        />
                    </form>

                </div>

                {/* Sub-bar metrics */}
                <div className="mt-6 flex flex-wrap gap-6 justify-center text-primary/40 font-header text-[10px] tracking-widest uppercase">
                    <span className="flex items-center gap-1.5"><Shield size={12} /> SECURE SHELL</span>
                    <span className="flex items-center gap-1.5"><Server size={12} /> HOST: CLOUD-NODE-03</span>
                    <span className="flex items-center gap-1.5"><Cpu size={12} /> ARCH: AMD64-AI</span>
                </div>

            </div>
        </div>
    );
};

export default Terminal;
