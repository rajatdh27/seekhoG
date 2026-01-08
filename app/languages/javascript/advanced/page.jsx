"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AdvancedConcepts() {
  const [activeTab, setActiveTab] = useState("generators");

  const tabs = [
    { id: "generators", label: "Generators & Iterators" },
    { id: "proxies", label: "Proxies & Reflect" },
    { id: "symbols", label: "Symbols & WeakMap" },
    { id: "memory", label: "Memory & Performance" },
    { id: "patterns", label: "Design Patterns" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-600 to-orange-600 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🚀</span>
            <div>
              <h1 className="text-5xl font-bold">Advanced JavaScript</h1>
              <p className="text-red-100 mt-2">Master advanced concepts and patterns</p>
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
                  ? "bg-gradient-to-r from-red-600 to-orange-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Generators & Iterators */}
        {activeTab === "generators" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Iterators</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Iterator protocol: object with next() method
const iterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    }
    return { value: undefined, done: true };
  }
};

let result = iterator.next();
while (!result.done) {
  console.log(result.value);  // 0, 1, 2, 3, 4, 5
  result = iterator.next();
}

// Iterable protocol: object with [Symbol.iterator]
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

// Now can use for...of
for (let num of range) {
  console.log(num);  // 1, 2, 3, 4, 5
}

// Spread operator works too
console.log([...range]);  // [1, 2, 3, 4, 5]

// Built-in iterables
const str = 'Hello';
for (let char of str) {
  console.log(char);  // H, e, l, l, o
}

const arr = [1, 2, 3];
const arrIterator = arr[Symbol.iterator]();
arrIterator.next();  // { value: 1, done: false }

const map = new Map([['a', 1], ['b', 2]]);
for (let [key, value] of map) {
  console.log(key, value);
}

// Custom iterable class
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  }
}

const range = new Range(1, 5);
console.log([...range]);  // [1, 2, 3, 4, 5]

// Infinite iterator
const infiniteSequence = {
  *[Symbol.iterator]() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
};

// Take first 5
const first5 = [];
for (let num of infiniteSequence) {
  first5.push(num);
  if (first5.length === 5) break;
}
console.log(first5);  // [0, 1, 2, 3, 4]`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Generators</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Generator function: function*
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
gen.next();  // { value: 1, done: false }
gen.next();  // { value: 2, done: false }
gen.next();  // { value: 3, done: false }
gen.next();  // { value: undefined, done: true }

// Use in for...of
for (let num of numberGenerator()) {
  console.log(num);  // 1, 2, 3
}

// Generator with parameters
function* idGenerator(start = 0) {
  let id = start;
  while (true) {
    yield id++;
  }
}

const gen = idGenerator(100);
gen.next().value;  // 100
gen.next().value;  // 101

// yield* delegates to another generator
function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield* gen1();
  yield 3;
  yield 4;
}

console.log([...gen2()]);  // [1, 2, 3, 4]

