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

const syntaxData = {
  nodeDefinition: {
    title: "Node Structure Definition",
    c: `// Singly Linked List Node
typedef struct Node {
    int data;
    struct Node* next;
} Node;

// Doubly Linked List Node
typedef struct DNode {
    int data;
    struct DNode* prev;
    struct DNode* next;
} DNode;

// Create a new node
Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}`,
    cpp: `// Singly Linked List Node
struct Node {
    int data;
    Node* next;

    Node(int val) : data(val), next(nullptr) {}
};

// Doubly Linked List Node
struct DNode {
    int data;
    DNode* prev;
    DNode* next;

    DNode(int val) : data(val), prev(nullptr), next(nullptr) {}
};

// Using class
class Node {
public:
    int data;
    Node* next;

    Node(int val) : data(val), next(nullptr) {}
};`,
    java: `// Singly Linked List Node
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

// Doubly Linked List Node
class DNode {
    int data;
    DNode prev;
    DNode next;

    DNode(int data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Generic Node
class Node<T> {
    T data;
    Node<T> next;

    Node(T data) {
        this.data = data;
        this.next = null;
    }
}`,
    javascript: `// Singly Linked List Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Doubly Linked List Node
class DNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Using object literal
const createNode = (data) => ({
    data: data,
    next: null
});`,
    python: `# Singly Linked List Node
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Doubly Linked List Node
class DNode:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

# Using dataclass (Python 3.7+)
from dataclasses import dataclass
from typing import Optional

@dataclass
class Node:
    data: int
    next: Optional['Node'] = None`,
    go: `// Singly Linked List Node
type Node struct {
    Data int
    Next *Node
}

// Doubly Linked List Node
type DNode struct {
    Data int
    Prev *DNode
    Next *DNode
}

// Create new node
func NewNode(data int) *Node {
    return &Node{
        Data: data,
        Next: nil,
    }
}

// Generic node (Go 1.18+)
type Node[T any] struct {
    Data T
    Next *Node[T]
}`,
  },
  insertAtHead: {
    title: "Insert at Head",
    c: `void insertAtHead(Node** head, int data) {
    Node* newNode = createNode(data);
    newNode->next = *head;
    *head = newNode;
}

// Usage
Node* head = NULL;
insertAtHead(&head, 10);
insertAtHead(&head, 20);
insertAtHead(&head, 30);
// List: 30 -> 20 -> 10 -> NULL`,
    cpp: `// Method 1: Using reference
void insertAtHead(Node*& head, int data) {
    Node* newNode = new Node(data);
    newNode->next = head;
    head = newNode;
}

// Method 2: Return new head
Node* insertAtHead(Node* head, int data) {
    Node* newNode = new Node(data);
    newNode->next = head;
    return newNode;
}

// Usage
Node* head = nullptr;
insertAtHead(head, 10);
insertAtHead(head, 20);`,
    java: `// Method in LinkedList class
public void insertAtHead(int data) {
    Node newNode = new Node(data);
    newNode.next = head;
    head = newNode;
    size++;
}

// Or return new head
public Node insertAtHead(Node head, int data) {
    Node newNode = new Node(data);
    newNode.next = head;
    return newNode;
}

// Usage
LinkedList list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(20);`,
    javascript: `// Method in LinkedList class
insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

// Standalone function
function insertAtHead(head, data) {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
}

// Usage
const list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(20);`,
    python: `# Method in LinkedList class
def insert_at_head(self, data):
    new_node = Node(data)
    new_node.next = self.head
    self.head = new_node
    self.size += 1

# Standalone function
def insert_at_head(head, data):
    new_node = Node(data)
    new_node.next = head
    return new_node

# Usage
linked_list = LinkedList()
linked_list.insert_at_head(10)
linked_list.insert_at_head(20)`,
    go: `// Method on LinkedList
func (ll *LinkedList) InsertAtHead(data int) {
    newNode := &Node{Data: data, Next: ll.Head}
    ll.Head = newNode
    ll.Size++
}

// Standalone function
func InsertAtHead(head *Node, data int) *Node {
    newNode := &Node{
        Data: data,
        Next: head,
    }
    return newNode
}

// Usage
ll := &LinkedList{}
ll.InsertAtHead(10)
ll.InsertAtHead(20)`,
  },
  insertAtTail: {
    title: "Insert at Tail",
    c: `void insertAtTail(Node** head, int data) {
    Node* newNode = createNode(data);

    if (*head == NULL) {
        *head = newNode;
        return;
    }

    Node* curr = *head;
    while (curr->next != NULL) {
        curr = curr->next;
    }
    curr->next = newNode;
}

// With tail pointer - O(1)
void insertAtTailOptimized(Node** head, Node** tail, int data) {
    Node* newNode = createNode(data);

    if (*head == NULL) {
        *head = *tail = newNode;
    } else {
        (*tail)->next = newNode;
        *tail = newNode;
    }
}`,
    cpp: `// O(n) without tail pointer
void insertAtTail(Node*& head, int data) {
    Node* newNode = new Node(data);

    if (!head) {
        head = newNode;
        return;
    }

    Node* curr = head;
    while (curr->next) {
        curr = curr->next;
    }
    curr->next = newNode;
}

// O(1) with tail pointer
void insertAtTail(Node*& head, Node*& tail, int data) {
    Node* newNode = new Node(data);

    if (!head) {
        head = tail = newNode;
    } else {
        tail->next = newNode;
        tail = newNode;
    }
}`,
    java: `// O(n) without tail pointer
public void insertAtTail(int data) {
    Node newNode = new Node(data);

    if (head == null) {
        head = newNode;
        return;
    }

    Node curr = head;
    while (curr.next != null) {
        curr = curr.next;
    }
    curr.next = newNode;
    size++;
}

// O(1) with tail pointer
public void insertAtTail(int data) {
    Node newNode = new Node(data);

    if (head == null) {
        head = tail = newNode;
    } else {
        tail.next = newNode;
        tail = newNode;
    }
    size++;
}`,
    javascript: `// O(n) without tail pointer
insertAtTail(data) {
    const newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
        return;
    }

    let curr = this.head;
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
}

// O(1) with tail pointer
insertAtTail(data) {
    const newNode = new Node(data);

    if (!this.head) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.size++;
}`,
    python: `# O(n) without tail pointer
def insert_at_tail(self, data):
    new_node = Node(data)

    if not self.head:
        self.head = new_node
        return

    curr = self.head
    while curr.next:
        curr = curr.next
    curr.next = new_node
    self.size += 1

# O(1) with tail pointer
def insert_at_tail(self, data):
    new_node = Node(data)

    if not self.head:
        self.head = self.tail = new_node
    else:
        self.tail.next = new_node
        self.tail = new_node
    self.size += 1`,
    go: `// O(n) without tail pointer
func (ll *LinkedList) InsertAtTail(data int) {
    newNode := &Node{Data: data}

    if ll.Head == nil {
        ll.Head = newNode
        return
    }

    curr := ll.Head
    for curr.Next != nil {
        curr = curr.Next
    }
    curr.Next = newNode
    ll.Size++
}

// O(1) with tail pointer
func (ll *LinkedList) InsertAtTailOpt(data int) {
    newNode := &Node{Data: data}

    if ll.Head == nil {
        ll.Head = newNode
        ll.Tail = newNode
    } else {
        ll.Tail.Next = newNode
        ll.Tail = newNode
    }
    ll.Size++
}`,
  },
  deleteNode: {
    title: "Delete Node",
    c: `// Delete first occurrence of value
void deleteValue(Node** head, int value) {
    if (*head == NULL) return;

    // If head needs to be deleted
    if ((*head)->data == value) {
        Node* temp = *head;
        *head = (*head)->next;
        free(temp);
        return;
    }

    // Find node before the one to delete
    Node* curr = *head;
    while (curr->next && curr->next->data != value) {
        curr = curr->next;
    }

    // If found, delete it
    if (curr->next) {
        Node* temp = curr->next;
        curr->next = curr->next->next;
        free(temp);
    }
}`,
    cpp: `// Delete by value
void deleteValue(Node*& head, int value) {
    if (!head) return;

    // Delete head
    if (head->data == value) {
        Node* temp = head;
        head = head->next;
        delete temp;
        return;
    }

    // Delete other nodes
    Node* curr = head;
    while (curr->next && curr->next->data != value) {
        curr = curr->next;
    }

    if (curr->next) {
        Node* temp = curr->next;
        curr->next = curr->next->next;
        delete temp;
    }
}

// Delete node at position
void deleteAtPosition(Node*& head, int pos) {
    if (!head || pos < 0) return;

    if (pos == 0) {
        Node* temp = head;
        head = head->next;
        delete temp;
        return;
    }

    Node* curr = head;
    for (int i = 0; i < pos - 1 && curr; i++) {
        curr = curr->next;
    }

    if (curr && curr->next) {
        Node* temp = curr->next;
        curr->next = curr->next->next;
        delete temp;
    }
}`,
    java: `// Delete by value
public void deleteValue(int value) {
    if (head == null) return;

    if (head.data == value) {
        head = head.next;
        size--;
        return;
    }

    Node curr = head;
    while (curr.next != null && curr.next.data != value) {
        curr = curr.next;
    }

    if (curr.next != null) {
        curr.next = curr.next.next;
        size--;
    }
}

// Delete at position
public void deleteAtPosition(int pos) {
    if (head == null || pos < 0) return;

    if (pos == 0) {
        head = head.next;
        size--;
        return;
    }

    Node curr = head;
    for (int i = 0; i < pos - 1 && curr != null; i++) {
        curr = curr.next;
    }

    if (curr != null && curr.next != null) {
        curr.next = curr.next.next;
        size--;
    }
}`,
    javascript: `// Delete by value
deleteValue(value) {
    if (!this.head) return;

    if (this.head.data === value) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let curr = this.head;
    while (curr.next && curr.next.data !== value) {
        curr = curr.next;
    }

    if (curr.next) {
        curr.next = curr.next.next;
        this.size--;
    }
}

// Delete at position
deleteAtPosition(pos) {
    if (!this.head || pos < 0) return;

    if (pos === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let curr = this.head;
    for (let i = 0; i < pos - 1 && curr; i++) {
        curr = curr.next;
    }

    if (curr && curr.next) {
        curr.next = curr.next.next;
        this.size--;
    }
}`,
    python: `# Delete by value
def delete_value(self, value):
    if not self.head:
        return

    if self.head.data == value:
        self.head = self.head.next
        self.size -= 1
        return

    curr = self.head
    while curr.next and curr.next.data != value:
        curr = curr.next

    if curr.next:
        curr.next = curr.next.next
        self.size -= 1

# Delete at position
def delete_at_position(self, pos):
    if not self.head or pos < 0:
        return

    if pos == 0:
        self.head = self.head.next
        self.size -= 1
        return

    curr = self.head
    for i in range(pos - 1):
        if not curr:
            return
        curr = curr.next

    if curr and curr.next:
        curr.next = curr.next.next
        self.size -= 1`,
    go: `// Delete by value
func (ll *LinkedList) DeleteValue(value int) {
    if ll.Head == nil {
        return
    }

    if ll.Head.Data == value {
        ll.Head = ll.Head.Next
        ll.Size--
        return
    }

    curr := ll.Head
    for curr.Next != nil && curr.Next.Data != value {
        curr = curr.Next
    }

    if curr.Next != nil {
        curr.Next = curr.Next.Next
        ll.Size--
    }
}

// Delete at position
func (ll *LinkedList) DeleteAtPosition(pos int) {
    if ll.Head == nil || pos < 0 {
        return
    }

    if pos == 0 {
        ll.Head = ll.Head.Next
        ll.Size--
        return
    }

    curr := ll.Head
    for i := 0; i < pos-1 && curr != nil; i++ {
        curr = curr.Next
    }

    if curr != nil && curr.Next != nil {
        curr.Next = curr.Next.Next
        ll.Size--
    }
}`,
  },
  search: {
    title: "Search",
    c: `// Search by value
bool search(Node* head, int value) {
    Node* curr = head;
    while (curr != NULL) {
        if (curr->data == value) {
            return true;
        }
        curr = curr->next;
    }
    return false;
}

// Get node at position
Node* getNodeAt(Node* head, int pos) {
    Node* curr = head;
    int index = 0;

    while (curr != NULL && index < pos) {
        curr = curr->next;
        index++;
    }

    return curr;
}`,
    cpp: `// Search by value
bool search(Node* head, int value) {
    Node* curr = head;
    while (curr) {
        if (curr->data == value) {
            return true;
        }
        curr = curr->next;
    }
    return false;
}

// Get value at position
int getAt(Node* head, int pos) {
    Node* curr = head;
    for (int i = 0; i < pos && curr; i++) {
        curr = curr->next;
    }
    return curr ? curr->data : -1;
}

// Find middle node (Floyd's algorithm)
Node* findMiddle(Node* head) {
    Node* slow = head;
    Node* fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow;
}`,
    java: `// Search by value
public boolean search(int value) {
    Node curr = head;
    while (curr != null) {
        if (curr.data == value) {
            return true;
        }
        curr = curr.next;
    }
    return false;
}

// Get value at position
public int getAt(int pos) {
    if (pos < 0) return -1;

    Node curr = head;
    for (int i = 0; i < pos && curr != null; i++) {
        curr = curr.next;
    }

    return (curr != null) ? curr.data : -1;
}

// Find middle
public Node findMiddle() {
    Node slow = head;
    Node fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}`,
    javascript: `// Search by value
search(value) {
    let curr = this.head;
    while (curr) {
        if (curr.data === value) {
            return true;
        }
        curr = curr.next;
    }
    return false;
}

// Get value at position
getAt(pos) {
    if (pos < 0) return null;

    let curr = this.head;
    for (let i = 0; i < pos && curr; i++) {
        curr = curr.next;
    }

    return curr ? curr.data : null;
}

// Find middle
findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}`,
    python: `# Search by value
def search(self, value):
    curr = self.head
    while curr:
        if curr.data == value:
            return True
        curr = curr.next
    return False

# Get value at position
def get_at(self, pos):
    if pos < 0:
        return None

    curr = self.head
    for i in range(pos):
        if not curr:
            return None
        curr = curr.next

    return curr.data if curr else None

# Find middle (Floyd's algorithm)
def find_middle(self):
    slow = self.head
    fast = self.head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    return slow`,
    go: `// Search by value
func (ll *LinkedList) Search(value int) bool {
    curr := ll.Head
    for curr != nil {
        if curr.Data == value {
            return true
        }
        curr = curr.Next
    }
    return false
}

// Get value at position
func (ll *LinkedList) GetAt(pos int) int {
    if pos < 0 {
        return -1
    }

    curr := ll.Head
    for i := 0; i < pos && curr != nil; i++ {
        curr = curr.Next
    }

    if curr != nil {
        return curr.Data
    }
    return -1
}

// Find middle
func (ll *LinkedList) FindMiddle() *Node {
    slow := ll.Head
    fast := ll.Head

    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }

    return slow
}`,
  },
  reverse: {
    title: "Reverse Linked List",
    c: `// Iterative approach
void reverse(Node** head) {
    Node* prev = NULL;
    Node* curr = *head;
    Node* next = NULL;

    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }

    *head = prev;
}

// Recursive approach
Node* reverseRecursive(Node* head) {
    if (head == NULL || head->next == NULL) {
        return head;
    }

    Node* newHead = reverseRecursive(head->next);
    head->next->next = head;
    head->next = NULL;

    return newHead;
}`,
    cpp: `// Iterative approach - O(n) time, O(1) space
void reverse(Node*& head) {
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

// Recursive approach - O(n) time, O(n) space
Node* reverseRecursive(Node* head) {
    if (!head || !head->next) {
        return head;
    }

    Node* newHead = reverseRecursive(head->next);
    head->next->next = head;
    head->next = nullptr;

    return newHead;
}

// Reverse in groups of k
Node* reverseKGroup(Node* head, int k) {
    Node* curr = head;
    Node* next = nullptr;
    Node* prev = nullptr;
    int count = 0;

    // Reverse first k nodes
    while (curr && count < k) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    // Recursively reverse remaining
    if (next) {
        head->next = reverseKGroup(next, k);
    }

    return prev;
}`,
    java: `// Iterative approach
public void reverse() {
    Node prev = null;
    Node curr = head;
    Node next = null;

    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    head = prev;
}

// Recursive approach
public Node reverseRecursive(Node head) {
    if (head == null || head.next == null) {
        return head;
    }

    Node newHead = reverseRecursive(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}

// Reverse between positions
public void reverseBetween(int left, int right) {
    if (head == null) return;

    Node dummy = new Node(0);
    dummy.next = head;
    Node pre = dummy;

    for (int i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    Node start = pre.next;
    Node then = start.next;

    for (int i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = pre.next;
        pre.next = then;
        then = start.next;
    }

    head = dummy.next;
}`,
    javascript: `// Iterative approach
reverse() {
    let prev = null;
    let curr = this.head;
    let next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    this.head = prev;
}

// Recursive approach
reverseRecursive(head = this.head) {
    if (!head || !head.next) {
        this.head = head;
        return head;
    }

    const newHead = this.reverseRecursive(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}

// Reverse in pairs
reversePairs() {
    let dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
    }

    this.head = dummy.next;
}`,
    python: `# Iterative approach
def reverse(self):
    prev = None
    curr = self.head

    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node

    self.head = prev

# Recursive approach
def reverse_recursive(self, head=None):
    if head is None:
        head = self.head

    if not head or not head.next:
        self.head = head
        return head

    new_head = self.reverse_recursive(head.next)
    head.next.next = head
    head.next = None

    return new_head

# Reverse using stack
def reverse_using_stack(self):
    if not self.head:
        return

    stack = []
    curr = self.head

    while curr:
        stack.append(curr)
        curr = curr.next

    self.head = stack.pop()
    curr = self.head

    while stack:
        curr.next = stack.pop()
        curr = curr.next

    curr.next = None`,
    go: `// Iterative approach
func (ll *LinkedList) Reverse() {
    var prev *Node
    curr := ll.Head
    var next *Node

    for curr != nil {
        next = curr.Next
        curr.Next = prev
        prev = curr
        curr = next
    }

    ll.Head = prev
}

// Recursive approach
func reverseRecursive(head *Node) *Node {
    if head == nil || head.Next == nil {
        return head
    }

    newHead := reverseRecursive(head.Next)
    head.Next.Next = head
    head.Next = nil

    return newHead
}

// Reverse in groups of k
func reverseKGroup(head *Node, k int) *Node {
    curr := head
    var next, prev *Node
    count := 0

    for curr != nil && count < k {
        next = curr.Next
        curr.Next = prev
        prev = curr
        curr = next
        count++
    }

    if next != nil {
        head.Next = reverseKGroup(next, k)
    }

    return prev
}`,
  },
};

