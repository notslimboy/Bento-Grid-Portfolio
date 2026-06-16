# Technical Context & Architecture Guide (For Other AIs)

This documentation is written specifically for future AI assistants to understand the codebase architecture, layout constraints, state management flow, and visual physics of this portfolio project instantly.

---

## 1. Directory Structure & Modular Breakdown

The project has been refactored from a monolithic app into the following clean, modular files:

- `src/App.tsx`: Main UI entry point. Manages global page state (loading, modal overlays, drawer status), page-entrance animations, header/footer layout, tab navigation (Home / Projects / Gallery), and Bento Columns.
- `src/data/projects.ts`: Holds the TypeScript interfaces (`Project`, `SlideItem`) and the static array `projectsData`. This is the **single source of truth** for all projects and slides.
- `src/data/gallery.ts`: Holds the `GalleryItem` interface and the static array `galleryData`. This is the **single source of truth** for all gallery video entries. Video URLs point to `public/gallery/*.mp4` files.
- `src/lib/badge-styles.ts`: Modular utility helper that dynamically resolves custom Tailwind CSS styles for tech-stack badges based on string pattern matching (e.g., "Unity" returns teal/cyan styles, "C#" returns purple/fuchsia styles, etc).
- `src/components/cards/`:
  - `profile-card.tsx`: Renders the main bio, squircle avatar, availability indicators, and email links.
  - `career-card.tsx`: Renders the vertical timeline stack and triggers the career drawer.
  - `toolkit-card.tsx`: Renders skill list items as custom styled badges.
  - `profiles-card.tsx`: Renders a grid-row containing 5 distinct social media buttons with strict dimension constraints.
  - `project-card.tsx`: Renders dynamic project details and slideshows on the right column.
  - `gallery-card.tsx`: Renders individual gallery video cards in a `aspect-[9/16]` portrait format. Videos auto-play, loop, and display in full color (no grayscale). Includes a halftone overlay, gradient bottom fade, and a pulse "STREAMING" indicator when a video is present.
- `src/components/about-page.tsx`: Full-page "About" layout. Consists of 5 custom sections: Profile Hero (with colored avatar, socials, CV/Email buttons), Career History (rendering experience timeline), Skills Loadout, Endorsements (testimonial slider), and Connect Card.
- `src/components/project-slider.tsx`: Manages the slideshow inside each project card. Supports three slide media types: `color` gradient (fallback), `imageUrl`, and `videoUrl`. Has smart single-slide behavior (see Section 4).
- `src/components/project-detail-modal.tsx`: Manages the holographic 3D modal overlay.
- `src/components/boot-screen.tsx`: Handles the Sci-Fi loading telemetries on initial page visit.
- `src/components/scramble-text.tsx`: A text animation component that scrambles characters before resolving to the target text. Supports `triggerOn="scroll"` to fire only when the element enters the viewport.
- `public/projects/`: Contains image (`.jpg`, `.png`, `.gif`) and video (`.mp4`) files for project slides. Referenced using root-relative paths like `/projects/filename.ext`.
- `public/gallery/`: Contains `.mp4` video files for the gallery tab. Referenced using root-relative paths like `/gallery/filename.mp4`.
- `_originals_backup/`: Contains original backup media kept outside `public/` so it does not ship in production builds/deployments.

---

## 2. Bento Grid & Layout Constraints

