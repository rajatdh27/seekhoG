"use client";
import { motion } from "framer-motion";

export default function DesignPatternsSection() {
  const creationalPatterns = [
    {
      name: "Singleton",
      icon: "1️⃣",
      desc: "Ensure only one instance exists",
      useCase: "Database connections, configuration managers, logging",
      code: `// Singleton Pattern
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.connection = this.createConnection();
    Database.instance = this;
  }

  createConnection() {
    return {
      host: 'localhost',
      port: 5432,
      connected: true
    };
  }

  query(sql) {
    return this.connection.query(sql);
  }
}

// Usage
const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true - same instance

// Modern approach with module
let instance = null;

export function getDatabase() {
  if (!instance) {
    instance = createConnection();
  }
  return instance;
}`
    },
    {
      name: "Factory",
      icon: "🏭",
      desc: "Create objects without specifying exact class",
      useCase: "Payment processors, notification services, database drivers",
      code: `// Factory Pattern
class PaymentFactory {
  static createPaymentProcessor(type) {
    switch (type) {
      case 'stripe':
        return new StripePayment();
      case 'paypal':
        return new PayPalPayment();
      case 'crypto':
        return new CryptoPayment();
      default:
        throw new Error(\`Unknown payment type: \${type}\`);
    }
  }
}

class StripePayment {
  async processPayment(amount, cardToken) {
    // Stripe-specific implementation
    return await stripe.charges.create({
      amount,
      source: cardToken,
      currency: 'usd'
    });
  }
}

class PayPalPayment {
  async processPayment(amount, paypalToken) {
    // PayPal-specific implementation
    return await paypal.payment.create({
      amount,
      token: paypalToken
    });
  }
}

// Usage
const processor = PaymentFactory.createPaymentProcessor('stripe');
await processor.processPayment(1000, 'tok_visa');`
    },
    {
      name: "Builder",
      icon: "🔨",
      desc: "Construct complex objects step by step",
      useCase: "Query builders, API request builders, complex configs",
      code: `// Builder Pattern
class QueryBuilder {
  constructor(table) {
    this.table = table;
    this.whereConditions = [];
    this.selectFields = ['*'];
    this.orderByField = null;
    this.limitValue = null;
  }

  select(...fields) {
    this.selectFields = fields;
    return this;
  }

  where(field, operator, value) {
    this.whereConditions.push({ field, operator, value });
    return this;
  }

  orderBy(field, direction = 'ASC') {
    this.orderByField = { field, direction };
    return this;
  }

  limit(count) {
    this.limitValue = count;
    return this;
  }

  build() {
    let sql = \`SELECT \${this.selectFields.join(', ')} FROM \${this.table}\`;

    if (this.whereConditions.length > 0) {
      const conditions = this.whereConditions
        .map(c => \`\${c.field} \${c.operator} ?\`)
        .join(' AND ');
      sql += \` WHERE \${conditions}\`;
    }

    if (this.orderByField) {
      sql += \` ORDER BY \${this.orderByField.field} \${this.orderByField.direction}\`;
    }

    if (this.limitValue) {
      sql += \` LIMIT \${this.limitValue}\`;
    }

    return sql;
  }
}

// Usage
const query = new QueryBuilder('users')
  .select('id', 'name', 'email')
  .where('age', '>', 18)
  .where('status', '=', 'active')
  .orderBy('created_at', 'DESC')
  .limit(10)
  .build();

console.log(query);
// SELECT id, name, email FROM users WHERE age > ? AND status = ? ORDER BY created_at DESC LIMIT 10`
    }
  ];

  const structuralPatterns = [
    {
      name: "Adapter",
      icon: "🔌",
      desc: "Make incompatible interfaces work together",
      useCase: "Legacy system integration, third-party APIs",
      code: `// Adapter Pattern - Integrate different payment APIs
class LegacyPaymentSystem {
  makePayment(accountNumber, amount) {
    return { success: true, transactionId: 'LEG-123' };
  }
}

// Modern interface
class PaymentProcessor {
  async processPayment(userId, amount, paymentMethod) {
    throw new Error('Not implemented');
  }
}

// Adapter
class LegacyPaymentAdapter extends PaymentProcessor {
  constructor() {
    super();
    this.legacySystem = new LegacyPaymentSystem();
  }

  async processPayment(userId, amount, paymentMethod) {
    // Adapt modern interface to legacy system
    const accountNumber = await this.getAccountNumber(userId);
    const result = this.legacySystem.makePayment(accountNumber, amount);

    // Transform response to modern format
    return {
      status: result.success ? 'completed' : 'failed',
      transactionId: result.transactionId,
      amount,
      userId
    };
  }

  async getAccountNumber(userId) {
    return \`ACC-\${userId}\`;
  }
}

// Usage
const payment = new LegacyPaymentAdapter();
await payment.processPayment(123, 99.99, 'credit_card');`
    },
    {
      name: "Decorator",
      icon: "🎨",
      desc: "Add behavior to objects dynamically",
      useCase: "Logging, caching, validation, authorization",
      code: `// Decorator Pattern - Add caching and logging
class UserRepository {
  async getUser(id) {
    // Fetch from database
    return await db.users.findById(id);
  }
}

// Logging Decorator
class LoggingDecorator {
  constructor(repository) {
    this.repository = repository;
  }

  async getUser(id) {
    console.log(\`[LOG] Fetching user \${id}\`);
    const startTime = Date.now();

    const result = await this.repository.getUser(id);

    console.log(\`[LOG] Fetched user \${id} in \${Date.now() - startTime}ms\`);
    return result;
  }
}

// Caching Decorator
class CachingDecorator {
  constructor(repository) {
    this.repository = repository;
    this.cache = new Map();
  }

  async getUser(id) {
    if (this.cache.has(id)) {
      console.log(\`[CACHE] Hit for user \${id}\`);
      return this.cache.get(id);
    }

    console.log(\`[CACHE] Miss for user \${id}\`);
    const result = await this.repository.getUser(id);
    this.cache.set(id, result);
    return result;
  }
}

// Usage - Stack decorators
let repo = new UserRepository();
repo = new CachingDecorator(repo);
repo = new LoggingDecorator(repo);

await repo.getUser(123);
// [LOG] Fetching user 123
// [CACHE] Miss for user 123
// [LOG] Fetched user 123 in 45ms

await repo.getUser(123);
// [LOG] Fetching user 123
// [CACHE] Hit for user 123
// [LOG] Fetched user 123 in 2ms`
    },
    {
      name: "Proxy",
      icon: "🚪",
      desc: "Control access to an object",
      useCase: "Access control, lazy loading, remote services",
      code: `// Proxy Pattern - Access control and lazy loading
class ExpensiveResource {
  constructor() {
    console.log('Creating expensive resource...');
    // Heavy initialization
    this.data = this.loadLargeDataset();
  }

  loadLargeDataset() {
    return { /* large data */ };
  }

  getData() {
    return this.data;
  }
}

class ResourceProxy {
  constructor() {
    this.resource = null;
  }

  getData() {
    // Lazy initialization
    if (!this.resource) {
      console.log('Initializing resource on first access');
      this.resource = new ExpensiveResource();
    }
    return this.resource.getData();
  }
}

// Access Control Proxy
class ProtectedResourceProxy {
  constructor(resource, user) {
    this.resource = resource;
    this.user = user;
  }

  getData() {
    if (!this.hasPermission()) {
      throw new Error('Access denied');
    }
    return this.resource.getData();
  }

  hasPermission() {
    return this.user.role === 'admin';
  }
}

// Usage
const proxy = new ResourceProxy();
// Resource not created yet

const data = proxy.getData();
// Initializing resource on first access
// Creating expensive resource...`
    }
  ];

  const behavioralPatterns = [
    {
      name: "Strategy",
      icon: "🎯",
      desc: "Define family of algorithms, make them interchangeable",
      useCase: "Sorting algorithms, compression, pricing strategies",
      code: `// Strategy Pattern - Different pricing strategies
class PricingStrategy {
  calculatePrice(basePrice) {
    throw new Error('Must implement calculatePrice');
  }
}

class RegularPricing extends PricingStrategy {
  calculatePrice(basePrice) {
    return basePrice;
  }
}

class SeasonalPricing extends PricingStrategy {
  calculatePrice(basePrice) {
    return basePrice * 1.2; // 20% markup
  }
}

class MemberPricing extends PricingStrategy {
  calculatePrice(basePrice) {
    return basePrice * 0.9; // 10% discount
  }
}

class BlackFridayPricing extends PricingStrategy {
  calculatePrice(basePrice) {
    return basePrice * 0.5; // 50% off
  }
}

class ShoppingCart {
  constructor(pricingStrategy) {
    this.items = [];
    this.pricingStrategy = pricingStrategy;
  }

  setPricingStrategy(strategy) {
    this.pricingStrategy = strategy;
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    const baseTotal = this.items.reduce((sum, item) => sum + item.price, 0);
    return this.pricingStrategy.calculatePrice(baseTotal);
  }
}

// Usage
const cart = new ShoppingCart(new RegularPricing());
cart.addItem({ name: 'Laptop', price: 1000 });
cart.addItem({ name: 'Mouse', price: 50 });

console.log(cart.calculateTotal()); // 1050

// Black Friday - change strategy
cart.setPricingStrategy(new BlackFridayPricing());
console.log(cart.calculateTotal()); // 525`
    },
    {
      name: "Observer",
      icon: "👁️",
      desc: "Notify multiple objects about state changes",
      useCase: "Event systems, pub/sub, reactive programming",
      code: `// Observer Pattern - Event notification system
class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  off(event, callback) {
    if (!this.listeners.has(event)) return;
    const callbacks = this.listeners.get(event);
    const index = callbacks.indexOf(callback);
    if (index > -1) {
      callbacks.splice(index, 1);
    }
  }

  emit(event, data) {
    if (!this.listeners.has(event)) return;
    this.listeners.get(event).forEach(callback => {
      callback(data);
    });
  }
}

// Usage
class OrderSystem extends EventEmitter {
  createOrder(orderData) {
    const order = { id: Date.now(), ...orderData };

    // Emit event
    this.emit('orderCreated', order);

    return order;
  }
}

const orderSystem = new OrderSystem();

// Subscribe observers
orderSystem.on('orderCreated', (order) => {
  console.log('[Email] Sending confirmation:', order.id);
});

orderSystem.on('orderCreated', (order) => {
  console.log('[Inventory] Reserving items:', order.items);
});

orderSystem.on('orderCreated', (order) => {
  console.log('[Analytics] Tracking order:', order.id);
});

// Create order - all observers notified
orderSystem.createOrder({
  userId: 123,
  items: ['laptop', 'mouse'],
  total: 1050
});
// [Email] Sending confirmation: 1234567890
// [Inventory] Reserving items: ['laptop', 'mouse']
// [Analytics] Tracking order: 1234567890`
    },
    {
      name: "Command",
      icon: "⚡",
      desc: "Encapsulate requests as objects",
      useCase: "Undo/redo, task queues, transaction logs",
      code: `// Command Pattern - Undo/Redo system
class Command {
  execute() {}
  undo() {}
}

class CreateUserCommand extends Command {
  constructor(userData) {
    super();
    this.userData = userData;
    this.userId = null;
  }

  async execute() {
    const user = await db.users.create(this.userData);
    this.userId = user.id;
    console.log(\`Created user \${this.userId}\`);
  }

  async undo() {
    await db.users.delete(this.userId);
    console.log(\`Deleted user \${this.userId}\`);
  }
}

class UpdateUserCommand extends Command {
  constructor(userId, newData) {
    super();
    this.userId = userId;
    this.newData = newData;
    this.oldData = null;
  }

  async execute() {
    this.oldData = await db.users.findById(this.userId);
    await db.users.update(this.userId, this.newData);
    console.log(\`Updated user \${this.userId}\`);
  }

  async undo() {
    await db.users.update(this.userId, this.oldData);
    console.log(\`Reverted user \${this.userId}\`);
  }
}

class CommandManager {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }

  async execute(command) {
    await command.execute();

    // Remove any commands after current index
    this.history.splice(this.currentIndex + 1);

    this.history.push(command);
    this.currentIndex++;
  }

  async undo() {
    if (this.currentIndex < 0) return;

    const command = this.history[this.currentIndex];
    await command.undo();
    this.currentIndex--;
  }

  async redo() {
    if (this.currentIndex >= this.history.length - 1) return;

    this.currentIndex++;
    const command = this.history[this.currentIndex];
    await command.execute();
  }
}

// Usage
const manager = new CommandManager();

await manager.execute(new CreateUserCommand({ name: 'John' }));
await manager.execute(new UpdateUserCommand(1, { name: 'Jane' }));

await manager.undo(); // Reverts update
await manager.undo(); // Deletes user

await manager.redo(); // Creates user again`
    }
  ];

  const backendPatterns = [
    {
      pattern: "Repository",
      desc: "Abstract data access layer",
      benefit: "Decouple business logic from data access",
      icon: "📦"
    },
    {
      pattern: "Service Layer",
      desc: "Encapsulate business logic",
      benefit: "Separate concerns, reusable logic",
      icon: "⚙️"
    },
    {
      pattern: "MVC (Model-View-Controller)",
      desc: "Separate data, presentation, and logic",
      benefit: "Organized structure, testability",
      icon: "🎭"
    },
    {
      pattern: "Dependency Injection",
      desc: "Provide dependencies from outside",
      benefit: "Loose coupling, easier testing",
      icon: "💉"
    },
    {
      pattern: "Circuit Breaker",
      desc: "Prevent cascading failures",
      benefit: "Fault tolerance, graceful degradation",
      icon: "⚡"
    },
    {
      pattern: "Retry",
      desc: "Automatically retry failed operations",
      benefit: "Handle transient failures",
      icon: "🔄"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl">
          <span className="text-4xl">🎨</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Design Patterns
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Classic GoF patterns and common backend architectural patterns
          </p>
        </div>
      </div>

      {/* Why Design Patterns */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-teal-600">
          <h3 className="text-2xl font-bold text-teal-900 dark:text-teal-100 mb-4">
            ⚡ Why Design Patterns?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Proven Solutions", desc: "Battle-tested approaches", icon: "✅" },
              { label: "Common Vocabulary", desc: "Communicate designs clearly", icon: "💬" },
              { label: "Best Practices", desc: "Avoid reinventing the wheel", icon: "🎯" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-teal-900 dark:text-teal-100">{item.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Creational Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏗️ Creational Patterns
        </h3>
        <div className="space-y-6">
          {creationalPatterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-5xl">{pattern.icon}</span>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-teal-900 dark:text-teal-100 mb-2">{pattern.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{pattern.desc}</p>
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded mb-4">
                    <p className="text-xs"><strong>Use Case:</strong> {pattern.useCase}</p>
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

      {/* Structural Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔧 Structural Patterns
        </h3>
        <div className="space-y-6">
          {structuralPatterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl border-2 border-cyan-300 dark:border-cyan-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-5xl">{pattern.icon}</span>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-2">{pattern.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{pattern.desc}</p>
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 p-2 rounded mb-4">
                    <p className="text-xs"><strong>Use Case:</strong> {pattern.useCase}</p>
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

      {/* Behavioral Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Behavioral Patterns
        </h3>
        <div className="space-y-6">
          {behavioralPatterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border-2 border-emerald-300 dark:border-emerald-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-5xl">{pattern.icon}</span>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">{pattern.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{pattern.desc}</p>
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded mb-4">
                    <p className="text-xs"><strong>Use Case:</strong> {pattern.useCase}</p>
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

      {/* Common Backend Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔧 Common Backend Patterns
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {backendPatterns.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-xl border border-teal-200 dark:border-teal-800"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h5 className="font-bold text-teal-900 dark:text-teal-100 mb-2">{item.pattern}</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.desc}</p>
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300">✓ {item.benefit}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
        <h3 className="text-xl font-semibold mb-4 text-teal-900 dark:text-teal-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 mt-1">•</span>
            <span>Design patterns are proven solutions to common problems - use them to write better code</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 mt-1">•</span>
            <span>Creational patterns control object creation - Singleton, Factory, Builder</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 mt-1">•</span>
            <span>Structural patterns organize relationships - Adapter, Decorator, Proxy</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 mt-1">•</span>
            <span>Behavioral patterns handle communication - Strategy, Observer, Command</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
