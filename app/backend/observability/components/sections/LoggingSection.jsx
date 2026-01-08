"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoggingSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "structured-logging", label: "Structured Logging", icon: "🏗️" },
    { id: "log-levels", label: "Log Levels", icon: "📊" },
    { id: "elk-stack", label: "ELK Stack", icon: "🔍" },
    { id: "best-practices", label: "Best Practices", icon: "⭐" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">📝</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Logging
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Structured logging, log aggregation, and ELK stack
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
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105"
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
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">📝 What is Logging?</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                <strong>Logging</strong> is the practice of recording events, errors, and information about your application's execution to help with debugging, monitoring, and auditing.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Good logging practices enable you to understand what happened in your system, troubleshoot issues, and maintain an audit trail of important events.
              </p>
            </div>

            {/* Why Logging Matters */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="text-4xl mb-4">🐛</div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Debugging</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Track down bugs and understand application behavior in production environments
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Monitoring</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Monitor system health, performance metrics, and detect anomalies
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">Auditing</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Maintain compliance, track security events, and audit user actions
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "structured-logging" && (
          <motion.div
            key="structured-logging"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">🏗️ Structured Logging</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Structured logging uses consistent key-value pairs (usually JSON) instead of plain text, making logs machine-readable and easier to search, filter, and analyze.
              </p>
            </div>

            {/* Unstructured vs Structured */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
                <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4">❌ Unstructured Logging</h4>
                <pre className="text-xs font-mono bg-slate-900 text-red-400 p-4 rounded-lg overflow-auto">
{`User john logged in from 192.168.1.1
Failed to connect to database
Error: timeout after 5000ms`}
                </pre>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
                  Hard to parse, filter, and search programmatically
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">✅ Structured Logging</h4>
                <pre className="text-xs font-mono bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto">
{`{
  "timestamp": "2025-01-15T10:30:00Z",
  "level": "info",
  "event": "user_login",
  "user": "john",
  "ip": "192.168.1.1",
  "service": "auth-service"
}`}
                </pre>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
                  Easy to query, filter by fields, and aggregate
                </p>
              </div>
            </div>

            {/* Node.js Winston Example */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🟢 Winston (Node.js)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ],
});

// Usage
logger.info('User logged in', {
  userId: 123,
  username: 'john',
  ip: '192.168.1.1'
});

logger.error('Database connection failed', {
  error: err.message,
  database: 'users_db',
  retries: 3
});`}
              </pre>
            </div>

            {/* Python structlog Example */}
            <div className="bg-slate-900 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">🐍 structlog (Python)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import structlog

logger = structlog.get_logger()

# Configure structured logging
structlog.configure(
    processors=[
        structlog.stdlib.add_log_level,
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.JSONRenderer()
    ]
)

# Usage
logger.info("user_login",
    user_id=123,
    username="john",
    ip="192.168.1.1"
)

logger.error("database_error",
    error="connection timeout",
    database="users_db",
    retry_count=3
)`}
              </pre>
            </div>
          </motion.div>
        )}

        {activeTab === "log-levels" && (
          <motion.div
            key="log-levels"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">📊 Log Levels</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Log levels help categorize and filter log messages by severity and importance.
              </p>
            </div>

            {/* Log Levels Table */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🔍</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">TRACE / DEBUG</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Detailed information for debugging, typically disabled in production</p>
                  </div>
                  <div className="px-3 py-1 bg-slate-300 dark:bg-slate-800 rounded text-xs font-mono">Lowest</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-200 dark:from-blue-900/40 dark:to-cyan-900/40 p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">ℹ️</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100">INFO</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">General informational messages about application flow</p>
                    <code className="text-xs bg-blue-200 dark:bg-blue-950 px-2 py-1 rounded mt-1 inline-block">
                      User logged in, Request processed, Service started
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-amber-200 dark:from-yellow-900/40 dark:to-amber-900/40 p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">⚠️</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-yellow-900 dark:text-yellow-100">WARN</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Potentially harmful situations that don't stop execution</p>
                    <code className="text-xs bg-yellow-200 dark:bg-yellow-950 px-2 py-1 rounded mt-1 inline-block">
                      Deprecated API used, Cache miss, Slow query
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-rose-200 dark:from-red-900/40 dark:to-rose-900/40 p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">❌</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-red-900 dark:text-red-100">ERROR</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Error events that might still allow the application to continue</p>
                    <code className="text-xs bg-red-200 dark:bg-red-950 px-2 py-1 rounded mt-1 inline-block">
                      Database error, Failed to send email, API timeout
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-200 dark:from-purple-900/40 dark:to-pink-900/40 p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">💥</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100">FATAL / CRITICAL</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Severe errors causing application shutdown</p>
                    <code className="text-xs bg-purple-200 dark:bg-purple-950 px-2 py-1 rounded mt-1 inline-block">
                      Out of memory, Unable to start server, Configuration invalid
                    </code>
                  </div>
                  <div className="px-3 py-1 bg-purple-300 dark:bg-purple-800 rounded text-xs font-mono">Highest</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "elk-stack" && (
          <motion.div
            key="elk-stack"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">🔍 ELK Stack</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Elasticsearch, Logstash, and Kibana - the most popular open-source log aggregation and visualization stack.
              </p>
            </div>

            {/* ELK Components */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-700">
                <div className="text-4xl mb-4">📦</div>
                <h4 className="text-xl font-bold text-teal-900 dark:text-teal-100 mb-3">Elasticsearch</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Distributed search and analytics engine that stores and indexes logs
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Logstash</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Data processing pipeline that ingests, transforms, and sends logs to Elasticsearch
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Kibana</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Visualization and exploration tool for searching and visualizing logs
                </p>
              </div>
            </div>

            {/* Logstash Configuration */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">⚙️ Logstash Configuration Example</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# logstash.conf
input {
  # Read logs from files
  file {
    path => "/var/log/app/*.log"
    start_position => "beginning"
    codec => json
  }

  # Or receive logs via TCP
  tcp {
    port => 5000
    codec => json_lines
  }
}

filter {
  # Parse timestamp
  date {
    match => [ "timestamp", "ISO8601" ]
    target => "@timestamp"
  }

  # Add tags based on log level
  if [level] == "error" {
    mutate {
      add_tag => [ "error" ]
    }
  }

  # Grok parsing for unstructured logs
  grok {
    match => {
      "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:message}"
    }
  }
}

output {
  # Send to Elasticsearch
  elasticsearch {
    hosts => ["localhost:9200"]
    index => "app-logs-%{+YYYY.MM.dd}"
  }

  # Also output to console for debugging
  stdout {
    codec => rubydebug
  }
}`}
              </pre>
            </div>

            {/* Alternative: Fluentd */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">🌊 Alternative: Fluentd</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Fluentd is a lightweight alternative to Logstash, often used in cloud-native environments.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-700 dark:text-blue-400">Advantages:</strong>
                  <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                    <li>Lower memory footprint</li>
                    <li>500+ plugins available</li>
                    <li>Cloud-native friendly</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-blue-700 dark:text-blue-400">Use Cases:</strong>
                  <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                    <li>Kubernetes logging</li>
                    <li>Container environments</li>
                    <li>Cloud platforms</li>
                  </ul>
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
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">⭐ Logging Best Practices</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Follow these best practices to build effective and maintainable logging systems.
              </p>
            </div>

            {/* DO vs DON'T */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-green-700 dark:text-green-400 flex items-center gap-2">
                  <span>✅</span> DO
                </h4>
                <div className="space-y-3">
                  {[
                    "Use structured logging (JSON format)",
                    "Include correlation IDs for tracing requests",
                    "Log at appropriate levels (INFO, WARN, ERROR)",
                    "Include context (user ID, request ID, timestamp)",
                    "Sanitize sensitive data (passwords, tokens)",
                    "Use log rotation to manage disk space",
                    "Add request/response times for performance",
                    "Include stack traces for errors"
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
                    "Log sensitive data (passwords, credit cards, PII)",
                    "Use only console.log() in production",
                    "Log everything at DEBUG level in production",
                    "Ignore log rotation and fill up disk",
                    "Use string concatenation for log messages",
                    "Log inside tight loops (performance hit)",
                    "Forget to add timestamps",
                    "Mix different log formats"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Correlation ID Example */}
            <div className="bg-slate-900 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">🔗 Correlation ID Pattern</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Express.js middleware to add correlation ID
import { v4 as uuidv4 } from 'uuid';

app.use((req, res, next) => {
  // Get correlation ID from header or generate new one
  const correlationId = req.headers['x-correlation-id'] || uuidv4();

  // Attach to request
  req.correlationId = correlationId;

  // Add to response headers
  res.setHeader('x-correlation-id', correlationId);

  // Include in all logs for this request
  req.logger = logger.child({ correlationId });

  next();
});

// Usage in route handlers
app.get('/users/:id', async (req, res) => {
  req.logger.info('Fetching user', { userId: req.params.id });

  try {
    const user = await db.getUser(req.params.id);
    req.logger.info('User fetched successfully', { userId: user.id });
    res.json(user);
  } catch (error) {
    req.logger.error('Failed to fetch user', {
      userId: req.params.id,
      error: error.message,
      stack: error.stack
    });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// All logs for this request will have the same correlationId
// Making it easy to trace the entire request flow`}
              </pre>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
