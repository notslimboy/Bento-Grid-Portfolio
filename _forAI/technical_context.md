# Technical Context & Architecture Guide (For Other AIs)

This documentation is written specifically for future AI assistants to understand the codebase architecture, layout constraints, state management flow, and visual physics of this portfolio project instantly.

---

## 1. Directory Structure & Modular Breakdown

The project has been refactored from a monolithic app into the following clean, modular files:

- `src/App.tsx`: Main UI entry point. Manages global page state (loading, modal overlays, drawer status), page-entrance animations, header/footer layout, and Bento Columns.
- `src/data/projects.ts`: Holds the TypeScript interfaces (`Project`, `SlideItem`) and the static array `projectsData`. This is the single source of truth for all projects and slides.
- `src/lib/badge-styles.ts`: Modular utility helper that dynamically resolves custom Tailwind CSS styles for tech-stack badges based on string pattern matching (e.g., "Unity" returns teal/cyan styles, "C#" returns purple/fuchsia styles, etc).
- `src/components/cards/`:
  - `profile-card.tsx`: Renders the main bio, squircle avatar, availability indicators, and email links.
  - `career-card.tsx`: Renders the vertical timeline stack and triggers the career drawer.
  - `toolkit-card.tsx`: Renders skill list items as custom styled badges.
  - `profiles-card.tsx`: Renders a grid-row containing 5 distinct social media buttons with strict dimension constraints.
  - `project-card.tsx`: Renders dynamic project details and slideshows on the right column.
- `src/components/project-detail-modal.tsx`: Manages the holographic 3D modal overlay.
- `src/components/career-drawer.tsx`: Manages the side drawer detailing career achievements.
- `src/components/boot-screen.tsx`: Handles the Sci-Fi loading telemetries on initial page visit.

---

## 2. Bento Grid & Layout Constraints

The application is structured as a two-column Bento Grid:

```
+-------------------------------------------------------------+
|                          HEADER                             |
+------------------------------+------------------------------+
|          LEFT COLUMN         |         RIGHT COLUMN         |
|   (Fixed Width: 340px-380px) |     (Dynamic Grid Flow)      |
|                              |                              |
| +--------------------------+ | +--------------------------+ |
| |       ProfileCard        | | |       ProjectCard 1      | |
| +--------------------------+ | +--------------------------+ |
| |       CareerCard         | | |       ProjectCard 2      | |
| +--------------------------+ | +--------------------------+ |
| |       ToolkitCard        | | |       ProjectCard 3      | |
| +--------------------------+ | +--------------------------+ |
| |       ProfilesCard       | | |       ProjectCard 4      | |
| +--------------------------+ | +--------------------------+ |
+------------------------------+------------------------------+
|                          FOOTER                             |
+-------------------------------------------------------------+
```

### Left Column Rules (Info Column):
- **Fixed Width:** The column is locked on desktop resolutions using `lg:w-[340px] xl:w-[380px] shrink-0`.
- **Vertical Alignment:** Due to the narrow column width, all cards in the left column must stack vertically (`flex-col`). Avoid adding horizontal multi-column layouts inside left cards to prevent text truncation issues.
- **Card Order:** The card sequence must strictly remain: **Profile** $\rightarrow$ **Career History** $\rightarrow$ **Toolkit** $\rightarrow$ **Profiles**.

### Right Column Rules (Projects Column):
- **Dynamic Grid:** Renders dynamic cards by mapping over `projectsData` inside a `grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6` element.
- **Project Cards Only:** Only project portfolios should go in this column. Do not put non-project cards here.

---

## 3. Visual FX & Custom State Interactions

### A. Dynamic 3D Hologram Origin Mapping
Clicking a project card triggers a custom holographic scale-up modal that originates from the exact clicked coordinates (acting like a physical laser projection).
- **Logika:** The `handleOpenProject` handler in `App.tsx` calculates the clicked card's center point offset relative to the screen viewport center:
  ```typescript
  const rect = e.currentTarget.getBoundingClientRect();
  const cardCenterX = rect.left + rect.width / 2;
  const cardCenterY = rect.top + rect.height / 2;
  const viewportCenterX = window.innerWidth / 2;
  const viewportCenterY = window.innerHeight / 2;
  
  setOrigin({
    x: cardCenterX - viewportCenterX,
    y: cardCenterY - viewportCenterY
  });
  ```
- This `origin` state is passed down to `<ProjectDetailModal selectedProject={selectedProject} origin={origin} ... />` and mapped in Framer Motion's `initial` coordinates to perform the flicker/scale-in animations.

### B. Overflow Prevention
- To avoid issues where social media links stretch vertically in WebKit-based browsers (which previously caused hover issues and triggered tooltips on cards above it), all anchors in `ProfilesCard` are constrained to a fixed layout of `w-11 h-11 shrink-0` inside a centered flex grid container.

### C. Aesthetic System
- **Colors:** Deep midnight indigo `#0B0F19` background with slate indigo `#161B2A` card layers. Neon cyan & electric purple are used for highlights.
- **Stagger Animation:** Stagger children variants are used on page entry to smoothly spring-slide each card into view from bottom-up after loading screen fades.
