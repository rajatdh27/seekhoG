"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FunctionalProgramming() {
  const [activeTab, setActiveTab] = useState("higher-order");

  const tabs = [
    { id: "higher-order", label: "Higher-Order Functions" },
    { id: "pure-functions", label: "Pure Functions" },
    { id: "composition", label: "Composition & Currying" },
    { id: "immutability", label: "Immutability" },
    { id: "patterns", label: "FP Patterns" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🔧</span>
            <div>
              <h1 className="text-5xl font-bold">Functional Programming</h1>
              <p className="text-green-100 mt-2">Write cleaner, more maintainable code</p>
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
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Higher-Order Functions */}
        {activeTab === "higher-order" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Higher-Order Functions</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Higher-order function: takes function as argument or returns function

// Map - transforms each element
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);  // [2, 4, 6, 8, 10]

const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
];
const names = users.map(user => user.name);  // ['John', 'Jane']

// Filter - keeps elements that pass test
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]
const adults = users.filter(user => user.age >= 18);

// Reduce - accumulates values
const sum = numbers.reduce((acc, n) => acc + n, 0);  // 15

const totalAge = users.reduce((acc, user) => acc + user.age, 0);  // 55

// Find first element that matches
const found = numbers.find(n => n > 3);  // 4
const john = users.find(user => user.name === 'John');

// Check if any/all elements match
const hasEven = numbers.some(n => n % 2 === 0);  // true
const allPositive = numbers.every(n => n > 0);   // true

// ForEach - side effects only (returns undefined)
numbers.forEach(n => console.log(n));

// Creating your own higher-order functions
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);  // logs 0, 1, 2

// Function that returns a function
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15

// Chaining methods
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);  // 12`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Array Methods Deep Dive</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Reduce - the most powerful method
// Sum
const sum = [1, 2, 3].reduce((acc, n) => acc + n, 0);

// Max value
const max = [1, 5, 3, 9, 2].reduce((max, n) => n > max ? n : max);

// Group by property
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 30 }
];

const grouped = people.reduce((acc, person) => {
  const age = person.age;
  if (!acc[age]) acc[age] = [];
  acc[age].push(person);
  return acc;
}, {});
// { 25: [{name: 'Jane', age: 25}], 30: [{name: 'John', age: 30}, {name: 'Bob', age: 30}] }

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// { apple: 3, banana: 2, orange: 1 }

// Flatten array
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// Or use built-in: nested.flat()

// FlatMap - map then flatten
const sentences = ['Hello world', 'How are you'];
const words = sentences.flatMap(s => s.split(' '));
// ['Hello', 'world', 'How', 'are', 'you']

// Sort (mutates array!)
const nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b);  // ascending: [1, 1, 3, 4, 5]
nums.sort((a, b) => b - a);  // descending

// Non-mutating sort
const sorted = [...nums].sort((a, b) => a - b);

// Complex sort
people.sort((a, b) => a.age - b.age);  // by age
people.sort((a, b) => a.name.localeCompare(b.name));  // by name`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Pure Functions */}
        {activeTab === "pure-functions" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Pure vs Impure Functions</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Pure function: same input → same output, no side effects
function add(a, b) {
  return a + b;
}

add(2, 3);  // always returns 5
add(2, 3);  // always returns 5

// Pure - no external dependencies
function multiply(x, y) {
  return x * y;
}

// Impure - depends on external state
let tax = 0.1;
function calculateTotal(price) {
  return price + (price * tax);  // depends on external 'tax'
}

// Pure version
function calculateTotal(price, tax) {
  return price + (price * tax);
}

// Impure - modifies external state
let count = 0;
function increment() {
  count++;  // side effect
  return count;
}

// Pure version
function increment(count) {
  return count + 1;
}

// Impure - mutates input
function addToArray(arr, item) {
  arr.push(item);  // mutates arr
  return arr;
}

// Pure version
function addToArray(arr, item) {
  return [...arr, item];  // returns new array
}

// Impure - I/O operations (unavoidable in real apps)
function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user));  // side effect
}

function fetchUser() {
  return fetch('/api/user');  // side effect
}

// Impure - random/date (non-deterministic)
function getRandomNumber() {
  return Math.random();  // different output each time
}

function getCurrentTime() {
  return new Date();  // different output each time
}

// Benefits of pure functions:
// ✅ Predictable and testable
// ✅ Cacheable (memoization)
// ✅ Parallelizable
// ✅ Easier to debug
// ✅ No hidden dependencies`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Side Effects & Managing Them</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Common side effects:
// - Modifying external variables
// - Console.log
// - HTTP requests
// - DOM manipulation
// - File I/O
// - Database operations

