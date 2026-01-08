"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function JavaScriptFundamentals() {
  const [activeTab, setActiveTab] = useState("variables");

  const tabs = [
    { id: "variables", label: "Variables & Types", icon: "📦" },
    { id: "operators", label: "Operators", icon: "🔢" },
    { id: "control", label: "Control Flow", icon: "🔀" },
    { id: "functions", label: "Functions", icon: "⚡" },
    { id: "scope", label: "Scope & Hoisting", icon: "🎯" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-yellow-600 to-amber-600 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">📚</span>
            <div>
              <h1 className="text-5xl font-bold">JavaScript Fundamentals</h1>
              <p className="text-yellow-100 mt-2">Master the core concepts of JavaScript</p>
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
                  ? "bg-gradient-to-r from-yellow-600 to-amber-600 text-white shadow-lg"
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
        {activeTab === "variables" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Variables & Data Types</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Variable Declarations</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      { keyword: "var", scope: "Function-scoped", hoisting: "Yes (undefined)", reassign: "Yes", redeclare: "Yes" },
                      { keyword: "let", scope: "Block-scoped", hoisting: "Yes (TDZ)", reassign: "Yes", redeclare: "No" },
                      { keyword: "const", scope: "Block-scoped", hoisting: "Yes (TDZ)", reassign: "No", redeclare: "No" },
                    ].map((item) => (
                      <div key={item.keyword} className="bg-slate-700/50 p-4 rounded-xl">
                        <div className="text-xl font-bold text-yellow-400 mb-3">{item.keyword}</div>
                        <div className="text-sm space-y-1">
                          <div><span className="text-slate-400">Scope:</span> {item.scope}</div>
                          <div><span className="text-slate-400">Hoisting:</span> {item.hoisting}</div>
                          <div><span className="text-slate-400">Reassign:</span> {item.reassign}</div>
                          <div><span className="text-slate-400">Redeclare:</span> {item.redeclare}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-900 rounded-xl p-6">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-green-400">{`// var - function-scoped, can be redeclared
var name = "John";
var name = "Jane";  // ✅ OK

// let - block-scoped, cannot be redeclared
let age = 25;
age = 26;           // ✅ OK
// let age = 30;    // ❌ Error

// const - block-scoped, cannot be reassigned
const PI = 3.14159;
// PI = 3.14;       // ❌ Error

// const with objects (properties can change)
const person = { name: "John" };
person.name = "Jane";  // ✅ OK (modifying property)
// person = {};        // ❌ Error (reassigning)`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Data Types</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/50 p-6 rounded-xl">
                      <h4 className="text-xl font-bold text-yellow-400 mb-4">Primitive Types</h4>
                      <ul className="space-y-2 text-sm">
                        <li><span className="text-green-400 font-mono">String</span> - Text: <code>"Hello"</code>, <code>'World'</code></li>
                        <li><span className="text-green-400 font-mono">Number</span> - 42, 3.14, Infinity, NaN</li>
                        <li><span className="text-green-400 font-mono">BigInt</span> - 1234567890123456789n</li>
                        <li><span className="text-green-400 font-mono">Boolean</span> - true, false</li>
                        <li><span className="text-green-400 font-mono">undefined</span> - Not assigned</li>
                        <li><span className="text-green-400 font-mono">null</span> - Intentional absence</li>
                        <li><span className="text-green-400 font-mono">Symbol</span> - Unique identifier</li>
                      </ul>
                    </div>

                    <div className="bg-slate-700/50 p-6 rounded-xl">
                      <h4 className="text-xl font-bold text-yellow-400 mb-4">Reference Types</h4>
                      <ul className="space-y-2 text-sm">
                        <li><span className="text-blue-400 font-mono">Object</span> - {'{ key: "value" }'}</li>
                        <li><span className="text-blue-400 font-mono">Array</span> - [1, 2, 3]</li>
                        <li><span className="text-blue-400 font-mono">Function</span> - function() {'{}'}</li>
                        <li><span className="text-blue-400 font-mono">Date</span> - new Date()</li>
                        <li><span className="text-blue-400 font-mono">RegExp</span> - /pattern/</li>
                        <li><span className="text-blue-400 font-mono">Map</span> - new Map()</li>
                        <li><span className="text-blue-400 font-mono">Set</span> - new Set()</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-6 mt-6">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-green-400">{`// Type checking
typeof "Hello"           // "string"
typeof 42               // "number"
typeof true             // "boolean"
typeof undefined        // "undefined"
typeof null             // "object" ⚠️ (historical bug)
typeof {}               // "object"
typeof []               // "object" (use Array.isArray())
typeof function(){}     // "function"

// Type conversion
String(123)             // "123"
Number("456")           // 456
Boolean(0)              // false
parseInt("42px")        // 42
parseFloat("3.14")      // 3.14

// Checking for array
Array.isArray([])       // true
Array.isArray({})       // false`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "operators" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Operators</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Arithmetic Operators",
                    items: [
                      "+ (Addition)", "- (Subtraction)", "* (Multiplication)",
                      "/ (Division)", "% (Modulus)", "** (Exponentiation)",
                      "++ (Increment)", "-- (Decrement)"
                    ]
                  },
                  {
                    title: "Comparison Operators",
                    items: [
                      "== (Equal value)", "=== (Equal value & type)",
                      "!= (Not equal value)", "!== (Not equal value/type)",
                      "> (Greater than)", "< (Less than)",
                      ">= (Greater or equal)", "<= (Less or equal)"
                    ]
                  },
                  {
                    title: "Logical Operators",
                    items: [
                      "&& (Logical AND)", "|| (Logical OR)", "! (Logical NOT)",
                      "?? (Nullish coalescing)", "?. (Optional chaining)"
                    ]
                  },
                  {
                    title: "Assignment Operators",
                    items: [
                      "= (Assign)", "+= (Add assign)", "-= (Subtract assign)",
                      "*= (Multiply assign)", "/= (Divide assign)",
                      "%= (Modulus assign)", "**= (Exponent assign)"
                    ]
                  }
                ].map((section) => (
                  <div key={section.title} className="bg-slate-700/50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">{section.title}</h3>
                    <ul className="space-y-2 text-sm">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="font-mono text-green-400">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-xl p-6 mt-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// Arithmetic
let a = 10, b = 3;
a + b;      // 13
a - b;      // 7
a * b;      // 30
a / b;      // 3.333...
a % b;      // 1
a ** b;     // 1000
a++;        // a = 11
b--;        // b = 2

// Comparison (== vs ===)
5 == "5"    // true  (type coercion)
5 === "5"   // false (strict equality)
null == undefined    // true
null === undefined   // false

// Logical
true && false        // false
true || false        // true
!true               // false

// Nullish coalescing (??)
null ?? "default"           // "default"
undefined ?? "default"      // "default"
0 ?? "default"             // 0 (not null/undefined)
"" ?? "default"            // "" (not null/undefined)

// Optional chaining (?.)
const user = { address: { city: "NYC" } };
user?.address?.city        // "NYC"
user?.phone?.number        // undefined (no error)

// Ternary
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "control" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Control Flow</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">If-Else Statements</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// if-else
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}

// Example
let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Switch Statement</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}

// Example
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}`}</code>
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">For Loops</h3>
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-green-400">{`// Classic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of (arrays)
let arr = [1, 2, 3];
for (let num of arr) {
    console.log(num);
}

// for...in (objects)
let obj = {a: 1, b: 2};
for (let key in obj) {
    console.log(key, obj[key]);
}`}</code>
                    </pre>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">While Loops</h3>
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-green-400">{`// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "functions" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Functions</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Function Declaration vs Expression</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Function Declaration (hoisted)
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function Expression (not hoisted)
const greet = function(name) {
    return \`Hello, \${name}!\`;
};

// Arrow Function (ES6+)
const greet = (name) => \`Hello, \${name}!\`;

// Arrow function variations
const square = x => x * x;              // single param, implicit return
const add = (a, b) => a + b;           // multiple params
const doSomething = () => {            // multiline
    console.log("Doing something");
    return "Done";
};`}</code>
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">Default Parameters</h3>
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-green-400">{`function greet(name = "Guest") {
    return \`Hello, \${name}!\`;
}

greet();          // "Hello, Guest!"
greet("John");    // "Hello, John!"

// Multiple defaults
function createUser(
    name = "Anonymous",
    role = "user",
    active = true
) {
    return { name, role, active };
}`}</code>
                    </pre>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">Rest Parameters</h3>
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-green-400">{`function sum(...numbers) {
    return numbers.reduce(
        (total, num) => total + num,
        0
    );
}

sum(1, 2, 3);        // 6
sum(1, 2, 3, 4, 5);  // 15

// Mix with regular params
function format(separator, ...items) {
    return items.join(separator);
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">IIFE (Immediately Invoked Function Expression)</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// IIFE - executes immediately
(function() {
    console.log("I run immediately!");
})();

// With parameters
(function(name) {
    console.log(\`Hello, \${name}!\`);
})("John");

// Arrow IIFE
(() => {
    console.log("Arrow IIFE");
})();

// Use case: Private scope
const counter = (function() {
    let count = 0;  // private variable
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "scope" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Scope & Hoisting</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Scope Types</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Global Scope
let globalVar = "I'm global";

function demo() {
    // Function Scope
    var functionVar = "I'm function-scoped";

    if (true) {
        // Block Scope
        let blockVar = "I'm block-scoped";
        const blockConst = "Me too!";
        var stillFunction = "I'm function-scoped too";

        console.log(blockVar);      // ✅ Works
    }

    console.log(functionVar);       // ✅ Works
    console.log(stillFunction);     // ✅ Works
    // console.log(blockVar);       // ❌ Error
}

// Lexical Scope (Closures)
function outer() {
    let outerVar = "outer";

    function inner() {
        console.log(outerVar);  // ✅ Can access outer scope
    }

    return inner;
}

const innerFunc = outer();
innerFunc();  // "outer"`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Hoisting</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Variable Hoisting
console.log(varVariable);    // undefined (hoisted)
// console.log(letVariable); // ❌ ReferenceError (TDZ)
// console.log(constVariable); // ❌ ReferenceError (TDZ)

var varVariable = "var";
let letVariable = "let";
const constVariable = "const";

// Function Hoisting
greet();  // ✅ "Hello!" (function declarations are hoisted)

function greet() {
    console.log("Hello!");
}

// greetExpression();  // ❌ TypeError
const greetExpression = function() {
    console.log("Hi!");
};

// TDZ (Temporal Dead Zone)
{
    // TDZ starts
    // console.log(x);  // ❌ ReferenceError
    let x = 10;         // TDZ ends
    console.log(x);     // ✅ 10
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Closures</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Closure: Function + Lexical Environment
function makeCounter() {
    let count = 0;  // Private variable

    return function() {
        return ++count;
    };
}

const counter = makeCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3

// Multiple instances
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());  // 1
console.log(counter2());  // 1 (independent)

// Practical use: Module pattern
const calculator = (function() {
    let result = 0;

    return {
        add: (n) => result += n,
        subtract: (n) => result -= n,
        multiply: (n) => result *= n,
        divide: (n) => result /= n,
        getResult: () => result,
        reset: () => result = 0
    };
})();

calculator.add(10);      // 10
calculator.multiply(5);  // 50
calculator.getResult();  // 50`}</code>
                  </pre>
                </div>

                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-600/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">💡 Key Takeaways</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ <strong>var</strong> is function-scoped and hoisted with <code>undefined</code></li>
                    <li>✅ <strong>let</strong> and <strong>const</strong> are block-scoped with Temporal Dead Zone</li>
                    <li>✅ Function declarations are fully hoisted</li>
                    <li>✅ Closures allow functions to access outer scope variables</li>
                    <li>✅ Use <strong>const</strong> by default, <strong>let</strong> when needed, avoid <strong>var</strong></li>
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
