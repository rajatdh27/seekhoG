"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MicroservicesSection() {
  const [activeTab, setActiveTab] = useState("overview");

  // Overview cards - shown first
  const overviewCards = [
    {
      id: "decomposition",
      title: "Service Decomposition",
      icon: "🧩",
      description: "Breaking monolith into independent services",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "gateway",
      title: "API Gateway",
      icon: "🚪",
      description: "Single entry point for all requests",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: "mesh",
      title: "Service Mesh",
      icon: "🕸️",
      description: "Service-to-service communication layer",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: "communication",
      title: "Communication Patterns",
      icon: "💬",
      description: "Sync, async, and event-driven patterns",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "decomposition", label: "Decomposition", icon: "🧩" },
    { id: "gateway", label: "API Gateway", icon: "🚪" },
    { id: "mesh", label: "Service Mesh", icon: "🕸️" },
    { id: "communication", label: "Communication", icon: "💬" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
          <span className="text-4xl">🧩</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Microservices & Service Mesh
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Building scalable distributed systems with independent services
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
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105"
                  : "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <motion.div
          key="overview"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* What is Microservices */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl border-l-4 border-emerald-600"
            >
              <h3 className="text-3xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
                🎯 What are Microservices?
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Microservices architecture is an approach where a large application is built as a suite of small, independent services. Each service runs its own process, manages its own database, and communicates via well-defined APIs.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Independent Deployment</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Deploy and scale services independently without affecting others</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl mb-2">🛠️</div>
                  <div className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Technology Freedom</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Each service can use different languages and frameworks</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl mb-2">👥</div>
                  <div className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Team Autonomy</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Small teams own and manage their services end-to-end</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Concepts Overview */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              🏗️ Core Concepts
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {overviewCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveTab(card.id)}
                  className="group cursor-pointer bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{card.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{card.description}</p>
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Monolith vs Microservices Visual */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              🔄 Monolith vs Microservices
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">📦</span>
                  <h4 className="text-xl font-bold text-red-900 dark:text-red-100">Monolithic Architecture</h4>
                </div>
                <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg mb-4">
                  <div className="text-center font-mono text-sm">
                    <div className="bg-red-300 dark:bg-red-700 p-4 rounded mb-2">Single Application</div>
                    <div className="text-xs space-y-1">
                      <div>UI Layer</div>
                      <div>Business Logic</div>
                      <div>Data Access</div>
                      <div>Database</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-slate-700 dark:text-slate-300">Single deployment unit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-slate-700 dark:text-slate-300">Tight coupling between components</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-slate-700 dark:text-slate-300">Hard to scale specific features</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">🧩</span>
                  <h4 className="text-xl font-bold text-green-900 dark:text-green-100">Microservices Architecture</h4>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                    <div className="bg-blue-300 dark:bg-blue-700 p-3 rounded">User Service</div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-3 rounded">Order Service</div>
                    <div className="bg-yellow-300 dark:bg-yellow-700 p-3 rounded">Payment Service</div>
                    <div className="bg-pink-300 dark:bg-pink-700 p-3 rounded">Inventory Service</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-slate-700 dark:text-slate-300">Independent deployment & scaling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-slate-700 dark:text-slate-300">Loose coupling via APIs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-slate-700 dark:text-slate-300">Technology diversity per service</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Service Decomposition Tab */}
      {activeTab === "decomposition" && (
        <motion.div
          key="decomposition"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border-l-4 border-emerald-600 mb-8">
              <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-3">
                🧩 Service Decomposition
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Breaking down a monolithic application into independent microservices is the first step. Here are the key strategies:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">📋 By Business Capability</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Organize services around business functions (e.g., User Management, Orders, Payments)</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">🎯 By Subdomain (DDD)</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Use Domain-Driven Design to identify bounded contexts</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">🔄 By Transaction</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Group operations that need to be atomic together</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">🌳 Strangler Pattern</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Gradually replace monolith piece by piece</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💻</span>
                <h4 className="text-xl font-bold text-white">Code Example: Before & After</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// ❌ BEFORE - Monolithic Controller
class OrderController {
  createOrder(req, res) {
    // Handle order creation
    const order = db.orders.create(req.body);

    // Process payment
    stripe.charge(order.total);

    // Update inventory
    db.inventory.update(order.items);

    // Send email
    sendEmail(order.userId, 'Order confirmed');

    // All tightly coupled!
  }
}

// ✅ AFTER - Microservices with Event-Driven Architecture

// Order Service
class OrderService {
  async createOrder(orderData) {
    const order = await this.orderRepo.create(orderData);

    // Publish event - don't do the work directly
    await eventBus.publish('OrderCreated', {
      orderId: order.id,
      userId: order.userId,
      items: order.items,
      total: order.total
    });

    return order;
  }
}

// Payment Service (separate service)
eventBus.on('OrderCreated', async (event) => {
  await paymentService.processPayment(event.orderId, event.total);
});

// Inventory Service (separate service)
eventBus.on('OrderCreated', async (event) => {
  await inventoryService.reserveItems(event.items);
});

// Email Service (separate service)
eventBus.on('OrderCreated', async (event) => {
  await emailService.sendOrderConfirmation(event.userId, event.orderId);
});

// Benefits:
// ✅ Independent deployment - update payment without touching order service
// ✅ Independent scaling - scale inventory service separately
// ✅ Fault isolation - email failure doesn't break order creation
// ✅ Technology diversity - each service can use different stack`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* API Gateway Tab */}
      {activeTab === "gateway" && (
        <motion.div
          key="gateway"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-teal-600 mb-8">
              <h3 className="text-2xl font-bold text-teal-900 dark:text-teal-100 mb-3">
                🚪 API Gateway Pattern
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Single entry point that routes requests to appropriate microservices. It handles cross-cutting concerns like authentication, rate limiting, and response aggregation.
              </p>

              {/* Visual Diagram */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg mb-4">
                <div className="text-center space-y-4">
                  <div className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block font-semibold">
                    📱 Client Apps (Mobile, Web, IoT)
                  </div>
                  <div className="text-2xl">↓</div>
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg inline-block font-bold text-lg">
                    🚪 API GATEWAY
                    <div className="text-xs mt-2 font-normal">Auth • Rate Limit • Routing • Aggregation</div>
                  </div>
                  <div className="text-2xl">↓</div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-purple-400 text-white px-3 py-2 rounded text-sm">👤 Users</div>
                    <div className="bg-pink-400 text-white px-3 py-2 rounded text-sm">📦 Orders</div>
                    <div className="bg-yellow-400 text-white px-3 py-2 rounded text-sm">💳 Payment</div>
                    <div className="bg-green-400 text-white px-3 py-2 rounded text-sm">📊 Analytics</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-teal-700 dark:text-teal-300 mb-2">🔒 Authentication & Authorization</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Verify tokens before routing to services</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-teal-700 dark:text-teal-300 mb-2">🚦 Rate Limiting</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Prevent abuse with request throttling</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-teal-700 dark:text-teal-300 mb-2">🎯 Request Routing</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Route to correct service based on path</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-teal-700 dark:text-teal-300 mb-2">📊 Response Aggregation</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Combine data from multiple services</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💻</span>
                <h4 className="text-xl font-bold text-white">Implementation Example</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// API Gateway with Express + http-proxy-middleware
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');

const app = express();

// 1. Authentication Middleware
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify JWT token
    req.user = await jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// 2. Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP'
});

app.use(limiter);

// 3. Route to Microservices
app.use('/api/users', authenticate, createProxyMiddleware({
  target: 'http://user-service:3001',
  changeOrigin: true,
  pathRewrite: { '^/api/users': '/users' },
  onError: (err, req, res) => {
    res.status(503).json({ error: 'User service unavailable' });
  }
}));

app.use('/api/orders', authenticate, createProxyMiddleware({
  target: 'http://order-service:3002',
  changeOrigin: true,
  pathRewrite: { '^/api/orders': '/orders' }
}));

app.use('/api/products', createProxyMiddleware({
  target: 'http://product-service:3003',
  changeOrigin: true,
  pathRewrite: { '^/api/products': '/products' }
}));

// 4. Response Aggregation - Dashboard endpoint
app.get('/api/dashboard/:userId', authenticate, async (req, res) => {
  const { userId } = req.params;

  try {
    // Parallel requests to multiple services
    const [user, orders, recommendations] = await Promise.all([
      fetch(\`http://user-service:3001/users/\${userId}\`).then(r => r.json()),
      fetch(\`http://order-service:3002/orders?userId=\${userId}\`).then(r => r.json()),
      fetch(\`http://rec-service:3004/recommendations/\${userId}\`).then(r => r.json())
    ]);

    // Aggregate and return
    res.json({
      user,
      recentOrders: orders.slice(0, 5),
      recommendations
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load dashboard' });
  }
});

app.listen(8080, () => {
  console.log('API Gateway running on port 8080');
});`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Service Mesh Tab */}
      {activeTab === "mesh" && (
        <motion.div
          key="mesh"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-cyan-600 mb-8">
              <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-3">
                🕸️ Service Mesh
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Infrastructure layer that handles service-to-service communication. Provides features like load balancing, service discovery, encryption, observability, and circuit breaking without changing application code.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">mTLS Security</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Automatic encryption between services</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">⚖️</div>
                  <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">Load Balancing</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Distribute traffic intelligently</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">Circuit Breaking</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Prevent cascading failures</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">Observability</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Distributed tracing & metrics</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💻</span>
                <h4 className="text-xl font-bold text-white">Istio Service Mesh Configuration</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# 1. Virtual Service - Traffic Routing & Canary Deployment
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: order-service
spec:
  hosts:
  - order-service
  http:
  # Canary deployment - 90% to v1, 10% to v2
  - match:
    - headers:
        user-type:
          exact: "beta"
    route:
    - destination:
        host: order-service
        subset: v2
      weight: 100
  - route:
    - destination:
        host: order-service
        subset: v1
      weight: 90
    - destination:
        host: order-service
        subset: v2
      weight: 10

# 2. Destination Rule - Circuit Breaker & Load Balancing
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: order-service
spec:
  host: order-service
  trafficPolicy:
    # Load balancing
    loadBalancer:
      simple: ROUND_ROBIN

    # Connection pool settings
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        http1MaxPendingRequests: 50
        maxRequestsPerConnection: 2

    # Circuit breaker
    outlierDetection:
      consecutiveErrors: 5
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 50

  # Service subsets (versions)
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2

# 3. Retry & Timeout Policy
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: payment-service
spec:
  hosts:
  - payment-service
  http:
  - route:
    - destination:
        host: payment-service
    timeout: 10s
    retries:
      attempts: 3
      perTryTimeout: 2s
      retryOn: 5xx,reset,connect-failure,refused-stream

# 4. Fault Injection - Testing resilience
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: test-fault-injection
spec:
  hosts:
  - payment-service
  http:
  - fault:
      delay:
        percentage:
          value: 10  # 10% of requests
        fixedDelay: 5s
      abort:
        percentage:
          value: 5   # 5% of requests
        httpStatus: 500
    route:
    - destination:
        host: payment-service`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Communication Patterns Tab */}
      {activeTab === "communication" && (
        <motion.div
          key="communication"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                💬 Communication Patterns
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Microservices communicate using different patterns. Choose based on your requirements for consistency, latency, and coupling.
              </p>
            </div>

            <div className="space-y-6">
              {/* Synchronous */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-2xl">🔄</div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100">Synchronous (REST/gRPC)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Request-response pattern, immediate result</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                    <div className="font-semibold text-green-800 dark:text-green-200 text-sm mb-2">✅ Pros</div>
                    <ul className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• Simple to understand</li>
                      <li>• Immediate response</li>
                      <li>• Easy debugging</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                    <div className="font-semibold text-red-800 dark:text-red-200 text-sm mb-2">❌ Cons</div>
                    <ul className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• Tight coupling</li>
                      <li>• Cascading failures</li>
                      <li>• Lower availability</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg">
                  <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Synchronous REST call
async function getUserOrders(userId) {
  try {
    const response = await axios.get(
      \`http://order-service:3001/orders?userId=\${userId}\`,
      { timeout: 5000 }
    );
    return response.data;
  } catch (error) {
    // If order service is down, this fails immediately
    throw new Error('Order service unavailable');
  }
}`}
                  </pre>
                </div>
              </motion.div>

              {/* Asynchronous */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-2xl">📬</div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Asynchronous (Message Queue)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Fire-and-forget, eventual consistency</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                    <div className="font-semibold text-green-800 dark:text-green-200 text-sm mb-2">✅ Pros</div>
                    <ul className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• Loose coupling</li>
                      <li>• High availability</li>
                      <li>• Better scalability</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                    <div className="font-semibold text-red-800 dark:text-red-200 text-sm mb-2">❌ Cons</div>
                    <ul className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• Complex</li>
                      <li>• Eventual consistency</li>
                      <li>• Harder debugging</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg">
                  <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Publisher (Order Service)
async function createOrder(orderData) {
  const order = await db.orders.create(orderData);

  // Publish to queue - don't wait for processing
  await messageQueue.publish('order.created', {
    orderId: order.id,
    userId: order.userId,
    items: order.items
  });

  return order; // Return immediately
}

// Consumer (Email Service) - processes asynchronously
messageQueue.subscribe('order.created', async (message) => {
  const { userId, orderId } = message;
  await emailService.sendOrderConfirmation(userId, orderId);
  message.ack(); // Acknowledge processing
});`}
                  </pre>
                </div>
              </motion.div>

              {/* Event-Driven */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-2xl">⚡</div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-100">Event-Driven</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Multiple subscribers react to events</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                    <div className="font-semibold text-green-800 dark:text-green-200 text-sm mb-2">✅ Pros</div>
                    <ul className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• Real-time updates</li>
                      <li>• Very flexible</li>
                      <li>• Easy to extend</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                    <div className="font-semibold text-red-800 dark:text-red-200 text-sm mb-2">❌ Cons</div>
                    <ul className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• Event ordering issues</li>
                      <li>• Duplicate events</li>
                      <li>• Complex debugging</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg">
                  <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Event Bus - Multiple subscribers
const eventBus = new EventBus();

// Multiple services subscribe to same event
eventBus.on('OrderPlaced', async (order) => {
  await inventoryService.reserveItems(order.items);
});

eventBus.on('OrderPlaced', async (order) => {
  await paymentService.charge(order.userId, order.total);
});

eventBus.on('OrderPlaced', async (order) => {
  await emailService.sendConfirmation(order.userId);
});

// Publish event - all subscribers notified
await eventBus.publish('OrderPlaced', {
  orderId: 123,
  userId: 456,
  items: [{ productId: 1, quantity: 2 }],
  total: 99.99
});`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Best Practices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800"
      >
        <h3 className="text-xl font-semibold mb-4 text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Start with the monolith, decompose when needed</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Use API Gateway for cross-cutting concerns</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Service Mesh for service-to-service communication</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Choose sync for consistency, async for scalability</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
