"use client";
import { motion } from "framer-motion";

export default function DomainDrivenDesignSection() {
  const buildingBlocks = [
    {
      block: "Entity",
      icon: "🆔",
      desc: "Object with unique identity that persists over time",
      characteristics: ["Has unique ID", "Mutable", "Identity equality", "Lifecycle"],
      code: `// Entity - Has identity
class User {
  constructor(id, email, name) {
    this.id = id;          // Unique identifier
    this.email = email;
    this.name = name;
    this.createdAt = new Date();
  }

  // Identity equality
  equals(other) {
    return this.id === other.id;
  }

  // Entities can change state
  changeName(newName) {
    if (!newName || newName.trim().length === 0) {
      throw new Error('Name cannot be empty');
    }
    this.name = newName;
  }

  changeEmail(newEmail) {
    if (!newEmail.includes('@')) {
      throw new Error('Invalid email');
    }
    this.email = newEmail;
  }
}

const user1 = new User(1, 'john@example.com', 'John');
const user2 = new User(1, 'jane@example.com', 'Jane');

console.log(user1.equals(user2)); // true - same ID
user1.changeName('John Doe'); // Can mutate`
    },
    {
      block: "Value Object",
      icon: "💎",
      desc: "Object defined by its attributes, no identity",
      characteristics: ["No unique ID", "Immutable", "Value equality", "Self-validating"],
      code: `// Value Object - Immutable, value equality
class Money {
  constructor(amount, currency) {
    if (amount < 0) {
      throw new Error('Amount cannot be negative');
    }
    if (!['USD', 'EUR', 'GBP'].includes(currency)) {
      throw new Error('Invalid currency');
    }

    // Immutable - Object.freeze
    this._amount = amount;
    this._currency = currency;
    Object.freeze(this);
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Value equality
  equals(other) {
    return this.amount === other.amount &&
           this.currency === other.currency;
  }

  // Operations return new instance
  add(other) {
    if (this.currency !== other.currency) {
      throw new Error('Cannot add different currencies');
    }
    return new Money(this.amount + other.amount, this.currency);
  }

  multiply(factor) {
    return new Money(this.amount * factor, this.currency);
  }
}

const price1 = new Money(100, 'USD');
const price2 = new Money(50, 'USD');
const total = price1.add(price2); // New instance

// price1.amount = 200; // Error - immutable`
    },
    {
      block: "Aggregate",
      icon: "🎯",
      desc: "Cluster of domain objects treated as single unit",
      characteristics: ["Has root entity", "Enforces invariants", "Transaction boundary", "Access through root"],
      code: `// Aggregate - Order is the root
class Order {
  constructor(id, customerId) {
    this.id = id;              // Root entity
    this.customerId = customerId;
    this.items = [];
    this.status = 'draft';
    this.total = new Money(0, 'USD');
  }

  // Only way to add items - maintains invariants
  addItem(product, quantity) {
    if (this.status !== 'draft') {
      throw new Error('Cannot modify confirmed order');
    }
    if (quantity <= 0) {
      throw new Error('Quantity must be positive');
    }

    const item = new OrderItem(
      generateId(),
      product.id,
      product.name,
      product.price,
      quantity
    );

    this.items.push(item);
    this._recalculateTotal();
  }

  removeItem(itemId) {
    if (this.status !== 'draft') {
      throw new Error('Cannot modify confirmed order');
    }

    this.items = this.items.filter(item => item.id !== itemId);
    this._recalculateTotal();
  }

  // Enforces business rules
  confirm() {
    if (this.items.length === 0) {
      throw new Error('Cannot confirm empty order');
    }
    if (this.status !== 'draft') {
      throw new Error('Order already confirmed');
    }

    this.status = 'confirmed';
  }

  _recalculateTotal() {
    const sum = this.items.reduce((total, item) => {
      return total + (item.price.amount * item.quantity);
    }, 0);
    this.total = new Money(sum, 'USD');
  }
}

// OrderItem is part of the aggregate
class OrderItem {
  constructor(id, productId, productName, price, quantity) {
    this.id = id;
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }
}

// Usage - access through aggregate root
const order = new Order(1, 123);
order.addItem({ id: 1, name: 'Laptop', price: new Money(1000, 'USD') }, 1);
order.addItem({ id: 2, name: 'Mouse', price: new Money(50, 'USD') }, 2);
order.confirm();

// Save entire aggregate as transaction
await orderRepository.save(order);`
    },
    {
      block: "Repository",
      icon: "📦",
      desc: "Abstraction for accessing aggregates",
      characteristics: ["Collection-like interface", "Persistence abstraction", "Query aggregates", "Works with roots only"],
      code: `// Repository - Access aggregates
class OrderRepository {
  constructor(database) {
    this.db = database;
  }

  // Collection-like interface
  async save(order) {
    // Save entire aggregate
    await this.db.transaction(async (trx) => {
      // Save root
      await trx('orders').insert({
        id: order.id,
        customer_id: order.customerId,
        status: order.status,
        total: order.total.amount,
        currency: order.total.currency
      });

      // Save items
      for (const item of order.items) {
        await trx('order_items').insert({
          id: item.id,
          order_id: order.id,
          product_id: item.productId,
          product_name: item.productName,
          price: item.price.amount,
          quantity: item.quantity
        });
      }
    });
  }

  async findById(id) {
    const orderData = await this.db('orders')
      .where({ id })
      .first();

    if (!orderData) return null;

    const itemsData = await this.db('order_items')
      .where({ order_id: id });

    // Reconstruct aggregate
    const order = new Order(orderData.id, orderData.customer_id);
    order.status = orderData.status;

    for (const itemData of itemsData) {
      order.items.push(new OrderItem(
        itemData.id,
        itemData.product_id,
        itemData.product_name,
        new Money(itemData.price, itemData.currency),
        itemData.quantity
      ));
    }

    return order;
  }

  async findByCustomer(customerId) {
    // Query by aggregate properties
    const orders = await this.db('orders')
      .where({ customer_id: customerId });

    return Promise.all(orders.map(o => this.findById(o.id)));
  }

  async delete(order) {
    await this.db.transaction(async (trx) => {
      await trx('order_items').where({ order_id: order.id }).delete();
      await trx('orders').where({ id: order.id }).delete();
    });
  }
}`
    }
  ];

  const strategicDesign = [
    {
      concept: "Bounded Context",
      icon: "🔲",
      desc: "Explicit boundary where a model is defined and applicable",
      explanation: "Different parts of system may use same terms differently",
      code: `// E-commerce system with multiple bounded contexts

// Sales Context - Customer means buyer
class SalesCustomer {
  constructor(id, email, shoppingCart) {
    this.id = id;
    this.email = email;
    this.shoppingCart = shoppingCart;
    this.loyaltyPoints = 0;
  }

  addToCart(product) {
    this.shoppingCart.add(product);
  }

  earnPoints(amount) {
    this.loyaltyPoints += Math.floor(amount / 10);
  }
}

// Support Context - Customer means support ticket requester
class SupportCustomer {
  constructor(id, email, tickets) {
    this.id = id;
    this.email = email;
    this.tickets = tickets;
    this.priorityLevel = 'normal';
  }

  createTicket(issue) {
    this.tickets.push(new Ticket(issue));
  }

  upgradePriority() {
    this.priorityLevel = 'high';
  }
}

// Shipping Context - Customer means delivery recipient
class ShippingCustomer {
  constructor(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.deliveryPreferences = {};
  }

  updateAddress(newAddress) {
    this.address = newAddress;
  }
}

// Each context has its own model of "Customer"
// They share ID but have different concerns`
    },
    {
      concept: "Ubiquitous Language",
      icon: "💬",
      desc: "Common language shared by developers and domain experts",
      explanation: "Use domain terminology in code, conversations, and documentation",
      code: `// BAD - Technical jargon
class UserDataManager {
  async insertUserRecord(userData) {
    return await this.db.insert('user_table', userData);
  }

  async updateUserField(userId, field, value) {
    return await this.db.update('user_table', { [field]: value }, { id: userId });
  }
}

// GOOD - Ubiquitous language from domain
class AccountService {
  async registerNewAccount(email, password) {
    const account = new Account(generateId(), email);
    account.setPassword(password);
    await this.accountRepository.save(account);
    await this.welcomeEmailService.send(account);
    return account;
  }

  async activateAccount(accountId, verificationToken) {
    const account = await this.accountRepository.findById(accountId);

    if (!account.canBeActivated()) {
      throw new AccountAlreadyActiveError();
    }

    account.activate(verificationToken);
    await this.accountRepository.save(account);
  }

  async suspendAccount(accountId, reason) {
    const account = await this.accountRepository.findById(accountId);
    account.suspend(reason);
    await this.accountRepository.save(account);
    await this.notificationService.notifySuspension(account);
  }
}

// Terms like "register", "activate", "suspend"
// come directly from domain experts`
    },
    {
      concept: "Context Mapping",
      icon: "🗺️",
      desc: "Relationships between bounded contexts",
      explanation: "Define how contexts integrate and translate between models",
      code: `// Anti-Corruption Layer (ACL)
// Protects our domain from external system's model

// External Payment Provider (we don't control)
class StripePayment {
  charge(token, amountInCents, currency) {
    return { id: 'ch_123', status: 'succeeded' };
  }
}

// Our Domain Model
class Payment {
  constructor(orderId, amount, status) {
    this.orderId = orderId;
    this.amount = amount; // Money value object
    this.status = status; // Domain enum
  }
}

// ACL - Translates between systems
class PaymentGatewayAdapter {
  constructor(stripeClient) {
    this.stripe = stripeClient;
  }

  async processPayment(payment) {
    // Translate our domain model to Stripe's model
    const result = await this.stripe.charge(
      payment.paymentToken,
      payment.amount.amount * 100, // Convert to cents
      payment.amount.currency.toLowerCase()
    );

    // Translate Stripe's response to our domain model
    return this._toDomainModel(result, payment.orderId);
  }

  _toDomainModel(stripeResponse, orderId) {
    const statusMap = {
      'succeeded': PaymentStatus.COMPLETED,
      'pending': PaymentStatus.PENDING,
      'failed': PaymentStatus.FAILED
    };

    return new Payment(
      orderId,
      new Money(stripeResponse.amount / 100, 'USD'),
      statusMap[stripeResponse.status]
    );
  }
}

// Shared Kernel - Shared models between contexts
class Money {
  // Shared by Order Context and Payment Context
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
}

class CustomerId {
  // Shared identifier across all contexts
  constructor(value) {
    this._value = value;
  }
}`
    }
  ];

  const benefits = [
    {
      benefit: "Focus on Core Domain",
      desc: "Invest in what matters most",
      example: "Spend time on unique business logic, not boilerplate",
      icon: "🎯"
    },
    {
      benefit: "Shared Understanding",
      desc: "Developers and domain experts speak same language",
      example: "Code matches business terminology",
      icon: "💬"
    },
    {
      benefit: "Model Integrity",
      desc: "Enforce business rules in the model",
      example: "Impossible to create invalid state",
      icon: "🛡️"
    },
    {
      benefit: "Flexibility",
      desc: "Easy to change as understanding evolves",
      example: "Refactor model without breaking everything",
      icon: "🔄"
    },
    {
      benefit: "Clear Boundaries",
      desc: "Separate concerns into bounded contexts",
      example: "Order context independent of shipping context",
      icon: "🔲"
    },
    {
      benefit: "Rich Models",
      desc: "Business logic in domain objects",
      example: "Objects have behavior, not just data",
      icon: "💎"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">📐</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Domain-Driven Design
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Entities, value objects, aggregates, repositories, and bounded contexts
          </p>
        </div>
      </div>

      {/* Why DDD */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            ⚡ Why Domain-Driven Design?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Complex Domains", desc: "Handle business complexity", icon: "🧩" },
              { label: "Rich Models", desc: "Behavior, not just data", icon: "💎" },
              { label: "Shared Language", desc: "Dev & business alignment", icon: "💬" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-blue-900 dark:text-blue-100">{item.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tactical Building Blocks */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏗️ Tactical Building Blocks
        </h3>
        <div className="space-y-6">
          {buildingBlocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-5xl">{block.icon}</span>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">{block.block}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{block.desc}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-2">Characteristics:</p>
                    <div className="flex flex-wrap gap-2">
                      {block.characteristics.map((char, i) => (
                        <span key={i} className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                          ✓ {char}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg">
                    <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{block.code}</pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strategic Design */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🗺️ Strategic Design
        </h3>
        <div className="space-y-6">
          {strategicDesign.map((concept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border-2 border-indigo-300 dark:border-indigo-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-5xl">{concept.icon}</span>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">{concept.concept}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{concept.desc}</p>
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded mb-4">
                    <p className="text-xs italic">{concept.explanation}</p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg">
                    <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{concept.code}</pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ Benefits of DDD
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{item.benefit}</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.desc}</p>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                    <p className="text-xs font-mono">{item.example}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Entities have identity, Value Objects don't - choose based on domain meaning</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Aggregates enforce invariants and define transaction boundaries - access through root</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Bounded Contexts separate models - same term can mean different things in different contexts</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Ubiquitous Language bridges developers and domain experts - use domain terms in code</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
