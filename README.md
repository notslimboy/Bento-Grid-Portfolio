# Bento Grid Portfolio - Raka Arya Pratama

An interactive, responsive portfolio website built with a Sci-Fi Space OS / Retro-Futuristic Hologram theme. Developed using React, TypeScript, Vite, TailwindCSS, and Framer Motion.

---

## How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   The application will run locally at `http://localhost:5173/` (or an alternative port like `http://localhost:5174/`).

3. **Build for Production:**
   ```bash
   npm run build
   ```
   The production-ready build files will be generated in the `dist/` directory.

---

## Manual Content Editing Guide (For User)

All static content has been cleanly decoupled from the UI logic. You can edit, add, or remove portfolio contents manually without breaking the page layout.

### 1. Modifying Project Data (Meowquest, Chocolatos, etc.)
All details, slide assets, links, and descriptions for projects are stored in a single data file:
- **File:** [src/data/projects.ts](file:///Users/notslimboy/Portfolio%20Webiste%20Bento%20Grid/src/data/projects.ts)
- **Line Ranges (Line Numbers):**
  - **Meowquest:** Lines `74 - 96`
  - **Chocolatos X-Quest:** Lines `99 - 124`
  - **Momogi Roblox:** Lines `127 - 151`
  - **Colostream:** Lines `154 - 178`
  - **Kocheng:** Lines `181 - 205`
  - **Chocolatos TinyTan:** Lines `208 - 232`
  - **Gery Pasta:** Lines `235 - 259`
  - **Tarik Tap-tap:** Lines `262 - 286`
  - **Water Buoyancy:** Lines `289 - 313`
  - **Legend of Learning:** Lines `316 - 340`
  - **New Project Template (Copy-paste):** Lines `343 - 373`

*Tips for editing slide media in projects.ts:*
- To use a static gradient background: use `color: "from-color to-color"`
- To use an image: use `imageUrl: "https://link.com/image.jpg"`
- To use a video: use `videoUrl: "https://link.com/video.mp4"` (will auto-play & loop)

### 2. Customizing Project Cards Layout (Right Column)
To edit how individual project cards look on the main page (padding, margins, font sizes):
- **File:** [src/components/cards/project-card.tsx](file:///Users/notslimboy/Portfolio%20Webiste%20Bento%20Grid/src/components/cards/project-card.tsx)

### 3. Modifying Project Detail Modal (Pop-up hologram)
To adjust the holographic modal popup layout, mission objectives lists, or action links layout:
- **File:** [src/components/project-detail-modal.tsx](file:///Users/notslimboy/Portfolio%20Webiste%20Bento%20Grid/src/components/project-detail-modal.tsx)

### 4. Editing Profile & Bio (Left Column)
To edit your introduction paragraph, name header, Available for Hire badge, avatar, or Get in Touch button:
- **File:** [src/components/cards/profile-card.tsx](file:///Users/notslimboy/Portfolio%20Webiste%20Bento%20Grid/src/components/cards/profile-card.tsx)

### 5. Editing Career Timeline
To modify the short summary list of your experiences:
- **File:** [src/components/cards/career-card.tsx](file:///Users/notslimboy/Portfolio%20Webiste%20Bento%20Grid/src/components/cards/career-card.tsx)
  *(Note: To edit the detailed achievements drawer contents that pop out, edit `src/components/career-drawer.tsx`)*

### 6. Changing Toolkit Badge Items
To add or remove skills badges (like Unity, Roblox Studio, etc.):
- **File:** [src/components/cards/toolkit-card.tsx](file:///Users/notslimboy/Portfolio%20Webiste%20Bento%20Grid/src/components/cards/toolkit-card.tsx)

### 7. Customizing Social Media Profiles
To change urls or SVG paths of social icons (LinkedIn, Itch.io, Discord, Steam, Email):
- **File:** [src/components/cards/profiles-card.tsx](file:///Users/notslimboy/Portfolio%20Webiste%20Bento%20Grid/src/components/cards/profiles-card.tsx)

---

## Technical Architecture Guide (For Other AIs)
For other AI assistants who wish to read or extend this codebase, a comprehensive technical guide explaining state flows, 3D hologram math, and bento layout constraints is available at:
- **File:** `_forAI/technical_context.md`
