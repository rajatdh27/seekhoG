import {
  motion
} from "framer-motion";
import Section from "./Section";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";

export default function CppContent() {
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
            <li>You can explicitly declare types OR use &apos;auto&apos; for inference</li>
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
            <li>❌ Can&apos;t start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can&apos;t use keywords: <code className="bg-slate-900 px-2 py-1 rounded">int</code>, <code className="bg-slate-900 px-2 py-1 rounded">class</code>, <code className="bg-slate-900 px-2 py-1 rounded">auto</code> are reserved</li>
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
            C++ inherits C&apos;s platform-dependent limits but adds <span className="text-indigo-400 font-semibold">powerful STL containers</span> that grow dynamically.
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
              << std::numeric_limits<int>::max() << "\n";
    std::cout << "int min: "
              << std::numeric_limits<int>::min() << "\n";

    // Long long for large values
    long long big = 9223372036854775807LL;
    std::cout << "long long max: " << big << "\n";

    // size_t for container sizes
    std::vector<int> v(1000000);
    std::cout << "vector size: " << v.size() << "\n";
    std::cout << "size_t max: "
              << std::numeric_limits<size_t>::max();

    return 0;
}`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3 text-indigo-400">📏 STL Container Limits</h4>
            <CodeBlock title="STL Container Limits">
              {`#include <vector>
#include <string>
#include <iostream>

int main() {
    // Vector max capacity
    std::vector<int> vec;
    std::cout << "vector max_size: "
              << vec.max_size() << "\n";
    // Usually billions of elements

    // String max length
    std::string str;
    std::cout << "string max_size: "
              << str.max_size() << "\n";

    // Large vector (watch memory!)
    std::vector<int> big(10000000);
    std::cout << "Created " << big.size() << " elements\n";

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
    // - Still worse than Rust/Go`}
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
printf("Hello %d\n", 42);
std::cout << "Hello " << 42 << "\n";

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
              AAA game engines and performance-critical games leverage C++&apos;s speed and control.
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
              Microsecond-level performance requirements demand C++&apos;s raw speed and low latency.
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
              3D graphics, computer vision, and rendering engines need C++&apos;s computational power.
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
              Operating systems, device drivers, and embedded systems leverage C++&apos;s hardware control.
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
              <strong className="text-indigo-400">Original Name:</strong> &quot;C with Classes&quot; (1979)
            </p>
            <p>
              <strong className="text-indigo-400">First Commercial Release:</strong> October 1985
            </p>
            <p>
              <strong className="text-indigo-400">Standardization:</strong> First ISO standard in 1998 (C++98)
            </p>
            <p className="leading-relaxed">
              C++ was born from the need to add object-oriented programming features to C while maintaining
              its performance and low-level control. Stroustrup wanted &quot;a better C&quot; with classes, inheritance,
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
                &quot;What you don&apos;t use, you don&apos;t pay for. What you do use, you couldn&apos;t hand code any better.&quot;
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
                New standards don&apos;t break existing code.
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
              <span>&quot;C with Classes&quot; - added classes, basic inheritance, inlining</span>
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
                C++ remains unchallenged in AAA game development and real-time graphics. Unreal Engine 5&apos;s continued
                evolution and adoption ensures C++ will dominate gaming for the foreseeable future.
              </p>
              <ul className="text-slate-300 space-y-1 list-disc list-inside">
                <li>Unreal Engine 5 widely adopted in film and gaming</li>
                <li>DirectX 12 and Vulkan APIs primarily C++-focused</li>
                <li>VR/AR development heavily relies on C++ performance</li>
                <li>Real-time ray tracing demands C++&apos;s low-level control</li>
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
          <h4 className="text-2xl font-bold mb-4 text-white">🎯 C++26 and Beyond: What&apos;s Coming</h4>
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
          <p className="font-semibold mb-2">Verdict: C++ Isn&apos;t Going Anywhere</p>
          <p className="text-slate-300 mb-3">
            While newer languages like Rust and Go nibble at C++&apos;s edges, its entrenched position in gaming,
            finance, and systems programming is virtually unassailable. The massive codebases (billions of lines),
            mature tooling, and specialized expertise make switching prohibitively expensive.
          </p>
          <p className="text-slate-300">
            <strong className="text-indigo-400">Prediction:</strong> C++ will remain a top-10 language through 2030
            and beyond. It will continue evolving toward safety and expressiveness while maintaining its core strength:
            unmatched performance with zero-overhead abstraction. If you master modern C++, you&apos;ll have career
            opportunities for decades to come.
          </p>
        </InfoBox>
      </Section>
    </div>
  );
}