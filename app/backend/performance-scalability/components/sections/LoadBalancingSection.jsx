"use client";
import { motion } from "framer-motion";

export default function LoadBalancingSection() {
  const algorithms = [
    {
      name: "Round Robin",
      icon: "🔄",
      desc: "Distribute requests equally in circular order",
      diagram: "S1 → S2 → S3 → S1 → S2 → S3...",
      pros: ["Simple", "Fair distribution", "No state needed"],
      cons: ["Ignores server load", "Doesn't consider capacity"],
      useCase: "Servers with equal capacity, stateless apps"
    },
    {
      name: "Weighted Round Robin",
      icon: "⚖️",
      desc: "Assign weights based on server capacity",
      diagram: "S1(3) → S1 → S1 → S2(1) → S3(2) → S3",
      pros: ["Accounts for capacity", "Flexible", "Fair weighted distribution"],
      cons: ["Manual weight configuration", "Static weights"],
      useCase: "Servers with different capacities"
    },
    {
      name: "Least Connections",
      icon: "📊",
      desc: "Send to server with fewest active connections",
      diagram: "S1(5 conn) ✗ S2(2 conn) ✓ S3(8 conn) ✗",
      pros: ["Dynamic load balancing", "Handles long requests well"],
      cons: ["State tracking overhead", "May not reflect actual load"],
      useCase: "Long-lived connections, chat/websockets"
    },
    {
      name: "IP Hash",
      icon: "🔐",
      desc: "Hash client IP to determine server",
      diagram: "IP: 192.168.1.1 → hash() → S2 (always)",
      pros: ["Session persistence", "Consistent routing", "No session sharing needed"],
      cons: ["Uneven distribution", "Server changes break sessions"],
      useCase: "Session-dependent apps without shared storage"
    },
    {
      name: "Least Response Time",
      icon: "⚡",
      desc: "Route to server with fastest response",
      diagram: "S1(50ms) ✗ S2(12ms) ✓ S3(35ms) ✗",
      pros: ["Optimal performance", "Adaptive to real conditions"],
      cons: ["Complex monitoring", "Overhead of health checks"],
      useCase: "Performance-critical apps, APIs"
    },
    {
      name: "Random",
      icon: "🎲",
      desc: "Randomly select server for each request",
      diagram: "Random() → S1, S3, S2, S1, S3...",
      pros: ["Very simple", "No state", "Decent distribution"],
      cons: ["Not optimal", "Unpredictable"],
      useCase: "Development, simple stateless apps"
    }
  ];

  const loadBalancerTypes = [
    {
      type: "Layer 4 (Transport Layer)",
      icon: "🔌",
      protocols: "TCP/UDP",
      features: ["Fast", "Protocol agnostic", "Low latency", "No SSL termination"],
      examples: ["AWS NLB", "HAProxy (TCP mode)", "nginx (stream)"],
      useCase: "High throughput, non-HTTP protocols, gaming, IoT"
    },
    {
      type: "Layer 7 (Application Layer)",
      icon: "🌐",
      protocols: "HTTP/HTTPS",
      features: ["Content-based routing", "SSL termination", "Request modification", "Advanced routing rules"],
      examples: ["AWS ALB", "nginx", "HAProxy (HTTP mode)", "Traefik"],
      useCase: "Web apps, microservices, A/B testing, canary deployments"
    }
  ];

  const healthChecks = [
    {
      type: "Active Health Checks",
      desc: "Load balancer periodically pings servers",
      code: `# nginx health check
upstream backend {
  server app1.example.com;
  server app2.example.com;
  server app3.example.com;
}

# Check every 5 seconds
health_check interval=5s fails=3 passes=2;`
    },
    {
      type: "Passive Health Checks",
      desc: "Monitor actual requests, mark failed servers",
      code: `# Mark server down after 3 failures
max_fails=3 fail_timeout=30s;

# Automatically retry on next server
proxy_next_upstream error timeout http_500;`
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl">
          <span className="text-4xl">⚖️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Load Balancing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Distribute traffic across servers for high availability
          </p>
        </div>
      </div>

      {/* Why Load Balancing */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-red-600">
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">
            🎯 Why Load Balance?
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "High Availability", desc: "99.99% uptime", icon: "✅" },
              { label: "Scalability", desc: "Handle more traffic", icon: "📈" },
              { label: "Fault Tolerance", desc: "Server failure resilience", icon: "🛡️" },
              { label: "Performance", desc: "Faster response times", icon: "⚡" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-red-900 dark:text-red-100">{item.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Load Balancing Algorithms */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🧮 Load Balancing Algorithms
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {algorithms.map((algo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-red-300 dark:border-red-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{algo.icon}</span>
                <h4 className="text-xl font-bold text-red-900 dark:text-red-100">{algo.name}</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{algo.desc}</p>

              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg mb-3">
                <div className="text-xs font-mono text-slate-700 dark:text-slate-300 text-center">{algo.diagram}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">✅ Pros:</p>
                  <ul className="text-xs space-y-1">
                    {algo.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-1">⚠️ Cons:</p>
                  <ul className="text-xs space-y-1">
                    {algo.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded">
                <p className="text-xs"><strong>Use Case:</strong> {algo.useCase}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Layer 4 vs Layer 7 */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏗️ Layer 4 vs Layer 7 Load Balancers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {loadBalancerTypes.map((lb, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-pink-300 dark:border-pink-700"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-4xl">{lb.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-pink-900 dark:text-pink-100">{lb.type}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{lb.protocols}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-pink-700 dark:text-pink-400 mb-2">Features:</p>
                <div className="grid grid-cols-2 gap-2">
                  {lb.features.map((feature, i) => (
                    <div key={i} className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">
                      ✓ {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-pink-700 dark:text-pink-400 mb-2">Examples:</p>
                <div className="flex flex-wrap gap-1">
                  {lb.examples.map((ex, i) => (
                    <span key={i} className="text-xs bg-pink-200 dark:bg-pink-800 px-2 py-1 rounded">{ex}</span>
                  ))}
                </div>
              </div>

              <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded">
                <p className="text-xs"><strong>Best For:</strong> {lb.useCase}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Health Checks */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💊 Health Checks
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {healthChecks.map((check, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-red-200 dark:border-red-800"
            >
              <div className="p-5 border-b border-red-200 dark:border-red-800">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">{check.type}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{check.desc}</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-b-xl">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{check.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sticky Sessions */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🍪 Session Persistence (Sticky Sessions)
        </h3>
        <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-red-300 dark:border-red-700">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Ensure user always reaches same server for session continuity
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-900 dark:text-red-100 mb-2">Cookie-Based</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">LB sets cookie to track server</p>
              <code className="text-xs bg-slate-900 text-green-400 p-1 rounded block mt-2">
                Set-Cookie: SERVER=s1
              </code>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-900 dark:text-red-100 mb-2">IP-Based</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Hash client IP to server</p>
              <code className="text-xs bg-slate-900 text-green-400 p-1 rounded block mt-2">
                ip_hash;
              </code>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-900 dark:text-red-100 mb-2">Session ID</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Route based on session ID</p>
              <code className="text-xs bg-slate-900 text-green-400 p-1 rounded block mt-2">
                hash $cookie_sessionid;
              </code>
            </div>
          </div>

          <div className="mt-4 bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
            <p className="text-sm font-semibold text-orange-900 dark:text-orange-100 mb-2">
              ⚠️ Better Alternative: Stateless Sessions
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Use Redis/database for session storage instead of sticky sessions. Allows any server to handle any request.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
        <h3 className="text-xl font-semibold mb-4 text-red-900 dark:text-red-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Choose algorithm based on workload: Round Robin for stateless, Least Connections for websockets</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Layer 7 for HTTP/web apps with SSL termination, Layer 4 for maximum performance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Implement health checks to automatically remove failing servers from pool</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Avoid sticky sessions when possible - use shared session storage (Redis) instead</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
