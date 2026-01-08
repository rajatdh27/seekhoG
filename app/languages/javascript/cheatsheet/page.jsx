"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function JavaScriptCheatsheet() {
  const [activeTab, setActiveTab] = useState("arrays");

  const tabs = [
    { id: "arrays", label: "Arrays" },
    { id: "strings", label: "Strings" },
    { id: "objects", label: "Objects" },
    { id: "dates", label: "Dates & Math" },
    { id: "snippets", label: "Common Snippets" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">📋</span>
            <div>
              <h1 className="text-5xl font-bold">JavaScript Cheatsheet</h1>
              <p className="text-purple-100 mt-2">Quick reference for JavaScript essentials</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Arrays */}
        {activeTab === "arrays" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Array Methods</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Creating Arrays
const arr1 = [1, 2, 3];
const arr2 = new Array(5);        // [empty × 5]
const arr3 = Array.of(1, 2, 3);   // [1, 2, 3]
const arr4 = Array.from('abc');   // ['a', 'b', 'c']
const arr5 = [...arr1];           // shallow copy

// Adding/Removing Elements
arr.push(4);              // add to end → [1,2,3,4]
arr.pop();                // remove from end → [1,2,3]
arr.unshift(0);           // add to start → [0,1,2,3]
arr.shift();              // remove from start → [1,2,3]
arr.splice(1, 1);         // remove at index → [1,3]
arr.splice(1, 0, 2);      // insert at index → [1,2,3]

// Transforming
arr.map(x => x * 2);                    // [2,4,6]
arr.filter(x => x > 1);                 // [2,3]
arr.reduce((sum, x) => sum + x, 0);     // 6
arr.flatMap(x => [x, x * 2]);           // [1,2,2,4,3,6]
arr.flat();                             // flatten one level
arr.flat(Infinity);                     // flatten all levels

// Searching
arr.find(x => x > 1);      // first element > 1
arr.findIndex(x => x > 1); // index of first > 1
arr.indexOf(2);            // 1
arr.lastIndexOf(2);        // last occurrence
arr.includes(2);           // true

// Testing
arr.some(x => x > 2);      // true if any match
arr.every(x => x > 0);     // true if all match

// Sorting
arr.sort();                      // alphabetical
arr.sort((a, b) => a - b);       // ascending
arr.sort((a, b) => b - a);       // descending
arr.reverse();                   // reverse order

// Combining/Slicing
arr.concat([4, 5]);        // [1,2,3,4,5]
arr.slice(1, 3);           // [2,3]
arr.join(',');             // '1,2,3'

// Iteration
arr.forEach(x => console.log(x));
for (let x of arr) { }
for (let i = 0; i < arr.length; i++) { }

// Other Useful Methods
arr.fill(0);               // fill all with 0
arr.copyWithin(0, 3, 5);   // copy elements
arr.at(-1);                // last element
arr.toSorted();            // non-mutating sort
arr.toReversed();          // non-mutating reverse
arr.toSpliced(1, 1);       // non-mutating splice
arr.with(0, 10);           // non-mutating replace`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Array Patterns</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Remove duplicates
const unique = [...new Set(arr)];

// Count occurrences
const count = arr.reduce((acc, x) => {
  acc[x] = (acc[x] || 0) + 1;
  return acc;
}, {});

// Group by property
const grouped = arr.reduce((acc, item) => {
  (acc[item.category] = acc[item.category] || []).push(item);
  return acc;
}, {});

// Flatten array
const flat = arr.flat(Infinity);
const flat = arr.reduce((acc, val) => acc.concat(val), []);

// Chunk array
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) },
    (_, i) => arr.slice(i * size, i * size + size));

chunk([1,2,3,4,5], 2);  // [[1,2], [3,4], [5]]

// Shuffle array
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// Range
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

range(1, 5);  // [1,2,3,4,5]

// Max/Min
const max = Math.max(...arr);
const min = Math.min(...arr);

