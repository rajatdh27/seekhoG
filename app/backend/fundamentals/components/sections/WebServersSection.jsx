"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WebServersSection() {
  const [selectedServer, setSelectedServer] = useState("nginx");

  const servers = [
    {
      id: "nginx",
      name: "Nginx",
      icon: "🟢",
      desc: "High-performance web server & reverse proxy",
      pros: ["Very fast & lightweight", "Great for static content", "Excellent reverse proxy", "Low memory footprint"],
      cons: ["Steeper learning curve", "Limited dynamic content"],
      useCase: "Static sites, reverse proxy, load balancing"
    },
    {
      id: "apache",
      name: "Apache",
      icon: "🪶",
      desc: "Most popular & feature-rich web server",
      pros: ["Highly configurable", ".htaccess support", "Lots of modules", "Great documentation"],
      cons: ["Higher memory usage", "Slower than Nginx"],
      useCase: "Dynamic content, shared hosting, PHP apps"
    },
    {
      id: "nodejs",
      name: "Node.js (Express)",
      icon: "🟩",
      desc: "JavaScript runtime for building servers",
      pros: ["Full-stack JavaScript", "Non-blocking I/O", "NPM ecosystem", "WebSocket support"],
      cons: ["Single-threaded", "CPU-intensive tasks"],
      useCase: "Real-time apps, APIs, microservices"
    },
    {
      id: "iis",
      name: "IIS",
      icon: "🔷",
      desc: "Microsoft's web server for Windows",
      pros: ["Windows integration", "ASP.NET support", "GUI management", "Active Directory"],
      cons: ["Windows-only", "Less flexible"],
      useCase: ".NET applications, Windows environments"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <span className="text-4xl">🖥️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Web Servers
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            The backbone of the internet - serving web content
          </p>
        </div>
      </div>

      {/* What is a Web Server */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            🎯 What is a Web Server?
          </h3>
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            A <strong>web server</strong> is software (and hardware) that accepts HTTP requests from clients (browsers) and serves them HTTP responses,
            typically HTML pages, images, files, or API data. It's the foundation of the World Wide Web.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>Client Request → Web Server → Process → Response → Client</strong>
            </p>
          </div>
        </div>
      </div>

      {/* How Web Servers Work */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚙️ How Web Servers Work
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: "1", title: "Receive Request", desc: "Client sends HTTP request to server", icon: "📥", color: "blue" },
            { step: "2", title: "Process Request", desc: "Server parses URL, headers, method", icon: "⚡", color: "purple" },
            { step: "3", title: "Generate Response", desc: "Fetch file or run application code", icon: "🔨", color: "pink" },
            { step: "4", title: "Send Response", desc: "Return HTML, JSON, or files to client", icon: "📤", color: "green" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-900/30 dark:to-${item.color}-800/30 p-5 rounded-xl border-2 border-${item.color}-300 dark:border-${item.color}-700 text-center`}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className={`text-2xl font-bold mb-2 text-${item.color}-600 dark:text-${item.color}-400`}>
                Step {item.step}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Web Servers */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌟 Popular Web Servers
        </h3>
        <div className="space-y-4">
          {servers.map((server, idx) => (
            <motion.div
              key={server.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedServer(server.id)}
              className={`cursor-pointer transition-all ${
                selectedServer === server.id
                  ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-400 dark:border-purple-600 shadow-lg'
                  : 'bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-700'
              } p-6 rounded-xl`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{server.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{server.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{server.desc}</p>
                  </div>
                </div>
              </div>

              {selectedServer === server.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800"
                >
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                        <span>✅</span> Pros
                      </h5>
                      <ul className="space-y-1 text-sm">
                        {server.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span className="text-slate-700 dark:text-slate-300">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                        <span>⚠️</span> Cons
                      </h5>
                      <ul className="space-y-1 text-sm">
                        {server.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span className="text-slate-700 dark:text-slate-300">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-lg">
                    <p className="text-sm">
                      <strong className="text-purple-900 dark:text-purple-200">Best for:</strong>{" "}
                      <span className="text-slate-700 dark:text-slate-300">{server.useCase}</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Server Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔧 Types of Web Servers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              type: "Static Web Server",
              desc: "Serves files as-is from disk",
              icon: "📁",
              features: ["HTML, CSS, JS, images", "No processing needed", "Very fast", "CDN-friendly"],
              example: "Nginx serving React build"
            },
            {
              type: "Dynamic Web Server",
              desc: "Generates content on-the-fly",
              icon: "⚡",
              features: ["Database queries", "Template rendering", "User-specific content", "Business logic"],
              example: "Node.js + Express API"
            },
            {
              type: "Application Server",
              desc: "Runs application code",
              icon: "🎯",
              features: ["Middleware", "Session management", "Connection pooling", "Transaction support"],
              example: "Tomcat for Java, uWSGI for Python"
            },
            {
              type: "Reverse Proxy",
              desc: "Forwards requests to backend servers",
              icon: "🔄",
              features: ["Load balancing", "SSL termination", "Caching", "Request routing"],
              example: "Nginx → multiple Node.js instances"
            }
          ].map((serverType, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{serverType.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">{serverType.type}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{serverType.desc}</p>
                </div>
              </div>
              <ul className="space-y-1 mb-3 text-sm">
                {serverType.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded">
                <p className="text-xs">
                  <strong>Example:</strong> {serverType.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Concepts */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💡 Key Web Server Concepts
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { concept: "Virtual Hosts", desc: "Host multiple websites on one server", example: "site1.com, site2.com on same IP" },
            { concept: "Port Binding", desc: "Server listens on specific ports", example: "HTTP:80, HTTPS:443, Custom:8080" },
            { concept: "Request Routing", desc: "Direct requests to correct handler", example: "/api → backend, /static → files" },
            { concept: "Middleware", desc: "Process requests before handlers", example: "Auth, logging, compression" },
            { concept: "Concurrency", desc: "Handle multiple requests simultaneously", example: "Multi-threading, async I/O" },
            { concept: "SSL/TLS", desc: "Encrypt traffic with certificates", example: "Let's Encrypt, self-signed certs" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.concept}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                <code className="text-xs">{item.example}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Server Configuration Example */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📝 Example: Nginx Configuration
        </h3>
        <div className="bg-slate-900 p-6 rounded-xl">
          <pre className="text-sm font-mono text-green-400 overflow-auto">
{`server {
    listen 80;
    server_name example.com;

    # Serve static files
    location / {
        root /var/www/html;
        index index.html;
    }

    # Proxy API requests to backend
    location /api {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json;
}`}
          </pre>
        </div>
      </div>

      {/* Performance Tips */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🚀 Web Server Performance Tips
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { tip: "Enable Caching", desc: "Cache static assets and API responses", impact: "High" },
            { tip: "Use Compression", desc: "Gzip/Brotli for text-based files", impact: "High" },
            { tip: "Enable HTTP/2", desc: "Multiplexing, header compression", impact: "Medium" },
            { tip: "CDN for Static Assets", desc: "Distribute content globally", impact: "High" },
            { tip: "Connection Pooling", desc: "Reuse database connections", impact: "Medium" },
            { tip: "Load Balancing", desc: "Distribute traffic across servers", impact: "High" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-green-900 dark:text-green-100">{item.tip}</h4>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  item.impact === 'High'
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-500 text-white'
                }`}>
                  {item.impact}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Web servers handle HTTP requests and serve responses - the foundation of the web</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Choose Nginx for static content & reverse proxy, Apache for dynamic content, Node.js for JavaScript apps</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Optimize with caching, compression, HTTP/2, and CDNs for better performance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Use reverse proxies and load balancers to scale and distribute traffic efficiently</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
