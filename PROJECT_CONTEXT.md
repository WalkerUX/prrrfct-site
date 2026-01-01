# PROJECT_CONTEXT.md
# Prrrfct — Project Context, Rules, and Operating Manual

## 1. Product Vision (Authoritative)
Prrrfct is an AI-powered virtual cat companion designed to deliver calm,
emotional value, and habit-forming daily care loops.

This repository represents the **full Prrrfct product**.
The current prelaunch / early-access site is only one phase of the product
lifecycle and should not dictate long-term architecture decisions.

Core principles:
- Emotional connection over utility
- Daily habit formation (feed, groom, pet, play)
- Accessibility-first by default
- Premium-friendly, calm, polished UX

---

## 2. Tech Stack (Fixed)
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (STRICTLY custom tokens only)
- shadcn/ui (adapted to Prrrfct tokens and rules)
- Framer Motion (intentional, minimal use)
- Firebase (auth + data)
- Deployed via Netlify

---

## 3. NON-NEGOTIABLE RULES (Read Carefully)

### Design system
- ❌ Never use default Tailwind spacing, sizing, or color utilities
  - Examples forbidden: `p-4`, `mt-2`, `text-gray-500`
- ✅ Only use Prrrfct design tokens defined in `tailwind.config.ts`
- ❌ Do not invent new tokens without checking existing ones
- ❌ Do not restyle `components/ui/*` casually

### Markup & structure
- ❌ No div soup
- ✅ Semantic HTML is required
- ✅ Proper heading hierarchy is mandatory
- ✅ Buttons, links, inputs must be real HTML elements

### Accessibility (WCAG 2.2 AA baseline)
- Keyboard accessibility is mandatory
- Focus order must be logical and predictable
- Modals must:
  - Trap focus
  - Lock background scroll
  - Restore focus on close
- aria-live only when necessary
- Decorative icons must be hidden from screen readers

If unsure about accessibility behavior, ASK before implementing.

---

## 4. Shared Foundation (Do Not Drift Across Branches)

The following files and folders are **shared infrastructure** and must remain
consistent across branches unless explicitly refactored with intent.

### Locked (read-only by default)
- `lib/**`
- `components/ui/**`
- `globals.css`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `tsconfig.json`
- `next.config.mjs`
- `package.json` and lockfile
- `.cursorrules`
- This file (`PROJECT_CONTEXT.md`)

Changes here must be deliberate and usually merged across branches.

---

## 5. Controlled Areas (Change Intentionally)
These may evolve as the product matures but require care.

- `app/layout.tsx` (root shell, providers, landmarks)
- `components/layout/*`
- `components/EmailSignupForm.tsx`
- Context providers and auth wiring when product scope changes

Avoid incremental drift. Prefer planned refactors.

---

## 6. Flexible / Branch-Specific Areas
These are expected to diverge between prelaunch and full product builds.

- Marketing sections and composition components
- Route content under `app/page.tsx`
- Feature-specific routes (onboarding, care loop, dashboard, store)
- Visual content and copy

This is normal and expected.

---

## 7. Branching Model (Authoritative)

This repository uses **one file structure and multiple branches**.

- `main`
  - Stable
  - Prelaunch / production site
  - Always deployable

- `final-site`
  - Full Prrrfct product build
  - Onboarding, authenticated app, care loops, store
  - Merges back into `main` at launch

Branches represent **timelines**, not separate projects.

---

## 8. Routing Philosophy
Long-term, the product will distinguish between:
- Marketing experiences
- Application experiences

Route groups (e.g. `(marketing)` and `(app)`) may be introduced to support this.
Root routes may change as the product transitions from marketing-first to app-first.

---

## 9. How to Work in This Repo (Required Process)

Before making changes:
1. Read this file in full
2. Identify whether the target file is Locked, Controlled, or Flexible
3. Inspect existing patterns
4. Match style, structure, and accessibility patterns exactly
5. Prefer small, safe, reversible changes

If a rule conflicts with an instruction, the rule wins.

---

## 10. Cursor-Specific Instruction
You are working as a senior engineer on the Prrrfct codebase.

You must:
- Follow this document strictly
- Preserve design tokens and accessibility guarantees
- Avoid assumptions
- Ask before modifying shared foundation files

Failure to follow these rules creates regressions.

---
