"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LinkedListMemoryLayout() {
  const [selectedImpl, setSelectedImpl] = useState("singly");

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
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedImpl("singly")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedImpl === "singly"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            🔗 Singly Linked List
          </button>
          <button
            onClick={() => setSelectedImpl("doubly")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedImpl === "doubly"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            ⇄ Doubly Linked List
          </button>
          <button
            onClick={() => setSelectedImpl("circular")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedImpl === "circular"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            🔄 Circular Linked List
          </button>
        </div>

        {/* Singly Linked List Implementation */}
        {selectedImpl === "singly" && (
          <motion.div
            key="singly"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-200">
                🔗 Singly Linked List Implementation
              </h3>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-green-200 dark:border-green-700 mb-6">
                <h4 className="font-bold mb-4 text-slate-900 dark:text-slate-100">Memory Layout:</h4>

                {/* Visual Memory Diagram */}
                <div className="space-y-6 overflow-x-auto pb-4">
                  <div className="flex items-center gap-3 min-w-max">
                    <div className="text-sm font-mono text-green-600 dark:text-green-400">HEAD →</div>

                    {/* Node 1 */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-slate-500 mb-1">0x1A2B</div>
                      <div className="flex border-2 border-green-600 dark:border-green-500 rounded-lg overflow-hidden bg-green-500 text-white">
                        <div className="px-4 py-3 border-r-2 border-green-400">
                          <div className="text-xs opacity-70">data</div>
                          <div className="font-mono font-bold">10</div>
                        </div>
                        <div className="px-4 py-3">
                          <div className="text-xs opacity-70">next</div>
                          <div className="font-mono text-xs">0x2C3D</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-2xl text-green-600">→</div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-slate-500 mb-1">0x2C3D</div>
                      <div className="flex border-2 border-green-600 dark:border-green-500 rounded-lg overflow-hidden bg-green-500 text-white">
                        <div className="px-4 py-3 border-r-2 border-green-400">
                          <div className="text-xs opacity-70">data</div>
                          <div className="font-mono font-bold">20</div>
                        </div>
                        <div className="px-4 py-3">
                          <div className="text-xs opacity-70">next</div>
                          <div className="font-mono text-xs">0x3E4F</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-2xl text-green-600">→</div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-slate-500 mb-1">0x3E4F</div>
                      <div className="flex border-2 border-green-600 dark:border-green-500 rounded-lg overflow-hidden bg-green-500 text-white">
                        <div className="px-4 py-3 border-r-2 border-green-400">
                          <div className="text-xs opacity-70">data</div>
                          <div className="font-mono font-bold">30</div>
                        </div>
                        <div className="px-4 py-3">
                          <div className="text-xs opacity-70">next</div>
                          <div className="font-mono text-xs">NULL</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-2xl text-green-600">→</div>
                    <div className="px-3 py-2 bg-slate-300 dark:bg-slate-600 rounded font-mono text-sm">NULL</div>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Key Insight:</strong> Nodes are scattered in memory (non-contiguous). Each node
                      contains data and a pointer to the next node's memory address.
                    </p>
                  </div>
                </div>
              </div>

              {/* Node Structure in C++ */}
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto mb-4">
                <div className="text-xs text-slate-400 mb-2">C++ Node Structure:</div>
                <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                  <code>{`struct Node {
    int data;           // Data stored in the node
    Node* next;         // Pointer to next node

    // Constructor
    Node(int val) : data(val), next(nullptr) {}
};

class SinglyLinkedList {
private:
    Node* head;
    int size;

public:
    SinglyLinkedList() : head(nullptr), size(0) {}

    // Insert at beginning - O(1)
    void insertAtHead(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
        size++;
    }

    // Insert at end - O(n)
    void insertAtTail(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
        } else {
            Node* curr = head;
            while (curr->next) {
                curr = curr->next;
            }
            curr->next = newNode;
        }
        size++;
    }

    // Delete node with value - O(n)
    void deleteValue(int val) {
        if (!head) return;

        if (head->data == val) {
            Node* temp = head;
            head = head->next;
            delete temp;
            size--;
            return;
        }

        Node* curr = head;
        while (curr->next && curr->next->data != val) {
            curr = curr->next;
        }

        if (curr->next) {
            Node* temp = curr->next;
            curr->next = curr->next->next;
            delete temp;
            size--;
        }
    }

    // Search - O(n)
    bool search(int val) {
        Node* curr = head;
        while (curr) {
            if (curr->data == val) return true;
            curr = curr->next;
        }
        return false;
    }

    // Reverse - O(n)
    void reverse() {
        Node* prev = nullptr;
        Node* curr = head;
        Node* next = nullptr;

        while (curr) {
            next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        head = prev;
    }
};`}</code>
                </pre>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 dark:text-green-200 mb-2">✅ Advantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• Simple implementation</li>
                    <li>• Less memory per node (one pointer)</li>
                    <li>• Efficient insertion at head O(1)</li>
                    <li>• Dynamic size</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-bold text-red-900 dark:text-red-200 mb-2">❌ Disadvantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• No backward traversal</li>
                    <li>• Deletion requires previous node</li>
                    <li>• No random access</li>
                    <li>• Not cache-friendly</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Doubly Linked List Implementation */}
        {selectedImpl === "doubly" && (
          <motion.div
            key="doubly"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-900 dark:text-teal-200">
                ⇄ Doubly Linked List Implementation
              </h3>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-teal-200 dark:border-teal-700 mb-6">
                <h4 className="font-bold mb-4 text-slate-900 dark:text-slate-100">Memory Layout:</h4>

                <div className="space-y-6 overflow-x-auto pb-4">
                  <div className="flex items-center gap-2 min-w-max">
                    <div className="px-2 py-1 bg-slate-300 dark:bg-slate-600 rounded font-mono text-xs">NULL</div>
                    <div className="text-lg text-teal-600">←</div>

                    {/* Node 1 */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-slate-500 mb-1">0x1A2B</div>
                      <div className="flex border-2 border-teal-600 dark:border-teal-500 rounded-lg overflow-hidden bg-teal-500 text-white">
                        <div className="px-3 py-2">
                          <div className="text-xs opacity-70">prev</div>
                          <div className="font-mono text-xs">NULL</div>
                        </div>
                        <div className="px-3 py-2 border-x-2 border-teal-400">
                          <div className="text-xs opacity-70">data</div>
                          <div className="font-mono font-bold">10</div>
                        </div>
                        <div className="px-3 py-2">
                          <div className="text-xs opacity-70">next</div>
                          <div className="font-mono text-xs">0x2C3D</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-lg text-teal-600">⇄</div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-slate-500 mb-1">0x2C3D</div>
                      <div className="flex border-2 border-teal-600 dark:border-teal-500 rounded-lg overflow-hidden bg-teal-500 text-white">
                        <div className="px-3 py-2">
                          <div className="text-xs opacity-70">prev</div>
                          <div className="font-mono text-xs">0x1A2B</div>
                        </div>
                        <div className="px-3 py-2 border-x-2 border-teal-400">
                          <div className="text-xs opacity-70">data</div>
                          <div className="font-mono font-bold">20</div>
                        </div>
                        <div className="px-3 py-2">
                          <div className="text-xs opacity-70">next</div>
                          <div className="font-mono text-xs">0x3E4F</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-lg text-teal-600">⇄</div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-slate-500 mb-1">0x3E4F</div>
                      <div className="flex border-2 border-teal-600 dark:border-teal-500 rounded-lg overflow-hidden bg-teal-500 text-white">
                        <div className="px-3 py-2">
                          <div className="text-xs opacity-70">prev</div>
                          <div className="font-mono text-xs">0x2C3D</div>
                        </div>
                        <div className="px-3 py-2 border-x-2 border-teal-400">
                          <div className="text-xs opacity-70">data</div>
                          <div className="font-mono font-bold">30</div>
                        </div>
                        <div className="px-3 py-2">
                          <div className="text-xs opacity-70">next</div>
                          <div className="font-mono text-xs">NULL</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-lg text-teal-600">→</div>
                    <div className="px-2 py-1 bg-slate-300 dark:bg-slate-600 rounded font-mono text-xs">NULL</div>
                  </div>

                  <div className="bg-teal-100 dark:bg-teal-900/30 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Key Insight:</strong> Each node has two pointers - one to the next node and one to
                      the previous node. This allows bidirectional traversal at the cost of extra memory.
                    </p>
                  </div>
                </div>
              </div>

              {/* C++ Code */}
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto mb-4">
                <div className="text-xs text-slate-400 mb-2">C++ Implementation:</div>
                <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                  <code>{`struct Node {
    int data;
    Node* prev;
    Node* next;

    Node(int val) : data(val), prev(nullptr), next(nullptr) {}
};

class DoublyLinkedList {
private:
    Node* head;
    Node* tail;
    int size;

public:
    DoublyLinkedList() : head(nullptr), tail(nullptr), size(0) {}

    // Insert at head - O(1)
    void insertAtHead(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
        size++;
    }

    // Insert at tail - O(1) with tail pointer
    void insertAtTail(int val) {
        Node* newNode = new Node(val);
        if (!tail) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
        size++;
    }

    // Delete node - O(1) if node pointer is given
    void deleteNode(Node* node) {
        if (!node) return;

        if (node->prev) {
            node->prev->next = node->next;
        } else {
            head = node->next;
        }

        if (node->next) {
            node->next->prev = node->prev;
        } else {
            tail = node->prev;
        }

        delete node;
        size--;
    }

    // Reverse - O(n)
    void reverse() {
        Node* curr = head;
        Node* temp = nullptr;

        while (curr) {
            temp = curr->prev;
            curr->prev = curr->next;
            curr->next = temp;
            curr = curr->prev;
        }

        if (temp) {
            head = temp->prev;
        }
        swap(head, tail);
    }
};`}</code>
                </pre>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 dark:text-green-200 mb-2">✅ Advantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• Bidirectional traversal</li>
                    <li>• O(1) deletion with node reference</li>
                    <li>• O(1) insertion at tail (with tail pointer)</li>
                    <li>• Easier to implement certain algorithms</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-bold text-red-900 dark:text-red-200 mb-2">❌ Disadvantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• Extra memory for prev pointer</li>
                    <li>• More complex implementation</li>
                    <li>• Slower than singly linked list</li>
                    <li>• More pointers to maintain</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Circular Linked List Implementation */}
        {selectedImpl === "circular" && (
          <motion.div
            key="circular"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200">
                🔄 Circular Linked List Implementation
              </h3>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-indigo-200 dark:border-indigo-700 mb-6">
                <h4 className="font-bold mb-4 text-slate-900 dark:text-slate-100">Memory Layout:</h4>

                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                      {/* Circular visualization */}
                      <div className="relative w-80 h-80">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Circle path */}
                          <circle
                            cx="100"
                            cy="100"
                            r="60"
                            fill="none"
                            stroke="rgb(99 102 241)"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                          />

                          {/* Nodes */}
                          {[0, 120, 240].map((angle, idx) => {
                            const x = 100 + 60 * Math.cos((angle - 90) * Math.PI / 180);
                            const y = 100 + 60 * Math.sin((angle - 90) * Math.PI / 180);
                            return (
                              <g key={idx}>
                                <rect
                                  x={x - 20}
                                  y={y - 12}
                                  width="40"
                                  height="24"
                                  fill="rgb(99 102 241)"
                                  rx="4"
                                />
                                <text
                                  x={x}
                                  y={y + 5}
                                  textAnchor="middle"
                                  fill="white"
                                  fontSize="14"
                                  fontWeight="bold"
                                >
                                  {(idx + 1) * 10}
                                </text>

                                {/* Arrow */}
                                <path
                                  d={`M ${x + 20} ${y} Q ${100 + 70 * Math.cos((angle + 60 - 90) * Math.PI / 180)} ${100 + 70 * Math.sin((angle + 60 - 90) * Math.PI / 180)} ${100 + 60 * Math.cos((angle + 120 - 90) * Math.PI / 180) - 20} ${100 + 60 * Math.sin((angle + 120 - 90) * Math.PI / 180)}`}
                                  fill="none"
                                  stroke="rgb(99 102 241)"
                                  strokeWidth="2"
                                  markerEnd="url(#arrowhead)"
                                />
                              </g>
                            );
                          })}

                          {/* Arrow marker */}
                          <defs>
                            <marker
                              id="arrowhead"
                              markerWidth="10"
                              markerHeight="10"
                              refX="9"
                              refY="3"
                              orient="auto"
                            >
                              <polygon points="0 0, 10 3, 0 6" fill="rgb(99 102 241)" />
                            </marker>
                          </defs>
                        </svg>

                        {/* HEAD label */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-sm font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                          HEAD
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Key Insight:</strong> The last node points back to the first node instead of NULL,
                      forming a circle. This allows continuous traversal without NULL checks.
                    </p>
                  </div>
                </div>
              </div>

              {/* C++ Code */}
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto mb-4">
                <div className="text-xs text-slate-400 mb-2">C++ Implementation:</div>
                <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                  <code>{`struct Node {
    int data;
    Node* next;

    Node(int val) : data(val), next(nullptr) {}
};

class CircularLinkedList {
private:
    Node* head;
    int size;

public:
    CircularLinkedList() : head(nullptr), size(0) {}

    // Insert at head - O(n) to update last node
    void insertAtHead(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            newNode->next = newNode;  // Points to itself
            head = newNode;
        } else {
            Node* tail = head;
            while (tail->next != head) {
                tail = tail->next;
            }
            newNode->next = head;
            tail->next = newNode;
            head = newNode;
        }
        size++;
    }

    // Insert at end - O(n)
    void insertAtTail(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            newNode->next = newNode;
            head = newNode;
        } else {
            Node* tail = head;
            while (tail->next != head) {
                tail = tail->next;
            }
            tail->next = newNode;
            newNode->next = head;
        }
        size++;
    }

    // Delete node - O(n)
    void deleteValue(int val) {
        if (!head) return;

        // If head needs to be deleted
        if (head->data == val) {
            if (head->next == head) {
                delete head;
                head = nullptr;
            } else {
                Node* tail = head;
                while (tail->next != head) {
                    tail = tail->next;
                }
                Node* temp = head;
                tail->next = head->next;
                head = head->next;
                delete temp;
            }
            size--;
            return;
        }

        // Delete other nodes
        Node* curr = head;
        while (curr->next != head && curr->next->data != val) {
            curr = curr->next;
        }

        if (curr->next != head) {
            Node* temp = curr->next;
            curr->next = curr->next->next;
            delete temp;
            size--;
        }
    }

    // Traverse - Be careful to avoid infinite loop
    void traverse() {
        if (!head) return;
        Node* curr = head;
        do {
            cout << curr->data << " ";
            curr = curr->next;
        } while (curr != head);
    }
};`}</code>
                </pre>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 dark:text-green-200 mb-2">✅ Advantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• Can traverse entire list from any node</li>
                    <li>• Useful for round-robin scheduling</li>
                    <li>• No NULL pointers to check</li>
                    <li>• Perfect for cyclic processes</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-bold text-red-900 dark:text-red-200 mb-2">❌ Disadvantages</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• Risk of infinite loops if not careful</li>
                    <li>• More complex implementation</li>
                    <li>• Harder to detect end of list</li>
                    <li>• Deletion is more complex</li>
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
            📊 Linked List Types Comparison
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <th className="border border-green-500 px-4 py-3 text-left">Feature</th>
                <th className="border border-green-500 px-4 py-3 text-center">Singly Linked</th>
                <th className="border border-green-500 px-4 py-3 text-center">Doubly Linked</th>
                <th className="border border-green-500 px-4 py-3 text-center">Circular Linked</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">
                  Pointers per Node
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">1 (next)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  2 (prev, next)
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">1 (next)</td>
              </tr>
              <tr className="bg-white dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">
                  Traversal Direction
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Forward only</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Both</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  Forward (circular)
                </td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">
                  Insert at Head
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">O(1)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">O(1)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">O(n)</td>
              </tr>
              <tr className="bg-white dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">
                  Insert at Tail
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  O(n) or O(1)*
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">O(1)*</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">O(n)</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">
                  Delete Node
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  O(n) need prev
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">O(1)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">O(n)</td>
              </tr>
              <tr className="bg-white dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">
                  Memory Usage
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Lowest</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Highest</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Low</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">
                  Implementation
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Simplest</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">Complex</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  Moderate
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">
                  Best Use Case
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  Stacks, basic lists
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  LRU cache, deque
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  Round-robin
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            * O(1) with tail pointer maintained
          </p>
        </motion.div>
      </div>
    </div>
  );
}
