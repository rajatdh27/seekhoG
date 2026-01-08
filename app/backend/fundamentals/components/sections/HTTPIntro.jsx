"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HTTPIntro() {
  const [selectedMethod, setSelectedMethod] = useState("GET");
  const [showResponse, setShowResponse] = useState(false);

  const httpMethods = [
    { name: "GET", desc: "Retrieve data", color: "blue", usage: "Reading data" },
    { name: "POST", desc: "Create new data", color: "green", usage: "Creating resources" },
    { name: "PUT", desc: "Update/Replace", color: "yellow", usage: "Full updates" },
    { name: "PATCH", desc: "Partial update", color: "orange", usage: "Partial updates" },
    { name: "DELETE", desc: "Remove data", color: "red", usage: "Deleting resources" },
  ];

  const handleRequest = () => {
    setShowResponse(true);
    setTimeout(() => setShowResponse(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
          <span className="text-4xl">🌐</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            HTTP & HTTPS Basics
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            The foundation of web communication
          </p>
        </div>
      </div>

      {/* What is HTTP */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border-l-4 border-emerald-600">
          <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
            🎯 What is HTTP?
          </h3>
          <p className="text-lg text-emerald-900 dark:text-emerald-100 mb-4">
            <strong>HTTP (HyperText Transfer Protocol)</strong> is the foundation of data communication on the web.
            It's a request-response protocol where clients (browsers) send requests and servers send back responses.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>Client → Request → Server → Response → Client</strong>
            </p>
          </div>
        </div>
      </div>

      {/* HTTP vs HTTPS Comparison */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔒 HTTP vs HTTPS
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-orange-300 dark:border-orange-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">⚠️</span>
              <h4 className="text-2xl font-bold text-orange-900 dark:text-orange-100">HTTP</h4>
            </div>
            <div className="space-y-3">
              <p className="text-slate-700 dark:text-slate-300">
                <strong>HyperText Transfer Protocol</strong>
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Data sent in <strong>plain text</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Vulnerable to <strong>man-in-the-middle attacks</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>No data encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">📝</span>
                  <span>Port: <strong>80</strong></span>
                </li>
              </ul>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded mt-4">
                <p className="text-xs font-mono">http://example.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-400 dark:border-green-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🔒</span>
              <h4 className="text-2xl font-bold text-green-900 dark:text-green-100">HTTPS</h4>
            </div>
            <div className="space-y-3">
              <p className="text-slate-700 dark:text-slate-300">
                <strong>HTTP + SSL/TLS Security</strong>
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Data <strong>encrypted</strong> end-to-end</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Protects against eavesdropping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Server authentication via <strong>SSL/TLS certificates</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📝</span>
                  <span>Port: <strong>443</strong></span>
                </li>
              </ul>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded mt-4">
                <p className="text-xs font-mono">https://example.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive HTTP Methods Demo */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎬 HTTP Request Methods
        </h3>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
              Select an HTTP Method:
            </label>
            <div className="flex flex-wrap gap-3">
              {httpMethods.map((method) => (
                <button
                  key={method.name}
                  onClick={() => setSelectedMethod(method.name)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedMethod === method.name
                      ? `bg-${method.color}-600 text-white shadow-lg scale-105`
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:scale-105"
                  }`}
                  style={{
                    backgroundColor: selectedMethod === method.name
                      ? method.color === 'blue' ? '#2563eb'
                        : method.color === 'green' ? '#16a34a'
                        : method.color === 'yellow' ? '#ca8a04'
                        : method.color === 'orange' ? '#ea580c'
                        : '#dc2626'
                      : undefined
                  }}
                >
                  {method.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={selectedMethod}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-emerald-300 dark:border-emerald-700"
          >
            <div className="mb-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {selectedMethod} Request
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                {httpMethods.find(m => m.name === selectedMethod)?.desc}
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm mb-4">
              <div className="text-emerald-600 dark:text-emerald-400">{selectedMethod} /api/users HTTP/1.1</div>
              <div className="text-slate-600 dark:text-slate-400">Host: example.com</div>
              <div className="text-slate-600 dark:text-slate-400">Content-Type: application/json</div>
              {(selectedMethod === "POST" || selectedMethod === "PUT" || selectedMethod === "PATCH") && (
                <>
                  <div className="text-slate-600 dark:text-slate-400 mt-2">{"{"}</div>
                  <div className="text-slate-600 dark:text-slate-400 ml-4">"name": "John Doe",</div>
                  <div className="text-slate-600 dark:text-slate-400 ml-4">"email": "john@example.com"</div>
                  <div className="text-slate-600 dark:text-slate-400">{"}"}</div>
                </>
              )}
            </div>
            <button
              onClick={handleRequest}
              className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all"
            >
              Send {selectedMethod} Request
            </button>

            {showResponse && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-400 dark:border-green-700"
              >
                <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
                  ✅ Response: 200 OK
                </p>
                <div className="bg-white dark:bg-slate-800 p-3 rounded font-mono text-xs">
                  <div className="text-slate-600 dark:text-slate-400">{"{"}</div>
                  <div className="text-slate-600 dark:text-slate-400 ml-4">"success": true,</div>
                  <div className="text-slate-600 dark:text-slate-400 ml-4">"message": "{selectedMethod} request successful"</div>
                  <div className="text-slate-600 dark:text-slate-400">{"}"}</div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* HTTP Status Codes */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📊 HTTP Status Codes
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { range: "1xx", title: "Informational", desc: "Request received, continuing", example: "100 Continue", color: "blue" },
            { range: "2xx", title: "Success", desc: "Request successfully received", example: "200 OK, 201 Created", color: "green" },
            { range: "3xx", title: "Redirection", desc: "Further action needed", example: "301 Moved, 304 Not Modified", color: "yellow" },
            { range: "4xx", title: "Client Error", desc: "Request contains bad syntax", example: "400 Bad Request, 404 Not Found", color: "orange" },
            { range: "5xx", title: "Server Error", desc: "Server failed to fulfill request", example: "500 Internal Error, 503 Unavailable", color: "red" },
          ].map((status, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className={`bg-gradient-to-br from-${status.color}-50 to-${status.color}-100 dark:from-${status.color}-900/20 dark:to-${status.color}-800/20 p-5 rounded-xl border border-${status.color}-200 dark:border-${status.color}-800`}
            >
              <div className="text-2xl font-bold mb-2" style={{
                color: status.color === 'blue' ? '#2563eb'
                  : status.color === 'green' ? '#16a34a'
                  : status.color === 'yellow' ? '#ca8a04'
                  : status.color === 'orange' ? '#ea580c'
                  : '#dc2626'
              }}>
                {status.range}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{status.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{status.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                <p className="text-xs font-mono">{status.example}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HTTP Headers */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📋 Common HTTP Headers
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Content-Type", desc: "Type of data being sent", example: "application/json, text/html" },
            { name: "Authorization", desc: "Credentials for authentication", example: "Bearer <token>" },
            { name: "Accept", desc: "Media types client can handle", example: "application/json" },
            { name: "User-Agent", desc: "Client software information", example: "Mozilla/5.0..." },
            { name: "Cache-Control", desc: "Caching directives", example: "no-cache, max-age=3600" },
            { name: "Set-Cookie", desc: "Send cookies to client", example: "sessionId=abc123" },
          ].map((header, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-200 dark:border-teal-800"
            >
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-1">{header.name}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{header.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                <code className="text-xs font-mono">{header.example}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
        <h3 className="text-xl font-semibold mb-4 text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
            <span>HTTP is the foundation of web communication - stateless request-response protocol</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
            <span>Always use HTTPS in production for encrypted, secure communication</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
            <span>HTTP methods (GET, POST, PUT, DELETE) define the type of action being performed</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
            <span>Status codes tell you what happened: 2xx = success, 4xx = client error, 5xx = server error</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
