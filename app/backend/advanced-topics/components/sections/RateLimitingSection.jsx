"use client";
import { motion } from "framer-motion";

export default function RateLimitingSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl">
          <span className="text-4xl">🚦</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Rate Limiting
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Token bucket, Leaky bucket, and Algorithms
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-xl border-l-4 border-amber-600 mb-8">
        <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">🚦 What is Rate Limiting?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Rate limiting</strong> controls the number of requests a client can make to an API within a specific time window, protecting against abuse, DoS attacks, and ensuring fair resource usage.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          It's essential for API stability, cost control, and providing a consistent experience for all users.
        </p>
      </div>

      {/* Common Algorithms */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">🪣</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Token Bucket</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Tokens are added to a bucket at a fixed rate. Each request consumes a token. If no tokens available, request is rejected.
          </p>
          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-xs">
            <strong className="text-blue-700 dark:text-blue-400">Pros:</strong>
            <ul className="list-disc list-inside mt-1 text-slate-700 dark:text-slate-300">
              <li>Allows bursts of traffic</li>
              <li>Simple to implement</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <div className="text-4xl mb-4">💧</div>
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Leaky Bucket</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Requests enter a queue and are processed at a fixed rate. Queue has maximum size - excess requests are dropped.
          </p>
          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-xs">
            <strong className="text-green-700 dark:text-green-400">Pros:</strong>
            <ul className="list-disc list-inside mt-1 text-slate-700 dark:text-slate-300">
              <li>Smooth, constant rate</li>
              <li>No bursts</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-4xl mb-4">⏰</div>
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Fixed Window</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Allow N requests per time window (e.g., 100 requests per minute). Counter resets at window boundary.
          </p>
          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-xs">
            <strong className="text-purple-700 dark:text-purple-400">Cons:</strong>
            <ul className="list-disc list-inside mt-1 text-slate-700 dark:text-slate-300">
              <li>Burst at window edges</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
          <div className="text-4xl mb-4">📊</div>
          <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">Sliding Window</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Hybrid approach - calculates rate based on previous window weighted with current window.
          </p>
          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-xs">
            <strong className="text-orange-700 dark:text-orange-400">Pros:</strong>
            <ul className="list-disc list-inside mt-1 text-slate-700 dark:text-slate-300">
              <li>More accurate</li>
              <li>Prevents edge bursts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Express.js Implementation */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🟢 Express Rate Limiting (express-rate-limit)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import Redis from 'ioredis';

const redis = new Redis();

// Basic rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false,
  message: 'Too many requests, please try again later.',

  // Custom key generator (default is IP)
  keyGenerator: (req) => {
    return req.user?.id || req.ip;
  },

  // Custom handler when limit is exceeded
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests',
      retryAfter: req.rateLimit.resetTime
    });
  }
});

// Redis-backed rate limiter (for distributed systems)
const distributedLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  store: new RedisStore({
    client: redis,
    prefix: 'rl:', // Key prefix in Redis
  }),
});

// Apply to all routes
app.use(limiter);

// Different limits for different routes
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  skipSuccessfulRequests: true, // Don't count successful requests
});

app.post('/api/register', createAccountLimiter, async (req, res) => {
  // Registration logic
});

// API key-based rate limiting
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: async (req) => {
    // Get limit from database based on user's plan
    const user = await getUserFromApiKey(req.headers['x-api-key']);
    return user.plan === 'premium' ? 1000 : 100;
  },
  keyGenerator: (req) => req.headers['x-api-key'],
});

app.use('/api/', apiLimiter);`}
        </pre>
      </div>

      {/* Redis Implementation */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🔴 Custom Token Bucket (Redis)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import Redis from 'ioredis';

const redis = new Redis();

class TokenBucketRateLimiter {
  constructor(capacity, refillRate) {
    this.capacity = capacity;       // Maximum tokens
    this.refillRate = refillRate;   // Tokens added per second
  }

  async allowRequest(userId) {
    const key = \`rate_limit:\${userId}\`;
    const now = Date.now() / 1000; // Current time in seconds

    // Lua script for atomic operation
    const script = \`
      local key = KEYS[1]
      local capacity = tonumber(ARGV[1])
      local refill_rate = tonumber(ARGV[2])
      local now = tonumber(ARGV[3])

      local bucket = redis.call('HMGET', key, 'tokens', 'last_refill')
      local tokens = tonumber(bucket[1])
      local last_refill = tonumber(bucket[2])

      if tokens == nil then
        tokens = capacity
        last_refill = now
      end

      -- Refill tokens based on time elapsed
      local elapsed = now - last_refill
      local tokens_to_add = elapsed * refill_rate
      tokens = math.min(capacity, tokens + tokens_to_add)

      if tokens >= 1 then
        tokens = tokens - 1
        redis.call('HMSET', key, 'tokens', tokens, 'last_refill', now)
        redis.call('EXPIRE', key, 3600) -- Expire after 1 hour
        return 1 -- Request allowed
      else
        return 0 -- Request denied
      end
    \`;

    const result = await redis.eval(
      script,
      1,
      key,
      this.capacity,
      this.refillRate,
      now
    );

    return result === 1;
  }
}

// Usage
const limiter = new TokenBucketRateLimiter(100, 10); // 100 capacity, refill 10/sec

async function rateLimitMiddleware(req, res, next) {
  const userId = req.user?.id || req.ip;
  const allowed = await limiter.allowRequest(userId);

  if (allowed) {
    next();
  } else {
    res.status(429).json({
      error: 'Rate limit exceeded',
      retryAfter: 1
    });
  }
}`}
        </pre>
      </div>

      {/* Response Headers */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">📋 Standard Rate Limit Headers</h4>
        <pre className="text-xs font-mono bg-slate-900 text-blue-400 p-4 rounded-lg overflow-auto">
{`HTTP/1.1 200 OK
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1642521600

HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1642521600
Retry-After: 60`}
        </pre>
        <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <p><strong>X-RateLimit-Limit:</strong> Maximum requests allowed in window</p>
          <p><strong>X-RateLimit-Remaining:</strong> Requests remaining in current window</p>
          <p><strong>X-RateLimit-Reset:</strong> Unix timestamp when limit resets</p>
          <p><strong>Retry-After:</strong> Seconds until next request can be made</p>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ Rate Limiting Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ DO</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Return clear error messages with retry info</li>
                <li>Use distributed storage (Redis) for scaling</li>
                <li>Implement different tiers for users</li>
                <li>Add rate limit headers to responses</li>
                <li>Allow burst traffic with token bucket</li>
                <li>Monitor rate limit metrics</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ DON'T</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Use in-memory storage for distributed systems</li>
                <li>Set limits too restrictive for normal use</li>
                <li>Forget to handle rate limit on client side</li>
                <li>Rate limit health check endpoints</li>
                <li>Use only IP-based limiting (VPN/NAT issues)</li>
                <li>Skip rate limiting on expensive operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
