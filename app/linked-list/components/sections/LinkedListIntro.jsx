"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LinkedListIntro() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [listDemo, setListDemo] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ]);
  const [nextId, setNextId] = useState(4);

  const insertAtHead = () => {
    if (listDemo.length < 8) {
      setListDemo([{ id: nextId, value: nextId * 10 }, ...listDemo]);
      setNextId(nextId + 1);
    }
  };

  const insertAtTail = () => {
    if (listDemo.length < 8) {
      setListDemo([...listDemo, { id: nextId, value: nextId * 10 }]);
      setNextId(nextId + 1);
    }
  };

  const deleteHead = () => {
    if (listDemo.length > 0) {
      setListDemo(listDemo.slice(1));
    }
  };

  const deleteTail = () => {
    if (listDemo.length > 0) {
      setListDemo(listDemo.slice(0, -1));
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        What is a Linked List?
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
            A <strong>linked list</strong> is a linear data structure where elements are stored in{" "}
            <span className="text-green-600 dark:text-green-400 font-semibold">nodes</span>, and each node
            contains a data field and a{" "}
            <span className="text-green-600 dark:text-green-400 font-semibold">pointer/reference</span> to the
            next node. Unlike arrays, linked list elements are not stored in contiguous memory locations,
            allowing for efficient insertion and deletion operations.
          </p>
        </motion.div>

        {/* Interactive Node Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Interactive Singly Linked List Visualization
          </h3>

          {/* Linked List Display - Horizontal */}
          <div className="mb-8 overflow-x-auto pb-4">
            <div className="flex items-center gap-0 min-w-max justify-center">
              {/* Head Label */}
              <div className="mr-4 text-sm font-mono text-green-600 dark:text-green-400 font-bold">
                HEAD →
              </div>

              {listDemo.map((node, index) => (
                <div key={node.id} className="flex items-center">
                  {/* Node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredNode(index)}
                    onHoverEnd={() => setHoveredNode(null)}
                    className="relative"
                  >
                    <motion.div
                      animate={{
                        scale: hoveredNode === index ? 1.05 : 1,
                        boxShadow:
                          hoveredNode === index
                            ? "0 10px 30px rgba(34, 197, 94, 0.4)"
                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                      className={`flex border-2 rounded-lg overflow-hidden cursor-pointer transition-colors ${
                        hoveredNode === index
                          ? "border-green-500 bg-green-500"
                          : "border-green-600 dark:border-green-500 bg-white dark:bg-slate-800"
                      }`}
                    >
                      {/* Data part */}
                      <div
                        className={`w-20 h-16 flex flex-col items-center justify-center border-r-2 ${
                          hoveredNode === index
                            ? "border-green-400 text-white"
                            : "border-green-600 dark:border-green-500 text-slate-900 dark:text-slate-100"
                        }`}
                      >
                        <div className="text-xs opacity-70">data</div>
                        <div className="font-mono text-xl font-bold">{node.value}</div>
                      </div>
                      {/* Pointer part */}
                      <div
                        className={`w-12 h-16 flex flex-col items-center justify-center ${
                          hoveredNode === index ? "text-white" : "text-slate-900 dark:text-slate-100"
                        }`}
                      >
                        <div className="text-xs opacity-70">next</div>
                        <div className="text-2xl">→</div>
                      </div>
                    </motion.div>

                    {/* Index label */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      [{index}]
                    </div>
                  </motion.div>

                  {/* Arrow between nodes */}
                  {index < listDemo.length - 1 && (
                    <div className="w-8 h-0.5 bg-green-600 dark:bg-green-500"></div>
                  )}
                </div>
              ))}

              {/* Null at end */}
              {listDemo.length > 0 && (
                <div className="ml-4 px-4 py-2 bg-slate-300 dark:bg-slate-600 rounded font-mono text-sm">
                  NULL
                </div>
              )}

              {listDemo.length === 0 && (
                <div className="text-slate-400 dark:text-slate-500 text-center py-8">
                  List is empty (HEAD → NULL)
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <button
              onClick={insertAtHead}
              disabled={listDemo.length >= 8}
              className="px-4 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm"
            >
              ⬅️ Insert at Head
            </button>
            <button
              onClick={insertAtTail}
              disabled={listDemo.length >= 8}
              className="px-4 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm"
            >
              Insert at Tail ➡️
            </button>
            <button
              onClick={deleteHead}
              disabled={listDemo.length === 0}
              className="px-4 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm"
            >
              ❌ Delete Head
            </button>
            <button
              onClick={deleteTail}
              disabled={listDemo.length === 0}
              className="px-4 py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm"
            >
              Delete Tail ❌
            </button>
          </div>

          {/* Info Box */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Size:</span>
                <span className="font-bold text-green-600 dark:text-green-400">{listDemo.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Head:</span>
                <span className="font-bold text-green-600 dark:text-green-400">
                  {listDemo.length > 0 ? listDemo[0].value : "null"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tail:</span>
                <span className="font-bold text-green-600 dark:text-green-400">
                  {listDemo.length > 0 ? listDemo[listDemo.length - 1].value : "null"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Empty:</span>
                <span className="font-bold text-green-600 dark:text-green-400">
                  {listDemo.length === 0 ? "true" : "false"}
                </span>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="mt-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-green-900 dark:text-green-200">Key Principle:</strong> Each node stores
              data and a reference to the next node. Inserting at head is O(1), but inserting at tail requires
              O(n) traversal (unless you maintain a tail pointer).
            </p>
          </div>
        </motion.div>

        {/* Types of Linked Lists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-indigo-50 to-green-50 dark:from-indigo-900/20 dark:to-green-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
            <span>🔗</span> Types of Linked Lists
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <LinkedListTypeCard
              title="Singly Linked List"
              description="Each node has one pointer to the next node"
              structure="[data|next] → [data|next] → [data|next] → NULL"
              uses="Simple forward traversal, undo functionality"
              pros="• Simple implementation • Less memory per node • Efficient forward traversal"
              cons="• No backward traversal • Deleting a node requires previous node • No direct access to tail"
            />
            <LinkedListTypeCard
              title="Doubly Linked List"
              description="Each node has pointers to both next and previous nodes"
              structure="NULL ← [prev|data|next] ⇄ [prev|data|next] ⇄ [prev|data|next] → NULL"
              uses="Browser history (back/forward), LRU cache, deque"
              pros="• Bidirectional traversal • Easy deletion with node reference • Can traverse backward"
              cons="• Extra memory for prev pointer • More complex implementation • Slightly slower"
            />
            <LinkedListTypeCard
              title="Circular Linked List"
              description="Last node points back to the first node"
              structure="[data|next] → [data|next] → [data|next] ↰"
              uses="Round-robin scheduling, multiplayer games, circular buffers"
              pros="• Can reach any node from any node • Useful for circular processes • No NULL checks needed"
              cons="• Need careful handling to avoid infinite loops • Slightly complex insertion/deletion"
            />
            <LinkedListTypeCard
              title="Doubly Circular Linked List"
              description="Combines doubly linked list with circular structure"
              structure="⟲ [prev|data|next] ⇄ [prev|data|next] ⇄ [prev|data|next] ⟳"
              uses="Music playlists, image viewers, advanced data structures"
              pros="• All benefits of doubly linked list • Circular traversal in both directions • Elegant for cyclic data"
              cons="• Most complex implementation • Most memory overhead • Requires careful handling"
            />
          </div>
        </motion.div>

        {/* Operations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <OperationCard
            icon="➕"
            title="Insert"
            operations={["At Head - O(1)", "At Tail - O(n)", "At Position - O(n)"]}
            color="green"
          />
          <OperationCard
            icon="➖"
            title="Delete"
            operations={["At Head - O(1)", "At Tail - O(n)", "By Value - O(n)"]}
            color="red"
          />
          <OperationCard
            icon="🔍"
            title="Search"
            operations={["By Value - O(n)", "By Index - O(n)", "No Binary Search"]}
            color="blue"
          />
          <OperationCard
            icon="🔄"
            title="Reverse"
            operations={["Iterative - O(n)", "Recursive - O(n)", "In-place - O(1) space"]}
            color="purple"
          />
        </motion.div>

        {/* Real-World Analogies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200 flex items-center gap-2">
            <span>🌟</span> Real-World Analogies
          </h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">🚂</span>
              <span>
                <strong>Train Cars:</strong> Each car (node) is connected to the next car via a coupling
                (pointer). You can add or remove cars without moving others.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">🧑‍🤝‍🧑</span>
              <span>
                <strong>Conga Line:</strong> Each person holds the shoulder of the person in front. Easy to join
                or leave without disrupting the whole line.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">📎</span>
              <span>
                <strong>Paper Clips Chain:</strong> Each clip links to the next one. You can insert or remove
                clips anywhere in the chain.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">🎵</span>
              <span>
                <strong>Music Playlist:</strong> Each song points to the next. Easy to add, remove, or rearrange
                songs without affecting the entire list.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">🔗</span>
              <span>
                <strong>Blockchain:</strong> Each block contains data and a reference (hash) to the previous
                block, forming an immutable chain.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* When to Use vs Arrays */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-200 flex items-center gap-2">
              <span>✅</span> Use Linked Lists When:
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• Frequent insertions/deletions at beginning</li>
              <li>• Size is unknown or changes frequently</li>
              <li>• You don't need random access</li>
              <li>• Memory is fragmented</li>
              <li>• Implementing stacks, queues, graphs</li>
              <li>• You need efficient splitting/merging</li>
              <li>• Dynamic memory allocation preferred</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
              <span>📊</span> Use Arrays When:
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• Need random access (index-based)</li>
              <li>• Size is fixed or known beforehand</li>
              <li>• Cache locality is important</li>
              <li>• Memory overhead should be minimal</li>
              <li>• You need to sort/search frequently</li>
              <li>• Sequential access is common</li>
              <li>• Better performance for iteration</li>
            </ul>
          </motion.div>
        </div>

        {/* Advantages & Disadvantages */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-200 flex items-center gap-2">
              <span>👍</span> Advantages
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• Dynamic size - grows/shrinks as needed</li>
              <li>• Efficient insertion/deletion at head - O(1)</li>
              <li>• No memory wastage from pre-allocation</li>
              <li>• Easy to implement stacks and queues</li>
              <li>• No need to shift elements</li>
              <li>• Can be easily extended to complex structures</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-red-900 dark:text-red-200 flex items-center gap-2">
              <span>👎</span> Disadvantages
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• No random access - must traverse from head</li>
              <li>• Extra memory for storing pointers</li>
              <li>• Not cache-friendly (scattered memory)</li>
              <li>• Cannot use binary search efficiently</li>
              <li>• Reverse traversal difficult (singly)</li>
              <li>• More complex implementation than arrays</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function OperationCard({ icon, title, operations, color }) {
  const colorClasses = {
    green:
      "from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border-green-200 dark:border-green-800",
    red: "from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 border-red-200 dark:border-red-800",
    blue: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-blue-200 dark:border-blue-800",
    purple:
      "from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border-purple-200 dark:border-purple-800",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className={`bg-gradient-to-br ${colorClasses[color]} border rounded-xl p-5`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">{title}</h4>
      <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
        {operations.map((op, idx) => (
          <li key={idx}>• {op}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function LinkedListTypeCard({ title, description, structure, uses, pros, cons }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      className="bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 rounded-lg p-4"
    >
      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">{title}</h4>
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{description}</p>
      <div className="bg-slate-50 dark:bg-slate-700 rounded p-2 mb-2 overflow-x-auto">
        <code className="text-xs font-mono text-green-600 dark:text-green-400 whitespace-nowrap">{structure}</code>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
        <strong>Uses:</strong> {uses}
      </p>
      <div className="text-xs space-y-1">
        <div className="text-green-600 dark:text-green-400">{pros}</div>
        <div className="text-red-600 dark:text-red-400">{cons}</div>
      </div>
    </motion.div>
  );
}
