"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const backendSections = [
  {
    category: "🎯 Fundamentals",
    topics: [
      { name: "Backend Fundamentals", icon: "🌐", href: "/backend/fundamentals", description: "HTTP/HTTPS, REST APIs, JSON, Web Servers, DNS & Networking", status: "live" },
    ],
  },
  {
    category: "💾 Databases",
    topics: [
      { name: "Databases", icon: "💾", href: "/backend/databases", description: "SQL, NoSQL, Design, Optimization, Transactions & ACID", status: "live" },
    ],
  },
  {
    category: "🔐 Authentication & Security",
    topics: [
      { name: "Authentication & Security", icon: "🔐", href: "/backend/auth-security", description: "Auth methods, Password security, RBAC, XSS, CSRF, API security", status: "live" },
    ],
  },
  {
    category: "🚀 Performance & Scalability",
    topics: [
      { name: "Performance & Scalability", icon: "🚀", href: "/backend/performance-scalability", description: "Caching, Load Balancing, Scaling, CDN, Monitoring", status: "live" },
    ],
  },
  {
    category: "🔄 Async & Real-time",
    topics: [
      { name: "Async & Real-time", icon: "🔄", href: "/backend/async-realtime", description: "Message Queues, Background Jobs, WebSockets, Event-Driven Architecture", status: "live" },
    ],
  },
  {
    category: "🏗️ Architecture & Design",
    topics: [
      { name: "Architecture & Design", icon: "🏗️", href: "/backend/architecture-design", description: "Microservices, Design Patterns, Clean Architecture, Domain-Driven Design", status: "live" },
    ],
  },
  {
    category: "☁️ Cloud & DevOps",
    topics: [
      { name: "Cloud & DevOps", icon: "☁️", href: "/backend/cloud-devops", description: "Docker, Kubernetes, CI/CD Pipelines, Cloud Platforms (AWS, Azure, GCP)", status: "live" },
    ],
  },
  {
    category: "🧪 Testing & Quality",
    topics: [
      { name: "Testing & Quality", icon: "🧪", href: "/backend/testing-quality", description: "Unit Testing, Integration Testing, TDD, Mocking, Performance Testing, Code Quality", status: "live" },
    ],
  },
  {
    category: "📊 Observability",
    topics: [
      { name: "Logging", icon: "📝", href: "/backend/logging", description: "Structured logging, Log aggregation, ELK stack" },
      { name: "Metrics & Monitoring", icon: "📈", href: "/backend/metrics", description: "Prometheus, Grafana, Application metrics" },
      { name: "Distributed Tracing", icon: "🔍", href: "/backend/tracing", description: "Jaeger, Zipkin, OpenTelemetry" },
      { name: "Error Tracking", icon: "🐛", href: "/backend/error-tracking", description: "Sentry, Rollbar, Error monitoring" },
      { name: "Alerting", icon: "🚨", href: "/backend/alerting", description: "Alert rules, On-call, Incident response" },
    ],
  },
  {
    category: "🔧 Advanced Topics",
    topics: [
      { name: "GraphQL", icon: "📊", href: "/backend/graphql", description: "Schema, Resolvers, Apollo, Federation" },
      { name: "gRPC", icon: "⚡", href: "/backend/grpc", description: "Protocol Buffers, Streaming, Service mesh" },
      { name: "Search Engines", icon: "🔍", href: "/backend/search-engines", description: "Elasticsearch, Full-text search, Relevance" },
      { name: "Rate Limiting", icon: "🚦", href: "/backend/rate-limiting", description: "Token bucket, Leaky bucket, Algorithms" },
      { name: "Webhook Systems", icon: "🪝", href: "/backend/webhooks", description: "Event delivery, Retry logic, Security" },
      { name: "File Storage", icon: "📁", href: "/backend/file-storage", description: "S3, Object storage, File uploads" },
    ],
  },
  {
    category: "🎓 System Design",
    topics: [
      { name: "System Design Basics", icon: "🏗️", href: "/backend/system-design-basics", description: "Requirements, Capacity estimation" },
      { name: "Scalability Patterns", icon: "📈", href: "/backend/scalability-patterns", description: "Vertical vs Horizontal, Patterns" },
      { name: "Availability & Reliability", icon: "💪", href: "/backend/availability", description: "SLA, Fault tolerance, Redundancy" },
      { name: "Consistency Models", icon: "🔄", href: "/backend/consistency", description: "CAP theorem, Eventual consistency" },
      { name: "Design Case Studies", icon: "📚", href: "/backend/case-studies", description: "URL shortener, Twitter, Instagram" },
    ],
  },
];

export default function BackendPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-7xl mb-6">🚀</div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
              Backend Development
            </h1>
            <p className="text-xl md:text-2xl text-violet-100 max-w-4xl mx-auto mb-8">
              Master backend engineering from fundamentals to advanced system design - databases, APIs, microservices, and scalability
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-lg border border-white/20">
                <div className="text-3xl font-bold">80+</div>
                <div className="text-sm text-violet-200">Topics Covered</div>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-lg border border-white/20">
                <div className="text-3xl font-bold">11</div>
                <div className="text-sm text-violet-200">Categories</div>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-lg border border-white/20">
                <div className="text-3xl font-bold">0→∞</div>
                <div className="text-sm text-violet-200">Beginner to Expert</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {backendSections.map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIdx * 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-slate-100 flex items-center gap-3">
                <span>{section.category}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.topics.map((topic, topicIdx) => (
                  <motion.div
                    key={topicIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: topicIdx * 0.05 }}
                  >
                    <Link href={topic.href}>
                      <div className="group h-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 relative">
                        {topic.status === 'live' && (
                          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                            LIVE
                          </div>
                        )}
                        <div className="flex items-start gap-4">
                          <div className="text-4xl group-hover:scale-110 transition-transform">
                            {topic.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-100 group-hover:text-violet-400 transition-colors mb-2">
                              {topic.name}
                            </h3>
                            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                              {topic.description}
                            </p>
                            <div className={`mt-3 text-xs font-semibold ${topic.status === 'live' ? 'text-green-400' : 'text-violet-400'} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                              {topic.status === 'live' ? (
                                <>
                                  Learn Now ✨
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </>
                              ) : (
                                <>
                                  Coming Soon
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-violet-900/30 border border-violet-500/30 rounded-2xl px-8 py-6">
            <div className="text-3xl mb-3">🚧</div>
            <p className="text-lg font-semibold text-violet-400 mb-2">
              Content Under Development
            </p>
            <p className="text-sm text-slate-400 max-w-2xl">
              We're building comprehensive guides for each topic. Check back soon for detailed tutorials, code examples, and interactive demonstrations!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
