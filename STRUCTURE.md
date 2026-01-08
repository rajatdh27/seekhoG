# 📂 Project Structure

## ✅ Clean, Organized Folder Structure

```
my-ds-site/
├── app/
│   ├── array/                          # 🎯 ARRAY MODULE (Self-contained)
│   │   ├── components/
│   │   │   ├── sections/              # 📚 Content sections
│   │   │   │   ├── ArrayIntro.jsx
│   │   │   │   ├── ArrayMemoryLayout.jsx
│   │   │   │   ├── ArrayVisualizerSection.jsx
│   │   │   │   ├── ArraySyntax.jsx
│   │   │   │   ├── ArrayComplexity.jsx
│   │   │   │   ├── ArrayPatterns.jsx
│   │   │   │   ├── ArrayProblems.jsx
│   │   │   │   ├── ArrayCompanyQuestions.jsx
│   │   │   │   ├── ArrayCheatsheet.jsx
│   │   │   │   └── TableOfContents.jsx
│   │   │   │
│   │   │   └── visualizer/            # 🎮 Interactive visualizer
│   │   │       ├── ArrayVisualizer.jsx
│   │   │       ├── ArrayBox.jsx
│   │   │       ├── ControlsPanel.jsx
│   │   │       ├── ActionLog.jsx
│   │   │       ├── LegendPanel.jsx
│   │   │       ├── TutorialModal.jsx
│   │   │       └── useArrayEngine.js
│   │   │
│   │   └── page.jsx                   # Main array page
│   │
│   ├── components/                     # 🌐 GLOBAL components
│   │   └── ThemeToggle.jsx            # Used in layout
│   │
│   ├── providers/                      # ⚙️ Context providers
│   │   └── ThemeProvider.jsx
│   │
│   ├── layout.jsx                      # Root layout
│   ├── page.tsx                        # Home page
│   └── globals.css                     # Global styles
│
├── public/                             # Static assets
│   ├── next.svg
│   └── vercel.svg
│
├── node_modules/                       # Dependencies
├── package.json
├── README.md                           # Main documentation
├── STRUCTURE.md                        # This file
└── .next/                              # Build cache (auto-generated)
```

---

## 🎯 Module Organization

### **Array Module** (`/app/array/`)
Everything related to arrays is self-contained in this folder:

#### **Sections** (`/app/array/components/sections/`)
9 educational sections:
1. `ArrayIntro.jsx` - What is an array
2. `ArrayMemoryLayout.jsx` - Low-level memory details
3. `ArrayVisualizerSection.jsx` - Wrapper for visualizer
4. `ArraySyntax.jsx` - Multi-language comparison
5. `ArrayComplexity.jsx` - Time/space analysis
6. `ArrayPatterns.jsx` - Interview patterns
7. `ArrayProblems.jsx` - Problem database
8. `ArrayCompanyQuestions.jsx` - Company-wise tracking
9. `ArrayCheatsheet.jsx` - Quick reference
10. `TableOfContents.jsx` - Sticky sidebar navigation

#### **Visualizer** (`/app/array/components/visualizer/`)
Interactive components:
- `ArrayVisualizer.jsx` - Main visualizer component
- `ArrayBox.jsx` - Individual array element display
- `ControlsPanel.jsx` - Operation buttons
- `ActionLog.jsx` - Action history display
- `LegendPanel.jsx` - Color legend
- `TutorialModal.jsx` - First-time tutorial
- `useArrayEngine.js` - Core logic & state management

---

## 🌐 Global Components

### **Shared Across App** (`/app/components/`)
- `ThemeToggle.jsx` - Dark/light mode switcher (used in layout)

### **Providers** (`/app/providers/`)
- `ThemeProvider.jsx` - Theme context for entire app

---

## 📝 Import Paths

### From Array Page (`/app/array/page.jsx`)
```javascript
// Section imports
import ArrayIntro from "./components/sections/ArrayIntro";
import ArrayPatterns from "./components/sections/ArrayPatterns";
// ... etc

// All imports use relative paths from array folder
```

### From Section Components (`/app/array/components/sections/*.jsx`)
```javascript
// To import visualizer from a section
import ArrayVisualizer from "../visualizer/ArrayVisualizer";
```

### From Visualizer Components (`/app/array/components/visualizer/*.jsx`)
```javascript
// Visualizer components import from same folder
import ArrayBox from "./ArrayBox";
import useArrayEngine from "./useArrayEngine";
```

### From Root Layout (`/app/layout.jsx`)
```javascript
// Global components
import ThemeToggle from "./components/ThemeToggle";
import DSThemeProvider from "./providers/ThemeProvider";
```

---

## ✅ Benefits of This Structure

### 1. **Modularity**
- Each data structure is self-contained
- Easy to add new data structures (copy array folder, rename)
- No cross-dependencies between modules

### 2. **Clear Organization**
- **Sections**: Educational content
- **Visualizer**: Interactive components
- **Global**: Shared across entire app

### 3. **Scalability**
To add a new data structure (e.g., Linked List):
```
app/
├── array/              # Existing
└── linked-list/        # New - copy array structure
    ├── components/
    │   ├── sections/
    │   └── visualizer/
    └── page.jsx
```

### 4. **Maintainability**
- Related files grouped together
- Easy to find any component
- Logical folder hierarchy

---

## 🎨 Component Responsibilities

### **Page Component** (`page.jsx`)
- Coordinates all sections
- Manages table of contents
- Handles section navigation

### **Section Components**
- Self-contained educational blocks
- Consistent styling
- Animations and interactions

### **Visualizer Components**
- Interactive array operations
- Real-time animations
- State management

### **Global Components**
- Used across multiple pages
- Theme management
- Layout elements

---

## 🚀 Adding New Features

### To add a new section:
1. Create component in `/app/array/components/sections/`
2. Add to sections array in `page.jsx`
3. Import and use

### To add new visualizer feature:
1. Update `useArrayEngine.js` with logic
2. Add UI in `ControlsPanel.jsx`
3. Update `ArrayVisualizer.jsx` to use it

### To add new data structure:
1. Copy `/app/array/` folder
2. Rename to new structure (e.g., `/app/linked-list/`)
3. Update all component names and content
4. Add route to navigation

---

## 📊 File Count

- **Sections**: 10 files
- **Visualizer**: 7 files
- **Global**: 2 components + 1 provider
- **Total**: ~20 organized files

---

## 🎯 Quick Reference

### Need to edit educational content?
→ `/app/array/components/sections/`

### Need to modify visualizer?
→ `/app/array/components/visualizer/`

### Need to change global styling?
→ `/app/globals.css`

### Need to update navigation?
→ `/app/layout.jsx`

### Need to add a section?
→ Create in `sections/` + add to `page.jsx` sections array

---

**Structure Last Updated**: 2025-11-29
**Status**: ✅ Production Ready
