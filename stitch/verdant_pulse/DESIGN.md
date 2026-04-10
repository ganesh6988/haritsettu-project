# Design System Document: The Organic Synthesis

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Ecosystem"**

This design system moves away from the sterile, "industrial" feel of traditional waste management software. Instead, it adopts a high-end editorial approach that mirrors the organic efficiency of nature. We are not just building a utility; we are building a movement.

The "Digital Ecosystem" philosophy relies on **intentional asymmetry** and **breathable white space**. We break the "template" look by layering elements like herbarium specimens—overlapping cards, varying heights, and high-contrast typography scales that make data feel like a curated narrative rather than a spreadsheet. The goal is to make "waste management" feel as premium and essential as a high-end wellness brand.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in a "Forest-to-Mint" spectrum, designed to feel lush yet professional.

### The Palette (Material Design Tokens)
- **Primary (Forest):** `#154212` — Use for authoritative elements and deep-contrast backgrounds.
- **Secondary (Leaf):** `#326b00` — Use for action-oriented highlights.
- **Tertiary (Deep Teal/Mint):** `#1a3f3f` — Use for sophisticated data differentiation.
- **Neutral Backgrounds:** `surface` (`#f8faf8`) to `surface-container-highest` (`#e1e3e1`).

### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions.
*   *Implementation:* A navigation sidebar should not have a right-border; it should be `surface-container-low` sitting against a `surface` main content area.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of "Fine Paper."
- **Base:** `surface` (`#f8faf8`)
- **Secondary Sections:** `surface-container-low` (`#f2f4f2`)
- **Interactive Cards:** `surface-container-lowest` (`#ffffff`) — This creates a "lifted" effect without a shadow.

### The "Glass & Gradient" Rule
To add soul, use **Signature Textures**:
- **CTAs:** Use a subtle linear gradient from `primary` (#154212) to `primary-container` (#2d5a27).
- **Floating Overlays:** Use `surface-container-lowest` with a 70% opacity and a `24px` backdrop-blur to create a "Frosted Leaf" effect.

---

## 3. Typography: Editorial Authority
We use a dual-sans-serif pairing to balance high-end character with functional legibility.

- **Display & Headlines (Manrope):** This is our "Editorial" voice. Manrope’s geometric yet warm curves suggest modernity and efficiency. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero impact.
- **Body & Labels (Public Sans):** This is our "Functional" voice. Based on US government standards, it conveys trust, neutrality, and supreme readability at small sizes for data-heavy waste metrics.

**Hierarchy Goal:** Large, bold headlines in `primary` paired with generous line-heights in `body-lg` (1.6) to ensure the interface never feels "cramped."

---

## 4. Elevation & Depth: Tonal Layering
We achieve hierarchy through "Stacking" rather than "Boxing."

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This provides a soft, natural lift.
- **Ambient Shadows:** When a float is required (e.g., a "New Collection" FAB), use: `box-shadow: 0 12px 32px -4px rgba(21, 66, 18, 0.08)`. Note the tint: the shadow is a low-opacity Forest Green, not grey.
- **The "Ghost Border":** If accessibility requires a stroke, use `outline-variant` at 15% opacity. Never use 100% opaque lines.
- **Glassmorphism:** Use for "Smart Notification" toasts. It allows the green hues of the dashboard to bleed through, keeping the experience integrated.

---

## 5. Components

### Buttons
- **Primary:** Gradient-filled (Forest to Leaf), `xl` (1.5rem) rounded corners. No border.
- **Secondary:** `surface-container-high` background with `on-surface` text.
- **Tertiary:** Text-only with an underline that appears on hover using the `secondary` color.

### Waste Category Chips
- Use the `xl` (full) roundedness.
- **Bio-waste:** `secondary-container` background with `on-secondary-container` text.
- **Plastic/Recyclable:** `tertiary-container` background.
- *Layout:* Chips should have a 12px horizontal gap to maintain the "Ecosystem" breathing room.

### Input Fields
- Avoid "box" inputs. Use a "Soft Inset" style: `surface-container-highest` background with a `none` border and `md` (0.75rem) corners.
- Focus state: A 2px `primary` "Ghost Border" (20% opacity).

### Cards & Lists
- **No Dividers:** Forbid the use of horizontal rules. Separate list items using `16px` of vertical white space or alternating `surface-container-low` backgrounds.
- **The "Impact Card":** Use asymmetric padding (e.g., `padding: 40px 32px 32px 32px`) to create a bespoke, non-grid feel for primary metrics.

### Contextual Components: "The Eco-Tracker"
- **The Growth Progress Bar:** Instead of a flat bar, use a tapered gradient line that grows in thickness as goals are met.
- **Sustainability Badges:** Circular, glassmorphic elements that overlap the corners of data cards.

---

## 6. Do’s and Don’ts

### Do
- **Do** use `display-lg` typography to break up long data sets.
- **Do** use organic, rounded corners (`xl` and `lg`) to mimic natural forms.
- **Do** allow content to overflow horizontally in carousels to suggest an "endless" ecosystem.
- **Do** use the `on-surface-variant` for helper text to maintain a soft contrast ratio.

### Don’t
- **Don't** use 1px black or grey borders. They feel "mechanical."
- **Don't** use pure `#000000` for text. Use `on-surface` (#191c1b) for a softer, premium feel.
- **Don't** use standard Material Design drop shadows. Use the tinted Ambient Shadows defined in Section 4.
- **Don't** cram icons together. Give each waste category icon a "protective" buffer of at least 12px.