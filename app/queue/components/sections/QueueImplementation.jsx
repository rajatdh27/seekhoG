"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const languages = [
  { id: "c", name: "C", icon: "🔷" },
  { id: "cpp", name: "C++", icon: "⚡" },
  { id: "java", name: "Java", icon: "☕" },
  { id: "javascript", name: "JavaScript", icon: "🟨" },
  { id: "python", name: "Python", icon: "🐍" },
  { id: "go", name: "Go", icon: "🔵" },
];

export default function QueueImplementation() {
  const [currentLanguage, setCurrentLanguage] = useState("cpp");
  const [implementationType, setImplementationType] = useState("array");

  const arrayImplementations = {
    c: `// Queue using Array in C
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
    int size;
} Queue;

// Initialize queue - O(1)
void initQueue(Queue* q) {
    q->front = 0;
    q->rear = 0;
    q->size = 0;
}

// Check if queue is empty - O(1)
bool isEmpty(Queue* q) {
    return q->size == 0;
}

// Check if queue is full - O(1)
bool isFull(Queue* q) {
    return q->size == MAX_SIZE;
}

// Enqueue (add at rear) - O(1)
bool enqueue(Queue* q, int element) {
    if (isFull(q)) {
        printf("Queue Overflow\\n");
        return false;
    }
    q->items[q->rear] = element;
    q->rear++;
    q->size++;
    return true;
}

// Dequeue (remove from front) - O(1)
int dequeue(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue Underflow\\n");
        return -1;
    }
    int item = q->items[q->front];
    q->front++;
    q->size--;
    return item;
}

// Peek front element - O(1)
int peek(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\\n");
        return -1;
    }
    return q->items[q->front];
}

// Get queue size - O(1)
int getSize(Queue* q) {
    return q->size;
}

// Usage
int main() {
    Queue q;
    initQueue(&q);

    enqueue(&q, 10);
    enqueue(&q, 20);
    enqueue(&q, 30);

    printf("Front: %d\\n", peek(&q));      // 10
    printf("Dequeue: %d\\n", dequeue(&q)); // 10
    printf("Size: %d\\n", getSize(&q));    // 2

    return 0;
}`,

    cpp: `// Queue using Array in C++
#include <iostream>
#include <stdexcept>
using namespace std;

class Queue {
private:
    int* items;
    int front;
    int rear;
    int size;
    int capacity;

public:
    // Constructor - O(1)
    Queue(int cap = 100) {
        capacity = cap;
        items = new int[capacity];
        front = 0;
        rear = 0;
        size = 0;
    }

    // Destructor
    ~Queue() {
        delete[] items;
    }

    // Check if empty - O(1)
    bool isEmpty() {
        return size == 0;
    }

    // Check if full - O(1)
    bool isFull() {
        return size == capacity;
    }

    // Enqueue (add at rear) - O(1)
    void enqueue(int element) {
        if (isFull()) {
            throw overflow_error("Queue Overflow");
        }
        items[rear++] = element;
        size++;
    }

    // Dequeue (remove from front) - O(1)
    int dequeue() {
        if (isEmpty()) {
            throw underflow_error("Queue Underflow");
        }
        int item = items[front++];
        size--;
        return item;
    }

    // Peek front element - O(1)
    int peek() {
        if (isEmpty()) {
            throw runtime_error("Queue is empty");
        }
        return items[front];
    }

    // Get size - O(1)
    int getSize() {
        return size;
    }

    // Display queue - O(n)
    void display() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return;
        }
        for (int i = front; i < rear; i++) {
            cout << items[i] << " <- ";
        }
        cout << endl;
    }
};

// Usage
int main() {
    Queue q(5);

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    q.display();              // 10 <- 20 <- 30
    cout << q.dequeue() << endl; // 10
    cout << q.peek() << endl;    // 20

    return 0;
}`,

    java: `// Queue using Array in Java
public class Queue {
    private int[] items;
    private int front;
    private int rear;
    private int size;
    private int capacity;

    // Constructor - O(1)
    public Queue(int capacity) {
        this.capacity = capacity;
        items = new int[capacity];
        front = 0;
        rear = 0;
        size = 0;
    }

    // Check if empty - O(1)
    public boolean isEmpty() {
        return size == 0;
    }

    // Check if full - O(1)
    public boolean isFull() {
        return size == capacity;
    }

    // Enqueue (add at rear) - O(1)
    public void enqueue(int element) {
        if (isFull()) {
            throw new RuntimeException("Queue Overflow");
        }
        items[rear++] = element;
        size++;
    }

    // Dequeue (remove from front) - O(1)
    public int dequeue() {
        if (isEmpty()) {
            throw new RuntimeException("Queue Underflow");
        }
        int item = items[front++];
        size--;
        return item;
    }

    // Peek front element - O(1)
    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        return items[front];
    }

    // Get size - O(1)
    public int getSize() {
        return size;
    }

    // Display queue - O(n)
    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        for (int i = front; i < rear; i++) {
            System.out.print(items[i] + " <- ");
        }
        System.out.println();
    }

    // Usage
    public static void main(String[] args) {
        Queue q = new Queue(5);

        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);

        q.display();                // 10 <- 20 <- 30
        System.out.println(q.dequeue()); // 10
        System.out.println(q.peek());    // 20
    }
}`,

    javascript: `// Queue using Array in JavaScript
class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    // Check if empty - O(1)
    isEmpty() {
        return this.front === this.rear;
    }

    // Enqueue (add at rear) - O(1)
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
        return true;
    }

    // Dequeue (remove from front) - O(1)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    // Peek front element - O(1)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.front];
    }

    // Get size - O(1)
    size() {
        return this.rear - this.front;
    }

    // Clear queue - O(1)
    clear() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    // Display queue - O(n)
    print() {
        let result = [];
        for (let i = this.front; i < this.rear; i++) {
            result.push(this.items[i]);
        }
        return result.join(' <- ');
    }
}

// Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.print());    // 10 <- 20 <- 30
console.log(queue.dequeue());  // 10
console.log(queue.peek());     // 20
console.log(queue.size());     // 2`,

    python: `# Queue using Array/List in Python
class Queue:
    def __init__(self):
        self.items = []
        self.front = 0
        self.rear = 0

    # Check if empty - O(1)
    def is_empty(self):
        return self.front == self.rear

    # Enqueue (add at rear) - O(1)
    def enqueue(self, element):
        self.items.append(element)
        self.rear += 1
        return True

    # Dequeue (remove from front) - O(1)
    def dequeue(self):
        if self.is_empty():
            return "Queue is empty"
        item = self.items[self.front]
        self.front += 1
        return item

    # Peek front element - O(1)
    def peek(self):
        if self.is_empty():
            return "Queue is empty"
        return self.items[self.front]

    # Get size - O(1)
    def size(self):
        return self.rear - self.front

    # Clear queue - O(1)
    def clear(self):
        self.items = []
        self.front = 0
        self.rear = 0

    # Display queue - O(n)
    def print_queue(self):
        return ' <- '.join(map(str, self.items[self.front:self.rear]))

# Usage
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

print(queue.print_queue())  # 10 <- 20 <- 30
print(queue.dequeue())      # 10
print(queue.peek())         # 20
print(queue.size())         # 2`,

    go: `// Queue using Slice in Go
package main

import (
    "fmt"
    "errors"
)

type Queue struct {
    items []int
    front int
    rear  int
}

// Constructor - O(1)
func NewQueue() *Queue {
    return &Queue{
        items: make([]int, 0),
        front: 0,
        rear:  0,
    }
}

// Check if empty - O(1)
func (q *Queue) IsEmpty() bool {
    return q.front == q.rear
}

// Enqueue (add at rear) - O(1)
func (q *Queue) Enqueue(element int) {
    q.items = append(q.items, element)
    q.rear++
}

// Dequeue (remove from front) - O(1)
func (q *Queue) Dequeue() (int, error) {
    if q.IsEmpty() {
        return 0, errors.New("queue is empty")
    }
    item := q.items[q.front]
    q.front++
    return item, nil
}

// Peek front element - O(1)
func (q *Queue) Peek() (int, error) {
    if q.IsEmpty() {
        return 0, errors.New("queue is empty")
    }
    return q.items[q.front], nil
}

// Get size - O(1)
func (q *Queue) Size() int {
    return q.rear - q.front
}

// Display queue - O(n)
func (q *Queue) Print() {
    if q.IsEmpty() {
        fmt.Println("Queue is empty")
        return
    }
    for i := q.front; i < q.rear; i++ {
        fmt.Printf("%d <- ", q.items[i])
    }
    fmt.Println()
}

// Usage
func main() {
    q := NewQueue()

    q.Enqueue(10)
    q.Enqueue(20)
    q.Enqueue(30)

    q.Print()              // 10 <- 20 <- 30
    val, _ := q.Dequeue()
    fmt.Println(val)       // 10
    peek, _ := q.Peek()
    fmt.Println(peek)      // 20
}`,
  };

  const linkedListImplementations = {
    c: `// Queue using Linked List in C
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct {
    Node* front;
    Node* rear;
    int size;
} Queue;

// Initialize queue - O(1)
void initQueue(Queue* q) {
    q->front = NULL;
    q->rear = NULL;
    q->size = 0;
}

// Check if empty - O(1)
bool isEmpty(Queue* q) {
    return q->front == NULL;
}

// Enqueue (add at rear) - O(1)
void enqueue(Queue* q, int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;

    if (isEmpty(q)) {
        q->front = newNode;
        q->rear = newNode;
    } else {
        q->rear->next = newNode;
        q->rear = newNode;
    }
    q->size++;
}

// Dequeue (remove from front) - O(1)
int dequeue(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue Underflow\\n");
        return -1;
    }

    Node* temp = q->front;
    int data = temp->data;
    q->front = q->front->next;

    if (q->front == NULL) {
        q->rear = NULL;
    }

    free(temp);
    q->size--;
    return data;
}

// Peek front - O(1)
int peek(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\\n");
        return -1;
    }
    return q->front->data;
}

// Usage
int main() {
    Queue q;
    initQueue(&q);

    enqueue(&q, 10);
    enqueue(&q, 20);
    enqueue(&q, 30);

    printf("%d\\n", dequeue(&q)); // 10
    printf("%d\\n", peek(&q));    // 20

    return 0;
}`,

    cpp: `// Queue using Linked List in C++
#include <iostream>
#include <stdexcept>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int val) : data(val), next(nullptr) {}
};

class Queue {
private:
    Node* front;
    Node* rear;
    int size;

public:
    // Constructor - O(1)
    Queue() : front(nullptr), rear(nullptr), size(0) {}

    // Destructor
    ~Queue() {
        while (!isEmpty()) {
            dequeue();
        }
    }

    // Check if empty - O(1)
    bool isEmpty() {
        return front == nullptr;
    }

    // Enqueue (add at rear) - O(1)
    void enqueue(int data) {
        Node* newNode = new Node(data);

        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
        size++;
    }

    // Dequeue (remove from front) - O(1)
    int dequeue() {
        if (isEmpty()) {
            throw underflow_error("Queue Underflow");
        }

        Node* temp = front;
        int data = temp->data;
        front = front->next;

        if (front == nullptr) {
            rear = nullptr;
        }

        delete temp;
        size--;
        return data;
    }

    // Peek front - O(1)
    int peek() {
        if (isEmpty()) {
            throw runtime_error("Queue is empty");
        }
        return front->data;
    }

    // Get size - O(1)
    int getSize() {
        return size;
    }

    // Display - O(n)
    void display() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return;
        }
        Node* curr = front;
        while (curr) {
            cout << curr->data << " <- ";
            curr = curr->next;
        }
        cout << endl;
    }
};

// Usage
int main() {
    Queue q;

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    q.display();           // 10 <- 20 <- 30
    cout << q.dequeue() << endl; // 10
    cout << q.peek() << endl;    // 20

    return 0;
}`,

    java: `// Queue using Linked List in Java
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Queue {
    private Node front;
    private Node rear;
    private int size;

    // Constructor - O(1)
    public Queue() {
        front = null;
        rear = null;
        size = 0;
    }

    // Check if empty - O(1)
    public boolean isEmpty() {
        return front == null;
    }

    // Enqueue (add at rear) - O(1)
    public void enqueue(int data) {
        Node newNode = new Node(data);

        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
        size++;
    }

    // Dequeue (remove from front) - O(1)
    public int dequeue() {
        if (isEmpty()) {
            throw new RuntimeException("Queue Underflow");
        }

        int data = front.data;
        front = front.next;

        if (front == null) {
            rear = null;
        }

        size--;
        return data;
    }

    // Peek front - O(1)
    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        return front.data;
    }

    // Get size - O(1)
    public int getSize() {
        return size;
    }

    // Display - O(n)
    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        Node curr = front;
        while (curr != null) {
            System.out.print(curr.data + " <- ");
            curr = curr.next;
        }
        System.out.println();
    }
}`,

    javascript: `// Queue using Linked List in JavaScript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    // Check if empty - O(1)
    isEmpty() {
        return this.length === 0;
    }

    // Enqueue (add at rear) - O(1)
    enqueue(data) {
        const newNode = new Node(data);

        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
        return true;
    }

    // Dequeue (remove from front) - O(1)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        const data = this.front.data;
        this.front = this.front.next;
        this.length--;

        if (this.length === 0) {
            this.rear = null;
        }
        return data;
    }

    // Peek front - O(1)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.front.data;
    }

    // Get size - O(1)
    size() {
        return this.length;
    }

    // Display - O(n)
    print() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let result = [];
        let current = this.front;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result.join(' <- ');
    }
}`,

    python: `# Queue using Linked List in Python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
        self.length = 0

    # Check if empty - O(1)
    def is_empty(self):
        return self.length == 0

    # Enqueue (add at rear) - O(1)
    def enqueue(self, data):
        new_node = Node(data)

        if self.is_empty():
            self.front = new_node
            self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node
        self.length += 1
        return True

    # Dequeue (remove from front) - O(1)
    def dequeue(self):
        if self.is_empty():
            return "Queue is empty"

        data = self.front.data
        self.front = self.front.next
        self.length -= 1

        if self.length == 0:
            self.rear = None
        return data

    # Peek front - O(1)
    def peek(self):
        if self.is_empty():
            return "Queue is empty"
        return self.front.data

    # Get size - O(1)
    def size(self):
        return self.length

    # Display - O(n)
    def print_queue(self):
        if self.is_empty():
            return "Queue is empty"

        result = []
        current = self.front
        while current:
            result.append(str(current.data))
            current = current.next
        return ' <- '.join(result)`,

    go: `// Queue using Linked List in Go
package main

import (
    "fmt"
    "errors"
)

type Node struct {
    data int
    next *Node
}

type Queue struct {
    front  *Node
    rear   *Node
    length int
}

// Constructor - O(1)
func NewQueue() *Queue {
    return &Queue{
        front:  nil,
        rear:   nil,
        length: 0,
    }
}

// Check if empty - O(1)
func (q *Queue) IsEmpty() bool {
    return q.length == 0
}

// Enqueue (add at rear) - O(1)
func (q *Queue) Enqueue(data int) {
    newNode := &Node{data: data, next: nil}

    if q.IsEmpty() {
        q.front = newNode
        q.rear = newNode
    } else {
        q.rear.next = newNode
        q.rear = newNode
    }
    q.length++
}

// Dequeue (remove from front) - O(1)
func (q *Queue) Dequeue() (int, error) {
    if q.IsEmpty() {
        return 0, errors.New("queue is empty")
    }

    data := q.front.data
    q.front = q.front.next
    q.length--

    if q.length == 0 {
        q.rear = nil
    }
    return data, nil
}

// Peek front - O(1)
func (q *Queue) Peek() (int, error) {
    if q.IsEmpty() {
        return 0, errors.New("queue is empty")
    }
    return q.front.data, nil
}

// Get size - O(1)
func (q *Queue) Size() int {
    return q.length
}

// Display - O(n)
func (q *Queue) Print() {
    if q.IsEmpty() {
        fmt.Println("Queue is empty")
        return
    }
    curr := q.front
    for curr != nil {
        fmt.Printf("%d <- ", curr.data)
        curr = curr.next
    }
    fmt.Println()
}`,
  };

  const currentCode = implementationType === "array"
    ? arrayImplementations[currentLanguage]
    : linkedListImplementations[currentLanguage];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl">
          <span className="text-4xl">⚙️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Queue Implementation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Implement queue using Array or Linked List in 6 languages
          </p>
        </div>
      </div>

      {/* Implementation Comparison */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔄 Array vs Linked List
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800"
          >
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Array Implementation
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span className="text-slate-700 dark:text-slate-300">Simple to implement</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span className="text-slate-700 dark:text-slate-300">Cache-friendly, better locality</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span className="text-slate-700 dark:text-slate-300">Fixed size (unless dynamic)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span className="text-slate-700 dark:text-slate-300">Wasted space at front</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800"
          >
            <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">
              Linked List Implementation
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span className="text-slate-700 dark:text-slate-300">Dynamic size, no wasted space</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span className="text-slate-700 dark:text-slate-300">Efficient memory usage</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span className="text-slate-700 dark:text-slate-300">Extra memory for pointers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span className="text-slate-700 dark:text-slate-300">Poor cache locality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Code Implementation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Code Implementation
        </h3>

        {/* Implementation Type Selector */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setImplementationType("array")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              implementationType === "array"
                ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg"
                : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            Array Implementation
          </button>
          <button
            onClick={() => setImplementationType("linkedlist")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              implementationType === "linkedlist"
                ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg"
                : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            Linked List Implementation
          </button>
        </div>

        {/* Language Selector */}
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
            <code>{currentCode}</code>
          </pre>
        </div>
      </div>

      {/* Operations Complexity */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Time & Space Complexity
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-50 dark:bg-orange-900/20">
                <th className="border border-orange-200 dark:border-orange-800 px-6 py-3 text-left text-slate-900 dark:text-slate-100">
                  Operation
                </th>
                <th className="border border-orange-200 dark:border-orange-800 px-6 py-3 text-left text-slate-900 dark:text-slate-100">
                  Array
                </th>
                <th className="border border-orange-200 dark:border-orange-800 px-6 py-3 text-left text-slate-900 dark:text-slate-100">
                  Linked List
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { op: "Enqueue", array: "O(1)", linkedList: "O(1)" },
                { op: "Dequeue", array: "O(1)*", linkedList: "O(1)" },
                { op: "Peek", array: "O(1)", linkedList: "O(1)" },
                { op: "IsEmpty", array: "O(1)", linkedList: "O(1)" },
                { op: "Size", array: "O(1)", linkedList: "O(1)" },
                { op: "Space", array: "O(n)", linkedList: "O(n)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-6 py-3 font-semibold text-slate-900 dark:text-slate-100">
                    {row.op}
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-6 py-3 text-blue-600 dark:text-blue-400 font-mono">
                    {row.array}
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-6 py-3 text-purple-600 dark:text-purple-400 font-mono">
                    {row.linkedList}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
          * Array dequeue is O(1) for operation but may waste space. Circular queue solves this issue.
        </p>
      </div>
    </div>
  );
}
