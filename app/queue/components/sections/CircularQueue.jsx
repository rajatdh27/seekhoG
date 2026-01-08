"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CircularQueue() {
  const [currentLanguage, setCurrentLanguage] = useState("cpp");
  const [queue, setQueue] = useState([10, 20, 30, null, null]);
  const [front, setFront] = useState(0);
  const [rear, setRear] = useState(2);

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
    int items[MAX_SIZE];
    int front;
    int rear;
    int size;
    int capacity;
} CircularQueue;

// Initialize queue - O(1)
CircularQueue* createQueue(int capacity) {
    CircularQueue* queue = (CircularQueue*)malloc(sizeof(CircularQueue));
    queue->capacity = capacity;
    queue->front = -1;
    queue->rear = -1;
    queue->size = 0;
    return queue;
}

// Check if queue is full - O(1)
bool isFull(CircularQueue* queue) {
    return queue->size == queue->capacity;
}

// Check if queue is empty - O(1)
bool isEmpty(CircularQueue* queue) {
    return queue->size == 0;
}

// Enqueue element - O(1)
bool enqueue(CircularQueue* queue, int element) {
    if (isFull(queue)) {
        printf("Queue is full\\n");
        return false;
    }

    // First element
    if (queue->front == -1) {
        queue->front = 0;
    }

    // Circular increment
    queue->rear = (queue->rear + 1) % queue->capacity;
    queue->items[queue->rear] = element;
    queue->size++;
    return true;
}

// Dequeue element - O(1)
int dequeue(CircularQueue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return -1;
    }

    int element = queue->items[queue->front];

    if (queue->front == queue->rear) {
        // Last element
        queue->front = -1;
        queue->rear = -1;
    } else {
        // Circular increment
        queue->front = (queue->front + 1) % queue->capacity;
    }
    queue->size--;
    return element;
}

// Peek front element - O(1)
int peek(CircularQueue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return -1;
    }
    return queue->items[queue->front];
}

// Display queue - O(n)
void display(CircularQueue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return;
    }

    printf("Queue: ");
    int i = queue->front;
    do {
        printf("%d ", queue->items[i]);
        i = (i + 1) % queue->capacity;
    } while (i != (queue->rear + 1) % queue->capacity);
    printf("\\n");
}

// Usage
int main() {
    CircularQueue* queue = createQueue(5);
    enqueue(queue, 10);
    enqueue(queue, 20);
    enqueue(queue, 30);
    display(queue);
    printf("Dequeued: %d\\n", dequeue(queue));
    enqueue(queue, 40);
    display(queue);
    free(queue);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

class CircularQueue {
private:
    vector<int> items;
    int front;
    int rear;
    int size;
    int capacity;

public:
    // Constructor - O(1)
    CircularQueue(int cap) {
        capacity = cap;
        items.resize(cap);
        front = -1;
        rear = -1;
        size = 0;
    }

    // Check if queue is full - O(1)
    bool isFull() {
        return size == capacity;
    }

    // Check if queue is empty - O(1)
    bool isEmpty() {
        return size == 0;
    }

    // Enqueue element - O(1)
    bool enqueue(int element) {
        if (isFull()) {
            cout << "Queue is full" << endl;
            return false;
        }

        // First element
        if (front == -1) {
            front = 0;
        }

        // Circular increment
        rear = (rear + 1) % capacity;
        items[rear] = element;
        size++;
        return true;
    }

    // Dequeue element - O(1)
    int dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return -1;
        }

        int element = items[front];

        if (front == rear) {
            // Last element
            front = -1;
            rear = -1;
        } else {
            // Circular increment
            front = (front + 1) % capacity;
        }
        size--;
        return element;
    }

    // Peek front element - O(1)
    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return -1;
        }
        return items[front];
    }

    // Get current size - O(1)
    int getSize() {
        return size;
    }

    // Display queue - O(n)
    void display() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return;
        }

        cout << "Queue: ";
        int i = front;
        do {
            cout << items[i] << " ";
            i = (i + 1) % capacity;
        } while (i != (rear + 1) % capacity);
        cout << endl;
    }
};