// Sum/Average
const sum = arr.reduce((a, b) => a + b, 0);
const avg = sum / arr.length;

// Partition
const partition = (arr, predicate) =>
  arr.reduce(([pass, fail], elem) =>
    predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]],
    [[], []]
  );

const [evens, odds] = partition([1,2,3,4], x => x % 2 === 0);

// Intersection
const intersection = (a, b) => a.filter(x => b.includes(x));

// Difference
const difference = (a, b) => a.filter(x => !b.includes(x));

// Union
const union = (a, b) => [...new Set([...a, ...b])];

// Zip
const zip = (...arrays) =>
  Array.from({ length: Math.max(...arrays.map(a => a.length)) },
    (_, i) => arrays.map(a => a[i]));

zip([1,2], ['a','b']);  // [[1,'a'], [2,'b']]

// Deep clone
const deepClone = arr => JSON.parse(JSON.stringify(arr));

// Remove falsy values
const compact = arr => arr.filter(Boolean);

// Sample random element
const sample = arr => arr[Math.floor(Math.random() * arr.length)];`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Strings */}
        {activeTab === "strings" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">String Methods</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`const str = 'Hello World';

// Accessing
str[0];                    // 'H'
str.charAt(0);             // 'H'
str.at(-1);                // 'd'
str.charCodeAt(0);         // 72

// Searching
str.indexOf('o');          // 4
str.lastIndexOf('o');      // 7
str.includes('World');     // true
str.startsWith('Hello');   // true
str.endsWith('World');     // true
str.search(/world/i);      // 6

// Extracting
str.slice(0, 5);           // 'Hello'
str.substring(0, 5);       // 'Hello'
str.substr(0, 5);          // 'Hello' (deprecated)
str.split(' ');            // ['Hello', 'World']

// Modifying
str.replace('World', 'JS');          // 'Hello JS'
str.replaceAll('o', '0');            // 'Hell0 W0rld'
str.toUpperCase();                   // 'HELLO WORLD'
str.toLowerCase();                   // 'hello world'
str.trim();                          // remove whitespace
str.trimStart();                     // left trim
str.trimEnd();                       // right trim
str.padStart(15, '*');               // '****Hello World'
str.padEnd(15, '*');                 // 'Hello World****'

// Combining
str.concat(' 123');                  // 'Hello World 123'
str.repeat(2);                       // 'Hello WorldHello World'

// Template Literals
const name = 'John';
const age = 30;
\`Name: \${name}, Age: \${age}\`;     // 'Name: John, Age: 30'

// Multi-line
const multi = \`
  Line 1
  Line 2
\`;

// Tagged templates
function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
}

tag\`Hello \${name}!\`;

// Testing
/^Hello/.test(str);                  // starts with Hello
/World$/.test(str);                  // ends with World
/\\d+/.test('abc123');                // contains digits

// Matching
str.match(/o/g);                     // ['o', 'o']
str.matchAll(/o/g);                  // iterator
[...str.matchAll(/o/g)];             // array of matches

// Localization
str.localeCompare('hello');          // -1, 0, or 1
str.toLocaleUpperCase();
str.toLocaleLowerCase();

// Properties
str.length;                          // 11`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">String Patterns</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Capitalize first letter
const capitalize = str => str[0].toUpperCase() + str.slice(1);

// Title case
const titleCase = str =>
  str.split(' ')
    .map(word => capitalize(word.toLowerCase()))
    .join(' ');

// Reverse string
const reverse = str => str.split('').reverse().join('');
const reverse = str => [...str].reverse().join('');

// Palindrome check
const isPalindrome = str => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === [...clean].reverse().join('');
};

// Count vowels
const countVowels = str =>
  (str.match(/[aeiou]/gi) || []).length;

// Truncate
const truncate = (str, length) =>
  str.length > length ? str.slice(0, length) + '...' : str;

