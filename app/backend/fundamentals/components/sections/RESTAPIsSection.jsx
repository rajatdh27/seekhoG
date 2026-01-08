"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function RESTAPIsSection() {
  const [selectedEndpoint, setSelectedEndpoint] = useState("GET");

  const restPrinciples = [
    {
      icon: "🌐",
      title: "Client-Server Architecture",
      desc: "Separation of concerns - UI and data storage are independent"
    },
    {
      icon: "📝",
      title: "Stateless",
      desc: "Each request contains all info needed - server doesn't store client state"
    },
    {
      icon: "💾",
      title: "Cacheable",
      desc: "Responses must define themselves as cacheable or non-cacheable"
    },
    {
      icon: "🔗",
      title: "Uniform Interface",
      desc: "Standardized way to interact with resources using HTTP methods"
    },
    {
      icon: "🏗️",
      title: "Layered System",
      desc: "Client can't tell if connected directly to server or intermediary"
    },
    {
      icon: "📦",
      title: "Resource-Based",
      desc: "Everything is a resource identified by URIs"
    }
  ];

  const endpoints = [
    { method: "GET", url: "/api/users", desc: "Retrieve all users", code: "200 OK", color: "blue" },
    { method: "GET", url: "/api/users/123", desc: "Retrieve specific user", code: "200 OK", color: "blue" },
    { method: "POST", url: "/api/users", desc: "Create new user", code: "201 Created", color: "green" },
    { method: "PUT", url: "/api/users/123", desc: "Update entire user", code: "200 OK", color: "yellow" },
    { method: "PATCH", url: "/api/users/123", desc: "Partial update", code: "200 OK", color: "orange" },
    { method: "DELETE", url: "/api/users/123", desc: "Delete user", code: "204 No Content", color: "red" },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">🔄</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            REST APIs
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Representational State Transfer - The standard for web APIs
          </p>
        </div>
      </div>

      {/* What is REST */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            🎯 What is REST?
          </h3>
          <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
            <strong>REST (Representational State Transfer)</strong> is an architectural style for designing networked applications.
            It relies on stateless, client-server communication using standard HTTP methods.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>Resource → URI → HTTP Method → Representation (JSON/XML)</strong>
            </p>
          </div>
        </div>
      </div>

      {/* REST Principles */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📋 Core REST Principles
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restPrinciples.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="text-4xl mb-3">{principle.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{principle.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RESTful Endpoint Examples */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎬 RESTful Endpoint Design
        </h3>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Click on any endpoint to see details:
          </p>
          <div className="space-y-3">
            {endpoints.map((endpoint, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedEndpoint(endpoint.method + idx)}
                className="cursor-pointer"
              >
                <div className={`bg-white dark:bg-slate-800 p-4 rounded-lg border-2 transition-all hover:scale-102 ${
                  selectedEndpoint === endpoint.method + idx
                    ? 'border-blue-500 shadow-lg'
                    : 'border-slate-200 dark:border-slate-700'
                }`}>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span
                        className="px-3 py-1 rounded font-mono text-xs font-bold text-white shrink-0"
                        style={{
                          backgroundColor: endpoint.color === 'blue' ? '#2563eb'
                            : endpoint.color === 'green' ? '#16a34a'
                            : endpoint.color === 'yellow' ? '#ca8a04'
                            : endpoint.color === 'orange' ? '#ea580c'
                            : '#dc2626'
                        }}
                      >
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-sm text-slate-700 dark:text-slate-300 truncate">
                        {endpoint.url}
                      </code>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{endpoint.desc}</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-mono">
                        {endpoint.code}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Naming Conventions */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📝 Resource Naming Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-200 flex items-center gap-2">
              <span>✅</span> Do This
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use <strong>nouns</strong> for resources: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">/users</code>, <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">/products</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use <strong>plural names</strong>: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">/users</code> not <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded line-through">/user</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use <strong>kebab-case</strong>: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">/api/user-profiles</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Nest resources: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">/users/123/posts</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use query params for filters: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">/users?role=admin</code></span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold mb-4 text-red-900 dark:text-red-200 flex items-center gap-2">
              <span>❌</span> Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Using <strong>verbs</strong>: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded line-through">/getUsers</code>, <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded line-through">/createUser</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Inconsistent naming: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded line-through">/user_profiles</code>, <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded line-through">/userProfiles</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Deep nesting: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded line-through">/users/123/posts/456/comments/789/likes</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>File extensions: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded line-through">/users.json</code>, <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded line-through">/users.xml</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>Trailing slashes: <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded line-through">/users/</code></span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* HTTP Status Codes for REST */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📊 Common REST API Status Codes
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { code: "200 OK", desc: "Successful GET, PUT, PATCH", use: "Standard success response" },
            { code: "201 Created", desc: "Successful POST - resource created", use: "Return new resource in body" },
            { code: "204 No Content", desc: "Successful DELETE", use: "No response body needed" },
            { code: "400 Bad Request", desc: "Invalid request format/validation", use: "Return error details" },
            { code: "401 Unauthorized", desc: "Authentication required", use: "Missing/invalid credentials" },
            { code: "403 Forbidden", desc: "Authenticated but no permission", use: "User lacks access rights" },
            { code: "404 Not Found", desc: "Resource doesn't exist", use: "Invalid ID or path" },
            { code: "409 Conflict", desc: "Request conflicts with current state", use: "Duplicate resource" },
            { code: "422 Unprocessable Entity", desc: "Semantic errors in request", use: "Validation errors" },
            { code: "500 Internal Server Error", desc: "Server-side error", use: "Unexpected failures" },
          ].map((status, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800"
            >
              <div className="flex items-start justify-between mb-2">
                <code className="font-bold text-indigo-900 dark:text-indigo-100 text-sm">{status.code}</code>
                <span className="text-xs bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded text-indigo-800 dark:text-indigo-200">
                  {status.use}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">{status.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* REST vs Other Approaches */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ REST vs Other API Styles
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700"
          >
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
              <span>🔄</span> REST
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Simple & widely adopted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Easy to cache</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Over/under-fetching data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Multiple round trips</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 p-6 rounded-xl border-2 border-pink-300 dark:border-pink-700"
          >
            <h4 className="text-xl font-bold text-pink-900 dark:text-pink-100 mb-3 flex items-center gap-2">
              <span>📊</span> GraphQL
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Fetch exactly what you need</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Single request for multiple resources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>More complex setup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Harder to cache</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700"
          >
            <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              <span>⚡</span> gRPC
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Very fast (binary Protocol Buffers)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Streaming support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Not browser-friendly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Steeper learning curve</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>REST uses standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Resources are identified by URIs and use nouns (not verbs) in plural form</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>REST is stateless - each request must contain all necessary information</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Use appropriate HTTP status codes to indicate the result of operations</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
