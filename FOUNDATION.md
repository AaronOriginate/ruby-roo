FOUNDATION REPORT
Date: 2026-02-26

================================================================
PROJECT STRUCTURE
================================================================

```
build/
  public/
    images/                           # All brand + stock image assets
      RubyRoo_Combined_Black HI-RES.svg
      RubyRoo_Combined_Black HI-RES.png
      RubyRoo_Icon_tri.svg
      RubyRoo_Icon_tri.png
      hero-abstract-black-wavy.jpg
      hero-dark-stone-texture.jpg
      hero-geometric-architecture.jpg
      texture-geometric-building-uk.jpg
  src/
    app/
      globals.css                     # Full design system: tokens, base styles, themes
      layout.tsx                      # Root layout with fonts, ThemeProvider, Header, Footer, A11y
      page.tsx                        # Placeholder homepage with all section scaffolding
    components/
      brand/
        index.ts                      # Barrel export
        hexagon.tsx                   # Decorative hexagon + triple-stack motif
        logo-icon.tsx                 # R + hexagons icon (mobile header)
        logo-wordmark.tsx             # Full RUBYROO wordmark (desktop header/footer)
      layout/
        header.tsx                    # Sticky header + mobile overlay nav
        footer.tsx                    # Footer with links, contact, tagline
      ui/
        accessibility-widget.tsx      # Fixed bottom-left a11y panel
        button.tsx                    # shadcn Button (untouched)
        card.tsx                      # shadcn Card (untouched)
        cta-button.tsx                # Primary + Ghost CTA variants (cva + Framer Motion)
        dialog.tsx                    # shadcn Dialog (untouched)
        section-wrapper.tsx           # Scroll-triggered fade-in section container
        service-card.tsx              # DFY/DWY/DBY card with hover lift
        stat-block.tsx                # JetBrains Mono count-up stat
        testimonial-block.tsx         # Oversized quote mark testimonial
        theme-toggle.tsx              # Sun/moon theme switch
    lib/
      images.ts                       # Image asset manifest with usage notes
      utils.ts                        # cn() utility (clsx + tailwind-merge)
    providers/
      theme-provider.tsx              # next-themes wrapper (dark default, class strategy)
```

================================================================
DESIGN TOKENS
================================================================

Colors: 12 custom properties per theme (dark + light)
  --bg-primary, --bg-secondary, --bg-tertiary
  --text-primary, --text-secondary, --text-tertiary
  --rr-accent, --accent-hover, --accent-dim, --accent-glow
  --rr-border, --border-accent

  Plus 20+ shadcn compatibility tokens (--primary, --card, --muted, etc.)

Fonts:
  Display: Clash Display (Fontshare CDN, weights 200-700)
  Body: Satoshi (Fontshare CDN, weights 300-700, with italics)
  Mono: JetBrains Mono Variable (npm @fontsource-variable/jetbrains-mono)

Spacing: Tailwind defaults + custom max-width 1280px content constraint
Shadows: Tailwind defaults (used on cards, header, a11y widget)
Radii: 0.5rem base with sm/md/lg/xl/2xl/3xl/4xl scale
Animations: 4 custom keyframes (fade-up, fade-in, slide-up, count-up)

================================================================
BASE COMPONENTS
================================================================

