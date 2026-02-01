"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { Layers, Database, Globe, Search, ArrowRightLeft, CheckCircle2 } from "lucide-react";

export default function HashMapSetSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const hashMapCode = {
    javascript: `// Creating a Map
const map = new Map();

// Insert
map.set("apple", 5);
map.set("banana", 10);

// Access
console.log(map.get("apple")); // 5

// Check Existence
console.log(map.has("banana")); // true

// Delete
map.delete("apple");

// Iterate
for (let [key, value] of map) {
    console.log(key, value);
}`,
    python: `# Creating a dict
hash_map = {}

# Insert
hash_map["apple"] = 5
hash_map["banana"] = 10

# Access
print(hash_map["apple"]) # 5

# Check Existence
if "banana" in hash_map:
    print("Found")

# Delete
del hash_map["apple"]

# Iterate
for key, value in hash_map.items():
    print(key, value)`,
    java: `// Using HashMap
HashMap<String, Integer> map = new HashMap<>();

// Insert
map.put("apple", 5);
map.put("banana", 10);

// Access
System.out.println(map.get("apple")); // 5

// Check Existence
if (map.containsKey("banana")) {
    System.out.println("Found");
}

// Delete
map.remove("apple");

// Iterate
for (String key : map.keySet()) {
    System.out.println(key + " " + map.get(key));
}`,
    cpp: `// Using unordered_map
#include <unordered_map>
std::unordered_map<std::string, int> map;

// Insert
map["apple"] = 5;
map["banana"] = 10;

// Access
std::cout << map["apple"]; // 5

// Check Existence
if (map.find("banana") != map.end()) {
    std::cout << "Found";
}

// Delete
map.erase("apple");`,
    c: `// C does NOT have a built-in HashMap.
// You must implement one yourself or use a library (like uthash).

// Pseudo-implementation approach:
struct Entry {
    char* key;
    int value;
    struct Entry* next; // For chaining collisions
};

struct HashMap {
    struct Entry** buckets;
    int size;
};

// 1. Compute hash = hash_function(key) % size
// 2. Insert at buckets[hash]
// 3. Handle collisions (linked list or open addressing)`,
    go: `// Creating a map (string -> int)
m := make(map[string]int)

// Insert
m["apple"] = 5
m["banana"] = 10

// Access
val := m["apple"] // 5

// Check Existence
if _, exists := m["banana"]; exists {
    fmt.Println("Found")
}

// Delete
delete(m, "apple")

// Iterate
for k, v := range m {
    fmt.Println(k, v)
}`
  };

  const hashSetCode = {
    javascript: `// Creating a Set
const set = new Set();

// Add
set.add(1);
set.add(2);
set.add(2); // Duplicate ignored

// Check Existence
console.log(set.has(1)); // true

// Delete
set.delete(1);

// Size
console.log(set.size); // 1`,
    python: `# Creating a set
hash_set = set()

# Add
hash_set.add(1)
hash_set.add(2)
hash_set.add(2) # Duplicate ignored

# Check Existence
if 1 in hash_set:
    print("Found")

# Delete
hash_set.remove(1)

# Size
print(len(hash_set))`,
    java: `// Using HashSet
HashSet<Integer> set = new HashSet<>();

// Add
set.add(1);
set.add(2);
set.add(2); // Duplicate ignored

// Check Existence
if (set.contains(1)) {
    System.out.println("Found");
}

// Delete
set.remove(1);

// Size
System.out.println(set.size());`,
    cpp: `// Using unordered_set
#include <unordered_set>
std::unordered_set<int> set;

// Add
set.insert(1);
set.insert(2);
set.insert(2); // Duplicate ignored

// Check Existence
if (set.count(1)) {
    std::cout << "Found";
}

// Delete
set.erase(1);`,
    c: `// C does NOT have a built-in HashSet.
// Typically implemented as a Hash Map where keys are elements 
// and values are ignored (or dummy values).

// Requires manual implementation of:
// - Hash function
// - Collision handling
// - Memory management (malloc/free)`,
    go: `// Go does not have a built-in Set type.
// Idiomatic way: Use a map[T]bool or map[T]struct{}

set := make(map[int]struct{})

// Add
set[1] = struct{}{} // Empty struct takes 0 memory
set[2] = struct{}{}

// Check Existence
if _, exists := set[1]; exists {
    fmt.Println("Found")
}

// Delete
delete(set, 1)

// Size
fmt.Println(len(set))`
  };

  const dsComparison = [
    {
      title: "HashMap (Dictionary)",
      description: "Optimized for retrieving values associated with unique keys.",
      icon: Database,
      color: "blue",
      footer: (
        <ul className="space-y-2 text-[10px] font-bold text-slate-400">
          <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-500" /> Key-Value Pairs</li>
          <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-500" /> Unique Keys, Duplicate Values</li>
          <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-500" /> Caching, Frequency Counting</li>
        </ul>
      )
    },
    {
      title: "HashSet (Set)",
      description: "Optimized for checking uniqueness and existence.",
      icon: CheckCircle2,
      color: "emerald",
      footer: (
        <ul className="space-y-2 text-[10px] font-bold text-slate-400">
          <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-emerald-500" /> Unique Keys Only</li>
          <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-emerald-500" /> No Duplicates Allowed</li>
          <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-emerald-500" /> Deduplication, Visited Tracker</li>
        </ul>
      )
    }
  ];

  return (
    <PerspectiveCard color="blue">
      <SectionHeader 
        title="HashMap & HashSet" 
        description="Standard library implementations."
        icon={Layers} 
        color="blue" 
      />

      <ConceptGrid items={dsComparison} columns={2} className="mb-12" />

      {/* HashMap Section */}
      <div className="space-y-6 mb-12">
        <SectionHeader 
          title="HashMap Implementation" 
          icon={Database} 
          color="blue" 
          className="mb-6"
        />
        <CodeImplementation 
          languages={hashMapCode} 
          color="blue"
          initialLanguage={currentLanguage}
        />
      </div>

      {/* HashSet Section */}
      <div className="space-y-6">
        <SectionHeader 
          title="HashSet Implementation" 
          icon={CheckCircle2} 
          color="emerald" 
          className="mb-6"
        />
        <CodeImplementation 
          languages={hashSetCode} 
          color="emerald"
          initialLanguage={currentLanguage}
        />
      </div>
    </PerspectiveCard>
  );
}