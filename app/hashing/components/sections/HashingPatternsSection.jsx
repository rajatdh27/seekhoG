"use client";
import { motion } from "framer-motion";

export default function HashingPatternsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
          <span className="text-4xl">🎯</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Common Hashing Patterns
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Master these patterns to solve 90% of hashing problems
          </p>
        </div>
      </div>

      {/* Pattern 1: Frequency Counter */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">
          1️⃣ Frequency Counter Pattern
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800 mb-6">
          <p className="text-lg text-emerald-900 dark:text-emerald-100 mb-4">
            Count occurrences of elements using a HashMap. Map element → frequency.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Anagrams, frequency comparison, most frequent element
          </p>
        </div>
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Problem: Check if two strings are anagrams
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freqMap = new Map();

    // Count frequency in first string
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Decrease frequency for second string
    for (let char of t) {
        if (!freqMap.has(char)) return false;
        freqMap.set(char, freqMap.get(char) - 1);
        if (freqMap.get(char) === 0) {
            freqMap.delete(char);
        }
    }

    return freqMap.size === 0;
}

// Time: O(n + m)
// Space: O(k) where k = unique characters

// Other problems:
// - Valid Anagram
// - Group Anagrams
// - Top K Frequent Elements
// - First Unique Character`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 2: Two Sum Pattern */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-6">
          2️⃣ Two Sum Pattern (Complement)
        </h3>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800 mb-6">
          <p className="text-lg text-teal-900 dark:text-teal-100 mb-4">
            Store seen elements in HashMap, check if complement exists. Map element → index/count.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Find pairs with target sum, difference, product
          </p>
        </div>
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Problem: Find two numbers that add up to target
function twoSum(nums, target) {
    const map = new Map();  // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

// Time: O(n)
// Space: O(n)

// Variations:
// - Two Sum II (sorted array - use two pointers instead!)
// - Three Sum (fix one, two sum on rest)
// - Four Sum
// - Subarray Sum Equals K
// - Contiguous Array (0s and 1s)`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 3: Seen/Visited Set */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          3️⃣ Seen/Visited Set Pattern
        </h3>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mb-6">
          <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
            Use HashSet to track visited elements. Check existence in O(1).
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Detect duplicates, cycles, unique elements
          </p>
        </div>
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Problem: Contains Duplicate
function containsDuplicate(nums) {
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true;  // Found duplicate
        }
        seen.add(num);
    }

    return false;
}

// Time: O(n)
// Space: O(n)

// Problem: Longest Consecutive Sequence
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        // Only start counting if num is start of sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
}

// Other problems:
// - Happy Number
// - Linked List Cycle (fast/slow also works)
// - Remove Duplicates from Array`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 4: Running Sum/Prefix Sum with HashMap */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          4️⃣ Prefix Sum + HashMap Pattern
        </h3>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            Store running sum → frequency. Check if (current_sum - target) exists.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Subarray sum problems, continuous subarray
          </p>
        </div>
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Problem: Subarray Sum Equals K
function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1);  // Base case: sum 0 seen once

    let sum = 0;
    let count = 0;

    for (let num of nums) {
        sum += num;

        // Check if (sum - k) exists
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // Store current sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

// Time: O(n)
// Space: O(n)

// Key insight:
// If sum[0...j] - sum[0...i] = k
// Then sum[i+1...j] = k

// Other problems:
// - Continuous Subarray Sum
// - Contiguous Array (0s and 1s equal)
// - Maximum Size Subarray Sum Equals K`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 5: Group by Key */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-6">
          5️⃣ Group by Key Pattern
        </h3>
        <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800 mb-6">
          <p className="text-lg text-pink-900 dark:text-pink-100 mb-4">
            Group items with same property using HashMap. Map key → array of items.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Group anagrams, group by property, categorize
          </p>
        </div>
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Problem: Group Anagrams
function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        // Create key by sorting characters
        const key = str.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}

// Time: O(n * k log k) where k = average string length
// Space: O(n * k)

// Alternative: Use character frequency as key
function groupAnagrams2(strs) {
    const map = new Map();

    for (let str of strs) {
        const count = new Array(26).fill(0);

        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = count.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}

// Time: O(n * k)
// Space: O(n * k)

// Other problems:
// - Group Shifted Strings
// - Find Duplicate Subtrees`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 6: Index Mapping */}
      <div>
        <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
          6️⃣ Index Mapping Pattern
        </h3>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 mb-6">
          <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-4">
            Map element → last seen index. Useful for position-based problems.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Longest substring without repeating, intervals
          </p>
        </div>
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Problem: Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    const map = new Map();  // char -> last index
    let maxLen = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If char seen and in current window, move start
        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1;
        }

        map.set(char, end);
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}

// Time: O(n)
// Space: O(min(n, m)) where m = charset size

// Other problems:
// - Minimum Window Substring
// - Longest Substring with At Most K Distinct Characters
// - Fruit Into Baskets`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
