import { motion } from "framer-motion";
import Section from "./Section";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";

export default function JavaScriptContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
          JavaScript Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-yellow-400 font-semibold">labeled box</span> where you can store information.
            Just like you might label a box "Photos" to store your pictures, in programming you give variables names to store data.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, if you want to remember someone&apos;s age, you create a variable called <code className="bg-slate-900 px-2 py-1 rounded text-green-400">age</code> and put the number 25 in it.
            Later, you can use that variable name to get the value back or change it.
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Dynamic Typing in JavaScript</h3>
          <p className="text-slate-300 text-lg mb-3">
            JavaScript is <span className="text-blue-400 font-semibold">dynamically typed</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You don&apos;t need to tell JavaScript what type of data you&apos;re storing (number, text, etc.)</li>
            <li>The same variable can hold different types of data at different times</li>
            <li>JavaScript figures out the type automatically</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            This makes JavaScript flexible and easy to learn, but you need to be careful about what data you&apos;re working with!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-yellow-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-green-400 mb-2">✅ Store Information</div>
              <p className="text-slate-300">Remember user names, scores, settings, etc.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-green-400 mb-2">✅ Reuse Values</div>
              <p className="text-slate-300">Use the same value multiple times without repeating it</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-green-400 mb-2">✅ Change Data</div>
              <p className="text-slate-300">Update values as your program runs (like a counter)</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-green-400 mb-2">✅ Make Code Readable</div>
              <p className="text-slate-300">Names like "userName" are clearer than random values</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-yellow-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            In JavaScript, you have <span className="text-yellow-400 font-semibold">3 ways</span> to create (declare) a variable.
            Each way has different rules about how the variable behaves. Let&apos;s understand each one:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-yellow-400/50">
            <div className="text-xl font-bold text-yellow-400 mb-3">let</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Modern & Recommended</strong></div>
              <div>✅ You can change the value later</div>
              <div>✅ Only exists in its code block {"{ }"}</div>
              <div>❌ Can&apos;t create two with same name</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-purple-400/50">
            <div className="text-xl font-bold text-purple-400 mb-3">const</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Use for fixed values</strong></div>
              <div>❌ Cannot change the value</div>
              <div>✅ Only exists in its code block {"{ }"}</div>
              <div>✅ Prevents accidental changes</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-red-400/50">
            <div className="text-xl font-bold text-red-400 mb-3">var</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>⚠️ <strong>Old way - Avoid!</strong></div>
              <div>⚠️ Can cause unexpected bugs</div>
              <div>⚠️ Exists in entire function</div>
              <div>⚠️ Can create confusion</div>
            </div>
          </div>
        </div>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">💡 Which One Should You Use?</h4>
          <ul className="space-y-2 text-slate-300">
            <li><strong className="text-purple-400">Use const</strong> by default - for values that won&apos;t change (like PI = 3.14)</li>
            <li><strong className="text-yellow-400">Use let</strong> when you need to change the value (like a counter)</li>
            <li><strong className="text-red-400">Avoid var</strong> - it&apos;s old and can cause problems</li>
          </ul>
        </InfoBox>

        <div className="mb-4">
          <h4 className="text-xl font-bold mb-3 text-white">Let&apos;s See Examples:</h4>
          <p className="text-slate-300 mb-4">
            Here&apos;s how each keyword works in real code. Read the comments (lines starting with //) to understand what&apos;s happening:
          </p>
        </div>

        <CodeBlock title="Example 1: Using let (changeable variable)">
          {`// Creating a variable with let
let age = 25;              // ✅ Create variable 'age' with value 25
console.log(age);          // Shows: 25

// We can change it later
age = 26;                  // ✅ OK - we can update the value
console.log(age);          // Shows: 26

// But we can't create it again
// let age = 27;           // ❌ ERROR - already exists!`}
        </CodeBlock>

        <CodeBlock title="Example 2: Using const (fixed variable)">
          {`// Creating a constant value
const PI = 3.14159;        // ✅ Create constant for PI
console.log(PI);           // Shows: 3.14159

// We CANNOT change it
// PI = 3.14;              // ❌ ERROR - const cannot be changed!

// Use const for values that should never change
const API_KEY = "abc123";  // ✅ Good - API keys shouldn't change
const MAX_USERS = 100;     // ✅ Good - max limit is fixed`}
        </CodeBlock>

        <CodeBlock title="Example 3: var (old way - don't use)">
          {`// Old way with var - causes problems
var name = "John";         // ⚠️ Works but not recommended
name = "Jane";             // ⚠️ Can change it
var name = "Bob";          // ⚠️ Can even declare again - confusing!

// Modern code uses let or const instead
let betterName = "John";   // ✅ Better - use let
const bestName = "John";   // ✅ Best - use const if won't change`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">🎯 Quick Summary</h4>
          <div className="space-y-2 text-slate-300">
            <p><code className="bg-slate-900 px-2 py-1 rounded text-purple-400">const userName = "Alice"</code> - Value can&apos;t change (constant)</p>
            <p><code className="bg-slate-900 px-2 py-1 rounded text-yellow-400">let score = 0</code> - Value can change later</p>
            <p><code className="bg-slate-900 px-2 py-1 rounded text-red-400">var old = "don&apos;t use"</code> - Old way, avoid it</p>
          </div>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-3xl font-bold mb-4 text-yellow-400">Data Types - What Kind of Information Can We Store?</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Variables can store different <span className="text-yellow-400 font-semibold">types</span> of information - like numbers, text, true/false values, etc.
            In JavaScript, there are <span className="text-green-400 font-semibold">2 main categories</span> of data types:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-green-400 mb-2">Primitive Types (Simple)</h4>
            <p className="text-slate-300">
              Basic, single values like numbers, text, or true/false. These are copied when assigned to another variable.
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-blue-400 mb-2">Reference Types (Complex)</h4>
            <p className="text-slate-300">
              Collections of data like objects and arrays. These are referenced (pointed to) when assigned.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-2xl font-bold text-green-400 mb-4">📝 Primitive (Simple) Types</h4>

            <div className="space-y-4 mb-4">
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="font-bold text-green-300 mb-1">String - Text/Words</div>
                <p className="text-sm text-slate-400">Any text like names, messages, or sentences</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="font-bold text-green-300 mb-1">Number - Numbers</div>
                <p className="text-sm text-slate-400">Both whole numbers (42) and decimals (3.14)</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="font-bold text-green-300 mb-1">Boolean - True/False</div>
                <p className="text-sm text-slate-400">Only two values: true or false</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="font-bold text-green-300 mb-1">Undefined - Not Set Yet</div>
                <p className="text-sm text-slate-400">Variable exists but has no value</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="font-bold text-green-300 mb-1">Null - Intentionally Empty</div>
                <p className="text-sm text-slate-400">Means "nothing" or "empty" on purpose</p>
              </div>
            </div>

            <CodeBlock title="Examples of Primitive Types">
              {`// String (text) - use quotes
let name = "Alice";           // ✅ Double quotes
let city = 'New York';        // ✅ Single quotes
let message = 
Hello 
; // ✅ Template literal (can insert variables)

// Number (all numbers are same type!)
let age = 25;                 // ✅ Whole number
let price = 19.99;            // ✅ Decimal
let negative = -10;           // ✅ Negative number

// Boolean (only true or false)
let isStudent = true;         // ✅ true
let hasLicense = false;       // ✅ false

// Undefined (not set)
let notSet;                   // ✅ undefined (no value assigned)

// Null (empty on purpose)
let empty = null;             // ✅ null (intentionally empty)

// BigInt (very large numbers)
let huge = 1234567890123456789n;  // ✅ Note the 'n' at the end`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-blue-400 mb-4">📦 Reference (Complex) Types</h4>

            <div className="space-y-4 mb-4">
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="font-bold text-blue-300 mb-1">Object - Collection of Properties</div>
                <p className="text-sm text-slate-400">Store multiple related values with names</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="font-bold text-blue-300 mb-1">Array - Ordered List</div>
                <p className="text-sm text-slate-400">Store multiple values in a specific order</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="font-bold text-blue-300 mb-1">Function - Reusable Code</div>
                <p className="text-sm text-slate-400">A block of code you can run multiple times</p>
              </div>
            </div>

            <CodeBlock title="Examples of Reference Types">
              {`// Object - group related data
let person = {
  name: "Alice",              // ✅ Property: name
  age: 25,                    // ✅ Property: age
  city: "NYC"                 // ✅ Property: city
};
console.log(person.name);     // Shows: Alice

// Array - list of values [0, 1, 2...]
let colors = ["red", "green", "blue"];
console.log(colors[0]);       // Shows: red (first item)
console.log(colors[1]);       // Shows: green (second item)

// Function - reusable code
function greet() {
  return "Hello!";
}
console.log(greet());         // Shows: Hello!

// Date - work with dates/times
let now = new Date();
console.log(now);             // Shows current date/time

// Map - store key-value pairs
let scores = new Map();
scores.set("Alice", 95);      // Add Alice's score
console.log(scores.get("Alice")); // Shows: 95

// Set - store unique values only
let numbers = new Set([1, 2, 2, 3]);
console.log(numbers);         // Shows: {1, 2, 3} (removed duplicate 2)`}
            </CodeBlock>
          </div>
        </div>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-3">🤔 What&apos;s the Difference?</h4>
          <div className="grid md:grid-cols-2 gap-4 text-slate-300">
            <div>
              <div className="font-bold text-green-400 mb-2">Primitive Types:</div>
              <ul className="space-y-1 text-sm">
                <li>• Store a single value</li>
                <li>• Copied when assigned</li>
                <li>• Cannot be changed (immutable)</li>
                <li>• Example: numbers, strings, booleans</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-blue-400 mb-2">Reference Types:</div>
              <ul className="space-y-1 text-sm">
                <li>• Store multiple values</li>
                <li>• Referenced when assigned</li>
                <li>• Can be modified</li>
                <li>• Example: objects, arrays, functions</li>
              </ul>
            </div>
          </div>
        </InfoBox>
      </Section>

      <Section id="limits">
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">💾 Memory Limits & Storage Capacity</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Every data type in JavaScript has <span className="text-yellow-400 font-semibold">memory limits</span> -
            a maximum amount of data it can store. Understanding these limits helps you write efficient code and avoid errors.
          </p>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">📊 JavaScript Data Type Limits</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="p-3 text-yellow-400 font-bold">Data Type</th>
                  <th className="p-3 text-yellow-400 font-bold">Memory Size</th>
                  <th className="p-3 text-yellow-400 font-bold">Minimum Value</th>
                  <th className="p-3 text-yellow-400 font-bold">Maximum Value</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">Number</td>
                  <td className="p-3">8 bytes (64-bit float)</td>
                  <td className="p-3 font-mono text-sm">-1.7976931348623157e+308</td>
                  <td className="p-3 font-mono text-sm">1.7976931348623157e+308</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">Number (safe int)</td>
                  <td className="p-3">8 bytes</td>
                  <td className="p-3 font-mono">-9,007,199,254,740,991</td>
                  <td className="p-3 font-mono">9,007,199,254,740,991</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">BigInt</td>
                  <td className="p-3">Unlimited*</td>
                  <td className="p-3">Limited by memory</td>
                  <td className="p-3">Limited by memory</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">String</td>
                  <td className="p-3">2 bytes per char (UTF-16)</td>
                  <td className="p-3">0 characters</td>
                  <td className="p-3">~2^53 characters</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">Array</td>
                  <td className="p-3">Varies</td>
                  <td className="p-3">0 elements</td>
                  <td className="p-3">2^32 - 1 (4,294,967,295)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-green-400">Object</td>
                  <td className="p-3">Varies</td>
                  <td className="p-3">0 properties</td>
                  <td className="p-3">Limited by memory</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">* BigInt can grow as large as available memory allows</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl mb-6 font-mono text-sm">
          <h4 className="text-lg font-bold mb-3 text-white font-sans">Memory Layout Example (Number)</h4>
          <pre className="text-green-400 overflow-x-auto">
            {`// Number in JavaScript is 64-bit IEEE 754 floating-point
// Memory Structure: [Sign: 1 bit][Exponent: 11 bits][Fraction: 52 bits]

let x = 42;

Binary Representation:
┌────────────────────────────────────────────────────┐
│ 0 | 10000000100 | 0101000000000000000000000000000000 │
│ ^   ^^^^^^^^^^^   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^│
│ │        │                    │                      │
│ Sign  Exponent            Mantissa                   │
│ (±)  (2^5 = 32)      (0.3125 × 2^6 = 20)            │
└────────────────────────────────────────────────────┘

Result: +1 × (1 + 0.3125) × 2^5 = 42`}
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xl font-bold mb-3 text-yellow-400">🔢 Number Precision Limits</h4>
            <CodeBlock title="Safe Integer Range">
              {`// Safe integers: -2^53 to 2^53
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

// Beyond this, precision is lost!
let big = 9007199254740992;
console.log(big);        // 9007199254740992 ✅
console.log(big + 1);    // 9007199254740992 ❌ (should be 993!)
console.log(big + 2);    // 9007199254740994 ❌ (skips 993!)

// Use BigInt for large integers
let bigInt = 9007199254740992n;
console.log(bigInt + 1n);  // 9007199254740993n ✅ Correct!`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3 text-yellow-400">📏 String Length Limits</h4>
            <CodeBlock title="String Size">
              {`// Maximum string length varies by browser/engine
// Theoretical: 2^53 - 1 characters
// Practical: ~512MB - 1GB depending on browser

// Chrome/V8: ~1GB
// Firefox: ~512MB
// Edge: ~1GB

// Example: Creating large strings
let str = "a".repeat(1000000);  // 1 million chars ✅
console.log(str.length);         // 1000000

// Very large strings may cause:
// - Out of memory errors
// - Browser crashes
// - Performance issues`}
            </CodeBlock>
          </div>
        </div>

        <CodeBlock title="Special Number Values">
          {`// Special numeric values
console.log(Infinity);           // Larger than any number
console.log(-Infinity);          // Smaller than any number
console.log(NaN);                // "Not a Number"

// Division by zero
let result = 1 / 0;
console.log(result);             // Infinity

// Invalid math operations
let invalid = Math.sqrt(-1);
console.log(invalid);            // NaN

// NaN is special - it's not equal to itself!
console.log(NaN === NaN);        // false ❌
console.log(Number.isNaN(NaN));  // true ✅ (correct way to check)`}
        </CodeBlock>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-3">💡 Key Takeaways</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Number</strong> can safely represent integers up to ±9 quadrillion</li>
            <li>• Use <strong>BigInt</strong> for integers beyond the safe range</li>
            <li>• <strong>Strings</strong> can hold millions of characters but watch memory usage</li>
            <li>• <strong>Arrays</strong> can have up to 4.29 billion elements (but memory limits apply)</li>
            <li>• All reference types (objects, arrays) are limited by available heap memory</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="limitations">
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">⚠️ Limitations & Constraints</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            JavaScript has some <span className="text-red-400 font-semibold">quirks and limitations</span> you need to know about.
            Understanding these will help you avoid common bugs and write better code!
          </p>
        </div>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-3">🚨 Critical Limitations to Remember</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>No integer overflow errors</strong> - precision loss happens silently!</li>
            <li>• <strong>Floating-point arithmetic</strong> is imprecise (0.1 + 0.2 ≠ 0.3)</li>
            <li>• <strong>Type coercion</strong> can cause unexpected results</li>
            <li>• <strong>undefined vs null</strong> - two different "empty" values</li>
            <li>• <strong>Array holes</strong> - sparse arrays have gotchas</li>
            <li>• <strong>Object property order</strong> - mostly preserved but not guaranteed</li>
          </ul>
        </InfoBox>

        <div className="space-y-6 mt-6">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Floating-Point Precision Problems</h4>
            <CodeBlock title="The Famous 0.1 + 0.2 Problem">
              {`// Floating-point numbers are NOT exact!
console.log(0.1 + 0.2);              // 0.30000000000000004 ❌
console.log(0.1 + 0.2 === 0.3);      // false ❌

// Solution: Use rounding or work with integers
console.log((0.1 * 10 + 0.2 * 10) / 10);  // 0.3 ✅
console.log((0.1 + 0.2).toFixed(1));       // "0.3" ✅

// For money, use integers (cents):
let price1 = 199;  // $1.99
let price2 = 299;  // $2.99
let total = price1 + price2;  // 498 cents = $4.98 ✅

// Or use libraries like decimal.js or big.js for precision`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Type Coercion Gotchas</h4>
            <CodeBlock title="Unexpected Type Conversions">
              {`// JavaScript converts types automatically (type coercion)
console.log("5" + 3);        // "53" (number became string)
console.log("5" - 3);        // 2 (string became number) 🤔
console.log("5" * "2");      // 10 (both became numbers)
console.log("5" + true);     // "5true" (boolean became string)

// Equality comparisons can be confusing
console.log(0 == false);     // true (both become 0)
console.log("" == false);    // true (both become 0)
console.log([] == false);    // true ❌ wtf?

// Solution: Use strict equality ===
console.log(0 === false);    // false ✅
console.log("" === false);   // false ✅

// Array + Array = ???
console.log([1, 2] + [3, 4]);  // "1,23,4" ❌ (becomes strings!)`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ undefined vs null Confusion</h4>
            <CodeBlock title="Two Ways to Represent 'Nothing'">
              {`// undefined = variable exists but has no value
let notAssigned;
console.log(notAssigned);    // undefined

// null = intentionally empty/no value
let empty = null;
console.log(empty);          // null

// They're different types!
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" ❌ (JavaScript bug!)

// But == treats them as equal
console.log(null == undefined);   // true
console.log(null === undefined);  // false ✅

// Missing object properties return undefined
let person = { name: "Alice" };
console.log(person.age);     // undefined (property doesn't exist)

// Function with no return returns undefined
function noReturn() {
  // no return statement
}
console.log(noReturn());     // undefined`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Array Limitations</h4>
            <CodeBlock title="Array Edge Cases">
              {`// Maximum array length: 2^32 - 1
let maxLength = 2**32 - 1;  // 4,294,967,295
console.log(maxLength);

// Sparse arrays (arrays with "holes")
let sparse = [1, , 3];  // middle element is "hole"
console.log(sparse);         // [1, empty, 3]
console.log(sparse.length);  // 3
console.log(sparse[1]);      // undefined

// Array methods skip holes!
sparse.forEach(x => console.log(x));  // 1, 3 (skips hole!)

// Negative indices don't work like Python
let arr = [1, 2, 3];
console.log(arr[-1]);        // undefined ❌ (not last element!)

// But you can use .at() for negative indexing
console.log(arr.at(-1));     // 3 ✅ (last element)`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ String Immutability</h4>
            <CodeBlock title="Strings Cannot Be Modified">
              {`// Strings are immutable in JavaScript
let str = "Hello";

// Can't change individual characters
str[0] = "h";            // Doesn't work!
console.log(str);        // "Hello" (unchanged)

// Must create a new string
str = "h" + str.slice(1);  // "hello" ✅

// String operations create new strings (memory cost!)
let result = "";
for (let i = 0; i < 10000; i++) {
  result += "a";  // Creates 10,000 new strings! ❌ SLOW!
}

// Better: Use array join
let better = [];
for (let i = 0; i < 10000; i++) {
  better.push("a");
}
result = better.join("");  // Much faster! ✅`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Performance Pitfalls</h4>
            <CodeBlock title="Operations That Can Be Slow">
              {`// Large array operations
let huge = new Array(1000000).fill(0);
huge.shift();  // ❌ SLOW! Moves all 1M elements

// Better: Use index tracking
let index = 0;
index++;  // ✅ Fast!

// Deep object cloning is expensive
let obj = { /* complex nested object */ };
let clone = JSON.parse(JSON.stringify(obj));  // ❌ SLOW!
// Also fails for: functions, undefined, Date, RegExp, etc.

// Repeated string concatenation
let text = "";
for (let i = 0; i < 10000; i++) {
  text += "word";  // ❌ SLOW! Creates many strings
}

// Better: Use array join
let words = [];
for (let i = 0; i < 10000; i++) {
  words.push("word");
}
text = words.join("");  // ✅ Much faster!`}
            </CodeBlock>
          </div>
        </div>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-3">✅ Best Practices to Avoid Issues</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• Always use <strong>===</strong> instead of == for comparisons</li>
            <li>• For money/precision, work with integers or use decimal libraries</li>
            <li>• Check for undefined/null before accessing properties: <code className="bg-slate-900 px-2 py-1 rounded">obj?.property</code></li>
            <li>• Avoid sparse arrays - use <code className="bg-slate-900 px-2 py-1 rounded">Array(n).fill(value)</code> instead</li>
            <li>• For large string building, use array join instead of repeated +=</li>
            <li>• Test edge cases: empty arrays, zero, negative numbers, large numbers</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-yellow-400">Collections</h3>
        <CodeBlock>
          {`// Array methods
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.map(x => x * 2);
arr.filter(x => x > 1);

// Object operations
let obj = { a: 1, b: 2 };
Object.keys(obj);
Object.values(obj);
Object.entries(obj);

// Map
let map = new Map();
map.set('key', 'value');
map.get('key');

// Set
let set = new Set([1, 2, 2, 3]);  // {1, 2, 3}`}
        </CodeBlock>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-yellow-400">Advanced Features</h3>
        <CodeBlock>
          {`// typeof operator
typeof "Hello"          // "string"
typeof 42              // "number"
typeof true            // "boolean"

// Type conversion
String(123)            // "123"
Number("456")          // 456
Boolean(0)             // false
parseInt("42px")       // 42

// Array check
Array.isArray([])      // true`}
        </CodeBlock>
      </Section>

      <Section id="usage">
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">🌍 Real-World Usage & Applications</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            JavaScript is <span className="text-yellow-400 font-semibold">everywhere</span>! It&apos;s the only language that runs natively in web browsers,
            making it essential for modern web development. But it&apos;s not limited to browsers anymore - it powers servers, mobile apps, desktop applications, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🌐</div>
            <h4 className="text-xl font-bold mb-2 text-blue-400">Frontend Web Development</h4>
            <p className="text-slate-300 text-sm mb-3">Building interactive user interfaces and web applications</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br />
              React, Vue.js, Angular, Svelte, Next.js
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🖥️</div>
            <h4 className="text-xl font-bold mb-2 text-green-400">Backend/Server-Side</h4>
            <p className="text-slate-300 text-sm mb-3">Building APIs, databases, and server applications</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br />
              Node.js, Express.js, Nest.js, Fastify
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">📱</div>
            <h4 className="text-xl font-bold mb-2 text-purple-400">Mobile Development</h4>
            <p className="text-slate-300 text-sm mb-3">Creating iOS and Android apps with one codebase</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br />
              React Native, Expo, Ionic, Cordova
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">💻</div>
            <h4 className="text-xl font-bold mb-2 text-orange-400">Desktop Applications</h4>
            <p className="text-slate-300 text-sm mb-3">Cross-platform desktop apps (Windows, Mac, Linux)</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br />
              Electron, Tauri, NW.js
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🎮</div>
            <h4 className="text-xl font-bold mb-2 text-yellow-400">Game Development</h4>
            <p className="text-slate-300 text-sm mb-3">Browser games, HTML5 games, and game engines</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br />
              Phaser, Three.js, Babylon.js, PixiJS
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🤖</div>
            <h4 className="text-xl font-bold mb-2 text-teal-400">IoT & Automation</h4>
            <p className="text-slate-300 text-sm mb-3">Robotics, drones, hardware programming</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br />
              Johnny-Five, Node-RED, Cylon.js
            </div>
          </motion.div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">🏢 Major Companies Using JavaScript</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">📘</div>
              <div className="font-bold text-blue-400">Facebook/Meta</div>
              <div className="text-xs text-slate-400">Created React</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🔍</div>
              <div className="font-bold text-red-400">Google</div>
              <div className="text-xs text-slate-400">Created Angular, V8</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">📺</div>
              <div className="font-bold text-red-500">Netflix</div>
              <div className="text-xs text-slate-400">Full-stack Node.js</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">💳</div>
              <div className="font-bold text-blue-400">PayPal</div>
              <div className="text-xs text-slate-400">Backend with Node.js</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🚗</div>
              <div className="font-bold text-gray-400">Uber</div>
              <div className="text-xs text-slate-400">Mobile & web apps</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">💼</div>
              <div className="font-bold text-blue-500">LinkedIn</div>
              <div className="text-xs text-slate-400">Frontend & mobile</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🛒</div>
              <div className="font-bold text-orange-400">Amazon</div>
              <div className="text-xs text-slate-400">E-commerce platform</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-bold text-purple-400">Slack</div>
              <div className="text-xs text-slate-400">Desktop app (Electron)</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
          <h4 className="text-xl font-bold mb-3 text-green-400">📊 Job Market & Demand</h4>
          <div className="grid md:grid-cols-3 gap-4 text-slate-300">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">1st</div>
              <div className="text-sm">Most Popular Language (Stack Overflow 2024)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">65%+</div>
              <div className="text-sm">Of professional developers use JavaScript</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">High</div>
              <div className="text-sm">Salary range: $70k - $150k+ (US)</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="purpose">
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">📜 Purpose & History</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-bold mb-3 text-white">🎯 Why Was JavaScript Created?</h4>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              JavaScript was created in <span className="text-yellow-400 font-semibold">1995 by Brendan Eich</span> at Netscape in just
              <span className="text-yellow-400 font-semibold"> 10 days</span>! The goal was to make web pages interactive and dynamic.
              Before JavaScript, websites were static - just text and images with no interactivity.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-yellow-400/30">
                <h5 className="text-lg font-bold mb-3 text-yellow-400">❌ Before JavaScript</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Static HTML pages only</li>
                  <li>• No form validation</li>
                  <li>• No interactive elements</li>
                  <li>• Every action required page reload</li>
                  <li>• Server had to do everything</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-green-400/30">
                <h5 className="text-lg font-bold mb-3 text-green-400">✅ After JavaScript</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Interactive web pages</li>
                  <li>• Client-side validation</li>
                  <li>• Dynamic content updates</li>
                  <li>• Smooth user experience (no reloads)</li>
                  <li>• Reduced server load</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🚀 Key Milestones in JavaScript History</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-yellow-400 font-bold min-w-20">1995</div>
                <div className="text-slate-300">JavaScript created by Brendan Eich at Netscape (originally called "Mocha", then "LiveScript")</div>
              </div>
              <div className="flex gap-4">
                <div className="text-yellow-400 font-bold min-w-20">1997</div>
                <div className="text-slate-300">ECMAScript 1 - First standardization</div>
              </div>
              <div className="flex gap-4">
                <div className="text-yellow-400 font-bold min-w-20">2005</div>
                <div className="text-slate-300">AJAX popularized - asynchronous web apps become possible</div>
              </div>
              <div className="flex gap-4">
                <div className="text-yellow-400 font-bold min-w-20">2009</div>
                <div className="text-slate-300">Node.js released - JavaScript on the server!</div>
              </div>
              <div className="flex gap-4">
                <div className="text-yellow-400 font-bold min-w-20">2015</div>
                <div className="text-slate-300">ES6 (ES2015) - Massive update with classes, modules, arrow functions, promises</div>
              </div>
              <div className="flex gap-4">
                <div className="text-yellow-400 font-bold min-w-20">2020+</div>
                <div className="text-slate-300">Annual updates - Optional chaining, nullish coalescing, top-level await, and more</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-3 text-white">💡 Design Philosophy</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-blue-400 mb-2">🎨 Easy to Learn</div>
                <p className="text-slate-300 text-sm">
                  Forgiving syntax, dynamic typing, and no compilation makes it beginner-friendly
                </p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-green-400 mb-2">🔧 Flexible</div>
                <p className="text-slate-300 text-sm">
                  Multi-paradigm: supports OOP, functional, imperative, and event-driven programming
                </p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-purple-400 mb-2">⚡ Everywhere</div>
                <p className="text-slate-300 text-sm">
                  Runs in every browser, on servers, mobile devices, desktops, IoT devices
                </p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-orange-400 mb-2">🌐 Web-First</div>
                <p className="text-slate-300 text-sm">
                  Built for the web, with native browser support and DOM manipulation
                </p>
              </div>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="text-xl font-bold mb-3">🤔 Fun Facts</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• JavaScript has <strong>nothing to do with Java</strong> - the name was just a marketing decision!</li>
              <li>• Created in <strong>10 days</strong> - which explains some of its quirks</li>
              <li>• The official name is <strong>ECMAScript</strong>, but everyone calls it JavaScript</li>
              <li>• Originally designed to be a <strong>simple scripting language</strong>, not a full programming language</li>
              <li>• JavaScript is now used in places Brendan Eich never imagined: servers, robots, games, AI, etc.</li>
            </ul>
          </InfoBox>
        </div>
      </Section>

      <Section id="future">
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">🔮 Future Outlook & Trends</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">📈</div>
            <div className="text-2xl font-bold text-green-400 mb-2">Rapidly Growing</div>
            <div className="text-sm text-slate-300">Continuously expanding into new domains</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">👥</div>
            <div className="text-2xl font-bold text-blue-400 mb-2">Huge Community</div>
            <div className="text-sm text-slate-300">18+ million developers worldwide</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">🚀</div>
            <div className="text-2xl font-bold text-purple-400 mb-2">Evolving Fast</div>
            <div className="text-sm text-slate-300">New features added annually</div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🔥 Current Trends (2024-2026)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-bold text-yellow-400 mb-3">Rising Technologies</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✅ <strong>TypeScript</strong> - Typed JavaScript becoming the default</li>
                  <li>✅ <strong>React/Next.js</strong> - Dominant in web development</li>
                  <li>✅ <strong>Deno & Bun</strong> - Modern alternatives to Node.js</li>
                  <li>✅ <strong>AI Integration</strong> - JavaScript AI libraries growing</li>
                  <li>✅ <strong>Edge Computing</strong> - Cloudflare Workers, Vercel Edge</li>
                  <li>✅ <strong>WebAssembly</strong> - High-performance web apps</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-bold text-yellow-400 mb-3">Declining/Legacy</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>⚠️ <strong>jQuery</strong> - Modern frameworks replaced it</li>
                  <li>⚠️ <strong>AngularJS</strong> - (v1, not Angular 2+)</li>
                  <li>⚠️ <strong>Backbone.js</strong> - Outdated framework</li>
                  <li>⚠️ <strong>var keyword</strong> - Use let/const instead</li>
                  <li>⚠️ <strong>Callbacks</strong> - Promises and async/await preferred</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🎯 Future Predictions</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-green-400 mb-1">JavaScript Will Dominate Web Development</h5>
                  <p className="text-slate-300 text-sm">
                    As the only language natively supported by all browsers, JavaScript&apos;s position is secure.
                    New frameworks and tools keep improving developer experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-green-400 mb-1">TypeScript Adoption Will Continue Growing</h5>
                  <p className="text-slate-300 text-sm">
                    Most new projects now default to TypeScript. By 2026, it may become more common than plain JavaScript
                    for professional development.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-green-400 mb-1">Server-Side JavaScript Keeps Expanding</h5>
                  <p className="text-slate-300 text-sm">
                    Node.js, Deno, and Bun are making JavaScript a serious backend language. Full-stack JavaScript development
                    will become even more popular.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-green-400 mb-1">AI & Machine Learning Integration</h5>
                  <p className="text-slate-300 text-sm">
                    JavaScript libraries for AI/ML (TensorFlow.js, Brain.js) are growing. JavaScript will power
                    AI-driven web applications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-green-400 mb-1">Performance Improvements</h5>
                  <p className="text-slate-300 text-sm">
                    JavaScript engines (V8, SpiderMonkey) keep getting faster. WebAssembly will complement JavaScript
                    for performance-critical tasks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-yellow-400 mb-1">More Annual ECMAScript Updates</h5>
                  <p className="text-slate-300 text-sm">
                    Expect yearly language improvements: pattern matching, decorators, pipeline operator, records/tuples,
                    and more features to modernize JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3 text-green-400">💼 Career Outlook</h4>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h5 className="font-bold text-white mb-2">Job Market</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>High demand</strong> for JavaScript developers</li>
                  <li>• <strong>Remote opportunities</strong> abundant</li>
                  <li>• <strong>Full-stack roles</strong> very common</li>
                  <li>• <strong>Entry-level friendly</strong> - great first language</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-white mb-2">Skills in Demand</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>React/Next.js</strong> - Most requested</li>
                  <li>• <strong>TypeScript</strong> - Increasingly required</li>
                  <li>• <strong>Node.js</strong> - Backend development</li>
                  <li>• <strong>Cloud platforms</strong> - AWS, Vercel, Netlify</li>
                </ul>
              </div>
            </div>
          </div>

          <InfoBox type="success">
            <h4 className="text-xl font-bold mb-3">✅ Why JavaScript is a Great Choice</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• <strong>Universal</strong> - Runs everywhere: browsers, servers, mobile, desktop, IoT</li>
              <li>• <strong>Huge ecosystem</strong> - NPM has 2+ million packages</li>
              <li>• <strong>Strong community</strong> - Excellent resources, tutorials, support</li>
              <li>• <strong>High demand</strong> - Consistently top job postings</li>
              <li>• <strong>Constantly evolving</strong> - New features and improvements every year</li>
              <li>• <strong>Future-proof</strong> - Not going anywhere for decades</li>
            </ul>
          </InfoBox>
        </div>
      </Section>
    </div>
  );
}