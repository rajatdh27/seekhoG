import { motion } from "framer-motion";
import Section from "./Section";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";

export default function PythonContent() {
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
            Just like you might use a jar labeled &quot;Sugar&quot; in your kitchen, in Python you give variables names to identify what data they hold.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, if you want to store someone&apos;s name, you create a variable called <code className="bg-slate-900 px-2 py-1 rounded text-green-400">name</code> and assign it the value &quot;Alice&quot;.
            Python makes this super simple - no complicated setup needed!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Dynamic & Simple in Python</h3>
          <p className="text-slate-300 text-lg mb-3">
            Python is <span className="text-green-400 font-semibold">dynamically typed</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You don&apos;t need to tell Python what type of data you&apos;re storing</li>
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
              <div className="text-lg font-semibold text-green-400 mb-2">✅ Store Information</div>
              <p className="text-slate-300">Remember user names, scores, settings, etc.</p>
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
            You don&apos;t need any special keywords - just write the variable name, an equals sign (=), and the value.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Python automatically understands what type of data you&apos;re storing. This is called <span className="text-green-400 font-semibold">implicit typing</span>.
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
          <h4 className="text-xl font-bold mb-2">🎯 Python&apos;s Simplicity</h4>
          <p className="text-slate-300">
            Unlike other languages, Python doesn&apos;t require you to write <code className="bg-slate-900 px-2 py-1 rounded">int age = 25</code> or
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">let name = "Alice"</code>.
            Just write <code className="bg-slate-900 px-2 py-1 rounded ml-1">age = 25</code> and you&apos;re done!
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
            <li>❌ Can&apos;t start with a number: <code className="bg-slate-900 px-2 py-1 rounded">2name</code> is invalid</li>
            <li>❌ Can&apos;t use Python keywords: <code className="bg-slate-900 px-2 py-1 rounded">if</code>, <code className="bg-slate-900 px-2 py-1 rounded">for</code>, <code className="bg-slate-900 px-2 py-1 rounded">while</code> are reserved</li>
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
            Python&apos;s data types have <span className="text-green-400 font-semibold">generous limits</span> and often grow dynamically.
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
print(factorial_100)  # 9332621544394415268169923885626670049071596826438162146859296389521759999322991560894146397615651828625369792082722375825118521091686400000000000000000000000

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
            <li>• Large numbers slow down operations but won&apos;t cause overflow errors</li>
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
              <strong className="text-white">Popular Tools:</strong><br />
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
              <strong className="text-white">Popular Tools:</strong><br />
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
              <strong className="text-white">Popular Tools:</strong><br />
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
              <strong className="text-white">Popular Tools:</strong><br />
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
              <strong className="text-white">Popular Tools:</strong><br />
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
              <strong className="text-white">Popular Tools:</strong><br />
              Pygame, Panda3D, Ren&apos;Py, Godot (GDScript)
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
                <h5 className="text-lg font-bold mb-3 text-green-400">✅ Python&apos;s Design Philosophy</h5>
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
If the implementation is hard to explain, it&apos;s a bad idea.
If the implementation is easy to explain, it may be a good idea.`}
              </pre>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="text-xl font-bold mb-3">🤔 Fun Facts</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Named after <strong>Monty Python&apos;s Flying Circus</strong>, not the snake!</li>
              <li>• Guido van Rossum was Python&apos;s <strong>&quot;Benevolent Dictator For Life&quot;</strong> (BDFL) until 2018</li>
              <li>• Python was a <strong>hobby project</strong> during Christmas break in 1989</li>
              <li>• The language emphasizes <strong>developer happiness</strong> over performance</li>
              <li>• Python&apos;s official package repository (PyPI) has <strong>500,000+ packages</strong></li>
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
                    With TensorFlow, PyTorch, and countless AI libraries, Python&apos;s dominance in artificial intelligence is unshakeable.
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
