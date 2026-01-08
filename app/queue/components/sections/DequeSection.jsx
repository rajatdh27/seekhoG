"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DequeSection() {
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
    int items[MAX_SIZE];
    int front;
    int rear;
    int size;
} Deque;

// Initialize deque - O(1)
Deque* createDeque() {
    Deque* deque = (Deque*)malloc(sizeof(Deque));
    deque->front = MAX_SIZE / 2;
    deque->rear = MAX_SIZE / 2;
    deque->size = 0;
    return deque;
}

// Check if empty - O(1)
bool isEmpty(Deque* deque) {
    return deque->size == 0;
}

// Check if full - O(1)
bool isFull(Deque* deque) {
    return deque->size == MAX_SIZE;
}

// Add at front - O(1)
void addFront(Deque* deque, int element) {
    if (isFull(deque)) {
        printf("Deque is full\\n");
        return;
    }
    deque->front--;
    if (deque->front < 0) {
        deque->front = MAX_SIZE - 1;
    }
    deque->items[deque->front] = element;
    deque->size++;
}

// Add at rear - O(1)
void addRear(Deque* deque, int element) {
    if (isFull(deque)) {
        printf("Deque is full\\n");
        return;
    }
    deque->items[deque->rear] = element;
    deque->rear = (deque->rear + 1) % MAX_SIZE;
    deque->size++;
}

// Remove from front - O(1)
int removeFront(Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque is empty\\n");
        return -1;
    }
    int item = deque->items[deque->front];
    deque->front = (deque->front + 1) % MAX_SIZE;
    deque->size--;
    return item;
}

// Remove from rear - O(1)
int removeRear(Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque is empty\\n");
        return -1;
    }
    deque->rear--;
    if (deque->rear < 0) {
        deque->rear = MAX_SIZE - 1;
    }
    int item = deque->items[deque->rear];
    deque->size--;
    return item;
}

// Peek front - O(1)
int peekFront(Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque is empty\\n");
        return -1;
    }
    return deque->items[deque->front];
}

// Peek rear - O(1)
int peekRear(Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque is empty\\n");
        return -1;
    }
    int rearIdx = (deque->rear - 1 + MAX_SIZE) % MAX_SIZE;
    return deque->items[rearIdx];
}

// Usage
int main() {
    Deque* deque = createDeque();
    addRear(deque, 10);
    addRear(deque, 20);
    addFront(deque, 5);
    printf("Front: %d\\n", peekFront(deque));  // 5
    printf("Rear: %d\\n", peekRear(deque));    // 20
    printf("Removed from front: %d\\n", removeFront(deque));  // 5
    printf("Removed from rear: %d\\n", removeRear(deque));    // 20
    free(deque);
    return 0;
}`,

    cpp: `#include <iostream>
#include <deque>
using namespace std;

class Deque {
private:
    deque<int> items;

public:
    // Constructor - O(1)
    Deque() {}

    // Add at front - O(1)
    void addFront(int element) {
        items.push_front(element);
    }

    // Add at rear - O(1)
    void addRear(int element) {
        items.push_back(element);
    }

    // Remove from front - O(1)
    int removeFront() {
        if (isEmpty()) {
            cout << "Deque is empty" << endl;
            return -1;
        }
        int item = items.front();
        items.pop_front();
        return item;
    }

    // Remove from rear - O(1)
    int removeRear() {
        if (isEmpty()) {
            cout << "Deque is empty" << endl;
            return -1;
        }
        int item = items.back();
        items.pop_back();
        return item;
    }

    // Peek front - O(1)
    int peekFront() {
        if (isEmpty()) {
            cout << "Deque is empty" << endl;
            return -1;
        }
        return items.front();
    }

    // Peek rear - O(1)
    int peekRear() {
        if (isEmpty()) {
            cout << "Deque is empty" << endl;
            return -1;
        }
        return items.back();
    }

    // Check if empty - O(1)
    bool isEmpty() {
        return items.empty();
    }

    // Get size - O(1)
    int size() {
        return items.size();
    }

    // Display deque - O(n)
    void display() {
        if (isEmpty()) {
            cout << "Deque is empty" << endl;
            return;
        }
        cout << "Deque: ";
        for (int item : items) {
            cout << item << " <-> ";
        }
        cout << endl;
    }
};

// Usage
int main() {
    Deque deque;
    deque.addRear(10);
    deque.addRear(20);
    deque.addFront(5);
    cout << "Front: " << deque.peekFront() << endl;  // 5
    cout << "Rear: " << deque.peekRear() << endl;    // 20
    cout << "Removed from front: " << deque.removeFront() << endl;  // 5
    cout << "Removed from rear: " << deque.removeRear() << endl;    // 20
    return 0;
}`,

    java: `import java.util.ArrayDeque;

public class Deque {
    private ArrayDeque<Integer> items;

    // Constructor - O(1)
    public Deque() {
        items = new ArrayDeque<>();
    }

    // Add at front - O(1)
    public void addFront(int element) {
        items.addFirst(element);
    }

