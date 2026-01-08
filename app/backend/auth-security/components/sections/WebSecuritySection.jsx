"use client";
import { motion } from "framer-motion";

export default function WebSecuritySection() {
  const vulnerabilities = [
    {
      name: "XSS (Cross-Site Scripting)",
      icon: "💉",
      desc: "Injecting malicious scripts into web pages",
      example: `<input value="\${userInput}">
// If userInput = "><script>alert('XSS')</script>
// Executes malicious JavaScript`,
      prevention: [
        "Sanitize all user input",
        "Use Content Security Policy (CSP)",
        "Escape HTML characters",
        "Use frameworks that auto-escape (React)"
      ],
      code: `// BAD - Vulnerable to XSS
innerHTML = userInput;

// GOOD - React auto-escapes
<div>{userInput}</div>

// GOOD - Manual escaping
const escaped = userInput
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');`
    },
    {
      name: "CSRF (Cross-Site Request Forgery)",
      icon: "🎭",
      desc: "Tricking users into unwanted actions",
      example: `<!-- Attacker's site -->
<img src="https://bank.com/transfer?to=hacker&amount=1000">
<!-- Executes if user logged into bank.com -->`,
      prevention: [
        "CSRF tokens on forms",
        "SameSite cookie attribute",
        "Verify Referer header",
        "Double submit cookies"
      ],
      code: `// Generate CSRF token
const token = generateToken();
req.session.csrfToken = token;

// In form
<input type="hidden" name="csrf" value="\${token}">

// Verify on submission
if (req.body.csrf !== req.session.csrfToken) {
  throw new Error('Invalid CSRF token');
}`
    },
    {
      name: "SQL Injection",
      icon: "💾",
      desc: "Injecting malicious SQL queries",
      example: `// Vulnerable code
const query = "SELECT * FROM users WHERE id = " + userId;

// If userId = "1 OR 1=1"
// Returns ALL users!`,
      prevention: [
        "Use parameterized queries",
        "Use ORMs (Prisma, TypeORM)",
        "Validate input types",
        "Principle of least privilege"
      ],
      code: `// BAD - SQL Injection vulnerable
db.query(\`SELECT * FROM users WHERE id = \${userId}\`);

// GOOD - Parameterized query
db.query('SELECT * FROM users WHERE id = ?', [userId]);

// GOOD - ORM
await prisma.user.findUnique({ where: { id: userId } });`
    },
    {
      name: "CORS Misconfiguration",
      icon: "🌐",
      desc: "Incorrect Cross-Origin Resource Sharing",
      example: `// BAD - Allows any origin
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

// Allows any site to access with user cookies!`,
      prevention: [
        "Whitelist specific origins",
        "Don't use * with credentials",
        "Validate Origin header",
        "Use CORS libraries"
      ],
      code: `// BAD
app.use(cors({
  origin: '*',
  credentials: true
}));

// GOOD
const allowedOrigins = ['https://myapp.com'];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed'));
    }
  },
  credentials: true
}));`
    },
    {
      name: "Insecure Deserialization",
      icon: "📦",
      desc: "Executing code from untrusted data",
      example: `// Attacker sends malicious serialized object
// When deserialized, executes arbitrary code`,
      prevention: [
        "Never deserialize untrusted data",
        "Use JSON instead of pickle/serialize",
        "Validate data structure",
        "Sign serialized data"
      ],
      code: `// BAD - eval() is evil!
eval(userInput);

// BAD - Unsafe deserialization
const obj = JSON.parse(userInput);
eval(obj.code); // NEVER DO THIS

// GOOD - Safe JSON parsing with validation
const obj = JSON.parse(userInput);
if (isValidSchema(obj)) {
  processData(obj);
}`
    },
    {
      name: "Directory Traversal",
      icon: "📁",
      desc: "Accessing files outside intended directory",
      example: `// User requests: ?file=../../../../etc/passwd
// Server reads: /app/files/../../../../etc/passwd
// Exposes system files!`,
      prevention: [
        "Validate file paths",
        "Use whitelists, not blacklists",
        "Resolve absolute paths",
        "Restrict file access"
      ],
      code: `// BAD
const file = req.query.file;
fs.readFile('/app/files/' + file);

// GOOD
const path = require('path');
const safePath = path.join('/app/files', path.normalize(file));
if (!safePath.startsWith('/app/files')) {
  throw new Error('Invalid path');
}
fs.readFile(safePath);`
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl">
          <span className="text-4xl">🛡️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Web Security
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            XSS, CSRF, SQL Injection, and common vulnerabilities
          </p>
        </div>
      </div>

      {/* OWASP Top 10 */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-red-600">
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">
            🔟 OWASP Top 10 Web Security Risks
          </h3>
          <p className="text-lg text-red-900 dark:text-red-100 mb-4">
            The Open Web Application Security Project (OWASP) maintains a list of the most critical web security risks.
          </p>
        </div>
      </div>

      {/* Vulnerabilities */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚠️ Common Vulnerabilities & Fixes
        </h3>
        <div className="space-y-6">
          {vulnerabilities.map((vuln, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-red-300 dark:border-red-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-4xl">{vuln.icon}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">
                    {vuln.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{vuln.desc}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                  <h5 className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">
                    ❌ Attack Example:
                  </h5>
                  <pre className="text-xs font-mono overflow-auto whitespace-pre-wrap">
                    {vuln.example}
                  </pre>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <h5 className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
                    ✅ Prevention:
                  </h5>
                  <ul className="space-y-1">
                    {vuln.prevention.map((prev, i) => (
                      <li key={i} className="text-xs flex items-start gap-1">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{prev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-green-400 mb-2">💻 Secure Code:</h5>
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
                  {vuln.code}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Headers */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔒 Essential Security Headers
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              header: "Content-Security-Policy",
              desc: "Prevent XSS by controlling resource sources",
              example: "default-src 'self'; script-src 'self' cdn.example.com"
            },
            {
              header: "X-Frame-Options",
              desc: "Prevent clickjacking attacks",
              example: "DENY or SAMEORIGIN"
            },
            {
              header: "X-Content-Type-Options",
              desc: "Prevent MIME sniffing",
              example: "nosniff"
            },
            {
              header: "Strict-Transport-Security",
              desc: "Enforce HTTPS connections",
              example: "max-age=31536000; includeSubDomains"
            },
            {
              header: "X-XSS-Protection",
              desc: "Enable browser XSS filter",
              example: "1; mode=block"
            },
            {
              header: "Referrer-Policy",
              desc: "Control referrer information",
              example: "no-referrer-when-downgrade"
            }
          ].map((header, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl border border-pink-200 dark:border-pink-800"
            >
              <h4 className="font-mono font-bold text-pink-900 dark:text-pink-100 mb-2 text-sm">
                {header.header}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{header.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                <code className="text-xs">{header.example}</code>
              </div>
            </motion.div>
          ))}
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
            <span>Never trust user input - always validate, sanitize, and escape</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Use parameterized queries to prevent SQL injection</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Implement CSRF tokens and set SameSite cookie attributes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Set security headers (CSP, X-Frame-Options, HSTS) to harden your application</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