export default function LinkedListSyntax() {
  const [selectedLang, setSelectedLang] = useState("javascript");
  const [selectedOperation, setSelectedOperation] = useState("nodeDefinition");

  const operations = Object.keys(syntaxData);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
      >
        Linked List Syntax Across Languages
      </motion.h2>

      {/* Language Selector */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">Select Language:</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <motion.button
              key={lang.id}
              onClick={() => setSelectedLang(lang.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                selectedLang === lang.id
                  ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              <span>{lang.icon}</span>
              <span>{lang.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Operation Tabs */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">Operation:</h3>
        <div className="flex flex-wrap gap-2">
          {operations.map((op) => (
            <button
              key={op}
              onClick={() => setSelectedOperation(op)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedOperation === op
                  ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {syntaxData[op].title}
            </button>
          ))}
        </div>
      </div>

      {/* Code Display */}
      <motion.div
        key={`${selectedLang}-${selectedOperation}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 overflow-x-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-slate-100">
            {syntaxData[selectedOperation].title} - {languages.find((l) => l.id === selectedLang)?.name}
          </h4>
          <button
            onClick={() => {
              navigator.clipboard.writeText(syntaxData[selectedOperation][selectedLang]);
            }}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
          >
            Copy
          </button>
        </div>
        <pre className="text-sm text-slate-300 font-mono leading-relaxed">
          <code>{syntaxData[selectedOperation][selectedLang]}</code>
        </pre>
      </motion.div>

      {/* Quick Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Quick Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <th className="border border-green-500 px-4 py-2 text-left text-sm font-semibold">Feature</th>
                {languages.map((lang) => (
                  <th key={lang.id} className="border border-green-500 px-4 py-2 text-center text-sm font-semibold">
                    {lang.icon} {lang.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Built-in Linked List
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (std::list)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (LinkedList)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                  ✅ (container/list)
                </td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Manual Memory
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (malloc/free)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                  ✅ (new/delete)
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌ (GC)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌ (GC)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌ (GC)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌ (GC)</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Generic Support
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (Templates)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (Generics)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (Dynamic)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (Dynamic)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (Generics)</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Ease of Use
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">⭐⭐</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">⭐⭐⭐</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">⭐⭐⭐⭐</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">⭐⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Implementation Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-200">Implementation Notes</h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold mt-1">•</span>
            <span>
              <strong>C:</strong> Manual memory management with malloc/free. Be careful with memory leaks and
              dangling pointers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold mt-1">•</span>
            <span>
              <strong>C++:</strong> Use new/delete for manual management or std::list for automatic. std::list is
              a doubly linked list.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold mt-1">•</span>
            <span>
              <strong>Java:</strong> Built-in LinkedList class (doubly linked). Implements both List and Deque
              interfaces.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold mt-1">•</span>
            <span>
              <strong>JavaScript:</strong> No built-in linked list. Must implement manually using class or
              objects.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold mt-1">•</span>
            <span>
              <strong>Python:</strong> No built-in singly linked list. Use class implementation. collections.deque
              is doubly linked.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold mt-1">•</span>
            <span>
              <strong>Go:</strong> container/list package provides doubly linked list. Manual implementation is
              straightforward.
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
