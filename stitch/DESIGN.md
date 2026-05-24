---
name: FieldLens Audit Q9M7
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4f5e7e'
  primary: '#041632'
  on-primary: '#ffffff'
  primary-container: '#1b2b48'
  on-primary-container: '#8393b5'
  inverse-primary: '#b7c7eb'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#001b10'
  on-tertiary: '#ffffff'
  tertiary-container: '#003220'
  on-tertiary-container: '#27a577'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b7c7eb'
  on-primary-fixed: '#091b37'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for high-stakes field inspections and industrial auditing. The brand personality is **utilitarian, precise, and authoritative**, prioritizing functional efficiency over aesthetic flair. It is designed for professionals who require a high-performance interface that remains legible in varied lighting conditions, from bright outdoor sites to dimly lit facilities.

The visual style is **Corporate / Modern** with a lean towards **Technical Minimalism**. It utilizes a structured, data-dense approach to ensure that critical information—such as compliance status, structural integrity, and safety risks—is immediately scannable. The emotional response is one of calm reliability; the UI acts as a silent, robust partner in the field, reducing cognitive load through systematic organization and high-contrast feedback loops.

## Colors

The palette is anchored by **Deep Navy (Primary)** to establish authority and professional trust. **Slate (Secondary)** provides a neutral foundation for UI chrome and secondary information, preventing visual fatigue during long inspection sessions.

Functional color is used strictly for status and data state:
- **Emerald Green (Tertiary):** Pass, compliant, safe, or completed.
- **Red:** Fail, non-compliant, or high-risk hazard.
- **Amber:** Warning, pending review, or moderate risk.
- **Blue:** Neutral information, hyperlinks, or active selection.

The background uses a subtle **Off-White/Cool Gray** to reduce screen glare while maintaining high contrast with the primary navy text.

## Typography

This design system utilizes **Hanken Grotesk** for its clean, sharp, and contemporary grotesque characteristics, providing excellent legibility in high-density data views. For technical metadata, IDs, and timestamps, **JetBrains Mono** is employed to provide a clear distinction between narrative content and technical data.

Typography is scaled to maintain hierarchy even when space is constrained. High-density tables and forms use `body-md` as the default size to maximize information density without sacrificing readability. Labels for technical data points utilize all-caps monospaced styling to ensure character clarity (e.g., distinguishing "0" from "O").

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. For data-heavy inspection views, a 12-column grid is used on desktop with fixed gutters to ensure alignment of input fields and status indicators.

- **Desktop (1280px+):** 12 columns, 16px gutters, 32px margins. Sidebars for navigation and property panels are fixed width (240px and 320px respectively).
- **Tablet (768px - 1279px):** 8 columns, 16px gutters, 24px margins. Panels collapse into drawers to focus on the primary audit list.
- **Mobile (< 767px):** 4 columns, 8px gutters, 16px margins. Content reflows into a single column with vertically stacked form elements.

The spacing rhythm is built on a **4px baseline**, ensuring that even in dense layouts, the relationships between elements remain logical and structured.

## Elevation & Depth

This design system avoids heavy shadows to maintain a "flat-professional" aesthetic that performs well on outdoor screens. Depth is communicated primarily through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Level 0 (Background):** Neutral #F8FAFC. Used for the main application canvas.
- **Surface Level 1 (Cards/Containers):** Pure White #FFFFFF. Features a 1px solid border in Slate-200 (#E2E8F0).
- **Surface Level 2 (Modals/Popovers):** Pure White with a subtle, tight shadow (0 4px 6px -1px rgb(0 0 0 / 0.1)) to provide focus.
- **Active States:** Elements being edited or focused use a 2px primary navy border rather than a shadow.

The use of color-coded "edge-accents" (3px solid bars on the left of cards) indicates status levels (Red for Fail, Green for Pass) without requiring elevation shifts.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle modern touch that softens the industrial nature of the data while maintaining the precision of a professional tool.

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Cards & Major Containers:** 8px (0.5rem) corner radius.
- **Status Chips:** 100px (Pill-shaped) to distinguish them from actionable buttons.

Corners are never sharp (0px) to prevent the UI from feeling aggressive, but never overly rounded (3+) to ensure no space is wasted in high-density data tables.

## Components

### Buttons
Primary buttons are solid Navy (#1B2B48) with white text. Secondary buttons use the Slate-200 border with Slate-700 text. Use a height of 40px for standard field use to ensure a sufficient touch target.

### Input Fields
Fields must have a persistent label in `label-md` (JetBrains Mono). The input area features a 1px border. On focus, the border increases to 2px Primary Navy. Validation errors must be displayed immediately below the field in Red with a 12px icon.

### Data Tables
The core of the audit experience. Rows must have a hover state of Slate-50. Row height is fixed at 48px. Cells containing status (Pass/Fail) use the status-colored edge accent.

### Chips
Used for tags and categories. Backgrounds are low-opacity versions of the status colors (e.g., 10% Emerald for a "Safe" chip) with full-opacity text to ensure contrast.

### Action Bar
A sticky component at the bottom of the screen on mobile or the top of the pane on desktop, housing primary audit actions like "Sync," "Finalize," or "Report Incident." This component uses Surface Level 2 for visual priority.