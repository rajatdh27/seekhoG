"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function StackMemoryLayout() {
  const [selectedImpl, setSelectedImpl] = useState("array");

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Memory Layout & Implementation
      </motion.h2>

      <div className="space-y-8">
        {/* Implementation Selector */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setSelectedImpl("array")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedImpl === "array"
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            📦 Array-Based Stack
          </button>
          <button
            onClick={() => setSelectedImpl("linked")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedImpl === "linked"
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            🔗 Linked Stack
          </button>
        </div>

        {/* Array-Based Implementation */}
        {selectedImpl === "array" && (
          <motion.div
            key="array"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200">
                📦 Array-Based Stack Implementation
              </h3>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-blue-200 dark:border-blue-700 mb-6">
                <h4 className="font-bold mb-4 text-slate-900 dark:text-slate-100">Memory Layout:</h4>
                <div className="space-y-4">
                  {/* Visual Memory Diagram */}
                  <div className="flex items-end gap-2 justify-center min-h-[200px]">
                    <div className="flex flex-col-reverse gap-1">
                      {[10, 20, 30, 40].map((val, idx) => (
                        <div
                          key={idx}
                          className="w-24 h-14 bg-purple-500 text-white flex items-center justify-center font-mono font-bold rounded border-2 border-purple-600"
                        >
                          {val}
                        </div>
                      ))}
                      {[...Array(6)].map((_, idx) => (
                        <div
                          key={`empty-${idx}`}
                          className="w-24 h-14 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 font-mono rounded border-2 border-slate-300 dark:border-slate-600"
                        >
                          null
                        </div>
                      ))}
                      <div className="w-24 h-8 bg-slate-300 dark:bg-slate-600 rounded-b flex items-center justify-center text-xs font-bold">
                        BASE
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="flex flex-col-reverse gap-1 text-sm">
                      {[0, 1, 2, 3].map((idx) => (
                        <div key={idx} className="h-14 flex items-center font-mono text-purple-600 dark:text-purple-400">
                          arr[{idx}] {idx === 3 && "← top"}
                        </div>
                      ))}
                      {[4, 5, 6, 7, 8, 9].map((idx) => (
                        <div key={idx} className="h-14 flex items-center font-mono text-slate-400">
                          arr[{idx}]
                        </div>
                      ))}
                      <div className="h-8"></div>
                    </div>
                  </div>

                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Key Insight:</strong> Stack uses an array with a <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">top</code> pointer. Push increments top, Pop decrements top.
                    </p>
                  </div>
                </div>
              </div>

              {/* C++ Code */}
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto mb-4">
                <div className="text-xs text-slate-400 mb-2">C++ Implementation:</div>
                <pre className="text-sm text-slate-300 font-mono leading-relaxed"><code>{`class Stack {
private:
    int* arr;
    int top;
    int capacity;
public:
    Stack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }
    void push(int x) {
        if (top >= capacity - 1) {
            throw overflow_error("Stack Overflow");
        }
        arr[++top] = x;
    }
    int pop() {
        if (top < 0) {
            throw underflow_error("Stack Underflow");
        }
        return arr[top--];
    }
    int peek() {
        return (top < 0) ? -1 : arr[top];
    }
    bool isEmpty() {
        return top < 0;
    }
};`}</code></pre>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 dark:text-green-200 mb-2">✅ Advantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• Fast O(1) operations</li>
                    <li>• Cache-friendly</li>
                    <li>• Simple implementation</li>
                    <li>• No pointer overhead</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-bold text-red-900 dark:text-red-200 mb-2">❌ Disadvantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• Fixed maximum size</li>
                    <li>• Stack overflow possible</li>
                    <li>• Wasted space if underused</li>
                    <li>• Resize is expensive</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Linked Implementation */}
        {selectedImpl === "linked" && (
          <motion.div
            key="linked"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-200">
                🔗 Linked Stack Implementation
              </h3>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-green-200 dark:border-green-700 mb-6">
                <h4 className="font-bold mb-4 text-slate-900 dark:text-slate-100">Memory Layout:</h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-mono text-green-600 dark:text-green-400 w-16">top →</div>
                    <div className="bg-green-500 text-white px-6 py-4 rounded font-mono font-bold">40</div>
                    <div className="text-2xl">→</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16"></div>
                    <div className="bg-green-500 text-white px-6 py-4 rounded font-mono font-bold">30</div>
                    <div className="text-2xl">→</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16"></div>
                    <div className="bg-green-500 text-white px-6 py-4 rounded font-mono font-bold">20</div>
                    <div className="text-2xl">→</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16"></div>
                    <div className="bg-green-500 text-white px-6 py-4 rounded font-mono font-bold">10</div>
                    <div className="text-2xl">→</div>
                    <div className="text-sm font-mono text-slate-500">null</div>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800 mt-4">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Key Insight:</strong> Each node contains data and a pointer to next. Push adds to head, Pop removes from head.
                    </p>
                  </div>
                </div>
              </div>

              {/* C++ Code */}
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto mb-4">
                <div className="text-xs text-slate-400 mb-2">C++ Implementation:</div>
                <pre className="text-sm text-slate-300 font-mono leading-relaxed"><code>{`struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class Stack {
private:
    Node* top;
    int stackSize;
public:
    Stack() : top(nullptr), stackSize(0) {}

    void push(int x) {
        Node* newNode = new Node(x);
        newNode->next = top;
        top = newNode;
        stackSize++;
    }

    int pop() {
        if (isEmpty()) {
            throw underflow_error("Stack Empty");
        }
        Node* temp = top;
        int value = top->data;
        top = top->next;
        delete temp;
        stackSize--;
        return value;
    }

    int peek() {
        return isEmpty() ? -1 : top->data;
    }

    bool isEmpty() {
        return top == nullptr;
    }
};`}</code></pre>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 dark:text-green-200 mb-2">✅ Advantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• Dynamic size</li>
                    <li>• No overflow</li>
                    <li>• Memory efficient</li>
                    <li>• Easy to implement</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-bold text-red-900 dark:text-red-200 mb-2">❌ Disadvantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• Extra memory for pointers</li>
                    <li>• Not cache-friendly</li>
                    <li>• Slower than array</li>
                    <li>• Memory fragmentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto"
        >
          <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            📊 Array vs Linked Comparison
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <th className="border border-purple-500 px-4 py-3 text-left">Feature</th>
                <th className="border border-purple-500 px-4 py-3 text-center">Array-Based</th>
                <th className="border border-purple-500 px-4 py-3 text-center">Linked List</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Push/Pop Time</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">O(1)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">O(1)</td>
              </tr>
              <tr className="bg-white dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Memory per Element</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Just data</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Data + pointer</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Cache Performance</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Excellent</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Poor</td>
              </tr>
              <tr className="bg-white dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Max Size</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Fixed</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Unlimited</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Best Use Case</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Known max size</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Unknown size</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
