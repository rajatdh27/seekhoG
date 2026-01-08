"use client";
import { motion } from "framer-motion";

export default function HashMapSetSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
          <span className="text-4xl">🗺️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            HashMap & HashSet
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Built-in hash-based data structures in programming languages
          </p>
        </div>
      </div>

      {/* HashMap */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          🗺️ HashMap (Dictionary, Map)
        </h3>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-blue-600 mb-6">
          <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
            Stores <strong>key-value pairs</strong>. Keys are unique, values can be anything.
            Average O(1) for insert, delete, search.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">Insert</p>
              <p className="text-xs">map[key] = value</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">Search</p>
              <p className="text-xs">value = map[key]</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">Delete</p>
              <p className="text-xs">delete map[key]</p>
            </div>
          </div>
        </div>

        {/* Implementation in Multiple Languages */}
        <div className="space-y-6">
          {/* JavaScript */}
          <div>
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">
              JavaScript / TypeScript
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`// Using Map (preferred for non-string keys)
const map = new Map();

// Insert
map.set("apple", 5);
map.set("banana", 10);
map.set(42, "number key");  // Can use any type as key

// Search
console.log(map.get("apple"));  // 5
console.log(map.has("banana")); // true

// Delete
map.delete("apple");

// Iterate
for (let [key, value] of map) {
    console.log(\`\${key}: \${value}\`);
}

// Size
console.log(map.size);  // 2

// Using Object (only string/symbol keys)
const obj = {};
obj["name"] = "John";
obj["age"] = 25;
console.log(obj["name"]);  // "John"`}</code>
              </pre>
            </div>
          </div>

          {/* Python */}
          <div>
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">
              Python
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`# Using dict
hash_map = {}

# Insert
hash_map["apple"] = 5
hash_map["banana"] = 10

# Search
print(hash_map["apple"])  # 5
print("banana" in hash_map)  # True

# Delete
del hash_map["apple"]

# Get with default
value = hash_map.get("missing", 0)  # 0 (default)

# Iterate
for key, value in hash_map.items():
    print(f"{key}: {value}")

# Size
print(len(hash_map))  # 1`}</code>
              </pre>
            </div>
          </div>

          {/* Java */}
          <div>
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">
              Java
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`import java.util.HashMap;

HashMap<String, Integer> map = new HashMap<>();

// Insert
map.put("apple", 5);
map.put("banana", 10);

// Search
System.out.println(map.get("apple"));  // 5
System.out.println(map.containsKey("banana"));  // true

// Delete
map.remove("apple");

// Get with default
int value = map.getOrDefault("missing", 0);  // 0

// Iterate
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Size
System.out.println(map.size());  // 1`}</code>
              </pre>
            </div>
          </div>

          {/* C++ */}
          <div>
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">
              C++
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`#include <unordered_map>
#include <string>

std::unordered_map<std::string, int> map;

// Insert
map["apple"] = 5;
map["banana"] = 10;

// Search
std::cout << map["apple"] << std::endl;  // 5
if (map.find("banana") != map.end()) {
    std::cout << "Found!" << std::endl;
}

// Delete
map.erase("apple");

// Iterate
for (auto& [key, value] : map) {
    std::cout << key << ": " << value << std::endl;
}

// Size
std::cout << map.size() << std::endl;  // 1`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* HashSet */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-6">
          🎯 HashSet (Set)
        </h3>
        <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl border-l-4 border-cyan-600 mb-6">
          <p className="text-lg text-cyan-900 dark:text-cyan-100 mb-4">
            Stores <strong>unique elements only</strong>. No duplicates allowed.
            Like HashMap but only stores keys, no values. O(1) for add, delete, contains.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">Add</p>
              <p className="text-xs">set.add(element)</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">Contains</p>
              <p className="text-xs">set.has(element)</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">Delete</p>
              <p className="text-xs">set.delete(element)</p>
            </div>
          </div>
        </div>

        {/* Implementation in Multiple Languages */}
        <div className="space-y-6">
          {/* JavaScript */}
          <div>
            <h4 className="text-lg font-bold text-cyan-700 dark:text-cyan-400 mb-3">
              JavaScript / TypeScript
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`const set = new Set();

// Add
set.add(1);
set.add(2);
set.add(2);  // Duplicate, ignored
set.add(3);

// Contains
console.log(set.has(2));  // true
console.log(set.has(5));  // false

// Delete
set.delete(1);

// Iterate
for (let item of set) {
    console.log(item);  // 2, 3
}

// Size
console.log(set.size);  // 2

// Convert array to set (remove duplicates)
const arr = [1, 2, 2, 3, 3, 4];
const uniqueSet = new Set(arr);
const unique = [...uniqueSet];  // [1, 2, 3, 4]`}</code>
              </pre>
            </div>
          </div>

          {/* Python */}
          <div>
            <h4 className="text-lg font-bold text-cyan-700 dark:text-cyan-400 mb-3">
              Python
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`# Using set
hash_set = set()

# Add
hash_set.add(1)
hash_set.add(2)
hash_set.add(2)  # Duplicate, ignored
hash_set.add(3)

# Contains
print(2 in hash_set)  # True
print(5 in hash_set)  # False

# Delete
hash_set.remove(1)  # Raises error if not found
hash_set.discard(10)  # No error if not found

# Iterate
for item in hash_set:
    print(item)  # 2, 3

# Size
print(len(hash_set))  # 2

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1 & set2)  # Intersection: {3}
print(set1 | set2)  # Union: {1, 2, 3, 4, 5}
print(set1 - set2)  # Difference: {1, 2}`}</code>
              </pre>
            </div>
          </div>

          {/* Java */}
          <div>
            <h4 className="text-lg font-bold text-cyan-700 dark:text-cyan-400 mb-3">
              Java
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`import java.util.HashSet;

HashSet<Integer> set = new HashSet<>();

// Add
set.add(1);
set.add(2);
set.add(2);  // Duplicate, ignored
set.add(3);

// Contains
System.out.println(set.contains(2));  // true
System.out.println(set.contains(5));  // false

// Delete
set.remove(1);

// Iterate
for (int item : set) {
    System.out.println(item);  // 2, 3
}

// Size
System.out.println(set.size());  // 2`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* HashMap vs HashSet */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ HashMap vs HashSet
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-900/30">
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-left">Aspect</th>
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-left">HashMap</th>
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-left">HashSet</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  aspect: "Stores",
                  hashmap: "Key-Value pairs",
                  hashset: "Only keys (unique elements)",
                },
                {
                  aspect: "Duplicates",
                  hashmap: "Keys unique, values can duplicate",
                  hashset: "No duplicates allowed",
                },
                {
                  aspect: "Null",
                  hashmap: "One null key, multiple null values",
                  hashset: "One null element allowed",
                },
                {
                  aspect: "Use Case",
                  hashmap: "Map key to value (e.g., name to age)",
                  hashset: "Check existence, remove duplicates",
                },
                {
                  aspect: "Example",
                  hashmap: 'map["name"] = "John"',
                  hashset: "set.add(42)",
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-50 dark:hover:bg-blue-900/10">
                  <td className="border border-blue-300 dark:border-blue-700 p-4 font-bold">
                    {row.aspect}
                  </td>
                  <td className="border border-blue-300 dark:border-blue-700 p-4 text-sm">
                    {row.hashmap}
                  </td>
                  <td className="border border-blue-300 dark:border-blue-700 p-4 text-sm">
                    {row.hashset}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
