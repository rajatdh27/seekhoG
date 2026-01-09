import Section from "./Section";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";

export default function CContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">
          C Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-slate-400 font-semibold">direct name for a memory address</span>.
            C is a low-level language, meaning it doesn&apos;t hide how the computer works. When you create a variable, you are literally telling the computer to set aside a specific number of bits in its RAM.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">int age = 25;</code> tells the computer: &quot;Find a 4-byte spot in memory, label it &apos;age&apos;, and store the number 25 there.&quot;
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 The Power of Static Typing</h3>
          <p className="text-slate-300 text-lg mb-3">
            C is <span className="text-blue-400 font-semibold">statically typed</span>, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You MUST tell C exactly what type of data you&apos;re storing</li>
            <li>The type CANNOT change once the program starts</li>
            <li>The compiler checks your types before the program runs</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            This makes C incredibly <span className="text-green-400 font-semibold">fast and efficient</span> because the computer doesn&apos;t have to guess what data it&apos;s handling!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-slate-400 mb-2">✅ Direct Memory Access</div>
              <p className="text-slate-300">Total control over how much RAM your program uses</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-slate-400 mb-2">✅ Blazing Speed</div>
              <p className="text-slate-300">No overhead - code runs as close to the hardware as possible</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-slate-400 mb-2">✅ Predictability</div>
              <p className="text-slate-300">You know exactly how every bit of data is stored</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-slate-400 mb-2">✅ Portability</div>
              <p className="text-slate-300">Foundational language for operating systems and embedded devices</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-slate-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            In C, declaration always follows a strict pattern: <code className="bg-slate-900 px-2 py-1 rounded">type name = value;</code>.
            Unlike modern languages, C is very picky about where and how you declare them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-slate-400/50">
            <div className="text-xl font-bold text-slate-400 mb-3">Explicit Typing</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>✅ <strong>Required</strong></div>
              <div>✅ Must specify int, float, char, etc.</div>
              <div>✅ Helps compiler optimize</div>
              <div>✅ Prevents many bugs</div>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-xl border-2 border-red-400/50">
            <div className="text-xl font-bold text-red-400 mb-3">The &quot;Garbage Value&quot; Trap</div>
            <div className="text-sm space-y-2 text-slate-300">
              <div>⚠️ If you don&apos;t initialize a variable...</div>
              <div>⚠️ It contains random &quot;garbage&quot; from RAM!</div>
              <div>⚠️ Always set a default value like 0.</div>
            </div>
          </div>
        </div>

        <CodeBlock title="Variable Declarations in C">
          {`// Standard pattern: type variable_name = value;
int score = 100;             // ✅ Integer (whole number)
float price = 19.99f;        // ✅ Float (decimal number)
double pi = 3.14159265;      // ✅ Double (precise decimal)
char grade = 'A';            // ✅ Character (single letter)

// Multiple variables of the same type
int x = 10, y = 20, z = 30;  // ✅ All are integers

// Declaration without initialization (BE CAREFUL!)
int count;                   // ⚠️ Contains random data!
count = 0;                   // ✅ Now it's safe to use`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in C</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Use letters, digits, and underscores: <code className="bg-slate-900 px-2 py-1 rounded">userName</code>, <code className="bg-slate-900 px-2 py-1 rounded">total_2</code></li>
            <li>✅ Must start with a letter or underscore: <code className="bg-slate-900 px-2 py-1 rounded">_count</code> is OK, <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is NOT</li>
            <li>✅ C is CASE SENSITIVE: <code className="bg-slate-900 px-2 py-1 rounded">age</code> and <code className="bg-slate-900 px-2 py-1 rounded">Age</code> are different!</li>
            <li>❌ Can&apos;t use keywords: <code className="bg-slate-900 px-2 py-1 rounded">int</code>, <code className="bg-slate-900 px-2 py-1 rounded">return</code>, <code className="bg-slate-900 px-2 py-1 rounded">for</code> are reserved</li>
          </ul>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-slate-400 mt-6">Constants with const</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            If you want to make a variable that <span className="text-slate-400 font-semibold">cannot be changed</span> after it&apos;s created, use the <code className="bg-slate-900 px-2 py-1 rounded text-purple-400">const</code> keyword.
          </p>
        </div>

        <CodeBlock title="Constants in C">
          {`const float PI = 3.14159;  // ✅ Value is locked!
// PI = 3.14;               // ❌ ERROR: Cannot change constant!

const int MAX_USERS = 100;
// MAX_USERS = 200;         // ❌ ERROR`}
        </CodeBlock>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-slate-400">Basic Types</h3>
        <CodeBlock>
          {`// Integer types
short s = 32767;
int i = 2147483647;
long l = 9223372036854775807L;

// Unsigned (positive only)
unsigned int u = 4294967295U;

// Floating point
float f = 3.14f;
double d = 3.1415926535;

// Character
char c = 'A';
unsigned char byte = 255;`}
        </CodeBlock>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-slate-400">Advanced: Pointers & Structs</h3>
        <CodeBlock title="Memory Management">
          {`// Pointer - stores a memory address
int x = 42;
int *ptr = &x;    // ptr stores address of x
int val = *ptr;   // val is now 42 (dereferencing)

// Struct - group different types
struct Player {
    char name[50];
    int score;
    float health;
};

struct Player p1 = {"Alice", 100, 95.5f};`}
        </CodeBlock>
      </Section>
    </div>
  );
}
