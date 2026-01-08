"use client";
import { motion } from "framer-motion";

export default function APISecuritySection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
          <span className="text-4xl">🔑</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            API Security
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Rate limiting, API keys, and security best practices
          </p>
        </div>
      </div>

      {/* Rate Limiting */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🚦 Rate Limiting
        </h3>
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-cyan-600 mb-6">
          <p className="text-lg text-cyan-900 dark:text-cyan-100 mb-4">
            <strong>Rate limiting</strong> restricts the number of requests a client can make in a time window.
            Prevents abuse, DDoS attacks, and protects server resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {[
            {
              algorithm: "Token Bucket",
              desc: "Tokens added at fixed rate, consumed per request",
              example: "100 tokens/minute, each request costs 1 token",
              pros: "Allows bursts, smooth rate limiting"
            },
            {
              algorithm: "Leaky Bucket",
              desc: "Requests processed at fixed rate",
              example: "Process 10 requests/second, queue others",
              pros: "Constant output rate, predictable"
            },
            {
              algorithm: "Fixed Window",
              desc: "Count requests in time windows",
              example: "Max 1000 requests per hour",
              pros: "Simple to implement, easy to understand"
            },
            {
              algorithm: "Sliding Window",
              desc: "Smooth transitions between windows",
              example: "Rolling 60-second window",
              pros: "More accurate, prevents edge cases"
            }
          ].map((algo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800"
            >
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">{algo.algorithm}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{algo.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded mb-2">
                <code className="text-xs">{algo.example}</code>
              </div>
              <p className="text-xs text-cyan-700 dark:text-cyan-400">
                <strong>Pros:</strong> {algo.pros}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 p-4 rounded-xl">
          <pre className="text-sm font-mono text-green-400 overflow-auto whitespace-pre">
{`// Using express-rate-limit
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);`}
          </pre>
        </div>
      </div>

      {/* API Authentication Methods */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔐 API Authentication Methods
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              method: "API Keys",
              icon: "🔑",
              desc: "Simple string token for identification",
              example: "X-API-Key: abc123xyz789",
              pros: ["Easy to implement", "Simple revocation", "Good for public APIs"],
              cons: ["Not user-specific", "Can be stolen", "No expiration"]
            },
            {
              method: "Bearer Tokens (JWT)",
              icon: "🎫",
              desc: "Self-contained tokens with user info",
              example: "Authorization: Bearer eyJhbG...",
              pros: ["Stateless", "Contains user data", "Expiration built-in"],
              cons: ["Hard to revoke", "Larger size", "Need refresh strategy"]
            },
            {
              method: "OAuth 2.0",
              icon: "🔐",
              desc: "Delegated authorization framework",
              example: "Authorization: Bearer access_token",
              pros: ["Industry standard", "Scoped permissions", "Refresh tokens"],
              cons: ["Complex setup", "Multiple flows", "OAuth server needed"]
            },
            {
              method: "Basic Auth",
              icon: "📝",
              desc: "Username:password in Base64",
              example: "Authorization: Basic dXNlcjpwYXNz",
              pros: ["Very simple", "Wide support", "Good for internal tools"],
              cons: ["Not secure without HTTPS", "Sent every request", "No logout"]
            }
          ].map((auth, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{auth.icon}</span>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100">{auth.method}</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{auth.desc}</p>
              <div className="bg-slate-900 p-2 rounded mb-3">
                <code className="text-xs text-green-400">{auth.example}</code>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400 mb-1">Pros:</p>
                  <ul className="space-y-1">
                    {auth.pros.map((pro, i) => (
                      <li key={i}>✓ {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-orange-700 dark:text-orange-400 mb-1">Cons:</p>
                  <ul className="space-y-1">
                    {auth.cons.map((con, i) => (
                      <li key={i}>⚠ {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* API Security Best Practices */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ API Security Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { practice: "Always use HTTPS", why: "Encrypt data in transit, prevent MITM attacks" },
            { practice: "Implement rate limiting", why: "Prevent abuse and DDoS attacks" },
            { practice: "Validate all input", why: "Prevent injection attacks" },
            { practice: "Use API versioning", why: "Maintain backwards compatibility: /v1/users" },
            { practice: "Return proper status codes", why: "200, 201, 400, 401, 403, 404, 500" },
            { practice: "Don't expose sensitive data", why: "Never return passwords, tokens in responses" },
            { practice: "Implement logging", why: "Track API usage, detect anomalies" },
            { practice: "Use CORS properly", why: "Restrict which domains can access your API" },
            { practice: "Paginate large responses", why: "Limit data returned, use ?page=1&limit=100" },
            { practice: "Throttle expensive operations", why: "Protect server from resource exhaustion" },
            { practice: "Set request timeouts", why: "Prevent slowloris attacks" },
            { practice: "Use API gateways", why: "Centralize auth, rate limiting, monitoring" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <span>✓</span> {item.practice}
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.why}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* API Security Checklist */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✅ API Security Checklist
        </h3>
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "HTTPS everywhere (TLS 1.2+)",
              "Strong authentication (JWT, OAuth)",
              "Rate limiting per endpoint",
              "Input validation & sanitization",
              "Output encoding",
              "SQL injection prevention",
              "XSS prevention",
              "CSRF protection",
              "Proper CORS configuration",
              "Security headers",
              "API versioning",
              "Error handling (no stack traces)",
              "Audit logging",
              "API documentation",
              "Regular security testing",
              "Dependency updates"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-slate-700 dark:text-slate-300">{item}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
        <h3 className="text-xl font-semibold mb-4 text-cyan-900 dark:text-cyan-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>Rate limiting is essential to prevent abuse and protect resources</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>Use JWT or OAuth for API authentication, avoid Basic Auth in production</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>Always use HTTPS, validate input, and implement proper error handling</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>Use API gateways to centralize security, monitoring, and rate limiting</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