// Slugify
const slugify = str =>
  str.toLowerCase()
    .trim()
    .replace(/[^\\w\\s-]/g, '')
    .replace(/[\\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

slugify('Hello World!');  // 'hello-world'

// Extract numbers
const extractNumbers = str => str.match(/\\d+/g);

// Camel case
const camelCase = str =>
  str.toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());

camelCase('hello-world');  // 'helloWorld'

// Snake case
const snakeCase = str =>
  str.replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');

snakeCase('helloWorld');  // 'hello_world'

// Kebab case
const kebabCase = str =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

kebabCase('helloWorld');  // 'hello-world'

// Remove HTML tags
const stripHtml = str => str.replace(/<[^>]*>/g, '');

// Escape HTML
const escapeHtml = str =>
  str.replace(/[&<>"']/g, match => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[match]));

// Word count
const wordCount = str => str.trim().split(/\\s+/).length;

// Mask string
const mask = (str, num = 4, mask = '*') =>
  str.slice(-num).padStart(str.length, mask);

mask('1234567890');  // '******7890'

// Insert at position
const insertAt = (str, substr, pos) =>
  str.slice(0, pos) + substr + str.slice(pos);`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Objects */}
        {activeTab === "objects" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Object Methods</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`const obj = { name: 'John', age: 30, city: 'NYC' };

// Keys, Values, Entries
Object.keys(obj);              // ['name', 'age', 'city']
Object.values(obj);            // ['John', 30, 'NYC']
Object.entries(obj);           // [['name','John'], ['age',30], ['city','NYC']]

// From entries
Object.fromEntries([['a', 1], ['b', 2]]);  // {a: 1, b: 2}

// Assign (merge)
Object.assign({}, obj, { age: 31 });
const merged = { ...obj, age: 31 };  // same thing

// Freeze (immutable)
Object.freeze(obj);
obj.age = 31;  // fails silently

// Seal (no add/delete, can modify)
Object.seal(obj);
obj.age = 31;     // ✅
obj.email = '';   // ❌

// Check if frozen/sealed
Object.isFrozen(obj);
Object.isSealed(obj);

// Prevent extensions
Object.preventExtensions(obj);
Object.isExtensible(obj);  // false

// Property descriptors
Object.getOwnPropertyDescriptor(obj, 'name');
// { value: 'John', writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj, 'age', {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperties(obj, {
  prop1: { value: 1 },
  prop2: { value: 2 }
});

// Get own properties
Object.getOwnPropertyNames(obj);
Object.getOwnPropertySymbols(obj);
Reflect.ownKeys(obj);  // includes symbols

// Prototype
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, proto);
Object.create(proto);

// Check property
obj.hasOwnProperty('name');  // true
'name' in obj;               // true (checks prototype chain)

// Compare
Object.is(5, 5);          // true
Object.is(NaN, NaN);      // true (unlike ===)
Object.is(0, -0);         // false (unlike ===)

// Group by (ES2024)
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 30 }
];

Object.groupBy(people, p => p.age);
// { 25: [{name:'Jane', age:25}], 30: [{name:'John', age:30}, {name:'Bob', age:30}] }`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Object Patterns</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Deep clone
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const deepClone = obj => structuredClone(obj);  // better

// Deep merge
const deepMerge = (target, source) => {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  return Object.assign(target || {}, source);
};

// Pick properties
const pick = (obj, keys) =>
  keys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});

pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);  // { a: 1, c: 3 }

// Omit properties
const omit = (obj, keys) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key))
  );

omit({ a: 1, b: 2, c: 3 }, ['b']);  // { a: 1, c: 3 }

// Map object
const mapObject = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [key, fn(val, key)])
  );

mapObject({ a: 1, b: 2 }, v => v * 2);  // { a: 2, b: 4 }

// Filter object
const filterObject = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key, val]) => fn(val, key))
  );

filterObject({ a: 1, b: 2, c: 3 }, v => v > 1);  // { b: 2, c: 3 }

// Invert object
const invert = obj =>
  Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [val, key])
  );

