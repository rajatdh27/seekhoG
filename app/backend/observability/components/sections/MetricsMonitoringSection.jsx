"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MetricsMonitoringSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "prometheus", label: "Prometheus", icon: "🔥" },
    { id: "grafana", label: "Grafana", icon: "📊" },
    { id: "metrics-types", label: "Metric Types", icon: "📈" },
    { id: "best-practices", label: "Best Practices", icon: "⭐" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
          <span className="text-4xl">📈</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Metrics & Monitoring
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Prometheus, Grafana, and application metrics
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
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105"
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
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border-l-4 border-orange-600 mb-8">
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">📈 What are Metrics?</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                <strong>Metrics</strong> are numerical measurements collected over time that help you understand your system's health, performance, and behavior.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Unlike logs which record discrete events, metrics provide continuous quantitative data that can be aggregated, graphed, and used for alerting.
              </p>
            </div>

            {/* Key Metrics Categories */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Performance</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Response times, latency, throughput
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <div className="text-3xl mb-3">💪</div>
                <h4 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">Resources</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  CPU, memory, disk, network usage
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">Business</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Users, transactions, revenue
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
                <div className="text-3xl mb-3">❌</div>
                <h4 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">Errors</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Error rates, failed requests
                </p>
              </div>
            </div>

            {/* Four Golden Signals */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">🌟 Four Golden Signals (Google SRE)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">1. Latency</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Time to service a request (distinguish success vs error latency)</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">2. Traffic</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Demand on your system (requests per second, transactions/sec)</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">3. Errors</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Rate of failed requests (explicit failures, wrong content, policy violations)</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">4. Saturation</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">How "full" your service is (CPU, memory, I/O utilization)</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "prometheus" && (
          <motion.div
            key="prometheus"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border-l-4 border-orange-600 mb-8">
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">🔥 Prometheus</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability in cloud-native environments.
              </p>
            </div>

            {/* Prometheus Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="text-4xl mb-4">📡</div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Pull Model</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Prometheus scrapes metrics from instrumented targets at regular intervals
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">PromQL</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Powerful query language for selecting and aggregating time series data
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="text-4xl mb-4">💾</div>
                <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Time Series</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Stores metrics as time series data with efficient compression
                </p>
              </div>
            </div>

            {/* Node.js Example */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🟢 Prometheus Client (Node.js)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import express from 'express';
import promClient from 'prom-client';

const app = express();

// Create a Registry
const register = new promClient.Registry();

// Add default metrics (CPU, memory, etc.)
promClient.collectDefaultMetrics({ register });

// Create custom metrics
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5] // seconds
});

const httpRequestTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

const activeConnections = new promClient.Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
});

// Register metrics
register.registerMetric(httpRequestDuration);
register.registerMetric(httpRequestTotal);
register.registerMetric(activeConnections);

// Middleware to track metrics
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const labels = {
      method: req.method,
      route: req.route?.path || req.path,
      status_code: res.statusCode
    };

    httpRequestDuration.observe(labels, duration);
    httpRequestTotal.inc(labels);
  });

  activeConnections.inc();
  res.on('finish', () => activeConnections.dec());

  next();
});

// Expose metrics endpoint
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  const metrics = await register.metrics();
  res.send(metrics);
});

