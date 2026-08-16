# Social Goat Films — Design System

## Three Approaches Considered

**1. Cinematic Editorial** (probability: 0.07) — Dark, textured, editorial magazine meets film credits. Orange + teal brand colors.
**2. Raw Documentary** (probability: 0.04) — Gritty, high-contrast black and white with single color accent.
**3. Warm Artisan** (probability: 0.02) — Warm cream and amber, handcrafted feel, like an indie film poster.

---

## CHOSEN: Cinematic Editorial

### Design Movement
Editorial film magazine meets director's portfolio. Think *Variety* meets *A24* — confident, artistic, and unmistakably human.

### Core Principles
1. **Personality over polish** — Mike's voice and wit come through in every line of copy
2. **Cinematic depth** — layered backgrounds, film grain texture, dramatic lighting through color
3. **Orange + teal as energy** — not decoration, but the emotional pulse of the brand
4. **White space as a director's cut** — intentional pauses that let the work breathe

### Color Philosophy
- **Background:** Deep charcoal `#0f0f0f` / near-black `#111111` — like a darkened screening room, not a cave
- **Primary Orange:** `#E8621A` — warm, energetic, the color of a film light's spill
- **Teal Accent:** `#1ABBE8` — cool counterpoint, like a blue gel on a key light
- **Off-white text:** `#F0EDE8` — warm white, like a projection screen, never cold
- **Muted surfaces:** `#1C1C1C` for cards, `#252525` for hover states

### Layout Paradigm
Asymmetric editorial grid. Full-bleed sections alternate with tight typographic moments. No generic centered card grids — instead, offset compositions, overlapping elements, and cinematic proportions.

### Signature Elements
1. **Film grain overlay** — subtle noise texture on dark sections, like actual film stock
2. **Color-split dividers** — thin lines or gradients using orange-to-teal
3. **Oversized display numerals** — years, project counts as large ghosted type behind content

### Interaction Philosophy
Interactions feel like a camera shutter — crisp, decisive, satisfying. Hover states reveal rather than transform. CTAs feel like a director calling "action."

### Animation
- Entrance: fade-up 40px, 400ms ease-out, staggered 60ms per element
- Hover on cards: subtle scale 1.02 + orange border glow, 200ms
- CTA buttons: scale 0.97 on press, 160ms ease-out
- No looping animations, no bouncing — everything is deliberate

### Typography System
- **Display/Headlines:** Bebas Neue — bold, cinematic, commanding
- **Subheadings:** Montserrat SemiBold — modern, clean
- **Body:** Inter Regular — readable, approachable
- **Accent/Quotes:** Playfair Display Italic — warmth and personality
- Scale: 72px hero / 48px h1 / 32px h2 / 24px h3 / 18px subhead / 16px body

### Brand Essence
*The filmmaker who makes Fortune 500 companies feel human.* Artistic. Emmy-winning. Genuinely good at this.

### Brand Voice
Confident without being arrogant. Warm without being soft. Witty without trying too hard.
- Headline example: *"Your story deserves better than stock footage and a corporate script."*
- CTA example: *"Let's make something worth watching."*
- Never: "We deliver exceptional video production services tailored to your needs."

### Wordmark & Logo
Keep Mike's existing goat logo. Pair it with "SOCIAL GOAT FILMS" in Bebas Neue, letter-spaced.

### Signature Brand Color
**#E8621A** — Social Goat Orange. The color of a film light hitting a subject just right.

## Style Decisions
- Navigation: top of page, NOT sticky
- Hero: full-viewport-height, dark background with generated image, film grain overlay
- BTS gallery: masonry-style grid, full-bleed images
- Testimonials: large pull-quote style, not card grids
- Contact form: conversational questionnaire feel, not a generic form
- Interior sections must retain cinematic depth: every major dark section includes at least one editorial film cue (grain, ghosted numeral, or color-split rule)
- Orange is the primary action/heat color; teal is the cool counter-light reserved for quotes, key numerals, timeline markers, and selective headline emphasis
- Contact should feel like a director's intake conversation, not a generic web form
