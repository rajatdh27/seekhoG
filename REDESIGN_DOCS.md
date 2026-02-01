# DSA Website Redesign Documentation

## 1. Overview
This document outlines the architectural and design changes implemented to modernize the Data Structures and Algorithms (DSA) learning platform. The primary goals were to establish a consistent visual language, improve code modularity, and resolve technical debt.

## 2. Architecture & Design System

### 2.1 Unified Component System
We have standardized the UI using a set of highly reusable, atomic components found in `app/components/common/`:

*   **`PerspectiveCard`**: The core container for all sections, providing depth, hover effects, and consistent coloring based on the module theme.
*   **`SectionHeader`**: Standardized titles with consistent iconography and descriptions.
*   **`ConceptGrid`**: A flexible grid system for displaying lists of concepts, features, comparisons, or analogies.
    *   *Implementation*: Maps data arrays to `FeatureCard` components.
*   **`FeatureCard`**: The versatile card component used within grids.
    *   *Capabilities*: Supports icons (Lucide/Custom), titles, descriptions, badges, and footers. Handles `forwardRef` components safely.
*   **`NextModuleCard`**: Standardized navigation component at the bottom of pages to guide the user's learning journey.
*   **`CodeImplementation` & `CodeBlock`**: Unified code display with syntax highlighting (Prism/React-Syntax-Highlighter) and multi-language tabs (C, C++, Java, JS, Python, Go).

## 3. Module Implementation Details

### 3.1 Array Module (`app/array/`)
*   **Theme Color**: Blue/Indigo
*   **Key Sections**:
    *   **Intro**: Defines Arrays, characteristics (Random Access, Fixed Size), and types.
        *   *Visuals*: **Refactored** full-width "Real-World Analogies" section with Lucide icons (`Building2`, `TrainFront`, `LayoutGrid`).
    *   **Memory Layout**: Visualizes contiguous memory allocation.
        *   *Visuals*: Interactive 1D array memory mapping (Address = Base + Index*Size) and 2D Row/Column-major order grid.
    *   **Operations**: Complexity analysis (O(1) access vs O(n) insert).

### 3.2 Linked List Module (`app/linked-list/`)
*   **Theme Color**: Emerald
*   **Key Sections**:
    *   **Intro**: Interactive Node Demo (Head/Tail insertion visualization).
        *   *Visuals*: `framer-motion` nodes entering/leaving. Comparison Matrix (Singly vs Doubly vs Circular).
        *   *Standardization*: "Real-World Analogies" updated to the new full-width design with `Globe` icon.
    *   **Memory Layout**: Contrast with Arrays (Scattered memory).

### 3.3 Stack Module (`app/stack/`)
*   **Theme Color**: Purple
*   **Key Sections**:
    *   **Intro**: Defines LIFO principle.
        *   *Visuals*: **Interactive Stack Demo** allowing users to Push/Pop elements visually using `framer-motion` layout animations.
    *   **Memory Layout**: Comparison of Array-based vs Linked-List-based implementations.
    *   **Applications**: Recursion, Undo/Redo, Expression Parsing.

### 3.4 Queue Module (`app/queue/`)
*   **Theme Color**: Green
*   **Key Sections**:
    *   **Intro**: Defines FIFO principle.
        *   *Visuals*: Interactive Queue Demo (Enqueue/Dequeue animation).
    *   **Patterns**: Circular Queue, Priority Queue, Deque.
    *   **Applications**: Task scheduling, BFS, Printer spooling.

### 3.5 Searching & Sorting Module (`app/searching-sorting/`)
*   **Theme Color**: Orange/Teal
*   **Key Sections**:
    *   **Searching**: Linear Search vs Binary Search.
        *   *Visuals*: Interactive bar charts highlighting the search process (comparing, found).
    *   **Sorting Algorithms**: Bubble, Selection, Insertion, Merge, Quick Sort.
        *   *Visuals*: Step-by-step sorting visualizers where bars swap, change color based on state (sorted, comparing, pivot).
        *   *Fixes*: Resolved duplicate import issues in `QuickSortSection.jsx`.