The application is structured as a two-column Bento Grid when in the **Home** tab:

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
| |       ProfilesCard       | | |       ProjectCard 3      | |
| +--------------------------+ | +--------------------------+ |
| |       ToolkitCard        | | |       ProjectCard 4      | |
| +--------------------------+ | +--------------------------+ |
| | Interests / 3D / Reviews | | |       ProjectCard N      | |
| +--------------------------+ | +--------------------------+ |
| |       ConnectCard        | | |                          | |
| +--------------------------+ | +--------------------------+ |
+------------------------------+------------------------------+
|                          FOOTER                             |
+-------------------------------------------------------------+
```

The **Projects** and **Gallery** tabs replace the right column area (or the whole content area) with their own grid layouts. These are separate views toggled by `activeTab` state in `App.tsx`.

### Left Column Rules (Info Column):
- **Fixed Width:** The column is locked on desktop resolutions using `lg:w-[340px] xl:w-[380px] shrink-0`.
- **Vertical Alignment:** Due to the narrow column width, all cards in the left column must stack vertically (`flex-col`). Avoid adding horizontal multi-column layouts inside left cards to prevent text truncation issues.
- **Card Order:** The current sequence is **Profile** → **Career History** → **Profiles** → **Toolkit** → **Interests** → **Model Viewer** → **Testimonials** → **Connect**.

### Right Column Rules (Projects Column):
- **Dynamic Grid:** Renders dynamic cards by mapping over `projectsData` inside a `grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6` element.
- **Project Cards Only:** Only project portfolios should go in this column. Do not put non-project cards here.

### Gallery Tab Rules:
- **Grid Layout:** `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6`.
- **Portrait Aspect Ratio:** Each `GalleryCard` uses `aspect-[9/16]` to match a vertical mobile video format.
- **Data Source:** `galleryData` from `src/data/gallery.ts`. Each item has `id`, `title`, `subtitle`, `coordinate`, and `videoUrl`.
- **Video Display:** Videos display in full color by default (no grayscale filters). On hover, the card slightly scales up the video (`group-hover:scale-102`).

### About Tab Rules:
- **Full Width Layout:** The `about` tab renders the `<AboutPage />` component, which replaces the bento columns with a unified, full-page vertical stack.
- **Section Stack Sequence:** Must strictly render the 5 modular sections in vertical succession:
  1. **Profile Hero:** Displays Raka's coloured avatar (no grayscale), active status, direct social links (LinkedIn, Discord, Itch.io, Email), and download buttons.
  2. **Career History (Timeline):** Displays full career checkpoints via the `<Timeline />` component.
  3. **Skills Loadout:** Formatted as a 3-column classification grid.
  4. **Endorsements:** Renders an interactive, standalone testimonial carousel with custom slider controls.
  5. **Connect Card:** Reuses the `<ConnectCard />` component, styled to span the full page width matching the testimonials container.
- **Base URL Resolution:** Uses `import.meta.env.BASE_URL` (aliased as `base` locally) to dynamically prepend the correct path for all relative visual/video media assets, ensuring correct links inside subfolder deployments (e.g. GitHub Pages).

---

## 3. Data Structures

### `SlideItem` (in `project-slider.tsx`)
```typescript
interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  color: string;       // Tailwind gradient classes — leave empty string "" if using imageUrl or videoUrl
  imageUrl?: string;   // Root-relative path, e.g. "/projects/MyImage.jpg" (also supports .gif)
  videoUrl?: string;   // Root-relative path, e.g. "/projects/MyVideo.mp4"
}
```
Priority fallback: `videoUrl` → `imageUrl` → `color` gradient (plain gradient placeholder with orbit rings).

### `GalleryItem` (in `data/gallery.ts`)
```typescript
interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  videoUrl?: string;   // Root-relative path, e.g. "/gallery/Campaign.mp4"
  coordinate: string;  // Display code shown on card, e.g. "REC-V01"
}
```

---

## 4. `ProjectSlider` — Smart Single-Slide Behavior

The `ProjectSlider` component detects if `slides.length <= 1` and automatically:
- Sets cursor to `cursor-default` (not `cursor-pointer`).
- Disables the `onClick` handler (no tap-to-cycle navigation).
- Hides the `"Slide X of Y"` counter in the top-left.
- Hides the `"Tap to Cycle"` hover overlay.
- Hides the bottom pagination dot indicators.

This allows projects with only one media asset to display cleanly as a static background without any confusing interactive hints.

---

## 5. Visual FX & Custom State Interactions

### A. Dynamic 3D Hologram Origin Mapping
Clicking a project card triggers a custom holographic scale-up modal that originates from the exact clicked coordinates (acting like a physical laser projection).
- **Logic:** The `handleOpenProject` handler in `App.tsx` calculates the clicked card's center point offset relative to the screen viewport center:
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

### C. ScrambleText Viewport Trigger
- `ScrambleText` with `triggerOn="scroll"` listens for `IntersectionObserver` and only starts the scramble animation when the element enters the viewport. This prevents the scramble effect from firing on hidden/off-screen content and ensures text is revealed in its final readable form from the start — it only scrambles→resolves when first scrolled into view.

### D. Aesthetic System
- **Colors:** Deep midnight indigo `#0B0F19` background with slate indigo `#161B2A` card layers. Neon cyan & electric purple are used for highlights. Accent cyan is `text-accent`.
- **Fonts:** `font-bebas` for headings/uppercase display text. `font-mono` for HUD/metadata text. Base body uses Inter or similar sans-serif.
- **Stagger Animation:** Stagger children variants are used on page entry to smoothly spring-slide each card into view from bottom-up after loading screen fades.
- **Gallery Video Display:** Videos in the gallery render in full natural color by default, with a subtle halftone overlay and gradient bottom fade for legibility of text overlays.
- **Avatar Color Rendering:** The pilot profile image (`profileImg`) is rendered in full color by default without any grayscale filter/transition in both the ProfileCard and AboutPage.
- **Arrow CTA Named Groups:** Action buttons use nested Tailwind group classes (e.g. `group/btn` on the anchor and `group-hover/btn` on the arrow icon) to prevent animations from firing prematurely when hovering unrelated regions of the parent bento cards.