invert({ a: 1, b: 2 });  // { 1: 'a', 2: 'b' }

// Flatten object
const flatten = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? \`\${prefix}.\` : '';
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flatten(obj[key], pre + key));
    } else {
      acc[pre + key] = obj[key];
    }
    return acc;
  }, {});

flatten({ a: { b: { c: 1 } } });  // { 'a.b.c': 1 }

// Unflatten object
const unflatten = obj =>
  Object.entries(obj).reduce((acc, [key, val]) => {
    const keys = key.split('.');
    keys.reduce((curr, k, i) => {
      if (i === keys.length - 1) {
        curr[k] = val;
      } else {
        curr[k] = curr[k] || {};
      }
      return curr[k];
    }, acc);
    return acc;
  }, {});

unflatten({ 'a.b.c': 1 });  // { a: { b: { c: 1 } } }

// Get nested property safely
const get = (obj, path, defaultValue) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? defaultValue;

get({ a: { b: { c: 1 } } }, 'a.b.c');  // 1
get({ a: { b: {} } }, 'a.b.c', 0);     // 0

// Set nested property
const set = (obj, path, value) => {
  const keys = path.split('.');
  keys.reduce((acc, key, i) => {
    if (i === keys.length - 1) {
      acc[key] = value;
    } else {
      acc[key] = acc[key] || {};
    }
    return acc[key];
  }, obj);
  return obj;
};

set({}, 'a.b.c', 1);  // { a: { b: { c: 1 } } }

// Compare objects
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Dates & Math */}
        {activeTab === "dates" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Date Methods</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Creating Dates
const now = new Date();
const date1 = new Date('2024-01-01');
const date2 = new Date(2024, 0, 1);  // month is 0-indexed
const date3 = new Date(1704067200000);  // timestamp

// Getting Values
now.getFullYear();        // 2024
now.getMonth();           // 0-11
now.getDate();            // 1-31
now.getDay();             // 0-6 (0 = Sunday)
now.getHours();           // 0-23
now.getMinutes();         // 0-59
now.getSeconds();         // 0-59
now.getMilliseconds();    // 0-999
now.getTime();            // timestamp

// Setting Values
now.setFullYear(2025);
now.setMonth(11);
now.setDate(31);
now.setHours(23);
now.setMinutes(59);
now.setSeconds(59);

// UTC Methods
now.getUTCFullYear();
now.getUTCMonth();
now.getUTCDate();

// Formatting
now.toString();           // 'Mon Jan 01 2024 00:00:00 GMT+0000'
now.toDateString();       // 'Mon Jan 01 2024'
now.toTimeString();       // '00:00:00 GMT+0000'
now.toISOString();        // '2024-01-01T00:00:00.000Z'
now.toLocaleString();     // locale-specific
now.toLocaleDateString(); // locale-specific date
now.toLocaleTimeString(); // locale-specific time

// Parsing
Date.parse('2024-01-01');  // timestamp
new Date('2024-01-01').getTime();

// Static Methods
Date.now();  // current timestamp

// Date Arithmetic
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

// Days between dates
const daysBetween = (date1, date2) =>
  Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

// Add days
const addDays = (date, days) =>
  new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

// Format date
const formatDate = (date) => {
  const pad = n => n.toString().padStart(2, '0');
  return \`\${date.getFullYear()}-\${pad(date.getMonth() + 1)}-\${pad(date.getDate())}\`;
};

// Relative time
const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return \`\${interval} \${unit}\${interval > 1 ? 's' : ''} ago\`;
    }
  }
  return 'just now';
};`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Math Methods</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Rounding
Math.round(4.5);    // 5
Math.ceil(4.1);     // 5
Math.floor(4.9);    // 4
Math.trunc(4.9);    // 4 (remove decimal)

// Min/Max
Math.min(1, 2, 3);  // 1
Math.max(1, 2, 3);  // 3

// Power/Root
Math.pow(2, 3);     // 8
Math.sqrt(16);      // 4
Math.cbrt(8);       // 2

