"use client";
import { motion } from "framer-motion";

export default function PerformanceTestingSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl">
          <span className="text-4xl">⚡</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Performance Testing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Load testing, stress testing, and benchmarking
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-8 rounded-xl border-l-4 border-orange-600 mb-8">
        <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">⚡ Performance Testing</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          Performance testing ensures your application can handle expected load and performs well under various conditions.
        </p>
      </div>

      {/* Types of Performance Tests */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-3xl mb-3">📊</div>
          <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Load Testing</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Test system under expected load to ensure it meets performance requirements
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
          <div className="text-3xl mb-3">🔥</div>
          <h4 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">Stress Testing</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Push system beyond normal limits to find breaking point
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <div className="text-3xl mb-3">📈</div>
          <h4 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">Spike Testing</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Test sudden increases in load (e.g., flash sales, viral content)
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-3xl mb-3">⏱️</div>
          <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">Soak Testing</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Test system under sustained load over extended period
          </p>
        </div>
      </div>

      {/* k6 Example */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🚀 k6 Load Testing Example</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('errors');

// Test configuration
export const options = {
  stages: [
    { duration: '1m', target: 50 },   // Ramp up to 50 users
    { duration: '3m', target: 50 },   // Stay at 50 users
    { duration: '1m', target: 100 },  // Ramp up to 100 users
    { duration: '3m', target: 100 },  // Stay at 100 users
    { duration: '1m', target: 0 },    // Ramp down to 0
  ],
  thresholds: {
    'http_req_duration': ['p(95)<500'],  // 95% of requests < 500ms
    'errors': ['rate<0.1'],               // Error rate < 10%
  },
};

export default function () {
  // Test homepage
  const homeResponse = http.get('https://api.example.com/');
  check(homeResponse, {
    'homepage status is 200': (r) => r.status === 200,
    'homepage loads in <200ms': (r) => r.timings.duration < 200,
  });

  sleep(1);

  // Test API endpoint
  const apiResponse = http.post('https://api.example.com/users', {
    name: 'Test User',
    email: \`test\${__VU}@example.com\`,  // __VU = virtual user ID
  });

  const success = check(apiResponse, {
    'API status is 201': (r) => r.status === 201,
    'API response has ID': (r) => r.json('id') !== undefined,
  });

  errorRate.add(!success);

  sleep(1);
}`}
        </pre>
      </div>

      {/* Apache JMeter */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">🔧 Popular Tools</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">k6</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">Modern, developer-friendly, JavaScript-based</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Apache JMeter</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">GUI-based, mature, feature-rich</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Gatling</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">Scala-based, excellent reporting</p>
          </div>
        </div>
      </div>
    </div>
  );
}
