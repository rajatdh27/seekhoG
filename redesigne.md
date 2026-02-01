# Stack Section Redesign Guide

This document outlines the components, structure, and principles used to redesign the `/app/stack` section. It serves as a template for redesigning other data structure sections to ensure a consistent, modern, and interactive user experience.

## 1. Page Structure (`page.jsx`)

The main page for the section is completely overhauled to be a central, visually engaging hub.

- **Root Component:** The page is wrapped in a main `div` with a dark background (`bg-[#020617]`) and a selection color (e.g., `selection:bg-purple-500/30`).
- **Scroll Progress Bar:** A `motion.div` is fixed to the top of the page to show scroll progress. It uses `useScroll` and `useSpring` from `framer-motion`.
- **Background Effects:** A futuristic background mesh and a blurred gradient effect are added for visual depth.
- **Hero Section:** A large, animated hero section introduces the data structure with an icon, title, description, and call-to-action buttons.
- **Main Content Layout:**
    - A two-column layout is used (`flex-col lg:flex-row`).
    - **SidebarTOC (Left):** A sticky sidebar contains the table of contents. It uses a glassmorphism effect (`backdrop-blur-xl`) and is styled to match the section's theme color.
    - **Content Sections (Right):** The main content area where section components are rendered.
- **Section Loading:**
    - Sections are defined in a `sections` array, which maps an ID, title, component, and icon.
    - The first section (`Intro`) is eager-loaded for fast initial display.
    - All other sections are lazy-loaded using `React.lazy` and wrapped in `React.Suspense` with a `SectionSkeleton` fallback to prevent jank.
    - Each section is wrapped in a `motion.section` for a "slide-in" animation as the user scrolls.
- **Next Section Link:** At the bottom of the page, a large, styled link card guides the user to the next logical section in the curriculum. This is added directly to the `page.jsx` file.

## 2. Core UI Components

These are the building blocks for the new design. They are located in `/app/components/common/`.

### `PerspectiveCard.jsx`
- This is the main wrapper for each content section.
- It provides a 3D perspective effect on mouse-over using `framer-motion`.
- It accepts a `color` prop (e.g., "purple", "emerald") which themes the card's glow effect.
- **Usage:** `<PerspectiveCard color="purple">{...content}</PerspectiveCard>`

### `CodeBlock.jsx`
- This component is used for displaying all code snippets.
- It uses `react-syntax-highlighter` for proper syntax highlighting with a dark theme.
- It includes a title bar with the language name and a "Copy" button.
- **Usage:** `<CodeBlock code={codeString} language="javascript" title="Example" />`

### `SidebarTOC.jsx`
- A reusable Table of Contents component.
- Takes a `sections` array, `activeSection`, `onSectionClick` handler, and a `color` prop for theming.

## 3. Section Component Design Principles

Each individual section (e.g., `StackIntro.jsx`, `StackComplexity.jsx`) was rewritten following these principles:

- **Contained in `PerspectiveCard`:** Every section component's content is wrapped in `<PerspectiveCard>`.
- **Clear Headers:** Each section starts with a clear, large-font header that includes an icon from `lucide-react`.
- **Data-Driven Content:** For lists of items (like applications, problems, or patterns), the data is stored in a local array of objects and then rendered using `.map()`.
- **Card-Based Layouts:** Information is broken down into smaller, styled cards with borders, shadows, and background colors to create visual separation and hierarchy.
- **Interactive Elements:** Where applicable, interactive elements are used. For example, the interactive LIFO demo in `StackIntro.jsx` or the filtering UI in `StackProblems.jsx`.
- **Animation:** `framer-motion` is used extensively for:
    - `AnimatePresence` for components that enter and exit (e.g., switching between views).
    - `whileInView` for components that animate as they scroll into view.
    - `layout` prop on `motion.div` for smooth animated grid filtering.

## 4. Redesign Steps for a New Section (e.g., "Queue")

1.  **Create `page.jsx`:** Copy `/app/stack/page.jsx` to `/app/queue/page.jsx`.
    - Update the imported components to point to the new queue sections.
    - Update the `sections` array with queue-specific titles, components, and icons.
    - Change the theme color for the progress bar, hero section, and `SidebarTOC` (e.g., from "purple" to "blue").
2.  **Rewrite Section Components:** For each section file in `/app/queue/components/sections/`:
    - **Read Original Content:** Carefully read the existing content that needs to be preserved.
    - **Wrap in `PerspectiveCard`:** Start the new component by returning a `<PerspectiveCard>`.
    - **Re-integrate Content:** Re-build the section using the new design principles:
        - Use styled cards for different information blocks.
        - Use the `CodeBlock` component for all code.
        - Add icons and clear headers.
        - If there's an opportunity for interactivity (like a visualizer), build it using `framer-motion`.
    - **Verify Content:** Meticulously check that all original text, data, and code has been included in the new design.
3.  **Add Next Section Link:** At the bottom of `page.jsx`, add the "Next Section" `motion.div`, updating the text, link `href`, and button color to point to the next logical data structure (e.g., from Queue to Tree).
4.  **Install Dependencies:** If any new libraries are introduced, make sure to install them using `npm install`.
5.  **Test:** Run the development server (`npm run dev`) and thoroughly test the new section. Run the build command (`npm run build`) as a final verification step.
