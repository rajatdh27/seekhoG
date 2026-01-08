"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeapImplementation() {
  const [currentLanguage, setCurrentLanguage] = useState("cpp");
  const [heapType, setHeapType] = useState("max");

  const languages = [
    { id: "c", name: "C", icon: "🔷" },
    { id: "cpp", name: "C++", icon: "⚡" },
    { id: "java", name: "Java", icon: "☕" },
    { id: "javascript", name: "JavaScript", icon: "🟨" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "go", name: "Go", icon: "🔵" },
  ];

  const codeExamples = {
    max: {
      c: `#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int size;
} MaxHeap;

// Initialize heap - O(1)
MaxHeap* createHeap() {
    MaxHeap* heap = (MaxHeap*)malloc(sizeof(MaxHeap));
    heap->size = 0;
    return heap;
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
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Heapify up - O(log n)
void heapifyUp(MaxHeap* heap, int index) {
    while (index > 0 && heap->data[parent(index)] < heap->data[index]) {
        swap(&heap->data[parent(index)], &heap->data[index]);
        index = parent(index);
    }
}

// Heapify down - O(log n)
void heapifyDown(MaxHeap* heap, int index) {
    int maxIndex = index;
    int left = leftChild(index);
    int right = rightChild(index);

    if (left < heap->size && heap->data[left] > heap->data[maxIndex]) {
        maxIndex = left;
    }
    if (right < heap->size && heap->data[right] > heap->data[maxIndex]) {
        maxIndex = right;
    }

    if (index != maxIndex) {
        swap(&heap->data[index], &heap->data[maxIndex]);
        heapifyDown(heap, maxIndex);
    }
}

// Insert element - O(log n)
void insert(MaxHeap* heap, int value) {
    if (heap->size >= MAX_SIZE) {
        printf("Heap is full\\n");
        return;
    }
    heap->data[heap->size] = value;
    heapifyUp(heap, heap->size);
    heap->size++;
}

// Extract maximum - O(log n)
int extractMax(MaxHeap* heap) {
    if (heap->size == 0) {
        printf("Heap is empty\\n");
        return -1;
    }
    int max = heap->data[0];
    heap->data[0] = heap->data[heap->size - 1];
    heap->size--;
    heapifyDown(heap, 0);
    return max;
}

// Get maximum - O(1)
int getMax(MaxHeap* heap) {
    if (heap->size == 0) {
        printf("Heap is empty\\n");
        return -1;
    }
    return heap->data[0];
}

// Print heap - O(n)
void printHeap(MaxHeap* heap) {
    for (int i = 0; i < heap->size; i++) {
        printf("%d ", heap->data[i]);
    }
    printf("\\n");
}

// Usage
int main() {
    MaxHeap* heap = createHeap();
    insert(heap, 50);
    insert(heap, 30);
    insert(heap, 70);
    insert(heap, 20);
    insert(heap, 40);

    printHeap(heap);  // 70 40 50 20 30
    printf("Max: %d\\n", extractMax(heap));  // 70
    printHeap(heap);  // 50 40 30 20

    free(heap);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
using namespace std;

class MaxHeap {
private:
    vector<int> data;

    // Helper: Get parent index - O(1)
    int parent(int i) { return (i - 1) / 2; }

    // Helper: Get left child index - O(1)
    int leftChild(int i) { return 2 * i + 1; }

    // Helper: Get right child index - O(1)
    int rightChild(int i) { return 2 * i + 2; }

    // Heapify up - O(log n)
    void heapifyUp(int index) {
        while (index > 0 && data[parent(index)] < data[index]) {
            swap(data[parent(index)], data[index]);
            index = parent(index);
        }
    }

    // Heapify down - O(log n)
    void heapifyDown(int index) {
        int maxIndex = index;
        int left = leftChild(index);
        int right = rightChild(index);

        if (left < data.size() && data[left] > data[maxIndex]) {
            maxIndex = left;
        }
        if (right < data.size() && data[right] > data[maxIndex]) {
            maxIndex = right;
        }

        if (index != maxIndex) {
            swap(data[index], data[maxIndex]);
            heapifyDown(maxIndex);
        }
    }

public:
    // Constructor - O(1)
    MaxHeap() {}

    // Insert element - O(log n)
    void insert(int value) {
        data.push_back(value);
        heapifyUp(data.size() - 1);
    }

    // Extract maximum - O(log n)
    int extractMax() {
        if (isEmpty()) {
            cout << "Heap is empty" << endl;
            return -1;
        }
        int max = data[0];
        data[0] = data.back();
        data.pop_back();
        if (!isEmpty()) {
            heapifyDown(0);
        }
        return max;
    }

    // Get maximum - O(1)
    int getMax() {
        if (isEmpty()) {
            cout << "Heap is empty" << endl;
            return -1;
        }
        return data[0];
    }

    // Check if empty - O(1)
    bool isEmpty() {
        return data.empty();
    }

    // Get size - O(1)
    int size() {
        return data.size();
    }

    // Print heap - O(n)
    void print() {
        for (int val : data) {
            cout << val << " ";
        }
        cout << endl;
    }
};

// Usage
int main() {
    MaxHeap heap;
    heap.insert(50);
    heap.insert(30);
    heap.insert(70);
    heap.insert(20);
    heap.insert(40);

    heap.print();  // 70 40 50 20 30
    cout << "Max: " << heap.extractMax() << endl;  // 70
    heap.print();  // 50 40 30 20

    return 0;
}`,

      java: `import java.util.ArrayList;

public class MaxHeap {
    private ArrayList<Integer> data;

    // Constructor - O(1)
    public MaxHeap() {
        data = new ArrayList<>();
    }

    // Helper: Get parent index - O(1)
    private int parent(int i) { return (i - 1) / 2; }

    // Helper: Get left child index - O(1)
    private int leftChild(int i) { return 2 * i + 1; }

    // Helper: Get right child index - O(1)
    private int rightChild(int i) { return 2 * i + 2; }

    // Swap two elements - O(1)
    private void swap(int i, int j) {
        int temp = data.get(i);
        data.set(i, data.get(j));
        data.set(j, temp);
    }

    // Heapify up - O(log n)
    private void heapifyUp(int index) {
        while (index > 0 && data.get(parent(index)) < data.get(index)) {
            swap(parent(index), index);
            index = parent(index);
        }
    }

    // Heapify down - O(log n)
    private void heapifyDown(int index) {
        int maxIndex = index;
        int left = leftChild(index);
        int right = rightChild(index);

        if (left < data.size() && data.get(left) > data.get(maxIndex)) {
            maxIndex = left;
        }
        if (right < data.size() && data.get(right) > data.get(maxIndex)) {
            maxIndex = right;
        }

        if (index != maxIndex) {
            swap(index, maxIndex);
            heapifyDown(maxIndex);
        }
    }

    // Insert element - O(log n)
    public void insert(int value) {
        data.add(value);
        heapifyUp(data.size() - 1);
    }

    // Extract maximum - O(log n)
    public int extractMax() {
        if (isEmpty()) {
            System.out.println("Heap is empty");
            return -1;
        }
        int max = data.get(0);
        data.set(0, data.get(data.size() - 1));
        data.remove(data.size() - 1);
        if (!isEmpty()) {
            heapifyDown(0);
        }
        return max;
    }

    // Get maximum - O(1)
    public int getMax() {
        if (isEmpty()) {
            System.out.println("Heap is empty");
            return -1;
        }
        return data.get(0);
    }

    // Check if empty - O(1)
    public boolean isEmpty() {
        return data.isEmpty();
    }

    // Get size - O(1)
    public int size() {
        return data.size();
    }

    // Print heap - O(n)
    public void print() {
        for (int val : data) {
            System.out.print(val + " ");
        }
        System.out.println();
    }

    // Usage
    public static void main(String[] args) {
        MaxHeap heap = new MaxHeap();
        heap.insert(50);
        heap.insert(30);
        heap.insert(70);
        heap.insert(20);
        heap.insert(40);

        heap.print();  // 70 40 50 20 30
        System.out.println("Max: " + heap.extractMax());  // 70
        heap.print();  // 50 40 30 20
    }
}`,

      javascript: `class MaxHeap {
    constructor() {
        this.data = [];
    }

    // Helper: Get parent index - O(1)
    parent(i) { return Math.floor((i - 1) / 2); }

    // Helper: Get left child index - O(1)
    leftChild(i) { return 2 * i + 1; }

    // Helper: Get right child index - O(1)
    rightChild(i) { return 2 * i + 2; }

    // Swap two elements - O(1)
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    // Heapify up - O(log n)
    heapifyUp(index) {
        while (index > 0 && this.data[this.parent(index)] < this.data[index]) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    }

    // Heapify down - O(log n)
    heapifyDown(index) {
        let maxIndex = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.data.length && this.data[left] > this.data[maxIndex]) {
            maxIndex = left;
        }
        if (right < this.data.length && this.data[right] > this.data[maxIndex]) {
            maxIndex = right;
        }

        if (index !== maxIndex) {
            this.swap(index, maxIndex);
            this.heapifyDown(maxIndex);
        }
    }

    // Insert element - O(log n)
    insert(value) {
        this.data.push(value);
        this.heapifyUp(this.data.length - 1);
    }

    // Extract maximum - O(log n)
    extractMax() {
        if (this.isEmpty()) {
            return "Heap is empty";
        }
        const max = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        if (!this.isEmpty()) {
            this.heapifyDown(0);
        }
        return max;
    }

    // Get maximum - O(1)
    getMax() {
        if (this.isEmpty()) {
            return "Heap is empty";
        }
        return this.data[0];
    }

    // Check if empty - O(1)
    isEmpty() {
        return this.data.length === 0;
    }

    // Get size - O(1)
    size() {
        return this.data.length;
    }

    // Print heap - O(n)
    print() {
        return this.data.join(' ');
    }
}

// Usage
const heap = new MaxHeap();
heap.insert(50);
heap.insert(30);
heap.insert(70);
heap.insert(20);
heap.insert(40);

console.log(heap.print());  // 70 40 50 20 30
console.log("Max:", heap.extractMax());  // 70
console.log(heap.print());  // 50 40 30 20`,

      python: `class MaxHeap:
    def __init__(self):
        self.data = []

    # Helper: Get parent index - O(1)
    def parent(self, i):
        return (i - 1) // 2

    # Helper: Get left child index - O(1)
    def left_child(self, i):
        return 2 * i + 1

    # Helper: Get right child index - O(1)
    def right_child(self, i):
        return 2 * i + 2

    # Swap two elements - O(1)
    def swap(self, i, j):
        self.data[i], self.data[j] = self.data[j], self.data[i]

    # Heapify up - O(log n)
    def heapify_up(self, index):
        while index > 0 and self.data[self.parent(index)] < self.data[index]:
            self.swap(self.parent(index), index)
            index = self.parent(index)

    # Heapify down - O(log n)
    def heapify_down(self, index):
        max_index = index
        left = self.left_child(index)
        right = self.right_child(index)

        if left < len(self.data) and self.data[left] > self.data[max_index]:
            max_index = left
        if right < len(self.data) and self.data[right] > self.data[max_index]:
            max_index = right

        if index != max_index:
            self.swap(index, max_index)
            self.heapify_down(max_index)

    # Insert element - O(log n)
    def insert(self, value):
        self.data.append(value)
        self.heapify_up(len(self.data) - 1)

    # Extract maximum - O(log n)
    def extract_max(self):
        if self.is_empty():
            return "Heap is empty"

        max_val = self.data[0]
        self.data[0] = self.data[-1]
        self.data.pop()
        if not self.is_empty():
            self.heapify_down(0)
        return max_val

    # Get maximum - O(1)
    def get_max(self):
        if self.is_empty():
            return "Heap is empty"
        return self.data[0]

    # Check if empty - O(1)
    def is_empty(self):
        return len(self.data) == 0

    # Get size - O(1)
    def size(self):
        return len(self.data)

    # Print heap - O(n)
    def print_heap(self):
        return ' '.join(map(str, self.data))

# Usage
heap = MaxHeap()
heap.insert(50)
heap.insert(30)
heap.insert(70)
heap.insert(20)
heap.insert(40)

print(heap.print_heap())  # 70 40 50 20 30
print("Max:", heap.extract_max())  # 70
print(heap.print_heap())  # 50 40 30 20`,

      go: `package main

import "fmt"

type MaxHeap struct {
    data []int
}

// Initialize heap - O(1)
func NewMaxHeap() *MaxHeap {
    return &MaxHeap{
        data: make([]int, 0),
    }
}

// Helper: Get parent index - O(1)
func (h *MaxHeap) parent(i int) int {
    return (i - 1) / 2
}

// Helper: Get left child index - O(1)
func (h *MaxHeap) leftChild(i int) int {
    return 2*i + 1
}

// Helper: Get right child index - O(1)
func (h *MaxHeap) rightChild(i int) int {
    return 2*i + 2
}

// Swap two elements - O(1)
func (h *MaxHeap) swap(i, j int) {
    h.data[i], h.data[j] = h.data[j], h.data[i]
}

// Heapify up - O(log n)
func (h *MaxHeap) heapifyUp(index int) {
    for index > 0 && h.data[h.parent(index)] < h.data[index] {
        h.swap(h.parent(index), index)
        index = h.parent(index)
    }
}

// Heapify down - O(log n)
func (h *MaxHeap) heapifyDown(index int) {
    maxIndex := index
    left := h.leftChild(index)
    right := h.rightChild(index)

    if left < len(h.data) && h.data[left] > h.data[maxIndex] {
        maxIndex = left
    }
    if right < len(h.data) && h.data[right] > h.data[maxIndex] {
        maxIndex = right
    }

    if index != maxIndex {
        h.swap(index, maxIndex)
        h.heapifyDown(maxIndex)
    }
}

// Insert element - O(log n)
func (h *MaxHeap) Insert(value int) {
    h.data = append(h.data, value)
    h.heapifyUp(len(h.data) - 1)
}

// Extract maximum - O(log n)
func (h *MaxHeap) ExtractMax() int {
    if h.IsEmpty() {
        fmt.Println("Heap is empty")
        return -1
    }
    max := h.data[0]
    h.data[0] = h.data[len(h.data)-1]
    h.data = h.data[:len(h.data)-1]
    if !h.IsEmpty() {
        h.heapifyDown(0)
    }
    return max
}

// Get maximum - O(1)
func (h *MaxHeap) GetMax() int {
    if h.IsEmpty() {
        fmt.Println("Heap is empty")
        return -1
    }
    return h.data[0]
}

// Check if empty - O(1)
func (h *MaxHeap) IsEmpty() bool {
    return len(h.data) == 0
}

// Get size - O(1)
func (h *MaxHeap) Size() int {
    return len(h.data)
}

// Print heap - O(n)
func (h *MaxHeap) Print() {
    for _, val := range h.data {
        fmt.Print(val, " ")
    }
    fmt.Println()
}

// Usage
func main() {
    heap := NewMaxHeap()
    heap.Insert(50)
    heap.Insert(30)
    heap.Insert(70)
    heap.Insert(20)
    heap.Insert(40)

    heap.Print()  // 70 40 50 20 30
    fmt.Println("Max:", heap.ExtractMax())  // 70
    heap.Print()  // 50 40 30 20
}`,
    },
    min: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class MinHeap {
private:
    vector<int> data;

    int parent(int i) { return (i - 1) / 2; }
    int leftChild(int i) { return 2 * i + 1; }
    int rightChild(int i) { return 2 * i + 2; }

    void heapifyUp(int index) {
        while (index > 0 && data[parent(index)] > data[index]) {
            swap(data[parent(index)], data[index]);
            index = parent(index);
        }
    }

    void heapifyDown(int index) {
        int minIndex = index;
        int left = leftChild(index);
        int right = rightChild(index);

        if (left < data.size() && data[left] < data[minIndex]) {
            minIndex = left;
        }
        if (right < data.size() && data[right] < data[minIndex]) {
            minIndex = right;
        }

        if (index != minIndex) {
            swap(data[index], data[minIndex]);
            heapifyDown(minIndex);
        }
    }

public:
    MinHeap() {}

    void insert(int value) {
        data.push_back(value);
        heapifyUp(data.size() - 1);
    }

    int extractMin() {
        if (isEmpty()) {
            cout << "Heap is empty" << endl;
            return -1;
        }
        int min = data[0];
        data[0] = data.back();
        data.pop_back();
        if (!isEmpty()) {
            heapifyDown(0);
        }
        return min;
    }

    int getMin() {
        if (isEmpty()) {
            cout << "Heap is empty" << endl;
            return -1;
        }
        return data[0];
    }

    bool isEmpty() { return data.empty(); }
    int size() { return data.size(); }

    void print() {
        for (int val : data) {
            cout << val << " ";
        }
        cout << endl;
    }
};`,
    },
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl">
          <span className="text-4xl">💻</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Heap Implementation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Complete implementation in all major languages
          </p>
        </div>
      </div>

      {/* Heap Type Selector */}
      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setHeapType("max")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            heapType === "max"
              ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg"
              : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          📈 Max Heap
        </button>
        <button
          onClick={() => setHeapType("min")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            heapType === "min"
              ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg"
              : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          📉 Min Heap
        </button>
      </div>

      {/* Code Implementation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          {heapType === "max" ? "Max" : "Min"} Heap Code
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setCurrentLanguage(lang.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                currentLanguage === lang.id
                  ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg"
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
            <code>{codeExamples[heapType][currentLanguage]}</code>
          </pre>
        </div>
      </div>

      {/* Complexity Analysis */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Time Complexity
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { op: "Insert", complexity: "O(log n)", desc: "Insert and heapify up" },
            { op: "Extract Min/Max", complexity: "O(log n)", desc: "Remove root and heapify down" },
            { op: "Get Min/Max", complexity: "O(1)", desc: "Access root element" },
            { op: "Heapify", complexity: "O(log n)", desc: "Restore heap property" },
            { op: "Build Heap", complexity: "O(n)", desc: "Build heap from array" },
            { op: "Heap Sort", complexity: "O(n log n)", desc: "Sort using heap" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800"
            >
              <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">{item.op}</h4>
              <div className="text-3xl font-bold text-rose-600 mb-2 font-mono">{item.complexity}</div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Array Representation */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📊 Array Representation Formulas
        </h3>
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="text-rose-600 dark:text-rose-400 font-bold mb-2">Parent</div>
              <code className="text-lg font-mono">⌊(i-1)/2⌋</code>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="text-rose-600 dark:text-rose-400 font-bold mb-2">Left Child</div>
              <code className="text-lg font-mono">2i + 1</code>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="text-rose-600 dark:text-rose-400 font-bold mb-2">Right Child</div>
              <code className="text-lg font-mono">2i + 2</code>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            <strong>Example:</strong> For index i=1, parent=0, left child=3, right child=4
          </div>
        </div>
      </div>
    </div>
  );
}
