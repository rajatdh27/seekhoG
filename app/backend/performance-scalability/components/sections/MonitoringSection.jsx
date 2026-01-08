"use client";
import { motion } from "framer-motion";

export default function MonitoringSection() {
  const keyMetrics = [
    {
      category: "Response Time Metrics",
      icon: "⏱️",
      metrics: [
        { name: "Average Response Time", target: "< 200ms", desc: "Mean time to respond" },
        { name: "P95 Response Time", target: "< 500ms", desc: "95% of requests faster than" },
        { name: "P99 Response Time", target: "< 1000ms", desc: "99% of requests faster than" }
      ]
    },
    {
      category: "Throughput Metrics",
      icon: "📊",
      metrics: [
        { name: "Requests per Second", target: "> 1000", desc: "Total requests handled" },
        { name: "Bandwidth Usage", target: "Monitor", desc: "Data transferred per second" },
        { name: "Concurrent Users", target: "Track", desc: "Active users at any time" }
      ]
    },
    {
      category: "Error Metrics",
      icon: "❌",
      metrics: [
        { name: "Error Rate", target: "< 0.1%", desc: "Percentage of failed requests" },
        { name: "4xx Errors", target: "< 1%", desc: "Client errors (400, 404, etc.)" },
        { name: "5xx Errors", target: "< 0.01%", desc: "Server errors (500, 503, etc.)" }
      ]
    },
    {
      category: "Resource Metrics",
      icon: "💻",
      metrics: [
        { name: "CPU Utilization", target: "50-70%", desc: "Processor usage" },
        { name: "Memory Usage", target: "< 80%", desc: "RAM consumption" },
        { name: "Disk I/O", target: "Monitor", desc: "Read/write operations" }
      ]
    }
  ];

  const monitoringTools = [
    {
      tool: "Prometheus + Grafana",
      icon: "📈",
      type: "Open Source",
      features: ["Time-series metrics", "Powerful queries (PromQL)", "Beautiful dashboards", "Alerting"],
      useCase: "Kubernetes, microservices, custom metrics",
      code: `# Prometheus config
scrape_configs:
  - job_name: 'api-server'
    static_configs:
      - targets: ['api:3000']
    metrics_path: '/metrics'
    scrape_interval: 15s`
    },
    {
      tool: "New Relic",
      icon: "🔍",
      type: "SaaS",
      features: ["APM", "Distributed tracing", "Error tracking", "Real-time monitoring"],
      useCase: "Full-stack monitoring, enterprise",
      code: `// Node.js APM
require('newrelic');

// Automatically tracks:
// - Response times
// - Database queries
// - External HTTP calls
// - Errors and exceptions`
    },
    {
      tool: "Datadog",
      icon: "🐶",
      type: "SaaS",
      features: ["Infrastructure monitoring", "APM", "Log management", "Synthetic monitoring"],
      useCase: "Cloud infrastructure, DevOps teams",
      code: `// Custom metrics
const StatsD = require('node-dogstatsd').StatsD;
const dogstatsd = new StatsD();

dogstatsd.increment('page.views', 1, ['route:/home']);
dogstatsd.histogram('request.duration', 150);`
    },
    {
      tool: "CloudWatch (AWS)",
      icon: "☁️",
      type: "Cloud Native",
      features: ["AWS services integration", "Custom metrics", "Logs", "Alarms"],
      useCase: "AWS infrastructure monitoring",
      code: `# CloudWatch custom metric
aws cloudwatch put-metric-data \\
  --namespace "MyApp" \\
  --metric-name "OrdersProcessed" \\
  --value 100 \\
  --unit Count`
    }
  ];

  const observabilityPillars = [
    {
      pillar: "Metrics",
      icon: "📊",
      desc: "Numerical measurements over time",
      examples: ["CPU usage: 65%", "Response time: 245ms", "Error rate: 0.05%", "Requests/sec: 1250"],
      tools: "Prometheus, CloudWatch, Datadog",
      code: `// Expose metrics endpoint
app.get('/metrics', (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(register.metrics());
});

// Custom counter
const requestCounter = new Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status']
});`
    },
    {
      pillar: "Logs",
      icon: "📝",
      desc: "Timestamped records of events",
      examples: ['[INFO] User logged in: user123', '[ERROR] Database connection failed', '[WARN] High memory usage: 85%', '[DEBUG] API call to /users/123'],
      tools: "ELK Stack, Loki, CloudWatch Logs",
      code: `// Structured logging
const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'app.log' })
  ]
});

logger.info('Order created', {
  userId: '123',
  orderId: '456',
  amount: 99.99
});`
    },
    {
      pillar: "Traces",
      icon: "🔍",
      desc: "Track request flow across services",
      examples: ["Request ID: abc123", "Service A → Service B → Service C", "Total: 450ms (A:100ms, B:250ms, C:100ms)", "Identify bottlenecks"],
      tools: "Jaeger, Zipkin, AWS X-Ray",
      code: `// Distributed tracing
const tracer = require('dd-trace').init();

app.get('/api/order/:id', async (req, res) => {
  const span = tracer.startSpan('get.order');

  // Fetch user
  const user = await fetchUser(req.params.id);

  // Fetch order
  const order = await fetchOrder(req.params.id);

  span.finish();
  res.json({ user, order });
});`
    }
  ];

  const alertingStrategies = [
    {
      strategy: "Threshold Alerts",
      desc: "Alert when metric crosses threshold",
      example: "CPU > 90% for 5 minutes",
      code: `# Prometheus Alert Rule
- alert: HighCPUUsage
  expr: cpu_usage > 90
  for: 5m
  labels:
    severity: warning
  annotations:
    summary: "High CPU usage detected"`
    },
    {
      strategy: "Rate of Change",
      desc: "Alert on sudden changes",
      example: "Error rate increased 5x in 10 min",
      code: `# Detect spike
- alert: ErrorRateSpike
  expr: |
    rate(errors_total[5m]) >
    5 * rate(errors_total[1h] offset 1h)
  for: 10m`
    },
    {
      strategy: "Anomaly Detection",
      desc: "ML-based unusual pattern detection",
      example: "Traffic pattern differs from normal",
      code: `# ML-based (Datadog)
{
  "type": "anomaly",
  "query": "avg:system.cpu.user{*}",
  "threshold": 3,  # 3 std deviations
  "algorithm": "basic"
}`
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
          <span className="text-4xl">📊</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Performance Monitoring
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Metrics, logging, tracing, and observability best practices
          </p>
        </div>
      </div>

      {/* Why Monitor */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-indigo-600">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
            👁️ Why Monitor Performance?
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Detect Issues", icon: "🔍", desc: "Before users notice" },
              { label: "Identify Bottlenecks", icon: "🎯", desc: "Optimize slow parts" },
              { label: "Capacity Planning", icon: "📈", desc: "Scale proactively" },
              { label: "SLA Compliance", icon: "✅", desc: "Meet uptime goals" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-indigo-900 dark:text-indigo-100">{item.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📏 Key Performance Metrics
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {keyMetrics.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-2 border-indigo-300 dark:border-indigo-700"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">{category.category}</h4>
              </div>
              <div className="space-y-3">
                {category.metrics.map((metric, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">{metric.name}</span>
                      <span className="text-xs bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">{metric.target}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Three Pillars of Observability */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏛️ Three Pillars of Observability
        </h3>
        <div className="space-y-6">
          {observabilityPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-4xl">{pillar.icon}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">{pillar.pillar}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{pillar.desc}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-2">Examples:</p>
                      <ul className="space-y-1">
                        {pillar.examples.map((ex, i) => (
                          <li key={i} className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">
                            • {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-2">Tools:</p>
                      <p className="text-xs bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded">{pillar.tools}</p>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg">
                    <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{pillar.code}</pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Monitoring Tools */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🛠️ Monitoring Tools
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {monitoringTools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-indigo-200 dark:border-indigo-800"
            >
              <div className="p-5 border-b border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{tool.icon}</span>
                    <h4 className="text-lg font-bold text-indigo-900 dark:text-indigo-100">{tool.tool}</h4>
                  </div>
                  <span className="text-xs bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">{tool.type}</span>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 mb-1">Features:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {tool.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded">
                  <p className="text-xs"><strong>Best for:</strong> {tool.useCase}</p>
                </div>
              </div>

              <div className="bg-slate-900 p-4 rounded-b-xl">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{tool.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Alerting Strategies */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🚨 Alerting Strategies
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {alertingStrategies.map((alert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <div className="p-5 border-b border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{alert.strategy}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{alert.desc}</p>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                  <p className="text-xs"><strong>Example:</strong> {alert.example}</p>
                </div>
              </div>
              <div className="bg-slate-900 p-4 rounded-b-xl">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{alert.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
        <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Track the four golden signals: Latency, Traffic, Errors, and Saturation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Implement all three pillars of observability: Metrics, Logs, and Traces</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Focus on actionable alerts - avoid alert fatigue by alerting only on what matters</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Use P95/P99 metrics instead of averages to catch tail latency issues</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
