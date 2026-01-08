"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DockerSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const overviewCards = [
    {
      id: "basics",
      title: "Images & Containers",
      icon: "📦",
      description: "Building blocks of Docker - images and running containers",
      color: "from-sky-500 to-blue-500"
    },
    {
      id: "dockerfile",
      title: "Dockerfile",
      icon: "📝",
      description: "Define how to build Docker images",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: "compose",
      title: "Docker Compose",
      icon: "🎼",
      description: "Multi-container applications made easy",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "best-practices",
      title: "Best Practices",
      icon: "⭐",
      description: "Optimize images and improve security",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "basics", label: "Basics", icon: "📦" },
    { id: "dockerfile", label: "Dockerfile", icon: "📝" },
    { id: "compose", label: "Compose", icon: "🎼" },
    { id: "best-practices", label: "Best Practices", icon: "⭐" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl">
          <span className="text-4xl">🐳</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Docker & Containers
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Package applications with all dependencies for consistent deployment
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
                  ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg scale-105"
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
          {/* What is Docker */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 p-8 rounded-xl border-l-4 border-sky-600"
            >
              <h3 className="text-3xl font-bold text-sky-900 dark:text-sky-100 mb-4">
                🐳 What is Docker?
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Docker is a platform for developing, shipping, and running applications in containers. Containers package your application with all its dependencies, ensuring it runs consistently across different environments.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl mb-2">📦</div>
                  <div className="font-bold text-sky-900 dark:text-sky-100 mb-2">Consistency</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Works the same on dev, staging, and production</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-sky-900 dark:text-sky-100 mb-2">Fast Startup</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Containers start in seconds, not minutes</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl mb-2">💡</div>
                  <div className="font-bold text-sky-900 dark:text-sky-100 mb-2">Lightweight</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Share OS kernel, use minimal resources</div>
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
                  className="group cursor-pointer bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{card.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{card.description}</p>
                  <div className="text-sky-600 dark:text-sky-400 font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* VM vs Container Visual */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              🔄 Virtual Machines vs Containers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">💻</span>
                  <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100">Virtual Machines</h4>
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-lg mb-4">
                  <div className="text-center font-mono text-sm space-y-2">
                    <div className="bg-orange-300 dark:bg-orange-700 p-3 rounded">App + OS</div>
                    <div className="bg-orange-300 dark:bg-orange-700 p-3 rounded">App + OS</div>
                    <div className="bg-orange-400 dark:bg-orange-600 p-3 rounded">Hypervisor</div>
                    <div className="bg-orange-500 dark:bg-orange-500 p-3 rounded">Host OS</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">⚠️</span>
                    <span className="text-slate-700 dark:text-slate-300">Heavy - full OS per VM</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">⚠️</span>
                    <span className="text-slate-700 dark:text-slate-300">Slow startup (minutes)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">⚠️</span>
                    <span className="text-slate-700 dark:text-slate-300">High resource usage</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">🐳</span>
                  <h4 className="text-xl font-bold text-green-900 dark:text-green-100">Docker Containers</h4>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg mb-4">
                  <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs mb-3">
                    <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded">App</div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 rounded">App</div>
                    <div className="bg-pink-300 dark:bg-pink-700 p-2 rounded">App</div>
                  </div>
                  <div className="text-center font-mono text-sm space-y-2">
                    <div className="bg-green-400 dark:bg-green-600 p-3 rounded">Docker Engine</div>
                    <div className="bg-green-500 dark:bg-green-500 p-3 rounded">Host OS</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-slate-700 dark:text-slate-300">Lightweight - shares kernel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-slate-700 dark:text-slate-300">Fast startup (seconds)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-slate-700 dark:text-slate-300">Minimal resource usage</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Basics Tab */}
      {activeTab === "basics" && (
        <motion.div
          key="basics"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-sky-600 mb-8">
              <h3 className="text-2xl font-bold text-sky-900 dark:text-sky-100 mb-3">
                📦 Images & Containers
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                <strong>Image:</strong> A read-only template with instructions for creating a container. Think of it as a snapshot or blueprint.<br/>
                <strong>Container:</strong> A running instance of an image. It's isolated, has its own filesystem, networking, and processes.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-sky-700 dark:text-sky-300 mb-2">🖼️ Docker Image</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Immutable, layered filesystem</p>
                  <div className="text-xs space-y-1">
                    <div>• Built from Dockerfile</div>
                    <div>• Stored in registries (Docker Hub)</div>
                    <div>• Versioned with tags</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="font-semibold text-sky-700 dark:text-sky-300 mb-2">▶️ Docker Container</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Running instance of image</p>
                  <div className="text-xs space-y-1">
                    <div>• Has its own network & storage</div>
                    <div>• Can be started/stopped</div>
                    <div>• Isolated from host & other containers</div>
                  </div>
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
                <h4 className="text-xl font-bold text-white">Essential Docker Commands</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# Working with Images
docker pull nginx:latest          # Download image from Docker Hub
docker images                     # List all local images
docker rmi nginx:latest           # Remove image
docker build -t myapp:1.0 .       # Build image from Dockerfile
docker tag myapp:1.0 myapp:latest # Tag image

# Working with Containers
docker run -d -p 8080:80 nginx    # Run container in background
  # -d: detached mode (background)
  # -p: port mapping (host:container)
  # --name: give container a name
  # -e: environment variable

docker ps                         # List running containers
docker ps -a                      # List all containers (including stopped)
docker stop container_id          # Stop container
docker start container_id         # Start stopped container
docker restart container_id       # Restart container
docker rm container_id            # Remove container
docker logs container_id          # View container logs
docker logs -f container_id       # Follow logs (like tail -f)

# Execute commands in running container
docker exec -it container_id bash # Open interactive shell
docker exec container_id ls /app  # Run single command

# Real-world example
docker run -d \\
  --name my-postgres \\
  -e POSTGRES_PASSWORD=secret \\
  -e POSTGRES_DB=myapp \\
  -p 5432:5432 \\
  -v pgdata:/var/lib/postgresql/data \\
  postgres:14

# Explanation:
# -d: run in background
# --name: name it "my-postgres"
# -e: set environment variables
# -p 5432:5432: map port 5432
# -v: persist data in volume "pgdata"`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Dockerfile Tab */}
      {activeTab === "dockerfile" && (
        <motion.div
          key="dockerfile"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                📝 Dockerfile
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                A Dockerfile is a text document containing commands to build a Docker image. Each instruction creates a layer in the image.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">FROM</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Base image to build from</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">RUN</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Execute commands during build</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">COPY</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Copy files into image</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">CMD</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Default command to run</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-xl mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💻</span>
                <h4 className="text-xl font-bold text-white">Node.js Application Dockerfile</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# Use official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nodejs -u 1001
USER nodejs

# Start application
CMD ["node", "server.js"]

# Build and run:
# docker build -t myapp:1.0 .
# docker run -p 3000:3000 myapp:1.0`}
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💻</span>
                <h4 className="text-xl font-bold text-white">Multi-Stage Build (Optimized)</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # Build production assets

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Copy only built files from builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/server.js"]

# Benefits:
# ✅ Smaller final image (no dev dependencies)
# ✅ Faster builds (cached layers)
# ✅ More secure (fewer packages)`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Docker Compose Tab */}
      {activeTab === "compose" && (
        <motion.div
          key="compose"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-indigo-600 mb-8">
              <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">
                🎼 Docker Compose
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Docker Compose is a tool for defining and running multi-container Docker applications. Use a YAML file to configure your application's services, networks, and volumes.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">📋</div>
                  <div className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Define</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">All services in docker-compose.yml</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Single Command</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Start entire stack with `docker-compose up`</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🔗</div>
                  <div className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Networking</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Automatic service discovery</p>
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
                <h4 className="text-xl font-bold text-white">Full-Stack Application Example</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# docker-compose.yml
version: '3.8'

services:
  # Frontend - React App
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:8080
    depends_on:
      - backend

  # Backend - Node.js API
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis

  # Database - PostgreSQL
  db:
    image: postgres:14-alpine
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  # Cache - Redis
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  # Reverse Proxy - Nginx
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - frontend
      - backend

volumes:
  postgres_data:

# Commands:
# docker-compose up            # Start all services
# docker-compose up -d         # Start in background
# docker-compose down          # Stop and remove containers
# docker-compose logs -f       # View logs
# docker-compose ps            # List running services
# docker-compose exec backend sh  # Execute command in service`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Best Practices Tab */}
      {activeTab === "best-practices" && (
        <motion.div
          key="best-practices"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-3">
                ⭐ Docker Best Practices
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Follow these best practices to create secure, efficient, and maintainable Docker images.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Use Official Base Images",
                  icon: "✅",
                  desc: "Start with official, maintained images",
                  example: "FROM node:18-alpine"
                },
                {
                  title: "Use .dockerignore",
                  icon: "🚫",
                  desc: "Exclude unnecessary files from build context",
                  example: "node_modules, .git, *.md"
                },
                {
                  title: "Minimize Layers",
                  icon: "📉",
                  desc: "Combine RUN commands to reduce layers",
                  example: "RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*"
                },
                {
                  title: "Use Multi-Stage Builds",
                  icon: "🏗️",
                  desc: "Separate build and runtime environments",
                  example: "FROM node AS builder ... FROM node:alpine"
                },
                {
                  title: "Don't Run as Root",
                  icon: "🔒",
                  desc: "Create and use non-root user",
                  example: "USER nodejs"
                },
                {
                  title: "Use Specific Tags",
                  icon: "🏷️",
                  desc: "Avoid :latest, use specific versions",
                  example: "FROM node:18.16.0-alpine"
                }
              ].map((practice, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-purple-200 dark:border-purple-800"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{practice.icon}</span>
                    <h4 className="font-bold text-purple-900 dark:text-purple-100">{practice.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{practice.desc}</p>
                  <div className="bg-slate-900 p-2 rounded">
                    <code className="text-xs text-green-400">{practice.example}</code>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-sky-200 dark:border-sky-800"
      >
        <h3 className="text-xl font-semibold mb-4 text-sky-900 dark:text-sky-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <span className="text-sky-600 dark:text-sky-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Containers ensure consistency across environments</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-sky-600 dark:text-sky-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Use Docker Compose for multi-container apps</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-sky-600 dark:text-sky-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Multi-stage builds reduce image size</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-sky-600 dark:text-sky-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Always use specific image tags, not :latest</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
