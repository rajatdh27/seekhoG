"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function QueueIntro() {
  const [queueDemo, setQueueDemo] = useState([10, 20, 30]);
  const [nextValue, setNextValue] = useState(40);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const enqueue = () => {
    if (queueDemo.length < 8) {
      setQueueDemo([...queueDemo, nextValue]);
      setNextValue(nextValue + 10);
    }
  };

  const dequeue = () => {
    if (queueDemo.length > 0) {
      setQueueDemo(queueDemo.slice(1));
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        📋 Introduction to Queue
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
            A <strong>queue</strong> is a linear data structure that follows the{" "}
            <span className="text-orange-600 dark:text-orange-400 font-semibold">FIFO (First In First Out)</span>{" "}
            principle. Think of a queue at a ticket counter - the first person in line is the first one to be served!
            Elements are added at the{" "}
            <span className="text-orange-600 dark:text-orange-400 font-semibold">rear (back)</span> and removed from
            the <span className="text-orange-600 dark:text-orange-400 font-semibold">front</span>.
          </p>
        </motion.div>

        {/* Interactive Queue Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Interactive Queue Visualization (FIFO)
          </h3>

          {/* Queue Display */}
          <div className="mb-8 overflow-x-auto pb-4">
            <div className="flex items-center gap-4 min-w-max justify-center">
              {/* Front Label */}
              <div className="text-sm font-mono text-orange-600 dark:text-orange-400 font-bold">
                ← FRONT<br/>(Remove)
              </div>

              {/* Queue Elements */}
              <div className="flex items-center gap-2">
                {queueDemo.map((value, index) => (
                  <motion.div
                    key={`${value}-${index}`}
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative"
                  >
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        y: hoveredIndex === index ? -8 : 0,
                        boxShadow:
                          hoveredIndex === index
                            ? "0 10px 30px rgba(249, 115, 22, 0.4)"
                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                      className={`w-20 h-20 rounded-xl flex flex-col items-center justify-center cursor-pointer ${
                        hoveredIndex === index
                          ? "bg-gradient-to-br from-orange-500 to-amber-500"
                          : "bg-gradient-to-br from-orange-600 to-amber-600"
                      } text-white shadow-lg`}
                    >
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-xs opacity-80 mt-1">
                        {index === 0 ? "Front" : index === queueDemo.length - 1 ? "Rear" : `[${index}]`}
                      </div>
                    </motion.div>

                    {/* Position label */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      [{index}]
                    </div>
                  </motion.div>
                ))}

                {queueDemo.length === 0 && (
                  <div className="text-slate-400 dark:text-slate-500 text-center py-8 px-12">
                    Queue is empty
                  </div>
                )}
              </div>

              {/* Rear Label */}
              <div className="text-sm font-mono text-orange-600 dark:text-orange-400 font-bold">
                REAR →<br/>(Add)
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={enqueue}
              disabled={queueDemo.length >= 8}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-green-300 disabled:to-emerald-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>➕</span>
              <span>Enqueue ({nextValue})</span>
            </button>
            <button
              onClick={dequeue}
              disabled={queueDemo.length === 0}
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 disabled:from-red-300 disabled:to-rose-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>➖</span>
              <span>Dequeue</span>
            </button>
          </div>

          {/* Info Box */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Size:</span>
                <span className="font-bold text-orange-600 dark:text-orange-400">{queueDemo.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Front:</span>
                <span className="font-bold text-orange-600 dark:text-orange-400">
                  {queueDemo.length > 0 ? queueDemo[0] : "null"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Rear:</span>
                <span className="font-bold text-orange-600 dark:text-orange-400">
                  {queueDemo.length > 0 ? queueDemo[queueDemo.length - 1] : "null"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Empty:</span>
                <span className="font-bold text-orange-600 dark:text-orange-400">
                  {queueDemo.length === 0 ? "true" : "false"}
                </span>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="mt-4 bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-orange-900 dark:text-orange-200">FIFO Principle:</strong> Elements are added at
              the REAR and removed from the FRONT. The first element added (10) will be the first one removed when you
              click Dequeue. Enqueue and Dequeue operations are both O(1).
            </p>
          </div>
        </motion.div>

        {/* Key Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-indigo-50 to-orange-50 dark:from-indigo-900/20 dark:to-orange-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
            <span>📖</span> Key Concepts
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ConceptCard
              title="FIFO Principle"
              description="First In, First Out - elements are removed in the order they were added"
              example="People waiting in line at a store"
            />
            <ConceptCard
              title="Front Pointer"
              description="Points to the first element in queue (dequeue from here)"
              example="Person at the front of the line"
            />
            <ConceptCard
              title="Rear Pointer"
              description="Points to the last element in queue (enqueue here)"
              example="Person at the end of the line"
            />
            <ConceptCard
              title="Enqueue Operation"
              description="Add element to the rear of queue - O(1)"
              example="New person joins at the back"
            />
            <ConceptCard
              title="Dequeue Operation"
              description="Remove element from the front of queue - O(1)"
              example="Person at front gets served and leaves"
            />
            <ConceptCard
              title="Peek/Front"
              description="View front element without removing - O(1)"
              example="See who's next in line"
            />
          </div>
        </motion.div>

        {/* Types of Queues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <QueueTypeCard
            title="Simple Queue"
            icon="📋"
            description="Basic FIFO queue with enqueue at rear, dequeue at front"
            use="Task scheduling, print queue, BFS"
            pros="• Simple implementation • Clear FIFO behavior • Easy to understand"
            cons="• Wasted space in array implementation • Fixed size in basic version"
          />
          <QueueTypeCard
            title="Circular Queue"
            icon="🔁"
            description="Rear connects back to front, efficient space usage"
            use="CPU scheduling, memory management, buffering"
            pros="• Efficient space usage • Reuses freed space • No wasted memory"
            cons="• Slightly complex logic • Need careful full/empty checks"
          />
          <QueueTypeCard
            title="Priority Queue"
            icon="⭐"
            description="Elements have priority, highest priority served first"
            use="Task scheduling, Dijkstra's algorithm, A* search"
            pros="• Priority-based processing • Flexible ordering • Efficient with heap"
            cons="• O(log n) operations • More complex than simple queue"
          />
          <QueueTypeCard
            title="Double-Ended Queue (Deque)"
            icon="↔️"
            description="Insert and remove from both ends"
            use="Browser history, undo/redo, sliding window"
            pros="• Flexible operations • Can work as stack or queue • Both-ended access"
            cons="• Slightly complex • More methods to implement"
          />
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
              icon="💻"
              title="Operating Systems"
              examples={["CPU scheduling", "Disk scheduling", "Process management"]}
            />
            <ApplicationCard
              icon="🌐"
              title="Web Servers"
              examples={["Request handling", "Load balancing", "Task queues"]}
            />
            <ApplicationCard
              icon="🖨️"
              title="Print Spooling"
              examples={["Print job queue", "Document processing", "Job scheduling"]}
            />
            <ApplicationCard
              icon="📞"
              title="Call Centers"
              examples={["Call waiting", "Customer service", "Support tickets"]}
            />
            <ApplicationCard
              icon="💬"
              title="Messaging"
              examples={["Message queues", "Chat systems", "Notifications"]}
            />
            <ApplicationCard
              icon="🔍"
              title="BFS Algorithm"
              examples={["Graph traversal", "Shortest path", "Level-order"]}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper Components
function ConceptCard({ title, description, example }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-orange-400 dark:hover:border-orange-500 transition-all">
      <h4 className="text-base font-bold text-orange-700 dark:text-orange-400 mb-2">{title}</h4>
      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{description}</p>
      <p className="text-xs text-orange-600 dark:text-orange-400 italic">💡 {example}</p>
    </div>
  );
}

function QueueTypeCard({ title, icon, description, use, pros, cons }) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h4>
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{description}</p>
      <div className="text-xs text-orange-700 dark:text-orange-400 font-semibold mb-2">💼 Use: {use}</div>
      <div className="space-y-1 text-xs">
        <div className="text-green-700 dark:text-green-400 whitespace-pre-line">{pros}</div>
        <div className="text-red-700 dark:text-red-400 whitespace-pre-line">{cons}</div>
      </div>
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
          <div key={idx} className="text-xs text-orange-600 dark:text-orange-400 flex items-center gap-2">
            <span>•</span>
            <span>{example}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
