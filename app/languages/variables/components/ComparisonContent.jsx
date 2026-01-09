import { motion } from "framer-motion";
import Section from "./Section";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";

export default function ComparisonContent() {
  return (
    <div className="space-y-8">
      <Section id="intro">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Language Comparison: Variables & Types
        </h2>

        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4 text-white">The Great Language Divide</h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            Every programming language handles variables differently. The biggest difference is <span className="text-blue-400 font-semibold">WHEN</span> the language checks your types and <span className="text-indigo-400 font-semibold">HOW STRICT</span> it is about them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold text-blue-400 mb-3">Statically Typed</h4>
            <p className="text-sm text-slate-300 mb-4">Types are checked <strong>at compile time</strong> (before the program runs).</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>✅ Catch errors early</li>
              <li>✅ Better performance</li>
              <li>✅ Better autocomplete</li>
              <li>❌ More code to write</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {["C", "C++", "Java", "Go", "Rust", "Swift", "Kotlin", "TypeScript"].map(lang => (
                <span key={lang} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">{lang}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-yellow-500/30">
            <h4 className="text-xl font-bold text-yellow-400 mb-3">Dynamically Typed</h4>
            <p className="text-sm text-slate-300 mb-4">Types are checked <strong>at runtime</strong> (while the program is running).</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>✅ Faster to write</li>
              <li>✅ Very flexible</li>
              <li>✅ Less &quot;boilerplate&quot;</li>
              <li>❌ Errors found late</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {["JavaScript", "Python"].map(lang => (
                <span key={lang} className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="syntax">
        <h3 className="text-2xl font-bold mb-6 text-white text-center">Variable Declaration Syntax</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-slate-900/50 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-800">
                <th className="p-4 text-slate-200">Language</th>
                <th className="p-4 text-slate-200">Declaration Syntax</th>
                <th className="p-4 text-slate-200">Philosophy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-4 font-bold text-yellow-400">JavaScript</td>
                <td className="p-4"><code className="text-green-400 text-sm">let x = 10;</code></td>
                <td className="p-4 text-slate-400 text-sm">Dynamic & Flexible</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-green-400">Python</td>
                <td className="p-4"><code className="text-green-400 text-sm">x = 10</code></td>
                <td className="p-4 text-slate-400 text-sm">Minimalist & Simple</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-red-400">Java</td>
                <td className="p-4"><code className="text-green-400 text-sm">int x = 10;</code></td>
                <td className="p-4 text-slate-400 text-sm">Explicit & Strict</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-blue-400">C++</td>
                <td className="p-4"><code className="text-green-400 text-sm">auto x = 10;</code></td>
                <td className="p-4 text-slate-400 text-sm">Power & Control</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-orange-400">Rust</td>
                <td className="p-4"><code className="text-green-400 text-sm">let x = 10;</code></td>
                <td className="p-4 text-slate-400 text-sm">Safety & Ownership</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-cyan-400">Go</td>
                <td className="p-4"><code className="text-green-400 text-sm">x := 10</code></td>
                <td className="p-4 text-slate-400 text-sm">Clean & Simple</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="immutability">
        <h3 className="text-2xl font-bold mb-6 text-white">Mutability: Can I Change It?</h3>
        <p className="text-slate-300 mb-6">
          Modern languages prefer <span className="text-red-400 font-semibold">Immutability</span> (variables that don&apos;t change) by default because it makes code safer and easier to debug.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/30 p-4 rounded-lg">
            <h4 className="font-bold text-white mb-2">Immutable by Default</h4>
            <p className="text-xs text-slate-400 mb-3">You must explicitly say if you want to change it.</p>
            <div className="flex flex-wrap gap-2">
              {["Rust", "Swift"].map(lang => (
                <span key={lang} className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">{lang}</span>
              ))}
            </div>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-lg">
            <h4 className="font-bold text-white mb-2">Mutable by Default</h4>
            <p className="text-xs text-slate-400 mb-3">Most variables can be changed anytime.</p>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "Python", "Java", "C", "C++", "Go"].map(lang => (
                <span key={lang} className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">{lang}</span>
              ))}
            </div>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-lg">
            <h4 className="font-bold text-white mb-2">Constant Keywords</h4>
            <p className="text-xs text-slate-400 mb-3">Special keywords to make things unchangeable.</p>
            <ul className="text-[10px] text-slate-500 space-y-1">
              <li>• JS: <code className="text-purple-400">const</code></li>
              <li>• Java: <code className="text-purple-400">final</code></li>
              <li>• C++: <code className="text-purple-400">constexpr</code></li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="best-practices">
        <InfoBox type="info">
          <h3 className="text-xl font-bold mb-3">💡 Pro Tip: How to Choose?</h3>
          <p className="text-slate-300 mb-4">
            The &quot;Best&quot; way to handle variables depends on your project goals:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="text-green-400 font-bold">Fast Prototyping:</div>
              <div className="text-slate-400">Python or JavaScript (Dynamic)</div>
            </div>
            <div className="flex gap-3">
              <div className="text-blue-400 font-bold">Big Enterprise Apps:</div>
              <div className="text-slate-400">Java or C# (Static/Explicit)</div>
            </div>
            <div className="flex gap-3">
              <div className="text-orange-400 font-bold">Safety Critical:</div>
              <div className="text-slate-400">Rust or Swift (Immutability default)</div>
            </div>
            <div className="flex gap-3">
              <div className="text-purple-400 font-bold">System Performance:</div>
              <div className="text-slate-400">C++ or Rust (Manual control)</div>
            </div>
          </div>
        </InfoBox>
      </Section>
    </div>
  );
}