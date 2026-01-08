"use client";
import { motion } from "framer-motion";

export default function CleanArchitectureSection() {
  const solidPrinciples = [
    {
      principle: "Single Responsibility",
      acronym: "S",
      desc: "A class should have one, and only one, reason to change",
      icon: "1️⃣",
      bad: `// BAD - Multiple responsibilities
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Validation
  validate() {
    if (!this.email.includes('@')) {
      throw new Error('Invalid email');
    }
  }

  // Data access
  save() {
    db.query('INSERT INTO users...');
  }

  // Notification
  sendWelcomeEmail() {
    emailService.send(this.email, 'Welcome!');
  }
}`,
      good: `// GOOD - Separate responsibilities
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserValidator {
  validate(user) {
    if (!user.email.includes('@')) {
      throw new Error('Invalid email');
    }
  }
}

class UserRepository {
  save(user) {
    return db.query('INSERT INTO users...');
  }
}

class UserNotificationService {
  sendWelcomeEmail(user) {
    emailService.send(user.email, 'Welcome!');
  }
}`
    },
    {
      principle: "Open/Closed",
      acronym: "O",
      desc: "Open for extension, closed for modification",
      icon: "🔓",
      bad: `// BAD - Modifying class for new features
class PaymentProcessor {
  processPayment(amount, type) {
    if (type === 'credit_card') {
      // Process credit card
    } else if (type === 'paypal') {
      // Process PayPal
    } else if (type === 'crypto') {
      // Process crypto
    }
    // Adding new payment type requires modifying this class
  }
}`,
      good: `// GOOD - Extend through interfaces
class PaymentProcessor {
  process(amount) {
    throw new Error('Must implement process');
  }
}

class CreditCardProcessor extends PaymentProcessor {
  process(amount) {
    // Process credit card
  }
}

class PayPalProcessor extends PaymentProcessor {
  process(amount) {
    // Process PayPal
  }
}

class CryptoProcessor extends PaymentProcessor {
  process(amount) {
    // Process crypto
  }
}

// Adding new payment type = new class, no modification`
    },
    {
      principle: "Liskov Substitution",
      acronym: "L",
      desc: "Derived classes must be substitutable for their base classes",
      icon: "🔄",
      bad: `// BAD - Violates LSP
class Bird {
  fly() {
    console.log('Flying...');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('Penguins cannot fly!');
  }
}

// This breaks when using base class reference
function makeBirdFly(bird) {
  bird.fly(); // Fails for Penguin
}`,
      good: `// GOOD - Correct abstraction
class Bird {
  move() {
    throw new Error('Must implement move');
  }
}

class FlyingBird extends Bird {
  move() {
    this.fly();
  }

  fly() {
    console.log('Flying...');
  }
}

class Penguin extends Bird {
  move() {
    this.swim();
  }

  swim() {
    console.log('Swimming...');
  }
}

// Works for all birds
function moveBird(bird) {
  bird.move(); // Works for all
}`
    },
    {
      principle: "Interface Segregation",
      acronym: "I",
      desc: "Many specific interfaces are better than one general interface",
      icon: "✂️",
      bad: `// BAD - Fat interface
class Worker {
  work() {}
  eat() {}
  sleep() {}
  getSalary() {}
  attendMeeting() {}
}

class Robot extends Worker {
  work() { /* OK */ }
  eat() { throw new Error('Robots dont eat'); }
  sleep() { throw new Error('Robots dont sleep'); }
  getSalary() { throw new Error('Robots dont get salary'); }
  attendMeeting() { /* OK */ }
}`,
      good: `// GOOD - Segregated interfaces
class Workable {
  work() {}
}

class Eatable {
  eat() {}
}

class Sleepable {
  sleep() {}
}

class Payable {
  getSalary() {}
}

class Human extends Workable, Eatable, Sleepable, Payable {
  work() { /* Human work */ }
  eat() { /* Human eat */ }
  sleep() { /* Human sleep */ }
  getSalary() { /* Human salary */ }
}

class Robot extends Workable {
  work() { /* Robot work */ }
  // Only implements what it needs
}`
    },
    {
      principle: "Dependency Inversion",
      acronym: "D",
      desc: "Depend on abstractions, not concretions",
      icon: "🔃",
      bad: `// BAD - High-level depends on low-level
class MySQLDatabase {
  connect() { /* MySQL connection */ }
  query(sql) { /* MySQL query */ }
}

class UserService {
  constructor() {
    // Tightly coupled to MySQL
    this.db = new MySQLDatabase();
  }

  getUser(id) {
    return this.db.query(\`SELECT * FROM users WHERE id = \${id}\`);
  }
}

// Cannot switch to PostgreSQL without changing UserService`,
      good: `// GOOD - Depend on abstraction
class Database {
  connect() {}
  query(sql) {}
}

class MySQLDatabase extends Database {
  connect() { /* MySQL connection */ }
  query(sql) { /* MySQL query */ }
}

class PostgreSQLDatabase extends Database {
  connect() { /* PostgreSQL connection */ }
  query(sql) { /* PostgreSQL query */ }
}

class UserService {
  constructor(database) {
    // Depends on abstraction
    this.db = database;
  }

  getUser(id) {
    return this.db.query(\`SELECT * FROM users WHERE id = \${id}\`);
  }
}

// Can inject any database implementation
const service = new UserService(new MySQLDatabase());
// or
const service = new UserService(new PostgreSQLDatabase());`
    }
  ];

  const layers = [
    {
      layer: "Domain Layer (Entities)",
      desc: "Core business logic, independent of frameworks",
      responsibilities: ["Business entities", "Business rules", "Domain logic"],
      code: `// Domain Layer - Pure business logic
class Order {
  constructor(id, userId, items, status) {
    this.id = id;
    this.userId = userId;
    this.items = items;
    this.status = status;
  }

  // Business rules
  calculateTotal() {
    return this.items.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  }

  canBeCancelled() {
    return this.status === 'pending' || this.status === 'processing';
  }

  cancel() {
    if (!this.canBeCancelled()) {
      throw new Error('Order cannot be cancelled');
    }
    this.status = 'cancelled';
  }

  validate() {
    if (this.items.length === 0) {
      throw new Error('Order must have at least one item');
    }
    if (this.calculateTotal() < 0) {
      throw new Error('Order total cannot be negative');
    }
  }
}`
    },
    {
      layer: "Use Cases Layer (Application)",
      desc: "Application-specific business rules",
      responsibilities: ["Orchestrate domain objects", "Handle application logic", "Use case implementations"],
      code: `// Use Cases Layer
class CreateOrderUseCase {
  constructor(orderRepository, inventoryService, emailService) {
    this.orderRepository = orderRepository;
    this.inventoryService = inventoryService;
    this.emailService = emailService;
  }

  async execute(userId, items) {
    // Create order entity
    const order = new Order(
      generateId(),
      userId,
      items,
      'pending'
    );

    // Validate business rules
    order.validate();

    // Check inventory
    const available = await this.inventoryService.checkAvailability(items);
    if (!available) {
      throw new Error('Items not available');
    }

    // Save order
    await this.orderRepository.save(order);

    // Reserve inventory
    await this.inventoryService.reserve(items);

    // Send notification
    await this.emailService.sendOrderConfirmation(userId, order);

    return order;
  }
}`
    },
    {
      layer: "Interface Adapters Layer",
      desc: "Convert data between use cases and external agencies",
      responsibilities: ["Controllers", "Presenters", "Gateways", "Data mappers"],
      code: `// Controllers - HTTP interface adapter
class OrderController {
  constructor(createOrderUseCase) {
    this.createOrderUseCase = createOrderUseCase;
  }

  async createOrder(req, res) {
    try {
      const { userId } = req.user;
      const { items } = req.body;

      // Validate request
      if (!items || items.length === 0) {
        return res.status(400).json({
          error: 'Items are required'
        });
      }

      // Execute use case
      const order = await this.createOrderUseCase.execute(userId, items);

      // Format response
      res.status(201).json({
        id: order.id,
        status: order.status,
        total: order.calculateTotal(),
        items: order.items
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

// Repository - Database adapter
class OrderRepository {
  async save(order) {
    return await db.orders.insert({
      id: order.id,
      user_id: order.userId,
      items: JSON.stringify(order.items),
      status: order.status,
      created_at: new Date()
    });
  }

  async findById(id) {
    const data = await db.orders.findOne({ id });
    return new Order(
      data.id,
      data.user_id,
      JSON.parse(data.items),
      data.status
    );
  }
}`
    },
    {
      layer: "Frameworks & Drivers Layer",
      desc: "External tools and frameworks",
      responsibilities: ["Web framework", "Database", "UI", "External APIs"],
      code: `// Express setup - Framework layer
const express = require('express');
const app = express();

// Dependency injection
const orderRepository = new OrderRepository(database);
const inventoryService = new InventoryService(inventoryAPI);
const emailService = new EmailService(emailProvider);

const createOrderUseCase = new CreateOrderUseCase(
  orderRepository,
  inventoryService,
  emailService
);

const orderController = new OrderController(createOrderUseCase);

// Routes
app.post('/api/orders', authenticate, (req, res) => {
  orderController.createOrder(req, res);
});

// Database connection - External
const database = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  // ...
};

app.listen(3000);`
    }
  ];

  const benefits = [
    {
      benefit: "Testability",
      desc: "Easy to test business logic in isolation",
      example: "Test domain entities without database or framework",
      icon: "🧪"
    },
    {
      benefit: "Independence",
      desc: "Business logic independent of frameworks",
      example: "Switch from Express to Fastify without changing use cases",
      icon: "🔓"
    },
    {
      benefit: "Maintainability",
      desc: "Clear separation of concerns",
      example: "Easy to locate and fix bugs, add features",
      icon: "🔧"
    },
    {
      benefit: "Flexibility",
      desc: "Easy to swap implementations",
      example: "Change from MySQL to PostgreSQL by swapping repository",
      icon: "🔄"
    },
    {
      benefit: "Scalability",
      desc: "Scale components independently",
      example: "Move use cases to microservices",
      icon: "📈"
    },
    {
      benefit: "Team Productivity",
      desc: "Teams can work on different layers",
      example: "Frontend, backend, domain teams work independently",
      icon: "👥"
    }
  ];

  const dependencyRule = {
    rule: "Dependency Rule",
    desc: "Dependencies point inward - outer layers depend on inner layers, never the reverse",
    diagram: `
┌─────────────────────────────────────┐
│   Frameworks & Drivers (External)  │ ─┐
│   Web, DB, UI, Devices              │  │
└─────────────────────────────────────┘  │
                 ↓                        │
┌─────────────────────────────────────┐  │
│   Interface Adapters                │  ├─ Dependencies
│   Controllers, Presenters, Gateways │  │  flow inward
└─────────────────────────────────────┘  │
                 ↓                        │
┌─────────────────────────────────────┐  │
│   Use Cases (Application Logic)     │  │
│   Business rules specific to app    │  │
└─────────────────────────────────────┘  │
                 ↓                        │
┌─────────────────────────────────────┐  │
│   Entities (Domain)                  │ ─┘
│   Core business logic                │
└─────────────────────────────────────┘
    `,
    examples: [
      "✅ Controller depends on Use Case",
      "✅ Use Case depends on Entity",
      "✅ Repository implements interface defined in Use Case",
      "❌ Entity never depends on Use Case",
      "❌ Use Case never depends on Controller",
      "❌ Domain never depends on Database"
    ]
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
          <span className="text-4xl">🏛️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Clean Architecture
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            SOLID principles, layered architecture, and dependency inversion
          </p>
        </div>
      </div>

      {/* Why Clean Architecture */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-cyan-600">
          <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">
            ⚡ Why Clean Architecture?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Testable", desc: "Business logic in isolation", icon: "🧪" },
              { label: "Independent", desc: "Not tied to frameworks", icon: "🔓" },
              { label: "Maintainable", desc: "Clear separation of concerns", icon: "🔧" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-cyan-900 dark:text-cyan-100">{item.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOLID Principles */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💎 SOLID Principles
        </h3>
        <div className="space-y-6">
          {solidPrinciples.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-2 border-cyan-300 dark:border-cyan-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-cyan-600 dark:bg-cyan-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.acronym}
                  </div>
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-2">{item.principle}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 italic">{item.desc}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2">❌ Bad Example:</p>
                      <div className="bg-slate-900 p-3 rounded-lg">
                        <pre className="text-xs font-mono text-red-400 overflow-auto whitespace-pre">{item.bad}</pre>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2">✅ Good Example:</p>
                      <div className="bg-slate-900 p-3 rounded-lg">
                        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{item.good}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dependency Rule */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 The Dependency Rule
        </h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700"
        >
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">{dependencyRule.rule}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{dependencyRule.desc}</p>

          <div className="bg-slate-900 p-4 rounded-lg mb-4">
            <pre className="text-xs font-mono text-cyan-400 whitespace-pre">{dependencyRule.diagram}</pre>
          </div>

          <div className="grid md:grid-cols-2 gap-2">
            {dependencyRule.examples.map((example, i) => (
              <div key={i} className={`text-sm p-2 rounded ${example.startsWith('✅') ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
                {example}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Layers */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏗️ Architecture Layers
        </h3>
        <div className="space-y-6">
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-cyan-200 dark:border-cyan-800"
            >
              <div className="p-5 border-b border-cyan-200 dark:border-cyan-800">
                <h4 className="text-lg font-bold text-cyan-900 dark:text-cyan-100 mb-2">{layer.layer}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{layer.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.responsibilities.map((resp, i) => (
                    <span key={i} className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 p-3 rounded-b-xl">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{layer.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ Benefits of Clean Architecture
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h5 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">{item.benefit}</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.desc}</p>
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 p-2 rounded">
                    <p className="text-xs font-mono">{item.example}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
        <h3 className="text-xl font-semibold mb-4 text-cyan-900 dark:text-cyan-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>SOLID principles create maintainable, flexible code - apply them consistently</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>Dependency Rule: outer layers depend on inner layers - business logic stays independent</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>Layered architecture separates concerns - Domain, Use Cases, Interface Adapters, Frameworks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>Clean Architecture enables testability, independence, and maintainability</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
