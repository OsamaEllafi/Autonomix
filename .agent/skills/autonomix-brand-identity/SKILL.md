---
name: autonomix-brand-identity
description: Enforces the Autonomix brand identity across all UI work. Use whenever creating, modifying, or reviewing any component, page, or style in the Autonomix website. Defines the monochrome color system, typography (Orbitron + Inter), glassmorphism effects, motion guidelines, and layout conventions.
---

# Autonomix Brand Identity

**Always apply these rules when building or editing any UI in the Autonomix project.** This is the single source of truth for the brand's visual language.

## Brand Personality

- **Futuristic, clean, intelligent automation.**
- **Overall feel**: Light, minimal, and professional — a monochrome palette with frosted glass surfaces, paired with an interactive Spline 3D robot hero.

---

## Color System

### Backgrounds

| Token | Value | Usage |
|---|---|---|
| `--bg-dark` | `#f5f6f8` | Body background, overall app canvas |
| `--bg-card` | `rgba(255, 255, 255, 0.8)` | `.glass` panels, cards, navbar on scroll |

### Brand Colors (Monochrome Only)

| Token | Value | Usage | Feel |
|---|---|---|---|
| `--primary` | `#0f1117` | Headings, active nav links, primary CTAs | Deep near-black charcoal — authoritative and minimal |
| `--secondary` | `#3b3f51` | Supporting headings, logo "IX" mark | Muted dark slate for subtle hierarchy |
| `--accent` | `#5a5f73` | Icon containers, decorative elements, gradient endpoints | Mid-tone gray for tertiary elements |

### Text Colors

| Token | Value | Usage |
|---|---|---|
| `--text-main` | `#0f1117` | Primary copy, headings, labels |
| `--text-dim` / `dim` | `#6b7085` | Descriptions, secondary info, placeholders, footer text |

### Glass / Border

| Token | Value | Usage |
|---|---|---|
| `--glass-border` | `rgba(15, 17, 23, 0.07)` | Card borders, navbar outline, form input borders |

### Gradients

- **Text gradient (`.text-gradient`)**: from `--primary` to `--accent` (charcoal → slate). Used sparingly for select headings.

> [!CAUTION]
> **No rainbow gradients. No multi-colored accents.** The palette is strictly monochrome.

---

## Typography

### Fonts

| Role | Family | Usage |
|---|---|---|
| Body (`--font-main`) | `Inter`, sans-serif | Body text, paragraphs, form labels, descriptions |
| Display (`--font-header`) | `Orbitron`, sans-serif | Logo, all headings h1–h6, buttons, step numbers |

### Rules

- Headings: `Orbitron`, uppercase, `letter-spacing: 0.05em`
- Buttons: `Orbitron`, `font-weight: 600`, uppercase, `font-size: 0.8rem`, `letter-spacing: 0.1em`, pill-shaped (`border-radius: 50px`)
- Body copy: `Inter` for readability

---

## UI Components & Effects

### Navigation (Floating Island)

- Shape: Pill (`border-radius: 9999px`), centered, `max-width: 720px`
- Position: Fixed, `z-index: 100`
- Default: `bg-white/50`, `backdrop-blur-md`
- On scroll: `bg-white/80`, `backdrop-blur-xl`, subtle shadow
- Logo: "AUTONOM" in `text-primary`, "IX" in `text-accent`
- **Must remain compact and centered — never full page width.**

### Buttons

