"use client";

import { motion } from "framer-motion";

const applications = [
  {
    id: "browser-history",
    icon: "🌐",
    title: "Browser History Navigation",
    description: "Web browsers use doubly linked lists to implement back and forward button functionality",
    realWorld: [
      "Chrome, Firefox, Safari navigation",
      "Back button traverses backward",
      "Forward button moves forward",
      "New visit clears forward history",
    ],
    example: `class BrowserHistory {
  constructor(homepage) {
    this.current = {
      url: homepage,
      prev: null,
      next: null
    };
  }

  visit(url) {
    const newNode = {
      url: url,
      prev: this.current,
      next: null
    };
    this.current.next = newNode;
    this.current = newNode;
  }

  back(steps) {
    while (steps > 0 && this.current.prev) {
      this.current = this.current.prev;
      steps--;
    }
    return this.current.url;
  }

  forward(steps) {
    while (steps > 0 && this.current.next) {
      this.current = this.current.next;
      steps--;
    }
    return this.current.url;
  }
}`,
    color: "green",
  },
  {
    id: "music-playlist",
    icon: "🎵",
    title: "Music Playlists",
    description: "Music players use circular linked lists for continuous playlist looping and shuffle features",
    realWorld: [
      "Spotify, Apple Music playlists",
      "Next/Previous song navigation",
      "Repeat and shuffle modes",
      "Queue management",
    ],
    example: `class MusicPlaylist {
  constructor() {
    this.head = null;
    this.current = null;
    this.tail = null;
  }

  addSong(song) {
    const newNode = {
      song: song,
      next: null,
      prev: null
    };

    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
      this.tail = newNode;
      // Make circular for repeat
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }
  }

  nextSong() {
    if (this.current) {
      this.current = this.current.next;
      return this.current.song;
    }
    return null;
  }

  previousSong() {
    if (this.current) {
      this.current = this.current.prev;
      return this.current.song;
    }
    return null;
  }
}`,
    color: "teal",
  },
  {
    id: "undo-redo",
    icon: "↩️",
    title: "Undo/Redo Operations",
    description: "Text editors and design software use linked lists to track and navigate through action history",
    realWorld: [
      "VSCode, Word, Google Docs",
      "Photoshop, Figma, Canva",
      "Video editors (Premiere, Final Cut)",
      "Any app with edit history",
    ],
    example: `class UndoRedoManager {
  constructor() {
    this.current = null;
  }

  executeAction(action) {
    const newNode = {
      action: action,
      prev: this.current,
      next: null
    };

    if (this.current) {
      this.current.next = newNode;
    }
    this.current = newNode;

    // Execute the action
    action.execute();
  }

  undo() {
    if (this.current) {
      this.current.action.undo();
      this.current = this.current.prev;
    }
  }

  redo() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      this.current.action.execute();
    }
  }

  canUndo() {
    return this.current !== null;
  }

  canRedo() {
    return this.current && this.current.next !== null;
  }
}`,
    color: "emerald",
  },
  {
    id: "image-viewer",
    icon: "🖼️",
    title: "Image Viewer Gallery",
    description: "Photo gallery apps use doubly linked lists for efficient next/previous image navigation",
    realWorld: [
      "Instagram, Facebook photo viewers",
      "Google Photos, Apple Photos",
      "Windows Photo Viewer",
      "Gallery apps on mobile",
    ],
    example: `class ImageGallery {
  constructor(images) {
    this.head = null;
    this.current = null;

    // Build doubly linked list
    for (let i = 0; i < images.length; i++) {
      const newNode = {
        image: images[i],
        prev: null,
        next: null
      };

      if (!this.head) {
        this.head = newNode;
        this.current = newNode;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newNode;
        newNode.prev = curr;
      }
    }
  }

  getCurrentImage() {
    return this.current ? this.current.image : null;
  }

  nextImage() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      return this.current.image;
    }
    return null;  // At last image
  }

  prevImage() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      return this.current.image;
    }
    return null;  // At first image
  }

  deleteCurrentImage() {
    if (!this.current) return;

    const next = this.current.next;
    const prev = this.current.prev;

    if (prev) prev.next = next;
    if (next) next.prev = prev;

    // Move to next or prev
    this.current = next || prev;
  }
}`,
    color: "cyan",
  },
  {
    id: "hash-table-chaining",
    icon: "🔗",
    title: "Hash Table Collision Resolution",
    description: "Hash tables use linked lists for chaining to handle hash collisions efficiently",
    realWorld: [
      "JavaScript objects/Maps",
      "Python dictionaries",
      "Java HashMap",
      "Database indexing",
    ],
    example: `class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash = (hash + char.charCodeAt(0)) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this.hash(key);
    const newNode = { key, value, next: null };

    if (!this.buckets[index]) {
      this.buckets[index] = newNode;
    } else {
      // Chain: add to linked list
      let current = this.buckets[index];

      // Update if key exists
      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        if (!current.next) break;
        current = current.next;
      }

      // Add new node to chain
      current.next = newNode;
    }
  }

  get(key) {
    const index = this.hash(key);
    let current = this.buckets[index];

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return undefined;
  }
}`,
    color: "lime",
  },
  {
    id: "memory-allocation",
    icon: "💾",
    title: "Memory Management",
    description: "Operating systems use linked lists to manage free memory blocks and allocation",
    realWorld: [
      "OS memory allocators (malloc/free)",
      "Garbage collection",
      "Memory pool management",
      "Dynamic memory allocation",
    ],
    example: `class MemoryManager {
  constructor(totalMemory) {
    // Start with one big free block
    this.freeList = {
      start: 0,
      size: totalMemory,
      next: null
    };
    this.allocatedList = null;
  }

  // First-fit allocation
  allocate(size) {
    let current = this.freeList;
    let prev = null;

    while (current) {
      if (current.size >= size) {
        // Allocate from this block
        const allocated = {
          start: current.start,
          size: size,
          next: this.allocatedList
        };
        this.allocatedList = allocated;

        // Update free list
        if (current.size === size) {
          // Remove entire block
          if (prev) {
            prev.next = current.next;
          } else {
            this.freeList = current.next;
          }
        } else {
          // Shrink the block
          current.start += size;
          current.size -= size;
        }

        return allocated.start;
      }

      prev = current;
      current = current.next;
    }

    return -1;  // Out of memory
  }

  free(address) {
    // Find and remove from allocated list
    let current = this.allocatedList;
    let prev = null;

    while (current) {
      if (current.start === address) {
        // Remove from allocated list
        if (prev) {
          prev.next = current.next;
        } else {
          this.allocatedList = current.next;
        }

        // Add back to free list
        current.next = this.freeList;
        this.freeList = current;
        return true;
      }
      prev = current;
      current = current.next;
    }

    return false;
  }
}`,
    color: "green",
  },
  {
    id: "file-systems",
    icon: "📁",
    title: "File System Organization",
    description: "File systems use linked lists to track file blocks and directory entries",
    realWorld: [
      "FAT32 file allocation table",
      "Directory linked lists",
      "Inode lists in Unix/Linux",
      "File block chaining",
    ],
    example: `class FileSystem {
  constructor() {
    this.files = {};
    this.freeBlocks = null;
    this.initFreeBlocks(100);  // 100 blocks
  }

  initFreeBlocks(count) {
    for (let i = count - 1; i >= 0; i--) {
      const block = {
        blockId: i,
        next: this.freeBlocks
      };
      this.freeBlocks = block;
    }
  }

  createFile(filename, data) {
    const blocks = Math.ceil(data.length / 512);
    let fileHead = null;
    let fileTail = null;

    // Allocate blocks for file
    for (let i = 0; i < blocks; i++) {
      if (!this.freeBlocks) {
        throw new Error('Disk full');
      }

      // Take block from free list
      const block = this.freeBlocks;
      this.freeBlocks = this.freeBlocks.next;

      // Add to file's block chain
      block.data = data.slice(i * 512, (i + 1) * 512);
      block.next = null;

      if (!fileHead) {
        fileHead = block;
        fileTail = block;
      } else {
        fileTail.next = block;
        fileTail = block;
      }
    }

    this.files[filename] = fileHead;
  }

  readFile(filename) {
    let current = this.files[filename];
    let data = '';

    while (current) {
      data += current.data;
      current = current.next;
    }

    return data;
  }

  deleteFile(filename) {
    let current = this.files[filename];

    // Return all blocks to free list
    while (current) {
      const next = current.next;
      current.next = this.freeBlocks;
      this.freeBlocks = current;
      current = next;
    }

    delete this.files[filename];
  }
}`,
    color: "teal",
  },
  {
    id: "process-scheduling",
    icon: "⚙️",
    title: "Process Scheduling",
    description: "Operating systems use circular linked lists for round-robin CPU scheduling",
    realWorld: [
      "OS process schedulers",
      "Task scheduling in real-time systems",
      "Round-robin scheduling",
      "CPU time-slicing",
    ],
    example: `class ProcessScheduler {
  constructor() {
    this.head = null;
    this.current = null;
  }

  addProcess(process) {
    const newNode = {
      process: process,
      next: null
    };

    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
      newNode.next = newNode;  // Circular
    } else {
      // Find tail
      let tail = this.head;
      while (tail.next !== this.head) {
        tail = tail.next;
      }

      // Insert and maintain circular structure
      tail.next = newNode;
      newNode.next = this.head;
    }
  }

  // Round-robin scheduling
  scheduleNext() {
    if (!this.current) return null;

    const process = this.current.process;

    // Execute process for time quantum
    if (process.executeTimeSlice()) {
      // Process completed
      this.removeProcess(process.id);
    } else {
      // Move to next process
      this.current = this.current.next;
    }

    return process;
  }

  removeProcess(processId) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;

    do {
      if (current.process.id === processId) {
        if (current === this.head && current.next === this.head) {
          // Only one process
          this.head = null;
          this.current = null;
        } else {
          // Find tail
          let tail = this.head;
          while (tail.next !== this.head) {
            tail = tail.next;
          }

          if (current === this.head) {
            this.head = current.next;
            tail.next = this.head;
          } else {
            prev.next = current.next;
          }

          if (this.current === current) {
            this.current = current.next;
          }
        }
        return;
      }

      prev = current;
      current = current.next;
    } while (current !== this.head);
  }
}`,
    color: "emerald",
  },
];