// Usage
int main() {
    CircularQueue queue(5);
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.display();
    cout << "Dequeued: " << queue.dequeue() << endl;
    queue.enqueue(40);
    queue.display();
    return 0;
}`,

    java: `public class CircularQueue {
    private int[] items;
    private int front;
    private int rear;
    private int size;
    private int capacity;

    // Constructor - O(1)
    public CircularQueue(int capacity) {
        this.capacity = capacity;
        this.items = new int[capacity];
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    // Check if queue is full - O(1)
    public boolean isFull() {
        return size == capacity;
    }

    // Check if queue is empty - O(1)
    public boolean isEmpty() {
        return size == 0;
    }

    // Enqueue element - O(1)
    public boolean enqueue(int element) {
        if (isFull()) {
            System.out.println("Queue is full");
            return false;
        }

        // First element
        if (front == -1) {
            front = 0;
        }

        // Circular increment
        rear = (rear + 1) % capacity;
        items[rear] = element;
        size++;
        return true;
    }

    // Dequeue element - O(1)
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return -1;
        }

        int element = items[front];

        if (front == rear) {
            // Last element
            front = -1;
            rear = -1;
        } else {
            // Circular increment
            front = (front + 1) % capacity;
        }
        size--;
        return element;
    }

    // Peek front element - O(1)
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return -1;
        }
        return items[front];
    }

    // Get current size - O(1)
    public int getSize() {
        return size;
    }

    // Display queue - O(n)
    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }

        System.out.print("Queue: ");
        int i = front;
        do {
            System.out.print(items[i] + " ");
            i = (i + 1) % capacity;
        } while (i != (rear + 1) % capacity);
        System.out.println();
    }

    // Usage
    public static void main(String[] args) {
        CircularQueue queue = new CircularQueue(5);
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.display();
        System.out.println("Dequeued: " + queue.dequeue());
        queue.enqueue(40);
        queue.display();
    }
}`,

    javascript: `class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    // Check if queue is full - O(1)
    isFull() {
        return this.size === this.capacity;
    }

    // Check if queue is empty - O(1)
    isEmpty() {
        return this.size === 0;
    }

    // Enqueue element - O(1)
    enqueue(element) {
        if (this.isFull()) {
            return "Queue is full";
        }

        // First element
        if (this.front === -1) {
            this.front = 0;
        }

        // Circular increment
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.size++;
        return true;
    }

    // Dequeue element - O(1)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        const element = this.items[this.front];
        this.items[this.front] = null;

        if (this.front === this.rear) {
            // Last element
            this.front = -1;
            this.rear = -1;
        } else {
            // Circular increment
            this.front = (this.front + 1) % this.capacity;
        }
        this.size--;
        return element;
    }

    // Peek front element - O(1)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.front];
    }

    // Get current size - O(1)
    getSize() {
        return this.size;
    }

    // Display queue - O(n)
    print() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        let result = [];
        let i = this.front;
        do {
            result.push(this.items[i]);
            i = (i + 1) % this.capacity;
        } while (i !== (this.rear + 1) % this.capacity);

        return result.join(' <- ');
    }
}

// Usage
const queue = new CircularQueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.print());    // 10 <- 20 <- 30
queue.dequeue();               // 10
queue.enqueue(40);
queue.enqueue(50);`,

    python: `class CircularQueue:
    def __init__(self, capacity):
        self.items = [None] * capacity
        self.capacity = capacity
        self.front = -1
        self.rear = -1
        self.size = 0

    # Check if queue is full - O(1)
    def is_full(self):
        return self.size == self.capacity

    # Check if queue is empty - O(1)
    def is_empty(self):
        return self.size == 0

    # Enqueue element - O(1)
    def enqueue(self, element):
        if self.is_full():
            return "Queue is full"

        # First element
        if self.front == -1:
            self.front = 0

        # Circular increment
        self.rear = (self.rear + 1) % self.capacity
        self.items[self.rear] = element
        self.size += 1
        return True

    # Dequeue element - O(1)
    def dequeue(self):
        if self.is_empty():
            return "Queue is empty"

        element = self.items[self.front]
        self.items[self.front] = None

        if self.front == self.rear:
            # Last element
            self.front = -1
            self.rear = -1
        else:
            # Circular increment
            self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return element

    # Peek front element - O(1)
    def peek(self):
        if self.is_empty():
            return "Queue is empty"
        return self.items[self.front]

    # Get current size - O(1)
    def get_size(self):
        return self.size

    # Display queue - O(n)
    def print_queue(self):
        if self.is_empty():
            return "Queue is empty"

        result = []
        i = self.front
        while True:
            result.append(str(self.items[i]))
            if i == self.rear:
                break
            i = (i + 1) % self.capacity

        return ' <- '.join(result)

# Usage
queue = CircularQueue(5)
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
print(queue.print_queue())
print("Dequeued:", queue.dequeue())
queue.enqueue(40)
print(queue.print_queue())`,

    go: `package main

import "fmt"

type CircularQueue struct {
    items    []int
    front    int
    rear     int
    size     int
    capacity int
}

// Initialize queue - O(1)
func NewCircularQueue(capacity int) *CircularQueue {
    return &CircularQueue{
        items:    make([]int, capacity),
        front:    -1,
        rear:     -1,
        size:     0,
        capacity: capacity,
    }
}

// Check if queue is full - O(1)
func (q *CircularQueue) IsFull() bool {
    return q.size == q.capacity
}

// Check if queue is empty - O(1)
func (q *CircularQueue) IsEmpty() bool {
    return q.size == 0
}

// Enqueue element - O(1)
func (q *CircularQueue) Enqueue(element int) bool {
    if q.IsFull() {
        fmt.Println("Queue is full")
        return false
    }

    // First element
    if q.front == -1 {
        q.front = 0
    }

    // Circular increment
    q.rear = (q.rear + 1) % q.capacity
    q.items[q.rear] = element
    q.size++
    return true
}

