"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PriorityQueue() {
  const [currentLanguage, setCurrentLanguage] = useState("cpp");

  const languages = [
    { id: "c", name: "C", icon: "🔷" },
    { id: "cpp", name: "C++", icon: "⚡" },
    { id: "java", name: "Java", icon: "☕" },
    { id: "javascript", name: "JavaScript", icon: "🟨" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "go", name: "Go", icon: "🔵" },
  ];

  const codeExamples = {
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int value;
    int priority;
} Element;

typedef struct {
    Element items[MAX_SIZE];
    int size;
} PriorityQueue;

// Initialize priority queue - O(1)
PriorityQueue* createPriorityQueue() {
    PriorityQueue* pq = (PriorityQueue*)malloc(sizeof(PriorityQueue));
    pq->size = 0;
    return pq;
}

// Helper: Get parent index - O(1)
int parent(int i) {
    return (i - 1) / 2;
}

// Helper: Get left child index - O(1)
int leftChild(int i) {
    return 2 * i + 1;
}

// Helper: Get right child index - O(1)
int rightChild(int i) {
    return 2 * i + 2;
}

// Swap two elements - O(1)
void swap(Element* a, Element* b) {
    Element temp = *a;
    *a = *b;
    *b = temp;
}

// Heapify up - O(log n)
void heapifyUp(PriorityQueue* pq, int index) {
    while (index > 0) {
        int parentIdx = parent(index);
        // Min heap: parent priority should be smaller
        if (pq->items[parentIdx].priority > pq->items[index].priority) {
            swap(&pq->items[parentIdx], &pq->items[index]);
            index = parentIdx;
        } else {
            break;
        }
    }
}

// Heapify down - O(log n)
void heapifyDown(PriorityQueue* pq, int index) {
    while (leftChild(index) < pq->size) {
        int smallerChildIdx = leftChild(index);
        int rightIdx = rightChild(index);

        if (rightIdx < pq->size &&
            pq->items[rightIdx].priority < pq->items[smallerChildIdx].priority) {
            smallerChildIdx = rightIdx;
        }

        if (pq->items[index].priority > pq->items[smallerChildIdx].priority) {
            swap(&pq->items[index], &pq->items[smallerChildIdx]);
            index = smallerChildIdx;
        } else {
            break;
        }
    }
}

// Enqueue with priority - O(log n)
void enqueue(PriorityQueue* pq, int value, int priority) {
    if (pq->size >= MAX_SIZE) {
        printf("Queue is full\\n");
        return;
    }

    Element element = {value, priority};
    pq->items[pq->size] = element;
    heapifyUp(pq, pq->size);
    pq->size++;
}

// Dequeue (remove min priority) - O(log n)
int dequeue(PriorityQueue* pq) {
    if (pq->size == 0) {
        printf("Queue is empty\\n");
        return -1;
    }

    if (pq->size == 1) {
        pq->size--;
        return pq->items[0].value;
    }

    int minValue = pq->items[0].value;
    pq->items[0] = pq->items[pq->size - 1];
    pq->size--;
    heapifyDown(pq, 0);
    return minValue;
}

// Peek - O(1)
int peek(PriorityQueue* pq) {
    if (pq->size == 0) {
        printf("Queue is empty\\n");
        return -1;
    }
    return pq->items[0].value;
}