---

## 6. Asset Mapping Reference

### Projects (`public/projects/`)
| Project ID         | Slide Type  | File(s)                                                    | Cycles? |
|--------------------|-------------|------------------------------------------------------------|---------|
| `chocolatos`       | Image       | `Chocolatos-XQUEST1.jpg`, `XQUEST2.jpg`, `XQUEST3.jpg`    | ✅ Yes  |
| `momogi`           | Video       | `Momogi-Roblox.mp4`                                        | ❌ No   |
| `colostream`       | Image/GIF   | `Colostream.gif`, `Colostream-1.jpg`, `Colostream-2.jpg`  | ✅ Yes  |
| `kocheng`          | Video       | `Kocheng.mp4`                                              | ❌ No   |
| `tinytan`          | Video       | `Chocolatos-TinyTan.mp4`                                   | ❌ No   |
| `gerypasta`        | Video       | `Gery Pasta Boboiboy.mp4`                                  | ❌ No   |
| `tariktap`         | Video       | `Tap-Tap.mp4`                                              | ❌ No   |
| `waterbuoyancy`    | Image       | `Water-Bouyancy.jpg`                                       | ❌ No   |
| `legendlearning`   | Video+Image | `Science-School.mp4`, `ScienceSchool.jpg`, `.png`         | ✅ Yes  |
| `meowquest`        | Gradient    | (no asset — uses color placeholder)                        | ✅ Yes  |
| `gungirlsglory`    | Gradient    | (no asset — uses color placeholder)                        | ✅ Yes  |
| `shanticatering`   | Gradient    | (no asset — uses color placeholder)                        | ✅ Yes  |

### Gallery (`public/gallery/`) — ordered as displayed
| Order | File                  | Title              |
|-------|-----------------------|--------------------|
| 1     | `Iger-Weather.mp4`    | Iger Weather       |
| 2     | `Ariel-GetRill.mp4`   | Ariel GetRill      |
| 3     | `hari-menabung.mp4`   | BRI Hari Menabung  |
| 4     | `Hari-Pahlawan.mp4`   | BRI Hari Pahlawan  |
| 5     | `BRI-LocalFest.mp4`   | BRI LocalFest      |
| 6     | `HUT-BRI.mp4`         | HUT BRI            |
| 7     | `TahunBaru.mp4`       | BRI Tahun Baru     |
| 8     | `Mutant-HI.mp4`       | Mutant HI          |
| 9     | `Mutant-Mandarin.mp4` | Mutant Mandarin    |
| 10    | `Mutant-BlokM.mp4`    | Mutant BLOK M      |
| 11    | `Lemoo-HI.mp4`        | Lemoo              |
| 12    | `So-Good-Nugget.mp4`  | SO Good            |

> Note: `Iger-Showcase.mp4` is intentionally excluded from the gallery.
