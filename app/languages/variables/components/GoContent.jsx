import Section from "@/app/components/common/Section";
import CodeBlock from "@/app/components/common/CodeBlock";
import InfoBox from "@/app/components/common/InfoBox";

export default function GoContent() {
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
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">name := &quot;Alice&quot;</code> creates a variable in the simplest way possible.
            Go&apos;s motto is: do more with less!
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
            Unlike C, Go automatically initializes uninitialized variables to <span className="text-cyan-400 font-semibold">&quot;zero values&quot;</span>:
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
            <li>❌ Can&apos;t start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can&apos;t use keywords: <code className="bg-slate-900 px-2 py-1 rounded">var</code>, <code className="bg-slate-900 px-2 py-1 rounded">func</code>, <code className="bg-slate-900 px-2 py-1 rounded">package</code> are reserved</li>
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
