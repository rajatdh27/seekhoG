"use client";
import { motion } from "framer-motion";

export default function WebhookSystemsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
          <span className="text-4xl">🪝</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Webhook Systems
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Event delivery, Retry logic, and Security
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border-l-4 border-indigo-600 mb-8">
        <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">🪝 What are Webhooks?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Webhooks</strong> are HTTP callbacks that notify external systems when specific events occur, enabling real-time integrations without polling.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          Instead of your app constantly checking for updates (polling), webhooks push data to your endpoint when something happens.
        </p>
      </div>

      {/* Webhooks vs Polling */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
          <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4">❌ Polling (Traditional)</h4>
          <pre className="text-xs font-mono bg-slate-900 text-red-400 p-4 rounded-lg overflow-auto mb-3">
{`// Client repeatedly asks: "Any updates?"
setInterval(async () => {
  const response = await fetch('/api/orders');
  const orders = await response.json();
  // Check for new orders
}, 5000); // Every 5 seconds

// Problems:
// - Wastes bandwidth
// - Delays (up to polling interval)
// - Server load`}
          </pre>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">✅ Webhooks (Event-driven)</h4>
          <pre className="text-xs font-mono bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto mb-3">
{`// Server sends: "New order created!"
app.post('/webhooks/orders', (req, res) => {
  const order = req.body;
  console.log('New order:', order);

  // Process immediately
  processOrder(order);

  res.sendStatus(200);
});

// Benefits:
// - Real-time updates
// - No wasted requests
// - Efficient`}
          </pre>
        </div>
      </div>

      {/* Implementing Webhook Provider */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🔧 Building a Webhook Provider (Node.js)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import crypto from 'crypto';
import axios from 'axios';

class WebhookService {
  constructor() {
    this.webhooks = new Map(); // In production, use database
  }

  // Subscribe to webhooks
  async subscribe(userId, webhookUrl, events, secret) {
    const webhook = {
      id: crypto.randomUUID(),
      userId,
      url: webhookUrl,
      events, // ['order.created', 'payment.completed']
      secret, // For HMAC signature verification
      active: true,
      createdAt: new Date()
    };

    this.webhooks.set(webhook.id, webhook);
    return webhook;
  }

  // Trigger webhook when event occurs
  async trigger(event, data) {
    const webhooks = Array.from(this.webhooks.values())
      .filter(w => w.active && w.events.includes(event));

    const results = await Promise.allSettled(
      webhooks.map(webhook => this.deliver(webhook, event, data))
    );

    return results;
  }

  // Deliver webhook with retries
  async deliver(webhook, event, data, attempt = 1) {
    const maxRetries = 3;
    const payload = {
      id: crypto.randomUUID(),
      event,
      data,
      timestamp: new Date().toISOString()
    };

    // Generate HMAC signature
    const signature = crypto
      .createHmac('sha256', webhook.secret)
      .update(JSON.stringify(payload))
      .digest('hex');

    try {
      const response = await axios.post(webhook.url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'X-Webhook-Signature': signature,
          'X-Webhook-Event': event,
          'X-Webhook-Delivery': payload.id
        },
        timeout: 5000 // 5 second timeout
      });

      // Log successful delivery
      await this.logDelivery(webhook.id, payload.id, 'success', response.status);

      return { success: true, status: response.status };
    } catch (error) {
      // Log failed delivery
      await this.logDelivery(webhook.id, payload.id, 'failed', error.response?.status);

      // Retry with exponential backoff
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
        await new Promise(resolve => setTimeout(resolve, delay));
        return this.deliver(webhook, event, data, attempt + 1);
      }

      // Disable webhook after max retries
      if (attempt >= maxRetries) {
        webhook.active = false;
        await this.notifyWebhookFailed(webhook);
      }

      throw error;
    }
  }

  async logDelivery(webhookId, deliveryId, status, statusCode) {
    // Store in database for debugging
    console.log(\`Webhook \${webhookId} delivery \${deliveryId}: \${status} (\${statusCode})\`);
  }

  async notifyWebhookFailed(webhook) {
    // Notify user that webhook is disabled
    console.log(\`Webhook \${webhook.id} disabled after failures\`);
  }
}

// Usage example
const webhookService = new WebhookService();

// User subscribes to webhooks
app.post('/api/webhooks', async (req, res) => {
  const { url, events, secret } = req.body;
  const webhook = await webhookService.subscribe(
    req.user.id,
    url,
    events,
    secret
  );
  res.json(webhook);
});

// Trigger webhook when order is created
app.post('/api/orders', async (req, res) => {
  const order = await createOrder(req.body);

  // Trigger webhook asynchronously
  webhookService.trigger('order.created', order)
    .catch(err => console.error('Webhook delivery failed:', err));

  res.json(order);
});`}
        </pre>
      </div>

      {/* Receiving Webhooks */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">📥 Receiving Webhooks (Consumer)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import crypto from 'crypto';

// Webhook receiver endpoint
app.post('/webhooks/stripe', async (req, res) => {
  const signature = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    // 1. Verify signature
    const isValid = verifyWebhookSignature(
      req.body,
      signature,
      secret
    );

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid signature' });
    }

    // 2. Parse event
    const event = req.body;

    // 3. Handle idempotency (prevent duplicate processing)
    const alreadyProcessed = await checkIfProcessed(event.id);
    if (alreadyProcessed) {
      return res.sendStatus(200); // Already processed
    }

    // 4. Process event
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSuccess(event.data);
        break;

      case 'payment_intent.failed':
        await handlePaymentFailure(event.data);
        break;

      case 'customer.subscription.created':
        await handleSubscriptionCreated(event.data);
        break;

      default:
        console.log(\`Unhandled event type: \${event.type}\`);
    }

    // 5. Mark as processed
    await markAsProcessed(event.id);

    // 6. Respond quickly (within 5 seconds)
    res.sendStatus(200);

    // 7. Do heavy processing asynchronously
    processEventAsync(event).catch(console.error);

  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

async function checkIfProcessed(eventId) {
  // Check database or cache
  const exists = await redis.exists(\`webhook:\${eventId}\`);
  return exists === 1;
}

async function markAsProcessed(eventId) {
  // Store in database or cache with expiry
  await redis.set(\`webhook:\${eventId}\`, '1', 'EX', 86400); // 24 hours
}`}
        </pre>
      </div>

      {/* Security Best Practices */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4">🔒 Webhook Security</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-3">Signature Verification</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Use HMAC signatures to verify webhook authenticity
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
              X-Webhook-Signature: sha256=abc123...
            </code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-3">HTTPS Only</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Only send webhooks to HTTPS endpoints
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
              ✅ https://api.example.com/webhooks<br/>
              ❌ http://api.example.com/webhooks
            </code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-3">IP Whitelisting</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Allow webhooks only from known IP ranges
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-3">Idempotency</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Handle duplicate deliveries gracefully with event IDs
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ Webhook Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ DO</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Verify signatures on received webhooks</li>
                <li>Respond with 2xx status quickly (&lt;5s)</li>
                <li>Implement retry logic with backoff</li>
                <li>Make webhook processing idempotent</li>
                <li>Log all webhook deliveries</li>
                <li>Provide webhook testing tools</li>
                <li>Allow users to configure events</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ DON'T</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Send sensitive data without encryption</li>
                <li>Retry indefinitely (disable after N failures)</li>
                <li>Process webhooks synchronously</li>
                <li>Accept webhooks from HTTP</li>
                <li>Skip signature verification</li>
                <li>Send all events to all webhooks</li>
                <li>Forget to handle failures gracefully</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
