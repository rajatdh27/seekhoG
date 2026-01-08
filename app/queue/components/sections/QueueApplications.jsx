"use client";
import { motion } from "framer-motion";

export default function QueueApplications() {
  const applications = [
    {
      category: "Operating Systems",
      icon: "💻",
      items: [
        {
          title: "CPU Scheduling",
          desc: "Round-robin scheduling uses circular queue to manage processes",
          example: "Each process gets equal CPU time in cyclic manner",
          color: "from-blue-500 to-cyan-500",
        },
        {
          title: "Disk Scheduling",
          desc: "Manage disk I/O requests using queue",
          example: "FCFS disk scheduling algorithm",
          color: "from-purple-500 to-pink-500",
        },
        {
          title: "Spooling",
          desc: "Print spooler uses queue for managing print jobs",
          example: "Jobs are printed in order they were submitted",
          color: "from-green-500 to-emerald-500",
        },
      ],
    },
    {
      category: "Data Structures & Algorithms",
      icon: "📊",
      items: [
        {
          title: "Breadth-First Search (BFS)",
          desc: "Use queue to explore graph level by level",
          example: "Find shortest path in unweighted graph",
          color: "from-orange-500 to-amber-500",
        },
        {
          title: "Level Order Traversal",
          desc: "Traverse tree level by level using queue",
          example: "Print all nodes at each level of binary tree",
          color: "from-red-500 to-pink-500",
        },
        {
          title: "Cache Implementation",
          desc: "LRU cache uses queue to track access order",
          example: "Evict least recently used page from memory",
          color: "from-indigo-500 to-purple-500",
        },
      ],
    },
    {
      category: "Real-World Systems",
      icon: "🌐",
      items: [
        {
          title: "Message Queues",
          desc: "Asynchronous communication between services",
          example: "RabbitMQ, Apache Kafka, AWS SQS",
          color: "from-teal-500 to-cyan-500",
        },
        {
          title: "Call Center Systems",
          desc: "Manage incoming calls in waiting queue",
          example: "First caller in queue gets served first",
          color: "from-yellow-500 to-orange-500",
        },
        {
          title: "Traffic Systems",
          desc: "Vehicle queues at traffic lights and toll booths",
          example: "FIFO order for vehicle processing",
          color: "from-pink-500 to-rose-500",
        },
      ],
    },
    {
      category: "Web Development",
      icon: "🖥️",
      items: [
        {
          title: "Request Handling",
          desc: "Web servers queue incoming HTTP requests",
          example: "Node.js event loop, request processing",
          color: "from-violet-500 to-purple-500",
        },
        {
          title: "Task Queues",
          desc: "Background job processing (emails, notifications)",
          example: "Celery, Bull Queue, Redis Queue",
          color: "from-blue-500 to-indigo-500",
        },
        {
          title: "Rate Limiting",
          desc: "Queue requests when rate limit is exceeded",
          example: "API throttling, request buffering",
          color: "from-green-500 to-teal-500",
        },
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        🎯 Queue Applications
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 leading-relaxed">
        Queues are fundamental data structures used everywhere in computer science and real-world systems. Here are the most important applications of queues:
      </p>

      {applications.map((category, catIdx) => (
        <div key={catIdx} className="mb-16 last:mb-0">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">{category.icon}</span>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {category.category}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl mb-4 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {item.desc}
                </p>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-slate-600">
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">
                    💡 Example:
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {item.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Interview Question */}
      <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-800">
        <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-6">
          🎤 Common Interview Questions
        </h3>
        <div className="space-y-4">
          {[
            {
              q: "When would you use a queue over a stack?",
              a: "Use queue when order matters (FIFO) - like task scheduling, BFS. Use stack for LIFO behavior like function calls, undo operations.",
            },
            {
              q: "What's the difference between queue and priority queue?",
              a: "Regular queue follows FIFO order, while priority queue dequeues based on priority value, not insertion order.",
            },
            {
              q: "Why use circular queue instead of simple queue?",
              a: "Circular queue efficiently reuses space freed by dequeue operations, avoiding wasted space at the front of the array.",
            },
            {
              q: "How is a deque different from queue?",
              a: "Deque allows insertion and deletion from both ends, while queue only allows insertion at rear and deletion at front.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-orange-700"
            >
              <p className="font-bold text-slate-900 dark:text-slate-100 mb-3">
                Q: {item.q}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 pl-4 border-l-4 border-orange-400">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
