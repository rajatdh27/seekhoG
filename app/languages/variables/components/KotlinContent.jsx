import Section from "./Section";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";

export default function KotlinContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Kotlin Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-purple-400 font-semibold">modern, safe container</span>.
            Kotlin is designed to be &quot;better Java&quot; - it takes everything good about Java and adds safety, conciseness, and modern features like immutability by default.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">val name = &quot;Alice&quot;</code> creates a variable that can never be changed. Kotlin wants you to be safe!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 Modern, Safe, and Concise</h3>
          <p className="text-slate-300 text-lg mb-3">
            Kotlin is <span className="text-purple-400 font-semibold">statically typed with smart features</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Types are checked at compile time</li>
            <li>Null safety is built into the type system (No more NullPointerExceptions!)</li>
            <li>Type inference makes your code clean and readable</li>
            <li>Explicit distinction between mutable and immutable variables</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            Kotlin makes it <span className="text-purple-400 font-semibold">hard to write buggy code</span>!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-purple-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-purple-400 mb-2">✅ Null Safety</div>
              <p className="text-slate-300">Eliminate common crashes by design</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-purple-400 mb-2">✅ Less Boilerplate</div>
              <p className="text-slate-300">Clean syntax means more work with less code</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-purple-400 mb-2">✅ Interoperability</div>
              <p className="text-slate-300">Works 100% with Java code and libraries</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-purple-400 mb-2">✅ Modern Features</div>
              <p className="text-slate-300">Smart casts, string templates, and more</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-purple-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Kotlin has <span className="text-purple-400 font-semibold">two main keywords</span> for variables:
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">val</code> (read-only) and
            <code className="bg-slate-900 px-2 py-1 rounded ml-1">var</code> (mutable).
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Kotlin encourages using <code className="bg-slate-900 px-2 py-1 rounded">val</code> as much as possible for safety!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-purple-400/50">
            <div className="text-xl font-bold text-purple-400 mb-3">val (Read-Only)</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Best Choice</strong></div>
              <div>✅ Cannot be changed after assignment</div>
              <div>✅ Like &apos;final&apos; in Java</div>
              <div>✅ Safer code</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-indigo-400/50">
            <div className="text-xl font-bold text-indigo-400 mb-3">var (Mutable)</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>When Needed</strong></div>
              <div>✅ Can be changed multiple times</div>
              <div>✅ Like a regular Java variable</div>
              <div>⚠️ Use only when necessary</div>
            </div>
          </div>
        </div>

        <CodeBlock title="val - Read-Only Variables (Immutable)">
          {`// val creates a variable that cannot be changed
val name = "Alice"               // ✅ Type inferred as String
val age = 25                     // ✅ Type inferred as Int
val price = 19.99                // ✅ Type inferred as Double

// Once assigned, you can't change it
// name = "Bob"                  // ❌ ERROR: val cannot be reassigned

// With explicit type
val count: Int = 42              // ✅ Explicit type provided
val pi: Double = 3.14159         // ✅ Explicit type provided`}
        </CodeBlock>

        <CodeBlock title="var - Mutable Variables">
          {`// var creates a variable that CAN be changed
var counter = 0                  // ✅ Counter starts at 0
counter = counter + 1            // ✅ OK - we can update it
counter = 10                     // ✅ OK - we can reassign it

var greeting = "Hello"           // ✅ Type is String
greeting = "Hi"                  // ✅ OK

// Type is still fixed after inference!
var number = 10                  // ✅ Type is Int
// number = "hello"              // ❌ ERROR: Type mismatch!`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">💡 Kotlin&apos;s Pro-Tip</h4>
          <p className="text-slate-300">
            Always start by using <strong>val</strong>. If you later find you need to change the value, only then change it to <strong>var</strong>.
            This keeps your code predictable and safe!
          </p>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-purple-400 mt-6">Null Safety - The &quot;Billion Dollar&quot; Fix</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            In Kotlin, variables <span className="text-purple-400 font-semibold">cannot be null by default</span>.
            This prevents the famous NullPointerException!
          </p>
        </div>

        <CodeBlock title="Non-Nullable vs Nullable Types">
          {`// Regular types cannot hold null
var name: String = "Alice"
// name = null                   // ❌ ERROR: Null can't be value of non-null type

// Nullable types use ?
var nickname: String? = "Al"
nickname = null                  // ✅ OK - nullable type

// Safe calls
val length = nickname?.length    // ✅ Safe call - returns length or null`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in Kotlin</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use camelCase: <code className="bg-slate-900 px-2 py-1 rounded">userName</code>, <code className="bg-slate-900 px-2 py-1 rounded">totalPrice</code></li>
            <li>✅ Can use underscores for readability: <code className="bg-slate-900 px-2 py-1 rounded">1_000_000</code></li>
            <li>❌ Can&apos;t start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can&apos;t use reserved keywords: <code className="bg-slate-900 px-2 py-1 rounded">fun</code>, <code className="bg-slate-900 px-2 py-1 rounded">class</code>, <code className="bg-slate-900 px-2 py-1 rounded">val</code></li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-purple-400">Basic Types</h3>
        <CodeBlock>
          {`// Integers
val i: Int = 100
val l: Long = 1000L
val b: Byte = 127

// Decimals
val d: Double = 3.14
val f: Float = 3.14f

// Others
val isTrue: Boolean = true
val char: Char = 'A'
val string: String = "Hello"`}
        </CodeBlock>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-purple-400">Collections & Strings</h3>
        <CodeBlock title="Modern Features">
          {`// String Templates
val name = "Alice"
println("Hello, $name!")         // Prints: Hello, Alice!
println("Length: \${name.length}") // Prints: Length: 5

// Lists
val list = listOf(1, 2, 3)       // Read-only list
val mutable = mutableListOf(4, 5) // Mutable list
mutable.add(6)

// Maps
val map = mapOf("A" to 1, "B" to 2)`}
        </CodeBlock>
      </Section>
    </div>
  );
}
