# FlowSurge AI — Website Plan (Final)

---

## 1. Design Decisions ✅

- **Color mode**: Dark-to-light gradient (hero dark → lighter sections as you scroll)
- **Animation**: Refined + subtle (scroll reveals, gentle hovers, smooth transitions)
- **Typography**: Editorial mix (Playfair Display serif headlines + Inter sans-serif body)
- **Layout**: Single-page scroll
- **Tech stack**: Next.js + Tailwind CSS + Framer Motion → static export → GitHub Pages
- **Domain**: flowsurge.ai
- **Analytics**: Google Analytics
- **Brand colors (from logo)**: Dark blue #10346e → Teal #00a896 / #00d4ba

### Color Palette

| Role              | Color               | Notes                                  |
|-------------------|---------------------|----------------------------------------|
| Hero BG           | `#0B1628`           | Deep navy (not pure black)             |
| Mid sections      | `#0F2035`           | Slightly lighter navy                  |
| Transition zone   | `#E8EDF2`           | Cool light gray                        |
| Light sections    | `#F6F8FA`           | Soft off-white                         |
| Primary accent    | `#00a896`           | Brand teal                             |
| Accent gradient   | `#10346e → #00d4ba` | Brand gradient (blue → teal)           |
| Text (on dark)    | `#E6EDF5`           | Warm white                             |
| Text (on light)   | `#0B1628`           | Deep navy                              |
| Muted text (dark) | `#6B8299`           | Slate blue                             |
| Muted text (light)| `#5A7085`           | Muted navy                             |

---

## 2. Site Structure ✅

```
┌─────────────────────────────────────────────┐
│  NAV: Logo ─── [Book a Demo] btn            │  Sticky, transparent → solid on scroll
├─────────────────────────────────────────────┤
│                                             │
│              HERO (dark bg)                 │  Section A
│                                             │
├─────────────────────────────────────────────┤
│         SOLUTION PILLARS (transition bg)    │  Section B
├─────────────────────────────────────────────┤
│         SOCIAL PROOF / METRICS (light bg)   │  Section C
├─────────────────────────────────────────────┤
│         FINAL CTA + FORM (accent gradient)  │  Section D
├─────────────────────────────────────────────┤
│              FOOTER (dark bg)               │  Section E
└─────────────────────────────────────────────┘
```

---

## 3. Content — Section by Section ✅

### Section A: Hero

**Headline:**
> Get *more patients* — Increase revenue.

**Subheadline:**
> AI-powered lead automation for dental specialists and oral surgeons. More patients. Less leakage. Optimized operations.

**CTA:** "Book a Demo" → scrolls to Section D form

---

### Section B: Solution Pillars — 3 Cards

**Pillar 1: Every Lead, Followed Up**
> Engage every referral and inquiry quickly and diligently. Eliminate production leakage — diligently track unscheduled treatments, pending consults, and engage patients automatically.

**Pillar 2: Free Your Team for What Matters**
> Automate scheduling, confirmations, and routine patient communication. Your staff focuses on high-value work — in-office patient care and case acceptance.

**Pillar 3: Grow Your Practice with Data**
> Systematically track your operations and nurture your partner provider network with detailed reports and AI-powered analytics. Actionable insights that help you grow your business.

---

### Section C: Social Proof

**Metrics row (3 big numbers):**
- **30%** increase in patients
- **25%** increase in production
- **0** missed follow-ups

**Trust statement:**
> Trusted by orthodontists, periodontists, endodontists, prosthodontists, and oral surgeons every day.

---

### Section D: Final CTA + Demo Form

**Headline:**
> Ready to stop losing patients?

**Subtext:**
> Book a 15-minute demo and see how FlowSurge AI can grow your specialist practice.

**Inline form fields:**
- Name
- Email
- Phone Number
- [Submit / Book a Demo] button

---

### Section E: Footer

- FlowSurge AI logo (light variant on dark bg)
- Nav links: Solution, Results, Book a Demo
- Legal: Privacy Policy | Terms of Service | SMS Terms (separate themed pages)
- Contact info
- Social links

---

## 4. Additional Pages

- **Privacy Policy** — rethemed from existing placeholder site
- **Terms of Service** — rethemed from existing placeholder site
- **SMS Terms** — rethemed from existing placeholder site

---

## 5. Assets Available

- Logo variants: `/Users/arkulkarni/Code/brand-assets/`
  - `main-logo-dark-optimized.svg` (light text, for dark backgrounds)
  - `main-logo-light-optimized.svg` (dark text, for light backgrounds)
  - `favicon.svg`
  - `icon-dark.svg` / `icon-light.svg`
