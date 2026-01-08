"use client";
import { motion } from "framer-motion";

export default function DistributedTracingSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
          <span className="text-4xl">🔍</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Distributed Tracing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Jaeger, Zipkin, and OpenTelemetry
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-xl border-l-4 border-cyan-600 mb-8">
        <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">🔍 What is Distributed Tracing?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Distributed tracing</strong> tracks requests as they flow through multiple services in a distributed system, helping you understand the complete journey of a request.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          It shows you which services were involved, how long each operation took, and where errors or bottlenecks occurred.
        </p>
      </div>

      {/* Core Concepts */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">🆔</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Trace</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            The complete journey of a request through your system, composed of multiple spans
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-4xl mb-4">📏</div>
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Span</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            A single operation within a trace (e.g., database query, HTTP request, function call)
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-700">
          <div className="text-4xl mb-4">🏷️</div>
          <h4 className="text-xl font-bold text-teal-900 dark:text-teal-100 mb-3">Tags & Logs</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Metadata attached to spans (key-value pairs) providing context about the operation
          </p>
        </div>
      </div>

      {/* Trace Visualization */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">📊 Trace Visualization Example</h4>
        <pre className="text-xs font-mono text-cyan-400 overflow-auto whitespace-pre">
{`Trace ID: abc123
┌──────────────────────────────────────────────────── Total: 245ms ─┐
│
│ ┌─ HTTP GET /api/users/123 [185ms] ────────────────────────────┐
│ │                                                                │
│ │  ┌─ Auth Service [15ms] ──────┐                              │
│ │  │  - Validate Token           │                              │
│ │  └─────────────────────────────┘                              │
│ │                                                                │
│ │  ┌─ User Service [150ms] ──────────────────────────────────┐ │
│ │  │                                                           │ │
│ │  │  ┌─ Database Query [120ms] ────────────────────────┐    │ │
│ │  │  │  SELECT * FROM users WHERE id=123              │    │ │
│ │  │  └──────────────────────────────────────────────────┘    │ │
│ │  │                                                           │ │
│ │  │  ┌─ Cache Check [10ms] ─┐                               │ │
│ │  │  │  Redis GET user:123   │                               │ │
│ │  │  └───────────────────────┘                               │ │
│ │  │                                                           │ │
│ │  └───────────────────────────────────────────────────────────┘ │
│ │                                                                │
│ │  ┌─ Logging [5ms] ─────┐                                     │
│ │  │  Write audit log    │                                     │
│ │  └─────────────────────┘                                     │
│ │                                                                │
│ └────────────────────────────────────────────────────────────────┘
│
└────────────────────────────────────────────────────────────────────┘`}
        </pre>
      </div>

      {/* Popular Tools */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
          <div className="text-4xl mb-4">🔥</div>
          <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">Jaeger</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Open-source, end-to-end distributed tracing developed by Uber
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Cloud-native</li>
            <li>• OpenTelemetry compatible</li>
            <li>• Sampling strategies</li>
            <li>• Service dependency analysis</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">⚡</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Zipkin</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Distributed tracing system originally created by Twitter
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Simple to set up</li>
            <li>• Multiple storage backends</li>
            <li>• REST API</li>
            <li>• Web UI for visualization</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-4xl mb-4">🌐</div>
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">OpenTelemetry</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Vendor-neutral observability framework (CNCF project)
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Unified standard</li>
            <li>• Auto-instrumentation</li>
            <li>• Multiple languages</li>
            <li>• Metrics, logs, and traces</li>
          </ul>
        </div>
      </div>

      {/* OpenTelemetry Example */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🟢 OpenTelemetry (Node.js)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

// Create a tracer provider
const provider = new NodeTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'user-service',
    [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
  }),
});

// Configure Jaeger exporter
const exporter = new JaegerExporter({
  endpoint: 'http://localhost:14268/api/traces',
});

provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register();

// Auto-instrument HTTP and Express
registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
  ],
});

// Manual instrumentation example
import { trace } from '@opentelemetry/api';

const tracer = trace.getTracer('user-service');

async function getUserById(userId) {
  // Create a span
  const span = tracer.startSpan('getUserById', {
    attributes: {
      'user.id': userId,
      'db.system': 'postgresql',
    },
  });

  try {
    // Your business logic
    const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);

    span.setAttributes({
      'user.found': !!user,
      'user.email': user?.email,
    });

    return user;
  } catch (error) {
    span.recordException(error);
    span.setStatus({ code: SpanStatusCode.ERROR });
    throw error;
  } finally {
    span.end();
  }
}`}
        </pre>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">✨ Benefits of Distributed Tracing</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">🐛 Debugging</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Quickly identify which service caused an error and understand the context
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">⚡ Performance</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Find bottlenecks and slow operations across your distributed system
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">🔗 Dependencies</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Understand service dependencies and how they interact with each other
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">📊 Insights</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Get end-to-end visibility into request flow and system behavior
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
