import Section from "./Section";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";

export default function TypeScriptContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          TypeScript Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Think of a variable as a <span className="text-blue-400 font-semibold">labeled box with a safety lock</span>.
            TypeScript is JavaScript with syntax for types. It adds a layer of safety to your JavaScript variables, helping you catch errors before you even run your code.
          </p>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            For example, <code className="bg-slate-900 px-2 py-1 rounded text-green-400">let age: number = 25</code> ensures that <code className="bg-slate-900 px-2 py-1 rounded">age</code> can ONLY ever be a number.
            If you try to put text in it, TypeScript will stop you immediately!
          </p>
        </div>

        <InfoBox type="info">
          <h3 className="text-2xl font-bold mb-3">💡 The Safety of TypeScript</h3>
          <p className="text-slate-300 text-lg mb-3">
            TypeScript is <span className="text-blue-400 font-semibold">statically typed</span> (unlike JS), which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>You can explicitly state what type of data a variable holds</li>
            <li>Errors are caught as you type (in your editor)</li>
            <li>Greatly improved autocomplete and documentation</li>
            <li>It compiles down to regular JavaScript</li>
          </ul>
          <p className="text-slate-300 text-lg mt-3">
            TypeScript makes large-scale JavaScript development <span className="text-blue-400 font-semibold">safe and predictable</span>!
          </p>
        </InfoBox>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-400">Why Do We Need Variables?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Type Safety</div>
              <p className="text-slate-300">Catch bugs early before they reach users</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Better Tooling</div>
              <p className="text-slate-300">Amazing autocomplete and refactoring support</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Clear Intent</div>
              <p className="text-slate-300">Types document what your code is supposed to do</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-400 mb-2">✅ Scalability</div>
              <p className="text-slate-300">Essential for teams and large codebases</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="declarations">
        <h3 className="text-3xl font-bold mb-4 text-blue-400">How to Create Variables (Declaration)</h3>

        <div className="mb-6">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            TypeScript uses the same <code className="bg-slate-900 px-2 py-1 rounded">let</code> and <code className="bg-slate-900 px-2 py-1 rounded">const</code> keywords as JavaScript, but adds <span className="text-blue-400 font-semibold">type annotations</span>.
          </p>
        </div>

        <CodeBlock title="Variable Declarations with Types">
          {`// Standard pattern: let name: type = value;
let age: number = 25;            // ✅ Explicitly a number
let name: string = "Alice";      // ✅ Explicitly text
let isActive: boolean = true;    // ✅ Explicitly true/false

// Type Inference (TS often figures it out for you!)
let score = 100;                 // ✅ TS knows this is a number
// score = "high";               // ❌ ERROR: Type 'string' is not assignable to type 'number'

// Constants
const PI: number = 3.14159;      // ✅ Unchangeable number`}
        </CodeBlock>

        <InfoBox type="success">
          <h4 className="text-xl font-bold mb-2">💡 Type Inference</h4>
          <p className="text-slate-300">
            You don&apos;t always HAVE to write the type. If you assign a value immediately, TypeScript is smart enough to &quot;infer&quot; the type.
            <code className="bg-slate-900 px-2 py-1 rounded text-green-400 ml-1">let x = 10</code> is just as safe as <code className="bg-slate-900 px-2 py-1 rounded text-green-400">let x: number = 10</code>!
          </p>
        </InfoBox>

        <h4 className="text-2xl font-bold mb-3 text-blue-400 mt-6">Union Types - Flexibility with Safety</h4>

        <div className="mb-4">
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Sometimes you want a variable to be <span className="text-blue-400 font-semibold">more than one type</span>.
            Union types allow this using the pipe <code className="bg-slate-900 px-2 py-1 rounded">|</code> symbol.
          </p>
        </div>

        <CodeBlock title="Union Types Example">
          {`// id can be a number OR a string
let id: number | string;

id = 101;                        // ✅ OK
id = "user-101";                 // ✅ OK
// id = true;                    // ❌ ERROR: Not a number or string`}
        </CodeBlock>

        <InfoBox type="warning">
          <h4 className="text-xl font-bold mb-2">📝 Variable Naming Rules in TS</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✅ Same as JavaScript: letters, digits, _, $</li>
            <li>✅ Use camelCase: <code className="bg-slate-900 px-2 py-1 rounded">userName</code></li>
            <li>❌ Can&apos;t start with number: <code className="bg-slate-900 px-2 py-1 rounded">2count</code> is invalid</li>
            <li>❌ Can&apos;t use reserved keywords: <code className="bg-slate-900 px-2 py-1 rounded">interface</code>, <code className="bg-slate-900 px-2 py-1 rounded">type</code>, <code className="bg-slate-900 px-2 py-1 rounded">let</code></li>
          </ul>
        </InfoBox>
      </Section>

      <Section id="types">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Common Types</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock title="Basic Types">
            {`let n: number = 42;
let s: string = "hello";
let b: boolean = true;
let u: undefined = undefined;
let n: null = null;`}
          </CodeBlock>
          <CodeBlock title="Advanced Types">
            {`// Arrays
let list: number[] = [1, 2, 3];
let names: Array<string> = ["A", "B"];

// Any (Disable type checking - use sparingly!)
let anything: any = 4;
anything = "hello";`}
          </CodeBlock>
        </div>
      </Section>

      <Section id="advanced">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Interfaces & Aliases</h3>
        <CodeBlock title="Custom Types">
          {`// Interface - Define object structure
interface User {
    name: string;
    id: number;
    email?: string;  // Optional property
}

const user: User = {
    name: "Alice",
    id: 1
};

// Type Alias
type Point = {
    x: number;
    y: number;
};`}
        </CodeBlock>
      </Section>
    </div>
  );
}
