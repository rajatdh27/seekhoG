"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function VariablesPage() {
  const [activeLanguage, setActiveLanguage] = useState("comparison");
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { id: "comparison", name: "All Languages", icon: "🔀", gradient: "from-pink-500 to-purple-500" },
    { id: "c", name: "C", icon: "🔷", gradient: "from-blue-500 to-cyan-500" },
    { id: "cpp", name: "C++", icon: "⚡", gradient: "from-indigo-500 to-blue-500" },
    { id: "java", name: "Java", icon: "☕", gradient: "from-orange-500 to-red-500" },
    { id: "javascript", name: "JavaScript", icon: "🟨", gradient: "from-yellow-500 to-amber-500" },
    { id: "typescript", name: "TypeScript", icon: "🔵", gradient: "from-blue-500 to-indigo-500" },
    { id: "python", name: "Python", icon: "🐍", gradient: "from-green-500 to-emerald-500" },
    { id: "go", name: "Go", icon: "🔷", gradient: "from-cyan-500 to-blue-500" },
    { id: "rust", name: "Rust", icon: "🦀", gradient: "from-orange-500 to-amber-500" },
    { id: "kotlin", name: "Kotlin", icon: "💜", gradient: "from-purple-500 to-pink-500" },
    { id: "swift", name: "Swift", icon: "🍎", gradient: "from-orange-500 to-red-500" },
  ];

  const sections = [
    { id: "intro", title: "Introduction", icon: "📖" },
    { id: "declarations", title: "Variable Declarations", icon: "📝" },
    { id: "types", title: "Data Types", icon: "🔢" },
    { id: "collections", title: "Collections", icon: "📚" },
    { id: "advanced", title: "Advanced Features", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 py-20 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-7xl mb-4">📦</div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Variables & Data Types
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
              Master how to store and work with data across 10 programming languages
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm">Languages</div>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Examples</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Language Tabs */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setActiveLanguage(lang.id)}
                className={`relative px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeLanguage === lang.id
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeLanguage === lang.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 bg-gradient-to-r ${lang.gradient} rounded-lg`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{lang.icon}</span>
                  <span>{lang.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <TableOfContents
            sections={sections}
            activeSection={activeSection}
            onSectionClick={setActiveSection}
            language={languages.find(l => l.id === activeLanguage)}
          />

          {/* Content */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLanguage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeLanguage === "comparison" && <ComparisonContent />}
                {activeLanguage === "javascript" && <JavaScriptContent />}
                {activeLanguage === "python" && <PythonContent />}
                {activeLanguage === "java" && <JavaContent />}
                {activeLanguage === "c" && <CContent />}
                {activeLanguage === "cpp" && <CppContent />}
                {activeLanguage === "typescript" && <TypeScriptContent />}
                {activeLanguage === "go" && <GoContent />}
                {activeLanguage === "rust" && <RustContent />}
                {activeLanguage === "kotlin" && <KotlinContent />}
                {activeLanguage === "swift" && <SwiftContent />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Circular Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-slate-800 rounded-full shadow-2xl p-4 border border-slate-700">
          <div className="relative w-16 h-16">
            {/* Background Circle */}
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-slate-600"
              />
              {/* Progress Circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
                className="transition-all duration-300"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            {/* Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-white">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Sidebar Component
function TableOfContents({ sections, activeSection, onSectionClick, language }) {
  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            onSectionClick(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, onSectionClick]);

  return (
    <aside className="lg:w-64 lg:sticky lg:top-24 lg:self-start">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
        <div className={`bg-gradient-to-r ${language.gradient} p-4`}>
          <h3 className="text-lg font-bold flex items-center gap-2">
            📚 Table of Contents
          </h3>
          <div className="text-sm text-white/80 mt-1">
            {language.icon} {language.name}
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSectionClick(section.id);
                    document.getElementById(section.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? `bg-gradient-to-r ${language.gradient} text-white`
                      : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
                  }`}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Progress */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Progress</span>
            <span>{Math.round((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length * 100)}%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2">
            <div
              className={`bg-gradient-to-r ${language.gradient} h-2 rounded-full transition-all duration-300`}
              style={{ width: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

// Reusable Components
function Section({ children, id }) {
  return (
    <section
      id={id}
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8 scroll-mt-24"
    >
      {children}
    </section>
  );
}

function CodeBlock({ children, title }) {
  return (
    <div className="bg-slate-950/80 rounded-xl p-6 mb-6 border border-slate-800">
      {title && (
        <div className="text-sm font-bold text-yellow-400 mb-3">
          💻 {title}
        </div>
      )}
      <div className="overflow-x-auto">
        <pre className="text-sm">
          <code className="text-green-400">{children}</code>
        </pre>
      </div>
    </div>
  );
}

function InfoBox({ children, type = "info" }) {
  const colors = {
    info: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    success: "bg-green-500/10 border-green-500/30 text-green-300",
    warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
  };

  return (
    <div className={`${colors[type]} border rounded-xl p-6 mb-6`}>
      {children}
    </div>
  );
}

// Language Content Components
function JavaScriptContent() {
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
            For example, if you want to remember someone's age, you create a variable called <code className="bg-slate-900 px-2 py-1 rounded text-green-400">age</code> and put the number 25 in it.
            Later, you can use that variable name to get the value back or change it.
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Dynamic Typing in JavaScript</h3>
          <p className="text-slate-300 text-lg mb-3">
            JavaScript is <span className="text-blue-400 font-semibold">dynamically typed</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You don't need to tell JavaScript what type of data you're storing (number, text, etc.)</li>
            <li>The same variable can hold different types of data at different times</li>
            <li>JavaScript figures out the type automatically</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            This makes JavaScript flexible and easy to learn, but you need to be careful about what data you're working with!
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
            Each way has different rules about how the variable behaves. Let's understand each one:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-yellow-400/50">
            <div className="text-xl font-bold text-yellow-400 mb-3">let</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Modern & Recommended</strong></div>
              <div>✅ You can change the value later</div>
              <div>✅ Only exists in its code block { }</div>
              <div>❌ Can't create two with same name</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-purple-400/50">
            <div className="text-xl font-bold text-purple-400 mb-3">const</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Use for fixed values</strong></div>
              <div>❌ Cannot change the value</div>
              <div>✅ Only exists in its code block { }</div>
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
            <li><strong className="text-purple-400">Use const</strong> by default - for values that won't change (like PI = 3.14)</li>
            <li><strong className="text-yellow-400">Use let</strong> when you need to change the value (like a counter)</li>
            <li><strong className="text-red-400">Avoid var</strong> - it's old and can cause problems</li>
          </ul>
        </InfoBox>

        <div className="mb-4">
          <h4 className="text-xl font-bold mb-3 text-white">Let's See Examples:</h4>
          <p className="text-slate-300 mb-4">
            Here's how each keyword works in real code. Read the comments (lines starting with //) to understand what's happening:
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
            <p><code className="bg-slate-900 px-2 py-1 rounded text-purple-400">const userName = "Alice"</code> - Value can't change (constant)</p>
            <p><code className="bg-slate-900 px-2 py-1 rounded text-yellow-400">let score = 0</code> - Value can change later</p>
            <p><code className="bg-slate-900 px-2 py-1 rounded text-red-400">var old = "don't use"</code> - Old way, avoid it</p>
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
let message = \`Hello \${name}\`; // ✅ Template literal (can insert variables)

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
          <h4 className="text-xl font-bold mb-3">🤔 What's the Difference?</h4>
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
    </div>
  );
}

function PythonContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Python Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-green-400 font-semibold">labeled container</span> where you can store information.
            Just like you might use a jar labeled "Sugar" in your kitchen, in Python you give variables names to identify what data they hold.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, if you want to store someone's name, you create a variable called <code className="bg-slate-900 px-2 py-1 rounded text-green-400">name</code> and assign it the value "Alice".
            Python makes this super simple - no complicated setup needed!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Dynamic & Simple in Python</h3>
          <p className="text-slate-300 text-lg mb-3">
            Python is <span className="text-green-400 font-semibold">dynamically typed</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You don't need to tell Python what type of data you're storing</li>
            <li>No special keywords needed - just use the equals sign (=)</li>
            <li>The same variable can hold different types of data at different times</li>
            <li>Python automatically figures out the data type for you</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            This makes Python one of the <span className="text-green-400 font-semibold">easiest languages to learn</span>!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-green-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-green-400 mb-2">✅ Remember Information</div>
              <p className="text-slate-300">Store user inputs, calculations, or any data you need later</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-green-400 mb-2">✅ Organize Your Code</div>
              <p className="text-slate-300">Give meaningful names to values instead of using numbers directly</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-green-400 mb-2">✅ Update Values Easily</div>
              <p className="text-slate-300">Change stored data as your program runs (like updating a score)</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-green-400 mb-2">✅ Reuse Data</div>
              <p className="text-slate-300">Use the same value many times without typing it repeatedly</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-green-400">How to Create Variables in Python</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Python makes creating variables <span className="text-green-400 font-semibold">incredibly simple</span>!
            You don't need any special keywords - just write the variable name, an equals sign (=), and the value.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Python automatically understands what type of data you're storing. This is called <span className="text-green-400 font-semibold">implicit typing</span>.
          </p>
        </div>

        <CodeBlock title="Basic Variable Assignment - The Simplest Way">
{`# Just use: variable_name = value
name = "Alice"              # ✅ Creates a text (string) variable
age = 25                    # ✅ Creates a number (integer) variable
height = 5.6                # ✅ Creates a decimal (float) variable
is_active = True            # ✅ Creates a true/false (boolean) variable

# Python knows what type each one is automatically!
print(name)                 # Shows: Alice
print(age)                  # Shows: 25`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">🎯 Python's Simplicity</h4>
          <p className="text-slate-300">
            Unlike other languages, Python doesn't require you to write <code className="bg-slate-900 px-2 py-1 rounded">int age = 25</code> or
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">let name = "Alice"</code>.
            Just write <code className="bg-slate-900 px-2 py-1 rounded ml-1">age = 25</code> and you're done!
          </p>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-green-400 mt-6">Advanced Assignment Techniques</h4>

        <CodeBlock title="Multiple Assignment - Assign Several Variables at Once">
{`# Assign multiple variables in one line
x, y, z = 1, 2, 3           # ✅ x=1, y=2, z=3
name, age = "Alice", 25     # ✅ name="Alice", age=25

# Swap values easily
a = 10
b = 20
a, b = b, a                 # ✅ Now a=20, b=10 (swapped!)

# Assign same value to multiple variables
a = b = c = 0               # ✅ All three are now 0`}
        </CodeBlock>

        <CodeBlock title="Type Hints - Optional but Helpful (Python 3.5+)">
{`# You CAN add type hints for clarity (optional!)
name: str = "Alice"         # ✅ Tells others this should be text
age: int = 25               # ✅ Tells others this should be a number
price: float = 19.99        # ✅ Tells others this should be decimal
is_valid: bool = True       # ✅ Tells others this should be true/false

# Type hints for collections
scores: list[int] = [95, 87, 92]        # ✅ List of integers
person: dict[str, int] = {"age": 25}    # ✅ Dictionary

# Note: These are just hints - Python doesn't enforce them!
# They help other programmers understand your code`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use letters, numbers, and underscores: <code className="bg-slate-900 px-2 py-1 rounded">user_name</code>, <code className="bg-slate-900 px-2 py-1 rounded">age2</code></li>
            <li>✅ Start with a letter or underscore: <code className="bg-slate-900 px-2 py-1 rounded">_private</code>, <code className="bg-slate-900 px-2 py-1 rounded">name</code></li>
            <li>❌ Can't start with a number: <code className="bg-slate-900 px-2 py-1 rounded">2name</code> is invalid</li>
            <li>❌ Can't use Python keywords: <code className="bg-slate-900 px-2 py-1 rounded">if</code>, <code className="bg-slate-900 px-2 py-1 rounded">for</code>, <code className="bg-slate-900 px-2 py-1 rounded">while</code> are reserved</li>
            <li>💡 Use descriptive names: <code className="bg-slate-900 px-2 py-1 rounded">student_count</code> is better than <code className="bg-slate-900 px-2 py-1 rounded">sc</code></li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-green-400">Data Types</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Numeric Types">
{`# int - Unlimited precision
age = 25
big = 12345678901234567890

# float
pi = 3.14159
scientific = 1.23e-4

# complex
z = 3 + 4j
real = z.real`}
          </CodeBlock>
          <CodeBlock title="Text & Boolean">
{`# str
name = "Alice"
multiline = """Multi
line string"""

# bool
is_valid = True

# None
result = None`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-green-400">Collections</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Lists & Tuples">
{`# List (mutable)
fruits = ["apple", "banana"]
fruits.append("orange")

# Tuple (immutable)
point = (10, 20)
x, y = point`}
          </CodeBlock>
          <CodeBlock title="Sets & Dicts">
{`# Set
numbers = {1, 2, 3}
numbers.add(4)

# Dictionary
person = {
    "name": "Alice",
    "age": 25
}
person["job"] = "Dev"`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-green-400">Type Checking</h3>
        <CodeBlock>
{`# type() function
type(42)           # <class 'int'>
type("hello")      # <class 'str'>

# isinstance()
isinstance(42, int)        # True
isinstance("hi", str)      # True

# Type conversion
int("42")          # 42
str(123)           # "123"
list("abc")        # ['a', 'b', 'c']`}
        </CodeBlock>
      </Section>
    </div>
  );
}

function JavaContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Java Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-orange-400 font-semibold">labeled storage box</span> where you can keep information.
            Just like you might label a box "Books" to store your books, in Java you give variables names to identify what they store.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, if you want to store a person's age, you create a variable called <code className="bg-slate-900 px-2 py-1 rounded text-green-400">age</code> and put the number 25 in it.
            The difference with Java is that you must also tell Java what <span className="text-orange-400 font-semibold">type</span> of data you're storing (like integer, text, etc.).
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Static & Strong Typing in Java</h3>
          <p className="text-slate-300 text-lg mb-3">
            Java is <span className="text-orange-400 font-semibold">statically typed</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You must declare the type of data when creating a variable (int, String, etc.)</li>
            <li>Once declared, a variable cannot change its type</li>
            <li>Java checks types at compile time, catching errors before your program runs</li>
            <li>This makes your code safer and helps prevent bugs</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            While this requires more typing than JavaScript or Python, it makes your code <span className="text-orange-400 font-semibold">more predictable and reliable</span>!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-orange-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Store Information</div>
              <p className="text-slate-300">Keep track of user data, calculations, settings, and more</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Type Safety</div>
              <p className="text-slate-300">Java prevents type-related errors before your program runs</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Reuse Values</div>
              <p className="text-slate-300">Use the same value throughout your program without repetition</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Clear Code</div>
              <p className="text-slate-300">Descriptive names make your code easier to understand</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-orange-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            In Java, creating a variable requires <span className="text-orange-400 font-semibold">three parts</span>:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 text-lg mb-4">
            <li><strong className="text-orange-400">Type</strong> - What kind of data (int, String, double, etc.)</li>
            <li><strong className="text-orange-400">Name</strong> - What you'll call it (age, name, price, etc.)</li>
            <li><strong className="text-orange-400">Value</strong> - The initial data to store (optional)</li>
          </ol>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            The basic pattern is: <code className="bg-slate-900 px-3 py-1 rounded text-green-400 text-base">type name = value;</code>
          </p>
        </div>

        <CodeBlock title="Basic Variable Declaration">
{`// Pattern: type name = value;

// Integer (whole numbers)
int age = 25;                    // ✅ Creates an integer variable called 'age' with value 25
int studentCount = 150;          // ✅ Number of students
int temperature = -5;            // ✅ Can be negative

// String (text)
String name = "Alice";           // ✅ Creates a text variable called 'name'
String city = "New York";        // ✅ Text can have spaces
String message = "Hello World!"; // ✅ Can contain any characters

// Double (decimal numbers)
double price = 19.99;            // ✅ For prices, measurements
double pi = 3.14159;             // ✅ Mathematical constants
double temperature = 98.6;       // ✅ Body temperature in Fahrenheit

// Boolean (true/false)
boolean isActive = true;         // ✅ Only two possible values
boolean hasLicense = false;      // ✅ Great for yes/no questions
boolean isStudent = true;        // ✅ Checking conditions`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">⚠️ Important: Semicolons Required!</h4>
          <p className="text-slate-300">
            Unlike JavaScript or Python, Java requires a semicolon <code className="bg-slate-900 px-2 py-1 rounded">;</code> at the end of every statement.
            Forgetting it will cause a compile error!
          </p>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Declaring Without Initial Value</h4>

        <CodeBlock title="Declaration vs Initialization">
{`// You can declare first, assign later
int age;                         // ✅ Declaration only (no value yet)
age = 25;                        // ✅ Assignment (give it a value)

// But you must assign before using
int count;
// System.out.println(count);    // ❌ ERROR - not initialized!

// Better: declare and initialize together
int score = 0;                   // ✅ Always has a known value
System.out.println(score);       // ✅ Safe to use`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Constants with final</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            If you have a value that should <span className="text-orange-400 font-semibold">never change</span>, use the <code className="bg-slate-900 px-2 py-1 rounded text-purple-400">final</code> keyword.
            This is like JavaScript's <code className="bg-slate-900 px-2 py-1 rounded">const</code>.
          </p>
        </div>

        <CodeBlock title="Using final for Constants">
{`// final makes values unchangeable
final double PI = 3.14159;       // ✅ Mathematical constant
final int MAX_USERS = 100;       // ✅ System limit
final String APP_NAME = "MyApp"; // ✅ Application name

// Trying to change causes error
// PI = 3.14;                    // ❌ ERROR - cannot change final variable!

// Convention: Use UPPERCASE for constants
final int SPEED_LIMIT = 65;      // ✅ Easy to identify as constant
final String API_KEY = "abc123"; // ✅ Configuration values`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Type Inference with var (Java 10+)</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Starting with Java 10, you can use <code className="bg-slate-900 px-2 py-1 rounded text-blue-400">var</code> to let Java figure out the type automatically.
            This only works when you initialize the variable immediately.
          </p>
        </div>

        <CodeBlock title="Using var for Type Inference">
{`// Java figures out the type from the value
var message = "Hello";           // ✅ Java knows this is String
var count = 42;                  // ✅ Java knows this is int
var price = 19.99;               // ✅ Java knows this is double
var isActive = true;             // ✅ Java knows this is boolean

// You must initialize when using var
// var age;                      // ❌ ERROR - can't figure out type!
// age = 25;

// Once set, the type is fixed
var number = 10;                 // ✅ number is int
// number = "hello";             // ❌ ERROR - can't change type to String!

// var is just for convenience - the type is still static
var name = "Alice";              // String
// name = 123;                   // ❌ ERROR - still must be String`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Start with letter, $ or _: <code className="bg-slate-900 px-2 py-1 rounded">age</code>, <code className="bg-slate-900 px-2 py-1 rounded">_private</code>, <code className="bg-slate-900 px-2 py-1 rounded">$special</code></li>
            <li>✅ Use camelCase: <code className="bg-slate-900 px-2 py-1 rounded">firstName</code>, <code className="bg-slate-900 px-2 py-1 rounded">totalPrice</code></li>
            <li>✅ Constants use UPPER_CASE: <code className="bg-slate-900 px-2 py-1 rounded">MAX_SIZE</code>, <code className="bg-slate-900 px-2 py-1 rounded">PI</code></li>
            <li>❌ Can't start with number: <code className="bg-slate-900 px-2 py-1 rounded">2age</code> is invalid</li>
            <li>❌ Can't use keywords: <code className="bg-slate-900 px-2 py-1 rounded">int</code>, <code className="bg-slate-900 px-2 py-1 rounded">class</code>, <code className="bg-slate-900 px-2 py-1 rounded">public</code> are reserved</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-orange-400">Primitive Types</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Integer Types">
{`// byte: -128 to 127
byte age = 25;

// short: -32,768 to 32,767
short year = 2024;

// int: 32-bit
int population = 1000000;

// long: 64-bit
long distance = 123456789L;`}
          </CodeBlock>
          <CodeBlock title="Other Types">
{`// float: 32-bit
float price = 19.99f;

// double: 64-bit
double pi = 3.14159;

// char: Unicode
char grade = 'A';

// boolean
boolean isValid = true;`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-orange-400">Collections</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Arrays & Lists">
{`// Array
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[3];

// ArrayList
List<String> fruits = new ArrayList<>();
fruits.add("apple");
fruits.add("banana");
fruits.get(0);`}
          </CodeBlock>
          <CodeBlock title="Map & Set">
{`// HashMap
Map<String, Integer> map = new HashMap<>();
map.put("age", 25);
map.get("age");

// HashSet
Set<Integer> set = new HashSet<>();
set.add(1);
set.contains(1);`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-orange-400">Type Casting</h3>
        <CodeBlock>
{`// Implicit casting (widening)
int i = 100;
long l = i;
double d = l;

// Explicit casting (narrowing)
double x = 9.78;
int y = (int) x;  // 9

// String conversion
String str = String.valueOf(123);
int num = Integer.parseInt("25");`}
        </CodeBlock>
      </Section>
    </div>
  );
}

function CContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          C Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-blue-400 font-semibold">specific spot in memory</span> where you store data.
            Unlike a labeled box, in C you're working directly with the computer's memory - you specify exactly how much space you need and what type of data goes there.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, when you create <code className="bg-slate-900 px-2 py-1 rounded text-green-400">int age = 25</code>, C reserves exactly 4 bytes of memory to store that integer.
            This low-level control makes C extremely powerful but requires more careful programming.
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Static Typing & Manual Memory in C</h3>
          <p className="text-slate-300 text-lg mb-3">
            C is <span className="text-blue-400 font-semibold">statically typed with manual memory management</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You must explicitly declare the type and it cannot change</li>
            <li>No type inference - you always specify the exact type</li>
            <li>You control memory directly - both allocation and deallocation</li>
            <li>Uninitialized variables contain "garbage" values from memory</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            C gives you <span className="text-blue-400 font-semibold">maximum control and performance</span>, but you must manage everything yourself!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Direct Memory Access</div>
              <p className="text-slate-300">Work directly with memory addresses for maximum efficiency</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Performance</div>
              <p className="text-slate-300">No overhead - variables map directly to memory locations</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Hardware Control</div>
              <p className="text-slate-300">Interact directly with hardware and system resources</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Precise Control</div>
              <p className="text-slate-300">Specify exact memory layout and data representation</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-blue-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            In C, declaring a variable follows the pattern: <code className="bg-slate-900 px-3 py-1 rounded text-green-400 text-base">type name = value;</code>
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Unlike higher-level languages, C has <span className="text-blue-400 font-semibold">no automatic initialization</span>.
            If you don't give a variable a value, it will contain whatever random data was already in that memory location!
          </p>
        </div>

        <CodeBlock title="Basic Variable Declaration">
{`// Integer types
int age = 25;                    // ✅ 32-bit integer, stores whole numbers
int count = 0;                   // ✅ Always initialize to avoid garbage values!
int temperature = -10;           // ✅ Can be negative

// Floating point types
float price = 19.99f;            // ✅ 32-bit decimal, note the 'f' suffix
float temperature = 98.6f;       // ✅ Less precise than double
double pi = 3.14159;             // ✅ 64-bit decimal, more precise
double distance = 12345.6789;    // ✅ For scientific calculations

// Character type
char grade = 'A';                // ✅ Single character, use single quotes!
char initial = 'B';              // ✅ Actually stores ASCII value (65 for 'A')
char newline = '\n';             // ✅ Special characters with backslash

// Boolean (before C99, use int)
int isActive = 1;                // ✅ 1 for true
int hasError = 0;                // ✅ 0 for false
// In C99+, can use bool from stdbool.h`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">⚠️ Critical: Always Initialize Variables!</h4>
          <p className="text-slate-300 mb-2">
            Unlike other languages, uninitialized variables in C contain random garbage values:
          </p>
          <div className="bg-slate-900 rounded p-3 text-sm">
            <code className="text-red-400">int x;                    // ❌ Could be any value!</code><br/>
            <code className="text-red-400">printf("%d", x);          // ❌ Prints garbage!</code><br/><br/>
            <code className="text-green-400">int x = 0;                // ✅ Always initialize!</code><br/>
            <code className="text-green-400">printf("%d", x);          // ✅ Prints 0</code>
          </div>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-blue-400 mt-6">Constants in C</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            C has <span className="text-blue-400 font-semibold">two ways</span> to create constants: <code className="bg-slate-900 px-2 py-1 rounded">const</code> variables and <code className="bg-slate-900 px-2 py-1 rounded">#define</code> preprocessor macros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-blue-400/50">
            <div className="text-xl font-bold text-blue-400 mb-3">const</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Type-safe</strong></div>
              <div>✅ Has memory address</div>
              <div>✅ Follows scope rules</div>
              <div>✅ Better for debugging</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-cyan-400/50">
            <div className="text-xl font-bold text-cyan-400 mb-3">#define</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>⚠️ <strong>Text replacement</strong></div>
              <div>⚠️ No type checking</div>
              <div>⚠️ No memory used</div>
              <div>✅ Tradition in C</div>
            </div>
          </div>
        </div>

        <CodeBlock title="Using const and #define">
{`// const - Typed constant variable
const int MAX_USERS = 100;       // ✅ Integer constant with type safety
const double PI = 3.14159;       // ✅ Cannot be changed after initialization
const char NEWLINE = '\n';       // ✅ Character constant

// Trying to change causes error
// MAX_USERS = 200;              // ❌ ERROR - cannot modify const

// #define - Preprocessor macro (text replacement)
#define PI 3.14159                // ✅ Traditional C way
#define MAX_SIZE 100              // ✅ No semicolon for #define!
#define BUFFER_SIZE 1024          // ✅ Often used for array sizes

// #define is replaced before compilation
int array[MAX_SIZE];              // Becomes: int array[100];

// Convention: Use UPPERCASE for both types of constants`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-blue-400 mt-6">Unsigned Types</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            C allows you to specify <code className="bg-slate-900 px-2 py-1 rounded text-purple-400">unsigned</code> versions of integer types,
            which can only store positive numbers but have <span className="text-blue-400 font-semibold">twice the positive range</span>.
          </p>
        </div>

        <CodeBlock title="Signed vs Unsigned">
{`// Signed (default) - can be positive or negative
int temperature = -10;           // ✅ Range: -2,147,483,648 to 2,147,483,647
char letter = -5;                // ✅ Range: -128 to 127

// Unsigned - only positive numbers
unsigned int age = 25;           // ✅ Range: 0 to 4,294,967,295 (double!)
unsigned char byte = 255;        // ✅ Range: 0 to 255
unsigned long big = 1000000;     // ✅ Even larger positive range

// Common use: when you know value is always positive
unsigned int arraySize = 100;    // ✅ Array sizes are always positive
unsigned int count = 0;          // ✅ Counters don't go negative

// Can't store negative in unsigned
unsigned int value = -1;         // ⚠️ Wraps around to huge positive number!`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in C</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use letters, digits, underscore: <code className="bg-slate-900 px-2 py-1 rounded">user_age</code>, <code className="bg-slate-900 px-2 py-1 rounded">count2</code></li>
            <li>✅ Start with letter or underscore: <code className="bg-slate-900 px-2 py-1 rounded">_private</code>, <code className="bg-slate-900 px-2 py-1 rounded">total</code></li>
            <li>✅ C uses snake_case traditionally: <code className="bg-slate-900 px-2 py-1 rounded">first_name</code>, <code className="bg-slate-900 px-2 py-1 rounded">max_value</code></li>
            <li>✅ Constants are UPPER_CASE: <code className="bg-slate-900 px-2 py-1 rounded">MAX_SIZE</code>, <code className="bg-slate-900 px-2 py-1 rounded">PI</code></li>
            <li>❌ Can't start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can't use keywords: <code className="bg-slate-900 px-2 py-1 rounded">int</code>, <code className="bg-slate-900 px-2 py-1 rounded">return</code>, <code className="bg-slate-900 px-2 py-1 rounded">while</code> are reserved</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Data Types</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Integer Types">
{`// char: -128 to 127
char letter = 'A';
unsigned char byte = 255;

// short: -32,768 to 32,767
short year = 2024;

// int: 32-bit
int count = 1000;

// long: system dependent
long big = 1234567890L;`}
          </CodeBlock>
          <CodeBlock title="Floating & Sizes">
{`// float: 32-bit
float price = 19.99f;

// double: 64-bit
double pi = 3.14159;

// sizeof operator
sizeof(char);   // 1
sizeof(int);    // 4
sizeof(double); // 8`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Arrays & Strings</h3>
        <CodeBlock>
{`// Arrays
int numbers[5] = {1, 2, 3, 4, 5};
int matrix[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};

// Strings (char arrays)
char name[] = "Alice";
char greeting[20] = "Hello";

// String functions
strlen(name);       // Length
strcpy(dest, src);  // Copy
strcat(dest, src);  // Concatenate`}
        </CodeBlock>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Pointers</h3>
        <CodeBlock>
{`// Pointer declaration
int x = 42;
int *ptr = &x;    // Pointer to x

// Dereferencing
int value = *ptr; // 42
*ptr = 100;       // x is now 100

// Dynamic memory
int *dynamic = (int*)malloc(5 * sizeof(int));
free(dynamic);    // Must free!

// Null pointer
int *null_ptr = NULL;`}
        </CodeBlock>
      </Section>
    </div>
  );
}

function CppContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
          C++ Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-indigo-400 font-semibold">named memory location with a type</span>.
            C++ combines the low-level control of C with modern features like automatic type deduction, making it both powerful and convenient.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, you can write <code className="bg-slate-900 px-2 py-1 rounded text-green-400">int age = 25</code> (explicit type) or
            <code className="bg-slate-900 px-2 py-1 rounded text-green-400 ml-1">auto age = 25</code> (automatic deduction).
            C++ gives you the flexibility to choose!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Static Typing with Modern Features</h3>
          <p className="text-slate-300 text-lg mb-3">
            C++ is <span className="text-indigo-400 font-semibold">statically typed with type inference</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Types are checked at compile time for safety</li>
            <li>You can explicitly declare types OR use 'auto' for inference</li>
            <li>Once declared, types cannot change (but you can use references)</li>
            <li>Modern C++ (C++11+) offers many convenient features</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            C++ offers the <span className="text-indigo-400 font-semibold">best of both worlds</span> - performance and modern convenience!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-indigo-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-indigo-400 mb-2">✅ Performance</div>
              <p className="text-slate-300">C-like performance with modern safety features</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-indigo-400 mb-2">✅ Type Safety</div>
              <p className="text-slate-300">Catch errors at compile time before runtime</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-indigo-400 mb-2">✅ Flexibility</div>
              <p className="text-slate-300">Choose explicit types or use auto for convenience</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-indigo-400 mb-2">✅ Modern Features</div>
              <p className="text-slate-300">Smart pointers, references, and STL containers</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-indigo-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            C++ offers <span className="text-indigo-400 font-semibold">multiple ways</span> to declare variables:
            traditional explicit typing (like C) or modern type inference with <code className="bg-slate-900 px-2 py-1 rounded">auto</code>.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Both are equally valid - use explicit types when clarity matters, and <code className="bg-slate-900 px-2 py-1 rounded">auto</code> when the type is obvious from context.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-indigo-400/50">
            <div className="text-xl font-bold text-indigo-400 mb-3">Explicit Types</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Clear & Explicit</strong></div>
              <div>✅ Better for documentation</div>
              <div>✅ Traditional C++ style</div>
              <div>✅ Required in some cases</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-blue-400/50">
            <div className="text-xl font-bold text-blue-400 mb-3">auto (Modern)</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Convenient & Concise</strong></div>
              <div>✅ Compiler deduces type</div>
              <div>✅ Modern C++11+ style</div>
              <div>✅ Great for complex types</div>
            </div>
          </div>
        </div>

        <CodeBlock title="Explicit Type Declarations (Traditional)">
{`// Basic types - explicit and clear
int age = 25;                    // ✅ Integer - whole numbers
double price = 19.99;            // ✅ Double - decimal numbers
bool isActive = true;            // ✅ Boolean - true/false (not int!)
char grade = 'A';                // ✅ Character - single letter
std::string name = "Alice";      // ✅ String - text (requires #include <string>)

// Multiple declarations
int x = 10, y = 20, z = 30;      // ✅ Declare multiple variables at once

// Uninitialized (contains garbage like C)
int count;                       // ⚠️ Contains random value!
count = 0;                       // ✅ Initialize before using

// Better: Always initialize
int score = 0;                   // ✅ Explicit default value`}
        </CodeBlock>

        <CodeBlock title="auto - Type Inference (Modern C++11+)">
{`// auto lets C++ figure out the type automatically
auto message = "Hello";          // ✅ Compiler knows this is const char* (or string)
auto count = 42;                 // ✅ Compiler knows this is int
auto price = 19.99;              // ✅ Compiler knows this is double
auto isValid = true;             // ✅ Compiler knows this is bool

// Very useful for complex types
auto numbers = std::vector<int>{1, 2, 3};  // ✅ Shorter than full type!
auto person = std::make_pair("Alice", 25); // ✅ No need to write pair<string, int>

// Type is still fixed after deduction
auto value = 10;                 // ✅ value is int
// value = "hello";              // ❌ ERROR - can't change to string!

// Must initialize when using auto
// auto x;                       // ❌ ERROR - can't deduce type without value!`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">💡 When to Use auto vs Explicit Types?</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use <strong>explicit types</strong> when: the type is important for understanding, in function parameters, or for clarity</li>
            <li>✅ Use <strong>auto</strong> when: the type is obvious from the value, working with complex template types, or iterators</li>
            <li>💡 Both are valid modern C++ - choose what makes your code clearest!</li>
          </ul>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-indigo-400 mt-6">Constants: const and constexpr</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            C++ has <span className="text-indigo-400 font-semibold">two types of constants</span>:
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">const</code> (runtime constant) and
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">constexpr</code> (compile-time constant).
          </p>
        </div>

        <CodeBlock title="const vs constexpr">
{`// const - Runtime constant (value known at runtime)
const double PI = 3.14159;       // ✅ Cannot be changed after initialization
const int maxUsers = getUserLimit(); // ✅ Can call function to initialize
const std::string name = "Alice"; // ✅ Runtime initialization OK

// Trying to modify causes error
// PI = 3.14;                    // ❌ ERROR - cannot modify const!

// constexpr - Compile-time constant (must be known at compile time)
constexpr int MAX_SIZE = 100;    // ✅ Value known at compile time
constexpr double TAU = 2 * 3.14159; // ✅ Can use expressions
constexpr int arraySize = 50;    // ✅ Can use for array sizes

// constexpr requires value at compile time
// constexpr int users = getUserLimit(); // ❌ ERROR - function result not compile-time

// Use constexpr when value is truly constant and known at compile time
int array[MAX_SIZE];              // ✅ Works because MAX_SIZE is constexpr

// Convention: UPPERCASE for constants
const int SPEED_LIMIT = 65;
constexpr int MAX_ATTEMPTS = 3;`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-indigo-400 mt-6">References and decltype</h4>

        <CodeBlock title="References and Type Deduction">
{`// References - Alias to another variable
int age = 25;
int& ageRef = age;               // ✅ ageRef is another name for age
ageRef = 30;                     // ✅ Changes age to 30!
std::cout << age;                // Shows: 30

// const reference - Can't modify through reference
const int& constRef = age;       // ✅ Read-only reference
// constRef = 35;                // ❌ ERROR - can't modify

// decltype - Get the type of an expression
int x = 10;
decltype(x) y = 20;              // ✅ y has same type as x (int)

auto value = 42;
decltype(value) another = 100;   // ✅ another is same type as value

// Useful for generic programming
decltype(x + y) result = x + y;  // ✅ result has type of (x + y)`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in C++</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use letters, digits, underscore: <code className="bg-slate-900 px-2 py-1 rounded">userAge</code>, <code className="bg-slate-900 px-2 py-1 rounded">count2</code></li>
            <li>✅ C++ uses camelCase or snake_case: <code className="bg-slate-900 px-2 py-1 rounded">firstName</code> or <code className="bg-slate-900 px-2 py-1 rounded">first_name</code></li>
            <li>✅ Constants use UPPER_CASE: <code className="bg-slate-900 px-2 py-1 rounded">MAX_SIZE</code>, <code className="bg-slate-900 px-2 py-1 rounded">PI</code></li>
            <li>❌ Can't start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can't use keywords: <code className="bg-slate-900 px-2 py-1 rounded">int</code>, <code className="bg-slate-900 px-2 py-1 rounded">class</code>, <code className="bg-slate-900 px-2 py-1 rounded">auto</code> are reserved</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-indigo-400">Fundamental Types</h3>
        <CodeBlock>
{`// Fixed-width integers
#include <cstdint>
int8_t tiny = 127;
int32_t medium = 2147483647;
uint32_t positive = 4294967295U;

// Floating point
float f = 3.14f;
double d = 3.14159;

// Boolean & Character
bool isValid = true;
char c = 'A';
wchar_t wide = L'あ';`}
        </CodeBlock>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-indigo-400">STL Containers</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Vectors & Arrays">
{`// vector - Dynamic array
std::vector<int> vec = {1, 2, 3};
vec.push_back(4);
vec[0] = 10;

// array - Fixed size
std::array<int, 5> arr = {1,2,3,4,5};

// list - Linked list
std::list<int> lst = {1, 2, 3};
lst.push_front(0);`}
          </CodeBlock>
          <CodeBlock title="Map & Set">
{`// map - Ordered key-value
std::map<std::string, int> ages;
ages["Alice"] = 25;

// set - Unique ordered
std::set<int> nums = {1, 2, 3};
nums.insert(4);

// unordered_map - Hash map
std::unordered_map<std::string, int> dict;
dict["key"] = 42;`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-indigo-400">Smart Pointers</h3>
        <CodeBlock>
{`#include <memory>

// unique_ptr - Exclusive ownership
std::unique_ptr<int> up = std::make_unique<int>(42);

// shared_ptr - Shared ownership
std::shared_ptr<int> sp1 = std::make_shared<int>(10);
std::shared_ptr<int> sp2 = sp1;  // Shared

// weak_ptr - Non-owning reference
std::weak_ptr<int> wp = sp1;

// References
int x = 42;
int& ref = x;  // Alias to x`}
        </CodeBlock>
      </Section>
    </div>
  );
}

function TypeScriptContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          TypeScript Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-blue-400 font-semibold">labeled container with a type label</span>.
            TypeScript is JavaScript with type annotations - it's like adding labels to your boxes so you know exactly what should go in them!
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">let age: number = 25</code> tells TypeScript "this box called age can only hold numbers".
            This catches mistakes before your code even runs!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Static Typing on Top of JavaScript</h3>
          <p className="text-slate-300 text-lg mb-3">
            TypeScript is <span className="text-blue-400 font-semibold">JavaScript with optional static types</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You can add type annotations to catch errors early</li>
            <li>TypeScript infers types automatically when you don't specify them</li>
            <li>All JavaScript code is valid TypeScript code</li>
            <li>Types are checked during development, then compiled to regular JavaScript</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            Get the <span className="text-blue-400 font-semibold">flexibility of JavaScript with the safety of static typing</span>!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Type Safety</div>
              <p className="text-slate-300">Catch type errors before running your code</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Better Tooling</div>
              <p className="text-slate-300">Get autocomplete and inline documentation</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Self-Documenting</div>
              <p className="text-slate-300">Types make your code easier to understand</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ JavaScript Compatible</div>
              <p className="text-slate-300">Use existing JavaScript libraries and knowledge</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-blue-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            TypeScript uses the <span className="text-blue-400 font-semibold">same keywords as JavaScript</span> (let, const, var),
            but you can optionally add <span className="text-blue-400 font-semibold">type annotations</span> with a colon and type name.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Pattern: <code className="bg-slate-900 px-3 py-1 rounded text-green-400 text-base">let name: type = value;</code> or
            just <code className="bg-slate-900 px-3 py-1 rounded text-green-400 text-base ml-1">let name = value;</code> (TypeScript infers the type)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-blue-400/50">
            <div className="text-xl font-bold text-blue-400 mb-3">Type Annotations</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Explicit & Clear</strong></div>
              <div>✅ Catch errors immediately</div>
              <div>✅ Better documentation</div>
              <div>✅ Required in some cases</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-indigo-400/50">
            <div className="text-xl font-bold text-indigo-400 mb-3">Type Inference</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Quick & Convenient</strong></div>
              <div>✅ TypeScript figures it out</div>
              <div>✅ Less typing needed</div>
              <div>✅ Still type-safe!</div>
            </div>
          </div>
        </div>

        <CodeBlock title="Explicit Type Annotations">
{`// Add types with : after the variable name
let age: number = 25;            // ✅ Explicitly say this is a number
let name: string = "Alice";      // ✅ This is text
let isActive: boolean = true;    // ✅ This is true/false
let price: number = 19.99;       // ✅ Numbers can be decimals too

// TypeScript prevents wrong types
let score: number = 100;
// score = "high";               // ❌ ERROR - can't assign string to number!

// const works the same way
const PI: number = 3.14159;      // ✅ Constant with type
const MAX_USERS: number = 100;   // ✅ Cannot change after initialization

// Arrays with type annotations
let numbers: number[] = [1, 2, 3];           // ✅ Array of numbers
let names: string[] = ["Alice", "Bob"];      // ✅ Array of strings
let mixed: (number | string)[] = [1, "two"]; // ✅ Array of numbers OR strings`}
        </CodeBlock>

        <CodeBlock title="Type Inference (TypeScript Figures It Out)">
{`// TypeScript can infer types from values
let count = 42;                  // ✅ TypeScript knows this is number
let message = "Hello";           // ✅ TypeScript knows this is string
let isValid = true;              // ✅ TypeScript knows this is boolean

// Inferred types are still enforced!
let value = 10;                  // ✅ Inferred as number
// value = "hello";              // ❌ ERROR - still must be number!

// Works with const too
const userName = "Alice";        // ✅ Inferred as string
const maxAttempts = 3;           // ✅ Inferred as number

// Arrays
let fruits = ["apple", "banana"]; // ✅ Inferred as string[]
let scores = [95, 87, 92];        // ✅ Inferred as number[]

// Best practice: Let TypeScript infer when obvious, annotate when not
let obvious = 100;               // ✅ No annotation needed
let notObvious: number = getUserAge(); // ✅ Annotate for clarity`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">💡 When to Add Type Annotations?</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ <strong>Add types</strong> when: declaring without initializing, function parameters, or when type isn't obvious</li>
            <li>✅ <strong>Let TypeScript infer</strong> when: the type is clear from the value (like <code className="bg-slate-900 px-2 py-1 rounded">let x = 5</code>)</li>
            <li>💡 Both approaches are valid - choose what makes your code clearest!</li>
          </ul>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-blue-400 mt-6">Union Types - Multiple Possible Types</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Sometimes a variable can hold <span className="text-blue-400 font-semibold">different types</span>.
            Use the <code className="bg-slate-900 px-2 py-1 rounded">|</code> symbol to say "this OR that type".
          </p>
        </div>

        <CodeBlock title="Union Types">
{`// Variable can be number OR string
let value: number | string;      // ✅ Declare with union type
value = 42;                      // ✅ OK - number is allowed
value = "hello";                 // ✅ OK - string is allowed
// value = true;                 // ❌ ERROR - boolean not in union!

// Useful for function returns
let result: string | null;       // ✅ Can be string or null
result = "success";              // ✅ OK
result = null;                   // ✅ OK

// Arrays with mixed types
let mixed: (number | string)[] = [1, "two", 3, "four"]; // ✅ Each element can be number or string

// Common pattern: value or undefined
let optionalName: string | undefined;
optionalName = "Alice";          // ✅ OK
optionalName = undefined;        // ✅ OK`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-blue-400 mt-6">Special TypeScript Types</h4>

        <CodeBlock title="any, unknown, and never">
{`// any - Turn off type checking (use sparingly!)
let anything: any = 42;          // ✅ Can be anything
anything = "hello";              // ✅ OK
anything = true;                 // ✅ OK - but defeats purpose of TypeScript!

// unknown - Safer than any
let uncertain: unknown = 42;     // ✅ Can be anything
// let num: number = uncertain;  // ❌ ERROR - must check type first!
if (typeof uncertain === "number") {
    let num: number = uncertain; // ✅ OK after type check
}

// void - For functions that don't return
let nothing: void = undefined;   // ✅ Only undefined or null

// never - For things that never happen
function throwError(): never {   // ✅ Function never returns
    throw new Error("Oops!");
}

// Literal types - Exact values
let direction: "north" | "south" | "east" | "west";
direction = "north";             // ✅ OK
// direction = "up";             // ❌ ERROR - not in allowed values!`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in TypeScript</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Same rules as JavaScript: letters, digits, $, _ are allowed</li>
            <li>✅ Use camelCase: <code className="bg-slate-900 px-2 py-1 rounded">firstName</code>, <code className="bg-slate-900 px-2 py-1 rounded">totalPrice</code></li>
            <li>✅ Constants use UPPER_CASE: <code className="bg-slate-900 px-2 py-1 rounded">MAX_SIZE</code>, <code className="bg-slate-900 px-2 py-1 rounded">API_KEY</code></li>
            <li>❌ Can't start with number: <code className="bg-slate-900 px-2 py-1 rounded">2name</code> is invalid</li>
            <li>❌ Can't use reserved words: <code className="bg-slate-900 px-2 py-1 rounded">let</code>, <code className="bg-slate-900 px-2 py-1 rounded">const</code>, <code className="bg-slate-900 px-2 py-1 rounded">type</code> are reserved</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Type System</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Basic Types">
{`// Primitives
let str: string = "Alice";
let num: number = 42;
let bool: boolean = true;
let big: bigint = 100n;

// Special types
let any: any = 42;
let unknown: unknown = 42;
let never: never;
let void_func: void;`}
          </CodeBlock>
          <CodeBlock title="Arrays & Tuples">
{`// Arrays
let nums: number[] = [1, 2, 3];
let strs: Array<string> = ["a"];

// Tuples
let tuple: [string, number] = ["Alice", 25];

// Named tuples
let user: [name: string, age: number] = ["Alice", 25];`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Objects & Interfaces</h3>
        <CodeBlock>
{`// Object literal type
let person: { name: string; age: number } = {
    name: "Alice",
    age: 25
};

// Interface
interface User {
    name: string;
    age: number;
    email?: string;  // Optional
    readonly id: number;
}

// Type alias
type Point = { x: number; y: number };`}
        </CodeBlock>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Advanced Types</h3>
        <CodeBlock>
{`// Union & Intersection
type ID = string | number;
type Staff = Person & Employee;

// Generics
function first<T>(arr: T[]): T {
    return arr[0];
}

// Utility types
type Partial<T>;    // All optional
type Required<T>;   // All required
type Readonly<T>;   // All readonly
type Pick<T, K>;    // Select props
type Omit<T, K>;    // Exclude props`}
        </CodeBlock>
      </Section>
    </div>
  );
}

function GoContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Go Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-cyan-400 font-semibold">simple, labeled storage space</span>.
            Go believes in keeping things simple and straightforward - no fancy tricks, just clean, readable code.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">name := "Alice"</code> creates a variable in the simplest way possible.
            Go's motto is: do more with less!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Simple Static Typing</h3>
          <p className="text-slate-300 text-lg mb-3">
            Go is <span className="text-cyan-400 font-semibold">statically typed with minimal syntax</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Types are checked at compile time for safety</li>
            <li>Type inference makes declarations concise</li>
            <li>Simple syntax - easy to read and write</li>
            <li>Fast compilation and execution</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            Go prioritizes <span className="text-cyan-400 font-semibold">simplicity and clarity</span> over complex features!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-cyan-400 mb-2">✅ Simple Syntax</div>
              <p className="text-slate-300">Easy to learn and read - no complexity</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-cyan-400 mb-2">✅ Type Safety</div>
              <p className="text-slate-300">Catch errors at compile time</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-cyan-400 mb-2">✅ Fast Performance</div>
              <p className="text-slate-300">Compiles to efficient machine code</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-cyan-400 mb-2">✅ Clear Code</div>
              <p className="text-slate-300">One obvious way to do things</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-cyan-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Go has <span className="text-cyan-400 font-semibold">two main ways</span> to declare variables:
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">var</code> (formal) and <code className="bg-slate-900 px-2 py-1 rounded">:=</code> (short, most common).
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Most Go programmers use <code className="bg-slate-900 px-2 py-1 rounded">:=</code> inside functions for its simplicity!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-cyan-400/50">
            <div className="text-xl font-bold text-cyan-400 mb-3">:= Short Declaration</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Most Common</strong></div>
              <div>✅ Super concise</div>
              <div>✅ Type inferred automatically</div>
              <div>⚠️ Only inside functions</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-blue-400/50">
            <div className="text-xl font-bold text-blue-400 mb-3">var Keyword</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>More Formal</strong></div>
              <div>✅ Works anywhere</div>
              <div>✅ Can specify type explicitly</div>
              <div>✅ For package-level variables</div>
            </div>
          </div>
        </div>

        <CodeBlock title="Short Declaration := (Most Popular!)">
{`// Inside functions only - type is inferred
name := "Alice"                  // ✅ Creates string variable
age := 25                        // ✅ Creates int variable
price := 19.99                   // ✅ Creates float64 variable
isActive := true                 // ✅ Creates bool variable

// Multiple variables at once
x, y := 10, 20                   // ✅ Both declared and initialized
firstName, lastName := "Alice", "Smith" // ✅ Multiple strings

// Swap values easily
a, b := 1, 2
a, b = b, a                      // ✅ Now a=2, b=1 (swapped!)

// Note: Can't use := outside of functions!
// name := "Bob"                 // ❌ ERROR at package level`}
        </CodeBlock>

        <CodeBlock title="var Keyword (Formal Style)">
{`// Explicit type declaration
var age int = 25                 // ✅ Type specified explicitly
var name string = "Alice"        // ✅ Clear what type it is
var price float64 = 19.99        // ✅ Using float64 for decimals

// Type inference with var
var count = 42                   // ✅ Go infers int
var message = "Hello"            // ✅ Go infers string

// Declare without initializing (gets zero value)
var number int                   // ✅ Automatically set to 0
var text string                  // ✅ Automatically set to ""
var flag bool                    // ✅ Automatically set to false

// Block declaration for multiple variables
var (
    host = "localhost"
    port = 8080
    debug = true
)`}
        </CodeBlock>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-2">💡 Zero Values in Go</h4>
          <p className="text-slate-300 mb-2">
            Unlike C, Go automatically initializes uninitialized variables to <span className="text-cyan-400 font-semibold">"zero values"</span>:
          </p>
          <div className="bg-slate-900 rounded p-3 text-sm space-y-1">
            <div><code className="text-green-400">var num int      // 0 (not garbage!)</code></div>
            <div><code className="text-green-400">var text string  // "" (empty string)</code></div>
            <div><code className="text-green-400">var flag bool    // false</code></div>
            <div><code className="text-green-400">var ptr *int     // nil (null pointer)</code></div>
          </div>
          <p className="text-slate-300 mt-2">
            This prevents bugs from uninitialized variables!
          </p>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-cyan-400 mt-6">Constants with const</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Use <code className="bg-slate-900 px-2 py-1 rounded text-purple-400">const</code> for values that never change.
            Constants must be assigned at declaration and cannot use <code className="bg-slate-900 px-2 py-1 rounded">:=</code>.
          </p>
        </div>

        <CodeBlock title="Constants in Go">
{`// Constants - must be compile-time values
const PI = 3.14159               // ✅ Mathematical constant
const MAX_USERS = 100            // ✅ System limit
const APP_NAME = "MyApp"         // ✅ Application name

// Can't change constants
// PI = 3.14                     // ❌ ERROR - constants are immutable!

// Type can be specified
const PORT int = 8080            // ✅ Explicit type
const TIMEOUT float64 = 30.0     // ✅ Explicit type

// Multiple constants
const (
    StatusOK = 200
    StatusNotFound = 404
    StatusError = 500
)

// Constants can use expressions
const HOURS_IN_DAY = 24
const MINUTES_IN_DAY = HOURS_IN_DAY * 60  // ✅ Calculated at compile time`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-cyan-400 mt-6">Type Declaration</h4>

        <CodeBlock title="Explicit vs Inferred Types">
{`// Explicit types (clear but verbose)
var age int = 25                 // ✅ Clearly an int
var price float64 = 19.99        // ✅ Clearly a float64

// Type inference (common in Go)
age := 25                        // ✅ Go infers int
price := 19.99                   // ✅ Go infers float64

// When types matter, be explicit
var small int8 = 127             // ✅ Specifically 8-bit int
var big int64 = 1000000          // ✅ Specifically 64-bit int
var precise float32 = 3.14       // ✅ 32-bit float

// Multiple variables with same type
var x, y, z int = 1, 2, 3        // ✅ All are int
var a, b = 10, "hello"           // ✅ Different types OK`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in Go</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use letters, digits, underscore: <code className="bg-slate-900 px-2 py-1 rounded">userName</code>, <code className="bg-slate-900 px-2 py-1 rounded">count2</code></li>
            <li>✅ camelCase for private: <code className="bg-slate-900 px-2 py-1 rounded">firstName</code>, <code className="bg-slate-900 px-2 py-1 rounded">totalPrice</code></li>
            <li>✅ PascalCase for public: <code className="bg-slate-900 px-2 py-1 rounded">UserName</code> (capital = exported!)</li>
            <li>✅ UPPER_CASE for constants: <code className="bg-slate-900 px-2 py-1 rounded">MAX_SIZE</code>, <code className="bg-slate-900 px-2 py-1 rounded">PI</code></li>
            <li>❌ Can't start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can't use keywords: <code className="bg-slate-900 px-2 py-1 rounded">var</code>, <code className="bg-slate-900 px-2 py-1 rounded">func</code>, <code className="bg-slate-900 px-2 py-1 rounded">package</code> are reserved</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Basic Types</h3>
        <CodeBlock>
{`// Integer types
var i8 int8 = 127
var i32 int32 = 2147483647
var u8 uint8 = 255

// Platform dependent
var i int       // 32 or 64-bit
var u uint

// Floating point
var f32 float32 = 3.14
var f64 float64 = 3.14159

// Boolean & String
var isActive bool = true
var name string = "Alice"

// Byte & Rune
var b byte = 'A'         // uint8
var r rune = '世'         // int32 (Unicode)`}
        </CodeBlock>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Slices & Maps</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Arrays & Slices">
{`// Array - Fixed size
var arr [5]int = [5]int{1, 2, 3, 4, 5}

// Slice - Dynamic
nums := []int{1, 2, 3}
nums = append(nums, 4, 5)

// make()
slice := make([]int, 5, 10)

// Slice operations
sub := nums[1:3]
length := len(nums)
capacity := cap(nums)`}
          </CodeBlock>
          <CodeBlock title="Maps">
{`// Map declaration
scores := map[string]int{
    "Alice": 95,
    "Bob":   87,
}

// Operations
scores["Charlie"] = 92
delete(scores, "Bob")

// Check existence
value, exists := scores["Alice"]
if exists {
    fmt.Println(value)
}`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Structs & Interfaces</h3>
        <CodeBlock>
{`// Struct
type Person struct {
    Name string
    Age  int
}

p := Person{
    Name: "Alice",
    Age:  25,
}

// Pointers
var ptr *int
x := 42
ptr = &x
*ptr = 100

// Interface{}
var any interface{}
any = 42
any = "hello"`}
        </CodeBlock>
      </Section>
    </div>
  );
}

function RustContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          Rust Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-orange-400 font-semibold">safe, controlled storage location</span>.
            Rust takes memory safety seriously - every variable has an owner, and Rust tracks who can read or modify it at all times.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">let age = 25</code> creates an <span className="text-orange-400 font-semibold">immutable</span> variable by default.
            To change it, you must explicitly say <code className="bg-slate-900 px-2 py-1 rounded text-green-400">let mut age = 25</code>. Safety first!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Memory Safety Without Garbage Collection</h3>
          <p className="text-slate-300 text-lg mb-3">
            Rust is <span className="text-orange-400 font-semibold">statically typed with ownership rules</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Variables are immutable by default - explicit mut required to change</li>
            <li>Ownership system prevents memory bugs at compile time</li>
            <li>No garbage collector needed - yet memory is always safe</li>
            <li>Type inference makes code concise while keeping safety</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            Rust guarantees <span className="text-orange-400 font-semibold">memory safety and thread safety</span> without runtime overhead!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-orange-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Memory Safety</div>
              <p className="text-slate-300">Catch memory bugs at compile time, not runtime</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Zero-Cost Abstractions</div>
              <p className="text-slate-300">High-level features with no runtime overhead</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Fearless Concurrency</div>
              <p className="text-slate-300">Safe multi-threading guaranteed by compiler</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ No Garbage Collection</div>
              <p className="text-slate-300">Predictable performance without GC pauses</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-orange-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Rust variables are <span className="text-orange-400 font-semibold">immutable by default</span>.
            This is intentional - it prevents accidental modifications and makes your code safer and easier to reason about.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Use <code className="bg-slate-900 px-2 py-1 rounded">let</code> for immutable variables and
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">let mut</code> when you need to modify them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-orange-400/50">
            <div className="text-xl font-bold text-orange-400 mb-3">let (Immutable)</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Default & Safe</strong></div>
              <div>✅ Cannot be changed</div>
              <div>✅ Prevents bugs</div>
              <div>✅ Most common</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-amber-400/50">
            <div className="text-xl font-bold text-amber-400 mb-3">let mut (Mutable)</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Explicit Changes</strong></div>
              <div>✅ Can be modified</div>
              <div>✅ Clear intent</div>
              <div>⚠️ Use when needed</div>
            </div>
          </div>
        </div>

        <CodeBlock title="Immutable Variables (Default)">
{`// let creates an immutable variable
let age = 25;                    // ✅ Cannot be changed
let name = "Alice";              // ✅ Type inferred as &str
let price = 19.99;               // ✅ Type inferred as f64
let is_active = true;            // ✅ Type inferred as bool

// Trying to change causes error
// age = 26;                     // ❌ ERROR - cannot assign twice to immutable variable!

// With explicit type annotations
let count: i32 = 42;             // ✅ Explicitly an i32 (32-bit integer)
let pi: f64 = 3.14159;           // ✅ Explicitly an f64 (64-bit float)

// This is intentional - immutability prevents bugs!
let score = 100;
// score = 95;                   // ❌ ERROR - compiler protects you from accidents`}
        </CodeBlock>

        <CodeBlock title="Mutable Variables (Explicit)">
{`// Add 'mut' keyword to allow changes
let mut counter = 0;             // ✅ Mutable variable
counter = counter + 1;           // ✅ OK - we explicitly said mut
counter += 1;                    // ✅ OK - can modify

let mut name = "Alice";          // ✅ Mutable string slice
name = "Bob";                    // ✅ OK - can reassign

// Mutable with type annotation
let mut score: i32 = 100;        // ✅ Mutable i32
score = 95;                      // ✅ OK

// Use mut sparingly - only when needed
let mut total = 0;               // ✅ Good - clearly needs to change
for i in 1..=10 {
    total += i;                  // ✅ Accumulating sum
}

// Rust makes mutability explicit and intentional!`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">💡 Why Immutable by Default?</h4>
          <p className="text-slate-300 mb-2">
            Rust's immutable-by-default approach has big benefits:
          </p>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Prevents accidental modifications</li>
            <li>✅ Makes code easier to reason about</li>
            <li>✅ Enables compiler optimizations</li>
            <li>✅ Safe concurrent access (multiple readers allowed)</li>
            <li>💡 When you need mutability, <code className="bg-slate-900 px-2 py-1 rounded">mut</code> makes intent clear!</li>
          </ul>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Constants with const</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            <code className="bg-slate-900 px-2 py-1 rounded text-purple-400">const</code> is for values that are
            <span className="text-orange-400 font-semibold"> always constant</span> and known at compile time.
            Unlike <code className="bg-slate-900 px-2 py-1 rounded">let</code>, you <span className="text-orange-400 font-semibold">must</span> specify the type.
          </p>
        </div>

        <CodeBlock title="Constants in Rust">
{`// const requires type annotation and compile-time value
const PI: f64 = 3.14159;         // ✅ Global constant
const MAX_USERS: u32 = 100_000;  // ✅ Underscores for readability
const APP_NAME: &str = "MyApp";  // ✅ String constant

// Constants can use expressions
const SECONDS_IN_HOUR: u32 = 60 * 60;           // ✅ Calculated at compile time
const KILOBYTE: usize = 1024;                   // ✅ usize for sizes

// Can't use const for runtime values
// const current_time = get_time();  // ❌ ERROR - must be compile-time!

// Convention: SCREAMING_SNAKE_CASE for constants
const MAX_CONNECTIONS: u32 = 100;
const DEFAULT_PORT: u16 = 8080;`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Shadowing - Reusing Variable Names</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Rust allows <span className="text-orange-400 font-semibold">shadowing</span> - declaring a new variable with the same name.
            This creates a <span className="text-orange-400 font-semibold">new variable</span>, not modifying the old one!
          </p>
        </div>

        <CodeBlock title="Variable Shadowing">
{`// Shadowing - create new variable with same name
let x = 5;                       // ✅ x is 5
let x = x + 1;                   // ✅ New x is 6 (shadows first x)
let x = x * 2;                   // ✅ New x is 12 (shadows second x)
println!("{}", x);               // Shows: 12

// Can change type when shadowing!
let spaces = "   ";              // ✅ spaces is &str
let spaces = spaces.len();       // ✅ Now spaces is usize (different type!)

// This is different from mut!
let mut count = 5;               // ✅ Mutable variable
count = count + 1;               // ✅ Same variable, modified

// vs shadowing
let count = 5;                   // ✅ Immutable
let count = count + 1;           // ✅ New variable, old one inaccessible

// Shadowing is useful for transformations
let input = "42";                // ✅ String input
let input: i32 = input.parse().unwrap(); // ✅ Parse to number (shadows)`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Type Annotations</h4>

        <CodeBlock title="Explicit Types">
{`// Rust has powerful type inference
let age = 25;                    // ✅ Inferred as i32
let price = 19.99;               // ✅ Inferred as f64

// But you can be explicit when needed
let age: i32 = 25;               // ✅ Explicitly i32
let small: i8 = 127;             // ✅ 8-bit integer
let big: i64 = 1_000_000;        // ✅ 64-bit integer

// Unsigned types (positive only)
let count: u32 = 100;            // ✅ Unsigned 32-bit
let byte: u8 = 255;              // ✅ 0 to 255

// Floating point
let pi: f64 = 3.14159;           // ✅ 64-bit float (default)
let small_pi: f32 = 3.14;        // ✅ 32-bit float

// Multiple variable declaration
let (x, y) = (10, 20);           // ✅ Destructuring
let (name, age): (&str, i32) = ("Alice", 25); // ✅ With types`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in Rust</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use snake_case for variables: <code className="bg-slate-900 px-2 py-1 rounded">user_name</code>, <code className="bg-slate-900 px-2 py-1 rounded">total_count</code></li>
            <li>✅ SCREAMING_SNAKE_CASE for constants: <code className="bg-slate-900 px-2 py-1 rounded">MAX_SIZE</code>, <code className="bg-slate-900 px-2 py-1 rounded">PI</code></li>
            <li>✅ Can start with _ to mark unused: <code className="bg-slate-900 px-2 py-1 rounded">_unused</code></li>
            <li>❌ Can't start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can't use keywords: <code className="bg-slate-900 px-2 py-1 rounded">let</code>, <code className="bg-slate-900 px-2 py-1 rounded">mut</code>, <code className="bg-slate-900 px-2 py-1 rounded">fn</code> are reserved</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-orange-400">Scalar Types</h3>
        <CodeBlock>
{`// Signed integers
let i8_val: i8 = -128;
let i32_val: i32 = -2147483648;
let i64_val: i64 = 0;

// Unsigned integers
let u8_val: u8 = 255;
let u32_val: u32 = 4294967295;

// Floating point
let f32: f32 = 3.14;
let f64: f64 = 3.14159;

// Boolean & Character
let is_active: bool = true;
let c: char = 'A';
let emoji: char = '😀';`}
        </CodeBlock>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-orange-400">Vectors & Strings</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Vectors">
{`// Create vector
let mut v: Vec<i32> = Vec::new();
v.push(1);
v.push(2);

// Macro
let v = vec![1, 2, 3, 4, 5];

// Access
let third = &v[2];
let third = v.get(2);  // Option

// Methods
v.pop();
v.len();
v.capacity();`}
          </CodeBlock>
          <CodeBlock title="Strings">
{`// String - Heap allocated
let mut s = String::from("Hello");
s.push_str(", World!");

// String slice (&str)
let slice: &str = "Hello";
let part: &str = &s[0..5];

// Methods
s.len();
s.contains("World");
s.to_uppercase();`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-orange-400">Ownership & Option</h3>
        <CodeBlock>
{`// Ownership
let s1 = String::from("hello");
let s2 = s1;  // s1 moved
// println!("{}", s1);  // ❌ Error

// Borrowing
let s1 = String::from("hello");
let len = calculate_length(&s1);
println!("{}", s1);  // ✅ OK

// Option<T>
let some: Option<i32> = Some(5);
let none: Option<i32> = None;

// Result<T, E>
let result: Result<i32, &str> = Ok(42);
let error: Result<i32, &str> = Err("error");`}
        </CodeBlock>
      </Section>
    </div>
  );
}

function KotlinContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Kotlin Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-purple-400 font-semibold">smart, type-safe container</span>.
            Kotlin is a modern language designed to fix Java's pain points - less boilerplate, more safety, and better readability.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">val name = "Alice"</code> creates an immutable variable.
            Kotlin encourages immutability by default and has built-in null safety to prevent crashes!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Modern, Safe, and Concise</h3>
          <p className="text-slate-300 text-lg mb-3">
            Kotlin is <span className="text-purple-400 font-semibold">statically typed with null safety</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Immutable by default with val (like Rust)</li>
            <li>Null safety built into the type system</li>
            <li>Type inference makes code concise</li>
            <li>100% interoperable with Java</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            Kotlin gives you <span className="text-purple-400 font-semibold">Java's power with modern safety features</span>!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-purple-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-purple-400 mb-2">✅ Null Safety</div>
              <p className="text-slate-300">Eliminate null pointer exceptions at compile time</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-purple-400 mb-2">✅ Concise Syntax</div>
              <p className="text-slate-300">Less boilerplate than Java, more productive</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-purple-400 mb-2">✅ Immutability</div>
              <p className="text-slate-300">val encourages safer, more predictable code</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-purple-400 mb-2">✅ Java Compatible</div>
              <p className="text-slate-300">Use all existing Java libraries seamlessly</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-purple-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Kotlin has <span className="text-purple-400 font-semibold">two keywords</span> for variables:
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">val</code> for read-only (immutable) and
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">var</code> for mutable variables.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            <span className="text-purple-400 font-semibold">Best practice:</span> Always use <code className="bg-slate-900 px-2 py-1 rounded">val</code> by default, only use <code className="bg-slate-900 px-2 py-1 rounded">var</code> when you really need mutability!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-purple-400/50">
            <div className="text-xl font-bold text-purple-400 mb-3">val (Immutable)</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Recommended Default</strong></div>
              <div>✅ Cannot be reassigned</div>
              <div>✅ Thread-safe by default</div>
              <div>✅ Easier to reason about</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-pink-400/50">
            <div className="text-xl font-bold text-pink-400 mb-3">var (Mutable)</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Use When Needed</strong></div>
              <div>✅ Can be reassigned</div>
              <div>⚠️ Use sparingly</div>
              <div>✅ For changing values</div>
            </div>
          </div>
        </div>

        <CodeBlock title="val - Immutable Variables (Preferred)">
{`// val creates read-only variable (like const in JavaScript)
val name = "Alice"               // ✅ Type inferred as String
val age = 25                     // ✅ Type inferred as Int
val price = 19.99                // ✅ Type inferred as Double
val isActive = true              // ✅ Type inferred as Boolean

// Cannot reassign val
// age = 26                      // ❌ ERROR - val cannot be reassigned!

// With explicit type annotations
val count: Int = 42              // ✅ Explicitly Int
val pi: Double = 3.14159         // ✅ Explicitly Double
val greeting: String = "Hello"   // ✅ Explicitly String

// val is like final in Java, but less verbose
// Java: final String name = "Alice";
// Kotlin: val name = "Alice"    // ✅ Much cleaner!`}
        </CodeBlock>

        <CodeBlock title="var - Mutable Variables">
{`// var creates mutable variable
var counter = 0                  // ✅ Can be changed
counter = counter + 1            // ✅ OK
counter = 10                     // ✅ OK - can reassign

var name = "Alice"               // ✅ Mutable string
name = "Bob"                     // ✅ OK - can change

// Type is still fixed!
var number = 10                  // ✅ Type is Int
// number = "hello"              // ❌ ERROR - type doesn't change!

// Use var only when you need mutability
var total = 0                    // ✅ Good - needs to accumulate
for (i in 1..10) {
    total += i                   // ✅ Modifying in loop
}

// Prefer val when possible for safety
val result = calculate()         // ✅ Better - doesn't need to change`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">💡 val vs var: Which to Use?</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Start with <strong>val</strong> - it's safer and more maintainable</li>
            <li>✅ Only change to <strong>var</strong> when the compiler tells you the value needs to change</li>
            <li>✅ Using val prevents accidental modifications</li>
            <li>💡 Most Kotlin code uses val more than var!</li>
          </ul>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-purple-400 mt-6">Null Safety - Nullable Types</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Kotlin's <span className="text-purple-400 font-semibold">killer feature</span> is null safety!
            By default, variables cannot be null. Add <code className="bg-slate-900 px-2 py-1 rounded">?</code> to allow null.
          </p>
        </div>

        <CodeBlock title="Nullable vs Non-Nullable Types">
{`// Non-nullable (default) - cannot be null
val name: String = "Alice"       // ✅ Must have a value
// val name: String = null       // ❌ ERROR - null not allowed!

var age: Int = 25                // ✅ Must have a value
// age = null                    // ❌ ERROR - can't assign null!

// Nullable - add ? to type
val nullableName: String? = "Alice"    // ✅ Can be String or null
val emptyName: String? = null          // ✅ OK - explicitly nullable

var optionalAge: Int? = 25       // ✅ Can be Int or null
optionalAge = null               // ✅ OK - nullable

// Safe call operator ?.
val length = nullableName?.length      // ✅ Returns length or null
val upper = nullableName?.uppercase()  // ✅ Safe - doesn't crash if null

// Elvis operator ?: (provide default if null)
val displayName = nullableName ?: "Guest"  // ✅ Use "Guest" if null
val count = optionalAge ?: 0               // ✅ Use 0 if null`}
        </CodeBlock>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-2">🎯 Null Safety Prevents Crashes!</h4>
          <p className="text-slate-300 mb-2">
            In Java, NullPointerException is the #1 cause of crashes. Kotlin eliminates this at compile time:
          </p>
          <div className="bg-slate-900 rounded p-3 text-sm space-y-1">
            <div><code className="text-green-400">val name: String = ...        // Never null</code></div>
            <div><code className="text-blue-400">val name: String? = ...       // Might be null</code></div>
            <div><code className="text-green-400">name.length                   // Safe - never crashes</code></div>
            <div><code className="text-blue-400">name?.length                  // Safe call for nullable</code></div>
          </div>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-purple-400 mt-6">Constants with const val</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For compile-time constants, use <code className="bg-slate-900 px-2 py-1 rounded text-purple-400">const val</code> at the top level or in objects.
          </p>
        </div>

        <CodeBlock title="Compile-Time Constants">
{`// const val for compile-time constants (top level or in object)
const val PI = 3.14159           // ✅ Compile-time constant
const val MAX_USERS = 100        // ✅ System limit
const val APP_NAME = "MyApp"     // ✅ Application name

// Can't use const val inside functions
fun example() {
    // const val LOCAL = 10      // ❌ ERROR - must be top-level!
    val local = 10               // ✅ Use val inside functions
}

// const val must be primitive or String
const val PORT: Int = 8080       // ✅ OK - primitive
const val URL: String = "http://example.com"  // ✅ OK - String
// const val user: User = ...    // ❌ ERROR - must be primitive/String

// Convention: UPPERCASE for constants
const val MAX_RETRY_COUNT = 3
const val DEFAULT_TIMEOUT = 30`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-purple-400 mt-6">Type Inference and Explicit Types</h4>

        <CodeBlock title="Let Kotlin Infer or Be Explicit">
{`// Kotlin infers types automatically
val name = "Alice"               // ✅ Inferred as String
val age = 25                     // ✅ Inferred as Int
val price = 19.99                // ✅ Inferred as Double

// Be explicit when needed
val count: Int = 42              // ✅ Explicitly Int
val score: Long = 1000000L       // ✅ Explicitly Long
val temperature: Float = 98.6f   // ✅ Explicitly Float

// Collections with types
val numbers: List<Int> = listOf(1, 2, 3)           // ✅ List of Ints
val names: MutableList<String> = mutableListOf()   // ✅ Mutable list
val scores: Map<String, Int> = mapOf("Alice" to 95) // ✅ Map

// When declaring without initializing, type required
val result: Int                  // ✅ Type must be specified
result = calculate()             // ✅ Initialize later`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in Kotlin</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use camelCase for variables: <code className="bg-slate-900 px-2 py-1 rounded">firstName</code>, <code className="bg-slate-900 px-2 py-1 rounded">totalPrice</code></li>
            <li>✅ UPPER_CASE for constants: <code className="bg-slate-900 px-2 py-1 rounded">MAX_SIZE</code>, <code className="bg-slate-900 px-2 py-1 rounded">PI</code></li>
            <li>✅ Can use backticks for special names: <code className="bg-slate-900 px-2 py-1 rounded">`fun name`</code></li>
            <li>❌ Can't start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can't use keywords: <code className="bg-slate-900 px-2 py-1 rounded">val</code>, <code className="bg-slate-900 px-2 py-1 rounded">var</code>, <code className="bg-slate-900 px-2 py-1 rounded">fun</code> are reserved</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-purple-400">Basic Types & Null Safety</h3>
        <CodeBlock>
{`// Numbers
val byte: Byte = 127
val int: Int = 2147483647
val long: Long = 9223372036854775807L
val float: Float = 3.14f
val double: Double = 3.14159

// Null safety
var name: String = "Alice"
// name = null  // ❌ Error

var nullableName: String? = "Alice"
nullableName = null  // ✅ OK

// Safe call & Elvis operator
val length = nullableName?.length ?: 0`}
        </CodeBlock>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-purple-400">Collections</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Lists & Sets">
{`// Immutable list
val fruits = listOf("apple", "banana")

// Mutable list
val mutable = mutableListOf(1, 2, 3)
mutable.add(4)
mutable[0] = 10

// Set
val set = setOf(1, 2, 3, 4)
val mutableSet = mutableSetOf(1, 2)
mutableSet.add(3)`}
          </CodeBlock>
          <CodeBlock title="Maps">
{`// Immutable map
val map = mapOf(
    "name" to "Alice",
    "age" to 25
)

// Mutable map
val scores = mutableMapOf<String, Int>()
scores["Alice"] = 95
scores["Bob"] = 87

val age = map["age"]  // 25?`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Classes & Type Checking</h3>
        <CodeBlock>
{`// Data class
data class Person(
    val name: String,
    val age: Int
)

val person = Person("Alice", 25)
val updated = person.copy(age = 26)

// Destructuring
val (name, age) = person

// Type checking
val obj: Any = "Hello"
if (obj is String) {
    println(obj.length)  // Smart cast
}

// Safe cast
val str: String? = obj as? String`}
        </CodeBlock>
      </Section>
    </div>
  );
}

function SwiftContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Swift Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-orange-400 font-semibold">safe, labeled storage spot</span>.
            Swift is Apple's modern language designed to be safe, fast, and expressive - perfect for building iOS, macOS, and other Apple platform apps.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">let name = "Alice"</code> creates a constant (immutable) variable.
            Swift encourages safety with optionals, type inference, and immutability by default!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Safe, Fast, and Expressive</h3>
          <p className="text-slate-300 text-lg mb-3">
            Swift is <span className="text-orange-400 font-semibold">statically typed with safety features</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Immutable by default with let (safer code)</li>
            <li>Optional types prevent crashes from nil values</li>
            <li>Strong type inference reduces verbosity</li>
            <li>Fast compilation and runtime performance</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            Swift gives you <span className="text-orange-400 font-semibold">Objective-C's power with modern safety</span>!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-orange-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Type Safety</div>
              <p className="text-slate-300">Catch errors at compile time before running</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Optional Safety</div>
              <p className="text-slate-300">Explicit handling of nil prevents crashes</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Performance</div>
              <p className="text-slate-300">Compiled code runs as fast as C/C++</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-400 mb-2">✅ Modern Syntax</div>
              <p className="text-slate-300">Clean, readable code that's easy to maintain</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-orange-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Swift has <span className="text-orange-400 font-semibold">two keywords</span> for variables:
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">let</code> for constants (immutable) and
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">var</code> for variables (mutable).
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            <span className="text-orange-400 font-semibold">Apple recommends:</span> Use <code className="bg-slate-900 px-2 py-1 rounded">let</code> by default, only use <code className="bg-slate-900 px-2 py-1 rounded">var</code> when you need to change the value!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-orange-400/50">
            <div className="text-xl font-bold text-orange-400 mb-3">let (Constant)</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Default Choice</strong></div>
              <div>✅ Cannot be changed</div>
              <div>✅ Compiler optimizes better</div>
              <div>✅ Thread-safe</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-red-400/50">
            <div className="text-xl font-bold text-red-400 mb-3">var (Variable)</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>When Needed</strong></div>
              <div>✅ Can be changed</div>
              <div>⚠️ Use sparingly</div>
              <div>✅ For mutable state</div>
            </div>
          </div>
        </div>

        <CodeBlock title="let - Constants (Preferred)">
{`// let creates a constant (immutable value)
let name = "Alice"               // ✅ Type inferred as String
let age = 25                     // ✅ Type inferred as Int
let price = 19.99                // ✅ Type inferred as Double
let isActive = true              // ✅ Type inferred as Bool

// Cannot change constants
// age = 26                      // ❌ ERROR - cannot assign to value: 'age' is a 'let' constant

// With explicit type annotations
let count: Int = 42              // ✅ Explicitly Int
let pi: Double = 3.14159         // ✅ Explicitly Double
let greeting: String = "Hello"   // ✅ Explicitly String

// Swift encourages let for safety
let maxUsers = 100               // ✅ Good - won't change
let apiKey = "abc123"            // ✅ Good - should never change`}
        </CodeBlock>

        <CodeBlock title="var - Variables (When Needed)">
{`// var creates a mutable variable
var counter = 0                  // ✅ Can be changed
counter = counter + 1            // ✅ OK
counter = 10                     // ✅ OK - can reassign

var name = "Alice"               // ✅ Mutable string
name = "Bob"                     // ✅ OK - can change

// Type is still fixed!
var number = 10                  // ✅ Type is Int
// number = "hello"              // ❌ ERROR - cannot assign String to Int!

// Use var only when you need mutability
var total = 0                    // ✅ Good - needs to accumulate
for i in 1...10 {
    total += i                   // ✅ Modifying in loop
}

// Prefer let when possible
let result = calculate()         // ✅ Better - doesn't need to change`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">💡 let vs var: Which to Use?</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Always start with <strong>let</strong> - it's safer and compiler can optimize better</li>
            <li>✅ Only change to <strong>var</strong> if you get a compiler error saying you need to modify the value</li>
            <li>✅ Using let prevents bugs from accidental changes</li>
            <li>💡 Xcode will suggest changing var to let if you never modify the value!</li>
          </ul>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Optionals - Safe Handling of nil</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Swift's <span className="text-orange-400 font-semibold">optionals</span> are a key safety feature!
            By default, variables cannot be nil. Add <code className="bg-slate-900 px-2 py-1 rounded">?</code> to allow nil values.
          </p>
        </div>

        <CodeBlock title="Non-Optional vs Optional Types">
{`// Non-optional (default) - cannot be nil
let name: String = "Alice"       // ✅ Must have a value
// let name: String = nil        // ❌ ERROR - nil not allowed!

var age: Int = 25                // ✅ Must have a value
// age = nil                     // ❌ ERROR - cannot assign nil!

// Optional - add ? to type
let optionalName: String? = "Alice"    // ✅ Can be String or nil
let emptyName: String? = nil           // ✅ OK - explicitly optional

var optionalAge: Int? = 25       // ✅ Can be Int or nil
optionalAge = nil                // ✅ OK - optional

// Unwrapping optionals safely
if let name = optionalName {     // ✅ Optional binding
    print("Name is \(name)")     // ✅ Safe - name is non-optional here
}

// Nil coalescing operator ??
let displayName = optionalName ?? "Guest"  // ✅ Use "Guest" if nil
let count = optionalAge ?? 0               // ✅ Use 0 if nil

// Optional chaining with ?.
let length = optionalName?.count           // ✅ Returns count or nil`}
        </CodeBlock>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-2">🎯 Optionals Prevent Crashes!</h4>
          <p className="text-slate-300 mb-2">
            Optionals eliminate the #1 cause of crashes in Objective-C - accessing nil:
          </p>
          <div className="bg-slate-900 rounded p-3 text-sm space-y-1">
            <div><code className="text-green-400">let name: String = ...        // Never nil</code></div>
            <div><code className="text-blue-400">let name: String? = ...       // Might be nil</code></div>
            <div><code className="text-green-400">name.count                    // Safe - never crashes</code></div>
            <div><code className="text-blue-400">name?.count                   // Safe unwrap for optional</code></div>
          </div>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Type Inference and Explicit Types</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Swift has <span className="text-orange-400 font-semibold">powerful type inference</span>.
            Most of the time you don't need to write the type - Swift figures it out!
          </p>
        </div>

        <CodeBlock title="Type Inference vs Explicit Types">
{`// Swift infers types automatically
let name = "Alice"               // ✅ Inferred as String
let age = 25                     // ✅ Inferred as Int
let price = 19.99                // ✅ Inferred as Double
let isActive = true              // ✅ Inferred as Bool

// Be explicit when needed
let count: Int = 42              // ✅ Explicitly Int
let temperature: Float = 98.6    // ✅ Explicitly Float (not Double)
let bigNumber: Int64 = 1000000   // ✅ Explicitly Int64

// Arrays and dictionaries
let numbers = [1, 2, 3]          // ✅ Inferred as [Int]
let names = ["Alice", "Bob"]     // ✅ Inferred as [String]
let scores = ["Alice": 95]       // ✅ Inferred as [String: Int]

// Explicit collection types
let numbers: [Int] = [1, 2, 3]           // ✅ Array of Int
let names: Set<String> = ["Alice", "Bob"] // ✅ Set of String
let ages: [String: Int] = ["Alice": 25]  // ✅ Dictionary

// When declaring without initializing, type required
let result: Int                  // ✅ Type must be specified
result = calculate()             // ✅ Initialize later (only once!)`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Multiple Variables and Tuples</h4>

        <CodeBlock title="Multiple Declarations and Tuple Destructuring">
{`// Declare multiple variables
let x = 10, y = 20, z = 30       // ✅ Multiple let declarations
var a = 1, b = 2                 // ✅ Multiple var declarations

// Tuples - group multiple values
let person = ("Alice", 25)       // ✅ Tuple of (String, Int)
let (name, age) = person         // ✅ Destructuring - name="Alice", age=25

// Named tuples
let point = (x: 10, y: 20)       // ✅ Named elements
print(point.x)                   // ✅ Access by name
print(point.0)                   // ✅ Or by index

// Function returns tuple
func getUser() -> (name: String, age: Int) {
    return ("Alice", 25)
}
let user = getUser()
print(user.name)                 // ✅ Alice

// Underscore to ignore values
let (firstName, _) = person      // ✅ Ignore age, only get name`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in Swift</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use camelCase for variables: <code className="bg-slate-900 px-2 py-1 rounded">firstName</code>, <code className="bg-slate-900 px-2 py-1 rounded">totalPrice</code></li>
            <li>✅ UPPER_CASE for global constants: <code className="bg-slate-900 px-2 py-1 rounded">MAX_SIZE</code>, <code className="bg-slate-900 px-2 py-1 rounded">PI</code></li>
            <li>✅ Can use Unicode characters: <code className="bg-slate-900 px-2 py-1 rounded">π = 3.14159</code>, <code className="bg-slate-900 px-2 py-1 rounded">🎉 = "party"</code></li>
            <li>❌ Can't start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can't use keywords: <code className="bg-slate-900 px-2 py-1 rounded">let</code>, <code className="bg-slate-900 px-2 py-1 rounded">var</code>, <code className="bg-slate-900 px-2 py-1 rounded">func</code> are reserved</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-orange-400">Types & Optionals</h3>
        <CodeBlock>
{`// Basic types
let int: Int = 100
let double: Double = 3.14159
let bool: Bool = true
let string: String = "Alice"

// Optionals
var optionalName: String? = "Alice"
optionalName = nil  // ✅ OK

var name: String = "Alice"
// name = nil  // ❌ Error

// Optional binding
if let name = optionalName {
    print("Name is \\(name)")
}

// Nil coalescing
let displayName = optionalName ?? "Guest"`}
        </CodeBlock>
      </Section>

      <Section id="collections">
        <h3 className="text-2xl font-bold mb-4 text-orange-400">Collections</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Arrays">
{`// Array
var fruits = ["apple", "banana"]
var numbers: [Int] = [1, 2, 3]

// Methods
fruits.append("orange")
fruits.insert("kiwi", at: 0)
fruits.remove(at: 1)
fruits.count

// Array with repeating
let zeros = Array(repeating: 0, count: 5)`}
          </CodeBlock>
          <CodeBlock title="Dictionaries">
{`// Dictionary
var ages: [String: Int] = [
    "Alice": 25,
    "Bob": 30
]

// Access
let age = ages["Alice"]  // 25?
ages["Charlie"] = 35

// Set
var set: Set<Int> = [1, 2, 3]
set.insert(4)
set.contains(3)  // true`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-orange-400">Tuples & Enums</h3>
        <CodeBlock>
{`// Tuples
let person = ("Alice", 25, "NYC")
let (name, age, city) = person

// Named tuples
let point = (x: 10, y: 20)
let xCoord = point.x

// Enums
enum Direction {
    case north, south, east, west
}

var dir = Direction.north
dir = .south

// Type checking
let obj: Any = "Hello"
if obj is String {
    print("It's a string")
}

if let str = obj as? String {
    print("String: \\(str)")
}`}
        </CodeBlock>
      </Section>
    </div>
  );
}

// Comparison Content - All Languages Side by Side
function ComparisonContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Compare All Languages
        </h2>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">🔀 Side-by-Side Comparison</h3>
          <p className="text-slate-300 text-lg">
            See how the same concepts are expressed differently across all 10 programming languages.
            This helps you understand the similarities and differences, making it easier to learn multiple languages!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Language Type Systems</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
              <h4 className="text-xl font-bold text-blue-400 mb-3">Static Typing (Type Declared)</h4>
              <div className="space-y-2 text-slate-300">
                <p><span className="font-semibold">C, C++, Java</span> - Must declare types</p>
                <p><span className="font-semibold">TypeScript, Go, Rust, Kotlin, Swift</span> - Type inference available</p>
                <p className="text-sm text-slate-400">Types checked at compile time</p>
              </div>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
              <h4 className="text-xl font-bold text-green-400 mb-3">Dynamic Typing (Auto-detect)</h4>
              <div className="space-y-2 text-slate-300">
                <p><span className="font-semibold">JavaScript, Python</span> - No type declaration needed</p>
                <p className="text-sm text-slate-400">Types determined at runtime</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Variable Declaration - All Languages
        </h3>

        <p className="text-slate-300 text-lg mb-6">
          Here's how to create a simple variable in each language. Notice the differences in syntax and requirements:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CodeBlock title="🟨 JavaScript">
{`// Dynamic typing
let age = 25;
const name = "Alice";
var old = "avoid";`}
          </CodeBlock>

          <CodeBlock title="🐍 Python">
{`# Dynamic typing, simple
age = 25
name = "Alice"
# Optional type hints
age: int = 25`}
          </CodeBlock>

          <CodeBlock title="☕ Java">
{`// Static typing required
int age = 25;
String name = "Alice";
// Type inference (Java 10+)
var count = 42;`}
          </CodeBlock>

          <CodeBlock title="🔷 C">
{`// Static typing
int age = 25;
char name[] = "Alice";
const float PI = 3.14;`}
          </CodeBlock>

          <CodeBlock title="⚡ C++">
{`// Static with auto
int age = 25;
auto name = "Alice";
const double PI = 3.14;`}
          </CodeBlock>

          <CodeBlock title="🔵 TypeScript">
{`// Types optional
let age: number = 25;
let name = "Alice"; // inferred
const PI = 3.14;`}
          </CodeBlock>

          <CodeBlock title="🔷 Go">
{`// Type inference
age := 25          // short
var name = "Alice"
const PI = 3.14`}
          </CodeBlock>

          <CodeBlock title="🦀 Rust">
{`// Immutable by default
let age = 25;
let mut count = 0; // mutable
const PI: f64 = 3.14;`}
          </CodeBlock>

          <CodeBlock title="💜 Kotlin">
{`// val/var distinction
val age = 25       // immutable
var count = 0      // mutable
const val PI = 3.14`}
          </CodeBlock>

          <CodeBlock title="🍎 Swift">
{`// let/var distinction
let age = 25       // constant
var count = 0      // variable
let name: String = "Alice"`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="types">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Data Types Comparison
        </h3>

        <h4 className="text-2xl font-bold mb-4 text-white">String (Text)</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <CodeBlock title="JavaScript/TypeScript">
{`let name = "Alice";
let greeting = 'Hello';
let template = \`Hi \${name}\`;`}
          </CodeBlock>

          <CodeBlock title="Python">
{`name = "Alice"
greeting = 'Hello'
template = f"Hi {name}"`}
          </CodeBlock>

          <CodeBlock title="Java">
{`String name = "Alice";
String msg = "Hello";
// No string interpolation`}
          </CodeBlock>

          <CodeBlock title="C">
{`char name[] = "Alice";
char msg[100] = "Hello";
// No string interpolation`}
          </CodeBlock>

          <CodeBlock title="C++">
{`std::string name = "Alice";
auto msg = "Hello";
// C++20: format library`}
          </CodeBlock>

          <CodeBlock title="Go">
{`name := "Alice"
msg := "Hello"
template := fmt.Sprintf("Hi %s", name)`}
          </CodeBlock>

          <CodeBlock title="Rust">
{`let name = "Alice";
let msg = String::from("Hello");
let template = format!("Hi {}", name);`}
          </CodeBlock>

          <CodeBlock title="Kotlin">
{`val name = "Alice"
val msg = "Hello"
val template = "Hi $name"`}
          </CodeBlock>

          <CodeBlock title="Swift">
{`let name = "Alice"
let msg = "Hello"
let template = "Hi \\(name)"`}
          </CodeBlock>
        </div>

        <h4 className="text-2xl font-bold mb-4 text-white">Numbers</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CodeBlock title="JavaScript">
{`let age = 25;        // Number
let price = 19.99;   // Number
let big = 123n;      // BigInt`}
          </CodeBlock>

          <CodeBlock title="Python">
{`age = 25             # int
price = 19.99        # float
big = 12345678901234 # int (unlimited)`}
          </CodeBlock>

          <CodeBlock title="Java">
{`int age = 25;
double price = 19.99;
long big = 123456789L;`}
          </CodeBlock>

          <CodeBlock title="C">
{`int age = 25;
float price = 19.99f;
long big = 123456789L;`}
          </CodeBlock>

          <CodeBlock title="C++">
{`int age = 25;
double price = 19.99;
auto big = 123456789L;`}
          </CodeBlock>

          <CodeBlock title="TypeScript">
{`let age: number = 25;
let price: number = 19.99;
let big: bigint = 123n;`}
          </CodeBlock>

          <CodeBlock title="Go">
{`age := 25            // int
price := 19.99       // float64
var big int64 = 123456789`}
          </CodeBlock>

          <CodeBlock title="Rust">
{`let age: i32 = 25;
let price: f64 = 19.99;
let big: i64 = 123456789;`}
          </CodeBlock>

          <CodeBlock title="Kotlin">
{`val age: Int = 25
val price: Double = 19.99
val big: Long = 123456789L`}
          </CodeBlock>

          <CodeBlock title="Swift">
{`let age: Int = 25
let price: Double = 19.99
let big: Int64 = 123456789`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="collections">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Arrays/Lists Comparison
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CodeBlock title="JavaScript">
{`let arr = [1, 2, 3];
arr.push(4);
arr[0] = 10;`}
          </CodeBlock>

          <CodeBlock title="Python">
{`arr = [1, 2, 3]
arr.append(4)
arr[0] = 10`}
          </CodeBlock>

          <CodeBlock title="Java">
{`int[] arr = {1, 2, 3};
List<Integer> list = new ArrayList<>();
list.add(4);`}
          </CodeBlock>

          <CodeBlock title="C">
{`int arr[3] = {1, 2, 3};
arr[0] = 10;
// Fixed size`}
          </CodeBlock>

          <CodeBlock title="C++">
{`std::vector<int> arr = {1,2,3};
arr.push_back(4);
arr[0] = 10;`}
          </CodeBlock>

          <CodeBlock title="TypeScript">
{`let arr: number[] = [1,2,3];
arr.push(4);
arr[0] = 10;`}
          </CodeBlock>

          <CodeBlock title="Go">
{`arr := []int{1, 2, 3}
arr = append(arr, 4)
arr[0] = 10`}
          </CodeBlock>

          <CodeBlock title="Rust">
{`let mut arr = vec![1,2,3];
arr.push(4);
arr[0] = 10;`}
          </CodeBlock>

          <CodeBlock title="Kotlin">
{`val arr = mutableListOf(1,2,3)
arr.add(4)
arr[0] = 10`}
          </CodeBlock>

          <CodeBlock title="Swift">
{`var arr = [1, 2, 3]
arr.append(4)
arr[0] = 10`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Key Differences Summary
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-green-400 mb-4">Easiest to Learn</h4>
            <div className="space-y-2 text-slate-300">
              <p><strong>1. Python</strong> - Simplest syntax, no semicolons, dynamic typing</p>
              <p><strong>2. JavaScript</strong> - Similar to Python, widely used</p>
              <p><strong>3. Kotlin/Swift</strong> - Modern, clean syntax</p>
            </div>
          </div>

          <div className="bg-slate-700/30 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-blue-400 mb-4">Most Powerful</h4>
            <div className="space-y-2 text-slate-300">
              <p><strong>1. Rust</strong> - Memory safety, zero-cost abstractions</p>
              <p><strong>2. C++</strong> - Low-level control, high performance</p>
              <p><strong>3. Go</strong> - Simple concurrency, fast compilation</p>
            </div>
          </div>

          <div className="bg-slate-700/30 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-yellow-400 mb-4">Best Type Safety</h4>
            <div className="space-y-2 text-slate-300">
              <p><strong>1. TypeScript</strong> - JavaScript with types</p>
              <p><strong>2. Rust</strong> - Strict ownership rules</p>
              <p><strong>3. Kotlin</strong> - Null safety built-in</p>
            </div>
          </div>

          <div className="bg-slate-700/30 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-purple-400 mb-4">Most Popular</h4>
            <div className="space-y-2 text-slate-300">
              <p><strong>1. JavaScript</strong> - Web development standard</p>
              <p><strong>2. Python</strong> - Data science, AI, automation</p>
              <p><strong>3. Java</strong> - Enterprise applications</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
