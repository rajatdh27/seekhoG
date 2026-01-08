"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function JSONSection() {
  const [jsonInput, setJsonInput] = useState('{"name": "John", "age": 30}');
  const [isValidJSON, setIsValidJSON] = useState(true);
  const [parsedData, setParsedData] = useState(null);

  const validateJSON = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setParsedData(parsed);
      setIsValidJSON(true);
    } catch (error) {
      setIsValidJSON(false);
      setParsedData(null);
    }
  };

  const jsonExamples = [
    {
      title: "Simple Object",
      code: `{
  "name": "Alice",
  "age": 25,
  "active": true
}`
    },
    {
      title: "Array",
      code: `[
  "apple",
  "banana",
  "cherry"
]`
    },
    {
      title: "Nested Object",
      code: `{
  "user": {
    "name": "Bob",
    "email": "bob@example.com",
    "address": {
      "city": "NYC",
      "zip": "10001"
    }
  }
}`
    },
    {
      title: "Array of Objects",
      code: `{
  "users": [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"}
  ]
}`
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl">
          <span className="text-4xl">📋</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            JSON Data Format
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            JavaScript Object Notation - The universal data exchange format
          </p>
        </div>
      </div>

      {/* What is JSON */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-yellow-600">
          <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-100 mb-4">
            🎯 What is JSON?
          </h3>
          <p className="text-lg text-yellow-900 dark:text-yellow-100 mb-4">
            <strong>JSON (JavaScript Object Notation)</strong> is a lightweight, text-based data interchange format.
            It's easy for humans to read/write and easy for machines to parse/generate. Language-independent but uses JavaScript syntax.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>{"{ key: value }"}</strong> → Simple, universal, everywhere
            </p>
          </div>
        </div>
      </div>

      {/* JSON Data Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔢 JSON Data Types
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              type: "String",
              desc: "Text in double quotes",
              example: '"hello world"',
              color: "blue"
            },
            {
              type: "Number",
              desc: "Integer or decimal",
              example: '42, 3.14, -10',
              color: "green"
            },
            {
              type: "Boolean",
              desc: "true or false",
              example: 'true, false',
              color: "purple"
            },
            {
              type: "Null",
              desc: "Represents no value",
              example: 'null',
              color: "gray"
            },
            {
              type: "Object",
              desc: "Key-value pairs in {}",
              example: '{"name": "Alice"}',
              color: "yellow"
            },
            {
              type: "Array",
              desc: "Ordered list in []",
              example: '[1, 2, 3]',
              color: "orange"
            }
          ].map((dataType, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className={`bg-gradient-to-br from-${dataType.color}-50 to-${dataType.color}-100 dark:from-${dataType.color}-900/20 dark:to-${dataType.color}-800/20 p-5 rounded-xl border border-${dataType.color}-200 dark:border-${dataType.color}-800`}
            >
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">
                {dataType.type}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{dataType.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                <code className="text-xs font-mono">{dataType.example}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive JSON Validator */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎬 Interactive JSON Validator
        </h3>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-xl">
          <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
            Enter JSON to validate:
          </label>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full h-40 px-4 py-3 border-2 border-yellow-300 dark:border-yellow-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder='{"key": "value"}'
          />
          <button
            onClick={validateJSON}
            className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all"
          >
            Validate JSON
          </button>

          {parsedData !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6"
            >
              {isValidJSON ? (
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-400 dark:border-green-700">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                    <span>✅</span> Valid JSON!
                  </p>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded">
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Parsed Object:</p>
                    <pre className="text-xs font-mono overflow-auto">
                      {JSON.stringify(parsedData, null, 2)}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-2 border-red-400 dark:border-red-700">
                  <p className="text-sm font-semibold text-red-800 dark:text-red-200 flex items-center gap-2">
                    <span>❌</span> Invalid JSON! Check your syntax.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* JSON Examples */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📚 Common JSON Structures
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {jsonExamples.map((example, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border border-orange-200 dark:border-orange-800"
            >
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">{example.title}</h4>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                <pre className="text-xs font-mono overflow-auto text-slate-700 dark:text-slate-300">
                  {example.code}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* JSON vs XML */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ JSON vs XML
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700"
          >
            <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-4 flex items-center gap-2">
              <span>📋</span> JSON
            </h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-800 p-3 rounded">
                <pre className="text-xs font-mono overflow-auto">
{`{
  "person": {
    "name": "John",
    "age": 30
  }
}`}
                </pre>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>More compact & readable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Faster to parse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Native JavaScript support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Better for APIs</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/30 dark:to-gray-800/30 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <span>📄</span> XML
            </h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-800 p-3 rounded">
                <pre className="text-xs font-mono overflow-auto">
{`<person>
  <name>John</name>
  <age>30</age>
</person>`}
                </pre>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Supports attributes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Better for documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>More verbose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Slower parsing</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* JSON in Practice */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💼 JSON in Practice
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              use: "REST API Responses",
              desc: "Standard format for sending/receiving data",
              icon: "🔄",
              example: '{"status": "success", "data": {...}}'
            },
            {
              use: "Configuration Files",
              desc: "package.json, tsconfig.json, settings",
              icon: "⚙️",
              example: '{"name": "my-app", "version": "1.0.0"}'
            },
            {
              use: "Local Storage",
              desc: "Store data in browser localStorage",
              icon: "💾",
              example: 'localStorage.setItem("user", JSON.stringify(obj))'
            },
            {
              use: "NoSQL Databases",
              desc: "MongoDB, CouchDB store documents as JSON",
              icon: "🗄️",
              example: 'db.users.insert({name: "Alice", age: 25})'
            },
            {
              use: "WebSocket Messages",
              desc: "Real-time data exchange",
              icon: "⚡",
              example: 'ws.send(JSON.stringify({type: "chat", msg: "hi"}))'
            },
            {
              use: "Log Files",
              desc: "Structured logging in JSON format",
              icon: "📝",
              example: '{"level": "error", "timestamp": "...", "msg": "..."}'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-5 rounded-xl border border-orange-200 dark:border-orange-800"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.use}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded">
                <code className="text-xs font-mono">{item.example}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ JSON Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-200 flex items-center gap-2">
              <span>✅</span> Do
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use <strong>double quotes</strong> for strings (not single)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use <strong>camelCase</strong> for key names</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Keep structure <strong>flat</strong> when possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use meaningful, descriptive key names</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Validate JSON before parsing</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-red-900 dark:text-red-200 flex items-center gap-2">
              <span>❌</span> Don't
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Don't use <strong>comments</strong> (not valid JSON)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Don't use <strong>trailing commas</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Don't use <strong>undefined</strong> (use null instead)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Don't use single quotes for strings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Don't parse untrusted JSON without validation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900 dark:text-yellow-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
            <span>JSON is the standard data format for web APIs and modern applications</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
            <span>It's lightweight, human-readable, and language-independent</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
            <span>Always use double quotes and avoid trailing commas for valid JSON</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
            <span>JSON supports strings, numbers, booleans, null, objects, and arrays</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