### 3.6 Tree Module (`app/tree/`)
*   **Theme Color**: Teal/Cyan
*   **Key Sections**:
    *   **Intro**: Hierarchical structure definition.
    *   **Traversals**: In-order, Pre-order, Post-order, Level-order.
        *   *Implementation*: Code blocks for recursive and iterative approaches.
    *   **Variants**: Binary Tree, BST, AVL Tree (Self-balancing).
    *   *Fixes*: Added `Share2` icon to `TreeTraversalsSection`.

### 3.7 Graph Module (`app/graph/`)
*   **Theme Color**: Violet/Fuchsia
*   **Key Sections**:
    *   **Representation**: Adjacency Matrix vs Adjacency List.
    *   **Traversals**: BFS (Level-based) vs DFS (Depth-based).
    *   **Algorithms**: Shortest Path (Dijkstra), MST (Prim/Kruskal), Topological Sort.

### 3.8 Hashing Module (`app/hashing/`)
*   **Theme Color**: Indigo
*   **Key Sections**:
    *   **Intro**: Key-Value mapping, Hash Functions.
    *   **Collision Handling**: Chaining vs Open Addressing.
    *   **Patterns**: Frequency counting, Two Sum pattern.

### 3.9 Heap Module (`app/heap/`)
*   **Theme Color**: Rose
*   **Key Sections**:
    *   **Implementation**: Max Heap vs Min Heap (Array representation).
        *   *Visuals*: Formula grid for Parent/Child indices.
    *   **Operations**: Heapify, Insert, Extract-Max.
    *   **Applications**: Priority Queues, Heap Sort.
    *   *Fixes*: Added missing `Settings` and `ListOrdered` icons.

### 3.10 Trie Module (`app/trie/`)
*   **Theme Color**: Orange
*   **Key Sections**:
    *   **Intro**: Prefix Tree structure.
    *   **Operations**: Insert, Search, StartsWith.
    *   **Applications**: Autocomplete, Spell Checker.
    *   *Fixes*: Added missing `ConceptGrid` import.

## 4. Standardization Plan: Real-World Analogies
To ensure visual consistency across the entire platform, the "Real-World Analogies" section in every data structure's intro component is being refactored to match the **Array** module's design.

**Design Spec:**
*   **Container**: `div` with `bg-gradient-to-br from-indigo-900/50 to-blue-900/50 border border-blue-500/30 rounded-[2.5rem] p-8`
*   **Header**: `SectionHeader` or `h3` with `Globe` icon (Lucide) and `text-blue-400`.
*   **Content**: `ConceptGrid` with `columns={3}`.
*   **Icons**: Replace emojis with specific Lucide icons.

**Progress Checklist:**
- [x] **Array** (`ArrayIntro.jsx`)
- [x] **Linked List** (`LinkedListIntro.jsx`)
- [ ] **Stack** (`StackIntro.jsx`)
- [ ] **Queue** (`QueueIntro.jsx`)
- [ ] **Hashing** (`HashingIntro.jsx`)
- [ ] **Tree** (`TreeIntro.jsx`)
- [ ] **Graph** (`GraphIntro.jsx`)
- [ ] **Heap** (`HeapIntro.jsx`)
- [ ] **Trie** (`TrieIntro.jsx`)

## 5. Future Scope & Recommendations

### 5.1 Clean Code & Reusability
*   **Generic "Pros/Cons" Component**: The pattern used in `ArrayIntro` (Use When / Challenges) is repeated often. This should be abstracted into a `ProsConsGrid` component.
*   **Animation Standardization**: Define a central configuration for `framer-motion` variants.
*   **TypeScript Migration**: Migrating fully to `.tsx` to prevent prop-type errors.

### 5.2 Content & Design
*   **Interactive Visualizers**: Isolate complex visualizers into dedicated components.
*   **Centralized Assets**: Helper for icon/theme management.

### 5.3 Performance
*   **Lazy Loading**: Continue lazy loading heavy sections.
*   **Bundle Size**: Audit imports for tree-shaking.
