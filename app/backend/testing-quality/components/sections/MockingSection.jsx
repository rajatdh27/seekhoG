"use client";
import { motion } from "framer-motion";

export default function MockingSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">🎭</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Mocking & Stubbing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Test doubles - mocks, stubs, spies, and fakes
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-purple-600 mb-8">
        <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">🎭 Test Doubles</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          Test doubles are objects that stand in for real dependencies during testing. They help isolate units and control test conditions.
        </p>
      </div>

      {/* Types of Test Doubles */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">🎯 Mock</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Pre-programmed with expectations. Verifies that certain methods were called with specific arguments.
          </p>
          <div className="bg-white dark:bg-slate-800 p-3 rounded">
            <pre className="text-xs text-slate-700 dark:text-slate-300">
{`const emailService = mock();
emailService
  .expects('sendEmail')
  .once()
  .with('user@example.com');`}
            </pre>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">📌 Stub</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Provides canned answers to calls. Returns pre-defined values without executing real logic.
          </p>
          <div className="bg-white dark:bg-slate-800 p-3 rounded">
            <pre className="text-xs text-slate-700 dark:text-slate-300">
{`const userRepo = stub();
userRepo.findById
  .returns({ id: 1, name: 'John' });`}
            </pre>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-700">
          <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">🕵️ Spy</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Records information about how it was called. Can verify interactions after the fact.
          </p>
          <div className="bg-white dark:bg-slate-800 p-3 rounded">
            <pre className="text-xs text-slate-700 dark:text-slate-300">
{`const logger = spy();
// ... code runs ...
expect(logger.log)
  .toHaveBeenCalledTimes(3);`}
            </pre>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
          <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">🏗️ Fake</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Simplified working implementation. Example: in-memory database instead of real database.
          </p>
          <div className="bg-white dark:bg-slate-800 p-3 rounded">
            <pre className="text-xs text-slate-700 dark:text-slate-300">
{`class FakeDatabase {
  data = {};
  save(key, val) {
    this.data[key] = val;
  }
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* When to Use What */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">🤔 When to Use What?</h4>
        <div className="space-y-3">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Use Mocks When:</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">You need to verify that specific methods are called with correct arguments (behavior verification)</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Use Stubs When:</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">You just need to provide test data and don't care about interactions (state verification)</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2">Use Spies When:</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">You want to use real implementations but also track how they're called</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">Use Fakes When:</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">You need a working implementation that's simpler/faster than the real thing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
