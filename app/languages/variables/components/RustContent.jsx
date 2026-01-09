import Section from "./Section";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";

export default function RustContent() {
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
            Rust&apos;s immutable-by-default approach has big benefits:
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
            <li>❌ Can&apos;t start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can&apos;t use keywords: <code className="bg-slate-900 px-2 py-1 rounded">let</code>, <code className="bg-slate-900 px-2 py-1 rounded">mut</code>, <code className="bg-slate-900 px-2 py-1 rounded">fn</code> are reserved</li>
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
