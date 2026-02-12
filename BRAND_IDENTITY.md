## Autonomix UI Brand Identity

- **Brand personality**: Futuristic, high-tech, intelligent automation.
- **Overall feel**: Dark, cinematic background with glowing neon accents and glassmorphism to emphasize AI, data, and 3D visuals.

---

## Color System

- **Background**
  - **Primary background (`--bg-dark`)**: `#050505`  
    - Used for: `body` background, overall app canvas.  
    - Intent: Deep near‑black for strong contrast with neon accents and 3D elements.
  - **Card / glass background (`--bg-card`)**: `rgba(255, 255, 255, 0.05)`  
    - Used for: `.glass` panels, cards, and navigation background on scroll.  
    - Intent: Subtle translucent surfaces over the dark space.

- **Brand accent colors**
  - **Primary (`--primary`, Tailwind `primary`)**: `#00f3ff`  
    - Usage: Primary CTAs (`.btn-primary`), key highlights, active nav links, icons.  
    - Feel: Neon cyan, tech-forward, energetic.
  - **Secondary (`--secondary`, Tailwind `secondary`)**: `#bc13fe`  
    - Usage: Gradients, 3D lighting, supporting highlights.  
    - Feel: Electric magenta for contrast with primary.
  - **Accent (`--accent`)**: `#2d2d2d`  
    - Usage: Subtle backgrounds, dividers, and neutral surfaces.

- **Text colors**
  - **Main text (`--text-main`)**: `#ffffff`  
    - Usage: Primary copy on dark backgrounds.
  - **Dim text (`--text-dim`, Tailwind `dim`)**: `#a1a1a1`  
    - Usage: Secondary information, descriptions, footer text.

- **Glass / border**
  - **Glass border (`--glass-border`, Tailwind `glass-border`)**: `rgba(255, 255, 255, 0.1)`  
    - Usage: Card borders, nav background outlines to reinforce glassmorphism.

- **Gradients**
  - **Text gradient (`.text-gradient`)**: from `--primary` to `--secondary`  
    - Usage: Hero headlines, key marketing words, brand marks.

---

## Typography System

- **Primary body font (`--font-main`, Tailwind `font-main`)**
  - **Family**: `Inter`, `sans-serif`
  - Usage: Body text, paragraphs, smaller UI elements.
  - Characteristics: Clean, modern, highly legible on dark backgrounds.

- **Display / header font (`--font-header`, Tailwind `font-header`)**
  - **Family**: `Orbitron`, `sans-serif`
  - Usage: Logo wordmark in navbar, all headings `h1–h6`, buttons (`.btn`), key labels.
  - Characteristics:
    - Uppercase, wide letter spacing (`letter-spacing: 0.05em` on headings).
    - Techno, sci‑fi aesthetic supporting the automation/AI theme.

- **Button typography (`.btn`)**
  - Font: `var(--font-header)` (`Orbitron`)
  - Style: `font-weight: 600`, `text-transform: uppercase`, `font-size: 0.9rem`
  - Intent: Make CTAs feel like control-panel commands in a futuristic UI.

---

## UI Components & Effects

- **Buttons**
  - **Primary button (`.btn.btn-primary`)**
    - Background: `var(--primary)` (`#00f3ff`)
    - Text: `#000000`
    - Effects: Glow shadow (`0 0 15px rgba(0, 243, 255, 0.3)`), stronger on hover plus slight translateY.
    - Role: Main conversion and navigation actions (e.g., “Get Started”).
  - **Outline button (`.btn.btn-outline`)**
    - Border: `1px solid var(--primary)`
    - Background: `transparent`, hover `rgba(0, 243, 255, 0.1)`
    - Role: Secondary actions that should be visible but less dominant.

- **Glassmorphism containers (`.glass`)**
  - Background: `var(--bg-card)` (`rgba(255, 255, 255, 0.05)`)
  - Border: `1px solid var(--glass-border)`
  - Effects: `backdrop-filter: blur(10px)`
  - Usage: Nav bar when scrolled, service cards, panels behind the hero visuals.

- **Layout**
  - **Container (`.container`)**:
    - `max-width: 1200px`, centered with `margin: 0 auto`, horizontal padding `20px`.
  - Global: `body` uses `background-color: var(--bg-dark); color: var(--text-main); overflow-x: hidden;`

---

## Motion & 3D Identity (Summary)

- **3D Hero Sphere**
  - Built with `@react-three/fiber`, `@react-three/drei`, and `maath`.
  - Colors: Deep purple core (`#220033`) with emissive magenta (`#bc13fe`) and cyan lighting (`#00f3ff`).
  - Behavior: Slow idle rotation, subtle reactive stretch on scroll, and smooth lagged motion.
  - Brand role: Visual metaphor for autonomous, adaptive AI systems.

- **Particles & Background**
  - Soft, subtle particles behind content to reinforce depth and a “data cloud” feeling.
  - Always kept behind main UI via `z-index` layering to preserve readability.

---

## Usage Guidelines

- Prefer **`primary` cyan** for interactive elements (links, buttons, highlights) and **`secondary` magenta** for complementary emphasis or 3D lighting.
- Keep large areas in **`--bg-dark`** to maintain contrast and let neon accents stand out.
- Use **`Orbitron`** for anything that should feel branded or structural (logo, headings, CTAs), and **`Inter`** for readable copy.
- Use `.glass` cards and gradients sparingly to highlight key sections (hero, services, CTAs) so the UI doesn’t feel visually noisy.

