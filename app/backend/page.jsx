"use client";

import { motion } from "framer-motion";
import ContentCard from "../components/common/ContentCard";
import { Zap, ChevronDown } from "lucide-react";

const backendSections = [
  { name: "Backend Fundamentals", icon: "🌐", href: "/backend/fundamentals", description: "HTTP/HTTPS, REST APIs, JSON, Web Servers, DNS & Networking", gradient: "from-blue-600 to-cyan-600", status: "live" },
  { name: "Databases", icon: "💾", href: "/backend/databases", description: "SQL, NoSQL, Design, Optimization, Transactions & ACID", gradient: "from-purple-600 to-pink-600", status: "live" },
  { name: "Authentication & Security", icon: "🔐", href: "/backend/auth-security", description: "Auth methods, Password security, RBAC, XSS, CSRF, API security", gradient: "from-red-600 to-orange-600", status: "live" },
  { name: "Performance & Scalability", icon: "🚀", href: "/backend/performance-scalability", description: "Caching, Load Balancing, Scaling, CDN, Monitoring", gradient: "from-green-600 to-emerald-600", status: "live" },
  { name: "Async & Real-time", icon: "🔄", href: "/backend/async-realtime", description: "Message Queues, Background Jobs, WebSockets, Event-Driven Architecture", gradient: "from-yellow-600 to-amber-600", status: "live" },
  { name: "Architecture & Design", icon: "🏗️", href: "/backend/architecture-design", description: "Microservices, Design Patterns, Clean Architecture, Domain-Driven Design", gradient: "from-indigo-600 to-purple-600", status: "live" },
  { name: "Cloud & DevOps", icon: "☁️", href: "/backend/cloud-devops", description: "Docker, Kubernetes, CI/CD Pipelines, Cloud Platforms (AWS, Azure, GCP)", gradient: "from-sky-600 to-blue-600", status: "live" },
  { name: "Testing & Quality", icon: "🧪", href: "/backend/testing-quality", description: "Unit Testing, Integration Testing, TDD, Mocking, Performance Testing, Code Quality", gradient: "from-teal-600 to-cyan-600", status: "live" },
  { name: "Observability", icon: "📊", href: "/backend/observability", description: "Logging, Metrics & Monitoring, Distributed Tracing, Error Tracking, Alerting", gradient: "from-violet-600 to-purple-600", status: "live" },
  { name: "Advanced Topics", icon: "🔧", href: "/backend/advanced-topics", description: "GraphQL, gRPC, Search Engines, Rate Limiting, Webhooks, File Storage", gradient: "from-fuchsia-600 to-pink-600", status: "live" },
  { name: "System Design", icon: "🎓", href: "/backend/system-design", description: "Distributed systems design - scalability, availability, consistency, and architecture patterns", gradient: "from-rose-600 to-red-600", status: "live" },
];

export default function BackendPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-violet-500/30">
      {/* Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-violet-600/20 to-transparent blur-[120px]" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 pt-32 pb-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-black uppercase tracking-widest mb-8"
          >
            <Zap size={14} className="fill-violet-400" /> Server-Side Mastery
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6 mb-8"
          >
            <div className="text-8xl filter drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] animate-bounce">🚀</div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
              Backend Engineering
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
          >
            Master the architecture of scalable software. From databases and APIs to distributed systems and cloud infrastructure.
          </motion.p>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 text-slate-500 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore Modules</span>
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div id="topics" className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {backendSections.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <ContentCard 
                title={topic.name}
                description={topic.description}
                icon={topic.icon}
                gradient={topic.gradient}
                href={topic.href}
                status={topic.status}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        :root {
          --mouse-x: 0px;
          --mouse-y: 0px;
        }
      `}</style>
    </div>
  );
}