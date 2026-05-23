import { useState, useEffect } from 'react';

const AUDIO_ENABLED_KEY = 'autonomix_sfx_enabled';

export const useAudio = () => {
  const [enabled, setEnabled] = useState(() => {
    const saved = localStorage.getItem(AUDIO_ENABLED_KEY);
    return saved === null ? true : saved === 'true';
  });

  const toggleSound = () => {
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(AUDIO_ENABLED_KEY, String(next));
      return next;
    });
  };

  const playSound = (type) => {
    if (!enabled) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Trigger SFX blueprints
      if (type === 'click') {
        // High frequency sharp interface click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.frequency.setValueAtTime(2000, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === 'hover') {
        // Soft click pop for navigation hovers
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        gain.gain.setValueAtTime(0.015, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);

        osc.start();
        osc.stop(ctx.currentTime + 0.02);
      } else if (type === 'key') {
        // Mechanical key click for the Terminal
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'sine';
        const freq = 600 + Math.random() * 300;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

        osc.start();
        osc.stop(ctx.currentTime + 0.03);
      } else if (type === 'uplink') {
        // Futuristic cyber chime rise
        const now = ctx.currentTime;
        const notes = [400, 600, 800, 1100];
        
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.frequency.setValueAtTime(freq, now + idx * 0.07);
          gain.gain.setValueAtTime(0.025, now + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.12);

          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + 0.12);
        });
      }
    } catch (error) {
      console.warn('Audio synthesis failed:', error);
    }
  };

  return {
    isSoundEnabled: enabled,
    toggleSound,
    playClick: () => playSound('click'),
    playHover: () => playSound('hover'),
    playKey: () => playSound('key'),
    playUplink: () => playSound('uplink'),
  };
};

export default useAudio;
