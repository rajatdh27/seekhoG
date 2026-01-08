"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ES6Features() {
  const [activeTab, setActiveTab] = useState("arrow");

  const tabs = [
    { id: "arrow", label: "Arrow Functions", icon: "➡️" },
    { id: "destructuring", label: "Destructuring", icon: "📦" },
    { id: "spread-rest", label: "Spread & Rest", icon: "🌟" },
    { id: "template", label: "Template Literals", icon: "📝" },
    { id: "modules", label: "Modules", icon: "📚" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">✨</span>
            <div>
              <h1 className="text-5xl font-bold">ES6+ Modern Features</h1>
              <p className="text-purple-100 mt-2">Master modern JavaScript syntax</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === "arrow" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Arrow Functions</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Syntax Variations</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function (full syntax)
const add = (a, b) => {
    return a + b;
};

// Implicit return (no braces needed)
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const square = x => x * x;

// No parameters
const greet = () => 'Hello!';

// Multiple statements
const multiply = (a, b) => {
    const result = a * b;
    console.log(\`Result: \${result}\`);
    return result;
};

// Returning object (wrap in parentheses)
const makePerson = (name, age) => ({ name, age });
// Or use explicit return
const makePerson = (name, age) => {
    return { name, age };
};`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">'this' Binding</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Regular function: dynamic 'this'
const obj = {
    name: 'Object',
    regularFunc: function() {
        console.log(this.name);  // 'Object'
    }
};

// Arrow function: lexical 'this' (inherits from parent)
const obj2 = {
    name: 'Object',
    arrowFunc: () => {
        console.log(this.name);  // undefined (this = global/window)
    }
};

// Practical example
class Counter {
    constructor() {
        this.count = 0;
    }

    // ❌ Regular function - loses 'this'
    startWrong() {
        setInterval(function() {
            this.count++;  // 'this' is not Counter
            console.log(this.count);  // NaN
        }, 1000);
    }

    // ✅ Arrow function - maintains 'this'
    startRight() {
        setInterval(() => {
            this.count++;  // 'this' is Counter
            console.log(this.count);  // 1, 2, 3...
        }, 1000);
    }
}

// Event handlers
const button = document.querySelector('#btn');

// ❌ Arrow function - 'this' is not the button
button.addEventListener('click', () => {
    console.log(this);  // Window/undefined, not button
});

// ✅ Regular function - 'this' is the button
button.addEventListener('click', function() {
    console.log(this);  // button element
});`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Array Methods with Arrow Functions</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter
const even = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// find
const found = numbers.find(n => n > 3);
// 4

// some
const hasEven = numbers.some(n => n % 2 === 0);
// true

// every
const allPositive = numbers.every(n => n > 0);
// true

// Chaining
const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);
// (2 + 4) * 2 = 12`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "destructuring" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Destructuring</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Array Destructuring</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Basic
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);  // 1 2 3

// Skip elements
const [first, , third] = arr;
console.log(first, third);  // 1 3

// Rest elements
const [head, ...tail] = arr;
console.log(head);  // 1
console.log(tail);  // [2, 3]

// Default values
const [x = 0, y = 0, z = 0] = [1, 2];
console.log(x, y, z);  // 1 2 0

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);  // 2 1

// Nested arrays
const nested = [1, [2, 3], 4];
const [one, [two, three], four] = nested;

// Function return values
function getCoords() {
    return [10, 20];
}
const [x, y] = getCoords();`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Object Destructuring</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Basic
const user = { name: 'John', age: 30, city: 'NYC' };
const { name, age, city } = user;
console.log(name, age, city);  // John 30 NYC

// Renaming variables
const { name: userName, age: userAge } = user;
console.log(userName);  // John

// Default values
const { name, country = 'USA' } = user;
console.log(country);  // USA

// Rest properties
const { name, ...rest } = user;
console.log(rest);  // { age: 30, city: 'NYC' }

// Nested objects
const person = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'NYC'
    }
};

const {
    name,
    address: { street, city }
} = person;

// Function parameters
function greet({ name, age }) {
    console.log(\`\${name} is \${age} years old\`);
}
greet(user);  // John is 30 years old

// With defaults in parameters
function createUser({ name, age = 18, role = 'user' }) {
    return { name, age, role };
}

// Computed property names
const key = 'name';
const { [key]: value } = user;
console.log(value);  // John`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Practical Examples</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// API response handling
async function fetchUser() {
    const response = await fetch('/api/user');
    const { data: { name, email }, status } = await response.json();
    return { name, email, status };
}

// React useState
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });

// Array of objects
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

