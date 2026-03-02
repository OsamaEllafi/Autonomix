## Autonomix UI Brand Identity

- **Brand personality**: Futuristic, clean, intelligent automation.
- **Overall feel**: Light, minimal, and professional — a monochrome palette with frosted glass surfaces, paired with an interactive Spline 3D robot hero.

---

## Color System

- **Background**
  - **Primary background (`--bg-dark`)**: `#f5f6f8`
    - Used for: `body` background, overall app canvas.
    - Intent: Soft off-white that creates a clean, professional backdrop without being harsh.
  - **Card / glass background (`--bg-card`)**: `rgba(255, 255, 255, 0.8)`
    - Used for: `.glass` panels, cards, navbar background on scroll.
    - Intent: Semi-transparent white with backdrop blur for depth and layering.

- **Brand colors (monochrome)**
  - **Primary (`--primary`, Tailwind `primary`)**: `#0f1117`
    - Usage: Headings, active nav links, primary CTAs, key text.
    - Feel: Deep near-black charcoal — authoritative and minimal.
  - **Secondary (`--secondary`, Tailwind `secondary`)**: `#3b3f51`
    - Usage: Supporting headings, logo "IX" mark, secondary emphasis.
    - Feel: Muted dark slate for subtle hierarchy.
  - **Accent (`--accent`, Tailwind `accent`)**: `#5a5f73`
    - Usage: Icon containers, decorative elements, gradient endpoints.
    - Feel: Mid-tone gray for tertiary elements.

- **Text colors**
  - **Main text (`--text-main`)**: `#0f1117`
    - Usage: Primary copy, headings, labels.
  - **Dim text (`--text-dim`, Tailwind `dim`)**: `#6b7085`
    - Usage: Descriptions, secondary information, placeholders, footer text.

- **Glass / border**
  - **Glass border (`--glass-border`, Tailwind `glass-border`)**: `rgba(15, 17, 23, 0.07)`
    - Usage: Card borders, navbar outline, form input borders.

- **Gradients**
  - **Text gradient (`.text-gradient`)**: from `--primary` to `--accent` (charcoal to slate)
    - Usage: Subtle emphasis on select headings. Used sparingly.

---

## Typography System

- **Primary body font (`--font-main`, Tailwind `font-main`)**
  - **Family**: `Inter`, `sans-serif`
  - Usage: Body text, paragraphs, form labels, descriptions.
  - Characteristics: Clean, modern, highly legible on light backgrounds.

- **Display / header font (`--font-header`, Tailwind `font-header`)**
  - **Family**: `Orbitron`, `sans-serif`
  - Usage: Logo wordmark, all headings `h1–h6`, buttons (`.btn`), step numbers.
  - Characteristics:
    - Uppercase, wide letter spacing (`letter-spacing: 0.05em` on headings, `0.1em` on buttons).
    - Techno, geometric aesthetic supporting the automation/AI theme.

- **Button typography (`.btn`)**
  - Font: `var(--font-header)` (`Orbitron`)
  - Style: `font-weight: 600`, `text-transform: uppercase`, `font-size: 0.8rem`, `letter-spacing: 0.1em`
  - Shape: Pill-shaped (`border-radius: 50px`)
  - Intent: Clean, modern controls that feel precise and intentional.

---

## UI Components & Effects

- **Navigation (Floating Island)**
  - Shape: Pill-shaped (`border-radius: 9999px`), centered at page top, `max-width: 720px`
  - Position: Fixed, floats above hero content with `z-index: 100`
  - Default: `bg-white/50`, `backdrop-blur-md`, transparent border
  - On scroll: `bg-white/80`, `backdrop-blur-xl`, subtle shadow and border
  - Active link: `text-primary` with small dot indicator below
  - Inactive links: `text-dim`, hover → `text-primary`
  - Logo: "AUTONOM" in `text-primary`, "IX" in `text-accent`

- **Buttons**
  - **Primary button (`.btn.btn-primary`)**
    - Background: `var(--primary)` (`#0f1117`)
    - Text: `#ffffff`
    - Shape: Pill (`border-radius: 50px`)
    - Effects: Subtle shadow (`0 4px 16px rgba(15, 17, 23, 0.2)`), lift on hover (`translateY(-2px)`).
    - Role: Main conversion and navigation actions.
  - **Outline button (`.btn.btn-outline`)**
    - Background: `rgba(255, 255, 255, 0.6)` with `backdrop-blur`
    - Border: `1.5px solid rgba(15, 17, 23, 0.12)`
    - Shape: Pill (`border-radius: 50px`)
    - Hover: Background becomes more opaque, border darkens, subtle shadow.
    - Role: Secondary actions.

