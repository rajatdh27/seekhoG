import Section from "@/app/components/common/Section";
import CodeBlock from "@/app/components/common/CodeBlock";
import InfoBox from "@/app/components/common/InfoBox";

export default function SwiftContent() {
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
            Swift is Apple&apos;s modern language designed to be safe, fast, and expressive - perfect for building iOS, macOS, and other Apple platform apps.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">let name = &quot;Alice&quot;</code> creates a constant (immutable) variable.
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
            Swift gives you <span className="text-orange-400 font-semibold">Objective-C&apos;s power with modern safety</span>!
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
              <p className="text-slate-300">Clean, readable code that&apos;s easy to maintain</p>
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
            <li>✅ Always start with <strong>let</strong> - it&apos;s safer and compiler can optimize better</li>
            <li>✅ Only change to <strong>var</strong> if you get a compiler error saying you need to modify the value</li>
            <li>✅ Using let prevents bugs from accidental changes</li>
            <li>💡 Xcode will suggest changing var to let if you never modify the value!</li>
          </ul>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Optionals - Safe Handling of nil</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Swift&apos;s <span className="text-orange-400 font-semibold">optionals</span> are a key safety feature!
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
let emptyName: String? = null          // ✅ OK - explicitly optional

var optionalAge: Int? = 25       // ✅ Can be Int or nil
optionalAge = nil                // ✅ OK - optional

// Unwrapping optionals safely
if let name = optionalName {     // ✅ Optional binding
    print("Name is \(name)")     // ✅ Safe - name is non-optional here
}

// Nil coalescing operator ??
let displayName = optionalName ?? "Guest"  // ✅ Use "Guest" if null
let count = optionalAge ?? 0               // ✅ Use 0 if null

// Optional chaining with ?.
let length = optionalName?.count           // ✅ Returns count or nil`}
        </CodeBlock>

        <InfoBox type="info">
          <h4 className="text-xl font-bold mb-2">🎯 Optionals Prevent Crashes!</h4>
          <p className="text-slate-300 mb-2">
            Optionals eliminate the #1 cause of crashes in Objective-C - accessing nil:
          </p>
          <div className="bg-slate-900 rounded p-3 text-sm space-y-1">
            <div><code className="text-green-400">let name: String = ...        // Never null</code></div>
            <div><code className="text-blue-400">let name: String? = ...       // Might be null</code></div>
            <div><code className="text-green-400">name.count                    // Safe - never crashes</code></div>
            <div><code className="text-blue-400">name?.count                   // Safe unwrap for optional</code></div>
          </div>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-orange-400 mt-6">Type Inference and Explicit Types</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Swift has <span className="text-orange-400 font-semibold">powerful type inference</span>.
            Most of the time you don&apos;t need to write the type - Swift figures it out!
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
            <li>✅ Can use Unicode characters: <code className="bg-slate-900 px-2 py-1 rounded">π = 3.14159</code>, <code className="bg-slate-900 px-2 py-1 rounded">🎉 = &quot;party&quot;</code></li>
            <li>❌ Can&apos;t start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can&apos;t use keywords: <code className="bg-slate-900 px-2 py-1 rounded">let</code>, <code className="bg-slate-900 px-2 py-1 rounded">var</code>, <code className="bg-slate-900 px-2 py-1 rounded">func</code> are reserved</li>
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
    print("Name is \(name)")
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
    print("String: \(str)")
}`}
        </CodeBlock>
      </Section>
    </div>
  );
}