// Usage
int main() {
    PriorityQueue* pq = createPriorityQueue();
    enqueue(pq, 100, 5);  // value 100, priority 5
    enqueue(pq, 200, 1);  // value 200, priority 1 (higher)
    enqueue(pq, 300, 3);  // value 300, priority 3
    printf("Dequeued: %d\\n", dequeue(pq));  // 200 (priority 1)
    printf("Dequeued: %d\\n", dequeue(pq));  // 300 (priority 3)
    free(pq);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Element {
    int value;
    int priority;
};

class PriorityQueue {
private:
    vector<Element> items;

    // Helper: Get parent index - O(1)
    int parent(int i) { return (i - 1) / 2; }

    // Helper: Get left child index - O(1)
    int leftChild(int i) { return 2 * i + 1; }

    // Helper: Get right child index - O(1)
    int rightChild(int i) { return 2 * i + 2; }

    // Swap two elements - O(1)
    void swap(int i, int j) {
        Element temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }

    // Heapify up - O(log n)
    void heapifyUp(int index) {
        while (index > 0) {
            int parentIdx = parent(index);
            // Min heap: parent priority should be smaller
            if (items[parentIdx].priority > items[index].priority) {
                swap(parentIdx, index);
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    // Heapify down - O(log n)
    void heapifyDown(int index) {
        while (leftChild(index) < items.size()) {
            int smallerChildIdx = leftChild(index);
            int rightIdx = rightChild(index);

            if (rightIdx < items.size() &&
                items[rightIdx].priority < items[smallerChildIdx].priority) {
                smallerChildIdx = rightIdx;
            }

            if (items[index].priority > items[smallerChildIdx].priority) {
                swap(index, smallerChildIdx);
                index = smallerChildIdx;
            } else {
                break;
            }
        }
    }

public:
    // Constructor - O(1)
    PriorityQueue() {}

    // Enqueue with priority - O(log n)
    void enqueue(int value, int priority) {
        Element element = {value, priority};
        items.push_back(element);
        heapifyUp(items.size() - 1);
    }

    // Dequeue (remove min priority) - O(log n)
    int dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return -1;
        }

        if (items.size() == 1) {
            int value = items[0].value;
            items.pop_back();
            return value;
        }

        int minValue = items[0].value;
        items[0] = items.back();
        items.pop_back();
        heapifyDown(0);
        return minValue;
    }

    // Peek at highest priority element - O(1)
    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return -1;
        }
        return items[0].value;
    }

    // Check if empty - O(1)
    bool isEmpty() {
        return items.empty();
    }

    // Get size - O(1)
    int size() {
        return items.size();
    }
};

// Usage
int main() {
    PriorityQueue pq;
    pq.enqueue(100, 5);  // value 100, priority 5
    pq.enqueue(200, 1);  // value 200, priority 1 (higher)
    pq.enqueue(300, 3);  // value 300, priority 3
    cout << "Dequeued: " << pq.dequeue() << endl;  // 200 (priority 1)
    cout << "Dequeued: " << pq.dequeue() << endl;  // 300 (priority 3)
    return 0;
}`,

    java: `import java.util.ArrayList;

class Element {
    int value;
    int priority;

    Element(int value, int priority) {
        this.value = value;
        this.priority = priority;
    }
}

public class PriorityQueue {
    private ArrayList<Element> items;

    // Constructor - O(1)
    public PriorityQueue() {
        items = new ArrayList<>();
    }

    // Helper: Get parent index - O(1)
    private int parent(int i) { return (i - 1) / 2; }

    // Helper: Get left child index - O(1)
    private int leftChild(int i) { return 2 * i + 1; }

    // Helper: Get right child index - O(1)
    private int rightChild(int i) { return 2 * i + 2; }

    // Swap two elements - O(1)
    private void swap(int i, int j) {
        Element temp = items.get(i);
        items.set(i, items.get(j));
        items.set(j, temp);
    }