users.forEach(({ id, name }) => {
    console.log(\`\${id}: \${name}\`);
});

// Module imports
import { useState, useEffect } from 'react';
import * as utils from './utils';

// Combining with spread
const defaults = { theme: 'dark', lang: 'en' };
const userPrefs = { theme: 'light' };
const settings = { ...defaults, ...userPrefs };
// { theme: 'light', lang: 'en' }`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "spread-rest" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Spread & Rest Operators</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Spread Operator (...)</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// Copy array (shallow)
const copy = [...arr1];

// Add elements
const withExtra = [0, ...arr1, 4];
// [0, 1, 2, 3, 4]

// Object spreading
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combine objects
const merged = { ...obj1, ...obj2 };
// { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const updated = { ...obj1, b: 99 };
// { a: 1, b: 99 }

// Copy object (shallow)
const objCopy = { ...obj1 };

// Function arguments
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
sum(...numbers);  // 6

// Math functions
const nums = [5, 12, 8, 130, 44];
Math.max(...nums);  // 130
Math.min(...nums);  // 5

// String to array
const str = 'hello';
const chars = [...str];
// ['h', 'e', 'l', 'l', 'o']

// Set to array
const set = new Set([1, 2, 3]);
const arr = [...set];

// NodeList to array
const divs = document.querySelectorAll('div');
const divArray = [...divs];`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Rest Parameters</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Collect remaining arguments
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3);        // 6
sum(1, 2, 3, 4, 5);  // 15

// Mix with regular parameters
function greet(greeting, ...names) {
    return \`\${greeting} \${names.join(', ')}!\`;
}

greet('Hello', 'John', 'Jane', 'Bob');
// "Hello John, Jane, Bob!"

// Array destructuring with rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Object destructuring with rest
const user = {
    id: 1,
    name: 'John',
    age: 30,
    city: 'NYC'
};

const { id, ...userData } = user;
console.log(id);        // 1
console.log(userData);  // { name: 'John', age: 30, city: 'NYC' }

// Function parameter destructuring with rest
function processUser({ name, age, ...rest }) {
    console.log(name, age);  // John 30
    console.log(rest);       // { city: 'NYC' }
}

processUser(user);`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Practical Examples</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Immutable array operations
const todos = ['Buy milk', 'Walk dog'];

// Add item (immutable)
const withNew = [...todos, 'Study JS'];

// Remove item (immutable)
const withoutFirst = todos.slice(1);  // or
const withoutFirst = todos.filter((_, i) => i !== 0);

// Update item (immutable)
const updated = todos.map((todo, i) =>
    i === 0 ? 'Buy bread' : todo
);

// Immutable object updates
const state = {
    user: { name: 'John', age: 30 },
    theme: 'dark'
};

// Update nested property
const newState = {
    ...state,
    user: {
        ...state.user,
        age: 31
    }
};

// Add property
const withEmail = {
    ...state,
    email: 'john@example.com'
};

// Remove property
const { theme, ...withoutTheme } = state;

// Merge with defaults
function createConfig(options) {
    const defaults = {
        width: 100,
        height: 100,
        color: 'black'
    };

    return { ...defaults, ...options };
}

createConfig({ color: 'red' });
// { width: 100, height: 100, color: 'red' }

// Clone with modifications
const original = { a: 1, b: 2, c: 3 };
const modified = { ...original, b: 99, d: 4 };
// { a: 1, b: 99, c: 3, d: 4 }`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "template" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Template Literals</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Basic Usage</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Old way
const name = 'John';
const age = 30;
const message = 'My name is ' + name + ' and I am ' + age + ' years old';

// Template literals
const message = \`My name is \${name} and I am \${age} years old\`;

// Expressions in placeholders
const sum = \`5 + 3 = \${5 + 3}\`;  // "5 + 3 = 8"

// Function calls
const upperName = \`Hello \${name.toUpperCase()}\`;

// Multiline strings
const html = \`
    <div class="card">
        <h2>\${title}</h2>
        <p>\${description}</p>
    </div>
\`;

// Nested templates
const message = \`User \${user.name} is \${user.age >= 18 ? \`an adult\` : \`a minor\`}\`;`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Tagged Templates</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Custom string processing
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return \`\${result}\${str}\${
            values[i] ? \`<mark>\${values[i]}</mark>\` : ''
        }\`;
    }, '');
}

const name = 'John';
const age = 30;
const output = highlight\`Name: \${name}, Age: \${age}\`;
// "Name: <mark>John</mark>, Age: <mark>30</mark>"

// SQL query builder
function sql(strings, ...values) {
    return {
        text: strings.join('?'),
        values: values
    };
}

const userId = 123;
const query = sql\`SELECT * FROM users WHERE id = \${userId}\`;
// { text: 'SELECT * FROM users WHERE id = ?', values: [123] }

// Styled components (React)
const Button = styled.button\`
    background-color: \${props => props.primary ? 'blue' : 'gray'};
    padding: 10px 20px;
    font-size: 16px;
\`;`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Practical Examples</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// HTML generation
function createCard(user) {
    return \`
        <div class="user-card">
            <img src="\${user.avatar}" alt="\${user.name}">
            <h3>\${user.name}</h3>
            <p>\${user.email}</p>
            <span class="badge">\${user.role}</span>
        </div>
    \`;
}

// URL building
const baseURL = 'https://api.example.com';
const endpoint = 'users';
const id = 123;
const url = \`\${baseURL}/\${endpoint}/\${id}?active=true\`;

// Dynamic class names
const isActive = true;
const className = \`btn \${isActive ? 'btn-active' : 'btn-inactive'}\`;

// Logging
const debug = (msg) => console.log(\`[DEBUG] \${new Date().toISOString()}: \${msg}\`);

// Conditional content
const showPrice = true;
const product = \`
    <div class="product">
        <h3>\${name}</h3>
        \${showPrice ? \`<span class="price">$\${price}</span>\` : ''}
    </div>
\`;

// Array joining
const names = ['John', 'Jane', 'Bob'];
const list = \`Users: \${names.join(', ')}\`;

// Object property access
const user = { name: 'John', age: 30 };
const info = \`\${user.name} (\${user.age})\`;`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "modules" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">ES6 Modules</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Export</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Named exports
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export class Calculator {
    // ...
}

// Export list
const PI = 3.14159;
function add(a, b) {
    return a + b;
}
export { PI, add };

// Rename exports
export { PI as pi, add as sum };

// Default export (one per module)
export default function multiply(a, b) {
    return a * b;
}

// Or
function multiply(a, b) {
    return a * b;
}
export default multiply;

// Mix default and named
export default class User {
    // ...
}
export const ROLES = ['admin', 'user'];

// Export from another module
export { something } from './other';
export * from './other';  // re-export all`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Import</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Named imports
import { PI, add } from './math.js';

// Rename imports
import { PI as pi, add as sum } from './math.js';

// Import all
import * as math from './math.js';
console.log(math.PI);
console.log(math.add(2, 3));

// Default import
import multiply from './math.js';

// Mix default and named
import multiply, { PI, add } from './math.js';

// Side effect only (no imports)
import './polyfills.js';

// Dynamic import (async)
const module = await import('./math.js');
console.log(module.PI);

// Dynamic import with then
import('./math.js')
    .then(module => {
        console.log(module.PI);
    })
    .catch(error => {
        console.error('Failed to load module');
    });

// Conditional loading
if (someCondition) {
    const module = await import('./feature.js');
    module.initialize();
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Module Patterns</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// utils.js
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugify(str) {
    return str.toLowerCase().replace(/\\s+/g, '-');
}

export const VERSION = '1.0.0';

// config.js
export default {
    apiURL: 'https://api.example.com',
    timeout: 5000,
    retries: 3
};

// api.js
const BASE_URL = 'https://api.example.com';

async function get(endpoint) {
    const response = await fetch(\`\${BASE_URL}\${endpoint}\`);
    return await response.json();
}

async function post(endpoint, data) {
    const response = await fetch(\`\${BASE_URL}\${endpoint}\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json();
}

export { get, post };

// main.js
import config from './config.js';
import { get, post } from './api.js';
import { capitalize } from './utils.js';

async function main() {
    const data = await get('/users');
    const name = capitalize(data[0].name);
    console.log(name);
}

main();

// Lazy loading modules
async function loadFeature(featureName) {
    switch (featureName) {
        case 'dashboard':
            return await import('./features/dashboard.js');
        case 'settings':
            return await import('./features/settings.js');
        default:
            throw new Error(\`Unknown feature: \${featureName}\`);
    }
}`}</code>
                  </pre>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-600/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">💡 Module Best Practices</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ One module per file</li>
                    <li>✅ Use named exports for utilities/constants</li>
                    <li>✅ Use default export for main class/function</li>
                    <li>✅ Group related exports in index files</li>
                    <li>✅ Use dynamic imports for code splitting</li>
                    <li>✅ Keep modules small and focused</li>
                    <li>⚠️ Avoid circular dependencies</li>
                    <li>⚠️ Don't mix CommonJS and ES6 modules</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