// Strategy 1: Isolate side effects at boundaries
// Pure core
function calculateDiscount(price, discountPercent) {
  return price * (1 - discountPercent / 100);
}

// Impure shell
function applyDiscountAndSave(userId, price, discount) {
  const newPrice = calculateDiscount(price, discount);  // pure
  saveToDatabase(userId, newPrice);  // side effect isolated
}

// Strategy 2: Return description of side effect
function updateUser(user, changes) {
  return {
    type: 'UPDATE_USER',
    payload: { ...user, ...changes }
  };
}

// Executor handles side effect
function executeAction(action) {
  if (action.type === 'UPDATE_USER') {
    saveToDatabase(action.payload);
  }
}

// Strategy 3: Dependency injection
// Impure
function logMessage(message) {
  console.log(message);
}

// Pure (logger injected)
function logMessage(logger, message) {
  logger(message);
}

// Usage
logMessage(console.log, 'Hello');  // real
logMessage(msg => testLogs.push(msg), 'Hello');  // testing

// Memoization - cache pure function results
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalculation = memoize((n) => {
  console.log('Calculating...');
  return n * n;
});

expensiveCalculation(5);  // Calculating... 25
expensiveCalculation(5);  // 25 (cached, no log)`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Composition & Currying */}
        {activeTab === "composition" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Function Composition</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Composition: combine simple functions into complex ones

// Simple functions
const add5 = x => x + 5;
const multiply3 = x => x * 3;
const subtract2 = x => x - 2;

// Manual composition
const result = subtract2(multiply3(add5(10)));  // (10 + 5) * 3 - 2 = 43

// Compose function (right to left)
const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x);

const calculate = compose(subtract2, multiply3, add5);
calculate(10);  // 43

// Pipe function (left to right) - more readable
const pipe = (...fns) => x =>
  fns.reduce((acc, fn) => fn(acc), x);

const calculate2 = pipe(add5, multiply3, subtract2);
calculate2(10);  // 43

// Real-world example
const users = [
  { name: 'john doe', age: 30, active: true },
  { name: 'jane smith', age: 25, active: false },
  { name: 'bob jones', age: 35, active: true }
];

// Individual functions
const filterActive = users => users.filter(u => u.active);
const sortByAge = users => [...users].sort((a, b) => a.age - b.age);
const getNames = users => users.map(u => u.name);
const capitalize = str => str.split(' ')
  .map(w => w[0].toUpperCase() + w.slice(1))
  .join(' ');
const capitalizeNames = users => users.map(u => ({
  ...u,
  name: capitalize(u.name)
}));

// Compose them
const processUsers = pipe(
  filterActive,
  sortByAge,
  capitalizeNames,
  getNames
);

processUsers(users);  // ['John Doe', 'Bob Jones']

// Point-free style (no explicit arguments)
const double = x => x * 2;
const addOne = x => x + 1;

// Not point-free
const doubleThenAdd = x => addOne(double(x));

// Point-free
const doubleThenAdd = pipe(double, addOne);

// Practical composition
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const removeSpaces = str => str.replace(/\\s+/g, '-');

const slugify = pipe(trim, toLowerCase, removeSpaces);
slugify('  Hello World  ');  // 'hello-world'`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Currying & Partial Application</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Currying: transform f(a, b, c) → f(a)(b)(c)

// Regular function
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3);  // 6