| Variant | Background | Border | Shape | Hover |
|---|---|---|---|---|
| `.btn.btn-primary` | `--primary` (#0f1117), white text | — | Pill (50px) | Lift `-2px`, deeper shadow |
| `.btn.btn-outline` | `rgba(255,255,255,0.6)` + blur | `1.5px solid rgba(15,17,23,0.12)` | Pill (50px) | More opaque, darker border |

### Glassmorphism (`.glass`)

- Background: `var(--bg-card)`
- Border: `1px solid var(--glass-border)`
- Effects: `backdrop-filter: blur(16px)`, `box-shadow: 0 2px 20px rgba(0,0,0,0.04)`
- Hover: Increased shadow, slightly darker border
- Transition: `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

### Premium Glassmorphism (`.glass-premium`)

- Background: `rgba(255,255,255,0.5)` → `rgba(255,255,255,0.95)` on focus
- Border: Transparent → `rgba(0,0,0,0.05)` on focus
- Effects: `backdrop-blur-xl`, deep ambient shadow (up to `0 24px 52px rgba(0,0,0,0.1)`)
- Shape: `rounded-[32px]` to `rounded-[48px]`
- Use for: Services bento cards, Client Matrix testimonial cards

### Icon Containers

- Background: `bg-primary/[0.06]`, rounded square (`12px`)
- Hover: opacity increases to `0.1`

### Section Dividers

- `.section-accent-line`: `48px × 3px`, `var(--primary)` at 30% opacity, centered.

### Layout

- Container: `max-width: 1200px`, centered, `padding: 0 20px`
- Body: `background-color: var(--bg-dark); color: var(--text-main); overflow-x: hidden;`
- No top margin on main content — hero starts at top of viewport.

---

## Motion & 3D Identity

### 3D Hero (Spline)

- Embed: `@splinetool/react-spline` with lazy loading + Suspense
- Scene URL: `https://prod.spline.design/iWAidKCdLjPFumxL/scene.splinecode`
- Position: Absolute, fills hero section (`inset: 0`), `z-index: 0`
- Overlay gradient: `linear-gradient(to bottom, transparent 55%, var(--bg-dark) 100%)` at `z-index: 5`

### Hero Text

- Positioned at **bottom of viewport** (`absolute bottom-16`) — never cover the 3D robot
- Semi-transparent colors: `rgba(15,17,23,0.75)` / `rgba(15,17,23,0.45)`
- Buttons get `pointer-events: auto`, text container gets `pointer-events: none`

### Scroll Animations (Framer Motion)

- `whileInView` with `viewport: { once: true }`
- Cards: `opacity: 0, y: 20` → `opacity: 1, y: 0`, stagger `0.08–0.12s`
- Page content: slide-in from left/right (`x: ±24`)
- Hover: `translateY(-1px)` lift, scale on icons

> [!IMPORTANT]
> **Animations should feel physical, not decorative.** Use `requestAnimationFrame` for scroll-linked effects and `cubic-bezier` easing for transitions.

---

## Footer (Ultra-Minimal Single Row)

- Background: `bg-black/40` overlay, `border-t border-white/[0.02]`
- Layout: CSS Grid `grid-cols-1 lg:grid-cols-3` — **single horizontal row on desktop, always**
- Left: Brand wordmark + copyright
- Center: Nav links in `Orbitron`, uppercase, wide tracking
- Right: Social icons + back-to-top
- **Never multi-column or multi-row. It is a minimal information bar.**

---

## Services Page (Bento Grid)

- 3-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)
- Cards: `.glass-premium` with `@keyframes floatPhysics`
- Watermark numbers: `text-[120px] text-primary/[0.015]` behind cards

---

## Client Matrix (Testimonials)

- Full-width infinite carousel with `requestAnimationFrame` physics
- Background: White rounded rectangle (`max-w-[880px] h-[400px] rounded-[48px]`)
- Center focus: `scale(1.0)`, full opacity, deep shadow
- Edges: `scale(0.85)`, `opacity(0.3)`, minimal shadow
- Avatars: Dark circles (`bg-[#050505]`) with white initials
- Touch: Full swipe support with `touchAction: 'pan-y'`

---

## Decision Tree — When to Apply What

```
Creating/editing a component?
├── Is it a card or panel? → Use `.glass` or `.glass-premium`
├── Is it a heading? → Use `Orbitron`, uppercase
├── Is it body text? → Use `Inter`
├── Is it a button? → Pill shape, `Orbitron`, uppercase
├── Is it a background? → `--bg-dark` (#f5f6f8)
├── Need emphasis? → Use `--primary` charcoal, never bright colors
├── Adding animation? → Framer Motion `whileInView`, physical easing
└── Adding decorative elements? → NO circles/rings. Use glass, lines, negative space.
```

> [!WARNING]
> **Hard rules — never break these:**
> - No rainbow gradients or multi-colored accents
> - No circles or rings as decorative elements
> - Hero text stays at the bottom of the viewport
> - Navbar stays compact and centered (never full-width)
> - Footer stays a single row on desktop
> - All hover states are subtle (slight lift, shadow change)
> - Use `Orbitron` for structure, `Inter` for readability
