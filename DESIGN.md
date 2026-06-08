# Design System: Portfolio Bento Grid (Dark Indigo Edition)

This design system is generated and optimized using the **UI/UX Pro Max Skill** to ensure a mathematically balanced, highly responsive, and premium Apple-style bento grid layout without any empty gaps or misaligned tiles.

## 1. Visual Theme & Atmosphere
A modern, energetic, and highly polished bento-grid layout. The mood is sleek, professional, and dark-mode native. It utilizes sharp contrast, rich indigo and purple gradients, micro-animations, and subtle glowing shadows to highlight portfolio elements.

## 2. Color Palette & HSL Tokens
- **Deep Midnight Indigo (`#0B0F19` / `hsl(224, 39%, 7%)`):** Main page background.
- **Soft Indigo Slate (`#161B2A` / `hsl(223, 31%, 13%)`):** Bento card background, providing subtle elevation.
- **Vibrant Indigo (`#6366F1` / `hsl(239, 84%, 67%)`):** Primary accent (CTA backgrounds, active states, border glows).
- **Electric Purple (`#8B5CF6` / `hsl(263, 90%, 66%)`):** Secondary accent (interactive graphs, glowing status indicators, linear gradients).
- **Frost White (`#F8FAFC` / `hsl(210, 40%, 98%)`):** Primary text and high-visibility content.
- **Muted Slate (`#94A3B8` / `hsl(215, 20%, 65%)`):** Secondary text and description labels.

## 3. Typography Rules
- **Headings (Space Grotesk):** Used for all H1, H2, and title elements. Bold, geometric, and artistic.
- **Body Text (Archivo):** Used for description labels, tags, and small text. Clean and highly legible.
- **CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

## 4. Grid Geometry & Layout Matrix
To eliminate empty gaps ("space") and ensure a clean, solid, and neat layout, the grid cells must match a mathematically perfect **16-cell area** mapped across 4 columns and 4 rows (4x4 = 16) on desktop screens.

### Grid Spanning Map (Desktop 4-Columns)
| Card | Role / Content | Span Width (cols) | Span Height (rows) | Area (cells) | Coordinates (Col, Row) |
|------|----------------|-------------------|--------------------|--------------|------------------------|
| **Card 1** | Hero / Profile | 2 columns | 2 rows | 4 | Cols 1-2, Rows 1-2 |
| **Card 7** | Blueprint Canvas | 2 columns | 2 rows | 4 | Cols 3-4, Rows 1-2 |
| **Card 5** | Activity / Chart | 2 columns | 1 row | 2 | Cols 1-2, Row 3 |
| **Card 4** | Featured Project | 1 column | 2 rows | 2 | Col 3, Rows 3-4 |
| **Card 2** | Freelance Status | 1 column | 1 row | 1 | Col 4, Row 3 |
| **Card 3** | Tech Stack Tags | 1 column | 1 row | 1 | Col 1, Row 4 |
| **Card 6** | Social Links | 1 column | 1 row | 1 | Col 2, Row 4 |
| **Card 8** | Contact Email | 1 column | 1 row | 1 | Col 4, Row 4 |
| **Total** | **8 Cards** | - | - | **16 Cells** | **Perfect 4x4 Matrix** |

### Responsive Reflow Strategy
- **Desktop (>= 1024px):** 4 columns, auto-rows of 180px, gap of 24px.
- **Tablet (>= 768px):** 2 columns, auto-rows of 180px, gap of 20px. All `col-span-2` remain, `col-span-1` stack.
- **Mobile (< 768px):** 1 column, auto-rows of 160px, gap of 16px. All cards default to `col-span-1` and `row-span-1` or `row-span-2` to maintain aspect ratios.

## 5. Micro-Animations & Effects
- **Card Hover:** Scale `1.02x` with a transition of `cubic-bezier(0.4, 0, 0.2, 1)` at `300ms`. Border transitions from `opacity 0.1` to `opacity 0.3` indigo glow, and a diffuse `box-shadow` of indigo/purple expands.
- **Status Indicator:** Green dot pulsing using an outer glowing rings ping animation.
- **Blueprint Canvas:** Floating neon purple line overlays a 24px grid dot pattern.
- **Shimmer Loaders:** Linear gradient shimmer scrolling infinitely to represent empty content.

## 6. Pre-Delivery Quality Checklist
- [x] No emoji icons (Use custom vector SVGs/Lucide)
- [x] All clickable elements have `cursor-pointer`
- [x] Zero empty spaces or unbalanced tiles in the grid matrix
- [x] Light-translucent borders `border-indigo-500/10` visible on dark backdrop
- [x] Fully responsive layout tested at mobile, tablet, and desktop viewports
