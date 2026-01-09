import Section from "./Section";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";

export default function JavaContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Java Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-red-400 font-semibold">strictly labeled container</span>.
            In Java, every container has a specific type that determines exactly what can fit inside. Java is famous for its &quot;Write Once, Run Anywhere&quot; philosophy and its strict rules that help prevent mistakes.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, if you want to store a whole number, you must use the <code className="bg-slate-900 px-2 py-1 rounded text-green-400">int</code> type.
            Once you decide a variable is an integer, you can&apos;t try to put text into it later!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 The Strict Nature of Java</h3>
          <p className="text-slate-300 text-lg mb-3">
            Java is <span className="text-red-400 font-semibold">strongly and statically typed</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You MUST declare the type of every variable</li>
            <li>The type is checked when you compile your code</li>
            <li>Types are fixed - an <code className="text-green-400">int</code> always stays an <code className="text-green-400">int</code></li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            This strictness makes Java code <span className="text-red-400 font-semibold">robust and reliable</span> for large-scale applications.
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-red-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-red-400 mb-2">✅ Reliability</div>
              <p className="text-slate-300">Strict rules catch many errors before the program even runs</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-red-400 mb-2">✅ Explicit Code</div>
              <p className="text-slate-300">It&apos;s always clear what kind of data you&apos;re working with</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-red-400 mb-2">✅ Memory Safety</div>
              <p className="text-slate-300">Java manages memory for you automatically (Garbage Collection)</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-red-400 mb-2">✅ Scalability</div>
              <p className="text-slate-300">Perfect for large teams and massive codebases</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-red-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            In Java, every variable declaration follows this pattern: <code className="bg-slate-900 px-2 py-1 rounded">Type name = value;</code>.
            You must tell Java the <span className="text-red-400 font-semibold">Type</span> (like int, String, or double) first.
          </p>
        </div>

        <CodeBlock title="Primitive Type Declarations - Simple Values">
          {`// Basic pattern: Type variableName = value;
int age = 25;                // ✅ Integer (whole number)
double price = 19.99;        // ✅ Double (decimal number)
boolean isActive = true;     // ✅ Boolean (true or false)
char grade = 'A';            // ✅ Character (single letter)

// Multiple variables of the same type
int x = 10, y = 20, z = 30;  // ✅ All are integers

// Reassigning values (must match the type!)
age = 26;                    // ✅ OK
// age = "Alice";            // ❌ ERROR: Cannot put String in an int!`}
        </CodeBlock>

        <CodeBlock title="Reference Types - Complex Objects">
          {`// Strings are objects in Java
String name = "Alice";       // ✅ Text must use double quotes

// Creating objects from classes
Scanner input = new Scanner(System.in);
Random random = new Generic();

// Arrays are also reference types
int[] numbers = {1, 2, 3, 4, 5};
String[] colors = new String[3];`}
        </CodeBlock>

        <h4 className="text-2xl font-bold mb-3 text-red-400 mt-6">Constants with final</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Use the <code className="bg-slate-900 px-2 py-1 rounded text-purple-400">final</code> keyword to create a constant.
            A final variable <span className="text-red-400 font-semibold">cannot be changed</span> once it is assigned a value.
          </p>
        </div>

        <CodeBlock title="Final Variables in Java">
          {`final double PI = 3.14159;  // ✅ Value is locked!
// PI = 3.14;                // ❌ ERROR: cannot assign a value to final variable

final int MAX_ATTEMPTS = 3;
// MAX_ATTEMPTS = 5;         // ❌ ERROR`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in Java</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use camelCase for variables: <code className="bg-slate-900 px-2 py-1 rounded">userName</code>, <code className="bg-slate-900 px-2 py-1 rounded">totalPrice</code></li>
            <li>✅ Start with a letter, $ or _: <code className="bg-slate-900 px-2 py-1 rounded">$price</code>, <code className="bg-slate-900 px-2 py-1 rounded">_count</code></li>
            <li>✅ Use UPPER_SNAKE_CASE for constants: <code className="bg-slate-900 px-2 py-1 rounded">MAX_VALUE</code>, <code className="bg-slate-900 px-2 py-1 rounded">PI_CONST</code></li>
            <li>❌ Can&apos;t start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can&apos;t use keywords: <code className="bg-slate-900 px-2 py-1 rounded">class</code>, <code className="bg-slate-900 px-2 py-1 rounded">public</code>, <code className="bg-slate-900 px-2 py-1 rounded">static</code> are reserved</li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-red-400">8 Primitive Types</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Integers & Decimals">
            {`// Whole Numbers
byte b = 127;           // 8-bit
short s = 32767;        // 16-bit
int i = 2147483647;     // 32-bit (Most common)
long l = 9223372036854775807L; // 64-bit

// Decimals
float f = 3.14f;        // 32-bit
double d = 3.14159;     // 64-bit (Standard)`}
          </CodeBlock>
          <CodeBlock title="Others">
            {`// Boolean
boolean isJavaFun = true;

// Character (Single 16-bit Unicode)
char grade = 'A';
char unicode = '\u0041'; // Also 'A'`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-red-400">Advanced: Wrappers & Var</h3>
        <CodeBlock title="Modern Java Features">
          {`// Wrapper Classes (Objects for primitives)
Integer myInt = 5;
Double myDouble = 5.99;
Character myChar = 'A';

// var keyword (Local Variable Type Inference - Java 10+)
var message = "Hello";   // Java figures out it's a String
var count = 10;          // Java figures out it's an int

// Collections
List<String> names = new ArrayList<>();
Map<String, Integer> scores = new HashMap<>();`}
        </CodeBlock>
      </Section>
    </div>
  );
}
