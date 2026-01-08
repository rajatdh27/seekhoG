"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AuthenticationBasics() {
  const [selectedMethod, setSelectedMethod] = useState("session");

  const authMethods = {
    session: {
      name: "Session-Based Auth",
      icon: "🍪",
      desc: "Server stores session data, client gets session ID cookie",
      flow: ["User logs in", "Server creates session", "Session ID stored in cookie", "Cookie sent with each request", "Server validates session"],
      pros: ["Easy to invalidate", "Server controls sessions", "Stateful - can track active users"],
      cons: ["Requires server memory", "Harder to scale", "Not ideal for APIs"],
      code: `// Login endpoint
app.post('/login', (req, res) => {
  const user = authenticateUser(req.body);
  req.session.userId = user.id; // Store in session
  res.json({ success: true });
});

// Protected route
app.get('/profile', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json(getUserProfile(req.session.userId));
});`
    },
    jwt: {
      name: "JWT (JSON Web Tokens)",
      icon: "🎫",
      desc: "Stateless tokens containing user data, signed by server",
      flow: ["User logs in", "Server creates JWT", "JWT sent to client", "Client stores JWT (localStorage/cookie)", "JWT sent in Authorization header"],
      pros: ["Stateless - scales easily", "Works across domains", "Perfect for APIs", "No server storage"],
      cons: ["Hard to invalidate", "Token size larger", "Vulnerable if stolen"],
      code: `// Login endpoint
app.post('/login', (req, res) => {
  const user = authenticateUser(req.body);
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  res.json({ token });
});

// Protected route
app.get('/profile', authenticateJWT, (req, res) => {
  // req.user set by authenticateJWT middleware
  res.json(getUserProfile(req.user.userId));
});`
    },
    oauth: {
      name: "OAuth 2.0",
      icon: "🔑",
      desc: "Delegate authentication to third-party providers",
      flow: ["User clicks 'Login with Google'", "Redirect to provider", "User approves", "Provider sends auth code", "Exchange code for access token"],
      pros: ["No password management", "Trusted providers", "Single sign-on", "User trust"],
      cons: ["Dependent on third party", "More complex setup", "Privacy concerns"],
      code: `// Using Passport.js with Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ googleId: profile.id },
      (err, user) => done(err, user)
    );
  }
));

// Routes
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => res.redirect('/dashboard')
);`
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl">
          <span className="text-4xl">🔐</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Authentication Basics
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Sessions, Cookies, JWT, and OAuth
          </p>
        </div>
      </div>

      {/* What is Authentication */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-red-600">
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">
            🎯 What is Authentication?
          </h3>
          <p className="text-lg text-red-900 dark:text-red-100 mb-4">
            <strong>Authentication</strong> is the process of verifying who a user is. It answers: "Are you who you claim to be?"
            Different from <strong>Authorization</strong>, which asks: "What are you allowed to do?"
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>Authentication = Who are you? | Authorization = What can you do?</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Authentication Methods */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔑 Authentication Methods
        </h3>
        <div className="flex gap-3 mb-6 flex-wrap">
          {Object.entries(authMethods).map(([key, method]) => (
            <button
              key={key}
              onClick={() => setSelectedMethod(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedMethod === key
                  ? 'bg-red-600 text-white shadow-lg scale-105'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:scale-105'
              }`}
            >
              <span className="text-2xl mr-2">{method.icon}</span>
              {method.name}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedMethod}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border-2 border-red-300 dark:border-red-700"
        >
          {(() => {
            const selected = authMethods[selectedMethod];
            return (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{selected.icon}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {selected.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">{selected.desc}</p>
                  </div>
                </div>

                {/* Flow */}
                <div className="mb-6">
                  <h5 className="font-semibold text-red-700 dark:text-red-400 mb-3">
                    📋 How it works:
                  </h5>
                  <div className="space-y-2">
                    {selected.flow.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                      <span>✅</span> Advantages
                    </h5>
                    <ul className="space-y-2">
                      {selected.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-green-500 mt-0.5">•</span>
                          <span className="text-slate-700 dark:text-slate-300">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2">
                      <span>⚠️</span> Trade-offs
                    </h5>
                    <ul className="space-y-2">
                      {selected.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-orange-500 mt-0.5">•</span>
                          <span className="text-slate-700 dark:text-slate-300">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Code Example */}
                <div>
                  <h5 className="font-semibold text-red-700 dark:text-red-400 mb-3">
                    💻 Code Example:
                  </h5>
                  <div className="bg-slate-900 p-4 rounded-lg overflow-auto">
                    <pre className="text-sm font-mono text-green-400 whitespace-pre">
                      {selected.code}
                    </pre>
                  </div>
                </div>
              </>
            );
          })()}
        </motion.div>
      </div>

      {/* Cookies vs Tokens */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🍪 Cookies vs Tokens
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700"
          >
            <h4 className="text-2xl font-bold text-yellow-900 dark:text-yellow-100 mb-4 flex items-center gap-2">
              <span>🍪</span> Cookies
            </h4>
            <ul className="space-y-3 text-sm mb-4">
              <li><strong>Stored:</strong> Browser automatically manages</li>
              <li><strong>Sent:</strong> Automatically with every request</li>
              <li><strong>Security:</strong> HttpOnly, Secure, SameSite flags</li>
              <li><strong>Size:</strong> ~4KB limit</li>
              <li><strong>Best for:</strong> Session-based auth, same-domain</li>
            </ul>
            <div className="bg-yellow-100 dark:bg-yellow-900/40 p-3 rounded-lg">
              <code className="text-xs">
                Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict
              </code>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700"
          >
            <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <span>🎫</span> Tokens (JWT)
            </h4>
            <ul className="space-y-3 text-sm mb-4">
              <li><strong>Stored:</strong> localStorage, sessionStorage, memory</li>
              <li><strong>Sent:</strong> Manually in Authorization header</li>
              <li><strong>Security:</strong> Sign & verify, short expiry</li>
              <li><strong>Size:</strong> Larger (~1-2KB typical)</li>
              <li><strong>Best for:</strong> APIs, mobile apps, microservices</li>
            </ul>
            <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-lg">
              <code className="text-xs">
                Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
              </code>
            </div>
          </motion.div>
        </div>
      </div>

      {/* JWT Structure */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎫 JWT Structure
        </h3>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-orange-300 dark:border-orange-700">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            A JWT consists of three parts separated by dots (.)
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { part: "Header", color: "red", desc: "Algorithm & token type", example: '{"alg":"HS256","typ":"JWT"}' },
              { part: "Payload", color: "orange", desc: "User data (claims)", example: '{"userId":123,"exp":1735689600}' },
              { part: "Signature", color: "amber", desc: "Verify integrity", example: 'HMACSHA256(base64(header).base64(payload), secret)' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-${item.color}-100 dark:bg-${item.color}-900/30 p-4 rounded-lg`}>
                <h5 className={`font-bold text-${item.color}-900 dark:text-${item.color}-100 mb-2`}>{item.part}</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{item.desc}</p>
                <code className="text-xs bg-white/50 dark:bg-slate-800/50 p-2 rounded block break-all">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 p-3 rounded-lg">
            <code className="text-xs text-green-400 break-all">
              eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiZXhwIjoxNzM1Njg5NjAwfQ.signature_here
            </code>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ Authentication Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { practice: "Always use HTTPS", why: "Prevent man-in-the-middle attacks" },
            { practice: "Set short token expiry (15min-1hr)", why: "Limit damage if token stolen" },
            { practice: "Use refresh tokens", why: "Issue new access tokens without re-login" },
            { practice: "HttpOnly cookies for sessions", why: "Prevent XSS attacks from stealing cookies" },
            { practice: "Implement rate limiting", why: "Prevent brute force attacks" },
            { practice: "Multi-factor authentication (MFA)", why: "Add extra security layer" },
            { practice: "Secure password reset flows", why: "Use time-limited tokens, verify email" },
            { practice: "Log authentication events", why: "Detect suspicious activity" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800"
            >
              <h5 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <span>✓</span> {item.practice}
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.why}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
        <h3 className="text-xl font-semibold mb-4 text-red-900 dark:text-red-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Authentication verifies identity; Authorization determines permissions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Session-based auth is stateful and easy to invalidate; JWT is stateless and scalable</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>OAuth 2.0 delegates authentication to trusted third-party providers</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 dark:text-red-400 mt-1">•</span>
            <span>Always use HTTPS, short token expiry, and implement rate limiting for security</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