// Two-way communication with generators
function* dataConsumer() {
  console.log('Started');
  console.log(\`1. \${yield}\`);
  console.log(\`2. \${yield}\`);
  return 'result';
}

const gen = dataConsumer();
gen.next();           // Started
gen.next('a');        // 1. a
gen.next('b');        // 2. b, returns 'result'

// Async iteration with generators
function* fetchUsers() {
  const users = yield fetch('/api/users');
  const posts = yield fetch('/api/posts');
  return { users, posts };
}

// Generator for traversing DOM
function* walkDOM(node) {
  yield node;
  for (let child of node.children) {
    yield* walkDOM(child);
  }
}

for (let node of walkDOM(document.body)) {
  console.log(node.tagName);
}

// Lazy evaluation with generators
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Only calculates when needed
const fib = fibonacci();
fib.next().value;  // 0
fib.next().value;  // 1
fib.next().value;  // 1
fib.next().value;  // 2

// Take first N
function* take(n, iterable) {
  let count = 0;
  for (let item of iterable) {
    if (count++ >= n) return;
    yield item;
  }
}

console.log([...take(5, fibonacci())]);  // [0, 1, 1, 2, 3]

// Generator composition
function* map(iterable, fn) {
  for (let item of iterable) {
    yield fn(item);
  }
}

function* filter(iterable, pred) {
  for (let item of iterable) {
    if (pred(item)) yield item;
  }
}

const nums = [1, 2, 3, 4, 5];
const doubled = map(nums, x => x * 2);
const evens = filter(doubled, x => x % 4 === 0);
console.log([...evens]);  // [4, 8]`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Proxies & Reflect */}
        {activeTab === "proxies" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Proxy</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Proxy: intercept operations on objects
const target = { name: 'John', age: 30 };

const handler = {
  get(target, prop) {
    console.log(\`Getting \${prop}\`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(\`Setting \${prop} to \${value}\`);
    target[prop] = value;
    return true;
  }
};

const proxy = new Proxy(target, handler);
proxy.name;  // Getting name -> 'John'
proxy.age = 31;  // Setting age to 31

// Validation with proxy
const user = new Proxy({}, {
  set(target, prop, value) {
    if (prop === 'age') {
      if (typeof value !== 'number') {
        throw new TypeError('Age must be a number');
      }
      if (value < 0 || value > 150) {
        throw new RangeError('Age must be between 0 and 150');
      }
    }
    target[prop] = value;
    return true;
  }
});

user.age = 30;  // ✅
user.age = -1;  // ❌ RangeError
user.age = 'thirty';  // ❌ TypeError

// Default values
const withDefaults = new Proxy({}, {
  get(target, prop) {
    return prop in target ? target[prop] : 'default';
  }
});

withDefaults.name = 'John';
withDefaults.name;  // 'John'
withDefaults.age;   // 'default'

// Negative array indices
const arr = [1, 2, 3, 4, 5];
const proxiedArr = new Proxy(arr, {
  get(target, prop) {
    const index = Number(prop);
    if (index < 0) {
      return target[target.length + index];
    }
    return target[prop];
  }
});

proxiedArr[-1];  // 5
proxiedArr[-2];  // 4

// Read-only object
function readOnly(target) {
  return new Proxy(target, {
    set() {
      throw new Error('Object is read-only');
    },
    deleteProperty() {
      throw new Error('Object is read-only');
    }
  });
}

const config = readOnly({ api: 'https://api.example.com' });
config.api = 'new';  // ❌ Error

// Observable pattern
function observable(target, callback) {
  return new Proxy(target, {
    set(target, prop, value) {
      const oldValue = target[prop];
      target[prop] = value;
      callback(prop, oldValue, value);
      return true;
    }
  });
}

const user = observable({}, (prop, oldValue, newValue) => {
  console.log(\`\${prop}: \${oldValue} → \${newValue}\`);
});

user.name = 'John';  // name: undefined → John

// Private properties (convention: _)
const person = new Proxy({
  _ssn: '123-45-6789',
  name: 'John'
}, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error(\`\${prop} is private\`);
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop.startsWith('_')) {
      throw new Error(\`\${prop} is private\`);
    }
    target[prop] = value;
    return true;
  }
});

person.name;  // 'John'
person._ssn;  // ❌ Error`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Reflect API</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Reflect: built-in object for interceptable operations
const obj = { name: 'John', age: 30 };

// Reflect.get(target, prop)
Reflect.get(obj, 'name');  // 'John'
obj.name;  // same thing

// Reflect.set(target, prop, value)
Reflect.set(obj, 'age', 31);  // returns true
obj.age = 31;  // same thing

// Reflect.has(target, prop)
Reflect.has(obj, 'name');  // true
'name' in obj;  // same thing

// Reflect.deleteProperty(target, prop)
Reflect.deleteProperty(obj, 'age');  // returns true
delete obj.age;  // same thing

// Reflect.ownKeys(target)
Reflect.ownKeys(obj);  // ['name']
Object.keys(obj);  // similar

// Why use Reflect?
// 1. Better return values (true/false instead of errors)
Object.defineProperty(obj, 'prop', { value: 42 });  // returns obj or throws
Reflect.defineProperty(obj, 'prop', { value: 42 });  // returns true/false

// 2. Function application
Reflect.apply(Math.max, null, [1, 2, 3]);  // 3
Math.max.apply(null, [1, 2, 3]);  // same but less clear

// 3. Constructor invocation
const date = Reflect.construct(Date, [2024, 0, 1]);
const date = new Date(2024, 0, 1);  // same

// Using Reflect in Proxy handlers
const target = { name: 'John' };
const proxy = new Proxy(target, {
  get(target, prop, receiver) {
    console.log(\`Getting \${prop}\`);
    return Reflect.get(target, prop, receiver);  // proper this binding
  },
  set(target, prop, value, receiver) {
    console.log(\`Setting \${prop} to \${value}\`);
    return Reflect.set(target, prop, value, receiver);
  }
});

// Reflect.getPrototypeOf
Reflect.getPrototypeOf(obj);  // Object.prototype
Object.getPrototypeOf(obj);  // same

// Reflect.setPrototypeOf
const proto = { greet() { console.log('Hello'); } };
Reflect.setPrototypeOf(obj, proto);

// Reflect.isExtensible / preventExtensions
Reflect.isExtensible(obj);  // true
Reflect.preventExtensions(obj);
Reflect.isExtensible(obj);  // false

// Reflect.getOwnPropertyDescriptor
Reflect.getOwnPropertyDescriptor(obj, 'name');
// { value: 'John', writable: true, enumerable: true, configurable: true }

// Metaprogramming with Reflect
function createValidator(schema) {
  return function(target) {
    return new Proxy(target, {
      set(target, prop, value) {
        if (schema[prop]) {
          const isValid = schema[prop](value);
          if (!isValid) {
            throw new Error(\`Invalid value for \${prop}\`);
          }
        }
        return Reflect.set(target, prop, value);
      }
    });
  };
}

const userSchema = {
  age: value => typeof value === 'number' && value > 0,
  email: value => /^[^@]+@[^@]+$/.test(value)
};

const User = createValidator(userSchema);
const user = User({});
user.age = 30;  // ✅
user.age = -1;  // ❌ Error`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Symbols & WeakMap */}
        {activeTab === "symbols" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Symbols</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Symbol: unique, immutable primitive value
const sym1 = Symbol();
const sym2 = Symbol();
sym1 === sym2;  // false (always unique)

// Symbol with description
const sym = Symbol('mySymbol');
sym.toString();  // 'Symbol(mySymbol)'
sym.description;  // 'mySymbol'

// Use as object property key
const id = Symbol('id');
const user = {
  name: 'John',
  [id]: 123
};

user[id];  // 123
user.id;   // undefined (different from string 'id')

// Symbols are hidden from enumeration
Object.keys(user);          // ['name']
Object.values(user);        // ['John']
Object.entries(user);       // [['name', 'John']]
for (let key in user) {}    // only 'name'

// But can be accessed
Object.getOwnPropertySymbols(user);  // [Symbol(id)]
Reflect.ownKeys(user);  // ['name', Symbol(id)]

// Global symbol registry
const globalSym1 = Symbol.for('app.id');
const globalSym2 = Symbol.for('app.id');
globalSym1 === globalSym2;  // true (same symbol)

Symbol.keyFor(globalSym1);  // 'app.id'

// Built-in symbols (well-known symbols)
// Symbol.iterator
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

// Symbol.toStringTag
class MyClass {
  get [Symbol.toStringTag]() {
    return 'MyClass';
  }
}
Object.prototype.toString.call(new MyClass());  // '[object MyClass]'

// Symbol.toPrimitive
const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return 42;
    if (hint === 'string') return 'forty-two';
    return true;
  }
};

+obj;  // 42
\`\${obj}\`;  // 'forty-two'
obj + '';  // 'true'

// Symbol.hasInstance (customize instanceof)
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

[] instanceof MyArray;  // true

// Private properties with symbols
const _private = Symbol('private');

class Counter {
  constructor() {
    this[_private] = 0;
  }

  increment() {
    this[_private]++;
  }

  get count() {
    return this[_private];
  }
}

const counter = new Counter();
counter.count;  // 0
counter.increment();
counter.count;  // 1
counter[_private];  // still accessible if you have the symbol

// Truly private with closures
function createCounter() {
  const _count = Symbol('count');

  return {
    [_count]: 0,
    increment() {
      this[_count]++;
    },
    get count() {
      return this[_count];
    }
  };
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">WeakMap & WeakSet</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// WeakMap: keys must be objects, allows garbage collection
const weakMap = new WeakMap();

let obj = { name: 'John' };
weakMap.set(obj, 'some value');
weakMap.get(obj);  // 'some value'
weakMap.has(obj);  // true
weakMap.delete(obj);

// When obj is garbage collected, the entry is automatically removed
obj = null;  // entry in weakMap will be removed by GC

// Cannot iterate over WeakMap
// weakMap.forEach()  // ❌ not available
// weakMap.keys()     // ❌ not available
// weakMap.size       // ❌ not available

// Use case: Store private data
const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    privateData.set(this, { name, age });
  }

  getName() {
    return privateData.get(this).name;
  }

  getAge() {
    return privateData.get(this).age;
  }
}

const person = new Person('John', 30);
person.getName();  // 'John'
person.age;  // undefined (private!)

// Use case: Cache/memoization
const cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    const result = expensiveOperation(obj);
    cache.set(obj, result);
  }
  return cache.get(obj);
}

// Use case: DOM metadata
const metadata = new WeakMap();

function setElementData(element, data) {
  metadata.set(element, data);
}

function getElementData(element) {
  return metadata.get(element);
}

const button = document.querySelector('button');
setElementData(button, { clicks: 0 });

// WeakSet: only holds objects, allows GC
const weakSet = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);
weakSet.has(obj1);  // true
weakSet.delete(obj1);

// Use case: Mark objects
const processed = new WeakSet();

function markAsProcessed(obj) {
  processed.add(obj);
}

function isProcessed(obj) {
  return processed.has(obj);
}

const item = { name: 'Item 1' };
markAsProcessed(item);
isProcessed(item);  // true

// Use case: Prevent circular references
const seen = new WeakSet();

function traverse(obj) {
  if (seen.has(obj)) {
    return;  // already visited
  }
  seen.add(obj);

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      traverse(obj[key]);
    }
  }
}

// Map vs WeakMap
const map = new Map();
map.set({}, 'value');  // object won't be GC'd
map.size;  // 1

const weakMap = new WeakMap();
weakMap.set({}, 'value');  // object can be GC'd
// weakMap.size;  // ❌ not available

// When to use WeakMap/WeakSet:
// ✅ Store metadata about objects
// ✅ Private data in classes
// ✅ Cache/memoization
// ✅ Mark objects without memory leaks
// ❌ When you need to iterate
// ❌ When you need size/length
// ❌ When keys are primitives`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Memory & Performance */}
        {activeTab === "memory" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Memory Management</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// JavaScript has automatic garbage collection

// Memory lifecycle:
// 1. Allocate memory
// 2. Use memory
// 3. Release memory (garbage collection)

// Common memory leaks:

// 1. Global variables (never GC'd)
function leak() {
  leakyVar = 'I will never be collected';  // accidental global
}

// Fix: use 'use strict' or let/const
function noLeak() {
  'use strict';
  let notLeaky = 'Will be collected';
}

// 2. Forgotten timers
const data = loadHugeData();
setInterval(() => {
  doSomethingWith(data);  // data can't be GC'd
}, 1000);

// Fix: clear when done
const intervalId = setInterval(() => {
  doSomethingWith(data);
}, 1000);
clearInterval(intervalId);

// 3. Closures holding references
function createClosure() {
  const hugeArray = new Array(1000000);
  return function() {
    console.log('Hi');
    // hugeArray is still in scope, can't be GC'd
  };
}

// Fix: don't capture unnecessary variables
function createClosure() {
  const hugeArray = new Array(1000000);
  const needed = hugeArray[0];
  return function() {
    console.log(needed);  // only captures what's needed
  };
}

// 4. Event listeners not removed
const element = document.getElementById('button');
function handler() {
  // do something
}
element.addEventListener('click', handler);

// When element is removed from DOM, listener keeps it in memory
element.parentNode.removeChild(element);

// Fix: remove listener first
element.removeEventListener('click', handler);
element.parentNode.removeChild(element);

// 5. Circular references (mostly handled by modern GC)
function circularRef() {
  const obj1 = {};
  const obj2 = {};
  obj1.ref = obj2;
  obj2.ref = obj1;
  // Modern GC can handle this
}

// 6. Detached DOM nodes
let detached;
function createElements() {
  const ul = document.createElement('ul');
  for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
  }
  detached = ul;  // keeps entire tree in memory!
}

// Fix: remove reference
detached = null;

// Memory-efficient patterns:

// Object pooling
class ObjectPool {
  constructor(factory, reset) {
    this.factory = factory;
    this.reset = reset;
    this.pool = [];
  }

  acquire() {
    return this.pool.pop() || this.factory();
  }

  release(obj) {
    this.reset(obj);
    this.pool.push(obj);
  }
}

const pool = new ObjectPool(
  () => ({ x: 0, y: 0 }),
  obj => { obj.x = 0; obj.y = 0; }
);

const point = pool.acquire();
point.x = 10;
pool.release(point);  // reuse instead of creating new

// Lazy loading
class LazyLoader {
  constructor(factory) {
    this.factory = factory;
    this._value = null;
  }

  get value() {
    if (!this._value) {
      this._value = this.factory();
    }
    return this._value;
  }
}

const expensive = new LazyLoader(() => {
  // Only created when accessed
  return loadHugeResource();
});

// Use WeakMap for caching
const cache = new WeakMap();

function getCachedData(obj) {
  if (!cache.has(obj)) {
    cache.set(obj, computeExpensiveData(obj));
  }
  return cache.get(obj);
}
// When obj is GC'd, cache entry is too!`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Performance Optimization</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const debouncedSearch = debounce(query => {
  searchAPI(query);
}, 300);

// Throttling
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const throttledScroll = throttle(() => {
  console.log('Scroll event');
}, 100);

// Memoization
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const factorial = memoize(n => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

// RequestAnimationFrame for smooth animations
function animate() {
  // Update animation
  updatePosition();
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// Avoid blocking main thread
// ❌ Bad: blocks for long time
function processLargeArray(arr) {
  arr.forEach(item => {
    expensiveOperation(item);
  });
}

// ✅ Good: chunk processing
function processLargeArray(arr, chunkSize = 100) {
  let index = 0;

  function processChunk() {
    const chunk = arr.slice(index, index + chunkSize);
    chunk.forEach(item => expensiveOperation(item));

    index += chunkSize;
    if (index < arr.length) {
      setTimeout(processChunk, 0);  // yield to browser
    }
  }

  processChunk();
}

// Web Workers for heavy computation
// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: largeArray });
worker.onmessage = (e) => {
  console.log('Result:', e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = expensiveComputation(e.data);
  self.postMessage(result);
};

// Virtual scrolling for large lists
class VirtualScroller {
  constructor(items, itemHeight, containerHeight) {
    this.items = items;
    this.itemHeight = itemHeight;
    this.containerHeight = containerHeight;
  }

  getVisibleRange(scrollTop) {
    const start = Math.floor(scrollTop / this.itemHeight);
    const count = Math.ceil(this.containerHeight / this.itemHeight);
    return {
      start,
      end: Math.min(start + count, this.items.length)
    };
  }
}

// Avoid memory allocation in loops
// ❌ Bad: creates new object each iteration
for (let i = 0; i < 1000; i++) {
  const point = { x: i, y: i * 2 };
  process(point);
}

// ✅ Good: reuse object
const point = { x: 0, y: 0 };
for (let i = 0; i < 1000; i++) {
  point.x = i;
  point.y = i * 2;
  process(point);
}

// Use appropriate data structures
// ❌ Bad: O(n) lookup
const items = [];
items.includes(value);

// ✅ Good: O(1) lookup
const items = new Set();
items.has(value);

// Measure performance
console.time('operation');
expensiveOperation();
console.timeEnd('operation');

// Performance API
const start = performance.now();
expensiveOperation();
const end = performance.now();
console.log(\`Took \${end - start}ms\`);`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Design Patterns */}
        {activeTab === "patterns" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Creational Patterns</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Singleton: only one instance
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.data = [];
  }
}

const s1 = new Singleton();
const s2 = new Singleton();
s1 === s2;  // true

// Factory: create objects without specifying exact class
class UserFactory {
  createUser(type) {
    switch(type) {
      case 'admin':
        return new Admin();
      case 'user':
        return new User();
      default:
        return new Guest();
    }
  }
}

// Builder: construct complex objects step by step
class QueryBuilder {
  constructor() {
    this.query = {};
  }

  select(fields) {
    this.query.select = fields;
    return this;
  }

  from(table) {
    this.query.from = table;
    return this;
  }

  where(conditions) {
    this.query.where = conditions;
    return this;
  }

  build() {
    return this.query;
  }
}

const query = new QueryBuilder()
  .select(['name', 'email'])
  .from('users')
  .where({ active: true })
  .build();

// Prototype: create objects based on prototype
const carPrototype = {
  drive() {
    console.log(\`Driving \${this.model}\`);
  }
};

const car1 = Object.create(carPrototype);
car1.model = 'Tesla';

const car2 = Object.create(carPrototype);
car2.model = 'BMW';`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Structural Patterns</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Module: encapsulate code
const Calculator = (function() {
  // Private
  let result = 0;

  // Public API
  return {
    add(x) {
      result += x;
      return this;
    },
    subtract(x) {
      result -= x;
      return this;
    },
    getResult() {
      return result;
    }
  };
})();

Calculator.add(5).subtract(2).getResult();  // 3

// Decorator: add behavior to objects
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee.cost();  // 8

// Proxy: control access to object
const target = {
  message: 'Hello'
};

const handler = {
  get(target, prop) {
    console.log(\`Accessing \${prop}\`);
    return target[prop];
  }
};

const proxy = new Proxy(target, handler);

// Facade: simple interface to complex system
class ComplexSystem {
  operationA() { /* complex */ }
  operationB() { /* complex */ }
  operationC() { /* complex */ }
}

class Facade {
  constructor() {
    this.system = new ComplexSystem();
  }

  simpleOperation() {
    this.system.operationA();
    this.system.operationB();
    this.system.operationC();
  }
}

const facade = new Facade();
facade.simpleOperation();`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Behavioral Patterns</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Observer: notify multiple objects of state changes
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log('Received:', data);
  }
}

const subject = new Subject();
const observer1 = new Observer();
subject.subscribe(observer1);
subject.notify('Hello');

// Strategy: define family of algorithms
class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}

const bubbleSort = {
  sort(data) { /* bubble sort */ }
};

const quickSort = {
  sort(data) { /* quick sort */ }
};

const sorter = new Sorter(quickSort);
sorter.sort([3, 1, 4, 1, 5]);

// Command: encapsulate requests as objects
class Command {
  constructor(receiver, action) {
    this.receiver = receiver;
    this.action = action;
  }

  execute() {
    this.receiver[this.action]();
  }
}

class Light {
  turnOn() { console.log('Light on'); }
  turnOff() { console.log('Light off'); }
}

const light = new Light();
const turnOnCommand = new Command(light, 'turnOn');
turnOnCommand.execute();

// Chain of Responsibility: pass request along chain
class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(request) {
    if (this.next) {
      return this.next.handle(request);
    }
    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.isAuthenticated) {
      return 'Not authenticated';
    }
    return super.handle(request);
  }
}

class ValidationHandler extends Handler {
  handle(request) {
    if (!request.isValid) {
      return 'Invalid request';
    }
    return super.handle(request);
  }
}

const auth = new AuthHandler();
const validation = new ValidationHandler();
auth.setNext(validation);

// Iterator: access elements sequentially
class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  next() {
    return this.items[this.index++];
  }

  hasNext() {
    return this.index < this.items.length;
  }
}

const iterator = new Iterator([1, 2, 3]);
while (iterator.hasNext()) {
  console.log(iterator.next());
}`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-600/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-red-400">💡 Best Practices</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Use generators for lazy evaluation and infinite sequences</li>
            <li>✅ Use Proxy for validation, default values, and observability</li>
            <li>✅ Use Symbols for truly unique property keys</li>
            <li>✅ Use WeakMap/WeakSet to prevent memory leaks</li>
            <li>✅ Remove event listeners when elements are removed</li>
            <li>✅ Use throttle/debounce for frequent events</li>
            <li>✅ Measure performance before optimizing</li>
            <li>✅ Choose the right design pattern for the problem</li>
            <li>⚠️ Don't overuse advanced features - keep it simple</li>
            <li>⚠️ Profile memory usage to catch leaks early</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
