"use client";
import { motion } from "framer-motion";

export default function ErrorTrackingSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl">
          <span className="text-4xl">🐛</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Error Tracking
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Sentry, Rollbar, and error monitoring
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-8 rounded-xl border-l-4 border-red-600 mb-8">
        <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">🐛 What is Error Tracking?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Error tracking</strong> automatically captures, aggregates, and alerts you about errors and exceptions in your application, providing context to help you fix issues quickly.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          Modern error tracking tools provide stack traces, user context, breadcrumbs, and release tracking to streamline debugging.
        </p>
      </div>

      {/* Why Error Tracking Matters */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">🚨</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Instant Alerts</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Get notified immediately when errors occur in production, not when users report them
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-4xl mb-4">📍</div>
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Context</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Stack traces, user data, browser info, and breadcrumbs help reproduce and fix bugs
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <div className="text-4xl mb-4">📊</div>
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Trends</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Track error frequency, affected users, and identify regressions across releases
          </p>
        </div>
      </div>

      {/* Popular Tools */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-4xl mb-4">👁️</div>
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Sentry</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Most popular error tracking platform with extensive features
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Source maps support</li>
            <li>• Release tracking</li>
            <li>• Performance monitoring</li>
            <li>• Issue grouping & deduplication</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">📦</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Rollbar</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Real-time error tracking with intelligent grouping
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• ML-powered grouping</li>
            <li>• Deploy tracking</li>
            <li>• Custom fingerprinting</li>
            <li>• People tracking</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
          <div className="text-4xl mb-4">🔍</div>
          <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">Bugsnag</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Error monitoring focused on stability metrics
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Stability scores</li>
            <li>• Mobile-first</li>
            <li>• Session tracking</li>
            <li>• Breadcrumbs</li>
          </ul>
        </div>
      </div>

      {/* Sentry Integration Example */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">👁️ Sentry Integration (Node.js)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import * as Sentry from '@sentry/node';
import express from 'express';

// Initialize Sentry
Sentry.init({
  dsn: 'https://your-dsn@sentry.io/project-id',
  environment: process.env.NODE_ENV,
  release: process.env.GIT_COMMIT,

  // Set sampling rate for performance monitoring
  tracesSampleRate: 0.1,

  // Integrations
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app }),
  ],
});

const app = express();

// RequestHandler must be first middleware
app.use(Sentry.Handlers.requestHandler());

// TracingHandler for performance monitoring
app.use(Sentry.Handlers.tracingHandler());

// Your routes
app.get('/users/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    // Manually capture exception with context
    Sentry.captureException(error, {
      tags: {
        route: '/users/:id',
        userId: req.params.id,
      },
      user: {
        id: req.user?.id,
        email: req.user?.email,
      },
      extra: {
        requestBody: req.body,
        queryParams: req.query,
      },
    });

    res.status(500).json({ error: 'Internal server error' });
  }
});

// ErrorHandler must be last middleware
app.use(Sentry.Handlers.errorHandler());

// Add breadcrumbs for better context
Sentry.addBreadcrumb({
  category: 'auth',
  message: 'User logged in',
  level: 'info',
  data: {
    userId: user.id,
    email: user.email,
  },
});

app.listen(3000);`}
        </pre>
      </div>

      {/* React/Frontend Example */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">⚛️ Sentry for React</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://your-dsn@sentry.io/project-id",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0.1,

  // Filter sensitive data
  beforeSend(event, hint) {
    // Don't send events with passwords
    if (event.request?.data?.password) {
      delete event.request.data.password;
    }
    return event;
  },
});

// Wrap your app
function App() {
  return (
    <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
      <YourApp />
    </Sentry.ErrorBoundary>
  );
}

// Manual error capture
function handlePayment(data) {
  try {
    processPayment(data);
  } catch (error) {
    Sentry.captureException(error, {
      tags: { payment: 'stripe' },
      contexts: {
        payment: {
          amount: data.amount,
          currency: data.currency,
        },
      },
    });
  }
}`}
        </pre>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ Error Tracking Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ DO</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Add user context (ID, email)</li>
                <li>Use breadcrumbs for user actions</li>
                <li>Tag errors by severity</li>
                <li>Upload source maps for minified code</li>
                <li>Track releases and deployments</li>
                <li>Set up proper alert rules</li>
                <li>Filter sensitive data (PII, passwords)</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ DON'T</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Ignore error quotas (manage volume)</li>
                <li>Send all errors to Slack (noise)</li>
                <li>Log sensitive user data</li>
                <li>Forget to handle error deduplication</li>
                <li>Skip source map uploads</li>
                <li>Ignore error trends over time</li>
                <li>Alert on every single error</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