// Dequeue element - O(1)
func (q *CircularQueue) Dequeue() int {
    if q.IsEmpty() {
        fmt.Println("Queue is empty")
        return -1
    }

    element := q.items[q.front]

    if q.front == q.rear {
        // Last element
        q.front = -1
        q.rear = -1
    } else {
        // Circular increment
        q.front = (q.front + 1) % q.capacity
    }
    q.size--
    return element
}

// Peek front element - O(1)
func (q *CircularQueue) Peek() int {
    if q.IsEmpty() {
        fmt.Println("Queue is empty")
        return -1
    }
    return q.items[q.front]
}

// Get current size - O(1)
func (q *CircularQueue) GetSize() int {
    return q.size
}

// Display queue - O(n)
func (q *CircularQueue) Display() {
    if q.IsEmpty() {
        fmt.Println("Queue is empty")
        return
    }

    fmt.Print("Queue: ")
    i := q.front
    for {
        fmt.Print(q.items[i], " ")
        if i == q.rear {
            break
        }
        i = (i + 1) % q.capacity
    }
    fmt.Println()
}

// Usage
func main() {
    queue := NewCircularQueue(5)
    queue.Enqueue(10)
    queue.Enqueue(20)
    queue.Enqueue(30)
    queue.Display()
    fmt.Println("Dequeued:", queue.Dequeue())
    queue.Enqueue(40)
    queue.Display()
}`,
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
          <span className="text-4xl">🔁</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Circular Queue
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Efficient space usage by connecting rear back to front
          </p>
        </div>
      </div>

      {/* Key Concept */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
            🎯 Why Circular Queue?
          </h3>
          <p className="text-lg text-green-900 dark:text-green-100 mb-4">
            In a simple queue using arrays, dequeued positions become wasted space. Circular queue solves this by wrapping the rear pointer back to the beginning, reusing empty spaces!
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Simple Queue Problem</p>
              <p>Front moves forward, leaving wasted space behind that can't be reused</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Circular Queue Solution</p>
              <p>Rear wraps around to front, efficiently using all available space</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Representation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 Circular Structure
        </h3>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl">
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Circle outline */}
              <svg className="absolute inset-0 w-full h-full">
                <circle
                  cx="160"
                  cy="160"
                  r="120"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>

              {/* Queue elements in circle */}
              {[0, 1, 2, 3, 4].map((index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const x = 160 + 120 * Math.cos(angle);
                const y = 160 + 120 * Math.sin(angle);
                const isFront = index === front;
                const isRear = index === rear;
                const hasValue = queue[index] !== null;

                return (
                  <motion.div
                    key={index}
                    style={{
                      position: "absolute",
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className={`w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold shadow-lg ${
                      hasValue
                        ? "bg-gradient-to-br from-green-500 to-emerald-500 text-white"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-400"
                    }`}
                  >
                    <div className="text-lg">{queue[index] || "-"}</div>
                    {isFront && <div className="text-xs mt-1">F</div>}
                    {isRear && <div className="text-xs mt-1">R</div>}
                  </motion.div>
                );
              })}

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-semibold text-green-700 dark:text-green-300">
                    Capacity: 5
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Front: {front} | Rear: {rear}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            F = Front | R = Rear | Elements wrap around in a circle
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔄 How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Modulo Operation",
              icon: "➗",
              desc: "Use (index + 1) % capacity to wrap around",
              example: "If rear is at index 4 (last) in size 5 array, (4+1)%5 = 0 (wraps to start)",
            },
            {
              title: "Full Condition",
              icon: "🔴",
              desc: "(rear + 1) % capacity == front",
              example: "When next position after rear equals front, queue is full",
            },
            {
              title: "Empty Condition",
              icon: "⚪",
              desc: "front == -1 or size == 0",
              example: "When no elements present or queue just initialized",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h4>
              <p className="text-sm text-green-600 dark:text-green-400 mb-2 font-mono">{item.desc}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 italic">{item.example}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Code Implementation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Implementation
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setCurrentLanguage(lang.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                currentLanguage === lang.id
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
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

      {/* Advantages */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⭐ Advantages
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              advantage: "Efficient Memory Usage",
              desc: "Reuses space freed by dequeue operations",
              icon: "💾",
            },
            {
              advantage: "Fixed Size",
              desc: "Predictable memory usage, no dynamic resizing",
              icon: "📏",
            },
            {
              advantage: "O(1) Operations",
              desc: "Constant time enqueue and dequeue",
              icon: "⚡",
            },
            {
              advantage: "Cache Friendly",
              desc: "Better cache locality than linked list",
              icon: "🚀",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.advantage}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Applications
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { app: "CPU Scheduling", desc: "Round-robin scheduling algorithm", icon: "💻" },
            { app: "Memory Management", desc: "Buffer management in OS", icon: "🗂️" },
            { app: "Traffic Systems", desc: "Traffic light control systems", icon: "🚦" },
            { app: "Audio/Video Buffering", desc: "Media streaming buffers", icon: "🎵" },
            { app: "Keyboard Buffer", desc: "Key press event handling", icon: "⌨️" },
            { app: "Printer Queue", desc: "Managing print jobs", icon: "🖨️" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{item.app}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