| Component           | Path                              | Variants/Props                    | Notes                                      |
|---------------------|-----------------------------------|-----------------------------------|--------------------------------------------|
| LogoWordmark        | components/brand/logo-wordmark    | className                         | Full RUBYROO + tagline SVG paths           |
| LogoIcon            | components/brand/logo-icon        | className                         | R + 3 hexagons SVG paths                  |
| Hexagon             | components/brand/hexagon          | className                         | Single decorative hexagon                  |
| HexagonStack        | components/brand/hexagon          | className                         | Three stacked hexagons motif               |
| Header              | components/layout/header          | -                                 | Sticky, blur-on-scroll, mobile overlay     |
| Footer              | components/layout/footer          | -                                 | 3-column with logo, links, contact         |
| ThemeToggle         | components/ui/theme-toggle        | className                         | Sun/moon animated toggle                   |
| CTAButton           | components/ui/cta-button          | variant: primary/ghost, size: sm/default/lg/full, href | Framer Motion hover/tap |
| StatBlock           | components/ui/stat-block          | value, suffix, prefix, label, decimals, duration | Count-up on viewport entry  |
| ServiceCard         | components/ui/service-card        | label, title, emphasis: high/medium/low | Hover lift + glow               |
| TestimonialBlock    | components/ui/testimonial-block   | quote, attribution, role          | Oversized quote mark, fade-in              |
| SectionWrapper      | components/ui/section-wrapper     | padding, maxWidth, bg, animate, id | Scroll-triggered fade-in                 |
| AccessibilityWidget | components/ui/accessibility-widget| -                                 | Font size, contrast, motion, dyslexia, links|
| Button              | components/ui/button              | (shadcn default)                  | Available but CTAButton preferred for brand |
| Card                | components/ui/card                | (shadcn default)                  | Available for custom card layouts           |
| Dialog              | components/ui/dialog              | (shadcn default)                  | Available for modals if needed              |

================================================================
PAGE TEMPLATES
================================================================

| Page | Route | Sections (placeholders)                                    |
|------|-------|------------------------------------------------------------|
| Home | /     | hero, social-proof, education, strategy, how-we-work,     |
|      |       | about (testimonial), transformation, contact (final CTA)  |

================================================================
TECH STACK
================================================================

Framework: Next.js 16.1.6 (App Router, Turbopack)
React: 19.2.3
Tailwind CSS: v4 (CSS-first config)
shadcn/ui: new-york style, 3 base components
Framer Motion: 12.34.3
next-themes: 0.4.6
Fonts: Fontshare CDN (Clash Display, Satoshi) + @fontsource-variable/jetbrains-mono
Utilities: class-variance-authority, clsx, tailwind-merge

================================================================
FOR PAGE BUILDERS
================================================================

1. Import base components:
   - Brand: `import { LogoWordmark, LogoIcon, Hexagon, HexagonStack } from "@/components/brand"`
   - UI: `import { CTAButton } from "@/components/ui/cta-button"` (etc.)
   - Utils: `import { cn } from "@/lib/utils"`
   - Images: `import { images } from "@/lib/images"`

2. Use Tailwind utility classes mapped to design tokens:
   - Backgrounds: `bg-bg-primary`, `bg-bg-secondary`, `bg-bg-tertiary`
   - Text: `text-text-primary`, `text-text-secondary`, `text-text-tertiary`
   - Accent: `text-accent`, `bg-accent`, `border-accent`
   - Fonts: `font-display` (Clash Display), `font-body` (Satoshi), `font-mono` (JetBrains Mono)

3. Section structure:
   - Wrap each section in `<SectionWrapper>` for consistent padding + scroll animations
   - Use `id` prop for anchor link targeting
   - Use `bg` prop to alternate section backgrounds

4. Theme:
   - Dark theme is default
   - Light theme toggled via ThemeToggle in header
   - All colors automatically swap via CSS custom properties
   - Red accent stays constant across themes (slightly adjusted for contrast)

5. Motion:
   - Framer Motion is available globally (client components only)
   - SectionWrapper handles scroll-triggered fade-in by default
   - StatBlock handles count-up animation automatically
   - Use `whileHover`, `whileInView` from framer-motion for custom animations
   - Reduced motion is respected via CSS media query + a11y widget toggle

6. Accessibility:
   - AccessibilityWidget is rendered in layout.tsx (bottom-left fixed)
   - All settings persist in localStorage
   - Settings applied via CSS classes on <html>

7. Build: `npm run build` compiles with zero errors and zero warnings.
   Dev server: `npm run dev` (port 3000)
