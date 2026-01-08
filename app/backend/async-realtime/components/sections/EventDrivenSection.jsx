"use client";
import { motion } from "framer-motion";

export default function EventDrivenSection() {
  const architecturePatterns = [
    {
      name: "Event Sourcing",
      icon: "📜",
      desc: "Store all changes as sequence of events",
      benefits: ["Complete audit trail", "Time travel debugging", "Event replay", "Temporal queries"],
      code: `// Event Store
class EventStore {
  constructor() {
    this.events = [];
  }

  // Append event to stream
  append(aggregateId, event) {
    this.events.push({
      aggregateId,
      eventType: event.type,
      data: event.data,
      timestamp: Date.now(),
      version: this.getVersion(aggregateId) + 1
    });
  }

  // Get all events for aggregate
  getEvents(aggregateId) {
    return this.events.filter(e => e.aggregateId === aggregateId);
  }

  // Rebuild state from events
  rebuild(aggregateId) {
    const events = this.getEvents(aggregateId);
    return events.reduce((state, event) => {
      return applyEvent(state, event);
    }, {});
  }
}

// Example: Bank Account
const eventStore = new EventStore();

// Create account
eventStore.append('account-123', {
  type: 'AccountCreated',
  data: { owner: 'John', initialBalance: 1000 }
});

// Deposit money
eventStore.append('account-123', {
  type: 'MoneyDeposited',
  data: { amount: 500 }
});

// Withdraw money
eventStore.append('account-123', {
  type: 'MoneyWithdrawn',
  data: { amount: 200 }
});

// Rebuild current state
const currentState = eventStore.rebuild('account-123');
console.log(currentState); // { balance: 1300 }`
    },
    {
      name: "CQRS (Command Query Responsibility Segregation)",
      icon: "⚡",
      desc: "Separate read and write models",
      benefits: ["Independent scaling", "Optimized queries", "Different data models", "Better performance"],
      code: `// Write Model (Commands)
class OrderCommandHandler {
  async createOrder(command) {
    const { userId, items, total } = command;

    // Validate
    if (items.length === 0) throw new Error('Empty order');

    // Create order
    const order = {
      id: generateId(),
      userId,
      items,
      total,
      status: 'pending',
      createdAt: Date.now()
    };

    // Save to write DB
    await writeDB.orders.insert(order);

    // Publish event
    await eventBus.publish('OrderCreated', order);

    return order.id;
  }

  async updateOrderStatus(command) {
    const { orderId, status } = command;
    await writeDB.orders.update(orderId, { status });
    await eventBus.publish('OrderStatusChanged', { orderId, status });
  }
}

// Read Model (Queries)
class OrderQueryHandler {
  // Denormalized view optimized for reading
  async getOrderSummary(userId) {
    // Read from read-optimized DB
    return await readDB.query(\`
      SELECT
        o.id,
        o.total,
        o.status,
        o.created_at,
        COUNT(oi.id) as item_count
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      WHERE o.user_id = ?
      GROUP BY o.id
      ORDER BY o.created_at DESC
    \`, [userId]);
  }

  async getUserStats(userId) {
    // Pre-calculated aggregates
    return await readDB.userStats.findOne({ userId });
  }
}

// Event Handler updates read model
eventBus.on('OrderCreated', async (event) => {
  // Update denormalized read model
  await readDB.orders.insert({
    id: event.id,
    userId: event.userId,
    total: event.total,
    status: event.status,
    itemCount: event.items.length
  });

  // Update user stats
  await readDB.userStats.increment(event.userId, {
    totalOrders: 1,
    totalSpent: event.total
  });
});`
    },
    {
      name: "Event Bus / Event Broker",
      icon: "🚌",
      desc: "Central hub for publishing and subscribing to events",
      benefits: ["Loose coupling", "Scalability", "Flexibility", "Multiple subscribers"],
      code: `// Event Bus Implementation
class EventBus {
  constructor() {
    this.subscribers = new Map();
  }

  // Subscribe to events
  subscribe(eventType, handler) {
    if (!this.subscribers.has(eventType)) {
      this.subscribers.set(eventType, []);
    }
    this.subscribers.get(eventType).push(handler);
  }

  // Publish event
  async publish(eventType, data) {
    const event = {
      type: eventType,
      data,
      timestamp: Date.now(),
      id: generateId()
    };

    // Get all subscribers
    const handlers = this.subscribers.get(eventType) || [];

    // Execute all handlers
    await Promise.all(
      handlers.map(handler => handler(event))
    );

    // Log event
    await this.logEvent(event);
  }

  async logEvent(event) {
    // Store in event log for replay/audit
    await eventLog.insert(event);
  }
}

// Usage
const eventBus = new EventBus();

// Multiple subscribers for same event
eventBus.subscribe('UserRegistered', async (event) => {
  // Send welcome email
  await emailService.sendWelcome(event.data.email);
});

eventBus.subscribe('UserRegistered', async (event) => {
  // Create user profile
  await profileService.create(event.data.userId);
});

eventBus.subscribe('UserRegistered', async (event) => {
  // Track analytics
  await analytics.track('user_registered', event.data);
});

// Publish event - all subscribers triggered
await eventBus.publish('UserRegistered', {
  userId: 123,
  email: 'user@example.com',
  name: 'John Doe'
});`
    },
    {
      name: "Saga Pattern",
      icon: "🔗",
      desc: "Manage distributed transactions across services",
      benefits: ["Distributed transactions", "Rollback on failure", "Eventual consistency", "Fault tolerance"],
      code: `// Order Saga - Coordinates distributed transaction
class OrderSaga {
  async execute(orderData) {
    const saga = {
      id: generateId(),
      status: 'started',
      steps: []
    };

    try {
      // Step 1: Reserve inventory
      const reservation = await inventoryService.reserve(orderData.items);
      saga.steps.push({
        name: 'reserveInventory',
        status: 'completed',
        compensate: () => inventoryService.release(reservation.id)
      });

      // Step 2: Process payment
      const payment = await paymentService.charge(
        orderData.userId,
        orderData.total
      );
      saga.steps.push({
        name: 'processPayment',
        status: 'completed',
        compensate: () => paymentService.refund(payment.id)
      });

      // Step 3: Create order
      const order = await orderService.create({
        ...orderData,
        reservationId: reservation.id,
        paymentId: payment.id
      });
      saga.steps.push({
        name: 'createOrder',
        status: 'completed',
        compensate: () => orderService.cancel(order.id)
      });

      // Step 4: Send notification
      await notificationService.send(orderData.userId, {
        type: 'order_confirmed',
        orderId: order.id
      });

      saga.status = 'completed';
      return order;

    } catch (error) {
      // Rollback - compensate all completed steps
      saga.status = 'failed';
      await this.compensate(saga);
      throw error;
    }
  }

  async compensate(saga) {
    // Execute compensation actions in reverse order
    for (const step of saga.steps.reverse()) {
      if (step.status === 'completed' && step.compensate) {
        try {
          await step.compensate();
          step.status = 'compensated';
        } catch (err) {
          console.error(\`Failed to compensate \${step.name}\`, err);
        }
      }
    }
  }
}

// Usage
const orderSaga = new OrderSaga();
try {
  const order = await orderSaga.execute({
    userId: 123,
    items: [{ productId: 456, quantity: 2 }],
    total: 99.99
  });
  console.log('Order successful:', order.id);
} catch (error) {
  console.error('Order failed, rolled back:', error);
}`
    }
  ];

  const eventStreamingPlatforms = [
    {
      name: "Apache Kafka",
      icon: "🌊",
      features: ["High throughput", "Persistent log", "Replay events", "Partitioning"],
      code: `// Kafka Producer
const { Kafka } = require('kafkajs');
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();
await producer.connect();

await producer.send({
  topic: 'user-events',
  messages: [
    {
      key: 'user-123',
      value: JSON.stringify({
        type: 'UserRegistered',
        userId: 123,
        email: 'user@example.com'
      })
    }
  ]
});

// Kafka Consumer
const consumer = kafka.consumer({ groupId: 'email-service' });
await consumer.connect();
await consumer.subscribe({ topic: 'user-events' });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    const event = JSON.parse(message.value.toString());
    console.log('Processing event:', event.type);

    if (event.type === 'UserRegistered') {
      await sendWelcomeEmail(event.email);
    }
  }
});`
    },
    {
      name: "AWS EventBridge",
      icon: "☁️",
      features: ["Serverless", "Event routing", "Schema registry", "Archive/replay"],
      code: `const { EventBridgeClient, PutEventsCommand } = require('@aws-sdk/client-eventbridge');

const client = new EventBridgeClient({ region: 'us-east-1' });

// Publish event
await client.send(new PutEventsCommand({
  Entries: [
    {
      Source: 'my.app',
      DetailType: 'UserRegistered',
      Detail: JSON.stringify({
        userId: 123,
        email: 'user@example.com',
        timestamp: Date.now()
      }),
      EventBusName: 'default'
    }
  ]
}));

// Event Rule (defined in AWS Console or IaC)
{
  "source": ["my.app"],
  "detail-type": ["UserRegistered"],
  "detail": {
    "userId": [{ "exists": true }]
  }
}`
    },
    {
      name: "Redis Streams",
      icon: "💾",
      features: ["Lightweight", "Consumer groups", "Persistence", "Fast"],
      code: `const redis = require('redis');
const client = redis.createClient();

// Produce event
await client.xAdd('user-events', '*', {
  type: 'UserRegistered',
  userId: '123',
  email: 'user@example.com'
});

// Consume events (consumer group)
await client.xGroupCreate('user-events', 'email-workers', '0', {
  MKSTREAM: true
});

while (true) {
  const events = await client.xReadGroup(
    'email-workers',
    'worker-1',
    [{ key: 'user-events', id: '>' }],
    { COUNT: 10, BLOCK: 5000 }
  );

  for (const event of events) {
    const { type, email } = event.message;
    if (type === 'UserRegistered') {
      await sendWelcomeEmail(email);
      // Acknowledge
      await client.xAck('user-events', 'email-workers', event.id);
    }
  }
}`
    }
  ];

  const designPrinciples = [
    {
      principle: "Events as First-Class Citizens",
      desc: "Events represent facts that happened",
      example: "OrderPlaced, PaymentProcessed, UserRegistered",
      icon: "📋"
    },
    {
      principle: "Immutable Events",
      desc: "Events never change once created",
      example: "Store events as append-only log",
      icon: "🔒"
    },
    {
      principle: "Eventually Consistent",
      desc: "Accept temporary inconsistency for better availability",
      example: "Read model catches up with write model",
      icon: "⏱️"
    },
    {
      principle: "Idempotent Event Handlers",
      desc: "Handling same event multiple times has same effect",
      example: "Check if already processed before executing",
      icon: "🔁"
    },
    {
      principle: "Loose Coupling",
      desc: "Services don't know about each other",
      example: "Communicate only via events",
      icon: "🔌"
    },
    {
      principle: "Single Responsibility",
      desc: "Each service handles specific domain events",
      example: "Email service only handles email-related events",
      icon: "🎯"
    }
  ];

  const useCases = [
    {
      useCase: "Microservices Communication",
      scenario: "Services need to notify each other of changes",
      solution: "Publish domain events to event bus",
      benefit: "Services remain independent and loosely coupled"
    },
    {
      useCase: "Audit Trail",
      scenario: "Track all changes for compliance",
      solution: "Event sourcing stores complete history",
      benefit: "Never lose data, can reconstruct any state"
    },
    {
      useCase: "Real-time Analytics",
      scenario: "Process events as they happen",
      solution: "Stream events to analytics platform",
      benefit: "Instant insights and dashboards"
    },
    {
      useCase: "Complex Workflows",
      scenario: "Multi-step processes across services",
      solution: "Saga pattern coordinates distributed transactions",
      benefit: "Reliable execution with rollback capability"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <span className="text-4xl">🔄</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Event-Driven Architecture
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Event sourcing, CQRS, event buses, and distributed sagas
          </p>
        </div>
      </div>

      {/* Why Event-Driven */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            ⚡ Why Event-Driven Architecture?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Loose Coupling", desc: "Independent services", icon: "🔌" },
              { label: "Scalability", desc: "Scale components independently", icon: "📈" },
              { label: "Flexibility", desc: "Add new features easily", icon: "🎨" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-purple-900 dark:text-purple-100">{item.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏗️ Architecture Patterns
        </h3>
        <div className="space-y-6">
          {architecturePatterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-5xl">{pattern.icon}</span>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">{pattern.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{pattern.desc}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-2">Key Benefits:</p>
                    <div className="flex flex-wrap gap-2">
                      {pattern.benefits.map((benefit, i) => (
                        <span key={i} className="text-xs bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded">
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg">
                    <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{pattern.code}</pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Streaming Platforms */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌊 Event Streaming Platforms
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {eventStreamingPlatforms.map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <div className="p-4 border-b border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">{platform.icon}</span>
                  <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100">{platform.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 p-3 rounded-b-xl">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{platform.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Design Principles */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ Design Principles
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {designPrinciples.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.principle}</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.desc}</p>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                    <p className="text-xs font-mono">{item.example}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💼 Common Use Cases
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-5 rounded-xl border border-pink-200 dark:border-pink-800"
            >
              <h4 className="text-lg font-bold text-pink-900 dark:text-pink-100 mb-3">{item.useCase}</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Scenario:</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">{item.scenario}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Solution:</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">{item.solution}</span>
                </div>
                <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded">
                  <span className="font-semibold text-pink-900 dark:text-pink-100">✓ Benefit:</span>
                  <span className="text-slate-700 dark:text-slate-300 ml-2">{item.benefit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Event-driven architecture enables loose coupling - services communicate via events, not direct calls</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Event sourcing provides complete audit trail - rebuild state from events for debugging and compliance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>CQRS separates reads and writes - optimize each independently for better performance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Saga pattern manages distributed transactions - coordinate across services with compensation logic</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