    // Heapify up - O(log n)
    private void heapifyUp(int index) {
        while (index > 0) {
            int parentIdx = parent(index);
            // Min heap: parent priority should be smaller
            if (items.get(parentIdx).priority > items.get(index).priority) {
                swap(parentIdx, index);
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    // Heapify down - O(log n)
    private void heapifyDown(int index) {
        while (leftChild(index) < items.size()) {
            int smallerChildIdx = leftChild(index);
            int rightIdx = rightChild(index);

            if (rightIdx < items.size() &&
                items.get(rightIdx).priority < items.get(smallerChildIdx).priority) {
                smallerChildIdx = rightIdx;
            }

            if (items.get(index).priority > items.get(smallerChildIdx).priority) {
                swap(index, smallerChildIdx);
                index = smallerChildIdx;
            } else {
                break;
            }
        }
    }

    // Enqueue with priority - O(log n)
    public void enqueue(int value, int priority) {
        Element element = new Element(value, priority);
        items.add(element);
        heapifyUp(items.size() - 1);
    }

    // Dequeue (remove min priority) - O(log n)
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return -1;
        }

        if (items.size() == 1) {
            return items.remove(0).value;
        }

        int minValue = items.get(0).value;
        items.set(0, items.remove(items.size() - 1));
        heapifyDown(0);
        return minValue;
    }

    // Peek at highest priority element - O(1)
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return -1;
        }
        return items.get(0).value;
    }

    // Check if empty - O(1)
    public boolean isEmpty() {
        return items.isEmpty();
    }

    // Get size - O(1)
    public int size() {
        return items.size();
    }

    // Usage
    public static void main(String[] args) {
        PriorityQueue pq = new PriorityQueue();
        pq.enqueue(100, 5);  // value 100, priority 5
        pq.enqueue(200, 1);  // value 200, priority 1 (higher)
        pq.enqueue(300, 3);  // value 300, priority 3
        System.out.println("Dequeued: " + pq.dequeue());  // 200
        System.out.println("Dequeued: " + pq.dequeue());  // 300
    }
}`,

    javascript: `class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Helper methods for heap
    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    // Swap two elements
    swap(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
    }

    // Enqueue with priority - O(log n)
    enqueue(value, priority) {
        const element = { value, priority };
        this.items.push(element);
        this.heapifyUp(this.items.length - 1);
    }

    // Move element up to maintain heap property
    heapifyUp(index) {
        while (index > 0) {
            const parentIdx = this.parent(index);
            // Min heap: parent should be smaller
            if (this.items[parentIdx].priority > this.items[index].priority) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    // Dequeue (remove min/max priority) - O(log n)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        if (this.items.length === 1) {
            return this.items.pop().value;
        }

        const min = this.items[0];
        this.items[0] = this.items.pop();
        this.heapifyDown(0);
        return min.value;
    }

    // Move element down to maintain heap property
    heapifyDown(index) {
        while (this.leftChild(index) < this.items.length) {
            let smallerChildIdx = this.leftChild(index);
            const rightIdx = this.rightChild(index);

            if (rightIdx < this.items.length &&
                this.items[rightIdx].priority < this.items[smallerChildIdx].priority) {
                smallerChildIdx = rightIdx;
            }

            if (this.items[index].priority > this.items[smallerChildIdx].priority) {
                this.swap(index, smallerChildIdx);
                index = smallerChildIdx;
            } else {
                break;
            }
        }
    }

    // Peek at highest priority element - O(1)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0].value;
    }

    // Check if empty - O(1)
    isEmpty() {
        return this.items.length === 0;
    }

    // Get size - O(1)
    size() {
        return this.items.length;
    }
}

// Usage
const pq = new PriorityQueue();
pq.enqueue("Low priority task", 5);
pq.enqueue("High priority task", 1);
pq.enqueue("Medium priority task", 3);

