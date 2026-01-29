"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
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

  return (
    <PerspectiveCard color="blue">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
          <Layers size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">HashMap & HashSet</h2>
          <p className="text-slate-400 font-medium">Standard library implementations.</p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 mb-12">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <ArrowRightLeft size={24} className="text-blue-400" />
          <h3 className="text-lg font-black text-white">Data Structure Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-slate-200 uppercase font-bold tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4">HashMap (Dictionary)</th>
                <th className="px-6 py-4">HashSet (Set)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { feature: "Storage", map: "Key-Value Pairs", set: "Unique Keys Only" },
                { feature: "Duplicates", map: "Unique Keys, Duplicate Values", set: "No Duplicates Allowed" },
                { feature: "Access", map: "Get Value by Key", set: "Check Existence Only" },
                { feature: "Use Case", map: "Caching, Frequency Counting", set: "Deduplication, Visited Tracker" }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.feature}</td>
                  <td className="px-6 py-4 text-blue-300">{row.map}</td>
                  <td className="px-6 py-4 text-emerald-300">{row.set}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* HashMap Section */}
      <div className="space-y-6 mb-12">
        <div className="flex items-center gap-3">
          <Database size={24} className="text-blue-400" />
          <h3 className="text-2xl font-black text-white">HashMap Implementation</h3>
        </div>
        <CodeImplementation 
          languages={hashMapCode} 
          color="blue"
          initialLanguage={currentLanguage}
        />
      </div>

      {/* HashSet Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={24} className="text-emerald-400" />
          <h3 className="text-2xl font-black text-white">HashSet Implementation</h3>
        </div>
        <CodeImplementation 
          languages={hashSetCode} 
          color="emerald"
          initialLanguage={currentLanguage}
        />
      </div>
    </PerspectiveCard>
  );
}