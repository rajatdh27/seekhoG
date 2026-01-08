"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeapIntro() {
  const [heapType, setHeapType] = useState("max");
  const [heapDemo, setHeapDemo] = useState([90, 70, 80, 30, 50, 60, 40]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Calculate tree positions
  const getPosition = (index, level, posInLevel, nodesInLevel) => {
    const levelHeight = 80;
    const baseWidth = 600;
    const y = level * levelHeight + 50;
    const x = (posInLevel + 1) * (baseWidth / (nodesInLevel + 1));
    return { x, y };
  };

  // Build tree structure
  const buildTree = (arr) => {
    const tree = [];
    let level = 0;
    let index = 0;

    while (index < arr.length) {
      const nodesInLevel = Math.pow(2, level);
      const levelNodes = [];

      for (let i = 0; i < nodesInLevel && index < arr.length; i++) {
        const pos = getPosition(index, level, i, nodesInLevel);
        levelNodes.push({
          value: arr[index],
          index: index,
          ...pos,
          parent: index > 0 ? Math.floor((index - 1) / 2) : null,
        });
        index++;
      }

      tree.push(...levelNodes);
      level++;
    }

    return tree;
  };

  const treeNodes = buildTree(heapDemo);

  const insertValue = () => {
    if (heapDemo.length >= 15) return;

    const newValue = Math.floor(Math.random() * 100);
    let newHeap = [...heapDemo, newValue];

    // Heapify up
    let index = newHeap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (heapType === "max") {
        if (newHeap[index] > newHeap[parentIndex]) {
          [newHeap[index], newHeap[parentIndex]] = [newHeap[parentIndex], newHeap[index]];
          index = parentIndex;
        } else {
          break;
        }
      } else {
        if (newHeap[index] < newHeap[parentIndex]) {
          [newHeap[index], newHeap[parentIndex]] = [newHeap[parentIndex], newHeap[index]];
          index = parentIndex;
        } else {
          break;
        }
      }
    }

    setHeapDemo(newHeap);
  };

  const extractRoot = () => {
    if (heapDemo.length === 0) return;

    let newHeap = [...heapDemo];
    newHeap[0] = newHeap[newHeap.length - 1];
    newHeap.pop();

    if (newHeap.length === 0) {
      setHeapDemo([]);
      return;
    }

    // Heapify down
    let index = 0;
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let targetIndex = index;

      if (heapType === "max") {
        if (leftChild < newHeap.length && newHeap[leftChild] > newHeap[targetIndex]) {
          targetIndex = leftChild;
        }
        if (rightChild < newHeap.length && newHeap[rightChild] > newHeap[targetIndex]) {
          targetIndex = rightChild;
        }
      } else {
        if (leftChild < newHeap.length && newHeap[leftChild] < newHeap[targetIndex]) {
          targetIndex = leftChild;
        }
        if (rightChild < newHeap.length && newHeap[rightChild] < newHeap[targetIndex]) {
          targetIndex = rightChild;
        }
      }

      if (targetIndex !== index) {
        [newHeap[index], newHeap[targetIndex]] = [newHeap[targetIndex], newHeap[index]];
        index = targetIndex;
      } else {
        break;
      }
    }

    setHeapDemo(newHeap);
  };

  const switchHeapType = () => {
    setHeapType(heapType === "max" ? "min" : "max");
    // Re-heapify the array for the new type
    const arr = [...heapDemo];
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapifyDown(arr, i, arr.length, heapType === "max" ? "min" : "max");
    }
    setHeapDemo(arr);
  };

  const heapifyDown = (arr, index, size, type) => {
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let targetIndex = index;

      if (type === "max") {
        if (leftChild < size && arr[leftChild] > arr[targetIndex]) {
          targetIndex = leftChild;
        }
        if (rightChild < size && arr[rightChild] > arr[targetIndex]) {
          targetIndex = rightChild;
        }
      } else {
        if (leftChild < size && arr[leftChild] < arr[targetIndex]) {
          targetIndex = leftChild;
        }
        if (rightChild < size && arr[rightChild] < arr[targetIndex]) {
          targetIndex = rightChild;
        }
      }

      if (targetIndex !== index) {
        [arr[index], arr[targetIndex]] = [arr[targetIndex], arr[index]];
        index = targetIndex;
      } else {
        break;
      }
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        🌳 Introduction to Heap
      </motion.h2>

      <div className="space-y-8">
        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose dark:prose-invert max-w-none"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            A <strong>heap</strong> is a specialized tree-based data structure that satisfies the{" "}
            <span className="text-rose-600 dark:text-rose-400 font-semibold">heap property</span>.
            It is a complete binary tree where every level is filled except possibly the last level,
            which is filled from left to right.
          </p>
        </motion.div>

        {/* Interactive Heap Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Interactive {heapType === "max" ? "Max" : "Min"} Heap Visualization
            </h3>
            <button
              onClick={switchHeapType}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Switch to {heapType === "max" ? "Min" : "Max"} Heap
            </button>
          </div>

          {/* Tree Visualization */}
          <div className="mb-8 overflow-x-auto pb-4">
            <div className="relative min-w-[600px] h-[320px]">
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {/* Draw edges */}
                {treeNodes.map((node) => {
                  if (node.parent !== null) {
                    const parent = treeNodes[node.parent];
                    return (
                      <line
                        key={`edge-${node.index}`}
                        x1={parent.x}
                        y1={parent.y}
                        x2={node.x}
                        y2={node.y}
                        stroke="#f43f5e"
                        strokeWidth="2"
                        opacity="0.3"
                      />
                    );
                  }
                  return null;
                })}
              </svg>

              {/* Draw nodes */}
              {treeNodes.map((node) => (
                <motion.div
                  key={node.index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: node.index * 0.05 }}
                  style={{
                    position: "absolute",
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                  }}
                  onHoverStart={() => setHoveredIndex(node.index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIndex === node.index ? 1.2 : 1,
                      boxShadow:
                        hoveredIndex === node.index
                          ? "0 10px 30px rgba(244, 63, 94, 0.4)"
                          : "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer ${
                      node.index === 0
                        ? "bg-gradient-to-br from-rose-600 to-pink-600"
                        : hoveredIndex === node.index
                        ? "bg-gradient-to-br from-rose-500 to-pink-500"
                        : "bg-gradient-to-br from-rose-500 to-pink-600"
                    } text-white shadow-lg font-bold text-lg`}
                  >
                    {node.value}
                  </motion.div>
                  {node.index === 0 && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-rose-600 dark:text-rose-400 font-bold">
                      ROOT
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={insertValue}
              disabled={heapDemo.length >= 15}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-green-300 disabled:to-emerald-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>➕</span>
              <span>Insert Random</span>
            </button>
            <button
              onClick={extractRoot}
              disabled={heapDemo.length === 0}
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 disabled:from-red-300 disabled:to-rose-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>➖</span>
              <span>Extract Root</span>
            </button>
          </div>

          {/* Info Box */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Size:</span>
                <span className="font-bold text-rose-600 dark:text-rose-400">{heapDemo.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Root:</span>
                <span className="font-bold text-rose-600 dark:text-rose-400">
                  {heapDemo.length > 0 ? heapDemo[0] : "null"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Type:</span>
                <span className="font-bold text-rose-600 dark:text-rose-400">
                  {heapType === "max" ? "Max Heap" : "Min Heap"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Height:</span>
                <span className="font-bold text-rose-600 dark:text-rose-400">
                  {heapDemo.length > 0 ? Math.floor(Math.log2(heapDemo.length)) : 0}
                </span>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="mt-4 bg-rose-100 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-rose-900 dark:text-rose-200">Heap Property:</strong>{" "}
              {heapType === "max"
                ? "In a Max Heap, every parent node has a value greater than or equal to its children. The root is the maximum element."
                : "In a Min Heap, every parent node has a value less than or equal to its children. The root is the minimum element."}
            </p>
          </div>
        </motion.div>

        {/* Heap Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <HeapTypeCard
            title="Max Heap"
            icon="📈"
            description="Parent node ≥ children nodes. Root is the maximum element."
            property="For all nodes: Parent[i] ≥ Children[i]"
            use="Priority queues, heap sort (descending)"
            example="[90, 70, 80, 30, 50, 60, 40]"
          />
          <HeapTypeCard
            title="Min Heap"
            icon="📉"
            description="Parent node ≤ children nodes. Root is the minimum element."
            property="For all nodes: Parent[i] ≤ Children[i]"
            use="Priority queues, Dijkstra's algorithm"
            example="[10, 20, 15, 30, 40, 50, 45]"
          />
        </motion.div>

        {/* Key Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-indigo-50 to-rose-50 dark:from-indigo-900/20 dark:to-rose-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
            <span>📖</span> Key Properties
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <PropertyCard
              title="Complete Binary Tree"
              description="All levels filled except possibly the last, filled left to right"
            />
            <PropertyCard
              title="Array Representation"
              description="Left child: 2i+1, Right child: 2i+2, Parent: ⌊(i-1)/2⌋"
            />
            <PropertyCard
              title="Height"
              description="O(log n) where n is number of nodes"
            />
            <PropertyCard
              title="Heap Property"
              description="Maintained during insertion and deletion operations"
            />
          </div>
        </motion.div>

        {/* Real-World Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200 flex items-center gap-2">
            <span>🌍</span> Real-World Applications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <ApplicationCard
              icon="⭐"
              title="Priority Queues"
              examples={["Task scheduling", "Event handling", "Job queues"]}
            />
            <ApplicationCard
              icon="🔍"
              title="Graph Algorithms"
              examples={["Dijkstra's algorithm", "Prim's MST", "A* pathfinding"]}
            />
            <ApplicationCard
              icon="📊"
              title="Sorting"
              examples={["Heap sort", "K largest elements", "Median maintenance"]}
            />
            <ApplicationCard
              icon="💾"
              title="Memory Management"
              examples={["Memory allocation", "Garbage collection", "Resource pooling"]}
            />
            <ApplicationCard
              icon="📈"
              title="Statistics"
              examples={["Running median", "Top K elements", "Order statistics"]}
            />
            <ApplicationCard
              icon="🎮"
              title="Gaming"
              examples={["AI pathfinding", "Event systems", "Resource management"]}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper Components
function HeapTypeCard({ title, icon, description, property, use, example }) {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h4>
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{description}</p>
      <div className="space-y-2 text-xs">
        <div className="text-rose-700 dark:text-rose-400 font-semibold">
          <strong>Property:</strong> {property}
        </div>
        <div className="text-green-700 dark:text-green-400">
          <strong>Use:</strong> {use}
        </div>
        <div className="text-blue-700 dark:text-blue-400 font-mono">
          <strong>Example:</strong> {example}
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ title, description }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-rose-400 dark:hover:border-rose-500 transition-all">
      <h4 className="text-base font-bold text-rose-700 dark:text-rose-400 mb-2">{title}</h4>
      <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
    </div>
  );
}

function ApplicationCard({ icon, title, examples }) {
  return (
    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h4>
      <div className="space-y-1">
        {examples.map((example, idx) => (
          <div key={idx} className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-2">
            <span>•</span>
            <span>{example}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