    // Add at rear - O(1)
    public void addRear(int element) {
        items.addLast(element);
    }

    // Remove from front - O(1)
    public int removeFront() {
        if (isEmpty()) {
            System.out.println("Deque is empty");
            return -1;
        }
        return items.removeFirst();
    }

    // Remove from rear - O(1)
    public int removeRear() {
        if (isEmpty()) {
            System.out.println("Deque is empty");
            return -1;
        }
        return items.removeLast();
    }

    // Peek front - O(1)
    public int peekFront() {
        if (isEmpty()) {
            System.out.println("Deque is empty");
            return -1;
        }
        return items.getFirst();
    }

    // Peek rear - O(1)
    public int peekRear() {
        if (isEmpty()) {
            System.out.println("Deque is empty");
            return -1;
        }
        return items.getLast();
    }

    // Check if empty - O(1)
    public boolean isEmpty() {
        return items.isEmpty();
    }

    // Get size - O(1)
    public int size() {
        return items.size();
    }

    // Display deque - O(n)
    public void display() {
        if (isEmpty()) {
            System.out.println("Deque is empty");
            return;
        }
        System.out.print("Deque: ");
        for (int item : items) {
            System.out.print(item + " <-> ");
        }
        System.out.println();
    }

    // Usage
    public static void main(String[] args) {
        Deque deque = new Deque();
        deque.addRear(10);
        deque.addRear(20);
        deque.addFront(5);
        System.out.println("Front: " + deque.peekFront());  // 5
        System.out.println("Rear: " + deque.peekRear());    // 20
        System.out.println("Removed from front: " + deque.removeFront());  // 5
        System.out.println("Removed from rear: " + deque.removeRear());    // 20
    }
}`,

    javascript: `class Deque {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    // Add at front - O(1)
    addFront(element) {
        this.front--;
        this.items[this.front] = element;
    }

    // Add at rear - O(1)
    addRear(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    // Remove from front - O(1)
    removeFront() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    // Remove from rear - O(1)
    removeRear() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        this.rear--;
        const item = this.items[this.rear];
        delete this.items[this.rear];
        return item;
    }

    // Peek front - O(1)
    peekFront() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items[this.front];
    }

    // Peek rear - O(1)
    peekRear() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items[this.rear - 1];
    }

    // Check if empty - O(1)
    isEmpty() {
        return this.front === this.rear;
    }

    // Get size - O(1)
    size() {
        return this.rear - this.front;
    }

    // Display deque - O(n)
    print() {
        let result = [];
        for (let i = this.front; i < this.rear; i++) {
            result.push(this.items[i]);
        }
        return result.join(' <-> ');
    }
}

