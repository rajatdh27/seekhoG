"use client";
import { motion } from "framer-motion";

export default function AvailabilitySection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl">
          <span className="text-4xl">💪</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Availability & Reliability
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            SLA, Fault tolerance, and Redundancy
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-8 rounded-xl border-l-4 border-red-600 mb-8">
        <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">💪 Availability & Reliability</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Availability</strong> is the percentage of time a system is operational. <strong>Reliability</strong> is the probability that the system performs correctly over time.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          High availability means the system is rarely down. High reliability means it works correctly when it's up.
        </p>
      </div>

      {/* SLA Table */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">📊 Service Level Agreements (SLA)</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-green-400">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-2">Availability %</th>
                <th className="text-left py-2">Downtime per Year</th>
                <th className="text-left py-2">Downtime per Month</th>
                <th className="text-left py-2">Downtime per Week</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800">
                <td className="py-2">90% (one nine)</td>
                <td className="py-2">36.5 days</td>
                <td className="py-2">72 hours</td>
                <td className="py-2">16.8 hours</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2">99% (two nines)</td>
                <td className="py-2">3.65 days</td>
                <td className="py-2">7.2 hours</td>
                <td className="py-2">1.68 hours</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 text-yellow-400">99.9% (three nines)</td>
                <td className="py-2">8.76 hours</td>
                <td className="py-2">43.8 minutes</td>
                <td className="py-2">10.1 minutes</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 text-green-400">99.99% (four nines)</td>
                <td className="py-2">52.6 minutes</td>
                <td className="py-2">4.38 minutes</td>
                <td className="py-2">1.01 minutes</td>
              </tr>
              <tr>
                <td className="py-2 text-emerald-400">99.999% (five nines)</td>
                <td className="py-2">5.26 minutes</td>
                <td className="py-2">26.3 seconds</td>
                <td className="py-2">6.05 seconds</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 mt-4">
          Note: Each additional nine increases cost exponentially. Most systems target 99.9% - 99.99%.
        </p>
      </div>

      {/* Redundancy Strategies */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">🔄</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Active-Active</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            All instances handle traffic simultaneously
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>✓ Better resource utilization</li>
            <li>✓ No wasted capacity</li>
            <li>✓ Load distribution</li>
            <li>✗ More complex setup</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <div className="text-4xl mb-4">⏸️</div>
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Active-Passive</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Standby takes over only on failure
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>✓ Simpler setup</li>
            <li>✓ Clear failover</li>
            <li>✗ Wasted standby capacity</li>
            <li>✗ Failover delay</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-4xl mb-4">🌍</div>
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Multi-Region</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Deploy across multiple geographic regions
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>✓ Disaster recovery</li>
            <li>✓ Reduced latency</li>
            <li>✗ Data consistency challenges</li>
            <li>✗ Higher cost</li>
          </ul>
        </div>
      </div>

      {/* Failure Modes */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⚠️ Common Failure Modes</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">Hardware Failures</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Disk failures (RAID, backups)</li>
              <li>Server crashes (redundancy)</li>
              <li>Network outages (multi-path)</li>
              <li>Power failures (UPS, generators)</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Software Failures</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Bugs and logic errors</li>
              <li>Memory leaks</li>
              <li>Cascade failures</li>
              <li>Configuration errors</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Human Errors</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Misconfigurations</li>
              <li>Bad deployments</li>
              <li>Accidental deletions</li>
              <li>Security breaches</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">External Failures</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>DDoS attacks</li>
              <li>Third-party API outages</li>
              <li>Network provider issues</li>
              <li>Natural disasters</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fault Tolerance Patterns */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🛡️ Fault Tolerance Patterns</h4>
        <div className="space-y-4">
          <div>
            <h5 className="text-lg font-bold text-green-400 mb-2">Circuit Breaker</h5>
            <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre mb-2">
{`States: Closed → Open → Half-Open

Closed: Normal operation
Open: Fail fast, don't call failing service
Half-Open: Test if service recovered

if (failureRate > threshold) {
  openCircuit();
  setTimeout(() => halfOpen(), timeout);
}`}
            </pre>
            <p className="text-xs text-slate-400">Prevents cascade failures by failing fast when downstream service is down.</p>
          </div>

          <div>
            <h5 className="text-lg font-bold text-blue-400 mb-2">Retry with Exponential Backoff</h5>
            <pre className="text-xs font-mono text-blue-400 overflow-auto whitespace-pre mb-2">
{`async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
      await sleep(delay);
    }
  }
}`}
            </pre>
            <p className="text-xs text-slate-400">Automatically retry failed operations with increasing delays.</p>
          </div>

          <div>
            <h5 className="text-lg font-bold text-purple-400 mb-2">Bulkhead Pattern</h5>
            <pre className="text-xs font-mono text-purple-400 overflow-auto whitespace-pre mb-2">
{`Isolate resources to contain failures

Service A Pool: 10 threads
Service B Pool: 10 threads
Service C Pool: 10 threads

If Service A fails → Only affects its pool
Services B and C continue working`}
            </pre>
            <p className="text-xs text-slate-400">Prevent one failing component from taking down the entire system.</p>
          </div>

          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-2">Graceful Degradation</h5>
            <pre className="text-xs font-mono text-yellow-400 overflow-auto whitespace-pre mb-2">
{`try {
  recommendations = getPersonalizedRecommendations();
} catch (error) {
  // Fall back to generic recommendations
  recommendations = getPopularItems();
}`}
            </pre>
            <p className="text-xs text-slate-400">Provide reduced functionality instead of complete failure.</p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">⭐ High Availability Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
          <ul className="space-y-2">
            <li>✓ Eliminate single points of failure</li>
            <li>✓ Use load balancers with health checks</li>
            <li>✓ Implement automated failover</li>
            <li>✓ Regular backups and disaster recovery drills</li>
            <li>✓ Monitor everything with alerts</li>
          </ul>
          <ul className="space-y-2">
            <li>✓ Use circuit breakers for external dependencies</li>
            <li>✓ Implement timeouts on all operations</li>
            <li>✓ Design for failure (chaos engineering)</li>
            <li>✓ Deploy across availability zones/regions</li>
            <li>✓ Practice incident response procedures</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
