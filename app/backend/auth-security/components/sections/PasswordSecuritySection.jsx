"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PasswordSecuritySection() {
  const [password, setPassword] = useState("MyP@ssw0rd123");
  const [showStrength, setShowStrength] = useState(false);

  const checkStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^a-zA-Z0-9]/.test(pwd)) score++;

    if (score <= 2) return { level: "Weak", color: "red" };
    if (score <= 4) return { level: "Medium", color: "yellow" };
    return { level: "Strong", color: "green" };
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <span className="text-4xl">🔒</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Password Security
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Hashing, salting, and secure password storage
          </p>
        </div>
      </div>

      {/* Never Store Plain Passwords */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-red-600">
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
            <span>⛔</span> NEVER Store Passwords in Plain Text!
          </h3>
          <p className="text-lg text-red-900 dark:text-red-100 mb-4">
            If your database is compromised, plain text passwords expose all user accounts.
            Always hash passwords before storing them.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
              <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">❌ BAD - Plain Text:</p>
              <code className="text-xs">password: "MyP@ssw0rd123"</code>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
              <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">✅ GOOD - Hashed:</p>
              <code className="text-xs break-all">$2b$10$N9qo8uL...</code>
            </div>
          </div>
        </div>
      </div>

      {/* Hashing Algorithms */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔐 Password Hashing Algorithms
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "bcrypt",
              icon: "🏆",
              rating: "Recommended",
              desc: "Industry standard, built-in salting, configurable cost",
              pros: ["Slow by design (brute-force resistant)", "Auto salt generation", "Widely supported"],
              code: `const bcrypt = require('bcrypt');
const saltRounds = 10;

// Hash password
const hash = await bcrypt.hash(password, saltRounds);

// Verify password
const match = await bcrypt.compare(password, hash);`
            },
            {
              name: "argon2",
              icon: "🥇",
              rating: "Best (Modern)",
              desc: "Winner of Password Hashing Competition 2015",
              pros: ["Most secure", "Memory-hard", "Resistant to GPU attacks"],
              code: `const argon2 = require('argon2');

// Hash password
const hash = await argon2.hash(password);

// Verify password
const match = await argon2.verify(hash, password);`
            },
            {
              name: "scrypt",
              icon: "⚡",
              rating: "Good",
              desc: "Memory and CPU intensive",
              pros: ["Memory-hard", "Good security", "Used by cryptocurrencies"],
              code: `const crypto = require('crypto');

// Hash password
crypto.scrypt(password, salt, 64,
  (err, hash) => {
    // Store hash
  }
);`
            },
            {
              name: "PBKDF2",
              icon: "🔧",
              rating: "Acceptable",
              desc: "NIST approved, widely available",
              pros: ["FIPS approved", "Built into Node.js", "Configurable iterations"],
              code: `const crypto = require('crypto');

crypto.pbkdf2(password, salt, 100000, 64, 'sha512',
  (err, hash) => {
    // Store hash
  }
);`
            }
          ].map((algo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{algo.icon}</span>
                  <div>
                    <h4 className="font-bold text-purple-900 dark:text-purple-100 text-xl">{algo.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      algo.rating.includes('Best') || algo.rating.includes('Recommended')
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white'
                    }`}>
                      {algo.rating}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{algo.desc}</p>
              <div className="mb-4">
                <h5 className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-2">Advantages:</h5>
                <ul className="space-y-1">
                  {algo.pros.map((pro, i) => (
                    <li key={i} className="text-xs flex items-start gap-1">
                      <span className="text-green-500">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg">
                <pre className="text-xs text-green-400 overflow-auto whitespace-pre-wrap">
                  {algo.code}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
          <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
            <span>⚠️</span> NEVER Use These:
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>MD5, SHA-1, SHA-256</strong> - Too fast! Vulnerable to brute force attacks.
            Designed for speed, not password security. Use bcrypt or argon2 instead.
          </p>
        </div>
      </div>

      {/* Salting */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🧂 What is Salting?
        </h3>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700">
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            A <strong>salt</strong> is random data added to passwords before hashing.
            It prevents rainbow table attacks and ensures identical passwords have different hashes.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
              <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">❌ Without Salt:</p>
              <code className="text-xs block mb-1">hash("password123") = abc123...</code>
              <code className="text-xs block">hash("password123") = abc123...</code>
              <p className="text-xs mt-2 text-red-700 dark:text-red-300">Same hash! Vulnerable to rainbow tables</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
              <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">✅ With Salt:</p>
              <code className="text-xs block mb-1">hash("password123" + "xF2k") = def456...</code>
              <code className="text-xs block">hash("password123" + "9pLm") = ghi789...</code>
              <p className="text-xs mt-2 text-green-700 dark:text-green-300">Different hashes! Rainbow tables useless</p>
            </div>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg">
            <p className="text-sm font-semibold mb-2">How it works:</p>
            <ol className="text-sm space-y-1">
              <li>1. Generate random salt for each user</li>
              <li>2. Combine password + salt</li>
              <li>3. Hash the combined string</li>
              <li>4. Store both hash and salt in database</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Password Strength Checker */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💪 Password Strength Checker
        </h3>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
          <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
            Enter a password to test:
          </label>
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setShowStrength(false);
            }}
            className="w-full px-4 py-3 border-2 border-purple-300 dark:border-purple-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          />
          <button
            onClick={() => setShowStrength(true)}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Check Strength
          </button>

          {showStrength && password && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4"
            >
              {(() => {
                const strength = checkStrength(password);
                return (
                  <div className={`bg-${strength.color}-50 dark:bg-${strength.color}-900/20 p-4 rounded-lg border-2 border-${strength.color}-400 dark:border-${strength.color}-700`}>
                    <p className={`text-lg font-bold text-${strength.color}-800 dark:text-${strength.color}-200 mb-3`}>
                      Strength: {strength.level}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className={password.length >= 12 ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                        {password.length >= 12 ? '✓' : '✗'} At least 12 characters
                      </div>
                      <div className={/[a-z]/.test(password) ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                        {/[a-z]/.test(password) ? '✓' : '✗'} Lowercase letters
                      </div>
                      <div className={/[A-Z]/.test(password) ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                        {/[A-Z]/.test(password) ? '✓' : '✗'} Uppercase letters
                      </div>
                      <div className={/[0-9]/.test(password) ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                        {/[0-9]/.test(password) ? '✓' : '✗'} Numbers
                      </div>
                      <div className={/[^a-zA-Z0-9]/.test(password) ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                        {/[^a-zA-Z0-9]/.test(password) ? '✓' : '✗'} Special characters
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ Password Security Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { practice: "Use bcrypt or argon2", why: "Industry-standard, slow hashing algorithms" },
            { practice: "Never limit password length", why: "Longer = more secure. No max length!" },
            { practice: "Allow all special characters", why: "Don't restrict character types" },
            { practice: "Implement rate limiting", why: "Prevent brute force attacks" },
            { practice: "Use password breach databases", why: "Check against HaveIBeenPwned API" },
            { practice: "Enforce minimum 12 characters", why: "Balance security and usability" },
            { practice: "Implement account lockout", why: "Lock after X failed attempts" },
            { practice: "Email on password change", why: "Alert users to unauthorized changes" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                <span>✓</span> {item.practice}
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.why}</p>
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
            <span>NEVER store passwords in plain text - always hash with bcrypt or argon2</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Salting prevents rainbow table attacks by making identical passwords hash differently</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Use slow hashing algorithms (bcrypt, argon2) to resist brute force attacks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Never use MD5 or SHA for passwords - they're designed for speed, not security</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
