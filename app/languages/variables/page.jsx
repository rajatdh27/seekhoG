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
    { id: "limits", title: "Memory Limits & Storage", icon: "💾" },
    { id: "limitations", title: "Limitations & Constraints", icon: "⚠️" },
    { id: "collections", title: "Collections", icon: "📚" },
    { id: "advanced", title: "Advanced Features", icon: "🚀" },
    { id: "usage", title: "Real-World Usage", icon: "🌍" },
    { id: "purpose", title: "Purpose & History", icon: "📜" },
    { id: "future", title: "Future Outlook", icon: "🔮" },
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
            JavaScript is <span className="text-yellow-400 font-semibold">everywhere</span>! It's the only language that runs natively in web browsers,
            making it essential for modern web development. But it's not limited to browsers anymore - it powers servers, mobile apps, desktop applications, and more.
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
              <strong className="text-white">Popular Tools:</strong><br/>
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
              <strong className="text-white">Popular Tools:</strong><br/>
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
              <strong className="text-white">Popular Tools:</strong><br/>
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
              <strong className="text-white">Popular Tools:</strong><br/>
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
              <strong className="text-white">Popular Tools:</strong><br/>
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
              <strong className="text-white">Popular Tools:</strong><br/>
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
                    As the only language natively supported by all browsers, JavaScript's position is secure.
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

      <Section id="limits">
        <h3 className="text-3xl font-bold mb-6 text-green-400">💾 Memory Limits & Storage Capacity</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Python's data types have <span className="text-green-400 font-semibold">generous limits</span> and often grow dynamically.
            Understanding these limits helps you write efficient code and handle large datasets properly.
          </p>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">📊 Python Data Type Limits</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="p-3 text-green-400 font-bold">Data Type</th>
                  <th className="p-3 text-green-400 font-bold">Memory Size</th>
                  <th className="p-3 text-green-400 font-bold">Minimum Value</th>
                  <th className="p-3 text-green-400 font-bold">Maximum Value</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">int</td>
                  <td className="p-3">Unlimited (arbitrary precision)</td>
                  <td className="p-3">Limited by memory</td>
                  <td className="p-3">Limited by memory</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">float</td>
                  <td className="p-3">8 bytes (64-bit IEEE 754)</td>
                  <td className="p-3 font-mono text-sm">-1.8e+308</td>
                  <td className="p-3 font-mono text-sm">1.8e+308</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">str</td>
                  <td className="p-3">1-4 bytes per char (UTF-8)</td>
                  <td className="p-3">0 characters</td>
                  <td className="p-3">Limited by memory</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">list</td>
                  <td className="p-3">Varies (dynamic)</td>
                  <td className="p-3">0 elements</td>
                  <td className="p-3">Limited by memory</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-green-400">dict</td>
                  <td className="p-3">Varies (hash table)</td>
                  <td className="p-3">0 items</td>
                  <td className="p-3">Limited by memory</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-green-400">bool</td>
                  <td className="p-3">1 byte</td>
                  <td className="p-3">False</td>
                  <td className="p-3">True</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xl font-bold mb-3 text-green-400">🔢 Unlimited Integer Precision</h4>
            <CodeBlock title="Arbitrary Precision Integers">
{`# Python int can be HUGE!
big_number = 12345678901234567890123456789012345678901234567890
print(big_number)  # No problem!

# Calculate factorial of 100
import math
factorial_100 = math.factorial(100)
print(factorial_100)  # 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000

# Operations work normally
x = 10**100  # 1 followed by 100 zeros!
y = x * 2
print(y)  # Still works!

# Only limited by available memory`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3 text-green-400">📏 Float Limits</h4>
            <CodeBlock title="Float Precision">
{`import sys

# Maximum float value
print(sys.float_info.max)  # 1.7976931348623157e+308

# Minimum positive float
print(sys.float_info.min)  # 2.2250738585072014e-308

# Float precision (decimal digits)
print(sys.float_info.dig)  # 15 decimal digits

# Going beyond causes overflow
huge = 1.8e308
print(huge * 10)  # inf (infinity)

# Very small numbers become 0
tiny = 1e-400
print(tiny)  # 0.0`}
            </CodeBlock>
          </div>
        </div>

        <CodeBlock title="List and String Capacity">
{`# Lists can hold millions of elements
big_list = [0] * 10_000_000  # 10 million elements ✅
print(len(big_list))  # 10000000

# Strings can be very large
long_string = "a" * 1_000_000  # 1 million characters ✅
print(len(long_string))  # 1000000

# Dictionary size limited by memory
huge_dict = {i: i*2 for i in range(1_000_000)}  # 1M key-value pairs ✅
print(len(huge_dict))  # 1000000

# Memory usage grows with data
import sys
print(sys.getsizeof(big_list))  # Shows bytes used`}
        </CodeBlock>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-3">💡 Key Takeaways</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>int</strong> has unlimited precision - can represent astronomically large numbers!</li>
            <li>• <strong>float</strong> uses 64-bit IEEE 754 (same as Java double, JavaScript Number)</li>
            <li>• <strong>list, dict, str</strong> grow dynamically - only limited by available RAM</li>
            <li>• Python automatically manages memory allocation for you</li>
            <li>• Large numbers slow down operations but won't cause overflow errors</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="limitations">
        <h3 className="text-3xl font-bold mb-6 text-green-400">⚠️ Limitations & Constraints</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            While Python is incredibly powerful and flexible, it has some <span className="text-red-400 font-semibold">limitations</span> you should be aware of.
            Understanding these helps you write better code and choose the right tool for the job!
          </p>
        </div>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-3">🚨 Critical Limitations to Remember</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Global Interpreter Lock (GIL)</strong> - Only one thread executes Python code at a time</li>
            <li>• <strong>Slower than compiled languages</strong> - Python is interpreted, not compiled</li>
            <li>• <strong>Mobile development limited</strong> - Not widely used for iOS/Android apps</li>
            <li>• <strong>Memory consumption</strong> - Uses more memory than C/C++/Rust</li>
            <li>• <strong>Dynamic typing</strong> - Runtime errors instead of compile-time catches</li>
            <li>• <strong>Indentation-sensitive</strong> - Whitespace matters!</li>
          </ul>
        </InfoBox>

        <div className="space-y-6 mt-6">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Global Interpreter Lock (GIL)</h4>
            <CodeBlock title="Threading Limitations">
{`# Python's GIL prevents true parallelism with threads
import threading
import time

def cpu_intensive():
    # Heavy computation
    total = 0
    for i in range(10_000_000):
        total += i
    return total

# Single-threaded
start = time.time()
cpu_intensive()
cpu_intensive()
print(f"Sequential: {time.time() - start:.2f}s")  # ~1.2s

# Multi-threaded (doesn't help much due to GIL!)
start = time.time()
t1 = threading.Thread(target=cpu_intensive)
t2 = threading.Thread(target=cpu_intensive)
t1.start()
t2.start()
t1.join()
t2.join()
print(f"Threaded: {time.time() - start:.2f}s")  # Still ~1.2s! ❌

# Solution: Use multiprocessing instead
from multiprocessing import Pool
# This bypasses GIL by using separate processes ✅`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Performance vs Compiled Languages</h4>
            <CodeBlock title="Speed Comparison">
{`# Python is 10-100x slower than C/C++/Rust
import time

# Python loop (slow)
start = time.time()
total = 0
for i in range(10_000_000):
    total += i
print(f"Python loop: {time.time() - start:.2f}s")  # ~0.5s

# Same code in C would run in ~0.005s (100x faster!)

# Solutions for performance:
# 1. Use NumPy for numerical operations
import numpy as np
start = time.time()
arr = np.arange(10_000_000)
total = arr.sum()
print(f"NumPy: {time.time() - start:.2f}s")  # ~0.05s ✅

# 2. Use compiled extensions (Cython, PyPy)
# 3. Use libraries written in C (pandas, NumPy, etc.)
# 4. Use PyPy JIT compiler for significant speedup`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Dynamic Typing Issues</h4>
            <CodeBlock title="Runtime Type Errors">
{`# Type errors only caught at runtime
def calculate_area(width, height):
    return width * height

# This looks fine but will crash at runtime
result = calculate_area("10", 5)  # ❌ TypeError: can't multiply str by int

# No compile-time checking like Java/C++
# Solution: Use type hints + mypy
def calculate_area(width: int, height: int) -> int:
    return width * height

# mypy can catch this before running:
# result = calculate_area("10", 5)  # mypy error!

# Or use isinstance checks
def safe_calculate(width, height):
    if not isinstance(width, (int, float)):
        raise TypeError("width must be a number")
    if not isinstance(height, (int, float)):
        raise TypeError("height must be a number")
    return width * height`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Mutable Default Arguments</h4>
            <CodeBlock title="Common Gotcha">
{`# Dangerous pattern - mutable default argument
def append_to(element, target=[]):  # ❌ BAD!
    target.append(element)
    return target

print(append_to(1))  # [1]
print(append_to(2))  # [1, 2] ❌ Unexpected!
print(append_to(3))  # [1, 2, 3] ❌ List persists!

# The default list is created ONCE, not per call!

# Solution: Use None as default
def append_to(element, target=None):  # ✅ GOOD!
    if target is None:
        target = []
    target.append(element)
    return target

print(append_to(1))  # [1] ✅
print(append_to(2))  # [2] ✅
print(append_to(3))  # [3] ✅`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Indentation Errors</h4>
            <CodeBlock title="Whitespace Matters">
{`# Python uses indentation for blocks (no braces)
def greet(name):
    if name:
        print(f"Hello {name}")
    print("Welcome!")  # ✅ Correct indentation

# Mixing tabs and spaces causes errors
def broken():
    x = 1
        y = 2  # ❌ IndentationError: unexpected indent
    return x + y

# Inconsistent indentation
if True:
    print("Line 1")
      print("Line 2")  # ❌ IndentationError

# Solution: Use consistent spacing (4 spaces per PEP 8)
# Configure editor to convert tabs to spaces`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Memory Usage</h4>
            <CodeBlock title="Higher Memory Overhead">
{`import sys

# Python objects use more memory than C equivalents
x = 5
print(sys.getsizeof(x))  # 28 bytes (Python int object)
# In C: int would be 4 bytes
# Python overhead: object metadata, reference counting

# Lists use even more memory
numbers = [1, 2, 3]
print(sys.getsizeof(numbers))  # 88 bytes
# Plus 28 bytes per integer element!

# Solution for large datasets: Use NumPy arrays
import numpy as np
arr = np.array([1, 2, 3], dtype=np.int32)
print(arr.nbytes)  # 12 bytes (3 * 4 bytes) ✅ Much better!

# NumPy uses C arrays internally - much more efficient`}
            </CodeBlock>
          </div>
        </div>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-3">✅ Best Practices to Work Around Limitations</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• Use <strong>multiprocessing</strong> instead of threading for CPU-bound tasks (bypasses GIL)</li>
            <li>• Use <strong>NumPy/Pandas</strong> for numerical operations (C-speed performance)</li>
            <li>• Add <strong>type hints</strong> and use mypy for type checking</li>
            <li>• Never use <strong>mutable default arguments</strong> (lists, dicts) - use None instead</li>
            <li>• Use <strong>4 spaces</strong> for indentation (PEP 8 standard)</li>
            <li>• For performance-critical code, consider <strong>PyPy, Cython, or Numba</strong></li>
            <li>• Profile your code with <code className="bg-slate-900 px-2 py-1 rounded">cProfile</code> before optimizing</li>
          </ul>
        </InfoBox>
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

      <Section id="usage">
        <h3 className="text-3xl font-bold mb-6 text-green-400">🌍 Real-World Usage & Applications</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Python is <span className="text-green-400 font-semibold">the most versatile programming language</span> today!
            It dominates in data science, AI/ML, web development, automation, and scientific computing. Its simple syntax and powerful libraries make it the go-to choice for developers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">📊</div>
            <h4 className="text-xl font-bold mb-2 text-blue-400">Data Science & Analytics</h4>
            <p className="text-slate-300 text-sm mb-3">Data analysis, visualization, and scientific computing</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              pandas, NumPy, Matplotlib, Seaborn, Jupyter
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🤖</div>
            <h4 className="text-xl font-bold mb-2 text-purple-400">AI & Machine Learning</h4>
            <p className="text-slate-300 text-sm mb-3">Neural networks, deep learning, computer vision</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              TensorFlow, PyTorch, scikit-learn, Keras
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🌐</div>
            <h4 className="text-xl font-bold mb-2 text-green-400">Web Development</h4>
            <p className="text-slate-300 text-sm mb-3">Backend APIs, full-stack applications</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              Django, Flask, FastAPI, Pyramid
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">⚙️</div>
            <h4 className="text-xl font-bold mb-2 text-orange-400">Automation & Scripting</h4>
            <p className="text-slate-300 text-sm mb-3">Task automation, web scraping, DevOps</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              Selenium, BeautifulSoup, Ansible, pytest
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🔬</div>
            <h4 className="text-xl font-bold mb-2 text-yellow-400">Scientific Computing</h4>
            <p className="text-slate-300 text-sm mb-3">Research, simulations, mathematical modeling</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              SciPy, SymPy, Biopython, AstroPy
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🎮</div>
            <h4 className="text-xl font-bold mb-2 text-teal-400">Game Development</h4>
            <p className="text-slate-300 text-sm mb-3">2D games, prototyping, game scripting</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              Pygame, Panda3D, Ren'Py, Godot (GDScript)
            </div>
          </motion.div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">🏢 Major Companies Using Python</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🔍</div>
              <div className="font-bold text-blue-400">Google</div>
              <div className="text-xs text-slate-400">Core infrastructure</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">📷</div>
              <div className="font-bold text-purple-400">Instagram</div>
              <div className="text-xs text-slate-400">Backend (Django)</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🎵</div>
              <div className="font-bold text-green-400">Spotify</div>
              <div className="text-xs text-slate-400">Data analysis</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">📦</div>
              <div className="font-bold text-blue-500">Dropbox</div>
              <div className="text-xs text-slate-400">Desktop client</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">📺</div>
              <div className="font-bold text-red-500">Netflix</div>
              <div className="text-xs text-slate-400">ML algorithms</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🚗</div>
              <div className="font-bold text-gray-400">Uber</div>
              <div className="text-xs text-slate-400">Backend services</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">📌</div>
              <div className="font-bold text-red-400">Pinterest</div>
              <div className="text-xs text-slate-400">Web backend</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🌍</div>
              <div className="font-bold text-blue-400">NASA</div>
              <div className="text-xs text-slate-400">Scientific computing</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
          <h4 className="text-xl font-bold mb-3 text-green-400">📊 Job Market & Demand</h4>
          <div className="grid md:grid-cols-3 gap-4 text-slate-300">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">2nd</div>
              <div className="text-sm">Most Popular Language (TIOBE 2024)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">1st</div>
              <div className="text-sm">For AI/ML and Data Science</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">High</div>
              <div className="text-sm">Salary range: $75k - $160k+ (US)</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="purpose">
        <h3 className="text-3xl font-bold mb-6 text-green-400">📜 Purpose & History</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-bold mb-3 text-white">🎯 Why Was Python Created?</h4>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Python was created in <span className="text-green-400 font-semibold">1991 by Guido van Rossum</span> at CWI in the Netherlands.
              The goal was to create a language that was <span className="text-green-400 font-semibold">easy to read and write</span>,
              with code that looks almost like plain English. Guido wanted programming to be accessible to everyone, not just computer scientists.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-green-400/30">
                <h5 className="text-lg font-bold mb-3 text-green-400">✅ Python's Design Philosophy</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Readability counts - code should be like prose</li>
                  <li>• Simple is better than complex</li>
                  <li>• There should be one obvious way to do things</li>
                  <li>• Beautiful is better than ugly</li>
                  <li>• Explicit is better than implicit</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-400/30">
                <h5 className="text-lg font-bold mb-3 text-blue-400">🎯 Key Goals</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Easy to learn for beginners</li>
                  <li>• Powerful for experts</li>
                  <li>• Batteries included (rich standard library)</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Open source and community-driven</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🚀 Key Milestones in Python History</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-green-400 font-bold min-w-20">1991</div>
                <div className="text-slate-300">Python 0.9.0 released by Guido van Rossum (named after Monty Python!)</div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-400 font-bold min-w-20">2000</div>
                <div className="text-slate-300">Python 2.0 - List comprehensions, garbage collection</div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-400 font-bold min-w-20">2008</div>
                <div className="text-slate-300">Python 3.0 - Major redesign, not backward compatible (controversial at the time)</div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-400 font-bold min-w-20">2010s</div>
                <div className="text-slate-300">Python becomes dominant in data science and AI/ML</div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-400 font-bold min-w-20">2020</div>
                <div className="text-slate-300">Python 2 officially retired - Python 3 fully adopted</div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-400 font-bold min-w-20">2024+</div>
                <div className="text-slate-300">Python 3.12/3.13 - Major performance improvements, better error messages</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-3 text-white">💡 Design Philosophy - The Zen of Python</h4>
            <div className="bg-slate-800/50 p-6 rounded-xl font-mono text-sm text-green-400">
              <pre>
{`>>> import this

The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Readability counts.
There should be one-- and preferably only one --obvious way to do it.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.`}
              </pre>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="text-xl font-bold mb-3">🤔 Fun Facts</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Named after <strong>Monty Python's Flying Circus</strong>, not the snake!</li>
              <li>• Guido van Rossum was Python's <strong>"Benevolent Dictator For Life"</strong> (BDFL) until 2018</li>
              <li>• Python was a <strong>hobby project</strong> during Christmas break in 1989</li>
              <li>• The language emphasizes <strong>developer happiness</strong> over performance</li>
              <li>• Python's official package repository (PyPI) has <strong>500,000+ packages</strong></li>
            </ul>
          </InfoBox>
        </div>
      </Section>

      <Section id="future">
        <h3 className="text-3xl font-bold mb-6 text-green-400">🔮 Future Outlook & Trends</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">🚀</div>
            <div className="text-2xl font-bold text-green-400 mb-2">Dominating AI/ML</div>
            <div className="text-sm text-slate-300">The go-to language for artificial intelligence</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">⚡</div>
            <div className="text-2xl font-bold text-blue-400 mb-2">Getting Faster</div>
            <div className="text-sm text-slate-300">Python 3.13+ brings major speedups</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">📈</div>
            <div className="text-2xl font-bold text-purple-400 mb-2">Still Growing</div>
            <div className="text-sm text-slate-300">Usage increases year over year</div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🔥 Current Trends (2024-2026)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-bold text-green-400 mb-3">Rising Technologies</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✅ <strong>FastAPI</strong> - Modern async web framework replacing Flask/Django</li>
                  <li>✅ <strong>Type hints</strong> - Static typing becoming standard</li>
                  <li>✅ <strong>AI/ML</strong> - Python completely dominates this space</li>
                  <li>✅ <strong>Data engineering</strong> - Apache Spark, Airflow, dbt</li>
                  <li>✅ <strong>Async/await</strong> - Asynchronous programming mainstream</li>
                  <li>✅ <strong>Python 3.13+</strong> - JIT compiler, major performance gains</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-bold text-green-400 mb-3">Declining/Legacy</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>⚠️ <strong>Python 2</strong> - Officially dead (2020)</li>
                  <li>⚠️ <strong>Old Django versions</strong> - Upgrade to latest</li>
                  <li>⚠️ <strong>print as statement</strong> - Python 2 syntax</li>
                  <li>⚠️ <strong>No type hints</strong> - Modern code uses types</li>
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
                  <h5 className="font-bold text-green-400 mb-1">Python Will Remain #1 for AI/ML</h5>
                  <p className="text-slate-300 text-sm">
                    With TensorFlow, PyTorch, and countless AI libraries, Python's dominance in artificial intelligence is unshakeable.
                    Every major AI breakthrough uses Python.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-green-400 mb-1">Performance Will Dramatically Improve</h5>
                  <p className="text-slate-300 text-sm">
                    Python 3.13+ includes a JIT compiler that makes Python 2-3x faster. Future versions will continue closing the speed gap
                    with compiled languages.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-green-400 mb-1">Type Hints Will Become Standard</h5>
                  <p className="text-slate-300 text-sm">
                    Static type checking with mypy and type hints will be expected in professional code. Python is moving toward
                    optional static typing without losing flexibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-green-400 mb-1">Data Science Will Keep Growing</h5>
                  <p className="text-slate-300 text-sm">
                    pandas, NumPy, Jupyter notebooks, and visualization tools make Python the undisputed king of data science.
                    This will only strengthen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-green-400 mb-1">Web Development Modernization</h5>
                  <p className="text-slate-300 text-sm">
                    FastAPI is revolutionizing Python web development with async support and automatic API documentation.
                    Modern Python web apps will rival Node.js performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-yellow-400 mb-1">No GIL Removal Soon</h5>
                  <p className="text-slate-300 text-sm">
                    Despite PEP 703 (optional GIL), true parallel threading is still far away. Use multiprocessing or
                    async for concurrency.
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
                  <li>• <strong>Huge demand</strong> for Python developers</li>
                  <li>• <strong>Data science roles</strong> pay extremely well</li>
                  <li>• <strong>Remote work</strong> very common</li>
                  <li>• <strong>Beginner-friendly</strong> - great first language</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-white mb-2">Skills in Demand</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>pandas & NumPy</strong> - Data manipulation</li>
                  <li>• <strong>PyTorch/TensorFlow</strong> - AI/ML</li>
                  <li>• <strong>FastAPI/Django</strong> - Web development</li>
                  <li>• <strong>SQL & databases</strong> - Data engineering</li>
                </ul>
              </div>
            </div>
          </div>

          <InfoBox type="success">
            <h4 className="text-xl font-bold mb-3">✅ Why Python is a Great Choice</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• <strong>Easiest language to learn</strong> - Perfect for beginners</li>
              <li>• <strong>Dominates AI/ML</strong> - If you want to work in AI, learn Python</li>
              <li>• <strong>Massive ecosystem</strong> - 500,000+ packages on PyPI</li>
              <li>• <strong>High demand</strong> - Consistently top job postings</li>
              <li>• <strong>Versatile</strong> - Web, data, automation, scripting, scientific computing</li>
              <li>• <strong>Great community</strong> - Welcoming to newcomers</li>
              <li>• <strong>Getting faster</strong> - Performance improvements every release</li>
            </ul>
          </InfoBox>
        </div>
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

      <Section id="limits">
        <h3 className="text-3xl font-bold mb-6 text-orange-400">💾 Memory Limits & Storage Capacity</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Java's primitive types have <span className="text-orange-400 font-semibold">fixed, well-defined limits</span>.
            Understanding these limits is crucial for choosing the right data type and avoiding overflow errors in enterprise applications.
          </p>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">📊 Java Data Type Limits</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="p-3 text-orange-400 font-bold">Data Type</th>
                  <th className="p-3 text-orange-400 font-bold">Memory Size</th>
                  <th className="p-3 text-orange-400 font-bold">Minimum Value</th>
                  <th className="p-3 text-orange-400 font-bold">Maximum Value</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-orange-400">byte</td>
                  <td className="p-3">1 byte (8 bits)</td>
                  <td className="p-3 font-mono">-128</td>
                  <td className="p-3 font-mono">127</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-orange-400">short</td>
                  <td className="p-3">2 bytes (16 bits)</td>
                  <td className="p-3 font-mono">-32,768</td>
                  <td className="p-3 font-mono">32,767</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-orange-400">int</td>
                  <td className="p-3">4 bytes (32 bits)</td>
                  <td className="p-3 font-mono">-2,147,483,648</td>
                  <td className="p-3 font-mono">2,147,483,647</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-orange-400">long</td>
                  <td className="p-3">8 bytes (64 bits)</td>
                  <td className="p-3 font-mono">-9,223,372,036,854,775,808</td>
                  <td className="p-3 font-mono">9,223,372,036,854,775,807</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-orange-400">float</td>
                  <td className="p-3">4 bytes (32-bit IEEE 754)</td>
                  <td className="p-3 font-mono text-sm">±3.4e−38</td>
                  <td className="p-3 font-mono text-sm">±3.4e+38</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-orange-400">double</td>
                  <td className="p-3">8 bytes (64-bit IEEE 754)</td>
                  <td className="p-3 font-mono text-sm">±1.8e−308</td>
                  <td className="p-3 font-mono text-sm">±1.8e+308</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-orange-400">char</td>
                  <td className="p-3">2 bytes (16-bit Unicode)</td>
                  <td className="p-3">0</td>
                  <td className="p-3">65,535</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-orange-400">boolean</td>
                  <td className="p-3">1 bit (JVM dependent)</td>
                  <td className="p-3">false</td>
                  <td className="p-3">true</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-orange-400">String</td>
                  <td className="p-3">2 bytes per char</td>
                  <td className="p-3">0 characters</td>
                  <td className="p-3">~2GB (~1 billion chars)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-orange-400">Array</td>
                  <td className="p-3">Varies</td>
                  <td className="p-3">0 elements</td>
                  <td className="p-3">Integer.MAX_VALUE elements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xl font-bold mb-3 text-orange-400">🔢 Integer Overflow</h4>
            <CodeBlock title="Integer Limits & Overflow">
{`// Maximum int value
System.out.println(Integer.MAX_VALUE);  // 2147483647
System.out.println(Integer.MIN_VALUE);  // -2147483648

// Overflow wraps around silently! ❌
int maxInt = Integer.MAX_VALUE;
System.out.println(maxInt + 1);  // -2147483648 ❌ Wraps to MIN!

// Use long for larger values
long bigNumber = 3000000000L;  // ✅ Needs L suffix
System.out.println(bigNumber);

// BigInteger for arbitrary precision
import java.math.BigInteger;
BigInteger huge = new BigInteger("9999999999999999999999");
huge = huge.multiply(huge);  // ✅ No overflow!`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3 text-orange-400">📏 String & Array Limits</h4>
            <CodeBlock title="Collection Size Limits">
{`// String max length: ~2GB or Integer.MAX_VALUE chars
String huge = "a".repeat(1_000_000);  // 1 million chars ✅
System.out.println(huge.length());

// Array max length: Integer.MAX_VALUE
int[] bigArray = new int[100_000_000];  // 100M elements
// But watch out for OutOfMemoryError!

// ArrayList uses arrays internally
import java.util.ArrayList;
ArrayList<Integer> list = new ArrayList<>();
// Max size: Integer.MAX_VALUE = 2,147,483,647

// Can cause heap memory issues
// java.lang.OutOfMemoryError: Java heap space`}
            </CodeBlock>
          </div>
        </div>

        <CodeBlock title="Floating Point Precision">
{`// float has 7 decimal digits precision
float pi = 3.14159265f;
System.out.println(pi);  // 3.1415927 (rounded!)

// double has 15-16 decimal digits precision
double piDouble = 3.14159265358979323846;
System.out.println(piDouble);  // 3.141592653589793 (more accurate)

// Special values
System.out.println(1.0 / 0.0);       // Infinity
System.out.println(-1.0 / 0.0);      // -Infinity
System.out.println(0.0 / 0.0);       // NaN (Not a Number)

// Check for special values
System.out.println(Double.isInfinite(1.0/0.0));  // true
System.out.println(Double.isNaN(0.0/0.0));       // true`}
        </CodeBlock>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-3">💡 Key Takeaways</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>int</strong> is most common - range: ±2.1 billion</li>
            <li>• <strong>long</strong> for larger numbers - range: ±9 quintillion</li>
            <li>• <strong>BigInteger/BigDecimal</strong> for unlimited precision</li>
            <li>• <strong>String</strong> can hold ~1 billion characters (2GB limit)</li>
            <li>• <strong>Arrays</strong> max size is Integer.MAX_VALUE but memory-limited</li>
            <li>• Integer overflow <strong>wraps silently</strong> - no error thrown!</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="limitations">
        <h3 className="text-3xl font-bold mb-6 text-orange-400">⚠️ Limitations & Constraints</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Java is a robust enterprise language, but it has some <span className="text-red-400 font-semibold">limitations</span> you need to understand.
            Knowing these helps you write better code and avoid common pitfalls in production systems.
          </p>
        </div>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-3">🚨 Critical Limitations to Remember</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Verbose syntax</strong> - More boilerplate code than Python/JavaScript</li>
            <li>• <strong>Slower startup time</strong> - JVM initialization overhead</li>
            <li>• <strong>Memory heavy</strong> - JVM uses significant RAM</li>
            <li>• <strong>No unsigned types</strong> - All integer types are signed</li>
            <li>• <strong>Checked exceptions</strong> - Must handle or declare exceptions</li>
            <li>• <strong>No operator overloading</strong> - Can't customize operators like C++</li>
          </ul>
        </InfoBox>

        <div className="space-y-6 mt-6">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Verbose Syntax</h4>
            <CodeBlock title="Boilerplate Code">
{`// Simple "Hello World" requires class and method
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}

// Compare to Python: print("Hello World")

// Reading a file requires lots of code
import java.io.*;
try (BufferedReader reader = new BufferedReader(
        new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}

// Python equivalent: print(open("file.txt").read())`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ No Unsigned Types</h4>
            <CodeBlock title="All Integers Are Signed">
{`// Java has NO unsigned types!
byte b = 127;        // Max value for byte
// byte b2 = 128;    // ❌ ERROR! Out of range

// If you need unsigned behavior, use next larger type
// For unsigned byte (0-255), use short
short unsignedByte = 200;  // ✅ Works

// For unsigned int, use long
long unsignedInt = 3000000000L;  // ✅ Beyond int range

// Or use Integer.toUnsignedString()
int negative = -1;
System.out.println(Integer.toUnsignedString(negative));
// Prints: 4294967295 (interpreted as unsigned)

// Workaround for bitwise operations
int unsigned = someValue & 0xFF;  // Treat as unsigned byte`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Checked Exceptions</h4>
            <CodeBlock title="Must Handle Exceptions">
{`// Must catch or declare checked exceptions
// Won't compile without try-catch or throws!

// Method 1: Try-catch
public void readFile(String path) {
    try {
        FileReader reader = new FileReader(path);
        // ... read file
    } catch (FileNotFoundException e) {
        System.err.println("File not found: " + path);
    }
}

// Method 2: Declare throws
public void readFile(String path) throws FileNotFoundException {
    FileReader reader = new FileReader(path);
    // Caller must handle the exception
}

// Python/JavaScript don't force this - more flexible but less safe`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Silent Integer Overflow</h4>
            <CodeBlock title="Overflow Wraps Without Warning">
{`// Integer overflow is SILENT in Java! ❌
int max = Integer.MAX_VALUE;
System.out.println(max);      // 2147483647
System.out.println(max + 1);  // -2147483648 ❌ Wrapped!

// Can cause serious bugs in calculations
int a = 1000000;
int b = 1000000;
int result = a * b;  // ❌ Overflow! Wrong result!
System.out.println(result);  // -727379968 (not 1 trillion!)

// Solution 1: Use larger type
long result = (long)a * b;  // ✅ Cast to long first
System.out.println(result);  // 1000000000000

// Solution 2: Check before operation
if (a > Integer.MAX_VALUE / b) {
    throw new ArithmeticException("Overflow!");
}`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ JVM Memory Overhead</h4>
            <CodeBlock title="Memory Consumption">
{`// Java objects have overhead
// Minimum object size: 16 bytes (even for empty object!)

// Integer takes more memory than int
int primitive = 42;      // 4 bytes
Integer wrapper = 42;    // 16-24 bytes (object overhead)

// Arrays also have overhead
int[] small = new int[10];  // ~60 bytes (10*4 + overhead)

// String overhead
String s = "Hi";  // ~40-50 bytes minimum (object + char array)

// JVM itself needs memory
// -Xms: initial heap size
// -Xmx: maximum heap size
// Default JVM might use 100-500MB even for small programs

// Monitor with: Runtime.getRuntime().totalMemory()`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Slow Startup Time</h4>
            <CodeBlock title="JVM Initialization">
{`// Java programs have startup overhead
// JVM must:
// 1. Load JVM
// 2. Initialize class loaders
// 3. JIT compile hot code
// 4. Initialize garbage collector

// Simple program still takes 50-200ms to start
public static void main(String[] args) {
    long start = System.currentTimeMillis();
    System.out.println("Hello");
    long end = System.currentTimeMillis();
    System.out.println("Time: " + (end - start) + "ms");
}

// Compare to:
// - C: <1ms
// - Python: ~10-30ms
// - Node.js: ~30-50ms

// Solutions:
// - Use GraalVM native-image for instant startup
// - Keep JVM running (servers, long-running apps)
// - Use Spring Native for faster startup`}
            </CodeBlock>
          </div>
        </div>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-3">✅ Best Practices to Work Around Limitations</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• Use <strong>modern Java features</strong> (var, records, text blocks) to reduce verbosity</li>
            <li>• Cast to <strong>larger types before math operations</strong> to prevent overflow</li>
            <li>• Use <strong>BigInteger/BigDecimal</strong> for financial calculations</li>
            <li>• Tune <strong>JVM heap size</strong> (-Xms, -Xmx) for production</li>
            <li>• Use <strong>primitive types</strong> instead of wrappers when possible</li>
            <li>• Consider <strong>GraalVM native-image</strong> for faster startup</li>
            <li>• Use <strong>try-with-resources</strong> for automatic resource cleanup</li>
          </ul>
        </InfoBox>
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

      <Section id="usage">
        <h3 className="text-3xl font-bold mb-6 text-orange-400">🌍 Real-World Usage & Applications</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Java is the <span className="text-orange-400 font-semibold">backbone of enterprise software</span>!
            It powers banking systems, Android apps, big data processing, trading platforms, and countless mission-critical applications. "Write Once, Run Anywhere" makes it ideal for cross-platform development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🏢</div>
            <h4 className="text-xl font-bold mb-2 text-blue-400">Enterprise Applications</h4>
            <p className="text-slate-300 text-sm mb-3">Large-scale business systems, banking, finance</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              Spring Boot, Java EE, Hibernate, JPA
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">📱</div>
            <h4 className="text-xl font-bold mb-2 text-green-400">Android Development</h4>
            <p className="text-slate-300 text-sm mb-3">Native Android mobile applications</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              Android SDK, Android Studio, Jetpack
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">📊</div>
            <h4 className="text-xl font-bold mb-2 text-purple-400">Big Data Processing</h4>
            <p className="text-slate-300 text-sm mb-3">Data pipelines, analytics, distributed computing</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              Apache Hadoop, Spark, Kafka, Flink
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🌐</div>
            <h4 className="text-xl font-bold mb-2 text-orange-400">Web Backend Services</h4>
            <p className="text-slate-300 text-sm mb-3">REST APIs, microservices, web applications</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Popular Tools:</strong><br/>
              Spring Boot, Micronaut, Quarkus, Vert.x
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">💹</div>
            <h4 className="text-xl font-bold mb-2 text-yellow-400">Financial Trading Systems</h4>
            <p className="text-slate-300 text-sm mb-3">High-frequency trading, stock exchanges</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Used By:</strong><br/>
              Wall Street, banks, trading firms
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">☁️</div>
            <h4 className="text-xl font-bold mb-2 text-teal-400">Cloud Infrastructure</h4>
            <p className="text-slate-300 text-sm mb-3">Cloud platforms, containerized apps</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Platforms:</strong><br/>
              AWS, Azure, Google Cloud, Kubernetes
            </div>
          </motion.div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">🏢 Major Companies Using Java</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🛒</div>
              <div className="font-bold text-orange-400">Amazon</div>
              <div className="text-xs text-slate-400">Backend services</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">💼</div>
              <div className="font-bold text-blue-500">LinkedIn</div>
              <div className="text-xs text-slate-400">Platform infrastructure</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🛍️</div>
              <div className="font-bold text-red-400">eBay</div>
              <div className="text-xs text-slate-400">Core platform</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-bold text-blue-400">Twitter</div>
              <div className="text-xs text-slate-400">Backend (some services)</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">📺</div>
              <div className="font-bold text-red-500">Netflix</div>
              <div className="text-xs text-slate-400">Backend platform</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🏦</div>
              <div className="font-bold text-blue-400">Banks</div>
              <div className="text-xs text-slate-400">Financial systems</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🔍</div>
              <div className="font-bold text-blue-400">Google</div>
              <div className="text-xs text-slate-400">Android, backend</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🚗</div>
              <div className="font-bold text-gray-400">Uber</div>
              <div className="text-xs text-slate-400">Backend services</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
          <h4 className="text-xl font-bold mb-3 text-orange-400">📊 Job Market & Demand</h4>
          <div className="grid md:grid-cols-3 gap-4 text-slate-300">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-1">High</div>
              <div className="text-sm">Consistent enterprise demand</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-1">Top 3</div>
              <div className="text-sm">Most used language worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-1">$80k-$160k</div>
              <div className="text-sm">Average salary range (US)</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="purpose">
        <h3 className="text-3xl font-bold mb-6 text-orange-400">📜 Purpose & History</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-bold mb-3 text-white">🎯 Why Was Java Created?</h4>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Java was created in <span className="text-orange-400 font-semibold">1995 by James Gosling</span> at Sun Microsystems (now Oracle).
              The goal was to create a language that could <span className="text-orange-400 font-semibold">"Write Once, Run Anywhere" (WORA)</span> -
              code that runs on any device with a Java Virtual Machine, from servers to smart cards.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-orange-400/30">
                <h5 className="text-lg font-bold mb-3 text-orange-400">🎯 Core Goals</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Platform independence (run anywhere)</li>
                  <li>• Automatic memory management (garbage collection)</li>
                  <li>• Security (sandboxed execution)</li>
                  <li>• Object-oriented design</li>
                  <li>• Familiar syntax (based on C/C++)</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-400/30">
                <h5 className="text-lg font-bold mb-3 text-blue-400">✅ Key Innovations</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Java Virtual Machine (JVM)</li>
                  <li>• Bytecode compilation</li>
                  <li>• Automatic garbage collection</li>
                  <li>• Strong type safety</li>
                  <li>• Rich standard library</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🚀 Key Milestones in Java History</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-orange-400 font-bold min-w-20">1995</div>
                <div className="text-slate-300">Java 1.0 released by Sun Microsystems - "Write Once, Run Anywhere"</div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange-400 font-bold min-w-20">1996</div>
                <div className="text-slate-300">First Java Development Kit (JDK 1.0)</div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange-400 font-bold min-w-20">2004</div>
                <div className="text-slate-300">Java 5 - Generics, enhanced for loop, autoboxing</div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange-400 font-bold min-w-20">2006</div>
                <div className="text-slate-300">Java becomes open source (OpenJDK)</div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange-400 font-bold min-w-20">2014</div>
                <div className="text-slate-300">Java 8 - Lambdas, streams, functional programming features</div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange-400 font-bold min-w-20">2017+</div>
                <div className="text-slate-300">6-month release cycle - faster evolution (Java 9, 10, 11...)</div>
              </div>
              <div className="flex gap-4">
                <div className="text-orange-400 font-bold min-w-20">2024</div>
                <div className="text-slate-300">Java 21 LTS - Virtual threads, pattern matching, records</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-3 text-white">💡 Design Philosophy</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-blue-400 mb-2">🔒 Safety First</div>
                <p className="text-slate-300 text-sm">
                  Strong typing, no pointers, automatic memory management prevent common bugs
                </p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-green-400 mb-2">🌐 Platform Independent</div>
                <p className="text-slate-300 text-sm">
                  Compile once, run on Windows, Mac, Linux, mobile - anywhere with a JVM
                </p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-purple-400 mb-2">🏢 Enterprise Ready</div>
                <p className="text-slate-300 text-sm">
                  Built for large teams, long-term projects, and mission-critical systems
                </p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-orange-400 mb-2">📚 Batteries Included</div>
                <p className="text-slate-300 text-sm">
                  Massive standard library (java.util, java.io, java.net, etc.)
                </p>
              </div>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="text-xl font-bold mb-3">🤔 Fun Facts</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Originally called <strong>"Oak"</strong> after a tree outside James Gosling's office</li>
              <li>• The Java logo is a <strong>steaming coffee cup</strong> (named after Java coffee)</li>
              <li>• Java applets used to run in browsers but are now <strong>deprecated</strong></li>
              <li>• Android uses Java but runs on a <strong>different VM</strong> (not standard JVM)</li>
              <li>• Java SE, Java EE, Java ME - <strong>three editions</strong> for different platforms</li>
              <li>• Minecraft (original version) was <strong>written in Java</strong></li>
            </ul>
          </InfoBox>
        </div>
      </Section>

      <Section id="future">
        <h3 className="text-3xl font-bold mb-6 text-orange-400">🔮 Future Outlook & Trends</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">🏢</div>
            <div className="text-2xl font-bold text-green-400 mb-2">Enterprise Dominant</div>
            <div className="text-sm text-slate-300">Unshakeable in business applications</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">📈</div>
            <div className="text-2xl font-bold text-blue-400 mb-2">Stable & Mature</div>
            <div className="text-sm text-slate-300">Battle-tested, reliable, trusted</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">⚡</div>
            <div className="text-2xl font-bold text-purple-400 mb-2">Modernizing Fast</div>
            <div className="text-sm text-slate-300">New features every 6 months</div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🔥 Current Trends (2024-2026)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-bold text-orange-400 mb-3">Rising Technologies</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✅ <strong>Virtual Threads (Project Loom)</strong> - Lightweight concurrency</li>
                  <li>✅ <strong>GraalVM</strong> - Native compilation, polyglot VM</li>
                  <li>✅ <strong>Spring Boot 3</strong> - Modern microservices</li>
                  <li>✅ <strong>Kotlin</strong> - Modern JVM language gaining popularity</li>
                  <li>✅ <strong>Jakarta EE</strong> - Eclipse-led enterprise Java</li>
                  <li>✅ <strong>Reactive programming</strong> - Project Reactor, RxJava</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-bold text-orange-400 mb-3">Declining/Legacy</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>⚠️ <strong>Java 8</strong> - Upgrade to Java 11/17/21 LTS</li>
                  <li>⚠️ <strong>Java EE</strong> - Replaced by Jakarta EE</li>
                  <li>⚠️ <strong>JSP/Servlets</strong> - Modern frameworks preferred</li>
                  <li>⚠️ <strong>XML configuration</strong> - Annotations and code config</li>
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
                  <h5 className="font-bold text-orange-400 mb-1">Java Will Remain Enterprise King</h5>
                  <p className="text-slate-300 text-sm">
                    Millions of existing Java applications, massive investments, and proven reliability ensure Java's dominance
                    in banking, finance, and large enterprises for decades.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-orange-400 mb-1">Virtual Threads Will Transform Scalability</h5>
                  <p className="text-slate-300 text-sm">
                    Project Loom's virtual threads (Java 21+) make it trivial to handle millions of concurrent connections.
                    This will revitalize Java for modern cloud applications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-orange-400 mb-1">GraalVM Native Compilation Growing</h5>
                  <p className="text-slate-300 text-sm">
                    Instant startup times and lower memory usage make Java competitive with Go and Rust for cloud-native apps.
                    Spring Native and Quarkus lead this trend.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-orange-400 mb-1">Kotlin Complements Java</h5>
                  <p className="text-slate-300 text-sm">
                    Kotlin (especially for Android) and Java coexist peacefully on the JVM. Modern teams use both together,
                    not as competitors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-orange-400 mb-1">Faster Release Cycle Continues</h5>
                  <p className="text-slate-300 text-sm">
                    New Java version every 6 months with incremental improvements. LTS versions (11, 17, 21) provide
                    long-term stability for enterprises.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-yellow-400 mb-1">Mobile Share Declining (Android moving to Kotlin)</h5>
                  <p className="text-slate-300 text-sm">
                    Google promotes Kotlin as the preferred language for Android. New Android projects increasingly use Kotlin,
                    though Java remains supported.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3 text-orange-400">💼 Career Outlook</h4>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h5 className="font-bold text-white mb-2">Job Market</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Stable high demand</strong> - especially enterprise</li>
                  <li>• <strong>Remote opportunities</strong> abundant</li>
                  <li>• <strong>Senior roles</strong> pay very well</li>
                  <li>• <strong>Banking/finance</strong> sectors hire heavily</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-white mb-2">Skills in Demand</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Spring Boot</strong> - Most requested</li>
                  <li>• <strong>Microservices</strong> - Architecture pattern</li>
                  <li>• <strong>Cloud platforms</strong> - AWS, Azure, GCP</li>
                  <li>• <strong>Kafka, Docker, Kubernetes</strong> - DevOps</li>
                </ul>
              </div>
            </div>
          </div>

          <InfoBox type="success">
            <h4 className="text-xl font-bold mb-3">✅ Why Java is a Great Choice</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• <strong>Enterprise standard</strong> - Millions of jobs worldwide</li>
              <li>• <strong>Platform independence</strong> - Run anywhere</li>
              <li>• <strong>Mature ecosystem</strong> - Libraries for everything</li>
              <li>• <strong>High salaries</strong> - Especially in finance and enterprise</li>
              <li>• <strong>Long-term stability</strong> - Java isn't going anywhere</li>
              <li>• <strong>Great tooling</strong> - IntelliJ IDEA, Eclipse, excellent IDEs</li>
              <li>• <strong>Modernizing rapidly</strong> - Virtual threads, records, pattern matching</li>
            </ul>
          </InfoBox>
        </div>
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

      <Section id="limits">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">💾 Memory Limits & Storage Capacity</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            C data types have <span className="text-blue-400 font-semibold">platform-dependent limits</span> that vary based on architecture (32-bit vs 64-bit).
            Understanding these limits is crucial for writing portable, safe code and avoiding buffer overflows.
          </p>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">📊 C Data Type Limits (Typical)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="p-3 text-blue-400 font-bold">Data Type</th>
                  <th className="p-3 text-blue-400 font-bold">Typical Size</th>
                  <th className="p-3 text-blue-400 font-bold">Minimum Value</th>
                  <th className="p-3 text-blue-400 font-bold">Maximum Value</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-blue-400">char</td>
                  <td className="p-3">1 byte</td>
                  <td className="p-3 font-mono">-128 (or 0 if unsigned)</td>
                  <td className="p-3 font-mono">127 (or 255 if unsigned)</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-blue-400">short</td>
                  <td className="p-3">2 bytes</td>
                  <td className="p-3 font-mono">-32,768</td>
                  <td className="p-3 font-mono">32,767</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-blue-400">int</td>
                  <td className="p-3">4 bytes (typically)</td>
                  <td className="p-3 font-mono">-2,147,483,648</td>
                  <td className="p-3 font-mono">2,147,483,647</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-blue-400">long</td>
                  <td className="p-3">4 or 8 bytes</td>
                  <td className="p-3 font-mono">Platform-dependent</td>
                  <td className="p-3 font-mono">Platform-dependent</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-blue-400">long long</td>
                  <td className="p-3">8 bytes</td>
                  <td className="p-3 font-mono">-9,223,372,036,854,775,808</td>
                  <td className="p-3 font-mono">9,223,372,036,854,775,807</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-blue-400">float</td>
                  <td className="p-3">4 bytes</td>
                  <td className="p-3 font-mono text-sm">±1.2e-38</td>
                  <td className="p-3 font-mono text-sm">±3.4e+38</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-blue-400">double</td>
                  <td className="p-3">8 bytes</td>
                  <td className="p-3 font-mono text-sm">±2.3e-308</td>
                  <td className="p-3 font-mono text-sm">±1.7e+308</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-blue-400">pointer</td>
                  <td className="p-3">4 or 8 bytes</td>
                  <td className="p-3">0 (NULL)</td>
                  <td className="p-3">Architecture-dependent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">* Sizes can vary by platform. Use sizeof() to check actual sizes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xl font-bold mb-3 text-blue-400">🔢 Platform-Dependent Sizes</h4>
            <CodeBlock title="Check Actual Sizes">
{`#include <stdio.h>
#include <limits.h>

int main() {
    // Check actual sizes on your system
    printf("char: %zu bytes\\n", sizeof(char));
    printf("int: %zu bytes\\n", sizeof(int));
    printf("long: %zu bytes\\n", sizeof(long));
    printf("pointer: %zu bytes\\n", sizeof(void*));

    // Check integer limits
    printf("INT_MAX: %d\\n", INT_MAX);
    printf("INT_MIN: %d\\n", INT_MIN);
    printf("LONG_MAX: %ld\\n", LONG_MAX);

    // On 32-bit: int=4, long=4, ptr=4
    // On 64-bit: int=4, long=8, ptr=8
    return 0;
}`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3 text-blue-400">⚠️ Integer Overflow</h4>
            <CodeBlock title="Overflow Behavior">
{`#include <stdio.h>
#include <limits.h>

int main() {
    // Integer overflow is UNDEFINED BEHAVIOR!
    int max = INT_MAX;
    printf("max: %d\\n", max);  // 2147483647

    int overflow = max + 1;
    printf("overflow: %d\\n", overflow);  // ❌ UNDEFINED!
    // Could be: -2147483648, crash, or anything!

    // Use unsigned for wrapping behavior
    unsigned int umax = UINT_MAX;
    unsigned int uwrap = umax + 1;  // ✅ Wraps to 0
    printf("wrapped: %u\\n", uwrap);  // 0

    return 0;
}`}
            </CodeBlock>
          </div>
        </div>

        <CodeBlock title="Buffer Sizes and Memory">
{`#include <stdio.h>
#include <string.h>

int main() {
    // Arrays have fixed size at compile time
    char name[10];  // 10 bytes on stack
    int numbers[1000];  // 4000 bytes on stack

    // Stack size typically 1-8 MB
    // Large arrays should use heap (malloc)
    int *big = malloc(10000000 * sizeof(int));  // 40 MB on heap
    if (big == NULL) {
        printf("Out of memory!\\n");
        return 1;
    }
    free(big);

    // Pointer size = architecture size
    printf("Pointer size: %zu bytes\\n", sizeof(void*));
    // 32-bit: 4 bytes (4GB address space)
    // 64-bit: 8 bytes (16 EB address space)

    return 0;
}`}
        </CodeBlock>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-3">💡 Key Takeaways</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>int</strong> is typically 4 bytes but NOT guaranteed by standard</li>
            <li>• <strong>long</strong> can be 4 or 8 bytes depending on platform</li>
            <li>• <strong>Pointers</strong> size equals architecture (4 bytes on 32-bit, 8 on 64-bit)</li>
            <li>• <strong>Integer overflow</strong> is undefined behavior - can crash!</li>
            <li>• Use <strong>limits.h</strong> constants (INT_MAX, LONG_MAX) for portability</li>
            <li>• <strong>Stack</strong> limited (1-8 MB), use <strong>heap</strong> for large data</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="limitations">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">⚠️ Limitations & Constraints</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            C gives you <span className="text-red-400 font-semibold">maximum control but minimum safety</span>.
            Understanding C's limitations is critical for writing secure, reliable systems-level code and avoiding catastrophic bugs.
          </p>
        </div>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-3">🚨 Critical Limitations to Remember</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Manual memory management</strong> - No garbage collection, must free() everything</li>
            <li>• <strong>No bounds checking</strong> - Buffer overflows are easy and dangerous</li>
            <li>• <strong>Undefined behavior everywhere</strong> - Integer overflow, null dereference, use-after-free</li>
            <li>• <strong>No strings</strong> - Only null-terminated char arrays</li>
            <li>• <strong>No built-in data structures</strong> - Must implement or use libraries</li>
            <li>• <strong>Pointer arithmetic dangers</strong> - Easy to corrupt memory</li>
          </ul>
        </InfoBox>

        <div className="space-y-6 mt-6">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Buffer Overflows - Most Dangerous Bug</h4>
            <CodeBlock title="Buffer Overflow Vulnerability">
{`#include <stdio.h>
#include <string.h>

int main() {
    char buffer[10];  // Only 10 bytes!

    // DANGEROUS - No bounds checking! ❌
    strcpy(buffer, "This is way too long for the buffer");
    // Writes past end of buffer! Overwrites stack!
    // Can crash or be exploited by attackers!

    // ALSO DANGEROUS ❌
    scanf("%s", buffer);  // User can enter > 10 chars!
    gets(buffer);  // NEVER USE! Removed from C11!

    // SAFER alternatives ✅
    strncpy(buffer, "Safe", sizeof(buffer) - 1);
    buffer[sizeof(buffer) - 1] = '\\0';  // Ensure null terminator

    // Or use snprintf ✅
    snprintf(buffer, sizeof(buffer), "Safe: %s", "input");

    return 0;
}`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Manual Memory Management</h4>
            <CodeBlock title="Memory Leaks & Use-After-Free">
{`#include <stdlib.h>
#include <stdio.h>

int main() {
    // Memory leak - forgot to free! ❌
    int *data = malloc(1000 * sizeof(int));
    // ... use data ...
    // Forgot free(data)!  Memory leaked!

    // Use-after-free ❌
    int *ptr = malloc(sizeof(int));
    *ptr = 42;
    free(ptr);
    printf("%d\\n", *ptr);  // ❌ UNDEFINED! Accessing freed memory!

    // Double-free ❌
    free(ptr);  // ❌ UNDEFINED! Already freed!

    // Correct usage ✅
    int *correct = malloc(sizeof(int));
    if (correct == NULL) {
        return 1;  // Check for allocation failure
    }
    *correct = 42;
    free(correct);
    correct = NULL;  // ✅ Set to NULL after free

    return 0;
}`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Undefined Behavior Everywhere</h4>
            <CodeBlock title="Common Undefined Behaviors">
{`#include <stdio.h>
#include <limits.h>

int main() {
    // Integer overflow ❌ UNDEFINED!
    int max = INT_MAX;
    int overflow = max + 1;  // Could be anything!

    // Null pointer dereference ❌
    int *ptr = NULL;
    *ptr = 42;  // ❌ CRASH (if you're lucky)

    // Array out of bounds ❌
    int arr[10];
    arr[100] = 42;  // ❌ No error! Corrupts memory!

    // Uninitialized variables ❌
    int x;
    printf("%d\\n", x);  // ❌ Random garbage value!

    // Division by zero ❌
    int zero = 0;
    int result = 10 / zero;  // ❌ UNDEFINED!

    // Shifting too far ❌
    int shift = 1 << 32;  // ❌ UNDEFINED for 32-bit int!

    return 0;
}`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ No Real Strings</h4>
            <CodeBlock title="String Handling Issues">
{`#include <string.h>
#include <stdio.h>

int main() {
    // Strings are just char arrays
    char str1[] = "Hello";  // 6 bytes (5 + '\\0')

    // Easy to forget null terminator ❌
    char str2[5];
    str2[0] = 'H'; str2[1] = 'i';  // Where's '\\0'?
    printf("%s\\n", str2);  // ❌ Reads past end!

    // Can't compare with == ❌
    char *a = "test";
    char *b = "test";
    if (a == b) {}  // ❌ Compares pointers, not strings!

    // Must use strcmp ✅
    if (strcmp(a, b) == 0) {}  // ✅ Correct

    // Can't assign with = ❌
    char dest[10];
    // dest = "Hello";  // ❌ Won't compile!
    strcpy(dest, "Hello");  // ✅ Must use strcpy

    // String length is O(n) ❌
    size_t len = strlen("long string");  // Scans until '\\0'

    return 0;
}`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ No Built-in Data Structures</h4>
            <CodeBlock title="Must Implement Everything">
{`// Want a dynamic array? Implement it yourself ❌
// Want a hash map? Implement it yourself ❌
// Want a linked list? Implement it yourself ❌

#include <stdlib.h>

// Manual dynamic array
typedef struct {
    int *data;
    size_t size;
    size_t capacity;
} DynamicArray;

void array_init(DynamicArray *arr) {
    arr->data = malloc(10 * sizeof(int));
    arr->size = 0;
    arr->capacity = 10;
}

void array_push(DynamicArray *arr, int value) {
    if (arr->size >= arr->capacity) {
        arr->capacity *= 2;
        arr->data = realloc(arr->data, arr->capacity * sizeof(int));
    }
    arr->data[arr->size++] = value;
}

void array_free(DynamicArray *arr) {
    free(arr->data);
}

// Compare to Python: list.append() just works!
// Compare to C++: std::vector<int> v; v.push_back(5);`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Pointer Arithmetic Dangers</h4>
            <CodeBlock title="Easy to Corrupt Memory">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;

    // Pointer arithmetic ✅
    ptr++;  // Points to arr[1]
    printf("%d\\n", *ptr);  // 2

    // Easy to go too far ❌
    ptr += 100;  // Way past end of array!
    *ptr = 42;  // ❌ Corrupts random memory!

    // Pointer subtraction can be dangerous
    int *p1 = &arr[0];
    int *p2 = &arr[4];
    ptrdiff_t diff = p2 - p1;  // 4 (OK)

    // But comparing unrelated pointers ❌
    int *other = malloc(sizeof(int));
    if (p1 < other) {}  // ❌ UNDEFINED! Different objects!
    free(other);

    return 0;
}`}
            </CodeBlock>
          </div>
        </div>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-3">✅ Best Practices for Safe C</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• Always use <strong>strncpy, snprintf</strong> instead of strcpy, sprintf</li>
            <li>• <strong>Check malloc return value</strong> for NULL before using</li>
            <li>• <strong>Initialize variables</strong> - never use uninitialized data</li>
            <li>• Set pointers to <strong>NULL after free</strong></li>
            <li>• Use <strong>valgrind</strong> to detect memory leaks and errors</li>
            <li>• Enable <strong>compiler warnings</strong>: -Wall -Wextra -Werror</li>
            <li>• Use <strong>AddressSanitizer</strong>: -fsanitize=address</li>
            <li>• Consider modern alternatives like <strong>Rust</strong> for new projects</li>
          </ul>
        </InfoBox>
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

      <Section id="usage">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">🌍 Real-World Usage & Applications</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            C is the <span className="text-blue-400 font-semibold">foundation of modern computing</span>!
            Operating systems, embedded devices, compilers, databases, and performance-critical systems are built with C. It's the language that powers the infrastructure of the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🖥️</div>
            <h4 className="text-xl font-bold mb-2 text-blue-400">Operating Systems</h4>
            <p className="text-slate-300 text-sm mb-3">OS kernels, device drivers, system utilities</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Examples:</strong><br/>
              Linux kernel, Windows kernel, macOS kernel
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🔌</div>
            <h4 className="text-xl font-bold mb-2 text-green-400">Embedded Systems</h4>
            <p className="text-slate-300 text-sm mb-3">IoT devices, microcontrollers, firmware</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Used In:</strong><br/>
              Arduino, Raspberry Pi, industrial control
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🗄️</div>
            <h4 className="text-xl font-bold mb-2 text-purple-400">Databases & Storage</h4>
            <p className="text-slate-300 text-sm mb-3">High-performance database engines</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Examples:</strong><br/>
              PostgreSQL, MySQL, Redis, SQLite
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">⚙️</div>
            <h4 className="text-xl font-bold mb-2 text-orange-400">Compilers & Interpreters</h4>
            <p className="text-slate-300 text-sm mb-3">Language implementations, toolchains</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Examples:</strong><br/>
              GCC, Clang, Python interpreter, JVM
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🎮</div>
            <h4 className="text-xl font-bold mb-2 text-yellow-400">Game Engines</h4>
            <p className="text-slate-300 text-sm mb-3">Performance-critical game code</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Used In:</strong><br/>
              Game engine cores, graphics rendering
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 p-6 rounded-xl"
          >
            <div className="text-4xl mb-3">🌐</div>
            <h4 className="text-xl font-bold mb-2 text-teal-400">Network Infrastructure</h4>
            <p className="text-slate-300 text-sm mb-3">Routers, protocols, network stacks</p>
            <div className="text-xs text-slate-400">
              <strong className="text-white">Examples:</strong><br/>
              TCP/IP stack, DNS servers, web servers
            </div>
          </motion.div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">🏢 Major Systems Written in C</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🐧</div>
              <div className="font-bold text-blue-400">Linux Kernel</div>
              <div className="text-xs text-slate-400">Core OS</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🪟</div>
              <div className="font-bold text-blue-500">Windows</div>
              <div className="text-xs text-slate-400">Kernel & drivers</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🗄️</div>
              <div className="font-bold text-purple-400">PostgreSQL</div>
              <div className="text-xs text-slate-400">Database engine</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🐍</div>
              <div className="font-bold text-green-400">CPython</div>
              <div className="text-xs text-slate-400">Python interpreter</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🔴</div>
              <div className="font-bold text-red-400">Redis</div>
              <div className="text-xs text-slate-400">In-memory database</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🎵</div>
              <div className="font-bold text-orange-400">Git</div>
              <div className="text-xs text-slate-400">Version control</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🌐</div>
              <div className="font-bold text-blue-400">Nginx</div>
              <div className="text-xs text-slate-400">Web server</div>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-bold text-gray-400">GNU Tools</div>
              <div className="text-xs text-slate-400">Core utilities</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6">
          <h4 className="text-xl font-bold mb-3 text-blue-400">📊 Job Market & Demand</h4>
          <div className="grid md:grid-cols-3 gap-4 text-slate-300">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">Stable</div>
              <div className="text-sm">Consistent demand for systems programming</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">Niche</div>
              <div className="text-sm">Specialized, high-value skills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">$70k-$150k</div>
              <div className="text-sm">Average salary range (US)</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="purpose">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">📜 Purpose & History</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-bold mb-3 text-white">🎯 Why Was C Created?</h4>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              C was created in <span className="text-blue-400 font-semibold">1972 by Dennis Ritchie</span> at Bell Labs for systems programming.
              The goal was to create a language with <span className="text-blue-400 font-semibold">low-level control like assembly</span> but with
              <span className="text-blue-400 font-semibold"> high-level abstractions</span> for portability. It was designed to write the UNIX operating system.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-400/30">
                <h5 className="text-lg font-bold mb-3 text-blue-400">🎯 Core Goals</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Direct hardware access (pointers, memory)</li>
                  <li>• Portable across different machines</li>
                  <li>• Minimal runtime overhead</li>
                  <li>• Small, simple language</li>
                  <li>• Efficient code generation</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-cyan-400/30">
                <h5 className="text-lg font-bold mb-3 text-cyan-400">✅ Revolutionary Ideas</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Portable assembly language</li>
                  <li>• Structured programming constructs</li>
                  <li>• Direct memory manipulation</li>
                  <li>• Minimal standard library</li>
                  <li>• Close to machine architecture</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🚀 Key Milestones in C History</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-blue-400 font-bold min-w-20">1972</div>
                <div className="text-slate-300">C created by Dennis Ritchie at Bell Labs</div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 font-bold min-w-20">1973</div>
                <div className="text-slate-300">UNIX rewritten in C (previously assembly)</div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 font-bold min-w-20">1978</div>
                <div className="text-slate-300">The C Programming Language book (K&R C) published</div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 font-bold min-w-20">1989</div>
                <div className="text-slate-300">ANSI C (C89) - First standardization</div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 font-bold min-w-20">1999</div>
                <div className="text-slate-300">C99 - inline functions, variable-length arrays, // comments</div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 font-bold min-w-20">2011</div>
                <div className="text-slate-300">C11 - Multithreading support, bounds checking</div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 font-bold min-w-20">2018</div>
                <div className="text-slate-300">C17/C18 - Minor updates, clarifications</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-3 text-white">💡 Design Philosophy</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-blue-400 mb-2">⚡ Performance First</div>
                <p className="text-slate-300 text-sm">
                  Direct hardware access, minimal abstractions, predictable performance
                </p>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-cyan-400 mb-2">🎯 Simplicity</div>
                <p className="text-slate-300 text-sm">
                  Small language, simple syntax, easy to learn basics
                </p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-purple-400 mb-2">🔧 Low-Level Control</div>
                <p className="text-slate-300 text-sm">
                  Pointers, manual memory, bit manipulation - full control
                </p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                <div className="text-lg font-bold text-green-400 mb-2">📦 Portability</div>
                <p className="text-slate-300 text-sm">
                  Write once, compile anywhere - from embedded to supercomputers
                </p>
              </div>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="text-xl font-bold mb-3">🤔 Fun Facts</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Named <strong>"C"</strong> because it followed B language (which followed BCPL)</li>
              <li>• Dennis Ritchie also co-created <strong>UNIX</strong> with Ken Thompson</li>
              <li>• The classic <strong>"Hello, World!"</strong> example originated from K&R C book</li>
              <li>• C influenced almost every modern language: C++, Java, C#, JavaScript, Go, Rust</li>
              <li>• Still used to write <strong>new operating systems</strong> today (like Redox in Rust uses C FFI)</li>
              <li>• Dennis Ritchie and Ken Thompson won the <strong>Turing Award</strong> in 1983</li>
            </ul>
          </InfoBox>
        </div>
      </Section>

      <Section id="future">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">🔮 Future Outlook & Trends</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">🏛️</div>
            <div className="text-2xl font-bold text-blue-400 mb-2">Legacy Foundation</div>
            <div className="text-sm text-slate-300">Will never disappear</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">📉</div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">Declining for New</div>
            <div className="text-sm text-slate-300">Rust replacing for safety</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-xl text-center"
          >
            <div className="text-5xl mb-3">🔌</div>
            <div className="text-2xl font-bold text-green-400 mb-2">Still Dominant</div>
            <div className="text-sm text-slate-300">Embedded & OS work</div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🔥 Current Trends (2024-2026)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-bold text-blue-400 mb-3">Still Strong</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✅ <strong>Linux kernel</strong> - C will remain core language</li>
                  <li>✅ <strong>Embedded systems</strong> - No real alternative</li>
                  <li>✅ <strong>Legacy codebases</strong> - Billions of lines to maintain</li>
                  <li>✅ <strong>Performance critical</strong> - Still fastest for many tasks</li>
                  <li>✅ <strong>FFI/Interop</strong> - Every language needs C bindings</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-bold text-blue-400 mb-3">Being Replaced By</h5>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>⚠️ <strong>Rust</strong> - Memory safety without GC</li>
                  <li>⚠️ <strong>Go</strong> - Simpler systems programming</li>
                  <li>⚠️ <strong>Zig</strong> - Modern C alternative</li>
                  <li>⚠️ <strong>C++</strong> - Object-oriented systems code</li>
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
                  <h5 className="font-bold text-blue-400 mb-1">C Will Never Die (But Will Decline)</h5>
                  <p className="text-slate-300 text-sm">
                    Too much critical infrastructure written in C. Linux kernel, embedded systems, and legacy code
                    ensure C remains relevant for decades. But new projects increasingly choose alternatives.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-blue-400 mb-1">Rust Replacing C for New Systems Code</h5>
                  <p className="text-slate-300 text-sm">
                    Linux kernel now accepts Rust. Filesystems, drivers, and new OS projects choose Rust for memory safety.
                    C will maintain existing code, Rust will write new code.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-blue-400 mb-1">Embedded Systems Stay C-Dominant</h5>
                  <p className="text-slate-300 text-sm">
                    Microcontrollers, IoT devices, and resource-constrained systems will use C for the foreseeable future.
                    Rust making inroads but C's simplicity and toolchain maturity keep it on top.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-blue-400 mb-1">C23 Standard Won't Change Much</h5>
                  <p className="text-slate-300 text-sm">
                    C23 adds small improvements but keeps backward compatibility. C's design is essentially frozen -
                    any major changes would break too much existing code.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔮</div>
                <div>
                  <h5 className="font-bold text-yellow-400 mb-1">Security Concerns Growing</h5>
                  <p className="text-slate-300 text-sm">
                    70% of security vulnerabilities are memory safety issues. Governments and companies pushing for
                    memory-safe alternatives. C usage will decline in security-critical new projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3 text-blue-400">💼 Career Outlook</h4>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h5 className="font-bold text-white mb-2">Job Market</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Stable niche demand</strong> - specialized skills</li>
                  <li>• <strong>Embedded/IoT</strong> - consistent need</li>
                  <li>• <strong>Legacy maintenance</strong> - always needed</li>
                  <li>• <strong>Fewer new positions</strong> - declining for greenfield</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-white mb-2">Skills in Demand</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Linux kernel</strong> development</li>
                  <li>• <strong>Embedded C</strong> - microcontrollers</li>
                  <li>• <strong>Driver development</strong></li>
                  <li>• <strong>Performance optimization</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <InfoBox type="warning">
            <h4 className="text-xl font-bold mb-3">⚠️ Should You Learn C?</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• <strong>Yes for systems programming</strong> - Essential if you want to work on OS/embedded</li>
              <li>• <strong>Yes for understanding</strong> - Teaches memory, pointers, how computers really work</li>
              <li>• <strong>Consider Rust instead</strong> - For new projects, Rust provides safety without sacrificing performance</li>
              <li>• <strong>C is educational</strong> - Great for learning, but might not be your daily language</li>
              <li>• <strong>Legacy code everywhere</strong> - Many companies need C maintainers</li>
              <li>• <strong>Foundation knowledge</strong> - Makes learning other languages easier</li>
            </ul>
          </InfoBox>
        </div>
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

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">🔒 IMPORTANT: Both const and constexpr CANNOT be modified!</h4>
          <p className="text-slate-300 mb-2">
            The difference is <strong>WHEN</strong> the value must be known, NOT whether it can be changed:
          </p>
          <ul className="space-y-1 text-slate-300 text-sm">
            <li>• <strong>const</strong> = Value known at <span className="text-blue-400">runtime</span> (when program runs) - CANNOT modify</li>
            <li>• <strong>constexpr</strong> = Value known at <span className="text-green-400">compile-time</span> (when code compiles) - CANNOT modify</li>
          </ul>
        </InfoBox>

        <CodeBlock title="const - Runtime Constant (CANNOT be modified)">
{`// const - Value determined when program RUNS
const double PI = 3.14159;       // ✅ Value known at runtime
const int maxUsers = getUserLimit(); // ✅ Can call function (runtime)
const std::string name = "Alice"; // ✅ Runtime initialization

// ⛔ CANNOT MODIFY - Both lines cause errors!
// PI = 3.14;                    // ❌ ERROR - const cannot be modified!
// maxUsers = 200;               // ❌ ERROR - const cannot be modified!`}
        </CodeBlock>

        <CodeBlock title="constexpr - Compile-time Constant (CANNOT be modified)">
{`// constexpr - Value must be known when CODE COMPILES
constexpr int MAX_SIZE = 100;    // ✅ Known at compile time
constexpr double TAU = 2 * 3.14159; // ✅ Can use expressions
constexpr int arraySize = 50;    // ✅ Compile-time value

// ⛔ CANNOT MODIFY - Both cause errors!
// MAX_SIZE = 200;               // ❌ ERROR - constexpr cannot be modified!
// arraySize = 100;              // ❌ ERROR - constexpr cannot be modified!

// ⛔ CANNOT use runtime values
// constexpr int users = getUserLimit(); // ❌ ERROR - function runs at runtime!

// ✅ Benefits of constexpr
int array[MAX_SIZE];              // ✅ Works - compiler knows size
// Can't do this with const:
// const int size = 100;
// int arr[size];                // ❌ May not work - not guaranteed compile-time`}
        </CodeBlock>

        <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50 mb-4">
          <h4 className="text-lg font-bold text-purple-400 mb-3">📊 Quick Comparison</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-300">
              <thead className="border-b border-slate-600">
                <tr>
                  <th className="text-left p-2">Feature</th>
                  <th className="text-left p-2">const</th>
                  <th className="text-left p-2">constexpr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="p-2 font-semibold">Can be modified?</td>
                  <td className="p-2 text-red-400">❌ NO</td>
                  <td className="p-2 text-red-400">❌ NO</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">When is value known?</td>
                  <td className="p-2 text-blue-400">Runtime</td>
                  <td className="p-2 text-green-400">Compile-time</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Can use function calls?</td>
                  <td className="p-2 text-green-400">✅ YES</td>
                  <td className="p-2 text-red-400">❌ NO</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Can use for array size?</td>
                  <td className="p-2 text-yellow-400">⚠️ Maybe</td>
                  <td className="p-2 text-green-400">✅ YES</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Performance</td>
                  <td className="p-2">Normal</td>
                  <td className="p-2 text-green-400">Faster (optimized)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <CodeBlock title="When to Use Which?">
{`// Use const when value comes from runtime (user input, function, etc.)
const int userAge = getUserAge();        // ✅ const - runtime value
const std::string input = getInput();    // ✅ const - runtime value

// Use constexpr when value is truly fixed and known at compile time
constexpr int MAX_PLAYERS = 4;          // ✅ constexpr - always 4
constexpr double PI = 3.14159;          // ✅ constexpr - mathematical constant
constexpr int GRID_SIZE = 10;           // ✅ constexpr - fixed grid

// Convention: UPPERCASE for important constants
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

      <Section id="limits">
        <h3 className="text-3xl font-bold mb-6 text-indigo-400">💾 Memory Limits & Storage Capacity</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            C++ inherits C's platform-dependent limits but adds <span className="text-indigo-400 font-semibold">powerful STL containers</span> that grow dynamically.
            Understanding these limits helps you write efficient, portable C++ code and avoid performance pitfalls.
          </p>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">📊 C++ Data Type Limits</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="p-3 text-indigo-400 font-bold">Data Type</th>
                  <th className="p-3 text-indigo-400 font-bold">Typical Size</th>
                  <th className="p-3 text-indigo-400 font-bold">Minimum Value</th>
                  <th className="p-3 text-indigo-400 font-bold">Maximum Value</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-indigo-400">int</td>
                  <td className="p-3">4 bytes (typically)</td>
                  <td className="p-3 font-mono">-2,147,483,648</td>
                  <td className="p-3 font-mono">2,147,483,647</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-indigo-400">long long</td>
                  <td className="p-3">8 bytes</td>
                  <td className="p-3 font-mono">-9,223,372,036,854,775,808</td>
                  <td className="p-3 font-mono">9,223,372,036,854,775,807</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-indigo-400">size_t</td>
                  <td className="p-3">4 or 8 bytes</td>
                  <td className="p-3">0</td>
                  <td className="p-3">Architecture maximum</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-indigo-400">double</td>
                  <td className="p-3">8 bytes</td>
                  <td className="p-3 font-mono text-sm">±2.3e-308</td>
                  <td className="p-3 font-mono text-sm">±1.7e+308</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-mono text-indigo-400">vector&lt;T&gt;</td>
                  <td className="p-3">Dynamic (heap)</td>
                  <td className="p-3">0 elements</td>
                  <td className="p-3">max_size() (system-dependent)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-indigo-400">string</td>
                  <td className="p-3">Dynamic (heap)</td>
                  <td className="p-3">0 characters</td>
                  <td className="p-3">Limited by memory</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xl font-bold mb-3 text-indigo-400">🔢 Integer Limits</h4>
            <CodeBlock title="Numeric Limits">
{`#include <iostream>
#include <limits>

int main() {
    // Check limits at compile time
    std::cout << "int max: "
              << std::numeric_limits<int>::max() << "\\n";
    std::cout << "int min: "
              << std::numeric_limits<int>::min() << "\\n";

    // Long long for large values
    long long big = 9223372036854775807LL;
    std::cout << "long long max: " << big << "\\n";

    // size_t for container sizes
    std::vector<int> v(1000000);
    std::cout << "vector size: " << v.size() << "\\n";
    std::cout << "size_t max: "
              << std::numeric_limits<size_t>::max();

    return 0;
}`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3 text-indigo-400">📏 Container Capacity</h4>
            <CodeBlock title="STL Container Limits">
{`#include <vector>
#include <string>
#include <iostream>

int main() {
    // Vector max capacity
    std::vector<int> vec;
    std::cout << "vector max_size: "
              << vec.max_size() << "\\n";
    // Usually billions of elements

    // String max length
    std::string str;
    std::cout << "string max_size: "
              << str.max_size() << "\\n";

    // Large vector (watch memory!)
    std::vector<int> big(10000000);
    std::cout << "Created " << big.size()
              << " elements\\n";

    return 0;
}`}
            </CodeBlock>
          </div>
        </div>

        <CodeBlock title="Memory Management & RAII">
{`#include <memory>
#include <vector>

int main() {
    // Smart pointers (RAII) - automatic cleanup
    {
        std::unique_ptr<int> ptr =
            std::make_unique<int>(42);
        // Automatically freed when scope ends ✅
    }

    // Shared ownership
    std::shared_ptr<int> shared1 =
        std::make_shared<int>(100);
    std::shared_ptr<int> shared2 = shared1;
    // Freed when last shared_ptr dies

    // Vector manages its own memory
    std::vector<int> numbers;
    numbers.reserve(1000);
    for (int i = 0; i < 1000; i++) {
        numbers.push_back(i);
    }
    // Vector freed automatically ✅

    return 0;
}`}
        </CodeBlock>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-3">💡 Key Takeaways</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• Use <strong>std::numeric_limits&lt;T&gt;</strong> to check type limits portably</li>
            <li>• <strong>vector</strong> max_size() is typically billions but memory-limited</li>
            <li>• <strong>RAII</strong> (smart pointers, containers) prevents memory leaks</li>
            <li>• <strong>size_t</strong> is proper type for container sizes</li>
            <li>• STL containers handle memory management for you ✅</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="limitations">
        <h3 className="text-3xl font-bold mb-6 text-indigo-400">⚠️ Limitations & Constraints</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            C++ is <span className="text-red-400 font-semibold">powerful but complex</span>.
            It combines low-level control with high-level abstractions, but this flexibility comes with steep learning curves, long compilation times, and potential for subtle bugs.
          </p>
        </div>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-3">🚨 Critical Limitations to Remember</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Extremely complex</strong> - One of the hardest languages to master</li>
            <li>• <strong>Slow compilation</strong> - Large projects take minutes/hours</li>
            <li>• <strong>Manual memory management</strong> - Despite RAII, leaks still possible</li>
            <li>• <strong>Undefined behavior</strong> - Inherited from C, easy to trigger</li>
            <li>• <strong>No standard package manager</strong> - Dependency hell</li>
            <li>• <strong>Backward compatibility baggage</strong> - Decades of legacy</li>
          </ul>
        </InfoBox>

        <div className="space-y-6 mt-6">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Complexity & Learning Curve</h4>
            <CodeBlock title="Too Many Ways">
{`// C++ has TOO many features!

// Multiple ways to initialize
int a = 5;      // C-style
int b(5);       // Constructor
int c{5};       // Uniform (C++11)
auto e = 5;     // Type inference

// Memory management options
int* raw = new int(42);  // Raw ❌
delete raw;

std::unique_ptr<int> smart =
    std::make_unique<int>(42);  // Smart ✅

// Strings - which one?
char* cstr = "hello";         // C string
std::string str = "hello";    // std::string
std::string_view sv = "hello";// C++17

// Learning curve is STEEP! 📈`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Compilation Speed</h4>
            <CodeBlock title="Slow Build Times">
{`// Templates = slow compilation
#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
// Each include = THOUSANDS of lines!

// Template instantiation
template<typename T>
T max(T a, T b) { return a > b ? a : b; }

auto x = max(5, 10);      // max<int>
auto y = max(3.14, 2.71); // max<double>
// Each usage creates new code

// Large projects:
// - Clean build: 30+ minutes
// - Incremental: 1-5 minutes
// Compare to Go/Rust: seconds

// Solutions:
// - Precompiled headers
// - Forward declarations
// - ccache, distcc`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Memory Management Still Tricky</h4>
            <CodeBlock title="Easy to Leak or Crash">
{`#include <memory>
#include <vector>

// Even with RAII, can mess up

// 1. Circular references ❌
class Node {
public:
    std::shared_ptr<Node> next;
};

auto a = std::make_shared<Node>();
auto b = std::make_shared<Node>();
a->next = b;
b->next = a;  // ❌ Circular = leak!

// 2. Dangling references ❌
std::vector<int>& getDangling() {
    std::vector<int> local = {1, 2, 3};
    return local;  // ❌ Destroyed!
}

// 3. Iterator invalidation ❌
std::vector<int> vec = {1, 2, 3};
for (auto it = vec.begin();
     it != vec.end(); ++it) {
    vec.push_back(4);  // ❌ Invalidates!
}`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Template Error Messages</h4>
            <CodeBlock title="Incomprehensible Errors">
{`#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3};

    // Simple mistake
    std::sort(numbers.begin(),
              numbers.end(), 42);
    // ❌ Results in 100+ lines of errors:

    // error: no matching function...
    // candidate: template<class ...>
    // note: substitution failed...
    // ... (50 more lines) ...

    // Modern C++ helps:
    // - Concepts (C++20) better errors
    // - Still worse than Rust/Go
}`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ No Standard Package Manager</h4>
            <CodeBlock title="Build System Hell">
{`// C++ build systems: pick your poison

// CMakeLists.txt
cmake_minimum_required(VERSION 3.10)
project(MyApp)
set(CMAKE_CXX_STANDARD 17)
add_executable(myapp main.cpp)
// ... 100 more lines

// Or Makefile
CXX = g++
CXXFLAGS = -std=c++17 -Wall
myapp: main.o utils.o
    $(CXX) -o myapp main.o utils.o

// Dependencies? Manual:
// - Download source
// - Compile yourself
// - Set include paths
// - Link libraries
// - Hope versions match

// Compare to:
// - Rust: cargo add lib
// - Go: go get lib
// - Python: pip install lib`}
            </CodeBlock>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-red-400">❌ Backward Compatibility Baggage</h4>
            <CodeBlock title="40+ Years of Features">
{`// C++ has EVERYTHING

// C-style vs C++ style
int* arr = (int*)malloc(10*sizeof(int));
std::vector<int> vec(10);  // ✅

// NULL vs nullptr
int* p1 = NULL;     // C way ❌
int* p2 = nullptr;  // C++11 ✅

// printf vs iostream
printf("Hello %d\\n", 42);
std::cout << "Hello " << 42 << "\\n";

// Old vs modern
auto ptr = new int(42);  // Old ❌
auto p = std::make_unique<int>(42); // ✅

// Can't remove old features
// Language keeps growing
// C++98, 03, 11, 14, 17, 20, 23...`}
            </CodeBlock>
          </div>
        </div>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-3">✅ Best Practices for Modern C++</h4>
          <ul className="space-y-2 text-slate-300">
            <li>• Use <strong>smart pointers</strong> instead of raw new/delete</li>
            <li>• Prefer <strong>STL containers</strong> over raw arrays</li>
            <li>• Use <strong>auto</strong> for type inference where clear</li>
            <li>• Enable <strong>all warnings</strong>: -Wall -Wextra -Werror</li>
            <li>• Use <strong>sanitizers</strong>: -fsanitize=address</li>
            <li>• Follow <strong>C++ Core Guidelines</strong></li>
            <li>• Use <strong>clang-format</strong> and <strong>clang-tidy</strong></li>
            <li>• Consider <strong>Rust</strong> for new safety-critical projects</li>
          </ul>
        </InfoBox>
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

      <Section id="usage">
        <h3 className="text-3xl font-bold mb-6 text-indigo-400">🌍 Real-World Usage & Applications</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl border border-indigo-500/30"
          >
            <div className="text-4xl mb-4">🎮</div>
            <h4 className="text-xl font-bold text-indigo-300 mb-3">Game Engines</h4>
            <p className="text-slate-300 mb-3">
              AAA game engines and performance-critical games leverage C++'s speed and control.
            </p>
            <div className="text-sm text-indigo-400">
              Unreal Engine, Unity (backend), CryEngine, Godot
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 p-6 rounded-xl border border-indigo-500/30"
          >
            <div className="text-4xl mb-4">💹</div>
            <h4 className="text-xl font-bold text-indigo-300 mb-3">High-Frequency Trading</h4>
            <p className="text-slate-300 mb-3">
              Microsecond-level performance requirements demand C++'s raw speed and low latency.
            </p>
            <div className="text-sm text-indigo-400">
              Goldman Sachs, Citadel, Jane Street, HRT
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-indigo-900/50 to-cyan-900/50 p-6 rounded-xl border border-indigo-500/30"
          >
            <div className="text-4xl mb-4">🌐</div>
            <h4 className="text-xl font-bold text-indigo-300 mb-3">Web Browsers</h4>
            <p className="text-slate-300 mb-3">
              Modern browsers use C++ for rendering engines, JavaScript VMs, and performance-critical code.
            </p>
            <div className="text-sm text-indigo-400">
              Chrome (Blink), Firefox (Gecko), Safari (WebKit)
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-indigo-900/50 to-violet-900/50 p-6 rounded-xl border border-indigo-500/30"
          >
            <div className="text-4xl mb-4">🖥️</div>
            <h4 className="text-xl font-bold text-indigo-300 mb-3">Desktop Applications</h4>
            <p className="text-slate-300 mb-3">
              Professional desktop software requiring native performance and cross-platform compatibility.
            </p>
            <div className="text-sm text-indigo-400">
              Adobe Creative Suite, Microsoft Office, Autodesk
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-indigo-900/50 to-pink-900/50 p-6 rounded-xl border border-indigo-500/30"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="text-xl font-bold text-indigo-300 mb-3">Graphics & Rendering</h4>
            <p className="text-slate-300 mb-3">
              3D graphics, computer vision, and rendering engines need C++'s computational power.
            </p>
            <div className="text-sm text-indigo-400">
              OpenGL, DirectX, Vulkan, OpenCV, Blender
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-indigo-900/50 to-slate-900/50 p-6 rounded-xl border border-indigo-500/30"
          >
            <div className="text-4xl mb-4">⚙️</div>
            <h4 className="text-xl font-bold text-indigo-300 mb-3">System Software</h4>
            <p className="text-slate-300 mb-3">
              Operating systems, device drivers, and embedded systems leverage C++'s hardware control.
            </p>
            <div className="text-sm text-indigo-400">
              Windows components, macOS frameworks, embedded
            </div>
          </motion.div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">🏢 Companies Using C++</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-indigo-400 font-semibold mb-2">Tech Giants:</p>
              <ul className="text-slate-300 space-y-1 list-disc list-inside">
                <li>Google (Chrome, TensorFlow, Search infrastructure)</li>
                <li>Microsoft (Windows, Office, Azure components)</li>
                <li>Apple (macOS, iOS frameworks, Safari)</li>
                <li>Amazon (Infrastructure, performance-critical services)</li>
                <li>Meta (Infrastructure, HHVM compiler)</li>
              </ul>
            </div>
            <div>
              <p className="text-indigo-400 font-semibold mb-2">Specialized Industries:</p>
              <ul className="text-slate-300 space-y-1 list-disc list-inside">
                <li>Adobe (Photoshop, Illustrator, Premiere Pro)</li>
                <li>Epic Games (Unreal Engine, Fortnite)</li>
                <li>Activision Blizzard (Call of Duty, WoW)</li>
                <li>Bloomberg (Trading platforms)</li>
                <li>Tesla (Autopilot, vehicle software)</li>
              </ul>
            </div>
          </div>
        </div>

        <InfoBox type="info">
          <p className="font-semibold mb-2">Job Market Insights:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li><strong>Average Salary:</strong> $110,000-$150,000 (US, 2024)</li>
            <li><strong>Top Industries:</strong> Gaming, Finance, Aerospace, Automotive</li>
            <li><strong>Growth:</strong> Steady demand, especially in systems programming and game development</li>
            <li><strong>Skill Premium:</strong> C++ expertise commands higher salaries due to complexity</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="purpose">
        <h3 className="text-3xl font-bold mb-6 text-indigo-400">🎯 Purpose & Design Philosophy</h3>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">📜 Historical Context</h4>
          <div className="space-y-4 text-slate-300">
            <p>
              <strong className="text-indigo-400">Created:</strong> 1985 by Bjarne Stroustrup at Bell Labs
            </p>
            <p>
              <strong className="text-indigo-400">Original Name:</strong> "C with Classes" (1979)
            </p>
            <p>
              <strong className="text-indigo-400">First Commercial Release:</strong> October 1985
            </p>
            <p>
              <strong className="text-indigo-400">Standardization:</strong> First ISO standard in 1998 (C++98)
            </p>
            <p className="leading-relaxed">
              C++ was born from the need to add object-oriented programming features to C while maintaining
              its performance and low-level control. Stroustrup wanted "a better C" with classes, inheritance,
              and strong type checking, but without sacrificing the speed that made C the language of choice
              for systems programming.
            </p>
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">💡 Core Design Principles</h4>
          <div className="space-y-4">
            <div className="bg-indigo-900/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-indigo-300 mb-2">1. Zero-Overhead Abstraction</h5>
              <p className="text-slate-300">
                "What you don't use, you don't pay for. What you do use, you couldn't hand code any better."
                C++ features compile to efficient machine code with no runtime overhead.
              </p>
            </div>

            <div className="bg-indigo-900/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-indigo-300 mb-2">2. Direct Hardware Access</h5>
              <p className="text-slate-300">
                Provides low-level memory manipulation and hardware control like C, with high-level abstractions
                for when you need them. You control when and how memory is allocated.
              </p>
            </div>

            <div className="bg-indigo-900/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-indigo-300 mb-2">3. Multi-Paradigm Flexibility</h5>
              <p className="text-slate-300">
                Supports procedural, object-oriented, generic (templates), and functional programming.
                Choose the right tool for each problem without switching languages.
              </p>
            </div>

            <div className="bg-indigo-900/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-indigo-300 mb-2">4. Backward Compatibility</h5>
              <p className="text-slate-300">
                Almost complete compatibility with C. Can link with C libraries and gradually modernize codebases.
                New standards don't break existing code.
              </p>
            </div>

            <div className="bg-indigo-900/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-indigo-300 mb-2">5. Performance-First Mentality</h5>
              <p className="text-slate-300">
                Designed for systems where every CPU cycle and byte of memory matters. Compile-time computation,
                inline functions, and deterministic destructors enable predictable performance.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">🏛️ Key Milestones</h4>
          <div className="space-y-3 text-slate-300">
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[80px]">1979</span>
              <span>"C with Classes" - added classes, basic inheritance, inlining</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[80px]">1985</span>
              <span>First C++ release - added virtual functions, function/operator overloading</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[80px]">1989</span>
              <span>C++ 2.0 - multiple inheritance, abstract classes, static/const members</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[80px]">1998</span>
              <span>C++98 (ISO standard) - STL, templates, exceptions, namespaces</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[80px]">2011</span>
              <span>C++11 (major update) - auto, lambdas, move semantics, smart pointers</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[80px]">2014</span>
              <span>C++14 - refinements to C++11, generic lambdas</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[80px]">2017</span>
              <span>C++17 - std::optional, std::variant, filesystem, parallel algorithms</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[80px]">2020</span>
              <span>C++20 - concepts, coroutines, modules, ranges</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[80px]">2023</span>
              <span>C++23 - std::expected, std::print, multidimensional subscript operator</span>
            </div>
          </div>
        </div>

        <InfoBox type="success">
          <p className="font-semibold mb-2">Why C++ Still Matters:</p>
          <p className="text-slate-300">
            Despite being nearly 40 years old, C++ remains irreplaceable in domains where performance is paramount.
            Modern C++ (C++11 and beyond) has evolved significantly, adding safety features and abstractions while
            maintaining the core principle: zero-overhead abstraction. It bridges the gap between low-level control
            and high-level expressiveness better than any other language.
          </p>
        </InfoBox>
      </Section>

      <Section id="future">
        <h3 className="text-3xl font-bold mb-6 text-indigo-400">🔮 Future Outlook & Trends</h3>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">📈 Current Trends (2024-2026)</h4>
          <div className="space-y-4">
            <div className="bg-indigo-900/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-indigo-300 mb-2">1. Modern C++ Renaissance</h5>
              <p className="text-slate-300 mb-3">
                C++20 and C++23 features are making the language safer and more expressive. Concepts eliminate
                cryptic template errors, coroutines enable elegant async code, and modules speed up compilation.
              </p>
              <ul className="text-slate-300 space-y-1 list-disc list-inside">
                <li>Ranges and views for functional-style data processing</li>
                <li>std::format and std::print for type-safe formatting</li>
                <li>Pattern matching proposals (C++26 target)</li>
                <li>Safety profiles and lifetime analysis tools</li>
              </ul>
            </div>

            <div className="bg-indigo-900/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-indigo-300 mb-2">2. Competition from Rust</h5>
              <p className="text-slate-300 mb-3">
                Rust challenges C++ in systems programming with memory safety guarantees. However, C++ is fighting
                back with safety features and maintains advantages in legacy code integration and ecosystem maturity.
              </p>
              <ul className="text-slate-300 space-y-1 list-disc list-inside">
                <li>C++ Safe Buffers and bounds-checking proposals</li>
                <li>Compiler warnings and static analyzers improving</li>
                <li>Linux kernel exploring Rust, but C++ remains dominant in user space</li>
                <li>Many orgs prefer evolving C++ codebases over rewrites</li>
              </ul>
            </div>

            <div className="bg-indigo-900/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-indigo-300 mb-2">3. Gaming & Graphics Dominance</h5>
              <p className="text-slate-300 mb-3">
                C++ remains unchallenged in AAA game development and real-time graphics. Unreal Engine 5's continued
                evolution and adoption ensures C++ will dominate gaming for the foreseeable future.
              </p>
              <ul className="text-slate-300 space-y-1 list-disc list-inside">
                <li>Unreal Engine 5 widely adopted in film and gaming</li>
                <li>DirectX 12 and Vulkan APIs primarily C++-focused</li>
                <li>VR/AR development heavily relies on C++ performance</li>
                <li>Real-time ray tracing demands C++'s low-level control</li>
              </ul>
            </div>

            <div className="bg-indigo-900/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-indigo-300 mb-2">4. High-Performance Computing</h5>
              <p className="text-slate-300 mb-3">
                AI/ML inference, scientific computing, and financial modeling increasingly use C++ for production
                deployment where Python prototypes are too slow.
              </p>
              <ul className="text-slate-300 space-y-1 list-disc list-inside">
                <li>TensorFlow and PyTorch backends written in C++</li>
                <li>Quantitative trading algorithms demand microsecond latency</li>
                <li>CUDA and GPU programming primarily C++-based</li>
                <li>Embedded AI on edge devices requires C++ efficiency</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">🎯 C++26 and Beyond: What's Coming</h4>
          <div className="space-y-3 text-slate-300">
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[120px]">Pattern Matching</span>
              <span>Powerful switch-like construct for matching complex data structures</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[120px]">Reflection</span>
              <span>Compile-time introspection of types and metadata</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[120px]">Executors</span>
              <span>Standard async programming model for concurrent operations</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[120px]">Contracts</span>
              <span>Preconditions/postconditions for better correctness checking</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[120px]">std::linear</span>
              <span>Linear algebra library for scientific computing</span>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-bold min-w-[120px]">Improved Modules</span>
              <span>Faster compilation and better code organization</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <h4 className="text-2xl font-bold mb-4 text-white">💼 Career Outlook</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-lg font-bold text-indigo-300 mb-3">Strong Demand Areas:</h5>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li><strong>Game Development:</strong> Always hiring, especially for Unreal Engine</li>
                <li><strong>Financial Tech:</strong> High salaries for low-latency trading systems</li>
                <li><strong>Embedded Systems:</strong> Automotive, IoT, robotics growing rapidly</li>
                <li><strong>Graphics/VR:</strong> Increasing demand with metaverse push</li>
                <li><strong>System Software:</strong> OS, compilers, runtime engineers</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold text-indigo-300 mb-3">Market Realities:</h5>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li><strong>Learning Curve:</strong> Harder to learn = less competition</li>
                <li><strong>Salary Premium:</strong> 10-20% higher than average dev roles</li>
                <li><strong>Job Stability:</strong> Large legacy codebases need maintenance</li>
                <li><strong>Niche Expertise:</strong> Specialization highly valued</li>
                <li><strong>Remote Work:</strong> Increasing but still less common than web dev</li>
              </ul>
            </div>
          </div>
        </div>

        <InfoBox type="info">
          <p className="font-semibold mb-2">Verdict: C++ Isn't Going Anywhere</p>
          <p className="text-slate-300 mb-3">
            While newer languages like Rust and Go nibble at C++'s edges, its entrenched position in gaming,
            finance, and systems programming is virtually unassailable. The massive codebases (billions of lines),
            mature tooling, and specialized expertise make switching prohibitively expensive.
          </p>
          <p className="text-slate-300">
            <strong className="text-indigo-400">Prediction:</strong> C++ will remain a top-10 language through 2030
            and beyond. It will continue evolving toward safety and expressiveness while maintaining its core strength:
            unmatched performance with zero-overhead abstraction. If you master modern C++, you'll have career
            opportunities for decades to come.
          </p>
        </InfoBox>
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
          <h3 className="text-2xl font-bold mb-4 text-white">Understanding Type Systems</h3>

          <div className="mb-6 bg-slate-700/30 p-6 rounded-lg border border-slate-600/50">
            <h4 className="text-xl font-bold text-purple-400 mb-3">🤔 What Does "Statically Typed with Type Inference" Mean?</h4>
            <p className="text-slate-300 mb-4">
              This confuses many beginners! Let me break it down:
            </p>
            <div className="space-y-4 text-slate-300">
              <div>
                <div className="font-bold text-blue-400 mb-2">📌 Static Typing = Type Cannot Change</div>
                <p className="ml-4">Once a variable is a number, it stays a number. You can't change it to text later.</p>
                <p className="ml-4 text-sm text-slate-400">Example: If <code className="bg-slate-900 px-2 py-1 rounded">age</code> is a number, you can't later assign it a string.</p>
              </div>

              <div>
                <div className="font-bold text-green-400 mb-2">🎯 Type Inference = Compiler Figures Out the Type</div>
                <p className="ml-4">You don't have to write the type - the language figures it out automatically.</p>
                <p className="ml-4 text-sm text-slate-400">Example: You write <code className="bg-slate-900 px-2 py-1 rounded">let age = 25</code> and the language knows it's a number.</p>
              </div>

              <div>
                <div className="font-bold text-yellow-400 mb-2">✨ Static + Inference = Best of Both Worlds</div>
                <p className="ml-4">The type is still fixed (static), but you don't have to write it (inference)!</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-red-400 mb-3">❌ Static WITHOUT Inference</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p><span className="font-semibold">C, Old Java</span></p>
                <p>You MUST write the type every time:</p>
                <CodeBlock>
{`int age = 25;
String name = "Alice";
// ❌ Must type everything!`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-400 mb-3">✅ Static WITH Inference</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p><span className="font-semibold">TypeScript, Go, Rust, Kotlin, Swift, C++</span></p>
                <p>Language figures out the type:</p>
                <CodeBlock>
{`let age = 25;      // It knows: number
let name = "Alice"; // It knows: string
// ✅ Type is still fixed!
// age = "30" ❌ Error!`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-green-400 mb-3">🔄 Dynamic Typing</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p><span className="font-semibold">JavaScript, Python</span></p>
                <p>Type CAN change anytime:</p>
                <CodeBlock>
{`let age = 25;      // number
age = "Alice";     // ✅ Now string
age = true;        // ✅ Now boolean
// Type changes freely!`}
                </CodeBlock>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
            <h4 className="text-lg font-bold text-purple-400 mb-2">💡 Quick Summary</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <p><strong>Old Way (C, Old Java):</strong> <code className="bg-slate-900 px-2 py-1 rounded">int age = 25;</code> - Must write "int"</p>
              <p><strong>Modern Static (TypeScript, Go, Rust):</strong> <code className="bg-slate-900 px-2 py-1 rounded">let age = 25;</code> - Figures out it's a number, but type is FIXED</p>
              <p><strong>Dynamic (JavaScript, Python):</strong> <code className="bg-slate-900 px-2 py-1 rounded">let age = 25;</code> - Can change to any type later</p>
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
