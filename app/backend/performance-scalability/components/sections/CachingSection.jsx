"use client";
import { motion } from "framer-motion";

export default function CachingSection() {
  const cachingStrategies = [
    {
      name: "Cache-Aside (Lazy Loading)",
      icon: "📥",
      desc: "Application loads data from cache, falls back to database if miss",
      flow: "App → Cache → (Miss) → DB → Cache → App",
      pros: ["Only cache what's needed", "Cache failure won't break app", "Data model flexibility"],
      cons: ["Cache miss penalty", "Potential stale data", "Extra code complexity"],
      useCase: "Read-heavy workloads, e-commerce product pages"
    },
    {
      name: "Write-Through",
      icon: "✍️",
      desc: "Write to cache and database simultaneously",
      flow: "App → Cache + DB → Success",
      pros: ["Data consistency", "No stale data", "Simple to implement"],
      cons: ["Write latency", "Unnecessary cached data", "Write overhead"],
      useCase: "Data consistency critical, banking transactions"
    },
    {
      name: "Write-Behind (Write-Back)",
      icon: "⏰",
      desc: "Write to cache first, async write to database later",
      flow: "App → Cache → (Async) → DB",
      pros: ["Fast writes", "Batch database writes", "Reduced DB load"],
      cons: ["Data loss risk", "Complexity", "Eventual consistency"],
      useCase: "High write throughput, analytics, logging"
    },
    {
      name: "Refresh-Ahead",
      icon: "🔄",
      desc: "Automatically refresh cache before expiration",
      flow: "Cache → (Before Expire) → DB → Update Cache",
      pros: ["Prevents cache misses", "Predictable performance", "Always fresh data"],
      cons: ["Wasted resources if data not accessed", "Complex prediction", "Extra DB load"],
      useCase: "Predictable access patterns, news sites, dashboards"
    }
  ];

  const cachingLayers = [
    {
      layer: "Browser Cache",
      icon: "🌐",
      ttl: "Minutes to Days",
      examples: ["Images", "CSS/JS", "HTML pages"],
      headers: "Cache-Control, ETag, Last-Modified"
    },
    {
      layer: "CDN Cache",
      icon: "☁️",
      ttl: "Hours to Days",
      examples: ["Static assets", "API responses", "Media files"],
      headers: "CloudFront, Cloudflare, Fastly"
    },
    {
      layer: "Application Cache",
      icon: "🖥️",
      ttl: "Seconds to Hours",
      examples: ["Session data", "User profiles", "API responses"],
      headers: "Redis, Memcached, In-Memory"
    },
    {
      layer: "Database Cache",
      icon: "💾",
      ttl: "Milliseconds to Minutes",
      examples: ["Query results", "Indexes", "Hot data"],
      headers: "Query cache, Buffer pool"
    }
  ];

  const cacheInvalidation = [
    {
      strategy: "TTL (Time To Live)",
      desc: "Data expires after fixed time",
      code: `cache.set('user:123', userData, { ttl: 3600 }); // 1 hour`
    },
    {
      strategy: "LRU (Least Recently Used)",
      desc: "Evict least recently accessed data when full",
      code: `// Redis automatically uses LRU when maxmemory-policy is set
maxmemory-policy allkeys-lru`
    },
    {
      strategy: "Explicit Invalidation",
      desc: "Manually delete cache on data update",
      code: `// On user update
await db.updateUser(userId, data);
await cache.delete(\`user:\${userId}\`);`
    },
    {
      strategy: "Cache Stampede Prevention",
      desc: "Prevent multiple processes from regenerating same cache",
      code: `// Use locks or probabilistic early expiration
if (Math.random() < 0.1 && willExpireSoon) {
  refreshCache();
}`
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
          <span className="text-4xl">💨</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Caching Strategies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Redis, Memcached, CDN, and cache invalidation strategies
          </p>
        </div>
      </div>

      {/* Why Caching */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-l-4 border-orange-600">
          <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
            ⚡ Why Cache?
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-orange-900 dark:text-orange-100">
            <div>
              <div className="text-3xl font-bold">10-100x</div>
              <div className="text-sm">Faster Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold">80-90%</div>
              <div className="text-sm">Reduced DB Load</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$$$</div>
              <div className="text-sm">Lower Infrastructure Costs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Caching Strategies */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Caching Strategies
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {cachingStrategies.map((strategy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-orange-300 dark:border-orange-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{strategy.icon}</span>
                <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100">{strategy.name}</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{strategy.desc}</p>

              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg mb-3">
                <div className="text-xs font-mono text-slate-700 dark:text-slate-300">{strategy.flow}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">✅ Pros:</p>
                  <ul className="text-xs space-y-1">
                    {strategy.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-1">⚠️ Cons:</p>
                  <ul className="text-xs space-y-1">
                    {strategy.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded">
                <p className="text-xs"><strong>Use Case:</strong> {strategy.useCase}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Caching Layers */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏗️ Caching Layers
        </h3>
        <div className="space-y-4">
          {cachingLayers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border border-orange-200 dark:border-orange-800"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{layer.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-orange-900 dark:text-orange-100">{layer.layer}</h4>
                    <span className="text-xs bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded">{layer.ttl}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Examples:</p>
                      <div className="flex flex-wrap gap-1">
                        {layer.examples.map((ex, i) => (
                          <span key={i} className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">{ex}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Tools/Headers:</p>
                      <p className="text-xs text-slate-700 dark:text-slate-300">{layer.headers}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cache Invalidation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🗑️ Cache Invalidation Strategies
        </h3>
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl mb-6">
          <p className="text-lg text-orange-900 dark:text-orange-100">
            <em>"There are only two hard things in Computer Science: cache invalidation and naming things."</em> - Phil Karlton
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cacheInvalidation.map((inv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-orange-200 dark:border-orange-800"
            >
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">{inv.strategy}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{inv.desc}</p>
              <div className="bg-slate-900 p-3 rounded-lg">
                <pre className="text-xs font-mono text-green-400 overflow-auto">{inv.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Redis vs Memcached */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🥊 Redis vs Memcached
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-300 dark:border-red-700">
            <h4 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">Redis</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Rich data structures (Lists, Sets, Hashes, Sorted Sets)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Persistence (RDB, AOF)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Pub/Sub messaging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Transactions & Lua scripting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Replication & clustering</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700">
            <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">Memcached</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Simpler, faster for simple key-value</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Multi-threaded (better CPU utilization)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Lower memory overhead</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Easier to scale horizontally</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">⚠</span>
                <span>No persistence, strings only</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
        <h3 className="text-xl font-semibold mb-4 text-orange-900 dark:text-orange-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
            <span>Choose caching strategy based on read/write patterns and consistency needs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
            <span>Implement multiple caching layers (Browser, CDN, Application, Database)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
            <span>Use TTL and LRU for automatic cache invalidation, explicit invalidation for critical data</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
            <span>Redis for complex data structures, Memcached for simple key-value caching</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
