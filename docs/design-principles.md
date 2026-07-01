# LoCoML Global Design Principles

## 1. Typography Rules
- **Headings**: Space Grotesk. Used for all primary titles, section headers, and impactful statements. It conveys a modern, engineering-first aesthetic.
- **Body Text**: Inter. Used for long-form reading, paragraphs, and standard UI elements. It ensures maximum legibility.
- **Technical Labels**: JetBrains Mono. Used for code snippets, tags, architecture labels, and data points.

## 2. Color Rules
- **Primary Background**: `#FFFFFF` (Clean, white-first).
- **Secondary Background**: `#F8FAFC` (For subtle separation).
- **Card Background**: `#FFFFFF`.
- **Primary Blue**: `#2563EB` (Used for primary actions and highlights).
- **Hover Blue**: `#3B82F6` (Interactive states).
- **Light Blue**: `#DBEAFE` (Subtle highlights, active states).
- **Border**: `#E2E8F0` (For defining boundaries without heavy lines).
- **Text (Heading)**: `#0F172A` (High contrast, deep slate).
- **Text (Paragraph)**: `#475569` (Softer slate for reading comfort).
- **Status Colors**: 
  - Success: `#10B981`
  - Warning: `#F59E0B`
  - Error: `#EF4444`
  - Muted: `#94A3B8`

## 3. Spacing Rules
- Use a 4pt/8pt grid system.
- Standard padding for containers is `px-4 md:px-8`.
- Section vertical spacing is `py-16 md:py-24`.
- Maintain consistent gaps between related elements (e.g., `gap-4` for standard stacks).

## 4. Component Rules
- **Buttons**: Should have clear hover/active states. Ghost and Outline variants are preferred over solid colors except for primary calls to action.
- **Cards**: Keep them clean, avoid heavy drop shadows. Rely on subtle borders (`border-slate-200`) and slight background color shifts.
- **Borders & Radii**: Use `rounded-xl` or `rounded-2xl` for large containers, `rounded-lg` for standard UI components.

## 5. Animation Philosophy
- **Do not animate components simply because animation is possible.**
- Animations must explain, guide, or reinforce interactions.
- Avoid decorative, meaningless motion.
- Interactions (like hover states) should be crisp but smooth (`duration-200` to `duration-300`).
- Entry animations should stagger logically.

## 6. Accessibility Rules
- All interactive elements must have a visible focus state.
- Ensure high contrast for text against its background.
- Semantic HTML (e.g., `<nav>`, `<main>`, `<article>`, `<section>`) must be used over generic `<div>`s where applicable.
- Add `aria-label`s to icon-only buttons.
- Respect `prefers-reduced-motion` globally.

## 7. Icon Rules
- Centralized via `src/constants/icons.ts`.
- Use a consistent stroke width (usually `2px` or `1.5px`).
- Do not mix icon styles.

## 8. Page Layout Rules
- **Max Content Width**: 1280px (`max-w-7xl`).
- **Optimal Reading Width**: 720px (`max-w-3xl`).
- Always design mobile-first.
- The background system must not overpower content.