// Absolute
Math.abs(-5);       // 5

// Sign
Math.sign(-5);      // -1
Math.sign(0);       // 0
Math.sign(5);       // 1

// Random
Math.random();      // 0 to 1 (exclusive)

// Random integer between min and max (inclusive)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

randomInt(1, 10);   // 1-10

// Trigonometry
Math.sin(Math.PI / 2);   // 1
Math.cos(Math.PI);       // -1
Math.tan(Math.PI / 4);   // 1
Math.asin(1);            // π/2
Math.acos(1);            // 0
Math.atan(1);            // π/4
Math.atan2(y, x);        // angle from origin

// Constants
Math.PI;            // 3.141592653589793
Math.E;             // 2.718281828459045
Math.LN2;           // ln(2)
Math.LN10;          // ln(10)
Math.LOG2E;         // log₂(e)
Math.LOG10E;        // log₁₀(e)
Math.SQRT2;         // √2
Math.SQRT1_2;       // √(1/2)

// Logarithm
Math.log(Math.E);   // 1 (natural log)
Math.log10(100);    // 2
Math.log2(8);       // 3

// Exponential
Math.exp(1);        // e

// Hyperbolic
Math.sinh(0);
Math.cosh(0);
Math.tanh(0);

// Clamp
const clamp = (num, min, max) =>
  Math.min(Math.max(num, min), max);

clamp(5, 1, 10);    // 5
clamp(15, 1, 10);   // 10
clamp(-5, 1, 10);   // 1

// Linear interpolation
const lerp = (a, b, t) => a + (b - a) * t;

lerp(0, 100, 0.5);  // 50

// Map range
const mapRange = (value, inMin, inMax, outMin, outMax) =>
  ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

mapRange(5, 0, 10, 0, 100);  // 50

// Percentage
const percentage = (value, total) => (value / total) * 100;

percentage(25, 100);  // 25

// Average
const average = (...nums) =>
  nums.reduce((a, b) => a + b) / nums.length;

average(1, 2, 3, 4, 5);  // 3`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Common Snippets */}
        {activeTab === "snippets" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Utility Functions</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Debounce
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Throttle
const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Memoize
const memoize = fn => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// Once
const once = fn => {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
};

// Sleep
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Retry
const retry = async (fn, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      await sleep(delay);
    }
  }
};

// Curry
const curry = fn => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

// Compose
const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x);

// Pipe
const pipe = (...fns) => x =>
  fns.reduce((acc, fn) => fn(acc), x);

// Pick random
const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)];

// Shuffle
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// UUID
const uuid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });

// Copy to clipboard
const copyToClipboard = text =>
  navigator.clipboard.writeText(text);

// Get query params
const getQueryParams = url =>
  Object.fromEntries(new URL(url).searchParams);

// Format bytes
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
};`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Type Checking</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Type checks
const isString = val => typeof val === 'string';
const isNumber = val => typeof val === 'number' && !isNaN(val);
const isBoolean = val => typeof val === 'boolean';
const isFunction = val => typeof val === 'function';
const isObject = val => val !== null && typeof val === 'object';
const isArray = val => Array.isArray(val);
const isNull = val => val === null;
const isUndefined = val => val === undefined;
const isNil = val => val == null;
const isDate = val => val instanceof Date;
const isRegExp = val => val instanceof RegExp;
const isError = val => val instanceof Error;
const isPromise = val => val instanceof Promise;

// Is empty
const isEmpty = val => {
  if (val == null) return true;
  if (Array.isArray(val) || typeof val === 'string') return val.length === 0;
  if (val instanceof Map || val instanceof Set) return val.size === 0;
  if (isObject(val)) return Object.keys(val).length === 0;
  return false;
};

// Is plain object
const isPlainObject = val =>
  val?.constructor === Object;

// Is primitive
const isPrimitive = val => {
  const type = typeof val;
  return val == null || (type !== 'object' && type !== 'function');
};

// Type of (better typeof)
const typeOf = val => {
  if (val === null) return 'null';
  if (Array.isArray(val)) return 'array';
  if (val instanceof Date) return 'date';
  if (val instanceof RegExp) return 'regexp';
  if (val instanceof Error) return 'error';
  return typeof val;
};

// Validation
const isEmail = email =>
  /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

const isURL = url => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const isHexColor = color =>
  /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);

const isIPv4 = ip =>
  /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);

const isCreditCard = card =>
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/.test(card.replace(/\\s/g, ''));

// Assert
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

// Try catch wrapper
const tryCatch = fn => {
  try {
    return [null, fn()];
  } catch (err) {
    return [err, null];
  }
};

const [error, result] = tryCatch(() => JSON.parse('invalid'));

// Async try catch
const tryCatchAsync = async fn => {
  try {
    return [null, await fn()];
  } catch (err) {
    return [err, null];
  }
};`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Quick Tips</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Swap variables
[a, b] = [b, a];