console.log(pq.dequeue()); // High priority task (priority 1)
console.log(pq.dequeue()); // Medium priority task (priority 3)`,

    python: `import heapq

class PriorityQueue:
    def __init__(self):
        self.items = []

    # Enqueue with priority - O(log n)
    def enqueue(self, value, priority):
        heapq.heappush(self.items, (priority, value))

    # Dequeue (remove min priority) - O(log n)
    def dequeue(self):
        if self.is_empty():
            return "Queue is empty"
        return heapq.heappop(self.items)[1]

    # Peek at highest priority element - O(1)
    def peek(self):
        if self.is_empty():
            return "Queue is empty"
        return self.items[0][1]

    # Check if empty - O(1)
    def is_empty(self):
        return len(self.items) == 0

    # Get size - O(1)
    def size(self):
        return len(self.items)

# Usage
pq = PriorityQueue()
pq.enqueue("Low priority task", 5)
pq.enqueue("High priority task", 1)
pq.enqueue("Medium priority task", 3)

print(pq.dequeue())  # High priority task (priority 1)
print(pq.dequeue())  # Medium priority task (priority 3)`,

    go: `package main

import (
    "container/heap"
    "fmt"
)

// Element represents an item in the priority queue
type Element struct {
    value    interface{}
    priority int
    index    int
}

// PriorityQueue implements heap.Interface
type PriorityQueue []*Element

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
    // Min heap: lower priority value means higher importance
    return pq[i].priority < pq[j].priority
}

func (pq PriorityQueue) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
    pq[i].index = i
    pq[j].index = j
}

func (pq *PriorityQueue) Push(x interface{}) {
    n := len(*pq)
    element := x.(*Element)
    element.index = n
    *pq = append(*pq, element)
}

func (pq *PriorityQueue) Pop() interface{} {
    old := *pq
    n := len(old)
    element := old[n-1]
    old[n-1] = nil
    element.index = -1
    *pq = old[0 : n-1]
    return element
}

// Enqueue adds an element with priority - O(log n)
func Enqueue(pq *PriorityQueue, value interface{}, priority int) {
    element := &Element{
        value:    value,
        priority: priority,
    }
    heap.Push(pq, element)
}

// Dequeue removes and returns highest priority element - O(log n)
func Dequeue(pq *PriorityQueue) interface{} {
    if pq.Len() == 0 {
        return nil
    }
    element := heap.Pop(pq).(*Element)
    return element.value
}

// Peek returns highest priority element without removing - O(1)
func Peek(pq *PriorityQueue) interface{} {
    if pq.Len() == 0 {
        return nil
    }
    return (*pq)[0].value
}

// Usage
func main() {
    pq := make(PriorityQueue, 0)
    heap.Init(&pq)

    Enqueue(&pq, "Low priority task", 5)
    Enqueue(&pq, "High priority task", 1)
    Enqueue(&pq, "Medium priority task", 3)

    fmt.Println(Dequeue(&pq))  // High priority task (priority 1)
    fmt.Println(Dequeue(&pq))  // Medium priority task (priority 3)
    fmt.Println(Dequeue(&pq))  // Low priority task (priority 5)
}`,
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <span className="text-4xl">⭐</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Priority Queue
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Elements served based on priority, not insertion order
          </p>
        </div>
      </div>

      {/* Key Concept */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            🎯 What is Priority Queue?
          </h3>
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            Unlike normal queues (FIFO), a priority queue serves elements based on their <strong>priority value</strong>. The element with the highest (or lowest) priority is dequeued first, regardless of insertion order.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 dark:text-purple-300 mb-2">Min Priority Queue</p>
              <p>Smallest priority value has highest importance (dequeued first)</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 dark:text-purple-300 mb-2">Max Priority Queue</p>
              <p>Largest priority value has highest importance (dequeued first)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Example */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          📊 Priority Order Example
        </h3>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
          <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-6 text-center">
            Insertion Order vs Priority Order (Min Heap)
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Insertion Order */}
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 text-center">
                Insertion Order
              </p>
              <div className="space-y-3">
                {[
                  { task: "Low priority", priority: 5, color: "bg-blue-500" },
                  { task: "High priority", priority: 1, color: "bg-red-500" },
                  { task: "Medium priority", priority: 3, color: "bg-yellow-500" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className={`${item.color} text-white p-4 rounded-lg shadow-lg`}
                  >
                    <div className="font-bold">{item.task}</div>
                    <div className="text-sm opacity-90">Priority: {item.priority}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Priority Order */}
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 text-center">
                Dequeue Order (Priority)
              </p>
              <div className="space-y-3">
                {[
                  { task: "High priority", priority: 1, color: "bg-red-500", order: "1st" },
                  { task: "Medium priority", priority: 3, color: "bg-yellow-500", order: "2nd" },
                  { task: "Low priority", priority: 5, color: "bg-blue-500", order: "3rd" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className={`${item.color} text-white p-4 rounded-lg shadow-lg relative`}
                  >
                    <div className="absolute -left-3 -top-3 bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                      {item.order}
                    </div>
                    <div className="font-bold">{item.task}</div>
                    <div className="text-sm opacity-90">Priority: {item.priority}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation (Heap-based) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Implementation (Min Heap)
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setCurrentLanguage(lang.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                currentLanguage === lang.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              <span>{lang.icon}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{codeExamples[currentLanguage]}</code>
          </pre>
        </div>
      </div>

      {/* Complexity */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Time Complexity
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { op: "Enqueue", complexity: "O(log n)", desc: "Insert and heapify up" },
            { op: "Dequeue", complexity: "O(log n)", desc: "Remove root and heapify down" },
            { op: "Peek", complexity: "O(1)", desc: "Access root element" },
          ].map((item, idx) => (
            <div key={idx} className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.op}</h4>
              <div className="text-3xl font-bold text-purple-600 mb-2 font-mono">{item.complexity}</div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { app: "Dijkstra's Algorithm", desc: "Shortest path in graphs", icon: "🗺️" },
            { app: "A* Search Algorithm", desc: "Pathfinding and graph traversal", icon: "🎯" },
            { app: "Huffman Coding", desc: "Data compression algorithm", icon: "🗜️" },
            { app: "Task Scheduling", desc: "CPU scheduling, job scheduling", icon: "📋" },
            { app: "Event-Driven Simulation", desc: "Managing events by time", icon: "⏰" },
            { app: "Prim's MST Algorithm", desc: "Minimum spanning tree", icon: "🌳" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.app}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