// Curried version
function addCurried(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
addCurried(1)(2)(3);  // 6

// Arrow function currying
const addCurried = a => b => c => a + b + c;
addCurried(1)(2)(3);  // 6

// Partial application
const add5 = addCurried(5);
const add5and3 = add5(3);
add5and3(2);  // 10

// Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

const add3 = curry((a, b, c) => a + b + c);
add3(1)(2)(3);     // 6
add3(1, 2)(3);     // 6
add3(1)(2, 3);     // 6
add3(1, 2, 3);     // 6

// Practical examples
const multiply = a => b => a * b;
const double = multiply(2);
const triple = multiply(3);

[1, 2, 3].map(double);  // [2, 4, 6]

// Logger with currying
const log = level => message => timestamp =>
  \`[\${timestamp}] [\${level}] \${message}\`;

const logError = log('ERROR');
const logInfo = log('INFO');

logError('Something went wrong')('2024-01-01');
logInfo('User logged in')('2024-01-01');

// Filter with currying
const filterBy = prop => value => arr =>
  arr.filter(item => item[prop] === value);

const filterByActive = filterBy('active')(true);
const filterByAge = filterBy('age');

filterByActive(users);
filterByAge(30)(users);

// Partial application with bind
function greet(greeting, name) {
  return \`\${greeting}, \${name}!\`;
}

const sayHello = greet.bind(null, 'Hello');
sayHello('John');  // 'Hello, John!'

// Partial application helper
function partial(fn, ...args) {
  return function(...remainingArgs) {
    return fn(...args, ...remainingArgs);
  };
}

const greetHello = partial(greet, 'Hello');
greetHello('Jane');  // 'Hello, Jane!'`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Immutability */}
        {activeTab === "immutability" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Immutable Data Patterns</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Immutability: never modify data, always create new copies

// Arrays - Mutable (❌ avoid)
const arr = [1, 2, 3];
arr.push(4);          // mutates
arr.pop();            // mutates
arr.splice(1, 1);     // mutates
arr.sort();           // mutates
arr.reverse();        // mutates

// Arrays - Immutable (✅ use these)
const arr = [1, 2, 3];

// Add to end
const newArr = [...arr, 4];
const newArr = arr.concat(4);

// Add to start
const newArr = [0, ...arr];

// Remove from end
const newArr = arr.slice(0, -1);

// Remove from start
const newArr = arr.slice(1);

// Remove at index
const index = 1;
const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
const newArr = arr.filter((_, i) => i !== index);

// Update at index
const newArr = arr.map((item, i) => i === index ? newValue : item);
const newArr = [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];

// Sort (non-mutating)
const sorted = [...arr].sort();

// Reverse (non-mutating)
const reversed = [...arr].reverse();

// Objects - Mutable (❌ avoid)
const obj = { name: 'John', age: 30 };
obj.age = 31;         // mutates
delete obj.name;      // mutates

// Objects - Immutable (✅ use these)
const obj = { name: 'John', age: 30 };

// Add/update property
const newObj = { ...obj, age: 31 };
const newObj = { ...obj, email: 'john@example.com' };

// Remove property
const { age, ...newObj } = obj;

// Update nested object
const user = {
  name: 'John',
  address: {
    city: 'NYC',
    zip: '10001'
  }
};

// ❌ Mutates
user.address.city = 'LA';

// ✅ Immutable
const updatedUser = {
  ...user,
  address: {
    ...user.address,
    city: 'LA'
  }
};

// Deep update helper
function updateIn(obj, path, value) {
  const [head, ...rest] = path;
  return {
    ...obj,
    [head]: rest.length === 0
      ? value
      : updateIn(obj[head], rest, value)
  };
}

const user = {
  profile: {
    settings: {
      theme: 'dark'
    }
  }
};

updateIn(user, ['profile', 'settings', 'theme'], 'light');`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Immutability Techniques</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Object.freeze (shallow)
const obj = Object.freeze({ name: 'John', age: 30 });
obj.age = 31;  // fails silently (strict mode: error)

// Deep freeze
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).forEach(value => {
    if (typeof value === 'object' && value !== null) {
      deepFreeze(value);
    }
  });
  return obj;
}

const config = deepFreeze({
  api: {
    url: 'https://api.example.com',
    timeout: 5000
  }
});

// Array of objects - immutable updates
const users = [
  { id: 1, name: 'John', active: true },
  { id: 2, name: 'Jane', active: false }
];

// Update specific user
const updatedUsers = users.map(user =>
  user.id === 1
    ? { ...user, active: false }
    : user
);

// Add user
const newUsers = [...users, { id: 3, name: 'Bob', active: true }];

// Remove user
const filteredUsers = users.filter(user => user.id !== 2);

// Bulk update
const allActive = users.map(user => ({ ...user, active: true }));

// Immutable state updates (React-style)
const state = {
  user: { name: 'John', email: 'john@example.com' },
  todos: [
    { id: 1, text: 'Learn FP', done: false },
    { id: 2, text: 'Build app', done: false }
  ],
  count: 0
};

// Update nested state
const newState = {
  ...state,
  user: {
    ...state.user,
    email: 'newemail@example.com'
  }
};

// Update array item in state
const newState = {
  ...state,
  todos: state.todos.map(todo =>
    todo.id === 1
      ? { ...todo, done: true }
      : todo
  )
};

// Add to array in state
const newState = {
  ...state,
  todos: [...state.todos, { id: 3, text: 'New todo', done: false }]
};

// Increment counter
const newState = {
  ...state,
  count: state.count + 1
};

// Why immutability?
// ✅ Predictable state changes
// ✅ Easy to track changes (React reconciliation)
// ✅ Undo/redo functionality
// ✅ Time-travel debugging
// ✅ Avoid bugs from shared references
// ✅ Pure functions become easier`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* FP Patterns */}
        {activeTab === "patterns" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Common FP Patterns</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Pattern 1: Map-Filter-Reduce Pipeline
const orders = [
  { id: 1, amount: 100, status: 'completed' },
  { id: 2, amount: 200, status: 'completed' },
  { id: 3, amount: 150, status: 'pending' }
];

const totalCompleted = orders
  .filter(order => order.status === 'completed')
  .map(order => order.amount)
  .reduce((sum, amount) => sum + amount, 0);  // 300

// Pattern 2: Maybe/Optional Pattern
class Maybe {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.value));
  }

  getOrElse(defaultValue) {
    return this.isNothing() ? defaultValue : this.value;
  }
}