// Usage
const deque = new Deque();
deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
console.log(deque.print());      // 5 <-> 10 <-> 20
console.log(deque.removeFront()); // 5
console.log(deque.removeRear());  // 20`,

    python: `from collections import deque

class Deque:
    def __init__(self):
        self.items = deque()

    # Add at front - O(1)
    def add_front(self, element):
        self.items.appendleft(element)

    # Add at rear - O(1)
    def add_rear(self, element):
        self.items.append(element)

    # Remove from front - O(1)
    def remove_front(self):
        if self.is_empty():
            return "Deque is empty"
        return self.items.popleft()

    # Remove from rear - O(1)
    def remove_rear(self):
        if self.is_empty():
            return "Deque is empty"
        return self.items.pop()

    # Peek front - O(1)
    def peek_front(self):
        if self.is_empty():
            return "Deque is empty"
        return self.items[0]

    # Peek rear - O(1)
    def peek_rear(self):
        if self.is_empty():
            return "Deque is empty"
        return self.items[-1]

    # Check if empty - O(1)
    def is_empty(self):
        return len(self.items) == 0

    # Get size - O(1)
    def size(self):
        return len(self.items)

    # Display deque - O(n)
    def print_deque(self):
        return ' <-> '.join(map(str, self.items))

# Usage
deque = Deque()
deque.add_rear(10)
deque.add_rear(20)
deque.add_front(5)
print("Front:", deque.peek_front())  # 5
print("Rear:", deque.peek_rear())    # 20
print("Removed from front:", deque.remove_front())  # 5
print("Removed from rear:", deque.remove_rear())    # 20`,

    go: `package main

import "fmt"

type Node struct {
    data int
    prev *Node
    next *Node
}

type Deque struct {
    front *Node
    rear  *Node
    size  int
}

// Initialize deque - O(1)
func NewDeque() *Deque {
    return &Deque{
        front: nil,
        rear:  nil,
        size:  0,
    }
}

// Add at front - O(1)
func (d *Deque) AddFront(element int) {
    newNode := &Node{data: element, prev: nil, next: d.front}

    if d.IsEmpty() {
        d.front = newNode
        d.rear = newNode
    } else {
        d.front.prev = newNode
        d.front = newNode
    }
    d.size++
}

// Add at rear - O(1)
func (d *Deque) AddRear(element int) {
    newNode := &Node{data: element, prev: d.rear, next: nil}

    if d.IsEmpty() {
        d.front = newNode
        d.rear = newNode
    } else {
        d.rear.next = newNode
        d.rear = newNode
    }
    d.size++
}

// Remove from front - O(1)
func (d *Deque) RemoveFront() int {
    if d.IsEmpty() {
        fmt.Println("Deque is empty")
        return -1
    }

    item := d.front.data
    d.front = d.front.next

    if d.front == nil {
        d.rear = nil
    } else {
        d.front.prev = nil
    }
    d.size--
    return item
}

// Remove from rear - O(1)
func (d *Deque) RemoveRear() int {
    if d.IsEmpty() {
        fmt.Println("Deque is empty")
        return -1
    }

    item := d.rear.data
    d.rear = d.rear.prev

    if d.rear == nil {
        d.front = nil
    } else {
        d.rear.next = nil
    }
    d.size--
    return item
}

// Peek front - O(1)
func (d *Deque) PeekFront() int {
    if d.IsEmpty() {
        fmt.Println("Deque is empty")
        return -1
    }
    return d.front.data
}

// Peek rear - O(1)
func (d *Deque) PeekRear() int {
    if d.IsEmpty() {
        fmt.Println("Deque is empty")
        return -1
    }
    return d.rear.data
}

// Check if empty - O(1)
func (d *Deque) IsEmpty() bool {
    return d.size == 0
}

// Get size - O(1)
func (d *Deque) Size() int {
    return d.size
}

// Display deque - O(n)
func (d *Deque) Display() {
    if d.IsEmpty() {
        fmt.Println("Deque is empty")
        return
    }

    fmt.Print("Deque: ")
    current := d.front
    for current != nil {
        fmt.Print(current.data, " <-> ")
        current = current.next
    }
    fmt.Println()
}

// Usage
func main() {
    deque := NewDeque()
    deque.AddRear(10)
    deque.AddRear(20)
    deque.AddFront(5)
    fmt.Println("Front:", deque.PeekFront())  // 5
    fmt.Println("Rear:", deque.PeekRear())    // 20
    fmt.Println("Removed from front:", deque.RemoveFront())  // 5
    fmt.Println("Removed from rear:", deque.RemoveRear())    // 20
}`,
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
          <span className="text-4xl">↔️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Double-Ended Queue (Deque)
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Insert and remove from both ends
          </p>
        </div>
      </div>

      {/* Key Concept */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            🎯 What is Deque?
          </h3>
          <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
            A <strong>Deque</strong> (Double-Ended Queue) is a linear data structure that allows insertion and deletion at both front and rear ends. It's a generalized version of both stack and queue!
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-blue-700 dark:text-blue-300 mb-2">✨ Can work as Queue</p>
              <p>addRear() + removeFront() = FIFO behavior</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-blue-700 dark:text-blue-300 mb-2">✨ Can work as Stack</p>
              <p>addRear() + removeRear() = LIFO behavior</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Representation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 Deque Operations
        </h3>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 text-center">
              ← addFront()<br/>removeFront()
            </div>
            <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 text-center">
              addRear() →<br/>removeRear()
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            {[10, 20, 30, 40].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              >
                {value}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-4 gap-4 text-xs text-center">
            <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
              <p className="font-bold text-green-600 dark:text-green-400">addFront(5)</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
              <p className="font-bold text-red-600 dark:text-red-400">removeFront()</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
              <p className="font-bold text-green-600 dark:text-green-400">addRear(50)</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
              <p className="font-bold text-red-600 dark:text-red-400">removeRear()</p>
            </div>
          </div>
        </div>
      </div>

      {/* Operations */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔧 Deque Operations
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { op: "addFront()", desc: "Insert element at front", time: "O(1)", icon: "⬅️" },
            { op: "addRear()", desc: "Insert element at rear", time: "O(1)", icon: "➡️" },
            { op: "removeFront()", desc: "Remove element from front", time: "O(1)", icon: "⬅️" },
            { op: "removeRear()", desc: "Remove element from rear", time: "O(1)", icon: "➡️" },
            { op: "peekFront()", desc: "Get front element", time: "O(1)", icon: "👁️" },
            { op: "peekRear()", desc: "Get rear element", time: "O(1)", icon: "👁️" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <span className="text-3xl">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">{item.op}</h4>
                  <span className="text-sm font-mono text-blue-600 dark:text-blue-400">{item.time}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
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
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
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

      {/* Applications */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Applications
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { app: "Browser History", desc: "Forward and backward navigation", icon: "🌐" },
            { app: "Undo/Redo", desc: "Text editors, photo editors", icon: "↩️" },
            { app: "Sliding Window", desc: "Maximum in sliding window problems", icon: "🪟" },
            { app: "Palindrome Checking", desc: "Check if string is palindrome", icon: "🔤" },
            { app: "Steal Stack", desc: "Work-stealing algorithm in parallel computing", icon: "⚡" },
            { app: "A-Steal Algorithm", desc: "Task scheduling in multiprocessor", icon: "💻" },
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