app.listen(3000);`}
              </pre>
            </div>

            {/* PromQL Examples */}
            <div className="bg-slate-900 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">🔍 PromQL Query Examples</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# Request rate (requests per second)
rate(http_requests_total[5m])

# Average response time
rate(http_request_duration_seconds_sum[5m])
  / rate(http_request_duration_seconds_count[5m])

# 95th percentile latency
histogram_quantile(0.95,
  rate(http_request_duration_seconds_bucket[5m])
)

# Error rate (4xx and 5xx responses)
sum(rate(http_requests_total{status_code=~"4..|5.."}[5m]))
  / sum(rate(http_requests_total[5m]))

# CPU usage by instance
100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# Memory usage percentage
(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes)
  / node_memory_MemTotal_bytes * 100

# Top 5 endpoints by request count
topk(5, sum by (route) (rate(http_requests_total[5m])))`}
              </pre>
            </div>
          </motion.div>
        )}

        {activeTab === "grafana" && (
          <motion.div
            key="grafana"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border-l-4 border-orange-600 mb-8">
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">📊 Grafana</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Grafana is a powerful visualization and analytics platform for metrics from various data sources including Prometheus.
              </p>
            </div>

            {/* Grafana Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Rich Visualizations</h4>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                  <li>• Time series graphs</li>
                  <li>• Heatmaps and histograms</li>
                  <li>• Tables and stat panels</li>
                  <li>• Gauges and bar charts</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <div className="text-4xl mb-4">🔌</div>
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Data Sources</h4>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                  <li>• Prometheus</li>
                  <li>• Elasticsearch</li>
                  <li>• InfluxDB</li>
                  <li>• MySQL, PostgreSQL</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="text-4xl mb-4">🔔</div>
                <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Alerting</h4>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                  <li>• Visual alert rules</li>
                  <li>• Multiple notification channels</li>
                  <li>• Slack, PagerDuty, email</li>
                  <li>• Alert grouping and routing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">Dashboards</h4>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                  <li>• Interactive and customizable</li>
                  <li>• Template variables</li>
                  <li>• Dashboard sharing</li>
                  <li>• JSON model for version control</li>
                </ul>
              </div>
            </div>

            {/* Common Dashboard Panels */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">📊 Common Dashboard Panels</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Request Rate</h5>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    rate(http_requests_total[5m])
                  </code>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Error Rate</h5>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    sum(rate(errors[5m]))
                  </code>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Latency p95</h5>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    histogram_quantile(0.95, ...)
                  </code>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">CPU Usage</h5>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    100 - idle_cpu_percentage
                  </code>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Memory Usage</h5>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    used_memory / total_memory
                  </code>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-teal-700 dark:text-teal-400 mb-2">Active Users</h5>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    active_sessions_total
                  </code>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "metrics-types" && (
          <motion.div
            key="metrics-types"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border-l-4 border-orange-600 mb-8">
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">📈 Metric Types</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Prometheus defines four core metric types, each suited for different use cases.
              </p>
            </div>

            {/* Metric Types */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">📊</div>
                  <div>
                    <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Counter</h4>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">
                      A cumulative metric that only increases (or resets to zero on restart)
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Use Cases:</p>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                    <li>Total number of requests</li>
                    <li>Number of errors</li>
                    <li>Tasks completed</li>
                  </ul>
                  <pre className="text-xs font-mono bg-slate-900 text-green-400 p-3 rounded mt-3 overflow-auto">
{`const counter = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests'
});

counter.inc(); // Increment by 1
counter.inc(5); // Increment by 5`}
                  </pre>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🎚️</div>
                  <div>
                    <h4 className="text-2xl font-bold text-green-900 dark:text-green-100">Gauge</h4>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">
                      A metric that can go up or down, representing a single numerical value
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Use Cases:</p>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                    <li>Current memory usage</li>
                    <li>Number of active connections</li>
                    <li>Queue size</li>
                  </ul>
                  <pre className="text-xs font-mono bg-slate-900 text-green-400 p-3 rounded mt-3 overflow-auto">
{`const gauge = new promClient.Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
});

gauge.set(42); // Set to specific value
gauge.inc(); // Increment
gauge.dec(); // Decrement`}
                  </pre>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">📊</div>
                  <div>
                    <h4 className="text-2xl font-bold text-purple-900 dark:text-purple-100">Histogram</h4>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">
                      Samples observations and counts them in configurable buckets
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">Use Cases:</p>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                    <li>Request duration/latency</li>
                    <li>Response sizes</li>
                    <li>Calculating percentiles (p50, p95, p99)</li>
                  </ul>
                  <pre className="text-xs font-mono bg-slate-900 text-green-400 p-3 rounded mt-3 overflow-auto">
{`const histogram = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Request duration',
  buckets: [0.1, 0.5, 1, 2, 5] // seconds
});

histogram.observe(0.47); // Record observation`}
                  </pre>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">📈</div>
                  <div>
                    <h4 className="text-2xl font-bold text-orange-900 dark:text-orange-100">Summary</h4>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">
                      Similar to histogram but calculates quantiles on the client side
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-orange-700 dark:text-orange-400 mb-2">Use Cases:</p>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                    <li>Request latencies (when you need exact quantiles)</li>
                    <li>Response sizes</li>
                  </ul>
                  <pre className="text-xs font-mono bg-slate-900 text-green-400 p-3 rounded mt-3 overflow-auto">
{`const summary = new promClient.Summary({
  name: 'http_request_duration_seconds',
  help: 'Request duration',
  percentiles: [0.5, 0.9, 0.99]
});

summary.observe(0.47); // Record observation`}
                  </pre>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 italic">
                    Note: Use Histogram over Summary for most cases (better aggregation across instances)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "best-practices" && (
          <motion.div
            key="best-practices"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border-l-4 border-orange-600 mb-8">
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">⭐ Metrics Best Practices</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Follow these practices for effective metrics and monitoring.
              </p>
            </div>

            {/* DO vs DON'T */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-green-700 dark:text-green-400 flex items-center gap-2">
                  <span>✅</span> DO
                </h4>
                <div className="space-y-3">
                  {[
                    "Use descriptive metric names (http_requests_total, not req)",
                    "Follow naming conventions (subsystem_component_unit)",
                    "Use labels for dimensions (method, status_code)",
                    "Choose appropriate metric types",
                    "Set reasonable histogram buckets",
                    "Monitor the Four Golden Signals",
                    "Use rate() for counters, not raw values",
                    "Set up alerting on metrics"
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
                    "Use high cardinality labels (user_id, email)",
                    "Create too many metrics (metric explosion)",
                    "Use Gauges for cumulative values",
                    "Ignore metric naming conventions",
                    "Monitor everything (focus on what matters)",
                    "Set alert thresholds without analysis",
                    "Use Summary when Histogram would work",
                    "Forget to add units in metric names"
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
