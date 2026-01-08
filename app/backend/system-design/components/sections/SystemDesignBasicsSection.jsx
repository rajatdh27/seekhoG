"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SystemDesignBasicsSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "requirements", label: "Requirements", icon: "📝" },
    { id: "capacity", label: "Capacity Estimation", icon: "🔢" },
    { id: "components", label: "Components", icon: "🧩" },
    { id: "approach", label: "Design Approach", icon: "🎯" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">🏗️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            System Design Basics
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Requirements, Capacity estimation, and Design fundamentals
          </p>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-900 p-2 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                  : "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">🏗️ What is System Design?</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                <strong>System design</strong> is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                It involves making high-level decisions about scalability, reliability, maintainability, and performance while considering trade-offs.
              </p>
            </div>

            {/* Key Principles */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Scalability</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Ability to handle increased load by adding resources without redesigning
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="text-4xl mb-4">💪</div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Reliability</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  System continues to work correctly even when things go wrong
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Performance</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Low latency, high throughput, and efficient resource utilization
                </p>
              </div>
            </div>

            {/* Design Interview Process */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">📋 Typical Interview Process</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">Clarify Requirements (5 min)</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Ask questions, understand functional & non-functional requirements</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">Capacity Estimation (5 min)</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Calculate storage, bandwidth, QPS, server count</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">High-Level Design (10-15 min)</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Draw architecture diagram, identify components</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">Deep Dive (15-20 min)</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Discuss bottlenecks, trade-offs, scaling strategies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">Wrap Up (5 min)</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Discuss edge cases, monitoring, future improvements</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "requirements" && (
          <motion.div
            key="requirements"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">📝 Gathering Requirements</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Always start by clarifying requirements. Never jump straight to design without understanding what you're building.
              </p>
            </div>

            {/* Functional vs Non-Functional */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">✅ Functional Requirements</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                  What the system should do (features and capabilities)
                </p>
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <p><strong>Example (Twitter):</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Users can post tweets</li>
                    <li>Users can follow other users</li>
                    <li>Users see timeline of tweets</li>
                    <li>Users can like and retweet</li>
                    <li>Users can search tweets</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">⚙️ Non-Functional Requirements</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                  Quality attributes (performance, scalability, security)
                </p>
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <p><strong>Example (Twitter):</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Low latency (&lt;200ms)</li>
                    <li>High availability (99.99%)</li>
                    <li>Handle 500M users</li>
                    <li>Handle 10K tweets/sec</li>
                    <li>Data consistency</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Questions to Ask */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">❓ Questions to Ask</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <p className="font-bold text-purple-700 dark:text-purple-400">Scope & Scale:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>How many users?</li>
                    <li>Daily active users (DAU)?</li>
                    <li>Expected growth rate?</li>
                    <li>Geographic distribution?</li>
                    <li>Mobile vs web vs both?</li>
                  </ul>
                </div>
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <p className="font-bold text-purple-700 dark:text-purple-400">Performance:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>What latency is acceptable?</li>
                    <li>Read-heavy or write-heavy?</li>
                    <li>Peak traffic patterns?</li>
                    <li>Consistency requirements?</li>
                    <li>Availability targets?</li>
                  </ul>
                </div>
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <p className="font-bold text-purple-700 dark:text-purple-400">Features:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Core features vs nice-to-have?</li>
                    <li>Real-time vs eventual?</li>
                    <li>Authentication needed?</li>
                    <li>Access control required?</li>
                    <li>Analytics required?</li>
                  </ul>
                </div>
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <p className="font-bold text-purple-700 dark:text-purple-400">Constraints:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Budget constraints?</li>
                    <li>Technology preferences?</li>
                    <li>Team expertise?</li>
                    <li>Legacy system integration?</li>
                    <li>Compliance requirements?</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "capacity" && (
          <motion.div
            key="capacity"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">🔢 Capacity Estimation</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Back-of-the-envelope calculations to estimate storage, bandwidth, and server requirements.
              </p>
            </div>

            {/* Common Numbers */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">📊 Numbers Every Engineer Should Know</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`L1 cache reference              0.5 ns
Branch mispredict                5   ns
L2 cache reference               7   ns
Mutex lock/unlock               25   ns
Main memory reference          100   ns
Compress 1KB with Snappy     3,000   ns  =   3 µs
Send 2KB over 1 Gbps        20,000   ns  =  20 µs
Read 1 MB sequentially     250,000   ns  = 250 µs
Round trip in same DC      500,000   ns  = 500 µs
Disk seek                   10,000,000 ns =  10 ms
Read 1 MB from SSD         1,000,000 ns =   1 ms
Read 1 MB from disk       20,000,000 ns =  20 ms
Send packet CA→Europe    150,000,000 ns = 150 ms

Powers of 2:
- 1 KB = 2^10 = 1,024 bytes
- 1 MB = 2^20 = 1,048,576 bytes
- 1 GB = 2^30 = 1,073,741,824 bytes
- 1 TB = 2^40 bytes`}
              </pre>
            </div>

            {/* Example Calculation */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">💡 Example: Twitter-like System</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`Assumptions:
- 500 million users
- 200 million daily active users (DAU)
- Each user posts 2 tweets per day on average
- Each user follows 200 people on average
- 10:1 read to write ratio

Traffic Estimates:
- Write: 200M DAU × 2 tweets/day = 400M tweets/day
- Write QPS: 400M / 86400 sec ≈ 4,600 tweets/sec
- Peak write QPS: 4,600 × 2 = 9,200 tweets/sec
- Read QPS: 4,600 × 10 = 46,000 reads/sec
- Peak read QPS: 46,000 × 2 = 92,000 reads/sec

Storage Estimates:
- Average tweet size: 280 chars × 2 bytes = 560 bytes
- With metadata (user ID, timestamp, etc): ~1 KB per tweet
- Daily storage: 400M tweets × 1 KB = 400 GB/day
- 5-year storage: 400 GB × 365 × 5 = 730 TB
- With replication (×3): 730 TB × 3 = 2.2 PB

Bandwidth Estimates:
- Incoming: 400M tweets/day × 1 KB = 400 GB/day ≈ 4.6 MB/s
- Outgoing (10:1 ratio): 4.6 MB/s × 10 = 46 MB/s
- Peak outgoing: 46 MB/s × 2 = 92 MB/s

Cache Estimates (80/20 rule):
- 20% of tweets generate 80% of traffic
- Cache 20% of daily tweets: 400M × 0.2 = 80M tweets
- Cache size: 80M × 1 KB = 80 GB per day
- With safety margin: ~100 GB cache

Server Estimates:
- Assuming each server handles 1,000 QPS
- Read servers: 92,000 / 1,000 = 92 servers
- Write servers: 9,200 / 1,000 = 10 servers
- Total: ~100-120 application servers
- Plus databases, cache servers, load balancers`}
              </pre>
            </div>

            {/* Quick Reference */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">📝 Quick Reference</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <p className="font-bold mb-2">Time Conversions:</p>
                  <ul className="space-y-1">
                    <li>• 1 day = 86,400 seconds</li>
                    <li>• 1 million = 10^6</li>
                    <li>• 1 billion = 10^9</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Common Assumptions:</p>
                  <ul className="space-y-1">
                    <li>• Read:Write ratio: 100:1 or 10:1</li>
                    <li>• Peak traffic: 2-3× average</li>
                    <li>• 80/20 rule for caching</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "components" && (
          <motion.div
            key="components"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">🧩 Common Components</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Building blocks used in most distributed systems.
              </p>
            </div>

            {/* Components Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Load Balancer", icon: "⚖️", desc: "Distributes traffic across servers (Nginx, HAProxy, AWS ELB)" },
                { name: "API Gateway", icon: "🚪", desc: "Single entry point, auth, rate limiting, routing" },
                { name: "CDN", icon: "🌐", desc: "Content delivery network for static assets (CloudFlare, Akamai)" },
                { name: "Cache", icon: "💾", desc: "In-memory data store (Redis, Memcached)" },
                { name: "Database", icon: "🗄️", desc: "Persistent data storage (SQL, NoSQL)" },
                { name: "Message Queue", icon: "📬", desc: "Async communication (Kafka, RabbitMQ, SQS)" },
                { name: "Object Storage", icon: "📦", desc: "File and blob storage (S3, GCS)" },
                { name: "Search Engine", icon: "🔍", desc: "Full-text search (Elasticsearch, Algolia)" },
              ].map((component, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{component.icon}</div>
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{component.name}</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{component.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "approach" && (
          <motion.div
            key="approach"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">🎯 Design Approach</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Step-by-step approach to tackle system design problems.
              </p>
            </div>

            {/* Best Practices */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-green-700 dark:text-green-400 flex items-center gap-2">
                  <span>✅</span> DO
                </h4>
                <div className="space-y-3">
                  {[
                    "Ask clarifying questions first",
                    "State assumptions clearly",
                    "Start with high-level design",
                    "Draw diagrams as you explain",
                    "Discuss trade-offs explicitly",
                    "Consider both functional & non-functional requirements",
                    "Think about failure scenarios",
                    "Mention monitoring and metrics"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
                  <span>❌</span> DON'T
                </h4>
                <div className="space-y-3">
                  {[
                    "Jump into implementation details",
                    "Design in silence - think out loud",
                    "Ignore constraints and requirements",
                    "Over-engineer the solution",
                    "Forget about edge cases",
                    "Skip capacity estimation",
                    "Assume infinite resources",
                    "Ignore interviewer's hints"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