// Default values
const value = input || 'default';
const value = input ?? 'default';  // only null/undefined

// Optional chaining
const city = user?.address?.city;
const name = user?.getName?.();

// Nullish coalescing
const port = process.env.PORT ?? 3000;

// Short circuit evaluation
isLoggedIn && redirect('/dashboard');
hasError || showError();

// Convert to boolean
const bool = !!value;

// Convert to number
const num = +str;
const num = Number(str);
const num = parseInt(str, 10);
const num = parseFloat(str);

// Convert to string
const str = '' + num;
const str = String(num);
const str = num.toString();

// Remove duplicates
const unique = [...new Set(arr)];

// Get unique values from array of objects
const unique = [...new Map(arr.map(item => [item.id, item])).values()];

// Flatten array
const flat = arr.flat(Infinity);

// Create array of numbers
const nums = Array.from({ length: 10 }, (_, i) => i);
const nums = [...Array(10).keys()];

// Fill array
const zeros = Array(5).fill(0);

// Clone array/object
const arrClone = [...arr];
const objClone = { ...obj };

// Merge arrays
const merged = [...arr1, ...arr2];

// Merge objects
const merged = { ...obj1, ...obj2 };

// Remove property
const { unwanted, ...rest } = obj;

// Rename property
const { old: newName, ...rest } = obj;

// Conditional property
const obj = {
  name: 'John',
  ...(includeAge && { age: 30 })
};

// Dynamic property name
const key = 'dynamicKey';
const obj = { [key]: 'value' };

// Function default parameters
const greet = (name = 'Guest') => \`Hello, \${name}\`;

// Rest parameters
const sum = (...nums) => nums.reduce((a, b) => a + b);

// Destructuring with defaults
const { name = 'Guest', age = 0 } = user;

// Array destructuring
const [first, second, ...rest] = arr;

// Skip items
const [first, , third] = arr;

// Nested destructuring
const { address: { city } } = user;

// IIFE (Immediately Invoked Function Expression)
(function() { })();
(() => { })();

// Tagged template literal
const tag = (strings, ...values) =>
  strings.reduce((acc, str, i) =>
    acc + str + (values[i] || ''), '');

tag\`Hello \${'World'}\`;

// Check if variable exists
typeof myVar !== 'undefined'
'myVar' in window`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-600/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-purple-400">💡 Quick Reference Tips</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Use array methods (map, filter, reduce) over loops</li>
            <li>✅ Use template literals for string concatenation</li>
            <li>✅ Use destructuring for cleaner code</li>
            <li>✅ Use spread operator for cloning and merging</li>
            <li>✅ Use optional chaining (?.) for safe property access</li>
            <li>✅ Use nullish coalescing (??) for default values</li>
            <li>✅ Use const for immutable variables, let for mutable</li>
            <li>✅ Avoid var - use const/let instead</li>
            <li>⚠️ Remember: arrays and objects are passed by reference</li>
            <li>⚠️ Always validate user input</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