- **Glassmorphism containers (`.glass`)**
  - Background: `var(--bg-card)` (`rgba(255, 255, 255, 0.8)`)
  - Border: `1px solid var(--glass-border)`
  - Effects: `backdrop-filter: blur(16px)`, `box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04)`
  - Hover: Increased shadow, slightly darker border
  - Transition: `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  - Usage: Service cards, testimonial cards, contact info panels, form containers.

- **Section Divider (`.section-accent-line`)**
  - Width: `48px`, Height: `3px`
  - Background: `var(--primary)` at `30% opacity`
  - Placement: Centered below section headings.

- **Icon Containers**
  - Background: `bg-primary/[0.06]`
  - Shape: Rounded square (`border-radius: 12px`)
  - Text: `text-primary/60`
  - Hover: Background opacity increases to `0.1`

- **Layout**
  - **Container (`.container`)**: `max-width: 1200px`, centered, `padding: 0 20px`.
  - **Main content**: No top margin — hero section starts at top of viewport, navbar floats above.
  - Global: `body` uses `background-color: var(--bg-dark); color: var(--text-main); overflow-x: hidden;`

---

## Motion & 3D Identity

- **3D Hero (Spline)**
  - Embed: `@splinetool/react-spline` with lazy loading and Suspense
  - Scene URL: `https://prod.spline.design/iWAidKCdLjPFumxL/scene.splinecode`
  - Position: Absolute, fills entire hero section (`inset: 0`), `z-index: 0`
  - Interactive: `pointer-events: auto` on the Spline container
  - Loading fallback: Spinning border circle in `primary` color

- **Hero Text Positioning**
  - Positioned at **bottom of viewport** (`absolute bottom-16`) to avoid covering the 3D robot
  - Text uses semi-transparent colors (`rgba(15, 17, 23, 0.75)` for "FUTURE OF", `rgba(15, 17, 23, 0.45)` for "AUTOMATION")
  - Subtle white text-shadow for depth against the 3D scene
  - Buttons have `pointer-events: auto` while text container has `pointer-events: none`

- **Overlay gradient**: `linear-gradient(to bottom, transparent 55%, var(--bg-dark) 100%)` at `z-index: 5` to smoothly fade the hero into page content.

- **Scroll Animations (Framer Motion)**
  - `whileInView` triggers with `viewport: { once: true }`
  - Cards: `opacity: 0, y: 20` → `opacity: 1, y: 0` with staggered delays (`0.08–0.12s` per item)
  - Page-level content: slide-in from left/right (`x: -24` / `x: 24`)
  - Hero elements: sequential stagger (heading → description → buttons)
  - Hover micro-interactions: `translateY(-1px)` lift on cards, scale on icon containers

---

## Footer

- Background: Gradient from `var(--bg-dark)` to `#edeef1`
- Top separator: `1px` line in `primary/[0.06]`
- Layout: 4-column grid (brand spanning 2, navigation, social connect)
- Social icons: Monochrome, `bg-primary/[0.04]`, hover → `bg-primary/[0.08]`
- Back-to-top: Rounded button with same styling as social icons
- Bottom bar: Copyright text + back-to-top, separated by `border-t`

---

## Usage Guidelines

- Use a **monochrome palette** throughout — no rainbow gradients, no multi-colored accents.
- Prefer **`primary` charcoal** for interactive elements (buttons, active links, headings) and **`dim` gray** for supporting text.
- Keep backgrounds in **`--bg-dark` off-white** to maintain a clean, professional appearance.
- Use **`Orbitron`** for anything structural (logo, headings, CTAs, step numbers) and **`Inter`** for readable body copy.
- Use `.glass` cards **sparingly** to highlight key content sections.
- All card hover states should be **subtle** — slight lift (`-1px`), increased shadow, slightly darker border.
- Hero text should always stay at the **bottom of the viewport** to keep the 3D scene visible and unobstructed.
- The floating island navbar should remain **compact** and centered — it should never span the full page width.
