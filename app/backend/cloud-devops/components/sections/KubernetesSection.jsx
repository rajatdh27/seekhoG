"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function KubernetesSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const overviewCards = [
    {
      id: "pods",
      title: "Pods & Containers",
      icon: "📦",
      description: "Smallest deployable units in Kubernetes",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: "deployments",
      title: "Deployments",
      icon: "🚀",
      description: "Manage replica sets and rolling updates",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "services",
      title: "Services & Networking",
      icon: "🌐",
      description: "Expose and load balance your applications",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "storage",
      title: "Storage & Config",
      icon: "💾",
      description: "Volumes, ConfigMaps, and Secrets",
      color: "from-pink-500 to-red-500"
    }
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "pods", label: "Pods", icon: "📦" },
    { id: "deployments", label: "Deployments", icon: "🚀" },
    { id: "services", label: "Services", icon: "🌐" },
    { id: "storage", label: "Storage", icon: "💾" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">⎈</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Kubernetes Orchestration
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Automate deployment, scaling, and management of containerized applications
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
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
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
          {/* What is Kubernetes */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-blue-600"
            >
              <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                ⎈ What is Kubernetes?
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and operation of application containers. It manages clusters of hosts running containers and provides a framework for resilient distributed systems.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="font-bold text-blue-900 dark:text-blue-100 mb-2">Auto-Scaling</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Scale applications up or down based on demand</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl mb-2">🏥</div>
                  <div className="font-bold text-blue-900 dark:text-blue-100 mb-2">Self-Healing</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Automatically restart failed containers</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-3xl mb-2">⚖️</div>
                  <div className="font-bold text-blue-900 dark:text-blue-100 mb-2">Load Balancing</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Distribute traffic across containers</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Concepts Overview */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              🏗️ Core Components
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {overviewCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveTab(card.id)}
                  className="group cursor-pointer bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{card.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{card.description}</p>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              🏛️ Kubernetes Architecture
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Control Plane (Master)</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="bg-blue-200 dark:bg-blue-800 p-3 rounded text-center text-sm">API Server</div>
                    <div className="bg-blue-200 dark:bg-blue-800 p-3 rounded text-center text-sm">Scheduler</div>
                    <div className="bg-blue-200 dark:bg-blue-800 p-3 rounded text-center text-sm">Controller</div>
                    <div className="bg-blue-200 dark:bg-blue-800 p-3 rounded text-center text-sm">etcd</div>
                  </div>
                </div>
                <div className="text-center text-2xl">↕️</div>
                <div>
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Worker Nodes</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((node) => (
                      <div key={node} className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded">
                        <div className="font-semibold text-center mb-2">Node {node}</div>
                        <div className="space-y-1">
                          <div className="bg-purple-300 dark:bg-purple-700 p-2 rounded text-xs text-center">Pod 1</div>
                          <div className="bg-pink-300 dark:bg-pink-700 p-2 rounded text-xs text-center">Pod 2</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Pods Tab */}
      {activeTab === "pods" && (
        <motion.div
          key="pods"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                📦 Pods - Smallest Deployable Unit
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                A Pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running process and can contain one or more containers that share storage, network, and specifications.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">Shared Network</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">All containers in a pod share IP address</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">Shared Storage</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Volumes are shared across containers</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">Ephemeral</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Pods are temporary, can be replaced</p>
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
                <h4 className="text-xl font-bold text-white">Pod Definition Example</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
    environment: production
spec:
  containers:
  - name: nginx
    image: nginx:1.21
    ports:
    - containerPort: 80
    env:
    - name: ENVIRONMENT
      value: "production"
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
    livenessProbe:
      httpGet:
        path: /
        port: 80
      initialDelaySeconds: 15
      periodSeconds: 10
    readinessProbe:
      httpGet:
        path: /
        port: 80
      initialDelaySeconds: 5
      periodSeconds: 5

# Apply the pod
kubectl apply -f pod.yaml

# View pods
kubectl get pods
kubectl describe pod nginx-pod
kubectl logs nginx-pod
kubectl exec -it nginx-pod -- /bin/bash

# Delete pod
kubectl delete pod nginx-pod`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Deployments Tab */}
      {activeTab === "deployments" && (
        <motion.div
          key="deployments"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-indigo-600 mb-8">
              <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">
                🚀 Deployments - Manage Application Lifecycle
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Deployments provide declarative updates for Pods and ReplicaSets. They manage rolling updates, rollbacks, and ensure the desired number of replicas are running.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Rolling Updates</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Zero-downtime deployments</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Rollback</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Revert to previous versions</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Scaling</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Increase/decrease replicas</p>
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
                <h4 className="text-xl font-bold text-white">Deployment Example with Rolling Update</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web
spec:
  replicas: 3  # Number of pod replicas
  selector:
    matchLabels:
      app: web
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Max pods above desired count
      maxUnavailable: 0  # Max pods unavailable during update
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: nginx:1.21
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"

# Apply deployment
kubectl apply -f deployment.yaml

# View deployments and pods
kubectl get deployments
kubectl get pods -l app=web
kubectl describe deployment web-app

# Scale deployment
kubectl scale deployment web-app --replicas=5

# Update image (rolling update)
kubectl set image deployment/web-app web=nginx:1.22

# Check rollout status
kubectl rollout status deployment/web-app

# View rollout history
kubectl rollout history deployment/web-app

# Rollback to previous version
kubectl rollout undo deployment/web-app

# Rollback to specific revision
kubectl rollout undo deployment/web-app --to-revision=2

# Pause/Resume rollout
kubectl rollout pause deployment/web-app
kubectl rollout resume deployment/web-app`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Services Tab */}
      {activeTab === "services" && (
        <motion.div
          key="services"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-3">
                🌐 Services - Expose Your Applications
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Services provide a stable endpoint to access a set of Pods. They handle load balancing and service discovery, even as Pods are created and destroyed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  type: "ClusterIP",
                  icon: "🔒",
                  desc: "Internal only",
                  use: "Default - only accessible within cluster"
                },
                {
                  type: "NodePort",
                  icon: "🚪",
                  desc: "External via node port",
                  use: "Accessible via node IP:port (30000-32767)"
                },
                {
                  type: "LoadBalancer",
                  icon: "⚖️",
                  desc: "Cloud load balancer",
                  use: "Cloud provider creates external LB"
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-purple-200 dark:border-purple-800"
                >
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{service.type}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{service.desc}</p>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                    <p className="text-xs">{service.use}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💻</span>
                <h4 className="text-xl font-bold text-white">Service Types Examples</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# ClusterIP Service (default)
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  type: ClusterIP
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 80

---
# NodePort Service
apiVersion: v1
kind: Service
metadata:
  name: web-nodeport
spec:
  type: NodePort
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 80
    nodePort: 30080  # Optional, auto-assigned if not specified

---
# LoadBalancer Service
apiVersion: v1
kind: Service
metadata:
  name: web-loadbalancer
spec:
  type: LoadBalancer
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 80

# Apply services
kubectl apply -f service.yaml

# View services
kubectl get services
kubectl describe service web-service

# Test service (from within cluster)
kubectl run test --image=busybox -it --rm -- wget -O- web-service

# Get service endpoints
kubectl get endpoints web-service`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Storage Tab */}
      {activeTab === "storage" && (
        <motion.div
          key="storage"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 p-6 rounded-xl border-l-4 border-pink-600 mb-8">
              <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-100 mb-3">
                💾 Storage, ConfigMaps & Secrets
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Manage persistent storage, configuration, and sensitive data in Kubernetes.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-xl mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💻</span>
                <h4 className="text-xl font-bold text-white">ConfigMap & Secrets</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# ConfigMap - Store configuration
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database.url: "postgres://db:5432/myapp"
  log.level: "info"
  app.properties: |
    theme=dark
    language=en

---
# Secret - Store sensitive data (base64 encoded)
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  db-password: cGFzc3dvcmQxMjM=  # base64 encoded

---
# Using ConfigMap and Secret in Pod
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: myapp:1.0
    env:
    # From ConfigMap
    - name: DATABASE_URL
      valueFrom:
        configMapKeyRef:
          name: app-config
          key: database.url
    # From Secret
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: app-secrets
          key: db-password
    # Mount ConfigMap as volume
    volumeMounts:
    - name: config
      mountPath: /etc/config
  volumes:
  - name: config
    configMap:
      name: app-config

# Create from command line
kubectl create configmap app-config --from-literal=key=value
kubectl create secret generic app-secrets --from-literal=password=secret123`}
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
                <h4 className="text-xl font-bold text-white">Persistent Volumes</h4>
              </div>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# PersistentVolume - Storage resource
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-data
spec:
  capacity:
    storage: 10Gi
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  hostPath:
    path: /mnt/data

---
# PersistentVolumeClaim - Request for storage
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-data
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: standard

---
# Using PVC in Pod
apiVersion: v1
kind: Pod
metadata:
  name: app-with-storage
spec:
  containers:
  - name: app
    image: postgres:14
    volumeMounts:
    - name: data
      mountPath: /var/lib/postgresql/data
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: pvc-data`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
      >
        <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Pods are the smallest unit, Deployments manage them</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Services provide stable networking and load balancing</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Use ConfigMaps for config, Secrets for sensitive data</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400">✓</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">Rolling updates enable zero-downtime deployments</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