export default function LinkedListApplications() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
      >
        Real-World Applications
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-8">
        Linked lists are fundamental data structures used extensively in software development.
        Here are the most important real-world applications you'll encounter.
      </p>

      <div className="grid gap-6">
        {applications.map((app, idx) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-700 dark:to-green-900/20 rounded-xl p-6 border border-slate-200 dark:border-slate-600"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{app.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {app.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  {app.description}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                Used In:
              </h4>
              <div className="grid md:grid-cols-2 gap-2">
                {app.realWorld.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-green-600 dark:text-green-400">▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                Code Example:
              </h4>
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-slate-300 font-mono leading-relaxed">
                  <code>{app.example}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Industry Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-200">
          Why Linked Lists Matter in Industry
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Dynamic Memory:
            </h4>
            <ul className="space-y-1">
              <li>• No need to pre-allocate size</li>
              <li>• Efficient insertion/deletion at any position</li>
              <li>• Grow and shrink dynamically</li>
              <li>• No wasted memory from unused capacity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              User Interface:
            </h4>
            <ul className="space-y-1">
              <li>• Browser navigation (back/forward)</li>
              <li>• Undo/Redo in all major applications</li>
              <li>• Image gallery navigation</li>
              <li>• Music playlist management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              System Programming:
            </h4>
            <ul className="space-y-1">
              <li>• Memory allocation and management</li>
              <li>• File system organization</li>
              <li>• Process scheduling in OS</li>
              <li>• Device driver management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Data Structures:
            </h4>
            <ul className="space-y-1">
              <li>• Foundation for stacks and queues</li>
              <li>• Hash table collision resolution</li>
              <li>• Graph adjacency lists</li>
              <li>• LRU cache implementation</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Advantages vs Arrays */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-200">
          When to Use Linked Lists vs Arrays
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
              Choose Linked Lists When:
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Frequent insertions/deletions at beginning or middle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Size changes dynamically and unpredictably</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Don't need random access by index</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Need to maintain insertion order efficiently</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Implementing stacks, queues, or other ADTs</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">
              Choose Arrays When:
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">✓</span>
                <span>Need fast random access by index (O(1))</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">✓</span>
                <span>Size is known and relatively stable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">✓</span>
                <span>Memory locality is important for cache performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">✓</span>
                <span>Need to minimize memory overhead (no pointers)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">✓</span>
                <span>Binary search or other index-based algorithms</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
