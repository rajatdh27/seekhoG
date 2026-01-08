"use client";
import { motion } from "framer-motion";

export default function CodeQualitySection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
          <span className="text-4xl">✨</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Code Quality
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Linting, code coverage, and static analysis
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-8 rounded-xl border-l-4 border-violet-600 mb-8">
        <h3 className="text-2xl font-bold text-violet-900 dark:text-violet-100 mb-4">✨ Code Quality Tools</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          Automated tools help maintain code quality, catch bugs early, and enforce consistent standards across your codebase.
        </p>
      </div>

      {/* Code Quality Pillars */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">🔍</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Linting</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Static analysis to catch errors, enforce style, and improve code quality
          </p>
          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <div><strong>JavaScript:</strong> ESLint, Prettier</div>
            <div><strong>Python:</strong> Pylint, Flake8, Black</div>
            <div><strong>Java:</strong> Checkstyle, PMD</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <div className="text-4xl mb-4">📊</div>
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Code Coverage</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Measure how much of your code is executed during testing
          </p>
          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <div><strong>JavaScript:</strong> Istanbul/nyc, Jest</div>
            <div><strong>Python:</strong> Coverage.py</div>
            <div><strong>Java:</strong> JaCoCo, Cobertura</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-4xl mb-4">🔐</div>
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Security Scanning</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Find security vulnerabilities in code and dependencies
          </p>
          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <div><strong>SAST:</strong> SonarQube, Snyk Code</div>
            <div><strong>Dependencies:</strong> npm audit, Snyk</div>
            <div><strong>Secrets:</strong> GitGuardian, TruffleHog</div>
          </div>
        </div>
      </div>

      {/* ESLint Configuration */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">⚙️ ESLint Configuration Example</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'  // Disable style rules that conflict with Prettier
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
};

// package.json scripts
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write \\"**/*.{js,jsx,ts,tsx,json,css,md}\\"",
    "format:check": "prettier --check \\"**/*.{js,jsx,ts,tsx,json,css,md}\\""
  }
}`}
        </pre>
      </div>

      {/* Code Coverage Report */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">📊 Code Coverage with Jest</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// jest.config.js
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**',
  ],
  coverageThresholds: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

// Run coverage
npm test -- --coverage

// Coverage output:
// ----------------------|---------|----------|---------|---------|-------------------
// File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
// ----------------------|---------|----------|---------|---------|-------------------
// All files             |   85.71 |    83.33 |   88.89 |   85.71 |
//  src/                 |   85.71 |    83.33 |   88.89 |   85.71 |
//   calculator.js       |     100 |      100 |     100 |     100 |
//   userService.js      |   71.43 |    66.67 |   77.78 |   71.43 | 45-48
// ----------------------|---------|----------|---------|---------|-------------------`}
        </pre>
      </div>

      {/* Quality Metrics */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">📈 Key Quality Metrics</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Code Coverage</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• <strong>Statement Coverage:</strong> % of statements executed</li>
                <li>• <strong>Branch Coverage:</strong> % of conditional paths tested</li>
                <li>• <strong>Function Coverage:</strong> % of functions called</li>
                <li>• <strong>Line Coverage:</strong> % of lines executed</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Complexity Metrics</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• <strong>Cyclomatic Complexity:</strong> Number of paths through code</li>
                <li>• <strong>Cognitive Complexity:</strong> How hard code is to understand</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Code Smells</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Long methods/functions</li>
                <li>• Large classes</li>
                <li>• Duplicate code</li>
                <li>• Dead code</li>
                <li>• God objects</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Best Practices</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Run linters in CI/CD pipeline</li>
                <li>• Block PRs failing quality gates</li>
                <li>• Fix warnings, don't ignore them</li>
                <li>• Use pre-commit hooks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