const user = { name: 'John', address: { city: 'NYC' } };

Maybe.of(user)
  .map(u => u.address)
  .map(a => a.city)
  .getOrElse('Unknown');  // 'NYC'

Maybe.of(null)
  .map(u => u.address)
  .map(a => a.city)
  .getOrElse('Unknown');  // 'Unknown'

// Pattern 3: Lens Pattern (focus on nested data)
const lens = (getter, setter) => ({
  get: obj => getter(obj),
  set: (val, obj) => setter(val, obj)
});

const nameLens = lens(
  user => user.name,
  (name, user) => ({ ...user, name })
);

nameLens.get({ name: 'John' });  // 'John'
nameLens.set('Jane', { name: 'John' });  // { name: 'Jane' }

// Pattern 4: Transducer (compose transformations)
const map = fn => reducer => (acc, val) => reducer(acc, fn(val));
const filter = pred => reducer => (acc, val) =>
  pred(val) ? reducer(acc, val) : acc;

const transducer = pipe(
  map(x => x * 2),
  filter(x => x > 5)
);

const append = (acc, val) => [...acc, val];
[1, 2, 3, 4, 5].reduce(transducer(append), []);  // [6, 8, 10]

// Pattern 5: Functor (mappable container)
class Box {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return new Box(fn(this.value));
  }

  fold(fn) {
    return fn(this.value);
  }
}

Box(2)
  .map(x => x + 1)
  .map(x => x * 2)
  .fold(x => x);  // 6`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Practical FP Examples</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Example 1: Data transformation pipeline
const rawData = [
  'john,30,developer',
  'jane,25,designer',
  'bob,35,manager'
];

const parseUser = str => {
  const [name, age, role] = str.split(',');
  return { name, age: parseInt(age), role };
};

const filterAdults = users => users.filter(u => u.age >= 18);
const sortByAge = users => [...users].sort((a, b) => a.age - b.age);
const formatName = user => ({
  ...user,
  name: user.name[0].toUpperCase() + user.name.slice(1)
});

const processData = pipe(
  data => data.map(parseUser),
  filterAdults,
  sortByAge,
  users => users.map(formatName)
);

processData(rawData);

// Example 2: Validation pipeline
const isRequired = value => value !== null && value !== '';
const isEmail = value => /^[^@]+@[^@]+\\.[^@]+$/.test(value);
const minLength = min => value => value.length >= min;

const validate = (value, validators) => {
  return validators.every(validator => validator(value));
};

const email = 'john@example.com';
validate(email, [isRequired, isEmail]);  // true

// Example 3: Error handling with Either
class Either {
  constructor(value) {
    this.value = value;
  }

  static left(value) {
    const either = new Either(value);
    either.isLeft = true;
    return either;
  }

  static right(value) {
    const either = new Either(value);
    either.isLeft = false;
    return either;
  }

  map(fn) {
    return this.isLeft ? this : Either.right(fn(this.value));
  }

  fold(leftFn, rightFn) {
    return this.isLeft ? leftFn(this.value) : rightFn(this.value);
  }
}

const parseJSON = str => {
  try {
    return Either.right(JSON.parse(str));
  } catch (e) {
    return Either.left(e.message);
  }
};

parseJSON('{"name":"John"}')
  .map(obj => obj.name)
  .fold(
    error => \`Error: \${error}\`,
    name => \`Hello, \${name}\`
  );  // 'Hello, John'

// Example 4: Debounce with closures
const debounce = (fn, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const search = debounce(query => {
  console.log(\`Searching for: \${query}\`);
}, 300);

// Example 5: Memoization for expensive operations
const fibonacci = memoize(n => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(40);  // Fast with memoization!`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-600/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-green-400">💡 Best Practices</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Favor pure functions over impure ones</li>
            <li>✅ Use immutable data structures</li>
            <li>✅ Compose small, focused functions into larger ones</li>
            <li>✅ Use array methods (map, filter, reduce) over loops</li>
            <li>✅ Avoid side effects when possible, isolate them when not</li>
            <li>✅ Use currying for reusable, configurable functions</li>
            <li>✅ Keep functions small and single-purpose</li>
            <li>✅ Use point-free style for cleaner code</li>
            <li>⚠️ Don't over-engineer with FP patterns</li>
            <li>⚠️ Balance functional purity with practicality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
